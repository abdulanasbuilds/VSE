# Content Schema

This is a provisional content contract. The first prototype may store records in Markdown with front matter or JSON; choose one format only when implementation begins. Keep the fields and meanings stable even if the storage format changes.

## Topic record

Every publishable topic should have:

- Stable identifier: lowercase, durable slug.
- Title and one-sentence question the topic answers.
- Subject area and prerequisite concepts.
- Intended reading level.
- Plain-language explanation.
- Analogy, if useful, labelled as an analogy and paired with its breaking points.
- Explanation of the actual mechanism.
- Mathematical or quantitative layer when relevant.
- Visualization record(s).
- Claim list with claim-level source links.
- Limitations, uncertainty, known disagreements, and common misconceptions.
- Related topics.
- Content status and review history.
- Date created, last reviewed, and review trigger.

## Claim record

Each factual claim should include:
- Claim text, written narrowly enough to check.
- Claim category: established finding, scientific consensus, reported research claim, interpretation, prediction, hypothesis, analogy, or simplification.
- Source IDs that support the claim directly.
- Relevant location in source: page, section, figure, theorem, dataset field, or timestamp where practical.
- Evidence strength and review status.
- Important conditions, scope, date range, and uncertainty.
- Reviewer note or rationale for the status.

## Source record

Fields:
- Stable source ID.
- Title and canonical URL.
- Authors/organization.
- Source type: primary paper, institutional research page, dataset, repository, educational simulation, commentary, news, or secondary explanation.
- Publication/revision date and date checked.
- License and attribution requirements, if verified.
- Third-party terms or reuse uncertainty.
- Access method: web page, API, repository, downloadable file, or manual reference.
- Supports claim IDs or topic IDs.
- Status and notes.

A URL is not a license. “Publicly reachable” does not mean public domain or permission to copy.

## Visualization record

Fields:
- Stable identifier and display title.
- Associated topic and claims.
- Type: diagram, chart, animation, parameterized simulation, 3D model, or verified external embed.
- Learning objective: what relationship should the learner discover?
- Input parameters and allowed ranges.
- Units, coordinate systems, axes, colour semantics, and default values.
- Scientific equations/rules or transformation logic.
- Assumptions, approximations, omitted variables, and edge cases.
- Source and data references.
- Verification method and test cases.
- Accessibility and reduced-motion considerations.
- Mobile fallback.
- License/attribution record for any borrowed asset.

## Verification status vocabulary

- NOT_STARTED — record exists but has not been reviewed.
- CANDIDATE — found through discovery, not yet checked in depth.
- PARTIALLY_VERIFIED — some details have been checked, but meaningful open questions remain.
- VERIFIED_SOURCE — the source itself and the described metadata have been checked; this does not verify every claim within it.
- CLAIM_REVIEWED — the cited claim was inspected in context and its scope recorded.
- MODEL_TESTED — a visualization or computation has been tested for documented cases and assumptions.
- INDEPENDENTLY_REVIEWED — a qualified reviewer or independent verification process has checked the specified claim.
- BLOCKED — review cannot proceed; state the reason.

Never collapse these meanings into a single generic “verified” badge.

## Lightweight Markdown layout

For an early record, use headings for overview, intuitive explanation, visual model, deeper explanation, caveats, source list, claim review, and change history. Keep source metadata in a consistent section. A schema or file format can be formalized after a few real records reveal which fields are necessary.


## User-facing explanation package

A topic record should be renderable entirely inside VSE and should support the following structured parts:
- question and a short statement of what the user will understand;
- progressive explanation levels (very simple, standard, deeper/technical) without changing the underlying facts;
- a sequence of explanation steps connected to specific claims;
- an analogy marker plus an explicit note for where the analogy stops being accurate;
- an approved visual-plan type, validated parameters, allowed user interactions, and a text fallback;
- “what changed and why” feedback after a user manipulates the model;
- in-app evidence items with source title, author/organization, version/date, claim association, status, limitations, and rights notes;
- unsupported-question behavior and uncertainty/failure messages;
- accessibility labels, focus behavior, reduced-motion alternative, and mobile fallback.

## Structured visual plan

The AI service, if used, should return a constrained declarative plan rather than arbitrary JavaScript/HTML to execute. A plan may reference only approved renderer components (for example, ordered-step sequence, labeled relationship graph, chart, annotated diagram, or bounded parameterized model). Every component must validate required fields, value ranges, claim/source IDs, and fallback text before it is rendered.

The shape of the visual plan is concept-specific. A model pipeline may need sequential steps and illustrative probability values; a physical system may need state variables and an equation-backed simulation; a statistical explanation may need a plot. Never reuse one generic graphic for every question merely because the same renderer supports it.

## Source presentation rule

Store canonical URLs, identifiers, versions, rights, and retrieved dates in VSE's internal records. Present relevant source identities and claim-level evidence in the app so users can understand why a claim is included without being redirected to an external page. The internal record must remain auditable, but the user-facing lesson should be self-contained.
