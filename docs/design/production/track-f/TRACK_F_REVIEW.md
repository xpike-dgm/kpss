# Track F — Academic Content Components Review

Batch 15 · ACADEMIC-01–07 · **Review**. Final Production Export and Figma **Pending**.

Seven editable UI structures were built from the existing Kavriva palette, Manrope/Inter typography and ICON-01 global grammar. SVG source is native geometry + editable text with embedded fonts, not a bitmap illustration. No K symbol/wordmark is inserted, traced or modified.

## Outputs

`assets/academic/track-f/review/` contains individual native SVG source and matched PNG preview. The family board is `ACADEMIC-01__academic-family-board__light-dark-mobile__v01.svg/.png`. Variant paths are recorded in `manifest.json`; component anatomy, token candidates and responsive transfer behaviour are in `COMPONENT_SPEC.md`. Rebuild script: `build-academic.cjs`.

## Asset review

| Asset | Result |
|---|---|
| ACADEMIC-01 | Short/long topic heading, readable summary and two rules. Content-driven height |
| ACADEMIC-02 | Editable formula and nonzero condition. Independent variable explanation |
| ACADEMIC-03 | Three radio-choice rows with default/error guidance; mini-check explicitly distinct from adaptive test |
| ACADEMIC-04 | Three sequential editable step blocks and calculations; solution reference remains above AI authority |
| ACADEMIC-05 | Tip / important note / attention / remember / error; named semantic states support color |
| ACADEMIC-06 | Source, verification date, exam period, validity and review status fields; attention state included |
| ACADEMIC-07 | Six context-aware metrics: accuracy, speed, net trend, strong/weak topic, readiness; sample data and limited evidence identified |

## QA

Real long Turkish headings/body, 320 px narrow and 480 px desktop, light/dark, simple editable mathematics and short title layouts are generated in actual source variants. Renderer measures text against each card bounds after font loading rather than checking only the outer viewport. `qa.json` records tested variant count, zero card text overflow and text contrast ratios. Small label/body colors meet 4.5:1 in these rendered themes. Amber/red are semantic separators, with high-contrast named labels; no state relies on color alone. Choice rows are at least 44 px high. Existing icon path geometry and 1.75 px stroke are imported unchanged.

Family board shows paired light/dark mobile examples at presentation scale. Inspect individual 320 px PNG/SVG at native size for reading review. Rendering is browser-verified but not a Figma binding or deployed component test.

## Open production work

- Figma native component import, variable binding, auto-layout and interaction/focus states Pending.
- Complex mathematical typesetting and semantic formula wrapping need future native review; current simple formula text remains editable.
- Example academic prose/calculations need normal academic editorial validation before publication. Current affairs is template metadata, not a live factual news assertion.
- SVG text import may need line-break/font metrics review in the eventual editable Figma target. No final export approval claimed.

No assets outside ACADEMIC-01–07 were produced. Marketing, Batch 18/19/21 were not started.
