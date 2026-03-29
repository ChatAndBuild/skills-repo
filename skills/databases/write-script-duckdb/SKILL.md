---
id: write-script-duckdb
name: Write Script DuckDB
description: Draft DuckDB SQL scripts for analysis, transformation, and reproducible local workflows with clear assumptions and output intent.
category: Databases
requires: []
examples:
  - "Help me write a DuckDB SQL script for this analysis."
  - "Review this DuckDB script for clarity and correctness."
  - "How should I structure this DuckDB query workflow?"
---

# Write Script DuckDB

Use this skill to draft or review DuckDB SQL scripts for local analytics, transformation, and reproducible data work.

## Clarify First
- Is the script exploratory, repeatable, or meant for a production-style batch workflow?
- What data sources are involved and what assumptions exist about shape or size?
- Is readability, speed, or reproducibility the main priority?
- Should the output be a table, a report-ready dataset, or a one-off analysis?

## DuckDB Guidance
- Keep data-loading assumptions explicit.
- Favor scripts that are easy to rerun and easy to inspect.
- Separate staging, transformation, and final output steps when that improves clarity.
- Think about memory and data-volume expectations even in local workflows.

## Good Output
- Query structure with clear stages.
- Notes on assumptions about inputs and outputs.
- Suggestions for making the script easier to rerun or validate.
- Risks around hidden state, temporary objects, or unclear transformations.

## Common Mistakes
- Writing a dense one-shot query that is hard to debug.
- Hiding assumptions about input files or schemas.
- Mixing exploration and reusable transformation logic without distinction.
- Treating local analysis code as self-explanatory when it is not.
