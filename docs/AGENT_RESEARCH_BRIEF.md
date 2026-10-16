# VSE Agent Research Brief — Make Knowledge Visible, in the World

**Status:** Research and content-compilation brief; not permission to build the product.  
**Canonical direction:** Read `PRODUCT_CONCEPT.md`, `SPEC.md`, `AGENTS.md`, `STATE.md`, and `docs/BUILD_READINESS.md` first. The build gate currently says **HOLD**.

## 1. The enduring idea

VSE is a question-first learning environment built around the north star:

> **Make knowledge visible, in the world.**

A person should be able to ask, in ordinary language, how or why something works. Their question might concern mathematics, physics, AI, a device, a process, nature, technology, engineering, or another field. They should not need to know the correct technical words before asking.

VSE should do more than produce a paragraph or attach a decorative image. It should make the mechanism, relationship, or reasoning understandable through progressive explanation, useful visuals, interactive exploration or virtual experiments, practical examples, evidence, and a route to related ideas. Start at the learner's current level—even a very young beginner—without sacrificing truth. Then make it possible to move from intuition to the actual terms, equations, data, assumptions, and deeper models.

**A hackathon is one proving ground, not the product's purpose, identity, or long-term scope.** The first demonstration must remain narrow enough to research and validate. Never claim that every question is supported until the system can actually support it.

## 2. The learning journey every topic packet should aim to support

1. **Ask:** accept a natural-language question without requiring domain vocabulary.
2. **Orient:** identify the likely concept, learner level, relevant prerequisites, and what is actually being asked. Ask a focused follow-up only when the question is materially ambiguous.
3. **Understand the intuition:** explain the core idea in simple, concrete language. Use analogies when useful and state where each analogy stops matching reality.
4. **See the process:** create an accurate concept-specific diagram, sequence, chart, animation, model, or simulation. Label what is real, inferred, illustrative, simplified, or not to scale.
5. **Try it:** where appropriate, let the learner change a meaningful variable, reveal a step, compare cases, predict an outcome, solve a small problem, or run a safe virtual experiment. Explain why the result changes. Do not force an interaction where it adds no learning value.
6. **Go deeper:** progressively reveal the mechanism, vocabulary, mathematics, data, equations, assumptions, uncertainty, exceptions, and limitations.
7. **Check understanding:** include a prediction, question, explanation-in-the-learner's-own-words prompt, or small task. Do not treat a correct multiple-choice guess as proof of learning.
8. **Continue:** recommend a prerequisite, next concept, related principle, application, or contrasting idea and explain the connection. Keep the next learning step inside VSE.
9. **Inspect evidence:** show source identities, dates/versions, claim-level support, provenance status, limitations, and rights-relevant notes inside VSE. Do not make a source website the substitute for the lesson.

Not every topic needs all the same visual elements. Pick representation and interaction to fit the concept and learning outcome rather than forcing every subject into a generic template.

## 3. Built-in learning resources: compile knowledge, not copied websites

Researchers may consult the web, official documentation, papers, books, datasets, APIs, and other reliable sources behind the scenes. **The learner-facing experience should be self-contained inside VSE.** The absence of external learning links must not mean hiding provenance or pretending VSE discovered an idea itself.

Compile durable internal learning records:
- **Concept records:** concise original explanations at multiple levels, mechanism/steps, misconceptions, prerequisites, applications, and related concepts.
- **Claim records:** one checkable statement per claim; claim type; conditions/scope; claim-to-source map; evidence state; uncertainty; and last review date.
- **Source records:** canonical URL or identifier, title, author/organization, publication/version date, access date, source type, relevant sections/figures/data fields, license/terms, and review status.
- **Data records:** real sample inspected, schema, units, transformations, time/geographic scope, missingness, update cadence, access restrictions, license and attribution.
- **Visual records:** learning objective, what is represented, variables and units, interactions, permitted ranges, formulas/rules, assumptions, omitted factors, expected outcomes, edge cases, accessible fallback, and validation cases.
- **Practice records:** prediction or activity, expected response, feedback rationale, and the understanding it is intended to test.
- **Relationship records:** prerequisite / builds-on / related-principle / contrast / application / consequence / example-of, with a short explanation and evidence or pedagogical rationale.
- **Change records:** version, reviewer, changes, known gaps, and a trigger for checking whether the content has become stale.

