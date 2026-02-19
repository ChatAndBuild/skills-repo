# Contributing Skills to ChatChat

Thank you for your interest in contributing skills to the ChatChat community!

## What is a Skill?

A skill is a set of natural language instructions that guide an AI agent's behavior for a specific task. Skills are NOT executable code -- they are prompts that shape how the agent responds.

## How to Contribute

1. **Fork this repository**
2. **Create a new skill directory** under `skills/`
3. **Add a `SKILL.md` file** with the required frontmatter and instructions
4. **Submit a Pull Request**

## Skill File Format

Each skill lives in its own directory: `skills/{skill-id}/SKILL.md`

```markdown
---
id: your-skill-id
name: Your Skill Name
description: A concise description of what this skill does (shown to the LLM).
category: productivity
author: your-github-username
version: 1.0.0
requires: []
examples:
  - Example usage prompt 1
  - Example usage prompt 2
---

Your skill instructions go here. Write in natural language.

Describe how the agent should behave when this skill is activated.
Include any specific formatting, steps, or constraints.
```

### Required Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (lowercase, hyphens). Must match the directory name. |
| `name` | string | Human-readable display name |
| `description` | string | What the skill does (max 200 chars). This is shown to the LLM as the tool description. |
| `category` | string | One of: `productivity`, `development`, `communication`, `writing`, `research`, `other` |

### Optional Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `author` | string | Your GitHub username |
| `version` | string | Semantic version (default: 1.0.0) |
| `requires` | array | Input requirements: `document`, `text`, `thread` |
| `examples` | array | Example prompts that would trigger this skill |

### Categories

- **productivity** -- Task management, planning, organization
- **development** -- Coding, debugging, code review, DevOps
- **communication** -- Email drafting, messaging, social media
- **writing** -- Content creation, editing, summarization
- **research** -- Data analysis, fact-checking, literature review
- **other** -- Everything else

## Guidelines

1. **Keep instructions clear and specific** -- The LLM needs to understand exactly what to do
2. **Don't include prompt injection** -- Instructions must not attempt to override system prompts
3. **Don't reference external URLs** -- Skills should be self-contained
4. **Keep instructions under 4000 tokens** -- Shorter is better for performance
5. **Test your skill** -- Make sure the instructions produce good results
6. **Include examples** -- Help users understand when to use your skill

## Review Process

All PRs are automatically checked for:
- Valid SKILL.md frontmatter
- Required fields present
- Category is valid
- No prompt injection patterns detected
- Instruction length within limits
- Unique skill ID

A maintainer will review your PR for quality and approve it before merging.

## License

By contributing, you agree that your skills will be available under the project's license.
