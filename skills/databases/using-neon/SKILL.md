---
id: using-neon
name: Using Neon
description: Evaluate and use Neon for PostgreSQL workflows with branching, environment strategy, and operational tradeoffs in mind.
category: Databases
requires: []
examples:
  - "Should I use Neon for this Postgres workflow?"
  - "Help me think through Neon branches and environments."
  - "What are the tradeoffs of using Neon here?"
---

# Using Neon

Use this skill to think through whether Neon fits a PostgreSQL workflow and how to structure environments safely.

## Questions To Ask
- Why use Neon here: branching, environment isolation, cost, developer workflow, or scale?
- Which environments exist and who owns them?
- How sensitive is the workload to latency, connection behavior, or operational controls?
- What branching or preview workflow is actually needed?

## Guidance Areas
- Environment and branch strategy.
- Migration and schema-change workflow.
- Connection and pooling considerations.
- Production versus preview usage boundaries.
- Risks around data divergence, stale branches, or confusing environment sprawl.

## Output
- Recommendation for where Neon fits.
- Safe branching and environment conventions.
- Migration and validation suggestions.
- Tradeoffs or concerns to watch.

## Common Mistakes
- Treating branches as permanent environments without ownership.
- Letting schema drift build up across preview branches.
- Ignoring connection-management implications.
- Assuming a developer-friendly workflow automatically maps to production safety.
