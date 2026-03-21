---
id: neuropixels-analysis
name: Neuropixels Analysis
description: Neuropixels neural recording analysis including data loading, preprocessing, motion correction, and Kilosort4 spike sorting.
category: Research
requires: []
examples:
  - Preprocess a SpikeGLX recording including filtering and common average referencing.
  - Run Kilosort4 spike sorting on my Neuropixels 2.0 data and compute quality metrics.
---

# Neuropixels Data Analysis

## Overview

Comprehensive toolkit for analyzing Neuropixels high-density neural recordings using current best practices from SpikeInterface, Allen Institute, and International Brain Laboratory (IBL). Supports the full workflow from raw data to publication-ready curated units.

## When to Use This Skill

This skill should be used when:
- Working with Neuropixels recordings (.ap.bin, .lf.bin, .meta files)
- Loading data from SpikeGLX, Open Ephys, or NWB formats
- Preprocessing neural recordings (filtering, CAR, bad channel detection)
- Detecting and correcting motion/drift in recordings
- Running spike sorting (Kilosort4, SpykingCircus2, Mountainsort5)
- Computing quality metrics (SNR, ISI violations, presence ratio)
- Curating units using Allen/IBL criteria
- Creating visualizations of neural data
- Exporting results to Phy or NWB

## Instruction
- Load raw Neuropixels data from SpikeGLX or Open Ephys formats, ensuring the binary (.bin) and metadata (.meta) files are paired.
- Implement preprocessing steps including high-pass filtering, common average referencing (CAR), and bad channel detection.
- Perform motion correction and drift estimation to align neural signals across the duration of the recording.
- Execute automated spike sorting using Kilosort4 or specialized sorters like SpykingCircus2, selecting the appropriate GPU resources.
- Compute unit quality metrics such as SNR (Signal-to-Noise Ratio), ISI violations, and presence ratio for each sorted cluster.
- Apply AI-driven or manual curation based on Allen Institute or IBL criteria to label units as "Good," "Noise," or "MUA".
- Export curated results to Phy for manual inspection or NWB for standardized long-term data storage.

## Output
- Preprocessed recording files and motion correction/drift reports.
- Spike sorting results containing identified units, spike times, and waveforms.
- Quality metric summaries and final curation labels for all neural units.

## Supported Hardware & Formats

| Probe | Electrodes | Channels | Notes |
|-------|-----------|----------|-------|
| Neuropixels 1.0 | 960 | 384 | Requires phase_shift correction |
| Neuropixels 2.0 (single) | 1280 | 384 | Denser geometry |
| Neuropixels 2.0 (4-shank) | 5120 | 384 | Multi-region recording |

| Format | Extension | Reader |
|--------|-----------|--------|
| SpikeGLX | `.ap.bin`, `.lf.bin`, `.meta` | `si.read_spikeglx()` |
| Open Ephys | `.continuous`, `.oebin` | `si.read_openephys()` |
| NWB | `.nwb` | `si.read_nwb()` |




## Standard Analysis Workflow

### 1. Preprocessing


### 2. Check and Correct Drift

### 3. Spike Sorting

### 4. Postprocessing


### 5. Curation


### 6. AI-Assisted Curation (For Uncertain Units)


### 7. Generate Analysis Report


### 8. Export Results


## Common Pitfalls and Best Practices

1. **Always check drift** before spike sorting - drift > 10μm significantly impacts quality
2. **Use phase_shift** for Neuropixels 1.0 probes (not needed for 2.0)
3. **Save preprocessed data** to avoid recomputing - use `rec.save(folder='preprocessed/')`
4. **Use GPU** for Kilosort4 - it's 10-50x faster than CPU alternatives
5. **Review uncertain units manually** - automated curation is a starting point
6. **Combine metrics with AI** - use metrics for clear cases, AI for borderline units
7. **Document your thresholds** - different analyses may need different criteria
8. **Export to Phy** for critical experiments - human oversight is valuable

## Key Parameters to Adjust

### Preprocessing
- `freq_min`: Highpass cutoff (300-400 Hz typical)
- `detect_threshold`: Bad channel detection sensitivity

### Motion Correction
- `preset`: 'kilosort_like' (fast) or 'nonrigid_accurate' (better for severe drift)

### Spike Sorting (Kilosort4)
- `batch_size`: Samples per batch (30000 default)
- `nblocks`: Number of drift blocks (increase for long recordings)
- `Th_learned`: Detection threshold (lower = more spikes)

### Quality Metrics
- `snr_threshold`: Signal-to-noise cutoff (3-5 typical)
- `isi_violations_ratio`: Refractory violations (0.01-0.5)
- `presence_ratio`: Recording coverage (0.5-0.95)


## Project Structure

```
project/
├── raw_data/
│   └── recording_g0/
│       └── recording_g0_imec0/
│           ├── recording_g0_t0.imec0.ap.bin
│           └── recording_g0_t0.imec0.ap.meta
├── preprocessed/           # Saved preprocessed recording
├── motion/                 # Motion estimation results
├── sorting_output/         # Spike sorter output
├── analyzer/               # SortingAnalyzer (waveforms, metrics)
├── phy_export/             # For manual curation
├── ai_curation/            # AI analysis reports
└── results/
    ├── quality_metrics.csv
    ├── curation_labels.json
    └── output.nwb
```
