---
id: simpy
name: Simpy
description: Process-based discrete-event simulation framework in Python for modeling systems with shared resources and time-based events.
category: Research
requires: []
examples:
  - Model a manufacturing production line using SimPy discrete-event simulation.
  - Simulate a hospital emergency room to analyze patient waiting times.
---

# SimPy - Discrete-Event Simulation

## Overview

SimPy is a process-based discrete-event simulation framework based on standard Python. Use SimPy to model systems where entities (customers, vehicles, packets, etc.) interact with each other and compete for shared resources (servers, machines, bandwidth, etc.) over time.

**Core capabilities:**
- Process modeling using Python generator functions
- Shared resource management (servers, containers, stores)
- Event-driven scheduling and synchronization
- Real-time simulations synchronized with wall-clock time
- Comprehensive monitoring and data collection

## When to Use This Skill

Use the SimPy skill when:

1. **Modeling discrete-event systems** - Systems where events occur at irregular intervals
2. **Resource contention** - Entities compete for limited resources (servers, machines, staff)
3. **Queue analysis** - Studying waiting lines, service times, and throughput
4. **Process optimization** - Analyzing manufacturing, logistics, or service processes
5. **Network simulation** - Packet routing, bandwidth allocation, latency analysis
6. **Capacity planning** - Determining optimal resource levels for desired performance
7. **System validation** - Testing system behavior before implementation

**Not suitable for:**
- Continuous simulations with fixed time steps (consider SciPy ODE solvers)
- Independent processes without resource sharing
- Pure mathematical optimization (consider SciPy optimize)

## Instruction
- Identify the core components of the system to be simulated, including entities, processes, and shared resources (e.g., servers, machines).
- Construct the simulation model using Python generator functions to define entity behaviors and event-driven logic.
- Implement resource management by utilizing SimPy objects like `Resource`, `Container`, or `Store` to handle contention.
- Configure data collection hooks to monitor system metrics such as queue lengths, waiting times, and total throughput.
- Execute the simulation over a defined time horizon, ensuring reproducibility through controlled random seeding.
- Analyze and visualize simulation logs to identify system bottlenecks and evaluate process optimization strategies.

## Output
- Executable Python simulation code with defined process logic and resource constraints.
- Quantitative performance reports detailing average wait times, resource utilization, and throughput.
- Visual summaries of simulation results and actionable recommendations for system improvements.


## Core Concepts

### 1. Environment

The simulation environment manages time and schedules events.


### 2. Processes

Processes are defined using Python generator functions (functions with `yield` statements).


### 3. Events

Events are the fundamental mechanism for process synchronization. Processes yield events and resume when those events are triggered.


## Resources

### Resource Types Summary

| Resource Type | Use Case |
|---------------|----------|
| Resource | Limited capacity (servers, machines) |
| PriorityResource | Priority-based queuing |
| PreemptiveResource | High-priority can interrupt low-priority |
| Container | Bulk materials (fuel, water) |
| Store | Python object storage (FIFO) |
| FilterStore | Selective item retrieval |
| PriorityStore | Priority-ordered items |


## Common Simulation Patterns

### Pattern 1: Customer-Server Queue


### Pattern 2: Producer-Consumer

### Pattern 3: Parallel Task Execution

## Workflow Guide

### Step 1: Define the System

Identify:
- **Entities**: What moves through the system? (customers, parts, packets)
- **Resources**: What are the constraints? (servers, machines, bandwidth)
- **Processes**: What are the activities? (arrival, service, departure)
- **Metrics**: What to measure? (wait times, utilization, throughput)

### Step 2: Implement Process Functions

Create generator functions for each process type:


### Step 3: Set Up Monitoring

Use monitoring utilities to collect data. 

### Step 4: Run and Analyze


## Advanced Features

### Process Interaction

Processes can interact through events, process yields, and interrupts. See `references/process-interaction.md` for detailed patterns.

**Key mechanisms:**
- **Event signaling**: Shared events for coordination
- **Process yields**: Wait for other processes to complete
- **Interrupts**: Forcefully resume processes for preemption

### Real-Time Simulations

Synchronize simulation with wall-clock time for hardware-in-the-loop or interactive applications. See `references/real-time.md`.

### Comprehensive Monitoring

Monitor processes, resources, and events.
- State variable tracking
- Resource monkey-patching
- Event tracing
- Statistical collection


## Best Practices

1. **Generator functions**: Always use `yield` in process functions
2. **Resource context managers**: Use `with resource.request() as req:` for automatic cleanup
3. **Reproducibility**: Set `random.seed()` for consistent results
4. **Monitoring**: Collect data throughout simulation, not just at the end
5. **Validation**: Compare simple cases with analytical solutions
6. **Documentation**: Comment process logic and parameter choices
7. **Modular design**: Separate process logic, statistics, and configuration

## Common Pitfalls

1. **Forgetting yield**: Processes must yield events to pause
2. **Event reuse**: Events can only be triggered once
3. **Resource leaks**: Use context managers or ensure release
4. **Blocking operations**: Avoid Python blocking calls in processes
5. **Time units**: Stay consistent with time unit interpretation
6. **Deadlocks**: Ensure at least one process can make progress

## Example Use Cases

- **Manufacturing**: Machine scheduling, production lines, inventory management
- **Healthcare**: Emergency room simulation, patient flow, staff allocation
- **Telecommunications**: Network traffic, packet routing, bandwidth allocation
- **Transportation**: Traffic flow, logistics, vehicle routing
- **Service operations**: Call centers, retail checkout, appointment scheduling
- **Computer systems**: CPU scheduling, memory management, I/O operations
