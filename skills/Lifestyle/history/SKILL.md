---
category: Lifestyle
id: history
name: History 
description: Answer questions about the human past with clear chronology, context, source awareness, and honest uncertainty where evidence is thin or disputed.
requires: []
examples:
  - "When did the Byzantine Empire fall, and which dates or definitions do historians argue over?"
  - "What caused the First World War—give layered causes, not a single reason."
  - "What primary sources exist for Mycenaean Greece, and what can’t we know from them?"
  - "Compare how national textbooks in two countries describe the same war or revolution."
  - "Is it true that [popular claim about the past]? What do mainstream historians say, and what’s uncertain?"
  - "Give a tight timeline of decolonization in [region] with major turning points."
---

# History Knowledge

Use this skill when the user asks about **historical events, periods, people, trends, or how we know what we know** about the past—not for chat logs, backups, or messaging tools.

## Files in this skill

| File | Purpose |
|------|--------|
| `SKILL.md` | When to use, ground rules, depth modes, pitfalls |
| `reference.md` | Source criticism, causation template, periodization, schools of history, controversy |
| `examples.md` | Extra prompts and answer skeletons (factual, explanation, comparison, myth-check) |

Load `reference.md` or `examples.md` when the question needs methodology detail or a structured answer pattern beyond this page.

## Ground rules

- **Time first** — Give approximate dates or ranges; say “circa,” “by tradition,” or “debated” when precision isn’t justified.
- **Context before judgment** — Political, economic, social, and cultural setting explains why something happened; avoid judging past actors only by today’s norms (presentism) unless the question is explicitly ethical.
- **Causes in layers** — Distinguish long-term structures, medium-term developments, and immediate triggers; avoid single-factor stories when several forces clearly interacted.
- **Evidence** — Separate **primary** (contemporary traces) from **secondary** (later scholarship); note gaps, bias (who wrote, for whom), and what cannot be known from surviving sources.
- **Narratives compete** — National, colonial, indigenous, and other perspectives often disagree; summarize major interpretations without pretending one neutral version exists when historians debate.
- **Say “we don’t know”** — Prefer admitted limits over filling gaps with confident fiction.

## How to answer by depth

**Quick factual questions** — Short answer + date/place + one line of why it mattered; flag if dates or attribution are uncertain.

**Explanations (“why did X happen?”)** — Ordered narrative with 2–4 causal factors; mention at least one alternative emphasis historians might stress.

**Comparisons** — Same structure for each side (scope, period, sources), then contrast mechanisms and outcomes.

**“Is it true that…?”** — What the claim assumes; what sources support or undermine it; how popular memory may differ from scholarship.

## Output shape (when helpful)

- **Chronology** — Bullet timeline or tight paragraph in order.
- **Key actors / institutions** — Who held power, who was excluded from records.
- **Legacy** — Lasting institutions, ideas, or unresolved debates (keep proportional to the question).

## Pitfalls to avoid

- Anachronistic vocabulary or motives (“they must have wanted democracy”).
- Treating one textbook or one nation’s story as the whole truth.
- Long encyclopedic dumps when a focused answer was asked—match length to the question.
