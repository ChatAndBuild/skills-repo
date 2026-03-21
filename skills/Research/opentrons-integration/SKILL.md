---
id: opentrons-integration
name: Opentrons Integration
description: Write Opentrons Protocol API v2 protocols in Python for automated liquid handling and hardware module control.
category: Research
requires: []
examples:
  - Write an Opentrons Protocol API v2 protocol for serial dilutions.
  - How do I control hardware modules like the thermocycler in Opentrons?
---

# Opentrons Integration

## Overview

Opentrons is a Python-based lab automation platform for Flex and OT-2 robots. Write Protocol API v2 protocols for liquid handling, control hardware modules (heater-shaker, thermocycler), manage labware, for automated pipetting workflows.

## When to Use This Skill

This skill should be used when:
- Writing Opentrons Protocol API v2 protocols in Python
- Automating liquid handling workflows on Flex or OT-2 robots
- Controlling hardware modules (temperature, magnetic, heater-shaker, thermocycler)
- Setting up labware configurations and deck layouts
- Implementing complex pipetting operations (serial dilutions, plate replication, PCR setup)
- Managing tip usage and optimizing protocol efficiency
- Working with multi-channel pipettes for 96-well plate operations
- Simulating and testing protocols before robot execution

## Core Capabilities

### 1. Protocol Structure and Metadata

Every Opentrons protocol follows a standard structure:

**Key elements:**
- Import `protocol_api` from `opentrons`
- Define `metadata` dict with protocolName, author, description, apiLevel
- Optional `requirements` dict for robot type and API version
- Implement `run()` function receiving `ProtocolContext` as parameter
- All protocol logic goes inside the `run()` function

### 2. Loading Hardware

**Loading Instruments (Pipettes):**

**Loading Labware:**

**Loading Modules:**


### 3. Liquid Handling Operations


### 4. Accessing Wells and Locations

### 5. Hardware Module Control

### 6. Liquid Tracking and Labeling

### 7. Protocol Control and Utilities

### 8. Multi-Channel and 8-Channel Pipetting

### 9. Common Protocol Patterns

## Best Practices

1. **Always specify API level**: Use the latest stable API version in metadata
2. **Use meaningful labels**: Label labware for easier identification in logs
3. **Check tip availability**: Ensure sufficient tips for protocol completion
4. **Add comments**: Use `protocol.comment()` for debugging and logging
5. **Simulate first**: Always test protocols in simulation before running on robot
6. **Handle errors gracefully**: Add pauses for manual intervention when needed
7. **Consider timing**: Use delays when protocols require incubation periods
8. **Track liquids**: Use liquid tracking for better setup validation
9. **Optimize tip usage**: Use `new_tip='once'` when appropriate to save tips
10. **Control flow rates**: Adjust flow rates for viscous or volatile liquids

## Troubleshooting

**Common Issues:**

- **Out of tips**: Verify tip rack capacity matches protocol requirements
- **Labware collisions**: Check deck layout for spatial conflicts
- **Volume errors**: Ensure volumes don't exceed well or pipette capacities
- **Module not responding**: Verify module is properly connected and firmware is updated
- **Inaccurate volumes**: Calibrate pipettes and check for air bubbles
- **Protocol fails in simulation**: Check API version compatibility and labware definitions

## Instruction
- Define the protocol metadata and load the required labware (plates, racks, reservoirs) onto the deck.
- Configure pipettes by specifying types and loading them into the appropriate mount (left/right).
- Implement hardware module control commands for integrated devices like the Thermocycler, Magnetic Module, or Heater-Shaker.
- Define complex liquid handling operations, including serial dilutions, plate replication, and PCR setup, using loops for efficiency.
- Optimize pipetting performance by adjusting flow rates, implementing blow-outs, and managing tip usage strategies (e.g., `new_tip='once'`).
- Utilize `protocol.comment()` and delays for incubation steps to provide feedback and maintain experimental timing.
- Run the protocol through the Opentrons simulation environment to verify deck layout and volume accuracy before robot execution.


## Output
- Production-ready Python protocol files (API v2) for Opentrons robots.
- Simulation logs and deck layout summaries to validate protocol safety.
- Technical tips for liquid tracking and hardware optimization for specific experimental needs.