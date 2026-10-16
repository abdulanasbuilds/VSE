# Research Backlog

This is the explicit record of what VSE has not yet found, checked, or decided. Missing research is not a failure if it is visible and prioritised. Do not claim full coverage.

## P0 — Immediate foundation tasks

- [ ] **P0-01: Confirm hackathon rules.** Find the official event page, exact deadline and time zone, project eligibility, judging criteria, required AI/tools, deployment rules, use of existing work, demo expectations, and submission format. Record source URLs. Do not design around an unverified event name or rule.
- [ ] **P0-02: Validate this source inventory.** Open the official source and documentation links that are still marked CANDIDATE. Record any dead link, redirect, changed API, licence, or access restriction.
- [x] **P0-03: Select one concept provisionally.** A source-backed orbital-motion explainer is the first reusable prototype because its learning objective, NASA learning sources, and interactive path are tractable. The decision is recorded in `FIRST_PROTOTYPE_ORBIT.md`; it can be changed after learner testing. Do not imply hackathon eligibility while event rules remain unknown.
- [x] **P0-04: Establish the initial claim map.** `FIRST_PROTOTYPE_ORBIT.md` records the learner outcome, individual orbit claims, NASA source links, assumptions, and caveats. The math/model still needs numerical tests and independent review.
- [x] **P0-05: Confirm the implementation path for this slice.** A single-file HTML/CSS/JavaScript frontend with an in-browser dimensionless model is sufficient; no backend, database, external API, account system, model key, or package install is needed for this first interaction. This is not a permanent stack decision for future VSE features.

## P1 — OpenAI mathematics release: inventory and interpretation

- [ ] **P1-01: Version snapshot.** Record commit SHA, retrieval time, README count, CONTENTS count, and file tree. Partial work: README/CONTENTS currently agree on 719 manuscripts / 372 families as of 2026-10-15; capture the repository commit and compare all tree entries before closing.
- [ ] **P1-02: Counts discrepancy.** Older search snapshots show 722; live README, CONTENTS, and overview.tex show 719. Repository history documents three manuscript withdrawals on October 7, 2026 after a sign error invalidated a central argument used by dependent papers, which likely explains the change. Verify the commits and preserve version context before closing.
- [ ] **P1-03: Full manuscript-family index.** Read current CONTENTS.md and identify all family IDs, disciplines, manuscript files, and supporting artefacts. The first 120 lines have been reviewed only; the whole map has not been indexed.
- [ ] **P1-04: Overview review.** Compare overview.pdf, overview.tex, and current map. overview.tex was retrieved and its 17 subject headings inspected; visual page-by-page PDF review is still open because the browser's GitHub PDF viewer could not be screenshot as application/pdf.
- [ ] **P1-05: Lean tree inventory.** Read current Lean README, formalization.yaml, dependency files, Comparator instructions, and proof-to-paper mapping. The top README, catalogue excerpt, Comparator README, and result 003 scope note were inspected; full tree audit and build are still open. The upstream Lean README recommends compiling small portions, not the whole large library.
- [ ] **P1-06: Licence/citation.** Repository LICENSE is Apache-2.0 and formalization.yaml declares the same project licence. Still check per-file notices, third-party contributions, and manuscript-specific citation instructions.
- [ ] **P1-07: Upstream case studies.** Open the original announcement and the linked math/physics/chemistry/biology cases on OpenAI's research page; locate their primary manuscripts/datasets.
- [ ] **P1-08: Visual references.** Review Heyprof's 32 examples and the M0-AR independent viewer. The landing pages were opened; individual demos, repository code, and claims remain to be audited.
- [ ] **P1-09: Pick one mathematical candidate.** Choose only after reviewing claim, audience prerequisite, proof status, visualization potential, and possible review.
- [ ] **P1-10: Update policy.** Propose how to detect when upstream file counts or artefacts change without creating an unauditable bulk mirror.

## P1 — Broaden source discovery with discipline

- [ ] **P1-11: Literature APIs.** Compare arXiv, Crossref, OpenAlex, Semantic Scholar, Europe PMC, PubMed, and field-specific indices for coverage, policy, rate limits, IDs, updates, and licensing.
- [ ] **P1-12: Dataset APIs.** Review NASA Earthdata, NOAA, USGS, World Bank, WHO, UNESCO, RCSB PDB, PubChem, and other candidate official portals.
- [ ] **P1-13: Source-use rights.** Build a per-source/per-asset licensing table for text, data, code, figures, media, and embeds. Don't infer the rights of one content class from another.
- [ ] **P1-14: Interactive resource audit.** Review PhET, NASA SVS, NASA interactives, Wolfram Demonstrations, GeoGebra, Desmos, Observable, explorable explanations, and other examples for pedagogical technique, access, rights, and mobile behaviour.
- [ ] **P1-15: Subject map.** Build specific primary-source lists for math, physics, astronomy, chemistry/materials science, biology, climate/Earth science, engineering, computer science/AI, economics, and health.
- [ ] **P1-16: Search quality.** Determine how VSE should show source quality, evidence type, publication status, retractions/corrections, and conflicting interpretations.
- [ ] **P1-17: Ghana/global learner needs.** Validate usability constraints such as data cost, mobile-first access, accessibility, bandwidth, language, and familiarity. Do not assume these users' needs without testing.

## P2 — Content quality and visualization research

- [ ] **P2-01: Explanation template.** Test whether the progressive levels (intuition, visual, formal/deeper, limitations, sources) help real learners.
- [ ] **P2-02: Visualization taxonomy.** Define when to choose static diagram, chart, animation, parameterized simulation, 3D view, graph, or linked third-party tool.
- [ ] **P2-03: Misconception tracking.** Record misconceptions and how each visualization can inadvertently reinforce them.
- [ ] **P2-04: Computational reproducibility.** Define the lightest useful checks for equations, simulated systems, and data transforms.
- [ ] **P2-05: Accessibility.** Evaluate text alternatives, keyboard interactions, colour meaning, reduced motion, mobile usability, and screen-reader labels.
- [ ] **P2-06: Update/review cadence.** Define triggers to revisit volatile data, new studies, software APIs, and disputed research.
- [ ] **P2-07: User evaluation.** Create a short before/after learning test and test it with a real novice.

## P3 — Only after the first prototype works

- [ ] Search and filtering across vetted VSE topics.
- [ ] A citation-aware retrieval layer for additional questions.
- [ ] Change detection and source refresh reports.
- [ ] Contributors' review process and correction handling.
- [ ] Multi-language explanations, offline reading, and low-bandwidth visual fallbacks.
- [ ] Researcher tools, saved journeys, accounts, and monetization only with a future explicit decision.

## Explicitly not done

The following must not be represented as completed:
- the full OpenAI math collection has not been read end-to-end;
- all 372 families have not been classified or individually verified;
- all Lean formalizations have not been built or checked;
- all named websites' full resource collections have not been exhaustively inspected;
- all data APIs and licences have not been compared;
- all scientific discovery sources have not been found;
- no multi-topic app, backend, database, external API integration, deployment, browser accessibility review, or learner study has been completed; the initial single-file orbit prototype is still awaiting runtime and model tests;
- the hackathon's official terms have not yet been confirmed.

## Backlog maintenance

When a task is done, retain a short outcome rather than deleting the history. For a blocked task, write the blocker and the smallest way to unblock it. Promote a backlog item only when it is needed for the current milestone.
