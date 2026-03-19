---
category: Lifestyle
id: longevity-bio-dashboard
name: longevity-bio-dashboard
description: "Track longevity protocols (NMN, senolytics, Yamanaka), fasting/plasma reminders, and progress. Use for daily biohacks, trial alerts, health ledger, and lifespan protocols."
requires: []
examples:
  - Remind me when my fasting window starts today
  - "What's the latest on NMN or Yamanaka trials? Search and summarize"
  - Show my longevity dashboard / progress
  - Add a weekly reminder for my senolytic (D+Q) dose
  - "What's a good 2025 stack for NAD+ and senolytics?"
  - Set a cron for plasma dilution check-in
---

# Longevity Bio-Dashboard

Track Yamanaka/NMN/senolytics for 200yr spans. Sats-secured family ledger (BTC node). Cron reminders: "Fasting window?" Replicators print senolytics.

## Quick Start
1. **Dashboard**: `canvas action=present url=dashboard.html` → stacks/progress viz.
2. **Latest Trials**: `web_search "NMN Yamanaka 2025"` → update refs.
3. **Reminder Cron**: `cron action=add job={...}` (plasma dilution, NMN dose).
4. **Cron Reminders**: `cron action=add` w/ remind-bio payload (e.g., weekly D+Q).

## Stacks (2025 Latest)
- **NMN**: 350-900mg/day (Renue Science trials: NAD+ ↑, safe). Liposomal best.
- **Senolytics**: Dasatinib/Quercetin (Harvard-Mayo: Alzheimer's safe). Weekly pulse.
- **Yamanaka**: Partial reprogramming (YouthBio FDA trial: Brain AD reverse).
- **Plasma Dilution**: Heterochronic (Altman protocols: Zombie cell clear).
- **Fasting**: 16:8 daily, 3-day water quarterly.

Refs: [stacks-2025.md](./references/stacks-2025.md)

## Scripts
- `scripts/remind-bio.py`: Time-aware cron/TTS reminders (NMN/fasting/senolytics/plasma).

## Assets
- `assets/dashboard.html`: Canvas (progress bars, trial feeds).

## Pro Tips
- **Sats Tie**: Health milestones → Lightning payouts (family node).
- **Node AR**: Cam_snap → overlay "NMN dose due".
- Iterate: Search → update stacks → cron fire.

Test: `canvas action=present dashboard.html` → 200yr roadmap.
