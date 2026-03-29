---
id: algolia-search
name: Algolia Search
description: Design Algolia search experiences with ranking, faceting, indexing, and relevance tradeoffs in mind.
category: Databases
requires: []
examples:
  - "Help me structure this search experience in Algolia."
  - "What indexing and ranking choices matter for Algolia?"
  - "Review this Algolia search design for relevance and filter tradeoffs."
---

# Algolia Search

Use this skill to plan Algolia indexing and ranking decisions without assuming direct dashboard or API access.

## Clarify First
- Search use case such as ecommerce, docs, directory, or support content.
- Main ranking goals and fallback behavior.
- Facets, filters, and sorting needs.
- How often data changes and how indexing is triggered.
- What relevance complaints users already have.

## Review Focus
- Index shape and searchable attributes.
- Ranking strategy and business boosts.
- Faceting and filtering tradeoffs.
- Synonyms, typo tolerance, and query rules.
- Operational concerns around indexing frequency and consistency.

## Output
- Recommended index and attribute strategy.
- Relevance and ranking guidance.
- Filter and facet considerations.
- Risks, tradeoffs, and validation ideas.

## Common Mistakes
- Overloading one index with incompatible search goals.
- Boosting business rules until relevance becomes confusing.
- Creating too many facets without a user need.
- Shipping search changes without a query-quality review set.
