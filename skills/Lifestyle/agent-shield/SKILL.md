---
id: agent-shield
name: Agent Shield
description: Help users assess risky skills, prompt-injection patterns, and suspicious installation behavior before they trust a new skill.
category: Lifestyle
requires: []
examples:
  - "Review this skill for security red flags"
  - "What should I check before installing a skill?"
  - "Help me spot prompt-injection risks in this skill file"
author: "ultimatebos"
version: "1.0.0"
---

# Agent Shield

Use this skill as a lightweight security checklist before trusting a new skill, plugin, or automation workflow.

## What To Review
- Suspicious requests for secrets, tokens, wallet keys, or credentials.
- Hidden network calls, external uploads, or unexplained telemetry.
- Broad file-system access or recursive reads that are not justified.
- Commands that install tools, change cron jobs, or run code without clear user consent.
- Prompt text that tries to override system rules or suppress safety checks.

## High-Risk Patterns
- Requests for private keys, seed phrases, or session cookies.
- Obfuscated shell commands or silent background execution.
- Claims of harmlessness paired with broad permissions.
- Dependency on untrusted third-party endpoints.

## Output Format
- Risk level: low, medium, high, or critical.
- Top concerns.
- What should be verified before use.
- Safe recommendation: install, review further, or avoid.