Do not bulk-copy entire books, articles, videos, or websites. A public URL is not a reuse license. Prefer original explanations, licensed or public-domain material where confirmed, data whose terms allow the planned use, original visualizations, and source snippets limited to what is lawful and necessary. If a source can support a lesson but cannot be reproduced, preserve its provenance internally and write an original explanation.

## 4. Evidence and trust rules

Keep these different statuses separate:
- DISCOVERED — candidate source or dataset found.
- SOURCE_CHECKED — identity and relevant context inspected.
- CLAIM_REVIEWED — the exact claim was checked against relevant source context.
- CORROBORATED — supporting evidence from another appropriate source is recorded where useful.
- DATA_SAMPLE_INSPECTED — a real sample or API response was examined.
- MODEL_TESTED — the calculation/visual behaves as expected on documented cases.
- INDEPENDENTLY_REVIEWED — an appropriate independent reviewer or review method checked the specified claim/model.
- BLOCKED / UNRESOLVED — explain what is missing.

AI-generated prose, citations, calculations, and visual plans are drafts until checked. A source being authoritative does not make every related claim verified; a test passing does not prove that a scientific model is valid; a polished visualization is not evidence. If sources disagree, record the disagreement. If the source trail is missing, do not invent it.

## 5. Practical visualization rules

Choose visuals because they help answer a learning question:
- sequences and state transitions for processes;
- diagrams for structure and relationships;
- plots for quantity, probability, comparison, or uncertainty;
- manipulable models for cause-and-effect or parameter sensitivity;
- simulations for systems whose stated assumptions are explicit;
- spatial/3D models only when spatial structure materially matters;
- worked examples and guided exercises for mathematical reasoning.

Every visual should have readable labels, units where applicable, accessible text, mobile behavior, meaningful variable bounds, and a text alternative. A virtual activity must not be confused with a real-world observation or an exact simulation if it is only a teaching approximation. Do not execute arbitrary model-generated HTML/JavaScript. Use reviewed visual components and validated structured parameters.

## 6. Broad coverage, with honest boundaries

The long-term ambition is broad, not a claim of immediate universal coverage. Build coverage by research batches and linked, reusable concepts. For each selected batch:
1. Define a question cluster and what the learner should understand.
2. Map prerequisites and adjacent concepts.
3. Identify primary or authoritative references.
4. Inspect relevant source context and real data samples where the topic depends on data.
5. Draft original progressive explanations, visual specifications, practice tasks, and concept relationships.
6. Review the claims, rights, assumptions, and failure cases.
7. Record missing/contested knowledge in the backlog rather than filling gaps with confident guessing.
8. Keep an explicit status for what has and has not been covered.

When a question lies outside available evidence or approved visual capability, VSE must say what it cannot yet explain reliably and offer a supported adjacent concept—not invent a finished lesson.

## 7. Safety and responsible teaching

Educational breadth does not mean unbounded actionable instruction. For dangerous tools, weapons, hazardous materials, or harmful activities, keep material within safe conceptual, historical, scientific, prevention, or safety-oriented education. Do not provide actionable construction, optimization, targeting, or use instructions that could enable harm. Apply age-appropriate safeguards and make safety constraints part of the content policy, not a last-minute UI patch.

## 8. How agents should divide the work

Use specialist workstreams, all writing evidence-backed outputs to the same schemas. Agents may work in parallel on separate batches, but should not independently redefine the product or silently overwrite canonical decisions.

### Workstream A — Topic map and prerequisites
Produce a candidate concept map and explain prerequisite edges. Mark every relationship as reviewed or tentative. Do not promise exhaustive coverage.

### Workstream B — Source and data research
Find primary or authoritative sources; inspect the exact relevant sections and small data samples; capture access, terms, rights, version, and missing details. Search-result snippets alone are insufficient.

### Workstream C — Learning-packet authoring
Write original plain-language and deeper explanations, mechanism steps, analogy limits, misconceptions, practice prompts, and suggested next concepts tied to reviewed claims.

### Workstream D — Visual and interaction design
Propose one or more concept-specific visual forms; define variables, ranges, interactions, equations, assumptions, expected behavior and accessible fallback. Do not implement code while the build gate is HOLD.

### Workstream E — Validation and red-team review
Try to falsify the claims, check competing sources, test calculations by hand or with an appropriate independent method, inspect unsupported questions, and list failure cases. Do not certify your own drafted claims simply because you created them.

