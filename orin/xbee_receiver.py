#!/usr/bin/env python3
import serial
import struct
import time
from dataclasses import dataclass

@dataclass
class GamepadState:
    left_stick_x: int
    left_stick_y: int
    right_stick_x: int
    right_stick_y: int
    left_trigger: int
    right_trigger: int
    dpad: int
    buttons: int
    stick_buttons: int
    onscreen_buttons1: int
    onscreen_buttons2: int
    motor_enabled: int
    selected_joint: int
    joint_position: int
    mode: str

class XBeeReceiver:
    PACKET_START = 0xAA
    PACKET_END = 0x55
    RESPONSE_START = 0xBB
    RESPONSE_END = 0x66
    PACKET_SIZE = 19  # Start + Seq + 15 data bytes + Checksum + End
    RESPONSE_SIZE = 5  # Start + Mode + Status + Checksum + End

    def __init__(self, port="/dev/tty.usbserial-A50285BI", baudrate=57600):
        self.serial = serial.Serial(port, baudrate)
        self.receive_buffer = bytearray()
        self.in_packet = False
        self.last_packet_time = 0
        self.last_response_time = 0
        self.packet_count = 0
        self.current_mode = 'P'  # Start in Standby mode

    def send_mode_response(self):
        current_time = time.time()
        # Send mode response every 100ms
        if current_time - self.last_response_time >= 0.1:
            response = bytearray([
                self.RESPONSE_START,
                ord(self.current_mode),
                0,  # Status byte (reserved)
                0,  # Will be set to checksum
                self.RESPONSE_END
            ])
            # Calculate checksum (XOR of mode and status bytes)
            response[3] = response[1] ^ response[2]
            self.serial.write(response)
            self.last_response_time = current_time

    def read_packet(self):
        while True:
            current_time = time.time()
            
            # Send periodic mode response
            self.send_mode_response()
            
            if self.serial.in_waiting:
                byte = self.serial.read()[0]
                
                # Start of new packet
                if byte == self.PACKET_START:
                    self.receive_buffer = bytearray([byte])
                    self.in_packet = True
                    continue

                # Store byte if we're in a packet
                if self.in_packet:
                    self.receive_buffer.append(byte)
                    
                    # Process packet if complete
                    if len(self.receive_buffer) == self.PACKET_SIZE:
                        if self.process_packet():
                            self.packet_count += 1
                            self.last_packet_time = current_time
                        self.in_packet = False
                        self.receive_buffer = bytearray()

    def process_packet(self) -> bool:
        # Validate start and end bytes
        if self.receive_buffer[0] != self.PACKET_START or self.receive_buffer[-1] != self.PACKET_END:
            print("Invalid packet markers")
            return False

        # Validate checksum
        checksum = 0
        for i in range(1, len(self.receive_buffer) - 2):
            checksum ^= self.receive_buffer[i]
        
        if checksum != self.receive_buffer[-2]:
            print("Checksum mismatch")
            return False

        # Extract gamepad state
        data = self.receive_buffer[1:-2]  # Remove start, checksum, and end bytes
        state = GamepadState(
            left_stick_x=data[1],
            left_stick_y=data[2],
            right_stick_x=data[3],
            right_stick_y=data[4],
            left_trigger=data[5],
            right_trigger=data[6],
            dpad=data[7],
            buttons=data[8],
            stick_buttons=data[9],
            onscreen_buttons1=data[10],
            onscreen_buttons2=data[11],
            motor_enabled=data[12],
            selected_joint=data[13],
            joint_position=data[14],
            mode=chr(data[15])
        )

        # Update current mode from received packet
        requested_mode = state.mode
        if requested_mode != self.current_mode:
            print(f"Mode change request: {self.current_mode} -> {requested_mode}")
            self.current_mode = requested_mode

        self.display_state(state)
        return True

    def display_state(self, state: GamepadState):
        # Clear screen
        print("\033[2J\033[H")  # ANSI escape codes to clear screen and move cursor to home
        
        print("Steam Duck Controller Status")
        print("---------------------------")
        
        # Analog sticks (show as percentages)
        print(f"Left Stick:  X: {state.left_stick_x * 100 // 255}% Y: {state.left_stick_y * 100 // 255}%")
        print(f"Right Stick: X: {state.right_stick_x * 100 // 255}% Y: {state.right_stick_y * 100 // 255}%")
        
        # Triggers
        print(f"Triggers: L: {state.left_trigger * 100 // 255}% R: {state.right_trigger * 100 // 255}%")
        
        # D-Pad
        print("\nD-Pad:")
        print(f"  UP: {'ON ' if state.dpad & 0x01 else 'OFF'}  "
              f"DOWN: {'ON ' if state.dpad & 0x02 else 'OFF'}  "
              f"LEFT: {'ON ' if state.dpad & 0x04 else 'OFF'}  "
              f"RIGHT: {'ON ' if state.dpad & 0x08 else 'OFF'}")
        
        # Face buttons
        print("\nButtons:")
        print(f"  A: {'ON ' if state.buttons & 0x01 else 'OFF'}  "
              f"B: {'ON ' if state.buttons & 0x02 else 'OFF'}  "
              f"X: {'ON ' if state.buttons & 0x04 else 'OFF'}  "
              f"Y: {'ON ' if state.buttons & 0x08 else 'OFF'}")
        print(f"  LB: {'ON ' if state.buttons & 0x10 else 'OFF'}  "
              f"RB: {'ON ' if state.buttons & 0x20 else 'OFF'}  "
              f"Back: {'ON ' if state.buttons & 0x40 else 'OFF'}  "
              f"Start: {'ON ' if state.buttons & 0x80 else 'OFF'}")
        
        # Stick clicks
        print(f"  L3: {'ON ' if state.stick_buttons & 0x01 else 'OFF'}  "
              f"R3: {'ON ' if state.stick_buttons & 0x02 else 'OFF'}")
        
        # On-screen buttons
        print("\nOn-screen Buttons:")
        print("  Buttons 1-8:", end=" ")
        for i in range(8):
            print(f"{'ON ' if state.onscreen_buttons1 & (1 << i) else 'OFF'}", end=" ")
        print("\n  Buttons 9-10:", end=" ")
        for i in range(2):
            print(f"{'ON ' if state.onscreen_buttons2 & (1 << i) else 'OFF'}", end=" ")
        
        # Motor control
        print("\n\nMotor Control:")
        print(f"  Enabled: {'YES' if state.motor_enabled else 'NO'}")
        print(f"  Selected Joint: {state.selected_joint}")
        print(f"  Position: {state.joint_position * 100 // 255}%")
        
        # Mode
        print(f"\nMode: {state.mode}")
        
        # Stats
        print(f"\nPacket Count: {self.packet_count}")
        if self.last_packet_time > 0:
            print(f"Last Packet: {(time.time() - self.last_packet_time) * 1000:.0f} ms ago")

def main():
    try:
        receiver = XBeeReceiver()
        print("Steam Duck Controller Ready")
        print("Waiting for packets...")
        receiver.read_packet()
    except KeyboardInterrupt:
        print("\nExiting...")
    except serial.SerialException as e:
        print(f"Error opening serial port: {e}")
        print("Make sure the XBee is connected and you have permission to access the port")
        print("You may need to run: sudo chmod 666 /dev/ttyUSB0")

if __name__ == "__main__":
    main()
