#include <Arduino.h>

class XBeeReceiver {
private:
    static constexpr uint8_t RX2_PIN = 15;   // Connect XBee DOUT to this pin
    static constexpr uint8_t TX2_PIN = 14;   // Connect XBee DIN to this pin
    static constexpr uint8_t LED_PIN = 13;   // Built-in LED

    static constexpr uint8_t PACKET_START = 0xAA;
    static constexpr uint8_t PACKET_END = 0x55;
    static constexpr size_t PACKET_SIZE = 16;  // Start + 14 data bytes + End
    
    uint8_t receiveBuffer[PACKET_SIZE];
    size_t receiveIndex = 0;
    bool inPacket = false;
    uint32_t lastByteTime = 0;
    uint32_t lastPacketTime = 0;
    uint32_t lastStatusTime = 0;
    uint32_t packetCount = 0;
    bool needsFullDisplay = true;
    char currentMode = 'P';  // Start in Perch mode
    char requestedMode = 0;  // For pending mode changes
    uint32_t modeChangeStartTime = 0;  // When mode change was requested

    void clearScreen() {
        Serial.write(27);    // ESC command
        Serial.print("[2J"); // clear screen
        Serial.write(27);
        Serial.print("[H");  // cursor to home
    }

    void sendStatusPacket() {
        // Create a JSON string with the current state
        char jsonBuffer[256];
        snprintf(jsonBuffer, sizeof(jsonBuffer),
            "{\"mode\":\"%c\",\"requested_mode\":\"%c\",\"motors\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"sensors\":[{\"name\":\"imu\",\"roll\":0,\"pitch\":0,\"yaw\":0}]}\n",
            currentMode,
            requestedMode ? requestedMode : currentMode
        );
        
        // Send the JSON string over both Serial ports
        Serial.write(jsonBuffer);  // For debug monitor
        Serial2.write(jsonBuffer); // For XBee
        Serial2.flush();
    }

    void checkMode() {
        // Check if there's a pending mode change
        if (requestedMode != 0) {
            if (millis() - modeChangeStartTime >= 1000) {  // 1 second delay
                currentMode = requestedMode;
                requestedMode = 0;  // Clear the request
                needsFullDisplay = true;  // Force full display update
                showStatus();  // Update debug display
                sendStatusPacket();  // Send status packet after mode change
            }
            return;
        }

        // Check for new mode change request in the packet
        if (receiveIndex >= PACKET_SIZE) {  // Only if we have a complete packet
            char newMode = receiveBuffer[15];  // Mode is in byte 15
            if (newMode != currentMode && (newMode == 'P' || newMode == 'S' || newMode == 'A')) {
                requestedMode = newMode;
                modeChangeStartTime = millis();
                needsFullDisplay = true;  // Force full display update
                showStatus();  // Update debug display
                sendStatusPacket();  // Send status packet immediately to acknowledge request
            }
        }
    }

