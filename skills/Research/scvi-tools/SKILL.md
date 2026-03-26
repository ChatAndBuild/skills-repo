---
id: scvi-tools
name: scvi-tools
description: Variational inference framework for probabilistic modeling of single-cell genomics data modalities.
category: Research
requires: []
examples:
  - Perform batch correction on my single-cell RNA-seq data using scVI.
  - Annotate cell types in my dataset using a semi-supervised scANVI model.
---

# scvi-tools

## Overview

scvi-tools is a comprehensive Python framework for probabilistic models in single-cell genomics. Built on PyTorch and PyTorch Lightning, it provides deep generative models using variational inference for analyzing diverse single-cell data modalities.

## When to Use This Skill

Use this skill when:
- Analyzing single-cell RNA-seq data (dimensionality reduction, batch correction, integration)
- Working with single-cell ATAC-seq or chromatin accessibility data
- Integrating multimodal data (CITE-seq, multiome, paired/unpaired datasets)
- Analyzing spatial transcriptomics data (deconvolution, spatial mapping)
- Performing differential expression analysis on single-cell data
- Conducting cell type annotation or transfer learning tasks
- Working with specialized single-cell modalities (methylation, cytometry, RNA velocity)
- Building custom probabilistic models for single-cell analysis

## Instruction
- Register the single-cell dataset using `setup_anndata`, ensuring all relevant covariates (batch, donor, cell-cycle) are correctly identified.
- Initialize and train probabilistic models such as scVI for batch correction and integration of single-cell RNA-seq data.
- Utilize semi-supervised models like scANVI for automated cell type annotation and transfer learning across datasets.
- Perform multimodal analysis using models like TotalVI for combined RNA and surface protein (CITE-seq) data.
- Execute differential expression analysis using the model's posterior distributions for robust, uncertainty-aware statistical testing.
- Optimize training performance by enabling GPU acceleration and monitoring convergence via training history logs.

## Output
- Trained scvi-tools models and associated latent representations (embeddings).
- Summarized integration reports highlighting batch correction success and identified cell clusters.
- Actionable differential expression results and cell-type annotation labels with confidence scores.

## Core Capabilities

scvi-tools provides models organized by data modality:

### 1. Single-Cell RNA-seq Analysis
Core models for expression analysis, batch correction, and integration. See `references/models-scrna-seq.md` for:
- **scVI**: Unsupervised dimensionality reduction and batch correction
- **scANVI**: Semi-supervised cell type annotation and integration
- **AUTOZI**: Zero-inflation detection and modeling
- **VeloVI**: RNA velocity analysis
- **contrastiveVI**: Perturbation effect isolation

### 2. Chromatin Accessibility (ATAC-seq)
Models for analyzing single-cell chromatin data. See `references/models-atac-seq.md` for:
- **PeakVI**: Peak-based ATAC-seq analysis and integration
- **PoissonVI**: Quantitative fragment count modeling
- **scBasset**: Deep learning approach with motif analysis

### 3. Multimodal & Multi-omics Integration
Joint analysis of multiple data types. See `references/models-multimodal.md` for:
- **totalVI**: CITE-seq protein and RNA joint modeling
- **MultiVI**: Paired and unpaired multi-omic integration
- **MrVI**: Multi-resolution cross-sample analysis

### 4. Spatial Transcriptomics
Spatially-resolved transcriptomics analysis. See `references/models-spatial.md` for:
- **DestVI**: Multi-resolution spatial deconvolution
- **Stereoscope**: Cell type deconvolution
- **Tangram**: Spatial mapping and integration
- **scVIVA**: Cell-environment relationship analysis

### 5. Specialized Modalities
Additional specialized analysis tools. See `references/models-specialized.md` for:
- **MethylVI/MethylANVI**: Single-cell methylation analysis
- **CytoVI**: Flow/mass cytometry batch correction
- **Solo**: Doublet detection
- **CellAssign**: Marker-based cell type annotation

## Typical Workflow

All scvi-tools models follow a consistent API pattern:


1. Load and preprocess data (AnnData format)

2. Register data with model (specify layers, covariates)

3. Create and train model

4. Extract latent representations and normalized values

5. Store in AnnData for downstream analysis

6. Downstream analysis with scanpy


**Key Design Principles:**
- **Raw counts required**: Models expect unnormalized count data for optimal performance
- **Unified API**: Consistent interface across all models (setup → train → extract)
- **AnnData-centric**: Seamless integration with the scanpy ecosystem
- **GPU acceleration**: Automatic utilization of available GPUs
- **Batch correction**: Handle technical variation through covariate registration

## Common Analysis Tasks

### Differential Expression
Probabilistic DE analysis using the learned generative models

### Model Persistence
Save and load trained models


### Batch Correction and Integration
Integrate datasets across batches or studies:

## Theoretical Foundations

scvi-tools is built on:
- **Variational inference**: Approximate posterior distributions for scalable Bayesian inference
- **Deep generative models**: VAE architectures that learn complex data distributions
- **Amortized inference**: Shared neural networks for efficient learning across cells
- **Probabilistic modeling**: Principled uncertainty quantification and statistical testing


## Best Practices

1. **Use raw counts**: Always provide unnormalized count data to models
2. **Filter genes**: Remove low-count genes before analysis (e.g., `min_counts=3`)
3. **Register covariates**: Include known technical factors (batch, donor, etc.) in `setup_anndata`
4. **Feature selection**: Use highly variable genes for improved performance
5. **Model saving**: Always save trained models to avoid retraining
6. **GPU usage**: Enable GPU acceleration for large datasets (`accelerator="gpu"`)
7. **Scanpy integration**: Store outputs in AnnData objects for downstream analysis
