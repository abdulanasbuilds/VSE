# Engineering Experiment — Satellite-Orbit Module

**Prepared:** 2026-10-16  
**Status:** Bounded model/control checks and the dependency-free Node regression suite passed on 2026-10-16. This is one reusable visualization module, not VSE's overall product direction or the selected hackathon entry. It has not received independent physics review.
**Concept question:** Why does a satellite stay in orbit instead of falling straight back to Earth?

## Why this was useful as an engineering experiment

This module is narrow enough to build and review. It demonstrates a few reusable VSE patterns—intuitive explanation, a meaningful interactive visual, a deeper equation, and visible assumptions—without external visual assets. It does not demonstrate the complete question-first VSE product, AI-assisted retrieval, or general-purpose visual explanation.

Treat the orbit module as a reusable example only. The LLM question described in HACKATHON_SLICE_BRIEF.md is the leading candidate for the first VSE-facing hackathon experience, but event rules remain unknown and the choice is not final.

## Shortlist comparison

| Candidate | Evidence available | Visual potential | Implementation / evidence risk | Decision |
|---|---|---|---|---|
| Why satellites stay in orbit | NASA Science, NASA Space Place, NASA JPL education materials directly explain orbital motion | High: manipulate initial sideways speed and observe path | Manageable with a declared Newtonian two-body model; numerical model still requires testing | Engineering experiment only |
| Explore SPHEREx sky observations | NASA mission and data pages are strong candidate sources | Very high: real observations, filters, comparison | Higher: mission data schema, retrieval, calibration and visualization design need dedicated investigation | Keep for a later data-explorer slice |
| Explain a selected AI/LLM concept | Potentially strong papers and official technical reports | High for selected mechanisms | Risk of oversimplifying learned internal representations or implying diagrams are literal internal traces | Leading candidate for the first VSE-facing hackathon slice; define the exact scope after event rules and source checks |

This is not a complete comparison of VSE topics. It is a shortlist for the first demonstrable vertical slice.

## Learner objective and evaluation

After using the experience, a beginner should be able to explain in their own words that (1) gravity still acts in orbit, (2) the satellite has sideways motion while gravity continuously bends its path, and (3) changing the initial speed can change the path into an impact, a closed orbit, or an escape trajectory in the idealized two-body case.

Evaluation should be lightweight and honest: ask the learner the same concept question before and after the demo, then ask them to explain why the model's paths change. A correct multiple-choice response alone is not strong evidence that learning occurred.

## Claim map

| Claim ID | Intended statement | Supporting source | Scope / caveat | VSE status |
|---|---|---|---|---|
| ORB-CL-001 | Gravity remains active during an orbit; orbital motion can be described as continuous falling around the planet. | NASA Science, “Gravity & Mechanics”; NASA “What Is an Orbit?” | Beginner explanation; real spacecraft may perform engine burns and are affected by perturbations. | CLAIM CHECKED against the cited NASA explanations; no independent scientific review |
| ORB-CL-002 | Sideways motion plus inward gravitational acceleration can produce a closed orbit; changing speed changes the trajectory. | NASA Science, “Gravity & Mechanics”; NASA JPL “Modeling the Orbits of Planets” | A specific orbit depends on initial position and velocity as well as gravitational parameters. Too little speed from this chosen start can intersect the planet; escape requires meeting the energy/speed condition. | CLAIM CHECKED at the conceptual level; the VSE implementation has not had a scientific model review |
| ORB-CL-003 | Circular-orbit speed in an ideal Newtonian two-body model is v = √(μ/r), with μ = GM. | The equation follows from equating gravitational acceleration μ/r² to circular inward acceleration v²/r; see NASA's orbital-velocity learning reference. | This is an idealized derivation, not a complete real-mission model. The reference page is archived and not updated; independent technical review is still needed. | Formula derivation documented; basic trajectory behavior tested in a harness; the calculation has not been independently reviewed. |
| ORB-CL-004 | Escape speed at distance r in the idealized two-body model is vₑ = √(2μ/r), or √2 times circular speed at that same radius. | NASA GSFC archived orbital-velocity lesson; see source addendum ORB-005. | Escape from Earth does not mean escape from the Sun or all gravity. The threshold assumes an idealized isolated two-body setup. | One above-threshold escape path was tested; threshold behavior and scientific implementation still need broader review. |

