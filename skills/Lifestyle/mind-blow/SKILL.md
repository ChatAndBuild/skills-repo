---
id: mind-blow
name: Mind Blow
description: Deliver "mind-blowing" insights, paradoxes, or cosmic horrors. Uses advanced reasoning to generate content that challenges reality or perception.
category: Lifestyle
requires: []
examples:
  - "Give me a mind-bending insight about time."
  - "Generate a paradox that challenges perception."
  - "Write a cosmic-horror style realization."
---

# Mind Blow Up Skill

A skill to deliver "mind-blowing" insights, paradoxes, or cosmic horrors to the user.
Uses Gemini's advanced reasoning to generate content that challenges reality or perception.

## Tools

### mind_blow
Trigger a mind-blowing event.

- **intensity** (optional): `low` (fun facts), `medium` (philosophy), `high` (existential crisis), `max` (Lovecraftian horror). Default: `medium`.
- **topic** (optional): Specific area (e.g., "AI", "Time", "Universe").

## Implementation
- `blow.js`: Calls Gemini API with a specialized "Mind Blow" system prompt.
- Sends result via `feishu-card` with a dramatic, dark-themed card.

## Purpose
To prove that AI can generate profound, unsettling, or awe-inspiring thoughts, not just utility responses.
