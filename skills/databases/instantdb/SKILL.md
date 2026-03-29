---
id: instantdb
name: InstantDB
description: Evaluate InstantDB-style local-first and realtime data models with schema, sync, and client-consistency tradeoffs.
category: Databases
requires: []
examples:
  - "Help me think through using InstantDB."
  - "What schema and sync tradeoffs matter with InstantDB?"
  - "Review this InstantDB approach for client and server consistency."
---

# InstantDB

Use this skill to reason about InstantDB-style realtime or local-first database choices and their tradeoffs.

## Clarify First
- Is the main goal offline support, realtime sync, reduced backend code, or prototyping speed?
- What consistency guarantees matter across clients?
- Which data must remain authoritative or server-controlled?
- What conflict scenarios are likely?

## Review Focus
- Data ownership and authority boundaries.
- Sync and conflict expectations.
- Schema flexibility versus enforceable invariants.
- Authentication and access-control implications.
- Operational and migration constraints as the app grows.

## Output
- Where this approach fits well.
- Consistency and conflict risks.
- Schema or ownership recommendations.
- Questions to answer before committing long term.

## Common Mistakes
- Assuming local-first removes the need for domain rules.
- Ignoring conflict resolution until users collide.
- Overestimating how far prototype ergonomics scale unchanged.
