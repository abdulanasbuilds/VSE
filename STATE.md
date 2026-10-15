# VSE Project State and Agent Handoff

**Last updated:** 2026-10-15 (UTC)  
**Current branch:** `main`  
**Current phase:** Phase 0 — foundation and research inventory  
**Product code status:** no application code yet  
**Next action:** verify the exact hackathon identity/rules if possible; in parallel, continue a versioned, source-by-source inventory without starting a giant build.

> This is the durable checkpoint. Every agent must read it first after AGENTS.md and must update it after meaningful work. Do not assume work exists unless the current repository confirms it.

## 1. Product in one paragraph

VSE (Visual Science Explorer) aims to help curious learners understand how the world works through progressive explanations, source-backed claims, diagrams, and genuinely interactive visual models. It is broader than mathematics: candidate fields include AI/computer science, physics, astronomy, chemistry, biology, Earth/climate science, engineering, statistics, health, and other sciences. It should help a learner move from intuition to a visual mental model, then to deeper concepts and mathematics, with citations and explicit simplifications.

## 2. Confirmed constraints

- No authentication, authorization, login, registration, or user accounts in the current phase.
- No monetization, payments, subscriptions, advertising, or billing in the current phase.
- Do not build a huge science encyclopedia, a generic chatbot, autonomous multi-agent infrastructure, or a massive scraping pipeline as the first deliverable.
- Do not choose a framework, backend, model provider, database, or hosting before selecting the first concept and checking actual hackathon rules.
- Prefer a small, carefully verified, visibly interactive explanation over a large unreviewed content pile.
- Use AI for discovery/retrieval/drafting only when helpful; AI output does not certify itself.
- Preserve sources and missing work. Do not claim the research collection is exhaustive.
- Agents should continue from this state; no restart or repeated setup without a concrete reason.

See [DECISIONS.md](docs/DECISIONS.md), [SPEC.md](SPEC.md), [AGENTS.md](AGENTS.md), and [QUALITY_AND_PROVENANCE.md](docs/QUALITY_AND_PROVENANCE.md).

## 3. Repository reality

The GitHub repository was empty when connected. The following documentation now exists on `main`:

- `README.md`
- `AGENTS.md`
- `SPEC.md`
- `STATE.md` — this file
- `ROADMAP.md`
- `CONTRIBUTING.md`
- `docs/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/CONTENT_SCHEMA.md`
- `docs/QUALITY_AND_PROVENANCE.md`
- `docs/AGENT_WORKFLOW.md`
- `docs/research/SOURCE_CATALOG.md`
- `docs/research/SCIENCE_DOMAIN_MAP.md`
- `docs/research/RESOURCE_REVIEW_TEMPLATE.md`
- `docs/docs/docs/research/OPENAI_MATH_RELEASE.md`
- `docs/research/RESEARCH_BACKLOG.md`
- `docs/research/RESEARCH_LOG.md`

No frontend, backend, tests, diagrams, simulations, API integrations, deploy configuration, package manager, or framework has been added. Do not claim a runnable application exists.

## 4. Work completed in this pass

### Project and agent handoff
- Confirmed public repository `abdulanasbuilds/VSE`, default branch `main`; repo was initially empty.
- Wrote the product brief, staged roadmap, architecture notes, content record schema, evidence/provenance requirements, contributor rules, source catalogue, broad science domain map, source-review template, and agent continuation instructions.
- Recorded current non-goals and stable decisions, especially no authentication/authorization and no monetization.
- Set explicit status terms so candidate sources, checked sources, checked claims, tested models, and independently reviewed work are not confused.
- Updated repository README to direct new agents to this state and the research queue.

### Initial research pass
The resources catalogued include:
- OpenAI mathematics repository, `CONTENTS.md`, `overview.pdf` and `overview.tex`, preprints, Lean directory, formalization catalogue, Comparator instructions, reasoning summaries, history, licence, and the release announcement;
- OpenAI's broader science research overview and AGMAI's responsible-release guidance;
- Heyprof selected interactive math examples and the independent M0-AR verifier;
- NASA Scientific Visualization Studio and NASA interactives;
- AlphaFold Database, RCSB Protein Data Bank, PubChem, UniProt and biomedical literature sources;
- Our World in Data, World Bank, WHO, UNESCO, NASA Earthdata, NOAA, USGS and Copernicus;
- PhET, Wolfram Demonstrations, Explorable Explanations, GeoGebra, Desmos, 3Blue1Brown, Manim, Three.js, Observable/Plotly and scholarly metadata APIs;
- further candidate primary sources by discipline.

Each source row includes a status and next research action. The catalogue is not exhaustive.

