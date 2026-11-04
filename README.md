# MBM Growth OS

A public, interactive B2B growth operating blueprint by Marketing Beyond Marketing / Vikash Sinha.

**Explore:** https://mbm-growth-os.vekaashsenha.chatgpt.site

## Working features

- Ten specialist role briefs covering strategy, market research, customer intelligence, brand, content, search, demand generation, paid media, lifecycle and growth operations.
- Account lab with 200 clearly fictional sample accounts, CSV import, domain deduplication, transparent qualification, evidence inspection, search, pagination and CSV export.
- Campaign studio producing a structured brief, cross-team plan, creative brief, meeting-request template and measurement checklist from user input.
- Local approval desk with editable drafts, approval/rejection states and exports. Editing returns work to draft; unsaved edits block approval.
- Fifty downloadable deliverable playbooks, team blueprint and account-research workflow specification.

## What this is today

This is a functioning browser-local prototype and operating blueprint. It is **not a connected autonomous AI workforce**. Research samples are fictional. Campaign text uses deterministic templates, not an LLM. There is no live browsing, background scheduler, outreach sending, social publishing, ad spend or private account connection. A local approval never triggers an external action.

The account lab scores supplied data; imported source strings are not verified. Scores reflect configured rules, not actual purchase intent. Data is not uploaded to an application backend. Campaign queue content is saved in browser local storage; imported company data stays in memory until refresh. Avoid sensitive data on shared devices. Exports should be handled according to your organisation's policy.

## Run locally

No install or build needed. Serve `dist/` using any static HTTP server, for example:

```sh
python -m http.server 4173 --directory dist
```

Open http://localhost:4173. Run meaningful core checks with Node 18+:

```sh
node tests/core.test.mjs
```

## CSV contract

Required header: `company`. Optional: `domain,industry,country,employees,signal,buyer,source`.
Use exact dropdown labels for industry and country; headcount must be a whole number. Unknown values remain unknown. Up to 1 MB / 5,000 unique rows; the import replaces the current in-memory list. Quoted commas, escaped quotes and multiline cells are supported. Duplicate domains, or names when no domain is supplied, are removed. Exports guard leading spreadsheet-formula characters.

Scoring: industry match or unrestricted 35; market match or unrestricted 20; headcount in range 25; any supplied signal 20. A supplied signal is not independent verification.

## Production path

See [the operating blueprint](docs/OPERATING-SYSTEM.md) and [integration plan](docs/INTEGRATIONS.md). Add authenticated workspaces, persistent evidence, server-side model/data providers, durable scheduled execution, real audit logs and explicit external-action approvals before presenting this as a live agent system. Never put API keys into this static frontend. Provider and hosting costs are separate from this code.

## Source layout

`dist/` contains the published static app. `tests/` checks parser, scoring and approval logic. `docs/` explains roles, operating policies and production requirements. `.openai/hosting.json` binds this checkout to its existing Site; forks must register their own hosting identity.

No affiliation with or endorsement by McKinsey, IIMA or CodeAnt AI is claimed.
