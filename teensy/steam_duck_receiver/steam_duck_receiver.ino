#define PACKET_SIZE 25
#define START_BYTE 0x0F
#define LED_PIN 13
#define RX2_PIN 7
#define TX2_PIN 8
#define SERIAL_BAUD 115200
#define SERIAL2_BAUD 9600

// Compact struct to minimize memory usage
struct GamepadData {
  uint8_t left_x, left_y, right_x, right_y;
  uint8_t left_trigger, right_trigger;
  uint8_t face_buttons;    // A,B,X,Y,LB,RB
  uint8_t special_buttons; // Back,Start,L3,R3
  uint8_t dpad_buttons;   // Up,Down,Left,Right
  uint8_t screen_buttons[2];
} gamepad;

uint8_t packet_buffer[PACKET_SIZE];
int buffer_index = 0;
bool packet_started = false;
char output_buffer[100];
unsigned long last_byte_time = 0;
unsigned long last_packet_time = 0;
unsigned long packets_received = 0;

void parsePacket() {
  gamepad.left_x = packet_buffer[1];
  gamepad.left_y = packet_buffer[2];
  gamepad.right_x = packet_buffer[3];
  gamepad.right_y = packet_buffer[4];
  gamepad.left_trigger = packet_buffer[5];
  gamepad.right_trigger = packet_buffer[6];
  gamepad.face_buttons = packet_buffer[7];
  gamepad.special_buttons = packet_buffer[8];
  gamepad.dpad_buttons = packet_buffer[9];
  gamepad.screen_buttons[0] = packet_buffer[10];
  gamepad.screen_buttons[1] = packet_buffer[11];
}

void printGamepadData() {
  // Format: LX,LY RX,RY T:L,R F:xx S:xx D:xx
  snprintf(output_buffer, sizeof(output_buffer), 
    "\r%3d,%3d %3d,%3d T:%2d,%2d F:%02x S:%02x D:%02x    ", 
    gamepad.left_x, gamepad.left_y,
    gamepad.right_x, gamepad.right_y,
    gamepad.left_trigger, gamepad.right_trigger,
    gamepad.face_buttons,
    gamepad.special_buttons,
    gamepad.dpad_buttons
  );
  Serial.print(output_buffer);
}

void setup() {
  Serial.begin(SERIAL_BAUD);
  Serial2.begin(SERIAL2_BAUD);
  pinMode(LED_PIN, OUTPUT);
  pinMode(RX2_PIN, INPUT);
  pinMode(TX2_PIN, OUTPUT);
  Serial.println("Steam Duck Receiver Started");
}

void loop() {
  static unsigned long lastDebugTime = 0;
  
  while (Serial2.available() > 0) {
    uint8_t incoming = Serial2.read();
    last_byte_time = millis();
    digitalWrite(LED_PIN, HIGH);
    
    // Debug incoming bytes
    if (millis() - lastDebugTime > 1000) {  // Print debug every second
      Serial.print("Received byte: 0x");
      Serial.println(incoming, HEX);
      lastDebugTime = millis();
    }
    
    if (incoming == START_BYTE && !packet_started) {
      packet_started = true;
      buffer_index = 0;
      Serial.println("Start byte received");
    }
    
    if (packet_started) {
      packet_buffer[buffer_index++] = incoming;
      
      // Debug packet progress
      Serial.print("Buffered byte ");
      Serial.print(buffer_index);
      Serial.print(" of ");
      Serial.print(PACKET_SIZE);
      Serial.print(": 0x");
      Serial.println(incoming, HEX);
      
      if (buffer_index == PACKET_SIZE) {
        packets_received++;
        last_packet_time = millis();
        parsePacket();
        printGamepadData();
        packet_started = false;
        buffer_index = 0;
        Serial.println("Full packet received and parsed");
      } else if (buffer_index > PACKET_SIZE) {
        packet_started = false;
        buffer_index = 0;
        Serial.println("Buffer overflow - resetting");
      }
    }
  }
  
  if (millis() - last_byte_time > 50) {
    digitalWrite(LED_PIN, LOW);
  }
  
  if (packet_started && (millis() - last_byte_time > 100)) {
    packet_started = false;
    buffer_index = 0;
    Serial.println("Packet timeout - resetting");
  }
}
