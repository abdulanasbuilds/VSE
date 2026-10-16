# Research Coverage Ledger — VSE

**Purpose:** Make research auditable and resumable. This is a work ledger, not a claim that all science has been collected or verified.

## Status vocabulary

- **NOT STARTED** — not yet checked.
- **CANDIDATE** — discovered as a possible source; content and terms not reviewed.
- **PARTIALLY CHECKED** — source/page or selected sections checked; not exhaustive.
- **CLAIM CHECKED** — a specific claim was compared with named evidence; scope and date must be recorded.
- **MODEL TESTED** — a specific simulation/visualization was tested against stated expected cases; this does not automatically validate the underlying scientific claim.
- **INDEPENDENT REVIEW** — a suitably qualified reviewer has assessed the specified claim/model; name/role, scope, date, and limits recorded.
- **BLOCKED** — cannot proceed due to access, rights, tooling, ambiguity, or missing information.
- **REJECTED** — not appropriate for the product, with reason.

Do not upgrade a status because a page loaded, an LLM agreed, a diagram looks plausible, or a citation exists.

## Coverage by source family

| ID | Source family | What it can contribute | Current status | Known gaps / next action |
|---|---|---|---|---|
| MATH-001 | OpenAI math repository | Manuscripts, result-family index, formalization metadata, revision history | PARTIALLY CHECKED | Full CONTENTS inventory; revision/withdrawal reconciliation; paper-to-formalization mapping; rights review; no full Lean build or independent proof review performed |
| MATH-002 | OpenAI math overview PDF/TeX | Summary of result families and subject classification | PARTIALLY CHECKED | TeX inspected; PDF not reviewed visually page by page; compare current PDF, TeX, CONTENTS, README |
| MATH-003 | OpenAI Lean directory | Machine-checked formal statements/proofs and tooling instructions | PARTIALLY CHECKED | Full tree and toolchain/dependencies not inventoried; no build; verify exact theorem-to-paper correspondence |
| MATH-004 | Heyprof selected math demos | Visual explanation patterns for selected math results | PARTIALLY CHECKED | Audit individual demos, source mapping, pedagogical accuracy, accessibility, licences; not complete corpus coverage |
| MATH-005 | M0-AR independent verifier | Example of an independent visualization/checking interface | PARTIALLY CHECKED | Inspect source code and each verification claim; not official OpenAI; no global verification claim |
| GOV-001 | OpenAI announcement | Publisher's stated scope and release rationale | PARTIALLY CHECKED | Attribute statements to OpenAI; never treat as independent peer acceptance |
| GOV-002 | AGMAI guidance | Responsible-release recommendations and limits of advisory role | PARTIALLY CHECKED | Preserve exact context; recommendations do not prove any theorem |
| SPACE-001 | NASA Scientific Visualization Studio | Scientific visualizations, imagery, explanatory media | CANDIDATE / PARTIALLY CHECKED | Audit specific item metadata, data origin, image type (observed/composite/artist rendering), rights and attribution |
| SPACE-002 | NASA interactives | Browser-based science learning experiences | CANDIDATE | Inspect examples, mobile support, accessibility, source and reuse terms |
| BIO-001 | AlphaFold Protein Structure Database | Predicted protein structures and associated metadata | CANDIDATE | Record prediction vs experiment, confidence fields, biological context, version, terms; don't imply predictions prove function |
| BIO-002 | RCSB Protein Data Bank | Experimental and computed macromolecular structures | CANDIDATE | Distinguish experimental structures from computed models; check item-specific provenance and licences |
| BIO-003 | UniProt / NCBI / Europe PMC | Protein, gene, and biomedical literature metadata/content | CANDIDATE | Select exact APIs, terms, versioning, citations, rate limits, and clinical-safety policy |
| DATA-001 | Our World in Data | Datasets and visualizations on global trends | CANDIDATE | For each chart: inspect underlying dataset, definitions, source, date, transformations, missingness and licence |
| SIM-001 | PhET | Interactive science/math simulations | CANDIDATE | Audit chosen simulations, intended learning outcomes, mobile/accessibility, and reuse/embedding terms |
| SIM-002 | Wolfram Demonstrations | Interactive computational/math/science demonstrations | CANDIDATE | Check individual model assumptions, code/embedding terms, accessibility and validation |
| MATH-006 | GeoGebra / Desmos | Interactive graphing and geometry | CANDIDATE | Check embed/API and licence terms; create VSE-owned models when appropriate |
| VIS-001 | Explorable Explanations / 3Blue1Brown / Manim | Teaching patterns, visual explanations, animation tooling | CANDIDATE | Treat as inspiration and source leads, not as permission to copy explanations, assets, or code |
| DATA-002 | World Bank / WHO / UNESCO / OECD / UN data | Official social, economic, health, and education data | CANDIDATE | Dataset-level source/definition, country comparability, update frequency, rights and uncertainty |
| EARTH-001 | NASA Earthdata / NOAA / USGS / Copernicus | Earth observation, climate, weather, geology and hazards | CANDIDATE | Dataset-specific resolution, time range, processing, licence, observation-vs-model distinction |
| SCHOLAR-001 | arXiv / Crossref / OpenAlex / PubMed | Scholarly discovery and metadata | CANDIDATE | APIs, rate limits, DOI/version relationships, retractions, publication status, abstracts licensing |
| ORB-001 | NASA Science — Gravity & Mechanics | Conceptual mechanics of orbital motion and the limits of Newton's cannonball analogy | PARTIALLY CHECKED | Relevant sections opened 2026-10-16; quantitative claims and VSE simulation implementation still need technical checks |
| ORB-002 | NASA — What Is an Orbit? (Grades 5–8) | Beginner explanation of gravity, sideways motion, and orbit | PARTIALLY CHECKED | Page opened 2026-10-16; don't treat an education page as independent review of the VSE model |
| ORB-003 | NASA JPL Education — Modeling the Orbits of Planets | Learning objectives connecting gravitational interactions and motion | PARTIALLY CHECKED | Lesson page opened; original activity/media not copied |
| ORB-004 | PhET licensing information | Rights constraints for possible future reuse of a simulation | PARTIALLY CHECKED | Current license page reviewed; no PhET assets or code used in VSE |
| ORB-005 | NASA GSFC archive — Kepler's Third Law / orbital velocity | Derivation of circular and escape velocity in a two-body idealization | PARTIALLY CHECKED | Relevant HTML sections opened 2026-10-16. The archive explicitly states it is no longer updated (last updated 2008); use as a supporting derivation only and keep technical review open |
| VSE-ORB-001 | VSE single-file orbital-motion model | Original SVG trajectory calculation and core controls in root `index.html` | MODEL TESTED (bounded harness + Node CI) | A stub-DOM V8 harness on 2026-10-16 checked 0.70x/0.84x impact, 0.85x bound ellipse clearing the surface, 1.00x circular stability, 1.414x bound, and 1.415x/1.50x escape; coordinates were finite, and preset/reset/quiz/reduced-motion controls behaved as expected. GitHub Actions run #38836368258 on PR #1 passed the committed Node 22 regression test. This is not a real-browser test, comprehensive scientific validation, independent physics review, or learner test. |
| EVENT-001 | “World Dot Name weekend hackathon” | Event eligibility, timing, judging, deliverables and rules | BLOCKED / NOT IDENTIFIED | Exact official event page has not been confidently identified; don't invent rules or use an unrelated event. Search more, then request exact link only if still ambiguous |

