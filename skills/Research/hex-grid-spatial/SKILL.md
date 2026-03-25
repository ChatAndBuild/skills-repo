---
id: hex-grid-spatial
name: Hex Grid Spatial
description: Step-by-step guidance for hexagonal grid spatial analysis workflows and best practices.
category: Research
requires: []
examples:
  - Help me set up a hexagonal grid for spatial analysis of urban data.
  - What are the best practices for hex-based spatial indexing?
---

# Hex Grid Spatial

Support hex grid spatial workflows with clear steps and best practices.

## Instruction
- Determine the geographic scope and the appropriate resolution level for the hexagonal grid based on the analysis scale.
- Utilize specialized spatial indexing libraries (e.g., H3, S2) to generate a seamless hexagonal tessellation over the target area.
- Implement data aggregation logic to map discrete point data (e.g., GPS pings, urban assets) onto the hexagonal cells.
- Perform spatial smoothing or interpolation to account for boundary effects and ensure continuous surface analysis.
- Conduct neighborhood analysis using hexagonal adjacency properties to identify clusters or spatial outliers.
- Optimize query performance by leveraging hexagonal hierarchical structures for multi-resolution data browsing.

## When to Use
- When performing urban data analysis where hexagonal grids are preferred over squares to minimize sampling bias.
- When needing to aggregate large-scale location data into discrete spatial bins for heatmap generation or clustering.
- When implementing hierarchical spatial indexing for efficient geographic search and retrieval.

## Output
- A summarized spatial analysis plan including grid resolution and aggregation methods.
- Step-by-step guidance for generating and populating hexagonal grids with source data.
- Visual recommendations and precautions for interpreting hexagonal spatial trends.