    void showStatus() {
        if (needsFullDisplay) {
            clearScreen();
            needsFullDisplay = false;
        } else {
            Serial.write(27);
            Serial.print("[H");  // cursor to home
        }

        // Status header
        Serial.println("=== Controller Status ===");
        Serial.print("Packets/sec: "); 
        Serial.print(packetCount);
        Serial.print("   Mode: ");
        Serial.print(currentMode);
        if (requestedMode) {
            Serial.print(" (changing to ");
            Serial.print(requestedMode);
            Serial.print(" in ");
            int remainingTime = 1000 - (millis() - modeChangeStartTime);
            Serial.print(remainingTime);
            Serial.print("ms)");
        }
        Serial.println();

        // Analog sticks (as percentages)
        Serial.print("Left Stick:  X: ");
        Serial.print(map(receiveBuffer[1], 0, 255, -100, 100));
        Serial.print("%\tY: ");
        Serial.print(map(receiveBuffer[2], 0, 255, -100, 100));
        Serial.print("%\tClick: ");
        Serial.println(receiveBuffer[9] & 0x01 ? "ON" : "OFF");

        Serial.print("Right Stick: X: ");
        Serial.print(map(receiveBuffer[3], 0, 255, -100, 100));
        Serial.print("%\tY: ");
        Serial.print(map(receiveBuffer[4], 0, 255, -100, 100));
        Serial.print("%\tClick: ");
        Serial.println(receiveBuffer[9] & 0x02 ? "ON" : "OFF");
        Serial.println();

        // Triggers
        Serial.print("Triggers: L: ");
        Serial.print(map(receiveBuffer[5], 0, 255, 0, 100));
        Serial.print("%\tR: ");
        Serial.print(map(receiveBuffer[6], 0, 255, 0, 100));
        Serial.println("%");
        Serial.println();

        // D-Pad
        Serial.println("D-Pad:");
        Serial.print("       ");
        Serial.println(receiveBuffer[7] & 0x01 ? "UP" : "  ");
        Serial.print(receiveBuffer[7] & 0x04 ? "LEFT" : "    ");
        Serial.print("   ");
        Serial.println(receiveBuffer[7] & 0x02 ? "RIGHT" : "     ");
        Serial.print("      ");
        Serial.println(receiveBuffer[7] & 0x02 ? "DOWN" : "    ");
        Serial.println();

        // Face Buttons
        Serial.println("Face Buttons:");
        Serial.print("       ");
        Serial.println(receiveBuffer[8] & 0x08 ? "Y" : " ");
        Serial.print(receiveBuffer[8] & 0x02 ? "X" : " ");
        Serial.print("   ");
        Serial.println(receiveBuffer[8] & 0x04 ? "B" : " ");
        Serial.print("       ");
        Serial.println(receiveBuffer[8] & 0x01 ? "A" : " ");
        Serial.println();

        // Other Buttons
        Serial.println("Other Buttons:");
        Serial.print("LB: "); Serial.print(receiveBuffer[8] & 0x10 ? "ON " : "OFF");
        Serial.print("\tRB: "); Serial.println(receiveBuffer[8] & 0x20 ? "ON" : "OFF");
        Serial.print("Back: "); Serial.print(receiveBuffer[8] & 0x40 ? "ON " : "OFF");
        Serial.print("\tStart: "); Serial.println(receiveBuffer[8] & 0x80 ? "ON" : "OFF");
        Serial.println();

        // On-screen Buttons
        Serial.println("\nOn-screen Buttons:");
        uint8_t buttons1 = receiveBuffer[10];
        uint8_t buttons2 = receiveBuffer[11];
        
        if (buttons1 & 0x01) Serial.println("Perch");
        if (buttons1 & 0x02) Serial.println("Standby");
        if (buttons1 & 0x04) Serial.println("Active");
        if (buttons1 & 0x08) Serial.println("Button 4");
        if (buttons1 & 0x10) Serial.println("Button 5");
        if (buttons1 & 0x20) Serial.println("Button 6");
        if (buttons1 & 0x40) Serial.println("Button 7");
        if (buttons1 & 0x80) Serial.println("Button 8");
        if (buttons2 & 0x01) Serial.println("Button 9");
        if (buttons2 & 0x02) Serial.println("Button 10");
        Serial.println("\n");
    }

public:
    void begin() {
        Serial.begin(115200);  // USB Serial for debug
        while (!Serial && millis() < 3000) {
            delay(100);
        }
        
        pinMode(LED_PIN, OUTPUT);
        
        Serial.println("\nXBee Controller Monitor");
        Serial.println("Starting up in Perch Mode...");
        
        // Start XBee serial at 57600 baud
        Serial2.begin(57600);
        
        // Send initial status immediately
        delay(100);  // Brief delay to let XBee initialize
        sendStatusPacket();
    }
    
    void update() {
        uint32_t now = millis();
        
        // Check for connection timeout
        if (now - lastByteTime > 1000) {  // No data for 1 second
            if (currentMode != 'Q') {
                currentMode = 'Q';
                requestedMode = 0;  // Clear any pending mode change
                needsFullDisplay = true;
                showStatus();
                sendStatusPacket();  // Immediately send disconnected status
            }
        }
        
        // Send status packet every 100ms for more responsive UI
        if (now - lastStatusTime >= 100) {
            lastStatusTime = now;
            sendStatusPacket();
        }
        
        // Check for mode changes
        checkMode();
        
        // Update packet counter
        static uint32_t lastCountTime = 0;
        if (now - lastCountTime >= 1000) {
            lastCountTime = now;
            needsFullDisplay = true;
            packetCount = 0;
        }
        
        // Reset packet if we haven't received data for a while
        if (inPacket && (now - lastByteTime > 100)) {
            inPacket = false;
            receiveIndex = 0;
        }
        
        // Process any received bytes
        while (Serial2.available()) {
            uint8_t byte = Serial2.read();
            lastByteTime = now;
            
            if (!inPacket) {
                if (byte == PACKET_START) {
                    inPacket = true;
                    receiveIndex = 0;
                    receiveBuffer[receiveIndex++] = byte;
                    digitalWrite(LED_PIN, HIGH);
                }
            } else {
                receiveBuffer[receiveIndex++] = byte;
                
                if (receiveIndex >= PACKET_SIZE) {
                    if (receiveBuffer[PACKET_SIZE-1] == PACKET_END) {
                        packetCount++;
                        checkMode();
                        showStatus();
                    }
                    
                    inPacket = false;
                    digitalWrite(LED_PIN, LOW);
                }
            }
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