## Research completeness rule

A search result list is never “all sources.” For each domain, document:
1. The query strategy and date.
2. The authoritative registries, repositories, datasets, and source directories searched.
3. Relevant results included and excluded, with reasons.
4. Unavailable pages, blocked APIs, licence questions, and failed attempts.
5. Duplicates, versions, corrections, retractions, and known contradictions.
6. The exact boundary of the search (e.g. all entries in a named repository at commit SHA, not all mathematics in the world).

## Per-topic research packet

For every topic considered for a prototype, create a packet containing:

- topic question and learner outcome;
- source URLs, owners/authors, version/DOI/commit and retrieval date;
- primary vs secondary source designation;
- concise original-language summary, claim-by-claim;
- what evidence supports each claim and what remains uncertain;
- conflicting claims and how they were resolved (or marked unresolved);
- relevant corrections, withdrawals, errata and dependent results;
- data schema, units, transformations, assumptions and uncertainty;
- visual concept, what it does and does not represent;
- validation/test cases and observed results;
- licences and attribution requirements for each reused asset;
- missing evidence and the exact next action;
- decision: use / defer / reject, with reason.

## LLM research protocol

An LLM may search, extract, classify, summarize, propose questions, draft explanations, or generate a candidate visualization. It must not:
- invent a URL, paper, quote, DOI, dataset, or verification result;
- state that it read a source when only its title/snippet was visible;
- call a theorem verified because it is in a repository or because another model agrees;
- convert a predicted structure/simulation/projection into an observed fact;
- copy full copyrighted articles, books, papers, videos, or educational explanations into VSE;
- silently discard missing, contradictory, inaccessible, or negative findings.

Every factual research record needs a traceable source and review status. For important claims, use primary evidence and seek independent corroboration where feasible. Record failed searches as useful results so the next agent doesn't repeat them blindly.
