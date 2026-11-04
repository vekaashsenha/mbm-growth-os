# From prototype to connected operation

No external service is connected to this public demo. This is an implementation contract, not a claim of installed or authenticated tools.

| Capability | Connection needed | Validation before launch |
|---|---|---|
| AI research and drafting | Server-side model provider, permitted search/data source | Evidence extraction, unknowns, factuality, injection resistance and cost caps |
| Shared workspaces | Auth provider and database | Tenant isolation, roles, retention and consent |
| Scheduled research | Scheduler and durable queue | Timezone, cadence, freshness, deduplication, retries and failure alerts |
| CRM | Owner-authorised CRM connection | Field mapping, duplicate policy, write scope and rollback |
| Outbound | Owner-authorised business inbox | Approved sender, recipients/content, suppression, rate limits and applicable requirements |
| Social and newsletters | Authorised channel / scheduler APIs | Correct account, exact approved assets, timezone and publication verification |
| Website blogs | Authorised CMS / deployment service | Draft preview, review, release checks and live verification |
| Search and traffic | Search Console, Bing, analytics | Correct properties, event definitions, freshness and attribution limits |
| Creative | Licensed design / generation service | Brand inputs, usage rights, final asset review and costs |
| Paid media | Authorised ad accounts | Spend limits, conversion events, audience/claims approval and stop rules |

## Suggested sequence

1. Connect a research provider and persistent evidence store; validate a small real account batch.
2. Add authenticated approval records and audit logging.
3. Add a daily or weekly queue with monitoring and idempotency.
4. Connect CRM; keep outreach as drafts until end-to-end approvals are proven.
5. Connect one publishing channel, then expand after verified releases.

Choose providers against the existing business stack, permissions and budget. No subscription, paid credits or production credentials are assumed. Store secrets server-side, never in static files or browser storage. Do not let public visitors execute actions against the owner’s inbox or accounts.
