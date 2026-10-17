# VSE Project State and Agent Handoff

**Last updated:** 2026-10-16 (UTC)  
**Base branch audited:** `main` at `88fd17700c44a175ee3fa010f0486aeae4e059b8`  
**Documentation review branch:** `docs/research-readiness-2026-10-16`  
**Current phase:** Research readiness — compare first-experience candidates and inspect supporting evidence (in progress)  
**Product code status:** no frontend/application demo is currently retained in the working tree; the earlier orbit experiment, its test, and its workflow were removed in a separate research-only branch. Git history preserves the prior versions.
**Next action:** continue research and product planning only. Compile source-grounded learning packets; map features, pages, sections, navigation, and learner journeys; inspect design references and record usage rights. Do not rebuild frontend, backend, database, API, or model integrations until the evidence packet and owner-facing readiness recommendation are complete and the owner explicitly authorizes the next phase.

> This is the durable checkpoint. Every agent must read it first after AGENTS.md and must update it after meaningful work. Do not assume work exists unless the current repository confirms it.

## 1. Product in one paragraph

VSE (Visual Science Explorer) follows the north star **make knowledge visible, in the world**. It is a long-term, question-first visual learning environment across mathematics, physics, AI/CS, astronomy, chemistry, biology, Earth/climate, engineering and the wider sciences. A learner can start from a question, build a mental model through progressive explanation and interaction, inspect in-app evidence, then continue to a connected concept or prerequisite inside VSE. The hackathon is one chance to demonstrate the core loop, not the product's identity or limit. The previous orbit demo was an experiment, not the product direction, and has been removed from the working tree; Git history preserves it.

## 2. Confirmed constraints

- No authentication, authorization, login, registration, or user accounts in the current phase.
- No monetization, payments, subscriptions, advertising, or billing in the current phase.
- Do not build a huge science encyclopedia, a generic chatbot, autonomous multi-agent infrastructure, or a massive scraping pipeline as the first deliverable.
- Do not choose a framework, backend, model provider, database, or hosting before selecting the first concept and checking actual hackathon rules.
- Prefer a small, carefully verified, visibly interactive explanation over a large unreviewed content pile.
- Do not send learners to external sites to receive or finish the explanation. External research/data APIs may be used behind the scenes where permitted; show source provenance, claim support, and limitations within VSE.
- The core product is the built-in question-to-visual-understanding experience, combining a growing knowledge library, AI-assisted retrieval/explanation, meaningful interactive visuals, and connections to the next concept—not a static encyclopedia, a gallery of diagrams, or a generic chatbot.
- The hackathon is a proving ground for one small experience, not the reason VSE exists; the longer-term product should grow across fields and help learners move between connected ideas.
- Use AI for discovery/retrieval/drafting only when helpful; AI output does not certify itself.
- Preserve sources and missing work. Do not claim the research collection is exhaustive.
- Agents should continue from this state; no restart or repeated setup without a concrete reason.

See [PRODUCT_CONCEPT.md](PRODUCT_CONCEPT.md), [DECISIONS.md](docs/DECISIONS.md), [SPEC.md](SPEC.md), [AGENTS.md](AGENTS.md), and [QUALITY_AND_PROVENANCE.md](docs/QUALITY_AND_PROVENANCE.md).

### Product clarification — 2026-10-16

The owner has clarified that VSE is not only for hackathons and is not confined to one discipline. Mathematics and physics are major pillars, alongside the wider sciences and technology. The guiding idea is “make knowledge visible, in the world,” with a learner able to continue from one understood idea to a related next idea. Reflect this in product framing, concept relationships, and roadmap decisions. Keep the first build small for validation; do not confuse the bounded demo with the full ambition.


## 3. Latest product clarification — 2026-10-16

VSE must work for curious people who do not already know the technical vocabulary. The learner journey should move from plain-language intuition (including a beginner entry point simple enough for a very young learner), to a concept-appropriate visual, practical exploration or practice when it helps, deeper mechanisms/mathematics, evidence and limitations, and a next connected concept. Practical does not mean every topic requires a simulation; choose the most useful and truthful learning method for the topic. The ambition is broad and long-term, but coverage is added in researched, rights-aware, testable packets. No external page should be required to complete the learner's understanding; internal provenance and source rights must still be preserved.

See `docs/AGENT_RESEARCH_BRIEF.md` for the research-team contract and ready-to-paste agent task.

## 3. Repository reality

The GitHub repository was initially empty when first connected during an earlier setup session. The baseline documentation below was present on `main` at the time of this audit:

- `README.md`
- `AGENTS.md`
- `SPEC.md`
- `PRODUCT_CONCEPT.md` — canonical product direction
- `HACKATHON_SLICE_BRIEF.md` — provisional first hackathon experience
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

