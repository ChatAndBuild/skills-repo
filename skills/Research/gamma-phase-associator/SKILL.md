---
id: gamma-phase-associator
name: Gamma Phase Associator
description: Step-by-step guidance for gamma phase associator workflows and best practices in seismic data analysis.
category: Research
requires: []
examples:
  - Provide a step-by-step guide for gamma phase associator workflows.
  - What are the best practices for phase association in seismic research?
---
# Gamma Phase Associator

Support gamma phase associator workflows with clear steps and best practices.

## Instruction
- Identify the seismic event detection task and the available phase pick data (P-wave and S-wave arrivals).
- Select the appropriate velocity model and association parameters (e.g., time window, spatial constraints) for the target region.
- Run the Gamma phase associator to link discrete seismic picks into cohesive earthquake events.
- Refine the initial event locations and origin times based on the probability distributions of the associated picks.
- Evaluate the quality of the association using residuals, pick counts, and uncertainty metrics.
- Export the associated event catalogs in standard formats for downstream seismological analysis or earthquake monitoring.

## When to Use
- When needing to automate the association of seismic phase picks with discrete earthquake events.
- When building earthquake catalogs from dense seismic network data.
- When performing real-time seismic monitoring where high-speed phase association is required.

## Output
- A linked seismic event catalog containing origin times, locations, and associated phase information.
- Statistical summaries of the association performance, including pick residuals and event count.
- Actionable recommendations for adjusting association thresholds based on the resulting catalog quality.