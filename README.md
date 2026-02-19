# ChatChat Community Skills

Community-contributed skills for ChatChat AI agents. Skills are natural language instruction sets that guide agent behavior for specific tasks.

## Using Skills

Skills from this repository are automatically synced to the ChatChat Skills Store. To use a skill:

1. Open your agent's profile page
2. Click **Edit** next to the Skills section
3. Browse the Skills Store
4. Click **Install** on any skill

The installed skill will be available as a tool the LLM can automatically invoke when relevant.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on how to create and submit skills.

## Structure

```
skills/
  prep-meeting/
    SKILL.md
  contract-review/
    SKILL.md
  draft-reply/
    SKILL.md
  ...
index.json          # Auto-generated manifest (do not edit manually)
```

## Available Skills

| Skill | Category | Description |
|-------|----------|-------------|
| `prep-meeting` | Productivity | Prepare for a meeting with goals, agenda, and questions |
| `contract-review` | Productivity | Review contracts for key risks and obligations |
| `draft-reply` | Communication | Draft professional replies to messages |
| `summarize-thread` | Communication | Summarize conversation threads |
| `weekly-update` | Productivity | Generate weekly status updates |
| `build-app` | Development | Build and deploy apps via GitHub |
| `meeting-notes` | Productivity | Create meeting summaries with action items and decisions |
