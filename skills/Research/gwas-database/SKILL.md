---
id: gwas-database
name: GWAS Database
description: Biomedical AI agent framework for executing research tasks across genomics, drug discovery, molecular biology, and clinical analysis.
category: Research
requires: []
examples:
  - Design a CRISPR screening experiment to prioritize genes involved in drug resistance.
  - Perform a GWAS interpretation and single-cell RNA-seq analysis for a target disease.
---

# Biomni

## Overview

Biomni is an open-source biomedical AI agent framework from Stanford's SNAP lab that autonomously executes complex research tasks across biomedical domains. Use this skill when working on multi-step biological reasoning tasks, analyzing biomedical data, or conducting research spanning genomics, drug discovery, molecular biology, and clinical analysis.

## Core Capabilities

Biomni excels at:

1. **Multi-step biological reasoning** - Autonomous task decomposition and planning for complex biomedical queries
2. **Code generation and execution** - Dynamic analysis pipeline creation for data processing
3. **Knowledge retrieval** - Access to ~11GB of integrated biomedical databases and literature
4. **Cross-domain problem solving** - Unified interface for genomics, proteomics, drug discovery, and clinical tasks

## When to Use This Skill

Use biomni for:
- **CRISPR screening** - Design screens, prioritize genes, analyze knockout effects
- **Single-cell RNA-seq** - Cell type annotation, differential expression, trajectory analysis
- **Drug discovery** - ADMET prediction, target identification, compound optimization
- **GWAS analysis** - Variant interpretation, causal gene identification, pathway enrichment
- **Clinical genomics** - Rare disease diagnosis, variant pathogenicity, phenotype-genotype mapping
- **Lab protocols** - Protocol optimization, literature synthesis, experimental design

## Working with Biomni

### 1. Agent Initialization

The A1 class is the primary interface for biomni:


**Supported LLM Providers:**
- Anthropic Claude (recommended): `claude-sonnet-4-20250514`, `claude-opus-4-20250514`
- OpenAI: `gpt-4`, `gpt-4-turbo`
- Azure OpenAI: via Azure configuration
- Google Gemini: `gemini-2.0-flash-exp`
- Groq: `llama-3.3-70b-versatile`
- AWS Bedrock: Various models via Bedrock API

### 2. Task Execution Workflow

Biomni follows an autonomous agent workflow:

### 3. Common Task Patterns

#### CRISPR Screening Design


#### Single-Cell RNA-seq Analysis


#### Drug ADMET Prediction


#### GWAS Variant Interpretation

### 4. Data Integration

Biomni integrates ~11GB of biomedical knowledge sources:
- **Gene databases** - Ensembl, NCBI Gene, UniProt
- **Protein structures** - PDB, AlphaFold
- **Clinical datasets** - ClinVar, OMIM, HPO
- **Literature indices** - PubMed abstracts, biomedical ontologies
- **Pathway databases** - KEGG, Reactome, GO

Data is automatically downloaded to the specified `path` on first use.

### 5. MCP Server Integration

Extend biomni with external tools via Model Context Protocol:

### 6. Evaluation Framework

Benchmark agent performance on biomedical tasks:

## Best Practices

### Task Formulation
- **Be specific** - Include biological context, organism, cell type, conditions
- **Specify outputs** - Clearly state desired analysis outputs and formats
- **Provide data paths** - Include file paths for datasets to analyze
- **Set constraints** - Mention time/computational limits if relevant

### Security Considerations
⚠️ **Important**: Biomni executes LLM-generated code with full system privileges. For production use:
- Run in isolated environments (Docker, VMs)
- Avoid exposing sensitive credentials
- Review generated code before execution in sensitive contexts
- Use sandboxed execution environments when possible

### Performance Optimization
- **Choose appropriate LLMs** - Claude Sonnet 4 recommended for balance of speed/quality
- **Set reasonable timeouts** - Adjust `default_config.timeout_seconds` for complex tasks
- **Monitor iterations** - Track `max_iterations` to prevent runaway loops
- **Cache data** - Reuse downloaded data lake across sessions

