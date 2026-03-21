---
id: scope-logic-analyzer
name: Scope Logic Analyzer
description: Test equipment integration for automated measurements and protocol decoding using oscilloscopes and logic analyzers.
category: Research
requires: []
examples:
  - Automate a rise time measurement for CH1 on my oscilloscope.
  - How do I set up an I2C protocol decoder on my logic analyzer?
---

# Oscilloscope/Logic Analyzer Skill

## Overview

This skill provides test equipment integration for signal analysis, enabling automated measurements, protocol decoding, and timing verification using oscilloscopes and logic analyzers.

## Instruction
- Configure oscilloscope parameters including channel scaling, trigger levels, and time-base settings via automated SCPI commands.
- Execute automated signal integrity measurements such as rise/fall times, jitter analysis, and eye diagram generation.
- Set up logic analyzer captures, defining sample rates, capture depths, and trigger conditions for digital bus analysis.
- Implement protocol decoding for standard interfaces including I2C, SPI, UART, and CAN/LIN.
- Perform timing validation for hardware bring-up, focusing on setup/hold time verification and propagation delays.
- Export waveform data and capture logs for documentation and remote debugging of hardware issues.

## When to Use
- When automating repetitive signal measurements during hardware validation or EMI pre-compliance testing.
- When debugging complex serial communication protocols or verifying real-time timing performance in embedded systems.
- When needing to correlate analog waveforms with digital logic states during system-level troubleshooting.

## Output
- Automated measurement reports including signal timing and amplitude statistics.
- Decoded protocol logs and timing diagrams highlighting bus events or errors.
- Technical advice on equipment configuration and optimal probe placement for high-fidelity signal capture.

## Capabilities

### Oscilloscope Operations
- Channel configuration
- Trigger setup and management
- Measurement automation
- Waveform capture and export
- Math and FFT operations
- Cursor measurements
- Mask testing

### Logic Analyzer Operations
- Digital channel configuration
- Protocol decoder setup
- Trigger configuration
- Capture depth management
- State vs timing mode
- Parallel bus capture

### Signal Measurements
- Rise/fall time measurement
- Frequency and period
- Duty cycle analysis
- Amplitude measurements
- Pulse width measurement
- Signal integrity metrics
- Eye diagram analysis

### Protocol Decoding
- I2C protocol decoding
- SPI protocol decoding
- UART/RS-232 decoding
- CAN/LIN decoding
- Custom protocol definitions

### Timing Analysis
- Setup and hold time verification
- Propagation delay measurement
- Clock jitter analysis
- Timing margin verification
- Glitch detection

### FFT and Frequency Analysis
- Spectrum analysis
- Harmonic analysis
- THD calculation
- EMI pre-compliance
- Noise floor analysis

### Instrument Integration
- Keysight/Agilent instruments
- Tektronix oscilloscopes
- Rigol oscilloscopes
- Saleae Logic analyzers
- Sigrok/PulseView
- SCPI command automation

## Target Processes

Signal quality validation
Initial signal verification
Timing validation

## Dependencies

- Oscilloscope software/drivers
- Logic analyzer software (Saleae Logic, Sigrok)
- VISA/SCPI libraries
- Protocol decoder plugins

## Usage Context

This skill is invoked when tasks require:
- Signal integrity verification
- Timing analysis and validation
- Protocol debugging
- Hardware validation
- EMI pre-compliance testing