## Sources reviewed on 2026-10-16

1. **NASA Science — Chapter 3: Gravity & Mechanics**, especially “How Orbits Work” and “The Key to Space Flight”: https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/  
   Official institutional learning resource. The page explicitly marks its cannonball diagrams as simplifications, explains the no-atmosphere scope, and describes an orbit as falling around Earth. The specific lesson content was opened and read; no separate NASA-authored numerical dataset was used.

2. **NASA — What Is an Orbit? (Grades 5–8)**: https://www.nasa.gov/solar-system/what-is-an-orbit-grades-5-8/  
   Beginner-friendly account of straight-line motion without gravity, inward gravitational pull, sideways speed, and how too much or too little speed affects the path. Page opened; specific facts should still be paired with technical references before being used beyond the educational scope.

3. **NASA JPL Education — Modeling the Orbits of Planets**: https://www.jpl.nasa.gov/edu/resources/lesson-plan/modeling-the-orbits-of-planets/  
   Lesson plan about the relationship between mass, gravity, and orbital motion. Page opened; the lesson's physical activities are reference material, not assets copied into VSE.

4. **PhET — Licensing Information**: https://phet.colorado.edu/en/licensing  
5. **NASA GSFC archive — Kepler's Third Law / orbital velocity**: https://pwg.gsfc.nasa.gov/stargaze/Skepl3rd.htm
   The page derives circular-orbit velocity and escape velocity, including the √2 relationship. It explicitly warns that the material is archival and no longer updated (last updated 2008). The Earth-radius values differ in adjacent text (6,317,000 vs 6,371,000 m), so VSE uses only the symbolic relationship and does not reuse its numerical example. This is supporting educational material, not current independent model validation.
   Reviewed as a rights warning, not as a simulation to embed. Regular HTML simulation files are described as CC BY-NC 4.0; PhET separately addresses commercial use and brand/logo requirements. VSE should not reuse its simulation code/assets for this prototype.

## Visual model specification

- Use an original, self-contained SVG/canvas presentation and the two-body Newtonian acceleration law.
- Treat the planet as a spherical, non-rotating body; ignore air resistance, the Moon/Sun, uneven mass distribution, relativity, and engine burns.
- Use normalized distance and time for the picture. State that its size and speed are not mission-grade measurements.
- Let the user adjust initial tangential speed as a multiple of circular-orbit speed at the same starting radius.
- Distinguish path outcome from scientific confidence. Include a fallback text explanation, keyboard-operable controls, reduced-motion handling, and a visible caveat list.
- Bounded V8 harness checks passed on 2026-10-16 for seven speed settings: 0.70x and 0.84x were Impact (minimum displayed radius ~0.99810 and ~0.99971); 0.85x was Elliptical and cleared the modeled surface (minimum radius ~1.01797); 1.00x remained nearly circular (radius 1.79988–1.80012 around 1.8); 1.414x remained bound/elliptical; and 1.415x and 1.50x were Escape. All inspected trajectory coordinates were finite.
- The dependency-free Node regression test is `tests/orbit-model.test.mjs`, with GitHub Actions workflow `.github/workflows/orbit-model-tests.yml`. GitHub Actions run #38836368258 (PR #1) completed successfully under Node.js 22, including the regression-test step. The PR was squash-merged into `main` as commit `bead3c078e5651f64f3407618584e44a438fb698`.
- These harness checks do not validate real-browser behavior, arbitrary numerical cases, long-term integration error, or the underlying physics independently.

## Decisions and unresolved work
- The orbit lesson now displays source identities and short descriptions inside the page without outbound source links. Canonical URLs and rights notes remain in this internal research packet and source catalogue.

- Do not use a database, backend, model API, or third-party embed for the initial page. Static, version-controlled content plus in-browser calculation is enough.
- The hackathon identity and terms remain unresolved. This prototype must not be represented as eligible for an unidentified event; check rules before submitting or assuming that pre-existing code is allowed.
- No qualified external reviewer has reviewed the numerical model; no browser, screen-reader, real-device, or learner study has been completed yet.
- Next action: inspect the page in an actual browser at mobile and desktop sizes; check keyboard, reduced-motion, screen-reader, and overflow behavior; then obtain beginner feedback.
