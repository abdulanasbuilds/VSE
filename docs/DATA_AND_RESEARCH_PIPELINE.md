# VSE Data and Research Pipeline

**Status:** Research contract; no storage engine, framework, API provider or runtime pipeline is selected.  
**Purpose:** Make each VSE explanation or scientific-data exploration traceable from source to claim, transformation, visual and learning outcome.

## Core rule

A visual is the end of a reasoned chain, not the starting point. We must be able to answer:

- What question is being investigated?
- What exact sources or data support the answer?
- What was directly observed or stated by a source, and what did VSE infer, calculate, model or simplify?
- Which transformations were applied?
- What does the visual show, and what does it leave out?
- How can a reviewer reproduce or challenge the result?
- What should happen when evidence or data is missing?

Research status, source status, claim status and model-test status must stay distinct.

## The end-to-end lifecycle

### Stage 1 — Define the learner's question

Write a bounded question and an observable learner outcome. “Explore the universe” or “explain AI” is too broad for an initial packet. A stronger outcome might be: compare a specific spectral observation across two selected wavelength channels and explain why a feature changes, or manipulate an explicitly idealized model and predict what changes.

Record:
- audience/prerequisite assumptions;
- question and sub-questions;
- what is in scope and out of scope;
- what the learner should be able to explain, predict, compare or calculate;
- how understanding will be checked.

### Stage 2 — Discover authoritative sources

Start with the responsible dataset archive, original paper, official technical documentation, repository, institutional research group, or metadata registry. Use secondary explainers for pedagogy and context, not as the sole support for important technical claims.

Discovery tools (search engines, literature APIs, AI agents and catalogues) propose sources; they are not themselves evidence for scientific correctness.

### Stage 3 — Create and inspect source records

Before treating a result as usable, record:
- stable VSE source ID;
- title, responsible person/organization and canonical URL;
- source type and whether primary, secondary, discovery-only or educational;
- exact version, DOI, mission release, data collection or commit where applicable;
- publication/revision date and UTC date checked;
- exact passages, sections, metadata fields, files or observations actually inspected;
- direct claim support and known limitations;
- access route, account/token requirement, quotas, rate limits and known operational restrictions;
- separate rights for code, data, text, figures, images, derived products and embeds;
- update/review triggers and outstanding checks.

A successful page load is not a claim review. A free API is not automatic permission to redistribute every returned item. Data visible through an official portal is not necessarily available with identical access and rights across the whole archive.

### Stage 4 — Inspect data before designing the UI

For a data-driven topic, inspect one small real query or sample early. Do not design a data explorer from a screenshot or a dataset abstract alone. Record:
- dataset/product ID, version, DOI or persistent identifier;
- schema and data types;
- field definitions, units, coordinate/time conventions and null/missing-value representations;
- geographic and temporal coverage and actual resolution;
- whether values are measurements, derived products, model output, forecasts, simulations or labels;
- calibration, quality flags, uncertainty and excluded/invalid observations;
- sample row/image dimensions and download size;
- API query parameters, pagination, authentication and response format;
- transformation steps and why each step is scientifically defensible;
- provenance and reproducibility details, including the source query and access time.

If a large file is required, begin with a bounded cutout, subset, catalogue response or a few representative records. Avoid placing large raw datasets or third-party assets in Git when the source archive or a permitted small example is more appropriate.

### Stage 5 — Build a claim/evidence map

Every important explanation is made of claims narrow enough to check. Link each claim to the exact source or data fields that support it. Mark whether it is an established principle, source-reported result, measurement, derived quantity, model estimate, prediction, hypothesis, analogy or simplification.

For quantitative content, record units and formulas, assumptions, any conversions/filters/normalization, and hand-checkable expected results. Preserve conflicting evidence instead of silently resolving it in favor of the easiest story. If the evidence does not support an answer, narrow the scope or state the limitation.

### Stage 6 — Propose the visual and its interaction

Start from the relationship the learner must understand. Pick a sequence, annotated image, plot, network/relationship graph, map, parameterized physical model or another justified form. Record:
- learning objective and what the visual encodes;
- x/y/colour/size/position semantics and units where applicable;
- selectable dimensions, filters or user-controlled parameters and their valid ranges;
- what should change when the user interacts and a plain-language explanation of why;
- assumptions and important omitted factors;
- text fallback, caption/alt text, keyboard behavior, reduced-motion behavior and mobile layout;
- tests or reference comparisons that can reveal wrong output.

A visual should not be considered correct merely because it looks plausible or runs without a JavaScript error.

### Stage 7 — Test the evidence and the learner experience

Use the methods appropriate to the claim:
- source-context check for statements attributed to a paper or institutional source;
- unit analysis and independent hand calculations for quantitative claims;
- versioned test cases and known expected behavior for deterministic models;
- comparisons with independent data/products where appropriate;
- boundary, missing-data, outlier and invalid-input tests;
- mobile, keyboard, reduced-motion and non-visual alternatives;
- small before/after learner task to assess understanding rather than attractiveness alone.

Code tests demonstrate behavior within the tested envelope; they do not establish that the scientific premise is true.

### Stage 8 — Publish a bounded, auditable learning packet

Only after the prior stages are complete enough for the chosen scope should the packet be eligible for implementation. It should include:
- the learner question and outcome;
- progressive explanation drafts;
- topic, claim, source and dataset records;
- data transformations/units and a reproducible query or sample path;
- visual contract and limitations;
- test cases/results;
- accessibility and failure behavior;
- rights/attribution notes;
- the review status and next review trigger.

Keep VSE's user experience self-contained: show the explanation, source identity, claim support, important limitations and analysis context inside VSE. Retaining canonical source IDs and URLs is necessary for auditability; sending learners away instead of teaching them inside the product does not satisfy the VSE concept.

## Different research tracks, shared controls

| Track | Evidence packet must include | Additional failure mode |
|---|---|---|
| Concept explainer | Narrow claims, primary references, explanatory sequence, concept-appropriate visual contract | Analogy or generated text can distort the mechanism |
| Scientific dataset explorer | Exact collection/product version, schema, units, coordinates/time, quality flags, transformations and sample access | Display may misstate data, mix incompatible products or hide calibration/coverage gaps |
| Environmental investigation | Location/time scope, definitions, measurement/model distinction, missingness and uncertainty | Correlation may be mistaken for causation; one region may be overrepresented |
| ML dataset/benchmark | Dataset card, license, provenance, splits, task definition, baselines, metrics, reproducible evaluation and compute requirements | Leakage, contamination, selection bias or an invalid comparison can create misleading results |

## Storage and tooling principles (not technology choices)

- Begin with human-readable Markdown/CSV/JSON and small version-controlled records if they meet the need.
- Do not choose a database, vector store, object store, ETL service or job queue until a real volume/query/update problem has been demonstrated.
- Do not commit secrets, access tokens, unnecessary personal data or large files with uncertain redistribution rights.
- Keep source metadata and evidence records separate from presentation code where practical.
- Prefer deterministic transformations and logged source queries over opaque manual editing of data.
- If a transformation or model is later implemented, store its version and test fixtures so the output can be reproduced.
- Generated text or visual plans remain drafts until validated against the records and schemas; never execute arbitrary code generated by a model in the browser.

## Maintenance

Update the dataset/API register when a new source is investigated. Update RESEARCH_COVERAGE.md when the status changes, RESEARCH_LOG.md after substantive inspection, RESEARCH_BACKLOG.md when a gap or decision is discovered, and STATE.md when the current checkpoint changes. Do not mark a task complete unless the described check has actually occurred.
