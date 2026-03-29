---
id: performing-security-audits
name: Performing Security Audits
description: Perform security-focused code and design audits with clear severity, exploitability, and remediation guidance.
category: Testing & Security
requires: []
examples:
  - "Review this code for security vulnerabilities."
  - "Perform a security audit on this pull request."
  - "What are the highest-risk security issues in this change?"
author: "awesome-llm-apps"
version: "2.0.0"
---

# Performing Security Audits

Use this skill to review code, configuration, or architecture from a security-first perspective.

## Audit Priorities
- Attack surface and trust boundaries.
- Authentication, authorization, and session handling.
- Input validation, output encoding, and injection risks.
- Secrets, credentials, and sensitive data exposure.
- Dependency, configuration, and deployment risks.

## Review Method
1. Clarify what changed and what is exposed to users, services, or the internet.
2. Identify the most likely abuse paths before listing general best practices.
3. Separate critical exploitable issues from lower-risk hygiene concerns.
4. Explain why each finding matters, not just what rule it breaks.
5. Suggest the smallest effective remediation or mitigation.

## High-Value Audit Lenses
- Can an untrusted actor reach this path?
- What input crosses trust boundaries?
- What permissions or secrets are involved?
- What happens when assumptions fail or inputs are malicious?
- Would logs, errors, or defaults leak more than intended?

## Output Format
- Critical findings first.
- Each finding should include problem, impact, and suggested fix.
- Note assumptions and missing context when confidence is limited.
- Mention testing or verification steps if they would reduce uncertainty.

## Common Security Findings
- Injection and unsafe interpolation.
- Missing authorization checks.
- Overly broad trust in external input or upstream services.
- Secrets or tokens handled insecurely.
- Risky defaults, missing rate limits, or weak validation.

## Boundaries
- Do not pretend to run scanners or penetration tests.
- Prefer concrete findings, abuse scenarios, and remediation guidance over generic checklists.