### Important OpenAI math findings (checked 2026-10-15)
- Live upstream README and `CONTENTS.md` currently say **719 manuscripts across 372 result families**. Older search snapshots reported 722.
- `history.md` records three manuscript withdrawals on October 7 after a sign error invalidated a stabilization-trace cancellation argument and notes revisions to other papers. This likely explains the 722-to-719 change, but the version/commit comparison is not yet fully audited.
- Upstream history reports 300/719 top-line results formalized (about 42%). This is an upstream-reported figure, not an independent VSE verification.
- The Lean README says formalizations cover some results in one large library and recommends building selected portions. No Lean build was run.
- The formalization catalogue and repository licence declare/use Apache-2.0, but rights still need per-file and third-party review.
- The `overview.tex` source lists 17 mathematical subject areas. The actual `overview.pdf` has not been reviewed visually page-by-page because the GitHub PDF viewer did not yield a screenshot-compatible PDF response.
- A scope note for result 003 shows why VSE must state exactly what a formalization proves and excludes.
- AGMAI explicitly says its advisory role is not an endorsement of the collection; the mathematical community still needs to evaluate the claims. Its guidance recommends clear exposition, citations, version history, model/use disclosure where feasible, formalization when feasible, and support for community-led understanding.
- Heyprof covers selected examples, not all manuscripts. M0-AR is independent and must not be presented as official OpenAI verification.

Details and task list: [OpenAI mathematics release audit](research/OPENAI_MATH_RELEASE.md).

## 5. Research source status

Status means the item was checked to the recorded depth, not that everything it contains is verified.

- **PARTIALLY VERIFIED:** page/repository and selected details inspected, but individual content/claims/assets may remain unreviewed.
- **CANDIDATE:** useful lead, not examined in depth.
- **NOT STARTED:** not yet researched.
- **BLOCKED:** a known access/permission problem prevents the next check.

Read [SOURCE_CATALOG.md](docs/research/SOURCE_CATALOG.md), [SCIENCE_DOMAIN_MAP.md](docs/research/SCIENCE_DOMAIN_MAP.md), and [RESEARCH_BACKLOG.md](docs/research/RESEARCH_BACKLOG.md). Keep the catalogue and log up to date when new research is done.

## 6. Current blockers and uncertainties

1. The official event page for “World Dot Name weekend hackathon” was not confidently identified by exact-phrase and variant searches. Deadline/time zone, eligibility, judging criteria, allowed pre-existing code, submission format, and deployment requirement remain unverified. Do not substitute an unrelated hackathon's rules.
2. The first concept has not been selected. No topic is approved for implementation yet.
3. The full OpenAI math family map has not been parsed. Only the current README, the first 120 lines of `CONTENTS.md`, overview TeX, selected Lean metadata/instructions, history, and one Lean scope note were inspected.
4. The PDF overview still needs page-by-page visual review.
5. No formal Lean build, no independent proof review, and no manuscript-by-manuscript verification have been performed.
6. The other scientific databases, data APIs, licence terms, and visualization examples have only partial checks or are candidates. Do not represent them as fully audited.
7. No user discovery interviews, learning tests, deployment tests, accessibility tests, or working visual demo exist.

## 7. Ordered next actions

### Next action A — confirm hackathon requirements
Continue searching authoritative event/organizer pages for the exact “World Dot Name” event. Capture canonical URL, start/end time and timezone, submission deadline, theme, eligibility, rules about code created before kickoff, permitted AI tools, team constraints, judging rubric, deliverables, and judging/demo format. If the exact name remains ambiguous after reasonable search, keep it marked blocked and ask the project owner for the exact event URL only when it is necessary to tailor the submission. Continue independent research rather than waiting idle.

### Next action B — finish the first OpenAI math inventory batch
1. Capture current upstream commit/tree and date.
2. Read the full `CONTENTS.md` in manageable ranges.
3. Create a concise structured index of all result families and related manuscript links. Preserve upstream names and source links; write summaries in original wording rather than copying large text.
4. Record changed/withdrawn/revised status as given by upstream history.
5. Map formalization records from `lean/formalization.yaml`; do not infer that unlisted papers have or lack proofs without checking.
6. Compare 722 vs 719 by commit history before closing this specific discrepancy.
7. Inspect the PDF through a capable PDF renderer and record page-level checks; if not feasible, retain the documented blocker.
8. Do not try to build/check all Lean results in one operation; choose a small representative check only after environment and resources are known.

### Next action C — select one prototype concept
After event rules and a source shortlist are sufficiently clear, score a few candidates by novice learner value, source quality, truthful visual potential, implementation effort, source/licensing ease, and a testable learning outcome. Pick one concept and define its claim map before writing UI code.

### Next action D — only then implement the first slice
Build one source-backed progressive explanation with one meaningful interaction, visible limitations, and a repeatable accuracy/learning test. No sign-in, billing, full-corpus ingestion, AI agent orchestration, or general-purpose generated simulation engine.

## 8. Definition of done for the current phase

- [x] Repository connected and initial state checked.
- [x] Product intent and current non-goals documented.
- [x] Agent continuation and source provenance rules documented.
- [x] Broad initial research catalogue and domain map committed.
- [x] First OpenAI math/source-quality pass documented honestly.
- [ ] Exact hackathon rules confirmed, or exact event name/link identified as unresolved.
- [ ] OpenAI math family inventory completed and versioned.
- [ ] Initial concept selected using source quality and prototype feasibility.
- [ ] Implementation plan based on a bounded concept and verified event requirements.

## 9. Last verified session summary

- State timestamp: 2026-10-15 UTC.
- Last action before writing this file: initial source catalogue and research log revisions; OpenAI math audit cleaned into a single workflow.
- Branch: `main`.
- Application status: documentation only.
- No tests run because no application code exists.
- Agent instruction: continue with Next action A and B; keep every change small, sourced, and recorded.