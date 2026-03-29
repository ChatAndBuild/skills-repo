---
id: sql-pro
name: SQL Pro
description: Write and review SQL with stronger correctness, readability, portability, and performance awareness across database engines.
category: Databases
requires: []
examples:
  - "Help me improve this SQL query."
  - "Review this SQL for correctness and readability."
  - "What would make this SQL easier to maintain?"
---

# SQL Pro

Use this skill for general SQL authoring and review across engines when the problem is broader than one database dialect.

## Focus Areas
- Query correctness and edge cases.
- Readability and maintainability.
- Performance awareness without premature micro-optimization.
- Portability concerns when SQL may run on different engines.
- Safe handling of joins, filters, aggregation, and null semantics.

## Review Heuristics
- Make the intent of the query easy to see.
- Use naming, CTEs, or structure to clarify logic when they genuinely help.
- Watch for accidental fan-out, duplicate rows, and null-related surprises.
- Separate business logic mistakes from engine-specific syntax issues.
- Prefer explicitness when the query is part of a long-lived codebase.

## Good Output
- Revised SQL or a structured critique.
- Explanation of correctness or readability risks.
- Performance concerns worth checking.
- Engine-specific caveats if portability is not guaranteed.

## Common Mistakes
- Correct-looking joins that silently duplicate data.
- Filters in the wrong place for outer joins.
- Dense SQL that hides intent.
- Performance advice detached from the real data shape or workload.
