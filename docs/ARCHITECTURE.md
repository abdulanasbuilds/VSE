# Provisional Architecture

Status: conceptual only. This document does not authorize installing a stack or building all components. Pick technologies after the first concept and hackathon constraints are known.

## Main conceptual parts

### 1. Content and source registry

Stores structured topic records, sources, citations, source dates, content status, rights notes, review notes, and relationships among concepts. The first prototype may use version-controlled Markdown or JSON instead of a database.

### 2. Explanation layer

Organizes one concept into progressive stages:
- intuition and plain-language summary;
- analogy, explicitly labelled as analogy;
- visual explanation;
- formal mechanism, equation, or data where relevant;
- limitations and common misconceptions;
- further reading.

### 3. Visualization layer

A visualization record declares its type, inputs, units, assumptions, expected relationships, tested ranges, and fallback explanation. The renderer may eventually support:
- static figure or diagram;
- data chart;
- step-by-step animated diagram;
- parameterized simulation;
- interactive geometry or 3D model;
- embedded third-party experience, only after its terms and privacy implications are reviewed.

Do not use a decorative image as a substitute for a model. Do not imply a schematic is a literal internal view of a real system.

### 4. Retrieval and question interpretation

If needed, map user language to topics and retrieve relevant, approved content. The system should favour source-backed records and expose retrieval gaps. Do not scrape or send user input to external services without understanding the privacy and terms implications.

### 5. Optional AI explanation service

AI may draft beginner-friendly language and propose visual representations from the retrieved records. The design should allow the source library and curated demos to work without AI. Mark generated content and require a claim-checking path before it is promoted to reviewed content.

### 6. Review and quality process

A lightweight record/review process checks:
- source authority and recency;
- scientific claim and context;
- consistency between explanation and visualization;
- calculations and edge cases;
- uncertainty, analogy limits, and known simplifications;
- licensing, attribution, and accessibility;
- regression tests after changes.

## Data relationships

A topic can link to multiple claims, sources, explanations, visualizations, and related topics. One source may support several claims, but a general source relationship must not be used to suggest that it supports every displayed sentence. Use claim-level references when the content is substantive.

## Quality and safety concerns

- Incorrect science can be made more persuasive by polished visual design.
- Data visualizations can mislead if units, scales, uncertainty, or selection filters are hidden.
- AI-generated explanations may hallucinate references or merge conflicting results.
- Third-party widgets can introduce licensing, privacy, access, availability, and mobile usability issues.
- Simulations often depend on assumptions or numerical approximations.
- Research that is new, contested, preprint-only, or not independently replicated needs a visible evidence label.

## Technology decision gate

Do not lock a framework or deploy service until:
1. the first concept and visualization are defined;
2. the hackathon submission requirements are checked;
3. the smallest implementation path is compared against available skills, devices, cost, and time;
4. the need for client-side computation, backend search, model access, or data storage is explicit.

## Initial deployment assumption

The first demo should be usable without accounts and should store no unnecessary personal information. Avoid a backend entirely if a static application can deliver the intended experience. If a backend or external AI service is later necessary, document its data flow, keys, cost, rate limits, failure modes, and privacy implications before implementation.
