# Research Log

## 2026-10-15 — Initial connection, product framing, and source pass

### Repository

- Connected to [abdulanasbuilds/VSE](https://github.com/abdulanasbuilds/VSE).
- GitHub repository metadata reports it is public, default branch main, and was empty before this documentation was created.
- No existing application code, framework, deployment, or prior content could be inspected. Do not assume a stack or existing state.
- First README commit: 14da667e29e15b9e8a9e6211f8e1b847dc4a2fcf.
- Other initial documentation was added in following commits; see git history for the full sequence.

### Sources inspected during the first pass

- OpenAI math README: https://github.com/openai/math/blob/main/README.md
  - Opened the page and read the current visible text.
  - Current visible content says 719 manuscripts across 372 families and approximately 42% of top-line results formalized.
  - Older search snapshots still show 722 manuscripts. Status: discrepancy recorded, not resolved to a single immutable count.
  - README warns that not all entries have Lean formalizations and unformalized results can have issues.
  - It points to CONTENTS.md, overview.pdf, preprints, the Lean library, formalization catalogue, Comparator instructions, reasoning traces, and history.
- OpenAI science: https://openai.com/science/
  - Opened official overview.
  - It describes AI-assisted research across mathematics, physics, chemistry, biology, literature/evidence search, data/code analysis, modelling, and research workflows.
  - Individual study pages and primary papers still need review.
- NASA Scientific Visualization Studio: https://svs.gsfc.nasa.gov/
  - Opened official library page. It describes data-backed visualizations, animations, images, and interactive content in Earth and space sciences.
  - It offers navigation by science category and media type; individual assets need separate source/rights checking.
- AlphaFold Database: https://alphafold.ebi.ac.uk/
  - Opened database and inspected its visible attribution/licensing section.
  - Site states open access to over 200 million protein structure predictions and CC BY 4.0 for AlphaFold data, with citations expected.
  - Individual third-party datasets and scientific interpretations require their own review.
- Our World in Data about page: https://ourworldindata.org/about
  - Opened official page. It describes more than 120 topics and over 14,000 interactive charts/tools.
  - Its articles/charts are CC BY unless stated otherwise, but underlying datasets often come from third parties and retain their own terms.
- PhET licensing: https://phet.colorado.edu/nb/licensing
  - Opened current licensing information.
  - Page states regular HTML simulation files are published under CC BY-NC 4.0; commercial use includes ad-supported and subscription products under their examples and may require a commercial licence.
  - Older/legacy resources can have different terms. Check the exact simulation and asset before embedding or adapting.
- NASA Interactives: https://www.nasa.gov/interactives/
  - Opened page and noted examples for climate, exoplanets, ice, sonification, Hubble, and other space/science experiences.
  - Every particular project requires a separate source, media, and accessibility review.
- Heyprof selected mathematics demos: https://www.heyprof.app/en/demo/fach/ki-forschungsmathematik
  - Opened the page; it describes 32 interactive visual examples based on selected OpenAI math families.
  - These are selected demonstrations, not an exhaustive visual compilation of the entire corpus.
- M0-AR independent math verification demo: https://m0-ar.github.io/openai-math-verify-2026/preview.html
  - Opened preview and read its stated scope and limitations.
  - It is independent of OpenAI and discusses multiple levels of checking. It explicitly says the Riemann-hypothesis central line and associated million-dollar prize are not solved by its cited narrower strip claim. Each detail still needs source-level review before VSE makes a claim.

### Additional discovery candidates surfaced

- Wolfram Demonstrations Project: https://demonstrations.wolfram.com/ — 13,000+ interactive computational demonstrations across science and other topics; individual reuse rights need review.
- Crossref REST API docs: https://www.crossref.org/documentation/retrieve-metadata/rest-api/ — provides scholarly metadata as JSON; abstracts and article contents may still be copyrighted.
- PubChem PUG REST: https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest — documented chemistry data service.
- Explorable Explanations curated list: https://github.com/blob42/awesome-explorables — discovery index, not blanket permission to reuse linked works.
- PhET, AlphaFold, NASA, OpenAI and Our World in Data should be treated as different kinds of source: educational simulation, prediction database, institutional visualization library, research collection, and research/data explainer respectively.

### Decisions now recorded

- VSE will start with an evidence-led visual explanation for one topic, not comprehensive ingestion.
- Research records must distinguish a resource being found from claims being verified.
- Current scope excludes authentication/authorization, payment, monetization, and subscriptions.
- Stack and deployment remain undecided until the official hackathon constraints and first concept are known.
- Future agents must continue from STATE.md and update the handoff after meaningful work.

### Work still not performed

- The OpenAI math repository's full contents, PDF overview pages, source TeX, proof tree, and manuscript families were not audited end-to-end.
- No Lean build or proof check was run.
- No individual proof was independently validated.
- Most candidate APIs and scientific portals are listed for future review but not individually verified.
- No technical application code was created; repository initialization currently consists of project and research documentation.
- The hackathon's official rules/deadline/judging criteria have not yet been verified.
