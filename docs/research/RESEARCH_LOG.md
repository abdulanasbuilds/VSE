# Research Log

## 2026-10-15 — Initial connection, product framing, and source pass

### Repository

- Connected to [abdulanasbuilds/VSE](https://github.com/abdulanasbuilds/VSE).
- GitHub repository metadata reports it is public, default branch main, and was empty before this documentation was created.
- No existing application code, framework, deployment, or prior content could be inspected. Do not assume a stack or existing state.
- First README commit: 14da667e29e15b9e8a9e6211f8e1b847dc4a2fcf.
- Other initial documentation was added in following commits; see git history for the full sequence.

### Sources inspected during the first pass

- OpenAI math README: https://github.com/openai/math/blob/main/README.md
  - Opened the page and read the current visible text.
  - Current visible content says 719 manuscripts across 372 families and approximately 42% of top-line results formalized.
  - Older search snapshots still show 722 manuscripts. Status: discrepancy recorded, not resolved to a single immutable count.
  - README warns that not all entries have Lean formalizations and unformalized results can have issues.
  - It points to CONTENTS.md, overview.pdf, preprints, the Lean library, formalization catalogue, Comparator instructions, reasoning traces, and history.
- OpenAI science: https://openai.com/science/
  - Opened official overview.
  - It describes AI-assisted research across mathematics, physics, chemistry, biology, literature/evidence search, data/code analysis, modelling, and research workflows.
  - Individual study pages and primary papers still need review.
- NASA Scientific Visualization Studio: https://svs.gsfc.nasa.gov/
  - Opened official library page. It describes data-backed visualizations, animations, images, and interactive content in Earth and space sciences.
  - It offers navigation by science category and media type; individual assets need separate source/rights checking.
- AlphaFold Database: https://alphafold.ebi.ac.uk/
  - Opened database and inspected its visible attribution/licensing section.
  - Site states open access to over 200 million protein structure predictions and CC BY 4.0 for AlphaFold data, with citations expected.
  - Individual third-party datasets and scientific interpretations require their own review.
- Our World in Data about page: https://ourworldindata.org/about
  - Opened official page. It describes more than 120 topics and over 14,000 interactive charts/tools.
  - Its articles/charts are CC BY unless stated otherwise, but underlying datasets often come from third parties and retain their own terms.
- PhET licensing: https://phet.colorado.edu/nb/licensing
  - Opened current licensing information.
  - Page states regular HTML simulation files are published under CC BY-NC 4.0; commercial use includes ad-supported and subscription products under their examples and may require a commercial licence.
  - Older/legacy resources can have different terms. Check the exact simulation and asset before embedding or adapting.
- NASA Interactives: https://www.nasa.gov/interactives/
  - Opened page and noted examples for climate, exoplanets, ice, sonification, Hubble, and other space/science experiences.
  - Every particular project requires a separate source, media, and accessibility review.
- Heyprof selected mathematics demos: https://www.heyprof.app/en/demo/fach/ki-forschungsmathematik
  - Opened the page; it describes 32 interactive visual examples based on selected OpenAI math families.
  - These are selected demonstrations, not an exhaustive visual compilation of the entire corpus.
- M0-AR independent math verification demo: https://m0-ar.github.io/openai-math-verify-2026/preview.html
  - Opened preview and read its stated scope and limitations.
  - It is independent of OpenAI and discusses multiple levels of checking. It explicitly says the Riemann-hypothesis central line and associated million-dollar prize are not solved by its cited narrower strip claim. Each detail still needs source-level review before VSE makes a claim.

### Additional discovery candidates surfaced

- Wolfram Demonstrations Project: https://demonstrations.wolfram.com/ — 13,000+ interactive computational demonstrations across science and other topics; individual reuse rights need review.
- Crossref REST API docs: https://www.crossref.org/documentation/retrieve-metadata/rest-api/ — provides scholarly metadata as JSON; abstracts and article contents may still be copyrighted.
- PubChem PUG REST: https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest — documented chemistry data service.
- Explorable Explanations curated list: https://github.com/blob42/awesome-explorables — discovery index, not blanket permission to reuse linked works.
- PhET, AlphaFold, NASA, OpenAI and Our World in Data should be treated as different kinds of source: educational simulation, prediction database, institutional visualization library, research collection, and research/data explainer respectively.

### Decisions now recorded

- VSE will start with an evidence-led visual explanation for one topic, not comprehensive ingestion.
- Research records must distinguish a resource being found from claims being verified.
- Current scope excludes authentication/authorization, payment, monetization, and subscriptions.
- Stack and deployment remain undecided until the official hackathon constraints and first concept are known.
- Future agents must continue from STATE.md and update the handoff after meaningful work.

### Work still not performed

- The OpenAI math repository's full contents, PDF overview pages, source TeX, proof tree, and manuscript families were not audited end-to-end.
- No Lean build or proof check was run.
- No individual proof was independently validated.
- Most candidate APIs and scientific portals are listed for future review but not individually verified.
- No technical application code was created; repository initialization currently consists of project and research documentation.
- The hackathon's official rules/deadline/judging criteria have not yet been verified.

## 2026-10-15 — OpenAI mathematics corpus and source-quality expansion

### OpenAI mathematics collection: deeper inspection

- Fetched the current upstream README and the first 120 lines of [CONTENTS.md](https://github.com/openai/math/blob/main/CONTENTS.md): both report 719 manuscripts across 372 result families. The full contents map has not been read end-to-end.
- Fetched [overview.tex](https://github.com/openai/math/blob/main/overview.tex); its metadata repeats the 719/372 counts and lists 17 subject headings. The actual PDF was not visually reviewed: GitHub's PDF viewer could not be captured as a PDF page in this session. This limitation is explicit in the math audit.
- Fetched [lean/README.md](https://github.com/openai/math/blob/main/lean/README.md): it says the formalizations cover some results in a single large library and recommends compiling small portions. Full compilation has not been attempted.
- Fetched the beginning of [lean/formalization.yaml](https://github.com/openai/math/blob/main/lean/formalization.yaml), which declares the OpenAI math formalization project as Apache-2.0; checked the repository [LICENSE](https://github.com/openai/math/blob/main/LICENSE), also Apache-2.0. Individual manuscript/media/third-party asset rights still need checking before reuse.
- Read [Comparator challenge instructions](https://github.com/openai/math/blob/main/lean/ComparatorChallenges/README.md). The listed examples explicitly include comparisons of supporting results that do not claim to verify corresponding papers' main theorems.
- Read the scope note for result 003, [the quasi-Riemann hypothesis](https://github.com/openai/math/blob/main/lean/docs/003.md). It precisely states what parts are included in the Lean formalization, what later paper applications are excluded, the principal-pole exclusions, and that the constant in one zero-free statement is non-explicit. This is a good example of documenting a proof's scope rather than showing a misleading all-or-nothing badge.
- Fetched [history.md](https://github.com/openai/math/blob/main/history.md). Its October 7 entry documents withdrawal of three manuscripts following a sign error that invalidated an argument behind dependent papers, along with revisions to 14 other manuscripts, reference updates to 13, and six new formalizations plus five supporting-result additions. It reports 300 of 719 top-line results formalized (~42%). The current 719 vs older 722 discrepancy likely reflects the three withdrawals, but the commit-level history still needs explicit audit before closure.
- Opened the official [OpenAI math release announcement](https://openai.com/index/sharing-ai-progress-in-mathematics/), dated October 6, 2026. It explains the release and references the Advisory Group on Mathematics and AI; it should be attributed as OpenAI's own announcement, not as independent peer acceptance.
- Opened the [AGMAI website](https://agmai.org/) and [September 29 responsible-release guidelines](https://agmai.org/general-sep29/). The group explicitly says its advisory role is not an endorsement of results. Its recommendations include clear exposition, citations, version history, disclosure of model/use where feasible, formalization when feasible, and support for community-led assessment. Added these as sources and added that nuance to the audit.
- Rechecked [Heyprof's selected visual examples](https://www.heyprof.app/en/demo/fach/ki-forschungsmathematik) and [M0-AR's independent visual verifier](https://m0-ar.github.io/openai-math-verify-2026/preview.html): both are examples for source-linked visual presentation, not proof that the entire corpus is complete or independently verified.

### Additional project and source changes

- Completed the initial Markdown scaffold: AGENTS.md, SPEC.md, STATE.md (created later in this session), ROADMAP.md, ARCHITECTURE, CONTENT_SCHEMA, QUALITY_AND_PROVENANCE, AGENT_WORKFLOW, DECISIONS, CONTRIBUTING, SOURCE_CATALOG, RESOURCE_REVIEW_TEMPLATE, SCIENCE_DOMAIN_MAP, OPENAI_MATH_RELEASE, RESEARCH_BACKLOG, and this log.
- Added governance rule that discoveries, proof status, source status, and visualization status are separate concepts.
- First research/source pass is still not a complete corpus audit. No VSE frontend or interactive demo has been implemented.
- Exact “World Dot Name weekend hackathon” official event page and terms were not confidently identified in search. The exact event name, deadline, judging rubric, and submission restrictions remain an active P0 task; do not assume requirements from an unrelated hackathon.


## 2026-10-15 — Hackathon event identification check

- Searched web for the exact phrase “World Dot Name weekend hackathon”, “World.Name weekend hackathon”, and variants describing a current global weekend AI hackathon.
- No authoritative event page matching that exact name was confidently identified during this pass. Search results included other unrelated or already-past October 2026 events; do not substitute their requirements or imply they are the user's intended event.
- The official event identity, deadline and time zone, judging rubric, submission format, age/eligibility rules, rules about prior code, and required deployment remain **unverified**. Keep this as a P0 blocker before narrowing the build plan.


## 2026-10-16 — First orbital concept and static frontend slice

### Source review
- Opened NASA Science Chapter 3: Gravity & Mechanics (https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/) and read the “How Orbits Work” and “Key to Space Flight” sections. NASA describes Newton's cannonball analogy and explicitly names simplifications such as ignored atmospheric drag. This supports the conceptual explanation, not a validation of VSE code.
- Opened NASA's What Is an Orbit? (Grades 5–8) (https://www.nasa.gov/solar-system/what-is-an-orbit-grades-5-8/). It explains the role of gravity and sideways motion at a beginner level.
- Opened NASA JPL Education's Modeling the Orbits of Planets (https://www.jpl.nasa.gov/edu/resources/lesson-plan/modeling-the-orbits-of-planets/), a lesson connecting gravity, mass, and motion.
- Opened PhET's Licensing Information (https://phet.colorado.edu/en/licensing). Regular HTML simulation files are described as CC BY-NC 4.0 and carry separate attribution/brand and commercial-use constraints. VSE does not embed or copy PhET code/assets for this prototype.
- Searches did not identify a definitive official event page for “World Dot Name weekend hackathon.” Do not infer its requirements from unrelated events.

### Product decision and implementation
- Created docs/research/FIRST_PROTOTYPE_ORBIT.md, including a bounded shortlist, learner objective, claim map, sources, assumptions, limitations, and test plan.
- Created root index.html: one standalone HTML/CSS/JavaScript frontend, original SVG presentation, dimensionless Newtonian central-gravity integration, speed control, presets, reset, progressive explanation, equations, citations, limitations, and a short knowledge check.
- The first slice deliberately has no database, server, external API, model call, credentials, framework, or external asset dependency. It is intended to stay lightweight and work without network calls after the page is loaded.
- The orbital choice is provisional and does not make VSE a space-only product. The frontend is not confirmed eligible for any unidentified hackathon; check code-preexistence and submission rules before submitting.

### Verification state
- Source pages were opened and relevant sections inspected. Source metadata and the first concept-level claim map are recorded; no independent physics reviewer has checked the model.
- Current status is prototype created; model not yet tested. Do not mark the visualization MODEL TESTED until the exact committed file has repeatable numerical and interaction tests.
- Not performed: browser execution, mobile-device check, keyboard/screen-reader audit, independent reference calculation check, performance review, learner study, or deployment.

### Immediate follow-up
1. Fetch and syntax-check the exact committed JavaScript.
2. Exercise speed cases near 0.70x, 1.00x, and 1.50x; check collision/orbit/escape labels and finite output.
3. Check reset, preset buttons, quiz feedback, responsive layout, and reduced-motion behavior.
4. Record failures and fix them before a public demo.


## 2026-10-16 — Bounded model/control checks and regression automation

### Checks actually performed
- Fetched the committed `index.html` and compiled/executed its exact inline script in a V8 harness with a stub DOM.
- At 1.00x circular speed, the generated path radius ranged from 1.7998768736 to 1.8001230471 around a starting radius of 1.8.
- At 0.70x, the path reached a minimum radius of about 0.9981, crossed the modeled planet radius of 1, and was labeled Impact.
- At 1.50x, the path reached the visualization boundary at radius about 4.0023 and was labeled Escape.
- The inspected SVG path coordinates were finite. Preset selection, reset, correct/incorrect quiz feedback, and answer pressed-state behavior also passed in the stub-DOM harness.
- These are bounded harness checks only. No real browser, phone, screen reader, external scientific reviewer, or learner evaluation was used. The output boundary at radius ~4.0 clips the displayed escape path; this is now described in the model caveats.

### Reproducibility
- Added `tests/orbit-model.test.mjs` (Node.js built-ins only) to repeat the basic path and control checks.
- Added `.github/workflows/orbit-model-tests.yml` to run the regression script on relevant pushes and pull requests, using Node.js 22 without installing project dependencies.
- The current connector did not provide a confirmed run result for the push commit. Do not claim GitHub Actions or the committed test script passed until that result is observed or the exact file is run in a checkout.
- Added NASA GSFC's archived orbital-velocity learning page as a supporting equation reference: https://pwg.gsfc.nasa.gov/stargaze/Skepl3rd.htm. It derives circular velocity and the sqrt(2) escape-speed relationship but warns that the page is archival and no longer updated (last updated 2008). It is supporting educational material, not independent verification.

### Immediate next step
Run the committed regression script locally or inspect a confirmed GitHub Actions run, add impact-boundary tests, then check the exact page in an actual browser at mobile and desktop widths. Keep the source/claim status separate from model-test status.


## 2026-10-16 — Additional near-boundary orbit checks

- Re-executed the committed inline JavaScript in a stub-DOM V8 harness with added near-boundary speed settings. At 0.84x, the trajectory crossed the planet radius and reported Impact (minimum displayed radius about 0.99971). At 0.85x, the displayed minimum radius was about 1.01797 and outcome was Elliptical. This brackets the impact threshold for the chosen normalized starting setup; it is not a universal speed threshold for all orbits.
- At 1.414x (slightly below sqrt(2)), the model reported a bound Elliptical path; at 1.415x and 1.50x it reported Escape. The escape and high-eccentricity bound paths reach the view boundary and are clipped, as described in the caveats.
- Rechecked finite displayed coordinates, preset selection, reset, correct/incorrect quiz feedback, and a user-requested step under reduced-motion mode. These are stub-DOM harness results, not a real browser run.
- Updated `tests/orbit-model.test.mjs` to preserve checks for the 0.84x/0.85x impact boundary and 1.414x/1.415x escape boundary. GitHub Actions is configured but no CI result has been confirmed through the available connector yet.

### Next step

Run the committed Node test file or obtain a confirmed CI run; then test the actual page in a real browser and inspect keyboard, reduced-motion, mobile layout, and accessibility behavior.

## 2026-10-16 — Regression suite confirmed in GitHub Actions

- Opened PR #1 (`https://github.com/abdulanasbuilds/VSE/pull/1`) with a focused assertion for the trajectory just above the escape threshold. GitHub Actions run #38836368258 completed successfully; job `orbit-model` and step `Run dependency-free regression tests` both reported success using Node.js 22.
- Merged PR #1 into `main` with squash merge commit `bead3c078e5651f64f3407618584e44a438fb698`.
- This confirms the committed Node regression assertions execute successfully in CI. It does not independently validate the physics, prove every trajectory numerically correct, or replace real-browser, device, accessibility, and learner testing.
- Next action is a real-browser/mobile accessibility review of the prototype before any broader feature work.

## 2026-10-16 — Product concept clarified and handoff corrected

- The product owner clarified that VSE is a question-first visual learning engine across AI/LLMs, mathematics and broader scientific/technical subjects. The goal is not an orbit app, an encyclopedia to scroll through, a gallery of static diagrams, or a generic text chatbot. It should turn a person's question into an accessible explanation, a meaningful visual model, user-controlled exploration, deeper terms/mathematics, and in-app evidence/limitations.
- A core user-experience constraint is that learners should not have to leave VSE to understand the answer. Source identities and relevant evidence should be displayed inside the app; canonical source URLs, claim support, dates, and rights notes remain in internal records. Permitted external research/API calls may inform answers behind the scenes, but should not be a substitute for the in-app explanation. This also does not authorize copying whole copyrighted sources.
- Reframed the satellite-orbit page explicitly as an engineering experiment/reusable topic module, not the product direction or confirmed hackathon entry. Removed outbound source links from the orbit page and kept source identities/descriptions in-page.
- Added PRODUCT_CONCEPT.md as the canonical product statement and HACKATHON_SLICE_BRIEF.md as a candidate-first-experience document. Rewrote SPEC.md, docs/ARCHITECTURE.md, ROADMAP.md and the STATE.md handoff; updated decisions, agent rules, content schema and backlog.
- The leading hackathon concept candidate is “How does an AI language model generate an answer?” with a staged explanation, an explicitly illustrative next-token interaction, a deeper technical layer, and in-app source/limitations panel. This is not locked until event rules and a feasible implementation plan are verified.
- Searched the exact phrase “World Dot Name weekend hackathon” and variants again. No matching official event page was confidently identified; search results did not establish the specific event's deadline, theme, eligibility, judging, prior-code policy, or deployment requirements. Do not borrow terms from other events.

### Next action
Verify the exact hackathon event if possible, then decide the smallest implementation that proves the question → explanation → interactive visual → deeper layer → in-app evidence loop. Continue from STATE.md; do not restart or treat the orbit experiment as the complete project.

## 2026-10-16 — Repository readiness audit and data-source planning

### Remote repository state
- Audited `abdulanasbuilds/VSE` at main SHA `88fd17700c44a175ee3fa010f0486aeae4e059b8`. The recursive tree returned 29 tracked paths and was not truncated.
- Confirmed the product/spec/agent/research documents, orbit experiment, Node.js 22 regression suite and CI workflow are present. The orbit page remains a bounded engineering experiment, not the complete question-to-visual VSE application.
- The current main revision is documented separately from the research branch. No runtime code, test source, framework, database, frontend, backend, model integration or API integration was changed during this documentation pass.
- Added `docs/PROJECT_AUDIT.md`, `docs/BUILD_READINESS.md`, `docs/DATA_AND_RESEARCH_PIPELINE.md`, `docs/research/DATASET_AND_API_REGISTER.md`, and `docs/research/RESEARCH_BATCH_PLAN.md` on `docs/research-readiness-2026-10-16`. The branch is isolated from main and from open PR #2.

### Tests and repository hygiene
- Confirmed PR #1's Node.js 22 regression run and a subsequent run on main succeeded.
- Inspected PR #2 and its GitHub Actions log. Its added regular-expression assertion at the beginning of `tests/orbit-model.test.mjs` is syntactically invalid and throws “Invalid regular expression flags” before the existing tests run. PR #2 remains a separate issue; this research pass did not fix or merge it.
- A deployment bot reported a failed Cloudflare preview build for the PR #2 branch. The linked build logs were not inspected; the cause remains unknown.
- No LICENSE file exists in the audited main tree. This does not establish that all project code or source materials are reusable; licensing is an owner decision and third-party source/data/media rights require separate checks.

### Official data/API source-document checks
- SPHEREx: IRSA's official Quick Release overview describes QR3, started in September 2026, and access through the Data Explorer, Astroquery, SIA, browsable directories and cloud paths. IRSA already offers discovery and analysis tools, so VSE must establish a distinct learning outcome before considering an explorer route. Sources: [IRSA QR overview](https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_qr.html), [IRSA archive/tools](https://irsa.ipac.caltech.edu/Missions/spherex.html), [NASA SPHEREx context](https://science.nasa.gov/open-science/spherex-universe-map/).
- NASA CMR, USGS Water Data, NOAA NCEI, Copernicus Data Space, World Bank Indicators, Crossref and OpenAlex official docs were checked as possible service candidates. The details and exact follow-up checks are recorded in `docs/research/DATASET_AND_API_REGISTER.md`.
- Dataset-card documentation from Hugging Face was reviewed as a possible template for a future ML dataset route. An author-supplied dataset card is not independent validation of the files or their license.
- All of these checks are source/service documentation checks only; no sample data has been fetched and validated for a selected product slice. These rows must not be described as API integrations or completed source verification.

### Current decision and next actions
- Product-route choice remains open: compare question-to-visual explainer, SPHEREx explorer, Earth/environment investigation and ML dataset/benchmark route.
- The build gate remains **HOLD** until a bounded learner question, source/evidence packet, real sample where relevant, rights/access notes, visualization contract, validation plan, accessibility/failure behavior, cost/privacy assessment and success measure are documented.
- Next action: follow `docs/research/RESEARCH_BATCH_PLAN.md` beginning with route comparison and then inspect a bounded representative sample for the leading candidate. Present the readiness memo to the project owner and stop before implementation.


## 2026-10-16 — Owner reaffirmed VSE concept and first hackathon intention

- The project owner clarified that VSE is the project they intend to pursue for the event they call the “World Dot Name weekend hackathon”. The concept is a question-first visual learning engine across AI, mathematics and broader science/technology; it should not be reframed as a separate dashboard or ML benchmark project.
- The core differentiator is a built-in learning journey: simple explanation, a concept-appropriate visual model, meaningful interaction, deeper technical/mathematical detail, and evidence/limitations presented within VSE. Learners should not be sent to external websites to finish understanding the concept. Exact source identities and canonical references remain in internal research records for accuracy/audit, not as a substitute for the in-app explanation.
- The long-term ambition is broad question coverage. The first hackathon demonstration must be narrow enough to verify honestly; “How does an AI language model generate an answer?” remains a leading topic example, not an irrevocably chosen question.
- Searched the exact event phrase and close variants using current web search on 2026-10-16. No matching official page could be confidently identified. The name may be a transcription/stylization mismatch; deadline, eligibility, permitted prior work, AI/API rules, judging and submission format remain unverified. Do not borrow rules from unrelated events.
- Updated the research-first framing to compare lesson topics inside VSE, not different product categories. The no-build gate remains HOLD until the first bounded lesson, source/claim packet, validation/failure/accessibility plan and cost/access assumptions are sufficiently documented; owner notification is required before implementation.
