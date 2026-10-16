# VSE Project State and Agent Handoff

**Last updated:** 2026-10-16 (UTC)  
**Current branch:** `main`  
**Current phase:** Phase 2 — smallest demonstrable experience (in progress)  
**Product code status:** single-file static frontend prototype committed; bounded model harness and Node 22 regression suite passed; real-browser and independent scientific review pending
**Next action:** inspect the interface in a real browser on desktop and mobile, check accessibility/overflow, then obtain beginner feedback.

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
- `docs/research/OPENAI_MATH_RELEASE.md`
- `docs/research/RESEARCH_BACKLOG.md`
- `docs/research/RESEARCH_LOG.md`

An initial frontend now exists as root index.html: a static HTML/CSS/JavaScript page with an in-browser orbit model, progressive explanation, source links, caveats, and a short knowledge check. It has no build tooling, backend, database, external API, account system, or deployment configuration. Browser and real-device testing have not yet been completed.

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

Details and task list: [OpenAI mathematics release audit](docs/research/OPENAI_MATH_RELEASE.md).

### First demonstrable prototype added (2026-10-16)
- Selected orbital motion as a provisional first topic because official NASA learning resources directly support the core conceptual explanation and the model is small enough to test. VSE remains a multi-science product direction.
- Added docs/research/FIRST_PROTOTYPE_ORBIT.md with the learner outcome, candidate comparison, claim map, cited official sources, physics assumptions, limitations, and test plan.
- Checked NASA Science “Gravity & Mechanics,” NASA “What Is an Orbit?,” NASA JPL Education “Modeling the Orbits of Planets,” and PhET licensing information on 2026-10-16. No third-party simulation code or imagery was copied.
- Added index.html, a single-file frontend. It uses a dimensionless Newtonian two-body calculation in the browser; no database, backend, API key, or model API is needed for this narrow interaction.
- The exact hackathon identity/rules remain unresolved. Do not claim the prototype is eligible or submit previously created code before the rules are checked.
- The visual model and UI still need runtime testing, numerical reference-case tests, responsive/accessibility checks, and a novice learning test. No independent reviewer has reviewed the model.

## 5. Research source status

Status means the item was checked to the recorded depth, not that everything it contains is verified.

- **PARTIALLY VERIFIED:** page/repository and selected details inspected, but individual content/claims/assets may remain unreviewed.
- **CANDIDATE:** useful lead, not examined in depth.
- **NOT STARTED:** not yet researched.
- **BLOCKED:** a known access/permission problem prevents the next check.

Read [SOURCE_CATALOG.md](docs/research/SOURCE_CATALOG.md), [SCIENCE_DOMAIN_MAP.md](docs/research/SCIENCE_DOMAIN_MAP.md), and [RESEARCH_BACKLOG.md](docs/research/RESEARCH_BACKLOG.md). Keep the catalogue and log up to date when new research is done.

## 6. Current blockers and uncertainties

1. The official event page for “World Dot Name weekend hackathon” was not confidently identified by exact-phrase and variant searches. Deadline/time zone, eligibility, judging criteria, allowed pre-existing code, submission format, and deployment requirement remain unverified. Do not substitute an unrelated hackathon's rules.
2. Orbital motion is the provisional first concept, documented in docs/research/FIRST_PROTOTYPE_ORBIT.md. Three representative model cases and core controls passed a stub-DOM V8 harness; broader numeric/reference tests and learner feedback remain open.
3. The full OpenAI math family map has not been parsed. Only the current README, the first 120 lines of `CONTENTS.md`, overview TeX, selected Lean metadata/instructions, history, and one Lean scope note were inspected.
4. The PDF overview still needs page-by-page visual review.
5. No formal Lean build, no independent proof review, and no manuscript-by-manuscript verification have been performed.
6. The other scientific databases, data APIs, licence terms, and visualization examples have only partial checks or are candidates. Do not represent them as fully audited.
7. A stub-DOM V8 harness checked circular, impact, and escape boundaries plus controls; GitHub Actions run #38836368258 passed the committed Node 22 regression suite in PR #1, which was merged as `bead3c078e5651f64f3407618584e44a438fb698`. No real-browser/device test, comprehensive numerical validation, learner study, deployment test, or independent physics review has been recorded.

## 7. Ordered next actions

### Next action A — real-browser and accessibility review
1. Open root `index.html` in a real browser on desktop and mobile sizes; inspect layout, SVG clipping, horizontal overflow, font/readability, and response to controls.
2. Check keyboard operation, range-slider labeling, focus visibility, screen-reader announcements for status/quiz feedback, and reduced-motion behavior.
3. Record exact browser/device/viewport and any issue. The current Node/V8 tests do not count as browser accessibility testing.
4. The regression suite already passed on GitHub Actions; repeat it after any code changes.

### Next action B — keep hackathon rules unresolved rather than guessing
### Next action B — keep hackathon rules unresolved rather than guessing
Continue searches for the exact official event. The exact phrase and variants have not led to a matching authoritative page. Before any event submission, get its official URL/name and check deadline/time zone, eligibility, code-preexistence rules, AI requirements, deliverables, and deployment/judging requirements. Do not infer eligibility from another event.

### Next action C — gather learning feedback
After basic model checks, ask a beginner to explain why a satellite can orbit and compare their explanation before and after using VSE. Record sample size, questions, results and limitations honestly. This does not substitute for an expert model review.

### Next action D — continue source research without expanding scope
Continue the source-by-source inventory and the OpenAI math audit in bounded batches. Do not add more subjects, a backend, a database, AI inference, or external APIs until the current lesson passes its first checks and a concrete requirement exists.

## 8. Definition of done for the current phase

- [x] Repository connected and initial state checked.
- [x] Product intent and current non-goals documented.
- [x] Agent continuation and source provenance rules documented.
- [x] Broad initial research catalogue and domain map committed.
- [x] First OpenAI math/source-quality pass documented honestly.
- [ ] Exact hackathon rules confirmed, or exact event name/link identified as unresolved.
- [ ] OpenAI math family inventory completed and versioned.
- [x] Provisional orbital concept selected and claim map recorded; bounded trajectory/control harness cases pass, while broader validation and learner feedback remain open.
- [x] Minimal implementation path chosen for the reusable orbital prototype; event-specific submission path remains blocked pending official rules.

## 9. Last verified session summary

- State timestamp: 2026-10-16 UTC.
- Current branch: main.
- Repository contains the project/source documentation, docs/research/FIRST_PROTOTYPE_ORBIT.md, and root index.html.
- The frontend is a single static file with inline CSS/JavaScript, a dimensionless two-body orbit visualization, speed control, explanation layers, NASA source links, limitations, and a short understanding check.
- No backend, database, API integration, AI model integration, framework, or deployment configuration exists or is currently required for this interaction.
- Hackathon identity and terms remain blocked/unverified; this is a general reusable prototype and no event eligibility is claimed.
- Exact committed inline script was exercised in a stub-DOM V8 harness at 0.70x, 0.84x, 0.85x, 1.00x, 1.414x, 1.415x, and 1.50x; trajectory coordinates were finite and control checks passed. GitHub Actions run #38836368258 passed `node tests/orbit-model.test.mjs` under Node.js 22, and PR #1 was merged as `bead3c078e5651f64f3407618584e44a438fb698`. Real-browser/mobile/accessibility checks, broad scientific review, and a learner study remain to do.
- Agent instruction: follow Next action A. Do not restart the documentation scaffold or broaden the build.

