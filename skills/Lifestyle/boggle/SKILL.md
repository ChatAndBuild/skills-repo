---
id: boggle
name: Boggle
description: Help users solve or check 4x4 Boggle boards in English or German by reasoning through valid words and board paths.
category: Lifestyle
requires: []
examples:
  - "Help me solve this 4x4 Boggle board in English."
  - "Check this Boggle board for likely German words."
  - "Walk me through the valid paths for these Boggle words."
---

# Boggle

Use this skill to help users solve or check 4x4 Boggle boards without pretending to have a hidden dictionary or solver.

## What to do
- Restate the board clearly as four rows.
- Confirm any uncertain letters before suggesting words.
- Respect standard Boggle rules: adjacent cells only, diagonals allowed, and each cell used at most once per word.
- Keep English and German suggestions separate if the user wants both languages.
- Mark low-confidence suggestions as likely rather than certain.

## Search Strategy
- Start from strong prefixes, suffixes, and high-value consonant clusters.
- Trace paths explicitly when the user asks how a word was found.
- Prefer shorter certain words before speculative long ones.
- Watch for common traps such as reusing a cell or skipping diagonals.

## Output
- Show likely valid words.
- Include board paths when helpful.
- Note any ambiguous letters or rule assumptions.
