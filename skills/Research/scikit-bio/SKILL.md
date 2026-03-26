---
id: scikit-bio
name: scikit-bio
description: Toolkit for bioinformatics analyses including sequence manipulation, phylogenetic trees, and microbiome diversity metrics.
category: Research
requires: []
examples:
  - Calculate alpha and beta diversity metrics for this microbiome dataset.
  - Perform a PCoA ordination analysis on my distance matrix using scikit-bio.
---

# scikit-bio

## Overview

scikit-bio is a comprehensive Python library for working with biological data. Apply this skill for bioinformatics analyses spanning sequence manipulation, alignment, phylogenetics, microbial ecology, and multivariate statistics.

## When to Use This Skill

This skill should be used when the user:
- Works with biological sequences (DNA, RNA, protein)
- Needs to read/write biological file formats (FASTA, FASTQ, GenBank, Newick, BIOM, etc.)
- Performs sequence alignments or searches for motifs
- Constructs or analyzes phylogenetic trees
- Calculates diversity metrics (alpha/beta diversity, UniFrac distances)
- Performs ordination analysis (PCoA, CCA, RDA)
- Runs statistical tests on biological/ecological data (PERMANOVA, ANOSIM, Mantel)
- Analyzes microbiome or community ecology data
- Works with protein embeddings from language models
- Needs to manipulate biological data tables

## Core Capabilities

### 1. Sequence Manipulation

Work with biological sequences using specialized classes for DNA, RNA, and protein data.

**Key operations:**
- Read/write sequences from FASTA, FASTQ, GenBank, EMBL formats
- Sequence slicing, concatenation, and searching
- Reverse complement, transcription (DNA→RNA), and translation (RNA→protein)
- Find motifs and patterns using regex
- Calculate distances (Hamming, k-mer based)
- Handle sequence quality scores and metadata

**Important notes:**
- Use `DNA`, `RNA`, `Protein` classes for grammared sequences with validation
- Use `Sequence` class for generic sequences without alphabet restrictions
- Quality scores automatically loaded from FASTQ files into positional metadata
- Metadata types: sequence-level (ID, description), positional (per-base), interval (regions/features)

### 2. Sequence Alignment

Perform pairwise and multiple sequence alignments using dynamic programming algorithms.

**Key capabilities:**
- Global alignment (Needleman-Wunsch with semi-global variant)
- Local alignment (Smith-Waterman)
- Configurable scoring schemes (match/mismatch, gap penalties, substitution matrices)
- CIGAR string conversion
- Multiple sequence alignment storage and manipulation with `TabularMSA`


**Important notes:**
- Use `local_pairwise_align_ssw` for local alignments (faster, SSW-based)
- Use `StripedSmithWaterman` for protein alignments
- Affine gap penalties recommended for biological sequences
- Can convert between scikit-bio, BioPython, and Biotite alignment formats

### 3. Phylogenetic Trees

Construct, manipulate, and analyze phylogenetic trees representing evolutionary relationships.

**Key capabilities:**
- Tree construction from distance matrices (UPGMA, WPGMA, Neighbor Joining, GME, BME)
- Tree manipulation (pruning, rerooting, traversal)
- Distance calculations (patristic, cophenetic, Robinson-Foulds)
- ASCII visualization
- Newick format I/O

**Important notes:**
- Use `nj()` for neighbor joining (classic phylogenetic method)
- Use `upgma()` for UPGMA (assumes molecular clock)
- GME and BME are highly scalable for large trees
- Trees can be rooted or unrooted; some metrics require specific rooting

### 4. Diversity Analysis

Calculate alpha and beta diversity metrics for microbial ecology and community analysis.

**Key capabilities:**
- Alpha diversity: richness, Shannon entropy, Simpson index, Faith's PD, Pielou's evenness
- Beta diversity: Bray-Curtis, Jaccard, weighted/unweighted UniFrac, Euclidean distances
- Phylogenetic diversity metrics (require tree input)
- Rarefaction and subsampling
- Integration with ordination and statistical tests


