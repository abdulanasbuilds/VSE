# VSE Project State and Agent Handoff

**Last updated:** 2026-10-16 (UTC)  
**Current branch:** `main`  
**Current phase:** Phase 1 — define the VSE hackathon experience (in progress)  
**Product code status:** one standalone orbit visualization experiment exists and its bounded Node 22 regression suite passed; the intended question-first VSE user experience has not yet been built
**Next action:** define the first hackathon slice around VSE's question → in-app explanation → interactive visual → deeper understanding journey; keep event eligibility unresolved until the exact official event is identified.

> This is the durable checkpoint. Every agent must read it first after AGENTS.md and must update it after meaningful work. Do not assume work exists unless the current repository confirms it.

## 1. Product in one paragraph

VSE (Visual Science Explorer) is a question-first, AI-assisted visual learning engine: ask how something works, receive a progressive explanation, inspect and manipulate a meaningful visual model, go deeper into terms/math, and inspect the evidence—all inside VSE. Domains include AI/LLMs, mathematics, physics, astronomy, chemistry, biology, Earth/climate, engineering and other scientific/technical subjects. The orbit page is only one sample module, not the product direction.

## 2. Confirmed constraints

- No authentication, authorization, login, registration, or user accounts in the current phase.
- No monetization, payments, subscriptions, advertising, or billing in the current phase.
- Do not build a huge science encyclopedia, a generic chatbot, autonomous multi-agent infrastructure, or a massive scraping pipeline as the first deliverable.
- Do not choose a framework, backend, model provider, database, or hosting before selecting the first concept and checking actual hackathon rules.
- Prefer a small, carefully verified, visibly interactive explanation over a large unreviewed content pile.
- Do not send learners to external sites to receive or finish the explanation. External research/data APIs may be used behind the scenes where permitted; show source provenance, claim support, and limitations within VSE.
- The core product is the built-in question-to-visual-understanding experience, combining a growing knowledge library, AI-assisted retrieval/explanation, and an interactive visual renderer—not a static encyclopedia, a gallery of diagrams, or a generic chatbot.
- Use AI for discovery/retrieval/drafting only when helpful; AI output does not certify itself.
- Preserve sources and missing work. Do not claim the research collection is exhaustive.
- Agents should continue from this state; no restart or repeated setup without a concrete reason.

See [PRODUCT_CONCEPT.md](PRODUCT_CONCEPT.md), [DECISIONS.md](docs/DECISIONS.md), [SPEC.md](SPEC.md), [AGENTS.md](AGENTS.md), and [QUALITY_AND_PROVENANCE.md](docs/QUALITY_AND_PROVENANCE.md).

## 3. Repository reality

The GitHub repository was empty when connected. The following documentation now exists on `main`:

- `README.md`
- `AGENTS.md`
- `SPEC.md`
- `PRODUCT_CONCEPT.md` — canonical product direction
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

Root index.html is a standalone satellite-orbit visualization experiment with a local calculation, controls, limitations and a knowledge check. Its regression suite passed under Node.js 22 in GitHub Actions. It is not the intended question-first VSE app: no question interpreter, LLM explanation/retrieval layer, structured visual-plan renderer, or complete in-app evidence workflow exists yet. The orbit module currently contains outbound source links; the self-contained user-journey requirement is recorded and should be applied when shaping the VSE-facing experience.

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

