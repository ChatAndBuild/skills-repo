---
id: nbodykit-cosmology-analyzer
name: NBodyKit Cosmology Analyzer
description: Step-by-step guidance for NBodyKit cosmology analysis workflows, including power spectrum calculation and catalog loading.
category: Research
requires: []
examples:
  - Help me set up a power spectrum analysis using nbodykit.
  - How do I load a large cosmological simulation catalog into nbodykit?
---

# NBodyKit Cosmology Analyzer

Support nbodykit cosmology workflows with clear steps and best practices.

## Instruction
- Load large-scale cosmological simulation catalogs (e.g., FOF, Halo) using distributed formats like BigFile or HDF5.
- Initialize a cosmological model by defining parameters such as Omega-m, h, and n-s using the Cosmology class.
- Paint discrete particle or galaxy catalogs onto a 3D mesh using interpolation kernels like CIC (Cloud-in-Cell).
- Calculate clustering statistics, specifically the matter power spectrum ($P(k)$) or the two-point correlation function ($\xi(r)$).
- Apply survey geometry and selection functions to correct for observational biases in galaxy survey data.
- Perform multipole analysis to measure Redshift Space Distortions (RSD) and extract growth rate information.
- Conduct mock catalog analysis to estimate covariance matrices for cosmological parameter constraints.

## When to Use
- When performing clustering analysis on large-scale structure (LSS) data from simulations or galaxy surveys.
- When calculating power spectra and correlation functions to constrain cosmological parameters.
- When processing massive astronomical catalogs that require parallelized MPI-based computation.

## Output
- Calculated power spectrum or correlation function data tables and visualizations.
- Summarized cosmology analysis plans including parameter configurations and mesh properties.
- Detailed reports on clustering measurements and identified Redshift Space Distortion signals.