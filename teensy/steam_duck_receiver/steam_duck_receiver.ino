#include <Arduino.h>

class XBeeReceiver {
private:
    static constexpr uint8_t RX2_PIN = 15;   // Connect XBee DOUT to this pin
    static constexpr uint8_t TX2_PIN = 14;   // Connect XBee DIN to this pin
    static constexpr uint8_t LED_PIN = 13;   // Built-in LED

    static constexpr uint8_t PACKET_START = 0xAA;
    static constexpr uint8_t PACKET_END = 0x55;
    static constexpr uint8_t RESPONSE_START = 0xBB;
    static constexpr uint8_t RESPONSE_END = 0x66;
    static constexpr size_t PACKET_SIZE = 19;  // Start + Seq + 15 data bytes + Checksum + End
    static constexpr size_t RESPONSE_SIZE = 5;  // Start + Mode + Status + Checksum + End
    
    uint8_t receiveBuffer[PACKET_SIZE];
    size_t receiveIndex = 0;
    bool inPacket = false;
    uint32_t lastByteTime = 0;
    uint32_t lastPacketTime = 0;
    uint32_t lastStatusTime = 0;
    uint32_t packetCount = 0;
    uint8_t lastSequence = 0;
    bool needsFullDisplay = true;
    char currentMode = 'P';  // Start in Perch mode
    char requestedMode = 0;  // For pending mode changes
    uint32_t modeChangeStartTime = 0;  // When mode change was requested

    struct GamepadState {
        uint8_t leftStickX;
        uint8_t leftStickY;
        uint8_t rightStickX;
        uint8_t rightStickY;
        uint8_t leftTrigger;
        uint8_t rightTrigger;
        uint8_t dpad;        // bits: 0=Up, 1=Down, 2=Left, 3=Right
        uint8_t buttons;     // bits: 0=A,1=B,2=X,3=Y,4=LB,5=RB,6=Back,7=Start
        uint8_t stickButtons; // bits: 0=LeftStick,1=RightStick
        uint8_t onScreenButtons1; // First 8 onscreen buttons
        uint8_t onScreenButtons2; // Last 2 onscreen buttons
        uint8_t motorEnabled;
        uint8_t selectedJoint;
        uint8_t jointPosition;
        char mode;
    } gamepadState;

    void clearScreen() {
        Serial.write(27);    // ESC command
        Serial.print("[2J"); // clear screen
        Serial.write(27);
        Serial.print("[H");  // cursor to home
    }

