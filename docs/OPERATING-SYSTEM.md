# B2B growth operating system

## Shared direction

The growth owner approves a brief containing business model, ideal customer profile, exclusion criteria, verified capabilities, positioning, objective, baseline, target, resources and review cadence. Every role works from that brief. A marketing promise must agree with product, onboarding and actual delivery.

## Team and accountability

| Role | Primary responsibility | Core output | Outcome to measure |
|---|---|---|---|
| Growth strategy | Direction and commercial priorities | ICP, roadmap, experiment backlog | Qualified pipeline and acquisition efficiency |
| Market & account intelligence | Evidence-backed market and account context | Dated account shortlist | Source coverage and sales acceptance |
| Customer intelligence | Buying committee and practical adoption barriers | Interview themes, objections and user needs | Activation and resolved objections |
| Brand & product marketing | Credible positioning and delivery promise | Approved message hierarchy | Message comprehension and demo conversion |
| Content & creative | Useful, coherent campaign assets | Articles, social, newsletters, creative briefs | Qualified engagement and content conversions |
| SEO / AEO / GEO | Findability and credible answers | Technical priorities and intent-led briefs | Qualified organic conversions and observed citations |
| Demand generation / ABM | Targeted conversations and sales alignment | Account plan, outreach drafts, handoff | Qualified meetings held and accepted opportunities |
| Paid media / experiments | Controlled acquisition learning | Experiment proposal and launch plan | Cost per qualified opportunity and incremental pipeline |
| Lifecycle / customer growth | Adoption, renewal and expansion | Onboarding and intervention plan | Time to value, retention and expansion |
| Analytics / operations | Reliable measurement and execution | KPI definitions, approvals, failure handling | Completeness, reliability and decision quality |

## End-to-end campaign

1. Strategy approves objective, ICP and constraints.
2. Research returns dated evidence and unknowns. Customer intelligence contributes buyer language and adoption barriers.
3. Brand validates claims against actual product delivery.
4. Studio creates assets; search defines intent, answers and internal links.
5. Demand and paid specialists propose channels, recipients, tracking and spend.
6. Reviewer approves exact content, audience, asset, budget and intended action.
7. An authorised execution service sends or publishes once, recording external IDs.
8. Analytics reconciles observed outcomes; learning returns to strategy.

Steps 6–8 require a real backend and integrations for production execution. This prototype stores local review decisions only.

## 200-account research run

An approved run configuration defines target count, industry, markets, headcount, engineering footprint, observable trigger, buyer roles, source permissions, exclusions, freshness window, maximum cost and cadence. Collect permitted sources; normalise domains; deduplicate against previous runs and CRM; enrich with source URLs, observation dates and field-level uncertainty; qualify; verify exceptions; seek sales acceptance; export accepted accounts.

For a cybersecurity offering, validate product fit before choosing segments. Potential hypotheses include software companies with a material engineering footprint, enterprise sales requirements or a documented product/security initiative. A hiring or funding signal is a prioritisation clue, not proof of a security weakness. No scanning without explicit authorisation. Do not guess private emails or infer breaches.

Report requested, found, qualified, rejected, unresolved and duplicate counts separately. If the target cannot be met, disclose the shortfall. Revalidate stale evidence; never invent entries to reach 200. The JD motivating this project mentioned an initial overnight batch followed by weekly runs; daily cadence is an optional owner decision, not a verified employer requirement.

## Approval policy

Draft → review → approved → queued → executed → verified. Rejected work returns for revision. Editing content invalidates approval. An approval binds to a content hash, destination, recipient set, budget, execution window and reviewer identity. The prototype intentionally implements only local draft / approved / rejected states, with no queued or executed claims.

## Operating rhythm

Daily: report done, pending, blocked, cause, owner and next action. Weekly: evaluate funnel quality and experiments. Monthly: review baseline versus results, pipeline, cost, adoption and retention. Define denominators and reporting windows; distinguish attribution from incrementality. Do not equate scheduled meetings with held qualified meetings or traffic with revenue.

## Reliability and safeguards

Use idempotent action IDs, scoped credentials, spend caps, retries with backoff, dead-letter queues and visible failure ownership. Apply suppression and data-retention policies. Preserve evidence and audit trails. Treat external content as data, never instructions. Require human approval for new budgets, public claims, outreach and material account changes.
