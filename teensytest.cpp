#include <Arduino.h>

#define HEADER 0xAA
#define END_MARKER 0xBB
#define SALT 0x55
#define PACKET_SIZE 12 // Packet size for incoming data
#define MOTOR_PACKET_SIZE 44 // Motor data packet size: 1 header + 14 motors (3 bytes each) + checksum + end marker

struct MotorData {
  uint8_t temperature;
  uint16_t angle;
};

MotorData motors[14]; // Array for motor telemetry data

void processPacket(uint8_t *data);
void sendMotorData();
bool validatePacket(const uint8_t *data);

void setup() {
  Serial.begin(115200); // Debugging
  Serial2.begin(115200); // Communication with the gamepad
  Serial.println("Teensy Serial Decoder Started");

  // Initialise motors with example data
  for (int i = 0; i < 14; i++) {
    motors[i].temperature = 25 + (i % 10);
    motors[i].angle = 1000 + (i * 10);
  }
}

void loop() {
  static uint8_t buffer[PACKET_SIZE];
  static size_t index = 0;

  // Handle incoming data from Serial2
  while (Serial2.available()) {
    uint8_t byte = Serial2.read();

    if (index == 0 && byte != HEADER) {
      continue; // Wait for header byte
    }

    buffer[index++] = byte;

    if (index == PACKET_SIZE) { // Complete packet received
      if (validatePacket(buffer)) {
        processPacket(buffer);
        sendMotorData(); // Only send motor data if packet is valid
      } else {
        Serial.println("Invalid packet.");
      }
      index = 0; // Reset for the next packet
    }
  }
}

void sendMotorData() {
  uint8_t packet[MOTOR_PACKET_SIZE];
  packet[0] = HEADER;

  int packetIndex = 1;
  for (int i = 0; i < 14; i++) {
    packet[packetIndex++] = motors[i].temperature;
    packet[packetIndex++] = highByte(motors[i].angle);
    packet[packetIndex++] = lowByte(motors[i].angle);
  }

  uint8_t checksum = 0;
  for (int i = 0; i < MOTOR_PACKET_SIZE - 2; i++) {
    checksum ^= packet[i];
  }
  checksum ^= SALT;

  packet[MOTOR_PACKET_SIZE - 2] = checksum;
  packet[MOTOR_PACKET_SIZE - 1] = END_MARKER;

  Serial2.write(packet, MOTOR_PACKET_SIZE);
}

bool validatePacket(const uint8_t *data) {
  if (data[0] != HEADER || data[PACKET_SIZE - 1] != END_MARKER) {
    return false; // Invalid structure
  }

  uint8_t calculatedChecksum = 0;
  for (size_t i = 0; i < PACKET_SIZE - 2; i++) {
    calculatedChecksum ^= data[i];
  }
  calculatedChecksum ^= SALT;

  return calculatedChecksum == data[PACKET_SIZE - 2];
}

void processPacket(uint8_t *data) {
  Serial.println("Valid packet received.");

  int16_t axes[4];
  for (int i = 0; i < 4; i++) {
    axes[i] = data[1 + i] - 128;
  }

  uint16_t buttonBitfield = data[5] | (data[6] << 8);
  uint8_t analogButton7 = data[7];
  uint8_t analogButton8 = data[8];
  uint8_t screenButtonBits = data[9];

  Serial.println("Axis Values:");
  for (int i = 0; i < 4; i++) {
    Serial.print("Axis ");
    Serial.print(i + 1);
    Serial.print(": ");
    Serial.println(axes[i]);
  }

  Serial.println("Gamepad Button States:");
  for (int i = 0; i < 16; i++) {
    if (buttonBitfield & (1 << i)) {
      Serial.print("Button ");
      Serial.print(i + 1);
      Serial.println(": Pressed");
    }
  }

  Serial.print("Analog Button 7: ");
  Serial.println(analogButton7);
  Serial.print("Analog Button 8: ");
  Serial.println(analogButton8);

  Serial.println("Screen Button States:");
  for (int i = 0; i < 8; i++) {
    if (screenButtonBits & (1 << i)) {
      Serial.print("Screen Button ");
      Serial.print(i + 1);
      Serial.println(": Pressed");
    }
  }
}
