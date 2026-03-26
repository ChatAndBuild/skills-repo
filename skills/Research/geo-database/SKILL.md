---
id: geo-database
name: GEO Database
description: Access NCBI GEO for gene expression data. Search/download microarray and RNA-seq datasets (GSE, GSM, GPL) and retrieve SOFT/Matrix files.
category: Research
requires: []
examples:
  - Search for human gene expression datasets related to breast cancer in NCBI GEO.
  - Download the SOFT matrix file for GEO series GSE123456.
---
# GEO Database

Access NCBI GEO for gene expression/genomics data. Search/download microarray and RNA-seq datasets (GSE, GSM, GPL), retrieve SOFT/Matrix files, for transcriptomics and expression analysis.

## Instruction
- Formulate search queries to identify relevant transcriptomics or epigenomics datasets (GSE, GSM, GPL) based on study keywords.
- Utilize programmatic tools (e.g., `GEOquery` in R or `getGEO` in Python) to retrieve series metadata and sample information.
- Download processed expression matrices or SOFT files for deep analysis of gene expression levels across different conditions.
- Extract experimental design details, including sample groups, treatments, and platform information from the retrieved metadata.
- Validate the integrity of downloaded files and cross-reference them with published literature mentioned in the GEO series description.
- Coordinate the transition to downstream differential expression analysis (DEA) by cleaning and formatting the retrieved matrix data.

## When to Use
- When searching for public microarray or RNA-seq datasets related to specific diseases, tissues, or experimental conditions.
- When downloading standardized gene expression matrices for meta-analysis or benchmarking research results.
- When investigating specific platforms (GPL) or individual sample (GSM) characteristics in transcriptomics studies.

## Output
- A list of identified GEO accessions and their corresponding study summaries.
- Processed gene expression matrices and detailed experimental metadata for the selected series.
- Guidance on the next steps for data normalization and biological interpretation.