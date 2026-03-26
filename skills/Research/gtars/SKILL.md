---
id: gtars
name: Gtars
description: High-performance toolkit for genomic interval analysis in Rust, supporting overlap detection, coverage analysis, and ML tokenization.
category: Research
requires: []
examples:
  - Perform overlap detection between two genomic region sets using gtars.
  - How do I generate coverage tracks in BigWig format using the gtars Python API?
---

# Gtars: Genomic Tools and Algorithms in Rust

## Overview

Gtars is a high-performance Rust toolkit for manipulating, analyzing, and processing genomic interval data. It provides specialized tools for overlap detection, coverage analysis, tokenization for machine learning, and reference sequence management.

Use this skill when working with:
- Genomic interval files (BED format)
- Overlap detection between genomic regions
- Coverage track generation (WIG, BigWig)
- Genomic ML preprocessing and tokenization
- Fragment analysis in single-cell genomics
- Reference sequence retrieval and validation

## Installation

### Python Installation

Install gtars Python bindings:


### CLI Installation

Install command-line tools (requires Rust/Cargo):

### Rust Library

Add to Cargo.toml for Rust projects:

## Core Capabilities

Gtars is organized into specialized modules, each focused on specific genomic analysis tasks:

### 1. Overlap Detection and IGD Indexing

Efficiently detect overlaps between genomic intervals using the Integrated Genome Database (IGD) data structure.

**When to use:**
- Finding overlapping regulatory elements
- Variant annotation
- Comparing ChIP-seq peaks
- Identifying shared genomic features


### 2. Coverage Track Generation

Generate coverage tracks from sequencing data with the uniwig module.

**When to use:**
- ATAC-seq accessibility profiles
- ChIP-seq coverage visualization
- RNA-seq read coverage
- Differential coverage analysis

### 3. Genomic Tokenization

Convert genomic regions into discrete tokens for machine learning applications, particularly for deep learning models on genomic data.

**When to use:**
- Preprocessing for genomic ML models
- Integration with geniml library
- Creating position encodings
- Training transformer models on genomic sequences


### 4. Reference Sequence Management

Handle reference genome sequences and compute digests following the GA4GH refget protocol.

**When to use:**
- Validating reference genome integrity
- Extracting specific genomic sequences
- Computing sequence digests
- Cross-reference comparisons

### 5. Fragment Processing

Split and analyze fragment files, particularly useful for single-cell genomics data.

**When to use:**
- Processing single-cell ATAC-seq data
- Splitting fragments by cell barcodes
- Cluster-based fragment analysis
- Fragment quality control

### 6. Fragment Scoring

Score fragment overlaps against reference datasets.

**When to use:**
- Evaluating fragment enrichment
- Comparing experimental data to references
- Quality metrics computation
- Batch scoring across samples

## Common Workflows

### Workflow 1: Peak Overlap Analysis

Identify overlapping genomic features:


### Workflow 2: Coverage Track Pipeline

Generate coverage tracks for visualization:

### Workflow 3: ML Preprocessing

Prepare genomic data for machine learning:

## Python vs CLI Usage

**Use Python API when:**
- Integrating with analysis pipelines
- Need programmatic control
- Working with NumPy/Pandas
- Building custom workflows

**Use CLI when:**
- Quick one-off analyses
- Shell scripting
- Batch processing files
- Prototyping workflows

## Integration with geniml

Gtars serves as the foundation for the geniml Python package, providing core genomic interval operations for machine learning workflows. When working on geniml-related tasks, use gtars for data preprocessing and tokenization.

## Performance Characteristics

- **Native Rust performance**: Fast execution with low memory overhead
- **Parallel processing**: Multi-threaded operations for large datasets
- **Memory efficiency**: Streaming and memory-mapped file support
- **Zero-copy operations**: NumPy integration with minimal data copying

## Data Formats

Gtars works with standard genomic formats:

- **BED**: Genomic intervals (3-column or extended)
- **WIG/BigWig**: Coverage tracks
- **FASTA**: Reference sequences
- **Fragment TSV**: Single-cell fragment files with barcodes

## Output
- Analyzed genomic interval sets and identified overlap counts or region lists.
- High-performance coverage tracks in BigWig or WIG formats.
- Discrete genomic tokens or NumPy arrays ready for input into machine learning models.