The following five readiness documents were added on `docs/research-readiness-2026-10-16` and are not part of `main` until their pull request is merged:
- `docs/PROJECT_AUDIT.md`
- `docs/BUILD_READINESS.md`
- `docs/DATA_AND_RESEARCH_PIPELINE.md`
- `docs/research/DATASET_AND_API_REGISTER.md`
- `docs/research/RESEARCH_BATCH_PLAN.md`

At the audited starting revision, `index.html` contained a standalone satellite-orbit experiment and `tests/orbit-model.test.mjs` tested its inline script. In this research-only branch, the demo, its test, and its dedicated workflow are removed from the working tree. The earlier code remains in Git history for recovery/reference, but it is not an active product frontend. The intended question-first VSE app has not yet been built.

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

### Orbit engineering experiment and product-direction correction (2026-10-16)
- Historical note: a self-contained orbit page was built as an engineering experiment and its bounded regression suite passed on an earlier revision. The demo and its test were later removed from the current research-only working tree; Git history preserves them.
- Added PRODUCT_CONCEPT.md as the canonical explanation of VSE, HACKATHON_SLICE_BRIEF.md as a provisional first-question proposal, and rewrote SPEC.md, ROADMAP.md and ARCHITECTURE.md accordingly.
- The leading question candidate is “How does an AI language model generate an answer?” because it expresses the intended question-first, step-by-step, interactive, deeper-learning flow. It is still a candidate, not an irreversible decision.
- Historical note: the former orbit demo displayed source identities inside its lesson. The current product design remains committed to keeping explanations, interactions, depth, and evidence inside VSE.
- The exact hackathon identity/rules remain unresolved; no eligibility or allowance for pre-existing code is claimed.
- No VSE-wide question input, live AI/retrieval pipeline, constrained visual-plan renderer, deployment, or beginner study exists yet. No independent physics reviewer has reviewed the orbit model.

## 5. Research source status

Status means the item was checked to the recorded depth, not that everything it contains is verified.

- **PARTIALLY VERIFIED:** page/repository and selected details inspected, but individual content/claims/assets may remain unreviewed.
- **CANDIDATE:** useful lead, not examined in depth.
- **NOT STARTED:** not yet researched.
- **BLOCKED:** a known access/permission problem prevents the next check.

Read [SOURCE_CATALOG.md](docs/research/SOURCE_CATALOG.md), [SCIENCE_DOMAIN_MAP.md](docs/research/SCIENCE_DOMAIN_MAP.md), and [RESEARCH_BACKLOG.md](docs/research/RESEARCH_BACKLOG.md). Keep the catalogue and log up to date when new research is done.

## 6. Current blockers and uncertainties

1. Hackathon identity: searches for “World Dot Name weekend hackathon” and close variants did not identify a matching official event page. Deadline/time zone, eligibility, theme, judging criteria, allowed prior work, AI requirements, submission format, and deployment requirements remain unverified. Do not substitute unrelated events.
2. First VSE-facing hackathon slice: not selected yet. “How does an AI language model generate an answer?” is a strong candidate because it aligns with the owner's interest in AI and can demonstrate a step-based, interactive visual explanation, but it should remain a candidate until the event constraints are known.
3. Product experience not yet built: no active frontend exists in the working tree. There is no end-to-end flow that takes a natural-language question, retrieves evidence, constructs a progressive explanation and safe visual plan, and presents it all in-app.
4. Self-contained learning experience: the future VSE-facing experience should keep explanations, visual interactions, deeper material, and evidence inside the app; external research sources remain inputs with traceable provenance.
5. Orbit model status: bounded model/control checks passed in a stub-DOM V8 harness, and GitHub Actions run #38836368258 passed the Node.js 22 regression suite in PR #1, merged as bead3c078e5651f64f3407618584e44a438fb698. This is not independent physics review or real-browser testing.
6. Scientific research remains partial: the OpenAI mathematics family map has not been indexed end-to-end; the overview PDF was not reviewed page-by-page; no full Lean build or independent proof review was performed; most other scientific APIs/resources still require bounded source/rights checks.

## 7. Ordered next actions

Follow `docs/research/RESEARCH_BATCH_PLAN.md` in order. Do not skip ahead to implementation.

### Next action A — choose the first VSE learning journey
The owner-confirmed project is VSE. Compare a small number of candidate lesson topics within this project—led by “How does an AI language model generate an answer?”—based on beginner learning value, primary evidence, a truthful interactive visual, validation feasibility and effort. Do not compare against unrelated products or assume the broad long-term goal requires universal coverage in the first demo.