### Workstream F — Integrator / editor
Merge accepted packets; deduplicate concepts; normalize IDs; check links and provenance; resolve schema mismatch; preserve disagreements; update the coverage ledger, research log, backlog, and STATE.md. Do not mark the project ready to build without the readiness checklist and owner-facing recommendation.

## 9. Required research packet for every batch

Every batch must return:
1. **Scope:** batch ID, question cluster, intended learner, inclusion/exclusion limits.
2. **Findings:** concise original explanation, mechanism, and important nuances.
3. **Claim matrix:** claim ID, exact checkable wording, claim category, source ID, location, evidence status, caveat, independent check.
4. **Sources:** normalized source records, actual sections inspected, versions/dates, rights/access status.
5. **Data (if relevant):** sample file or response summary, schema, units, transformations, and license/terms.
6. **Visual contract:** type, learning objective, steps/states, variables, allowed bounds, assumptions, edge cases, and accessible text fallback.
7. **Practice and continuation:** learner task, expected reasoning, feedback, prerequisites and related next concepts.
8. **Quality review:** misconceptions, counterexamples, disagreements, unsupported claims, safety considerations, and accessibility risks.
9. **Coverage status:** accepted, partial, candidate, blocked, and missing items separately.
10. **Changes:** exact repository files changed, checks performed, and next recommended research batch.

Do not report a source, sample, claim, or check as reviewed unless you personally inspected it. Keep direct URLs and IDs available to the research team even though users should not have to leave VSE to complete the lesson.

## 10. Instructions for Manus, Google AI Studio, Bolt.new, and other agents

The current stage is **research and content compilation only**. The GitHub repository is the source of truth.

- Prefer Manus for parallel research, source inspection, evidence synthesis, and maintaining a project workspace of instructions and files. Connect the GitHub repository if available, or provide the specific Markdown research brief and relevant project documents. Require commit/PR-sized deliverables and the research packet format above.
- Google AI Studio and Bolt.new can import or sync GitHub repositories, but they are primarily app-building environments. At this stage, use them for documentation analysis or prompt planning only if they can do that without rewriting code. Do not ask them to scaffold the app yet. The existing `index.html` is a standalone orbit experiment, not the VSE product.
- Before granting any agent write access, review the connected account permissions. Use a dedicated branch and small commits/PRs; preserve `main` and the canonical product documents. Do not put private API keys, personal data, or copied restricted content in the repository.
- If an agent cannot access the repository, give it this brief plus the minimum relevant Markdown files; ask it to produce repository-ready Markdown/data records, not a generic report that cannot be merged.
- Agents must read `AGENTS.md`, `STATE.md`, `PRODUCT_CONCEPT.md`, `docs/BUILD_READINESS.md`, and `docs/research/RESEARCH_BATCH_PLAN.md` before starting. All agents must obey the **HOLD** gate and stop before implementation.

## 11. Ready-to-paste Manus research task

> Work as the research coordinator for the existing VSE repository. First read `AGENTS.md`, `STATE.md`, `PRODUCT_CONCEPT.md`, `SPEC.md`, `docs/BUILD_READINESS.md`, `docs/AGENT_RESEARCH_BRIEF.md`, `docs/research/RESEARCH_BATCH_PLAN.md`, `docs/research/SOURCE_CATALOG.md`, and `docs/research/RESEARCH_COVERAGE.md`.
>
> VSE's north star is “make knowledge visible, in the world.” It is a long-term, cross-domain learning experience: anyone should be able to ask how something works, start from a beginner-friendly explanation, inspect and interact with an accurate visual/model or safe virtual experiment, go deeper into the real mechanisms/math/evidence, check their understanding, and continue to a connected concept. The user-facing explanation and evidence must live inside VSE; the research team must still preserve exact source provenance and respect copyright and API/data terms.
>
> **Do not build or refactor the app, create a database, choose a framework, integrate APIs/models, or alter runtime code. The build gate is HOLD.** Do research and documentation only.
>
> Start with one bounded research batch selected from the current backlog. Inspect real source context, not snippets alone, and inspect actual data/API samples where applicable. Produce a complete research packet using Section 9 of the brief. Create original learning content, a claim-source matrix, source/data/license records, a concept relationship map, a concept-appropriate visual contract, practice/validation plan, and explicit gaps. Keep all evidence statuses honest. Propose changes on a separate branch or as a patch for review, update the research log/coverage/backlog/state, and stop with a concise evidence-based recommendation. Do not state that VSE covers all knowledge; prioritize the next verifiable batch.

