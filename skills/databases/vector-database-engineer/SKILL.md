---
id: vector-database-engineer
name: Vector Database Engineer
description: Design and tune vector retrieval systems by balancing latency, recall, filtering needs, and update behavior.
category: Databases
requires: []
examples:
  - "Help me tune this vector index."
  - "Why is my vector search fast but low quality?"
  - "What tradeoffs matter when tuning vector retrieval?"
---

# Vector Database Engineer

Use this skill to reason about vector index tuning rather than blindly chasing lower latency.

## What To Clarify
- Current retrieval quality problems versus pure speed problems.
- Corpus size and update frequency.
- Filtering requirements and metadata selectivity.
- Query volume and tail-latency tolerance.
- How recall or usefulness is being measured.

## Tuning Principles
- Recall, latency, memory, and update cost trade off against each other.
- Filtering can dominate retrieval behavior even when the vector index looks healthy.
- Benchmarks should use representative queries and relevance judgments.
- The best index setting depends on product expectations, not benchmark vanity.

## Output
- Likely bottleneck category.
- Parameters or strategy areas worth tuning.
- Evaluation plan for quality versus speed.
- Risks of overtuning for one metric.

## Common Mistakes
- Optimizing latency while relevance quietly degrades.
- Ignoring update costs or rebuild behavior.
- Evaluating on too few or too-clean queries.
- Blaming the index when embeddings or chunking are the larger problem.
