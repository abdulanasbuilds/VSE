# OpenAI Mathematics Release: Source Audit and Visualisation Plan

Status: partial audit, 2026-10-15. This is a research record and implementation plan; it does not independently validate the underlying mathematical results.

## Why this corpus matters to VSE

OpenAI's math repository is a useful test case for the VSE idea: complex research can be presented at several levels, from a result's plain-language motivation to its formal statement, supporting manuscript, and proof artifacts. It also demonstrates why verification status must be represented separately from visual quality.

## Canonical starting links

- [Repository root](https://github.com/openai/math)
- [README](https://github.com/openai/math/blob/main/README.md)
- [Manuscript map: CONTENTS.md](https://github.com/openai/math/blob/main/CONTENTS.md)
- [Overview PDF](https://github.com/openai/math/blob/main/overview.pdf)
- [Overview TeX source](https://github.com/openai/math/blob/main/overview.tex)
- [Preprints directory](https://github.com/openai/math/tree/main/preprints)
- [Lean directory](https://github.com/openai/math/tree/main/lean)
- [Lean README](https://github.com/openai/math/blob/main/lean/README.md)
- [Formalization catalogue](https://github.com/openai/math/blob/main/lean/formalization.yaml)
- [Comparator challenge instructions](https://github.com/openai/math/tree/main/lean/ComparatorChallenges)
- [Reasoning summaries directory](https://github.com/openai/math/tree/main/reasoning_traces)
- [Repository history](https://github.com/openai/math/blob/main/history.md)
- [Repository licence file](https://github.com/openai/math/blob/main/LICENSE)
- [OpenAI scientific research overview](https://openai.com/science/)
- [OpenAI math release announcement supplied for review](https://openai.com/index/sharing-ai-progress-in-mathematics/)
- [Heyprof interactive examples based on selected families](https://www.heyprof.app/en/demo/fach/ki-forschungsmathematik)
- [Independent verifier project's browser page](https://m0-ar.github.io/openai-math-verify-2026/preview.html)
- [Independent verifier's repository](https://github.com/m0-ar/openai-math-verify-2026)

## Findings from the first source check

1. The live OpenAI README and `CONTENTS.md` were fetched directly from GitHub on 2026-10-15. Both report **719 manuscripts across 372 result families**. The overview TeX source is dated October 6, 2026 and repeats the same count. Older search snapshots report 722 manuscripts.
2. The repository's own `history.md` records an October 7, 2026 withdrawal of three manuscripts after a sign error invalidated a stabilization-trace cancellation argument used in the construction behind dependent papers. The named withdrawals are “Algebraicity of Weil classes on split abelian eightfolds,” “Algebraicity of Kuga–Satake Correspondences for K3 Surfaces,” and “The rational Hodge conjecture for products of K3 surfaces.” This likely explains 722 versus 719, but a commit-level reconciliation still needs to be recorded before treating the discrepancy as closed.
3. The same history reports 14 other manuscripts revised with proof repairs, corrected statements, clearer hypotheses/dependencies and one obsolete-citation correction; 13 additional manuscripts updated their references to revised companion editions; and six additional formalizations plus five other supporting-result additions. It reports 300 of 719 top-line results formalized (about 42%). These are statements in the upstream history, not independent validation of every mathematical result.
4. The OpenAI README warns that the collection contains results at different verification stages, not every result has a Lean formalization, and some unformalized results may have issues. The collection is versioned and should not be represented as a permanently settled list.
5. The release's canonical navigation paths include `CONTENTS.md`, `overview.pdf`, `overview.tex`, `preprints/`, `lean/`, `lean/formalization.yaml`, Comparator instructions, selected reasoning summaries, `history.md`, and the repository license.
6. The current Lean README says the formalizations are for **some** results, housed in one large library, and recommends compiling small portions. It warns that a full build may fail if Linux `vm.max_map_count` is too low. A whole-library build was not attempted during this pass.
7. `lean/formalization.yaml` identifies the project licence as Apache-2.0; the repository has an Apache-2.0 LICENSE. This is a starting point for review, not permission to reuse every included third-party paper, image, dataset, or external asset without checking its own notices and terms.
8. The current `overview.tex` identifies 17 subject areas, including number theory, algebraic/complex geometry, real/complex analysis, convex/metric geometry, theoretical computer science, dynamical systems, combinatorics, algebra, probability/statistical mechanics, logic, group theory, mathematical physics, operator algebras, topology, functional analysis, differential geometry, and PDEs.
9. OpenAI's announcement dated October 6, 2026 describes the collection as a broad release of work from an internal frontier model and says OpenAI consulted the independent Advisory Group on Mathematics and AI (AGMAI). Its announcement is an organizational statement, not evidence that the mathematical community has accepted each claim.
10. AGMAI's own [site](https://agmai.org/) states that its advisory role should not be interpreted as endorsement of the results; the mathematical community needs to assess them. Its [September 29 responsible-release guidelines](https://agmai.org/general-sep29/) recommend clear exposition, citations, version history, model/use disclosure where feasible, formalization when feasible, and support for community-led understanding. These are recommendations, not a substitute for claim-specific review.
11. Heyprof offers selected interactive visualizations linked to selected OpenAI math result families; it is not a complete visual rendering of every manuscript. The M0-AR site is an independent project, not official OpenAI documentation, and individual displayed claims/check levels need their own review.
12. The repository's history makes a crucial VSE requirement concrete: research records must track corrections, withdrawals, versions, and downstream dependencies, not only titles and diagrams.
13. The GitHub PDF viewer did not expose `overview.pdf` as an application/pdf response that could be screenshot in this session. The PDF itself has **not** been visually reviewed page by page. Only its linked presence and the source TeX were inspected.

## Required audit workflow

### Step 1 — Freeze a versioned inventory

- Record retrieval time, current repository commit, README count, CONTENTS entry count, and the file tree.
- Compare the live README, CONTENTS, overview, and history. Preserve source revision when counts change.
- Reconcile the likely 722-to-719 change against history/commits; do not treat the discrepancy as resolved solely from arithmetic.
- Keep the upstream repository linked and versioned rather than bulk-copying its complete contents.

### Step 2 — Index every manuscript family

Read the full current `CONTENTS.md` and map all 372 family entries and related manuscripts into an inventory. For each entry record:
- family ID and exact upstream title;
- source manuscript path(s) and version/date;
- source text/abstract as a link with an original short summary (do not republish whole abstracts);
- subject area and result type only when grounded in the source;
- linked evidence/reasoning summary, if explicitly available;
- a pointer to formalization records, without assuming a formalization exists;
- source state, correction/withdrawal notes, and audit date;
- potential learner value and possible visual form (ideas must be labelled as proposals);
- exact missing checks and backlog item.

Do not infer correctness from a title, a repository listing, or the fact that a manuscript is part of a release.

### Step 3 — Inspect overview PDF and source TeX

- Read the PDF page-by-page, using actual rendered pages, when an appropriate PDF viewer is available.
- Compare its count, subject sections, result IDs, and manuscript links with `overview.tex`, `CONTENTS.md`, and README.
- Record version/date for every artefact.
- If visual access is blocked, log that limitation and continue with the TeX source; do not claim the PDF was visually reviewed.

### Step 4 — Audit the Lean directory

Inspect the full current Lean tree, at least:
- `lean/README.md`;
- `lean/formalization.yaml`;
- `lean/docs/` scope notes;
- toolchain and dependency configuration;
- Comparator challenge instructions and relevant statement files;
- mapping from each formalized item to the associated paper/claim.

For each item distinguish:
1. a paper claims a result;
2. a formalization record/file is present;
3. the proof checker has successfully run at a pinned revision and toolchain;
4. a person has checked that the formal theorem matches the intended informal claim and hypotheses;
5. an independent mathematical reviewer has checked the intended result.

A Lean-checked proof is strong evidence for the exact formal statement under its specified environment, but does not automatically establish that the statement fully matches the intended informal result or validate every paper claim. Do not claim any level not actually established. If resources are limited, test a small representative statement rather than all formalizations.

### Step 5 — Review visual precedents

Review selected Heyprof demos and the independent M0-AR viewer individually. For each, record what is actually represented, source claim, exact limitations, verification level, asset rights, responsiveness, and pedagogical quality. A theorem may be better represented by a dependency map, a counterexample explorer, or a proof-idea diagram than by animation. Do not invent visual intuition that changes the result's meaning.

### Step 6 — Choose one learning demonstration

Choose one result/concept after enough audit to judge the audience prerequisites, technical feasibility, source quality, verification status, and honest visualization path. Its VSE record must include:
- exact source/version and claim/hypotheses;
- plain-language explanation with analogy limits;
- deeper or formal statement;
- visualization rationale, inputs/ranges and validation cases;
- upstream formalization status separately from VSE's own checks;
- relevant corrections/withdrawal/dependency notes;
- citations, uncertainty, and further reading.

The first prototype should validate the learning method; it should not imply that all 719 manuscripts have been understood or verified.

## Specific research tasks still open

- [ ] Confirm the exact current commit and capture a versioned tree.
- [ ] Parse all of the current CONTENTS.md entries.
- [ ] Inspect all pages of overview.pdf and compare to overview.tex and CONTENTS.md.
- [ ] Inspect the full current Lean tree, formalization catalogue, and Comparator instructions.
- [ ] Identify which entries have no proof formalization and how the upstream repo describes their status.
- [ ] Verify repository licence and record how citations/attribution should be handled.
- [ ] Open the official announcement and individual OpenAI case-study papers.
- [ ] Review every relevant Heyprof demo's actual claims and limitations; don't assume all 32 are equivalent.
- [ ] Review the M0-AR source code and recorded check levels for specific claims.
- [ ] Define a process for following upstream changes without importing bulk research text.
- [ ] Create a small record for the first selected concept and its citation-backed interactive model.

## Interpretation guardrails

- A paper in the release is an upstream research claim, not automatic independent validation.
- A proof formalization is not automatically evidence that all intended mathematical meanings or assumptions have been captured.
- AI contribution does not eliminate the need for citations, credit, peer assessment, and version tracking.
- Do not use an aggregate figure such as “372 solved out of 4,000” as a success rate unless the denominator, selection process, and definitions justify that calculation. The independent viewer notes that it is not simply a solved/attempted ratio; verify this claim in source context before repeating it as fact.
- The project's goal is to make selected results understandable, traceable, and honestly qualified, not to amplify headlines.
