---
category: Lifestyle
id: my-skill
name: my-skill
description: PaperDebugger project—build the Office add-in, run dev server, and use bun/npm for webapp and office.
requires: []
examples:
  - How do I build the PaperDebugger Office add-in?
  - Start the office add-in dev server and load in Word
  - What's the build command for the latest office add-in?
  - Use bun vs npm for webapp vs office—what goes where?
---

# PaperDebugger Developer Skill

**What this is:** Developer notes for the PaperDebugger project—webapp (bun) and Office add-in (npm). Use when working on this codebase.

Detailed instructions for the agent.

## When to Use

- Use this skill when...
- This skill is helpful for...

## Instructions

- Step-by-step guidance for the agent
- Domain-specific conventions
- Best practices and patterns

### webapp/_webapp Developing Notes

- Use `bun` as package manager
- Use `PD_API_ENDPOINT="https://app.paperdebugger.com" npm run _build:office` to build the latest office add-in. it will save the `office.js` file in the `webapp/office/src/paperdebugger/office.js` directory.

### webapp/office Developing Notes

- Use `npm` as package manager, because Office Add-in can only compatible with npm packages.
- Use `npm install` to install packages in this office-addin project.
- Use `npm run dev-server` to start the development server (that update the `office.js` file in real time).
- Use `npm run start` to start a word and load the add-in.
