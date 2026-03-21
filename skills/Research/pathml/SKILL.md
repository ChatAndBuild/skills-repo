---
id: pathml
name: PathML
description: Toolkit for computational pathology: loading slide formats, preprocessing images, spatial graphs, and training deep learning models for whole-slide analysis.
category: Research
requires: []
examples:
  - How do I preprocess whole-slide images using PathML?
  - Help me detect and classify nuclei in an H&E stained tissue slide.
---

# PathML

## Overview

PathML is a comprehensive Python toolkit for computational pathology workflows, designed to facilitate machine learning and image analysis for whole-slide pathology images. The framework provides modular, composable tools for loading diverse slide formats, preprocessing images, constructing spatial graphs, training deep learning models, and analyzing multiparametric imaging data from technologies like CODEX and multiplex immunofluorescence.

## When to Use This Skill

Apply this skill for:
- Loading and processing whole-slide images (WSI) in various proprietary formats
- Preprocessing H&E stained tissue images with stain normalization
- Nucleus detection, segmentation, and classification workflows
- Building cell and tissue graphs for spatial analysis
- Training or deploying machine learning models (HoVer-Net, HACTNet) on pathology data
- Analyzing multiparametric imaging (CODEX, Vectra, MERFISH) for spatial proteomics
- Quantifying marker expression from multiplex immunofluorescence
- Managing large-scale pathology datasets with HDF5 storage
- Tile-based analysis and stitching operations

## Instruction
- Identify the whole-slide image (WSI) format and select the appropriate slide class for loading.
- Implement preprocessing pipelines including stain normalization (e.g., Macenko) and tissue detection.
- Execute nucleus detection, segmentation, and classification using built-in model architectures like HoVer-Net.
- Construct spatial graphs (cell or tissue graphs) to analyze the microenvironment and spatial relationships.
- Process multiparametric imaging data (e.g., CODEX, multiplex IF) for spatial proteomics quantification.
- Manage large-scale datasets using HDF5 storage for efficient tile-based analysis and batch processing.
- Export analyzed features or model predictions for downstream clinical or research interpretation.

## When to Use
- When analyzing whole-slide images (WSI) in proprietary formats for computational pathology.
- When performing high-throughput nucleus segmentation or cell-type classification in H&E or multiplex slides.
- When building spatial graphs to study the architecture of the tumor microenvironment.

## Output
- Preprocessed and normalized pathology images or tile sets.
- Segmentation masks and classification labels for cells or nuclei.
- Spatial graph structures and quantified feature matrices in HDF5 or CSV formats.

## Core Capabilities

PathML provides six major capability areas documented in detail within reference files:

### 1. Image Loading & Formats

Load whole-slide images from 160+ proprietary formats including Aperio SVS, Hamamatsu NDPI, Leica SCN, Zeiss ZVI, DICOM, and OME-TIFF. PathML automatically handles vendor-specific formats and provides unified interfaces for accessing image pyramids, metadata, and regions of interest.

### 2. Preprocessing Pipelines

Build modular preprocessing pipelines by composing transforms for image manipulation, quality control, stain normalization, tissue detection, and mask operations. PathML's Pipeline architecture enables reproducible, scalable preprocessing across large datasets.

**Key transforms:**
- `StainNormalizationHE` - Macenko/Vahadane stain normalization
- `TissueDetectionHE`, `NucleusDetectionHE` - Tissue/nucleus segmentation
- `MedianBlur`, `GaussianBlur` - Noise reduction
- `LabelArtifactTileHE` - Quality control for artifacts

### 3. Graph Construction

Construct spatial graphs representing cellular and tissue-level relationships. Extract features from segmented objects to create graph-based representations suitable for graph neural networks and spatial analysis.


### 4. Machine Learning

Train and deploy deep learning models for nucleus detection, segmentation, and classification. PathML integrates PyTorch with pre-built models (HoVer-Net, HACTNet), custom DataLoaders, and ONNX support for inference.

**Key models:**
- **HoVer-Net** - Simultaneous nucleus segmentation and classification
- **HACTNet** - Hierarchical cell-type classification


### 5. Multiparametric Imaging

Analyze spatial proteomics and gene expression data from CODEX, Vectra, MERFISH, and other multiplex imaging platforms. PathML provides specialized slide classes and transforms for processing multiparametric data, cell segmentation with Mesmer, and quantification workflows.

### 6. Data Management

Efficiently store and manage large pathology datasets using HDF5 format. PathML handles tiles, masks, metadata, and extracted features in unified storage structures optimized for machine learning workflows.


## Quick Start


### Common Workflows

**H&E Image Analysis:**
1. Load WSI with appropriate slide class
2. Apply tissue detection and stain normalization
3. Perform nucleus detection or train segmentation models
4. Extract features and build spatial graphs
5. Conduct downstream analysis

**Multiparametric Imaging (CODEX):**
1. Load CODEX slide with `CODEXSlide`
2. Collapse multi-run channel data
3. Segment cells using Mesmer model
4. Quantify marker expression
5. Export to AnnData for single-cell analysis

**Training ML Models:**
1. Prepare dataset with public pathology data
2. Create PyTorch DataLoader with PathML datasets
3. Train HoVer-Net or custom models
4. Evaluate on held-out test sets
5. Deploy with ONNX for inference

## Resources

This skill includes comprehensive reference documentation organized by capability area. Each reference file contains detailed API information, workflow examples, best practices, and troubleshooting guidance for specific PathML functionality.
