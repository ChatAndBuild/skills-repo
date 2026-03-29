---
id: meilisearch
name: Meilisearch
description: Design Meilisearch indexing and search behavior with ranking, filters, updates, and operational simplicity in mind.
category: Databases
requires: []
examples:
  - "Help me plan this Meilisearch setup."
  - "What should I consider for Meilisearch ranking and filters?"
  - "Review this Meilisearch search design for tradeoffs."
---

# Meilisearch

Use this skill to evaluate or design a Meilisearch-based search workflow.

## Clarify First
- What is being searched and how users judge success.
- Whether filters, facets, or strict sorting matter.
- Update frequency and indexing pipeline constraints.
- Expected scale and operational simplicity goals.
- How this search experience differs from plain database queries.

## Guidance Areas
- Index and document shape.
- Ranking and relevance expectations.
- Filterability and searchable attribute choices.
- Sync/update workflow and operational burden.
- Where Meilisearch fits well and where it may not.

## Output
- Search design recommendations.
- Ranking and filter tradeoffs.
- Update and operational considerations.
- Questions to validate before committing.

## Common Mistakes
- Treating search relevance as only a configuration problem.
- Indexing fields that should be filters or vice versa.
- Ignoring update and sync behavior during design.
- Expecting one ranking setup to satisfy every search mode.
