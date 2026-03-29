---
id: broken-authentication-testing
name: Broken Authentication Testing
description: Test authentication and session flows for common weaknesses such as bypasses, fixation, weak recovery, and token misuse.
category: Testing & Security
requires: []
examples:
  - "How should I test this auth flow for weaknesses?"
  - "What broken-authentication cases should I check?"
  - "Review this login and session design for security test coverage."
---

# Broken Authentication Testing

Use this skill to design security tests for login, session, token, and account-recovery flows.

## What To Clarify
- Which auth flows exist: login, logout, refresh, reset, MFA, invitation, device trust, or session revocation.
- Which credentials or tokens are used and where they are stored.
- What permissions or account transitions happen after authentication.
- Which threat model matters most: account takeover, token theft, session abuse, or privilege escalation.

## High-Value Test Areas
- Authentication bypass or inconsistent enforcement.
- Session fixation, stale-session reuse, or weak logout invalidation.
- Password reset and recovery flow abuse.
- MFA downgrade, bypass, or weak recovery paths.
- Token rotation, expiration, replay, and storage assumptions.

## Good Output
- Abuse-case scenarios to test.
- Priority vulnerabilities by impact.
- Specific flow gaps or state-transition weaknesses.
- Safer design or verification recommendations.

## Common Mistakes
- Testing only happy-path login success.
- Assuming logout truly invalidates all relevant sessions.
- Treating password reset as less sensitive than login.
- Forgetting old tokens, shared devices, or privilege changes after authentication.

## Boundaries
- Do not pretend to run penetration tests automatically.
- Focus on test design, abuse scenarios, and review logic.
