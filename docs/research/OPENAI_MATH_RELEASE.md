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

1. The live OpenAI README was opened on 2026-10-15. Its visible text reports **719 manuscripts in 372 families** and says approximately **42% of top-line results are formalized**. Search snippets and snapshots still expose an earlier count of 722 manuscripts. Treat counts as versioned metadata: capture source URL, checked time, and repository commit/revision; do not hard-code the older number.
2. OpenAI's README explicitly warns that the collection includes results at different verification stages, not every result has a Lean formalization, and some unformalized results may have issues.
3. The README identifies the overview, manuscript map, preprints, Lean library, formalization catalogue, Comparator instructions, reasoning summaries, and repository history as key navigation paths.
4. The OpenAI science overview presents examples across mathematics, physics, chemistry, and biology. Open each case study and trace its claims to source papers rather than using a summary page as the only evidence.
5. Heyprof presents selected interactive visualizations associated with some OpenAI math families. It is a visual-learning reference, not a comprehensive rendering of the full manuscript catalogue.
6. The M0-AR page is an independent project rather than official OpenAI documentation. It draws distinctions among levels of verification and states that some related broader conjecture claims remain unresolved. Each of its experiments and claims requires its own review.
7. Neither a visual demonstration, a paper, nor the existence of a Lean file is by itself sufficient to claim that every informal research assertion is independently verified.

## Required audit workflow

### Step 1 — Freeze a versioned inventory

- Record the date/time of access, current default branch/commit, README count, CONTENTS entry count, and available proof artefacts.
- Record the mismatch between the live README and older search snapshots. Investigate whether it comes from repository updates, cached excerpts, or different versions.
- Never represent a dynamic repo count without a checked date and revision.
- Preserve canonical URLs and upstream version history; do not copy the entire corpus into VSE.

### Step 2 — Index all manuscript families

Read CONTENTS.md and the overview. Create a machine-readable inventory (CSV or JSON only when useful; a generated Markdown report may be enough initially) containing for each entry:
- family/entry ID;
- title and discipline as upstream states them;
- associated manuscript file(s);
- result type: theorem, conjecture, bound, construction, counterexample, classification, or other, if accurately established;
- upstream abstract/short description, summarized in original words rather than copied wholesale;
- links to manuscript source and supporting files;
- whether a Lean formalization is listed;
- exact status metadata from the upstream catalogue;
- any related reasoning summary;
- potential learner audience and visualization idea, left as a proposal until researched;
- audit status and follow-up item.

**Do not infer a theorem's correctness from its title or from placement in the repository.** Do not automatically label any manuscript a discovery that has been accepted by the mathematical community.

### Step 3 — Inspect overview.pdf and overview.tex

- Use the PDF as the human-readable catalogue guide and inspect every relevant page visually when citing its contents.
- Compare the TeX source, the PDF, README, and CONTENTS.md for current counts, classifications, and differences.
- Note the date/revision of each artefact.
- Use extracted metadata for indexing, not bulk republication.
- Where a count or classification disagrees, preserve both observations and investigate.

### Step 4 — Audit the Lean directory

Inspect at minimum:
- lean/README.md;
- lean/formalization.yaml;
- all top-level directories and dependency/toolchain files;
- Comparator challenge instructions and relevant configurations;
- mappings between formal statements and upstream manuscript identifiers;
- how to build/check one example in a clean environment;
- known exclusions, axioms, imported assumptions, skipped results, or statements not yet represented.

For each formalized entry distinguish:
1. the upstream manuscript says a proof is available;
2. a matching formal file/catalogue record exists;
3. the proof checker successfully ran on a pinned commit/toolchain;
4. the formal statement was reviewed and judged to match the intended informal statement;
5. independent mathematical review exists.

Do not report level 4 or 5 unless evidence exists. If Lean installation or a clean build is unavailable, report the blocker and keep status at the level actually reached.

### Step 5 — Explore visual representations

Use visual references only as inspiration and assess claim-by-claim:
- Heyprof's 32 selected demos;
- the independent M0-AR viewer and its stated proof/checking levels;
- original plots or diagram opportunities in particular manuscripts;
- possible interactive models such as numerical experiments, geometric constructions, dependency graphs, or proof-step maps.

Many abstract results cannot be honestly expressed as a simple animation. In those cases use a research map, counterexample explorer, proof dependency view, or a clearly labelled schematic. Do not invent a visual representation that changes what a theorem says.

### Step 6 — Choose one safe demonstration

Pick one well-bounded mathematical result after inventory and expert/primary-source review. Its record must include:
- original source and version;
- exact claim and assumptions;
- simple explanation plus limits of the analogy;
- mathematical statement and prerequisites;
- visualization rationale;
- tested examples and known non-examples where relevant;
- upstream verification status vs VSE's independent check status;
- further reading and correction path.

The first interactive prototype should demonstrate the method; it should not promise that all manuscripts have been made understandable or validated.

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
