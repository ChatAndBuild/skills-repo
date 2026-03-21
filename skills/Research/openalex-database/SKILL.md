---
id: openalex-database
name: OpenAlex Database
description: Query and analyze scholarly literature using OpenAlex for research output analysis and bibliometric studies.
category: Research
requires: []
examples:
  - Search for academic papers by a specific author using OpenAlex.
  - Analyze research trends in machine learning over the last decade.
---

# OpenAlex Database

## Overview

OpenAlex is a comprehensive open catalog of 240M+ scholarly works, authors, institutions, topics, sources, publishers, and funders. This skill provides tools and workflows for querying the OpenAlex API to search literature, analyze research output, track citations, and conduct bibliometric studies.

## Core Capabilities

### 1. Search for Papers

**Use for**: Finding papers by title, abstract, or topic


### 2. Find Works by Author

**Use for**: Getting all publications by a specific researcher


**Manual two-step approach**:


### 3. Find Works from Institution

**Use for**: Analyzing research output from universities or organizations


### 4. Highly Cited Papers

**Use for**: Finding influential papers in a field


### 5. Open Access Papers

**Use for**: Finding freely available research


### 6. Publication Trends Analysis

**Use for**: Tracking research output over time

### 7. Research Output Analysis

**Use for**: Comprehensive analysis of author or institution research


### 8. Batch Lookups

**Use for**: Getting information for multiple DOIs, ORCIDs, or IDs efficiently



### 9. Random Sampling

**Use for**: Getting representative samples for analysis


### 10. Citation Analysis

**Use for**: Finding papers that cite a specific work

### 11. Topic and Subject Analysis

**Use for**: Understanding research focus areas

### 12. Large-Scale Data Extraction

**Use for**: Downloading large datasets for analysis



## Entity Types

OpenAlex provides these entity types:
- **works** - Scholarly documents (articles, books, datasets)
- **authors** - Researchers with disambiguated identities
- **institutions** - Universities and research organizations
- **sources** - Journals, repositories, conferences
- **topics** - Subject classifications
- **publishers** - Publishing organizations
- **funders** - Funding agencies

## Scripts

### openalex_client.py
Main API client with:
- Automatic rate limiting
- Exponential backoff retry logic
- Pagination support
- Batch operations
- Error handling

Use for direct API access with full control.

### query_helpers.py
High-level helper functions for common operations:
- `find_author_works()` - Get papers by author
- `find_institution_works()` - Get papers from institution
- `find_highly_cited_recent_papers()` - Get influential papers
- `get_open_access_papers()` - Find OA publications
- `get_publication_trends()` - Analyze trends over time
- `analyze_research_output()` - Comprehensive analysis

Use for common research queries with simplified interfaces.

## Troubleshooting

### Rate Limiting
If encountering 403 errors:
1. Ensure email is added to requests
2. Verify not exceeding 10 req/sec
3. Client automatically implements exponential backoff

### Empty Results
If searches return no results:
1. Check filter syntax (see `references/api_guide.md`)
2. Use two-step pattern for entity lookups (don't filter by names)
3. Verify entity IDs are correct format

### Timeout Errors
For large queries:
1. Use pagination with `per-page=200`
2. Use `select=` to limit returned fields
3. Break into smaller queries if needed

## Rate Limits

- **Default**: 1 request/second, 100k requests/day
- **Polite pool (with email)**: 10 requests/second, 100k requests/day

Always use polite pool for production workflows by providing email to client.

## Notes

- No authentication required
- All data is open and free
- Rate limits apply globally, not per IP
- Use LitLLM with OpenRouter if LLM-based analysis is needed (don't use Perplexity API directly)
- Client handles pagination, retries, and rate limiting automatically

## When to Use
- When searching for academic literature or analyzing the research output of specific individuals or institutions.
- When performing large-scale bibliometric analysis or identifying emerging trends in scientific research.
- When needing to retrieve open access papers and their associated metadata for meta-analysis.
