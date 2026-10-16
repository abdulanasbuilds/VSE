# VSE Repository Integrity Audit

**Audit date:** 2026-10-16 UTC  
**Repository:** https://github.com/abdulanasbuilds/VSE  
**Default branch reviewed:** main  
**Main HEAD at audit:** 88fd17700c44a175ee3fa010f0486aeae4e059b8  
**Scope:** Remote GitHub tree, selected project documents, open pull request metadata, GitHub Actions runs and the orbit regression files. This is not an inspection of an off-platform local working tree or uncommitted local changes.

## Overall result

**Remote repository integrity: structurally intact. Product readiness: not ready for implementation.**

The GitHub recursive tree returned all 29 tracked paths without indicating truncation. The expected product documents, agent handoff documents, research catalogues, orbit experiment, regression test and GitHub Actions workflow are present. Core links in the root README point to existing files at the audited revision.

“Structurally intact” means the remote tree and expected files are present. It does not mean every research claim is verified, every source can legally be reused, the production application exists, or all checks are passing.

## What exists

### Product and team documentation
- README.md — start-here instructions and document map.
- AGENTS.md and CONTRIBUTING.md — agent/contributor rules.
- PRODUCT_CONCEPT.md, SPEC.md and HACKATHON_SLICE_BRIEF.md — product thesis, boundary and provisional demo idea.
- STATE.md and ROADMAP.md — checkpoint and staged work.
- docs/DECISIONS.md — stable choices and working assumptions.
- docs/ARCHITECTURE.md — conceptual, explicitly unselected architecture.
- docs/CONTENT_SCHEMA.md and docs/QUALITY_AND_PROVENANCE.md — content and evidence conventions.
- docs/AGENT_WORKFLOW.md — continuation and handoff.
- docs/research/ — source catalogue, domain map, resource template, research coverage/log/backlog, OpenAI math audit and orbit research packet.

### Runtime and test files
- index.html — a standalone satellite-orbit teaching/engineering experiment.
- tests/orbit-model.test.mjs — dependency-free Node.js regression tests for the orbit experiment.
- .github/workflows/orbit-model-tests.yml — Node.js 22 CI workflow.
- There is no application-wide question-to-visual flow, production backend, database, model integration, or general visual-plan renderer in the audited tree. This is documented project state, not evidence of accidental deletion.
- There is no package manifest or selected application framework. A dependency-free static experiment does not need to have one; do not add a stack merely to make the repository look conventional.

## Git and CI observations

### Branches and pull requests
- Default branch: main.
- The branch inventory contained main, test/in-app-source-journey-guard, and test/orbit-regression-run-20261016.
- PR #1, “Test orbital model near the escape threshold,” is merged.
- PR #2, “Guard the in-app evidence experience against outbound links,” is open at https://github.com/abdulanasbuilds/VSE/pull/2.

### Confirmed successful run
GitHub Actions run 38839600535 succeeded on main at commit 93e70ad71dba730b5b124e649ac23e8025e41b5. The later main revision 88fd17700c44a175ee3fa010f0486aeae4e059b8 differs from that successful revision in documentation files only according to GitHub's commit comparison; the orbit application, test and workflow files were not changed in that interval.

The earlier PR #1 regression run, 38836368258, also succeeded with Node.js 22. These runs confirm that the test suite executes and passes for the commits tested. They do not independently verify the physical model, perform a real-browser audit, or prove the next untested change is correct.

### Confirmed failing run
GitHub Actions run 38840153511 for PR #2 failed while parsing the edited test file. The newly added regular expression on the assertion at the top of tests/orbit-model.test.mjs produces a JavaScript SyntaxError: “Invalid regular expression flags.” The failure occurs before the orbit test assertions run; it is not evidence that the orbital model itself failed a test.

PR #2 should not be merged until the assertion is expressed as a valid regex or replaced with a safer HTML check and the workflow passes. This audit records the failure; it does not alter the test code because the requested work is documentation and research preparation.

### Preview deployment
A Cloudflare deployment bot comment on PR #2 reported a failed preview build for commit 8dd5c94582da8f4c342245dd87ee0084f8105835. The linked Cloudflare log was not inspected during this audit, so the cause is unknown. Do not infer that production main is down or that the orbit page is broken from this preview signal alone. Recheck the actual preview logs and current production state before relying on a deployment.

## Legal and reuse note

No LICENSE file appears in the audited repository tree. GitHub's licensing guidance explains that absent a license, default copyright applies; public visibility is not a general permission to reproduce, distribute, or make derivative works from the code. Source/data/media licensing must also be checked separately from the repository's own code license.

Reference: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

Do not add a license automatically as part of the research pass. The repository owner should choose a license deliberately before asking outside contributors to reuse or redistribute project code. This is separate from the licensing obligations for sources and datasets VSE may reference.

## Research-readiness findings

1. The research catalogue is broad but many resources remain candidates or only partially checked.
2. The owner-confirmed project direction is VSE, the question-first visual learning engine. The first bounded lesson/topic remains open; the current LLM question is a leading example, not a final commitment.
3. The current source catalogue does not yet contain a fully inspected, versioned sample dataset packet with schema, units, transformations, size, access requirements, license and reproducibility notes.
4. Source discovery, claim verification, dataset inspection, model testing and independent review are correctly distinguished in the project documents. Keep those distinctions.
5. SPHEREx remains one possible future VSE topic, not an alternative product direction or selected first integration. The official IRSA release overview says Quick Release 3 began in September 2026, spectral-image products cover 0.75–5.0 microns, and several programmatic access routes are available. The actual files, format, calibration caveats, item-level rights, query behavior and practical client experience have not yet been reviewed for VSE.
6. A SPHEREx prototype would need to provide learning and interpretation beyond merely recreating capabilities already listed by IRSA, including the Data Explorer, image cutouts, mosaics and source discovery.
7. A Ghana-relevant environmental dataset source has not yet been validated for the project. Dataset geography must be checked, not inferred from a source being described as “open” or “global.”
8. The current product should remain build-gated until a bounded first experience and its source/data and validation packet are complete.

Current SPHEREx sources:
- IRSA Quick Release overview: https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_qr.html
- IRSA SPHEREx mission/archive page: https://irsa.ipac.caltech.edu/Missions/spherex.html
- NASA public-data context: https://science.nasa.gov/open-science/spherex-universe-map/

## Recommended next actions

1. Review/repair PR #2 separately and re-run the workflow.
2. Complete the research-route comparison recorded in docs/research/RESEARCH_BATCH_PLAN.md.
3. Use docs/research/DATASET_AND_API_REGISTER.md to inspect one real, small data sample and record access, schema, rights, and versioning.
4. Update the current checkpoint and the build gate.
5. Do not begin application implementation until docs/BUILD_READINESS.md reaches READY FOR A SCOPED BUILD and the project owner has been notified.

## Audit limitations

- The audit covers remote GitHub state, not local clones, local files, local secrets, or unpushed work.
- Not every Markdown reference was crawled and checked for link rot.
- The Cloudflare preview build log was not accessible through the GitHub bot comment and was not diagnosed.
- No browser, screen reader, mobile device, or scientific expert review was performed during this documentation audit.
- No frontend, backend, database, API integration, or runtime code was built or changed by this audit.