    void displayGamepadState() {
        clearScreen();
        Serial.println("Steam Duck Controller Status");
        Serial.println("---------------------------");
        
        // Analog sticks (show as percentages)
        Serial.printf("Left Stick:  X: %3d%% Y: %3d%%\n", 
            (gamepadState.leftStickX * 100) / 255,
            (gamepadState.leftStickY * 100) / 255);
        Serial.printf("Right Stick: X: %3d%% Y: %3d%%\n", 
            (gamepadState.rightStickX * 100) / 255,
            (gamepadState.rightStickY * 100) / 255);
        
        // Triggers
        Serial.printf("Triggers: L: %3d%% R: %3d%%\n",
            (gamepadState.leftTrigger * 100) / 255,
            (gamepadState.rightTrigger * 100) / 255);
        
        // D-Pad
        Serial.println("\nD-Pad:");
        Serial.printf("  UP: %s  DOWN: %s  LEFT: %s  RIGHT: %s\n",
            (gamepadState.dpad & 0x01) ? "ON " : "OFF",
            (gamepadState.dpad & 0x02) ? "ON " : "OFF",
            (gamepadState.dpad & 0x04) ? "ON " : "OFF",
            (gamepadState.dpad & 0x08) ? "ON " : "OFF");
        
        // Face buttons
        Serial.println("\nButtons:");
        Serial.printf("  A: %s  B: %s  X: %s  Y: %s\n",
            (gamepadState.buttons & 0x01) ? "ON " : "OFF",
            (gamepadState.buttons & 0x02) ? "ON " : "OFF",
            (gamepadState.buttons & 0x04) ? "ON " : "OFF",
            (gamepadState.buttons & 0x08) ? "ON " : "OFF");
        Serial.printf("  LB: %s  RB: %s  Back: %s  Start: %s\n",
            (gamepadState.buttons & 0x10) ? "ON " : "OFF",
            (gamepadState.buttons & 0x20) ? "ON " : "OFF",
            (gamepadState.buttons & 0x40) ? "ON " : "OFF",
            (gamepadState.buttons & 0x80) ? "ON " : "OFF");
        
        // Stick clicks
        Serial.printf("  L3: %s  R3: %s\n",
            (gamepadState.stickButtons & 0x01) ? "ON " : "OFF",
            (gamepadState.stickButtons & 0x02) ? "ON " : "OFF");
        
        // On-screen buttons
        Serial.println("\nOn-screen Buttons:");
        Serial.printf("  Buttons 1-8: %s\n", 
            (gamepadState.onScreenButtons1 & 0x01) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x02) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x04) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x08) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x10) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x20) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x40) ? "ON " : "OFF",
            (gamepadState.onScreenButtons1 & 0x80) ? "ON " : "OFF");
        Serial.printf("  Buttons 9-10: %s %s\n", 
            (gamepadState.onScreenButtons2 & 0x01) ? "ON " : "OFF",
            (gamepadState.onScreenButtons2 & 0x02) ? "ON " : "OFF");
        
        // Motor control
        Serial.println("\nMotor Control:");
        Serial.printf("  Enabled: %s\n", gamepadState.motorEnabled ? "YES" : "NO");
        Serial.printf("  Selected Joint: %d\n", gamepadState.selectedJoint);
        Serial.printf("  Position: %d%%\n", (gamepadState.jointPosition * 100) / 255);
        
        // Mode
        Serial.printf("\nMode: %c\n", gamepadState.mode);
        
        // Stats
        Serial.printf("\nPacket Count: %lu\n", packetCount);
        if (lastByteTime > 0) {
            Serial.printf("Last Packet: %lu ms ago\n", (millis() - lastPacketTime));
        }
    }

    void sendResponse() {
        uint8_t response[RESPONSE_SIZE];
        response[0] = RESPONSE_START;
        response[1] = currentMode;
        response[2] = 0; // Status byte (reserved for future use)
        
        // Calculate checksum
        uint8_t checksum = 0;
        for (int i = 1; i < RESPONSE_SIZE - 2; i++) {
            checksum ^= response[i];
        }
        response[RESPONSE_SIZE - 2] = checksum;
        response[RESPONSE_SIZE - 1] = RESPONSE_END;
        
        // Send response
        Serial2.write(response, RESPONSE_SIZE);
    }

    void processPacket() {
        if (receiveIndex != PACKET_SIZE) return;

        // Validate start and end bytes
        if (receiveBuffer[0] != PACKET_START || receiveBuffer[PACKET_SIZE-1] != PACKET_END) {
            Serial.println("Invalid packet markers");
            return;
        }

        // Validate checksum
        uint8_t checksum = 0;
        for (int i = 1; i < PACKET_SIZE-2; i++) {
            checksum ^= receiveBuffer[i];
        }
        if (checksum != receiveBuffer[PACKET_SIZE-2]) {
            Serial.println("Checksum mismatch");
            return;
        }

        // Update gamepad state
        uint8_t sequence = receiveBuffer[1];
        gamepadState.leftStickX = receiveBuffer[2];
        gamepadState.leftStickY = receiveBuffer[3];
        gamepadState.rightStickX = receiveBuffer[4];
        gamepadState.rightStickY = receiveBuffer[5];
        gamepadState.leftTrigger = receiveBuffer[6];
        gamepadState.rightTrigger = receiveBuffer[7];
        gamepadState.dpad = receiveBuffer[8];
        gamepadState.buttons = receiveBuffer[9];
        gamepadState.stickButtons = receiveBuffer[10];
        gamepadState.onScreenButtons1 = receiveBuffer[11];
        gamepadState.onScreenButtons2 = receiveBuffer[12];
        gamepadState.motorEnabled = receiveBuffer[13];
        gamepadState.selectedJoint = receiveBuffer[14];
        gamepadState.jointPosition = receiveBuffer[15];
        gamepadState.mode = (char)receiveBuffer[16];

        // Check for mode change request
        if (gamepadState.mode != currentMode) {
            requestedMode = gamepadState.mode;
            modeChangeStartTime = millis();
        }

        // Send response after processing each packet
        sendResponse();

        // Update timing and counts
        lastPacketTime = millis();
        packetCount++;

        // Display updated state (every 100ms)
        if (millis() - lastStatusTime > 100 || needsFullDisplay) {
            displayGamepadState();
            lastStatusTime = millis();
            needsFullDisplay = false;
        }

        // Toggle LED to show activity
        digitalToggleFast(LED_PIN);

        // Reset for next packet
        receiveIndex = 0;
    }

public:
    void begin() {
        // Initialize pins
        pinMode(LED_PIN, OUTPUT);
        digitalWriteFast(LED_PIN, LOW);
        
        // Start serial ports
        Serial.begin(115200);  // Debug console
        Serial2.begin(57600);  // XBee
        
        // Configure Serial2 pins
        Serial2.setRX(RX2_PIN);
        Serial2.setTX(TX2_PIN);
        
        clearScreen();
        Serial.println("Steam Duck Controller Ready");
    }

    void update() {
        // Read available bytes
        while (Serial2.available()) {
            uint8_t byte = Serial2.read();
            lastByteTime = millis();
            
            // Start of new packet
            if (byte == PACKET_START) {
                receiveIndex = 0;
                inPacket = true;
            }
            
            // Store byte if we're in a packet
            if (inPacket && receiveIndex < PACKET_SIZE) {
                receiveBuffer[receiveIndex++] = byte;
                
                // Process packet if complete
                if (receiveIndex == PACKET_SIZE) {
                    processPacket();
                    inPacket = false;
                    receiveIndex = 0;
                }
            }
        }
        
        // Reset if we haven't received data for too long
        if (lastByteTime > 0 && millis() - lastByteTime > 1000) {
            inPacket = false;
            receiveIndex = 0;
            needsFullDisplay = true;
        }
    }
};

XBeeReceiver xbeeReceiver;

void setup() {
    xbeeReceiver.begin();
}

void loop() {
    xbeeReceiver.update();
}
