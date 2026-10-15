# Quality, Verification, and Provenance

## Why this exists

A vivid animation or confident AI response can make a weak explanation feel true. VSE must make evidence quality understandable and prevent an unreviewed claim from inheriting credibility merely because it appears beside an authoritative logo.

## Evidence layers

Keep these layers separate:

1. **Discovery:** a search result, recommendation, or catalogue entry points to a potential source.
2. **Source checked:** the page/repository/dataset exists and its identity and context are confirmed.
3. **Claim checked:** a specific claim is found in context, with relevant scope and conditions noted.
4. **Corroborated:** another suitable independent source supports the claim, when such corroboration is appropriate.
5. **Model/calculation tested:** the relevant computation or interactive model has reproducible tests and stated assumptions.
6. **Formal verification:** a precise formal statement has been checked by an appropriate proof system. This says nothing automatically about whether the formal statement correctly captures the intended informal theorem.
7. **Independent expert review:** a suitably qualified reviewer has examined the specified result.
8. **Contested or unresolved:** evidence is incomplete, disagreement exists, or a result still requires independent work.

Not every educational claim needs every layer. Pick the right method for the kind of claim and state the method honestly.

## Mathematics and formal proofs

For AI-generated mathematics, record at least:
- the informal theorem or conjecture;
- the exact statement written in the formal proof;
- whether a formalization exists;
- whether the proof checker completed successfully;
- whether the formal statement matches the intended mathematical problem;
- whether assumptions, imported lemmas, axioms, or scope restrictions matter;
- whether an independent specialist has reviewed the argument.

A successful Lean build can establish that the formal proof follows within the stated formal environment. It does not by itself prove that the theorem statement is the desired one, that a natural-language summary is correct, or that a research claim has been accepted by the wider field.

## Scientific claims and data

For empirical research, note study type, sample or data scope, units, measurement method, uncertainty, limitations, confounders where relevant, and whether the source describes a result, hypothesis, prediction, or causal interpretation.

For datasets, record provenance, collection dates, geographic and population scope, schema, missingness, update cadence, and license. A plot should state its source, transformations, filters, axes, and unit. Avoid implying causation from correlation.

For unsettled, new, or controversial research, present disagreement and uncertainty rather than laundering a single claim into fact. News can help find a story but should not replace the original paper or data for technical claims.

## AI-assisted content

- Retrieval and synthesis must preserve working links and source titles.
- Do not fabricate paper titles, authors, DOIs, citations, quotations, theorem numbers, or datasets.
- If the evidence cannot be found, say that it was not found and create a follow-up task.
- Label generated draft text internally until checked.
- Do not allow an LLM to mark its own output as verified.
- Keep the original source claim distinct from VSE's explanation or interpretation.
- If sources conflict, record the conflict and avoid silently picking the more convenient answer.

## Visual and interaction checks

Every model should be checked against:
- expected values, limiting cases, units, and dimensional consistency;
- whether its axes, scales, shapes, and colours are truthful;
- extreme values and invalid inputs;
- consistency between the prose and what's shown;
- a text explanation or alternative for people who cannot use the interaction;
- mobile layout and keyboard operation;
- a concise statement of assumptions and excluded behaviour.

A schematic can simplify a system, but it must be identified as schematic. Never represent a conceptual diagram as a literal neural-network trace, atomic event, biological process, or measured image if it is not one.

## Licensing and attribution

Before reuse or embedding, check the current official terms for the exact asset or API:
- code licence;
- content/data licence;
- figure/image licence;
- third-party rights;
- attribution wording;
- commercial restrictions;
- redistribution or share-alike conditions;
- link, API, rate-limit, hotlink, or embedding rules.

Licences can differ within the same website or database. Examples in the source catalogue are prompts for review, not universal permission to reuse all materials. When uncertain, link to the original, quote only what is appropriate, or create an original visualization from facts/data that can lawfully be used.

## Corrections and update policy

Maintain a history when a claim or visualization changes. A correction should explain what changed, why, which sources support the change, and whether related topics need review. For data that changes often, store a checked date and define when it needs re-checking.

## Minimum publish checklist

- [ ] Main claims link to sources that directly support them.
- [ ] Sources were inspected in context, not just discovered in search.
- [ ] Evidence status is accurate and not overstated.
- [ ] Analogy and simplification limits are explicit.
- [ ] Calculation or interaction has documented tests.
- [ ] Units, axes, assumptions, and uncertainty are visible where relevant.
- [ ] Accessibility/mobile fallback has been checked.
- [ ] Reused media/code/data has a checked licence and attribution.
- [ ] Last review date and responsible review status are recorded.