**Important notes:**
- Counts must be integers representing abundances, not relative frequencies
- Phylogenetic metrics (Faith's PD, UniFrac) require tree and OTU ID mapping
- Use `partial_beta_diversity()` for computing specific sample pairs only
- Alpha diversity returns Series, beta diversity returns DistanceMatrix

### 5. Ordination Methods

Reduce high-dimensional biological data to visualizable lower-dimensional spaces.

**Key capabilities:**
- PCoA (Principal Coordinate Analysis) from distance matrices
- CA (Correspondence Analysis) for contingency tables
- CCA (Canonical Correspondence Analysis) with environmental constraints
- RDA (Redundancy Analysis) for linear relationships
- Biplot projection for feature interpretation

**Important notes:**
- PCoA works with any distance/dissimilarity matrix
- CCA reveals environmental drivers of community composition
- Ordination results include eigenvalues, proportion explained, and sample/feature coordinates
- Results integrate with plotting libraries (matplotlib, seaborn, plotly)

### 6. Statistical Testing

Perform hypothesis tests specific to ecological and biological data.

**Key capabilities:**
- PERMANOVA: test group differences using distance matrices
- ANOSIM: alternative test for group differences
- PERMDISP: test homogeneity of group dispersions
- Mantel test: correlation between distance matrices
- Bioenv: find environmental variables correlated with distances

**Important notes:**
- Permutation tests provide non-parametric significance testing
- Use 999+ permutations for robust p-values
- PERMANOVA sensitive to dispersion differences; pair with PERMDISP
- Mantel tests assess matrix correlation (e.g., geographic vs genetic distance)

### 7. File I/O and Format Conversion

Read and write 19+ biological file formats with automatic format detection.

**Supported formats:**
- Sequences: FASTA, FASTQ, GenBank, EMBL, QSeq
- Alignments: Clustal, PHYLIP, Stockholm
- Trees: Newick
- Tables: BIOM (HDF5 and JSON)
- Distances: delimited square matrices
- Analysis: BLAST+6/7, GFF3, Ordination results
- Metadata: TSV/CSV with validation

**Important notes:**
- Use generators for large files to avoid memory issues
- Format can be auto-detected when `into` parameter specified
- Some objects can be written to multiple formats
- Support for stdin/stdout piping with `verify=False`

### 8. Distance Matrices

Create and manipulate distance/dissimilarity matrices with statistical methods.

**Key capabilities:**
- Store symmetric (DistanceMatrix) or asymmetric (DissimilarityMatrix) data
- ID-based indexing and slicing
- Integration with diversity, ordination, and statistical tests
- Read/write delimited text format


**Important notes:**
- DistanceMatrix enforces symmetry and zero diagonal
- DissimilarityMatrix allows asymmetric values
- IDs enable integration with metadata and biological knowledge
- Compatible with pandas, numpy, and scikit-learn

### 9. Biological Tables

Work with feature tables (OTU/ASV tables) common in microbiome research.

**Key capabilities:**
- BIOM format I/O (HDF5 and JSON)
- Integration with pandas, polars, AnnData, numpy
- Data augmentation techniques (phylomix, mixup, compositional methods)
- Sample/feature filtering and normalization
- Metadata integration



**Important notes:**
- BIOM tables are standard in QIIME 2 workflows
- Rows typically represent samples, columns represent features (OTUs/ASVs)
- Supports sparse and dense representations
- Output format configurable (pandas/polars/numpy)

### 10. Protein Embeddings

Work with protein language model embeddings for downstream analysis.

**Key capabilities:**
- Store embeddings from protein language models (ESM, ProtTrans, etc.)
- Convert embeddings to distance matrices
- Generate ordination objects for visualization
- Export to numpy/pandas for ML workflows


**Important notes:**
- Embeddings bridge protein language models with traditional bioinformatics
- Compatible with scikit-bio's distance/ordination/statistics ecosystem
- SequenceEmbedding and ProteinEmbedding provide specialized functionality
- Useful for sequence clustering, classification, and visualization

## Best Practices

### Installation
```bash
uv pip install scikit-bio
```

### Performance Considerations
- Use generators for large sequence files to minimize memory usage
- For massive phylogenetic trees, prefer GME or BME over NJ
- Beta diversity calculations can be parallelized with `partial_beta_diversity()`
- BIOM format (HDF5) more efficient than JSON for large tables

### Integration with Ecosystem
- Sequences interoperate with Biopython via standard formats
- Tables integrate with pandas, polars, and AnnData
- Distance matrices compatible with scikit-learn
- Ordination results visualizable with matplotlib/seaborn/plotly
- Works seamlessly with QIIME 2 artifacts (BIOM, trees, distance matrices)

### Common Workflows
1. **Microbiome diversity analysis**: Read BIOM table → Calculate alpha/beta diversity → Ordination (PCoA) → Statistical testing (PERMANOVA)
2. **Phylogenetic analysis**: Read sequences → Align → Build distance matrix → Construct tree → Calculate phylogenetic distances
3. **Sequence processing**: Read FASTQ → Quality filter → Trim/clean → Find motifs → Translate → Write FASTA
4. **Comparative genomics**: Read sequences → Pairwise alignment → Calculate distances → Build tree → Analyze clades

## Reference Documentation

For detailed API information, parameter specifications, and advanced usage examples, refer to `references/api_reference.md` which contains comprehensive documentation on:
- Complete method signatures and parameters for all capabilities
- Extended code examples for complex workflows
- Troubleshooting common issues
- Performance optimization tips
- Integration patterns with other libraries

## Additional Resources

- Official documentation: https://scikit.bio/docs/latest/
- GitHub repository: https://github.com/scikit-bio/scikit-bio
- Forum support: https://forum.qiime2.org (scikit-bio is part of QIIME 2 ecosystem)
