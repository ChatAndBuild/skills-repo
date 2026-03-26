---
id: fluidsim
name: Fluidsim
description: Python framework for high-performance computational fluid dynamics (CFD) simulations using pseudospectral methods.
category: Research
requires: []
examples:
  - Set up a 2D Navier-Stokes simulation with a 256x256 resolution in Fluidsim.
  - How do I calculate and plot energy decay from my Fluidsim simulation results?
---

# FluidSim

## Overview

FluidSim is an object-oriented Python framework for high-performance computational fluid dynamics (CFD) simulations. It provides solvers for periodic-domain equations using pseudospectral methods with FFT, delivering performance comparable to Fortran/C++ while maintaining Python's ease of use.

**Key strengths**:
- Multiple solvers: 2D/3D Navier-Stokes, shallow water, stratified flows
- High performance: Pythran/Transonic compilation, MPI parallelization
- Complete workflow: Parameter configuration, simulation execution, output analysis
- Interactive analysis: Python-based post-processing and visualization

## Instruction
- Configure the simulation parameters by defining the physical domain, grid resolution (e.g., 256x256), and viscosity settings.
- Select the appropriate solver for the physical problem, such as `ns2d` for turbulence, `ns2d.strat` for stratified flows, or `sw1l` for shallow water.
- Execute the simulation using time-stepping controls, optionally enabling MPI for parallel computing on high-performance clusters.
- Set up custom initial conditions or forcing types (e.g., time-correlated random forcing) to drive the desired dynamics.
- Perform post-processing by loading simulation results to calculate and plot energy decay, enstrophy spectra, or physical fields like vorticity.
- Utilize the `AttributeError` feedback system during configuration to catch typos in parameter names before starting long-running simulations.

## When to Use
- When setting up and running high-performance 2D or 3D CFD simulations using pseudospectral methods in Python.
- When analyzing oceanic/atmospheric stratified flows or rotating geophysical fluid systems.
- When conducting parametric studies on turbulence or validating numerical solvers against analytical solutions like the Taylor-Green vortex.

## Output
- Simulation state files in HDF5 format containing physical fields like velocity and pressure.
- Time-series plots of spatial means and 1D/2D energy spectra derived from the simulation data.
- Visualizations of enstrophy and vorticity fields to illustrate the development of flow structures.

## Core Capabilities

### 1. Installation and Setup

### 2. Running Simulations

Standard workflow consists of five steps:

**Step 1**: Import solver

**Step 2**: Create and configure parameters

**Step 3**: Instantiate simulation

**Step 4**: Execute

**Step 5**: Analyze results

### 3. Available Solvers

Choose solver based on physical problem:

**2D Navier-Stokes** (`ns2d`): 2D turbulence, vortex dynamics


**3D Navier-Stokes** (`ns3d`): 3D turbulence, realistic flows

**Stratified flows** (`ns2d.strat`, `ns3d.strat`): Oceanic/atmospheric flows


**Shallow water** (`sw1l`): Geophysical flows, rotating systems

### 4. Parameter Configuration

Parameters are organized hierarchically and accessed via dot notation:

**Domain and resolution**:

**Physical parameters**:

**Time stepping**:


**Initial conditions**:


**Output settings**:

### 5. Output and Analysis

FluidSim produces multiple output types automatically saved during simulation:

**Physical fields**: Velocity, vorticity in HDF5 format


**Spatial means**: Time series of volume-averaged quantities


**Spectra**: Energy and enstrophy spectra


**Load previous simulations**:


### 6. Advanced Features

**Custom forcing**: Maintain turbulence or drive specific dynamics


**Custom initial conditions**: Define fields in script


**MPI parallelization**: Run on multiple processors

**Parametric studies**: Run multiple simulations with different parameters

## Common Use Cases

### 2D Turbulence Study


### Stratified Flow Simulation


### High-Resolution 3D Simulation with MPI


### Taylor-Green Vortex Validation
