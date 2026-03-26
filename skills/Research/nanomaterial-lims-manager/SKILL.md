---
id: nanomaterial-lims-manager
name: Nanomaterial LIMS Manager
description: Laboratory Information Management System skill for nanomaterial sample tracking, synthesis parameter logging, and data management.
category: Research
requires: []
examples:
  - Register a new nanoparticle sample and log its synthesis parameters.
  - Track the chain of custody and storage location for sample ID NP-2026.
---

# Nanomaterial LIMS Manager

## Purpose

The Nanomaterial LIMS Manager skill provides comprehensive laboratory information management for nanomaterial research, enabling systematic sample tracking, data linking, and quality assurance throughout the development lifecycle.

## Capabilities

- Sample tracking and chain of custody
- Synthesis parameter logging
- Characterization data linking
- Batch genealogy tracking
- Quality control checkpoints
- Regulatory documentation

## Usage Guidelines

### LIMS Operations

1. **Sample Management**
   - Register new samples
   - Track sample locations
   - Maintain chain of custody

2. **Data Integration**
   - Link synthesis records
   - Associate characterization data
   - Build batch genealogy

3. **Quality Management**
   - Define QC checkpoints
   - Track specifications
   - Generate certificates

## Process Integration

- All synthesis and characterization processes
- Nanomaterial Scale-Up and Process Transfer

## Input Schema

```json
{
  "operation": "register|track|query|report",
  "sample_id": "string",
  "sample_type": "nanoparticle|thin_film|device",
  "metadata": {
    "project": "string",
    "synthesized_by": "string",
    "synthesis_date": "string"
  }
}
```

## Output Schema

```json
{
  "sample_record": {
    "sample_id": "string",
    "status": "active|consumed|archived",
    "location": "string",
    "linked_data": [{
      "data_type": "string",
      "record_id": "string"
    }]
  },
  "genealogy": {
    "parent_batch": "string",
    "derived_samples": ["string"]
  },
  "qc_status": {
    "checkpoints_passed": "number",
    "checkpoints_total": "number",
    "status": "pass|fail|pending"
  }
}
```