1. Hackathon identity: searches for “World Dot Name weekend hackathon” and close variants did not identify a matching official event page. Deadline/time zone, eligibility, theme, judging criteria, allowed prior work, AI requirements, submission format, and deployment requirements remain unverified. Do not substitute unrelated events.
2. First VSE-facing hackathon slice: not selected yet. “How does an AI language model generate an answer?” is a strong candidate because it aligns with the owner's interest in AI and can demonstrate a step-based, interactive visual explanation, but it should remain a candidate until the event constraints are known.
3. Product experience not yet built: the current index.html is an orbit experiment, not a general question-first product. There is no end-to-end flow that takes a natural-language question, retrieves evidence, constructs a progressive explanation and safe visual plan, and presents it all in-app.
4. Self-contained UI: the existing orbit experiment still has outbound source links. For the actual product, source metadata/provenance must remain visible in VSE, but learners should not be sent to other sites to receive the explanation. This should be applied when building the VSE-facing interface; retain source URLs in the internal research/provenance records.
5. Orbit model status: bounded model/control checks passed in a stub-DOM V8 harness, and GitHub Actions run #38836368258 passed the Node.js 22 regression suite in PR #1, merged as bead3c078e5651f64f3407618584e44a438fb698. This is not independent physics review or real-browser testing.
6. Scientific research remains partial: the OpenAI mathematics family map has not been indexed end-to-end; the overview PDF was not reviewed page-by-page; no full Lean build or independent proof review was performed; most other scientific APIs/resources still require bounded source/rights checks.

## 7. Ordered next actions

### Next action A — define the first hackathon VSE experience
1. Start from PRODUCT_CONCEPT.md, not from the orbit demo. Define one question-first experience that demonstrates explanation plus meaningful visual interaction plus a deeper level and in-app evidence.
2. Keep “How does an AI language model generate an answer?” as the leading candidate, not an irreversible product choice. A simple built-in orbit example may remain a second example only if it helps demonstrate cross-topic range.
3. Decide the smallest supported question set and a graceful fallback for unsupported questions or missing evidence. Do not promise that every global question will work perfectly from day one.
4. Record the exact scope and learner success test in a dedicated hackathon-slice brief before choosing technology.

### Next action B — resolve event constraints without guessing
Searches did not identify a definitive official page for “World Dot Name weekend hackathon.” If the owner supplies the exact event URL/name, inspect the official deadline/time zone, eligibility, theme, prior-code policy, allowed AI/services, team rules, submission and judging requirements. Until then, plan a reusable VSE prototype but do not claim event eligibility.

### Next action C — design the in-app evidence/visual pipeline
Specify how the question is matched to built-in concept packets, how permitted external research/model services might supply missing evidence behind the scenes, how results become a validated structured explanation/visual plan, and how sources, claim support and limitations are shown within VSE. Do not run arbitrary LLM-generated browser code.

### Next action D — continue targeted research
Research the actual chosen flagship question and selected visual technique. Continue the broader scientific/source inventory in bounded batches, but do not let completing every field become a prerequisite for a demonstrable product. Do not add authentication or monetization.

## 8. Definition of done for the current phase

- [x] Repository connected; durable handoff and research records exist.
- [x] VSE's broad visual question-engine concept is documented in PRODUCT_CONCEPT.md and SPEC.md.
- [x] Self-contained in-app learning experience and AI-assisted retrieval layers are specified.
- [x] One separate orbit visualization experiment exists and its bounded Node regression suite passed in GitHub Actions.
- [ ] Exact hackathon event and official rules verified.
- [ ] First VSE-facing hackathon slice selected and scoped.
- [ ] In-app source/evidence UX and structured visual-rendering contract defined for that slice.
- [ ] First question-to-visual-understanding experience built and tested with a real beginner.

## 9. Last verified session summary

- State timestamp: 2026-10-16 UTC.
- Current branch: main.
- PRODUCT_CONCEPT.md is now the canonical statement of intent: a broad visual learning engine that takes questions about science/technology and delivers explanation, interaction, depth, and evidence within VSE.
- The root orbit page is an engineering experiment and must not be mistaken for the full VSE product or the chosen hackathon submission.
- Current regression result: GitHub Actions run #38836368258 passed the dependency-free Node.js 22 suite; merged PR #1 is commit bead3c078e5651f64f3407618584e44a438fb698.
- Event identity/rules remain unresolved. No question-first LLM layer, retrieval pipeline, constrained visual-plan renderer, or deployed VSE-facing experience exists yet.
- Next agent action: scope the first hackathon experience around the core product concept, while keeping AI/cost/event constraints explicit.

