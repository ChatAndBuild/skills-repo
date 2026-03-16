---
id: flowio
name: FlowIO
description: Parse FCS files v2.0-3.1 to extract events as NumPy arrays and read metadata for flow cytometry preprocessing.
category: Research
requires: []
examples:
  - Extract event data from this FCS 3.1 file as a NumPy array.
  - Convert the channels in my flow cytometry file to a pandas DataFrame.
---

# FlowIO

Parse FCS (Flow Cytometry Standard) files v2.0-3.1. Extract events as NumPy arrays, read metadata/channels, convert to CSV/DataFrame, for flow cytometry data preprocessing.

## Instruction
- Parse FCS files (versions 2.0 to 3.1) to extract raw event data while maintaining the integrity of the data scale.
- Convert channel information and fluorescence intensities into structured NumPy arrays for high-performance computation.
- Read and summarize metadata including channel names, compensation matrices, and instrument settings.
- Export processed event data into accessible formats like pandas DataFrames or CSV files for integration with downstream analysis tools.
- Ensure that the extraction process accounts for data transformations (logarithmic vs. linear) as specified in the FCS header.

## When to Use
- When preprocessing raw flow cytometry data from FCS files for machine learning or statistical analysis.
- When needing to extract metadata and channel lists from legacy (v2.0) or modern (v3.1) flow cytometry datasets.
- When converting scientific flow cytometry files into standard Python data structures like arrays or DataFrames.

## Output
- High-fidelity NumPy arrays containing the raw event data from the specified FCS file.
- Metadata summaries outlining the experimental conditions, channel parameters, and detection settings.
- Conversion logs or DataFrames ready for further gating and population analysis workflows.