### Next action B — inspect evidence and a real sample
For data-driven options, inspect one small actual data/API sample or cutout and record its exact product/release, schema, units, missingness/quality fields, geographic/time scope, size, access path, quotas, and item-specific rights. For concept-explainer options, write a bounded claim/source map from authoritative references and explicitly label analogy limits. Update `docs/research/DATASET_AND_API_REGISTER.md`, `RESEARCH_COVERAGE.md`, and `RESEARCH_LOG.md`.

### Next action C — prepare one publishable research packet
Use `docs/CONTENT_SCHEMA.md` and `docs/DATA_AND_RESEARCH_PIPELINE.md` to record the learner outcome, progressive explanation, claims/evidence, visual concept, controlled inputs, assumptions, validation cases, failure behavior, access/privacy/cost, and accessibility. Research broadly enough to select; do not attempt an exhaustive global science index.

### Next action D — complete the build gate and notify the owner
Resolve applicable gates in `docs/BUILD_READINESS.md`. Also track the unrelated PR #2 regex-test failure in `docs/PROJECT_AUDIT.md`; do not silently merge it or assume the preview failure is diagnosed. When the evidence packet is ready, present the smallest recommended first build, reasons, costs, risks and remaining unknowns. **Stop and notify the project owner. Do not begin frontend/backend/database/API work automatically after preparing the recommendation.**

### Event research
The exact “World Dot Name weekend hackathon” page has not been identified confidently. If a link becomes available, check official deadline/time zone, eligibility, theme, judging, prior-code policy, AI/API rules, deployment and submission requirements. Do not borrow terms from unrelated events.

## 8. Definition of done for the current phase

- [x] Repository connected; durable handoff and research records exist.
- [x] VSE's broad visual question-engine concept is documented in PRODUCT_CONCEPT.md and SPEC.md.
- [x] Self-contained in-app learning experience and AI-assisted retrieval layers are specified.
- [x] The earlier orbit experiment was audited and documented. (It has since been removed from the current working tree; Git history preserves it.)
- [ ] Exact hackathon event and official rules verified.
- [ ] First VSE-facing hackathon slice selected and scoped.
- [ ] In-app source/evidence UX and structured visual-rendering contract defined for that slice.
- [ ] First question-to-visual-understanding experience built and tested with a real beginner.

### Repository readiness and no-build gate (2026-10-16)

- Audited the remote `main` tree at `88fd17700c44a175ee3fa010f0486aeae4e059b8`; 29 tracked paths were returned and the recursive tree was not truncated.
- Opened a separate documentation branch, `docs/research-readiness-2026-10-16`, to avoid changing `main` or the unrelated open PR #2.
- Added `docs/PROJECT_AUDIT.md`, `docs/BUILD_READINESS.md`, `docs/DATA_AND_RESEARCH_PIPELINE.md`, `docs/research/DATASET_AND_API_REGISTER.md`, and `docs/research/RESEARCH_BATCH_PLAN.md`.
- Reviewed official data/API documentation for SPHEREx/IRSA, NASA Earthdata CMR, USGS water data, NOAA NCEI, Copernicus Data Space, World Bank Indicators, Crossref, OpenAlex and dataset-card practices. These are service-documentation checks; no representative source/data sample has yet been inspected end-to-end for the selected VSE experience.
- No `LICENSE` file appears in the audited main tree. Do not infer reuse rights from public visibility or automatically choose a license without the owner's decision.
- PR #2's new regex assertion causes the test file to fail to parse in CI with “Invalid regular expression flags”. No runtime or test code was changed in this documentation pass. A separate Cloudflare preview failure was noted but its logs were not inspected.
- Current decision remains HOLD: VSE is the confirmed product direction, but the first bounded learning journey, its full source/claim and validation packet, and owner-facing readiness sign-off are not complete. The exact event identity/rules remain unverified. See `docs/BUILD_READINESS.md`.

## 9. Last verified session summary

- State timestamp: 2026-10-16 UTC.
- Base state audited: `main` at `88fd17700c44a175ee3fa010f0486aeae4e059b8`; documentation review branch: `docs/research-readiness-2026-10-16`.
- PRODUCT_CONCEPT.md remains the canonical intent: turn questions into explanation, meaningful interaction, depth and evidence inside VSE.
- The former root orbit page was an engineering experiment, not the VSE product or a confirmed hackathon entry; it is no longer present in the current working tree.
- Node.js 22 CI regression runs passed for earlier main/PR #1 commits; the separate open PR #2 currently fails to parse due to its new regex assertion. See `docs/PROJECT_AUDIT.md`.
- VSE is the confirmed product direction. The first bounded learning journey and the exact official “World Dot Name weekend hackathon” identity/rules remain unresolved. No complete selected-topic source/claim packet exists yet.
- Current decision is HOLD. Continue from `docs/research/RESEARCH_BATCH_PLAN.md`; do not begin implementation until the readiness report has been presented and the owner has explicitly authorized the scoped build.

