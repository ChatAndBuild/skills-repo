---
id: pgvector-semantic-search
name: pgvector Semantic Search
description: Design semantic search on PostgreSQL with pgvector using embedding quality, filtering, indexing, and recall tradeoffs.
category: Databases
requires: []
examples:
  - "Help me design semantic search with pgvector."
  - "What should I consider for pgvector indexing and filtering?"
  - "Review this PostgreSQL vector search approach."
---

# pgvector Semantic Search

Use this skill to design semantic search on PostgreSQL with pgvector in a way that balances relevance, filtering, and operational simplicity.

## Clarify First
- What is being embedded and searched.
- Whether semantic search stands alone or augments keyword search.
- Metadata filters, freshness needs, and expected corpus size.
- Latency and recall expectations.
- How results will be evaluated.

## Design Priorities
- Retrieval quality starts with chunking and embedding choices, not just index tuning.
- Metadata filtering often matters as much as vector similarity.
- Hybrid retrieval may outperform pure semantic search.
- Evaluate precision and failure modes with real queries.
- Keep update and re-embedding workflows in view.

## Output
- Recommended retrieval strategy.
- Schema shape for vectors and metadata.
- Indexing and filtering considerations.
- Evaluation and quality-check suggestions.
- Tradeoffs around scale, cost, and operational complexity.

## Common Mistakes
- Assuming better embeddings fix weak chunking.
- Ignoring metadata filters or freshness.
- Measuring only latency and not result quality.
- Treating vector search as a drop-in substitute for every search problem.
