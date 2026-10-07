# Track F — Native Academic Component Specification

Batch 15 · ACADEMIC-01–07 · Review. Bunlar native editable SVG review kaynaklarıdır. Figma component, variable binding veya auto-layout kurulmadı; Figma ve Final Production Export Pending.

## Ortak anatomy / token mapping

Card container → header icon + type label → heading → body → asset-specific content → semantic state. Named SVG groups: `card-*`, `editable-formula`, `editable-step-1/2/3`, `semantic-state`. Tüm gerçek içerik SVG `<text>` olarak kalır; raster image veya path-outline text kullanılmaz. Inter/Manrope TTF source içine gömülüdür; text editlenebilir. Figma aktarımında yerel fontların kurulması ve native text ölçülerinin tekrar gözden geçirilmesi gerekir.

| Review value | Future variable mapping | Mode / kullanım |
|---|---|---|
| #4F46E5 | Brand/Primary | Indigo identity, solution step marker |
| #FFFFFF / #101828 | Surface/Card | Light / Dark |
| #F7F8FC / #0C111D | Surface/Subtle | Light / Dark |
| #101828 / #FFFFFF | Neutral/TextPrimary | Light / Dark |
| #344054 / #D0D5DD | Neutral/TextSecondary | Light / Dark |
| #D0D5DD / #344054 | Neutral/Border | Decorative card outlines; not sole state cue |
| #EF4444 | Semantic/Error | Named error state separator, textual label always present |
| #F59E0B | Semantic/Warning | Named attention separator, textual label always present |
| Manrope 21 / 650 | Typography/Heading | Long Turkish heading wraps |
| Inter 15 / 22.5 line-height | Typography/Body | Reading text, choices, solution steps |
| Inter 13 | Typography/Metadata | Type, source, period, validation metadata |
| Space 8/12/16/20/24 | Spacing | Reused rhythm; mobile inset 20, desktop inset 24 |
| Radius 16/8 | Radius/Card / Control | Card / embedded fields and steps |
| 24 grid, 1.75 stroke | Icon/GlobalGrammar | Existing ICON-01 geometry imported unchanged |

Review values are token candidates consistent with canonical palette; QA checks text contrast. Borders are decorative and do not alone define interactive or semantic state. Dark accent labels are white; indigo continues on solution markers with white numerals. No new brand color/icon family is created.

## Real source variants

Every asset includes light/dark at card widths 480 and 320 px, long Turkish heading/content and a separate short-title light 480 variant. Card height is content driven. Individual files, variant width/state/theme/height, and preview paths are enumerated in `manifest.json`.

| Asset | Anatomy extension | Additional real variants |
|---|---|---|
| ACADEMIC-01 | Topic heading, summary paragraphs, two key rules | Short / long title |
| ACADEMIC-02 | Formula field, editable `a / b = k`, condition `b ≠ 0`, variable note | Formula and condition separate text layers |
| ACADEMIC-03 | Prompt, 3 radio choices, response guidance | Default / error. Lightweight check, does not claim mastery |
| ACADEMIC-04 | Reference intro, three indexed solution steps, example provenance note | Each step separate group, numeral and explanation editable. Formula text not raster |
| ACADEMIC-05 | Callout content, explicit state name | Tip, important note, attention, remember, error |
| ACADEMIC-06 | Source, verification date, exam period, validity, review status | Default / attention. Editable template fields, no fabricated live news |
| ACADEMIC-07 | Label, metric/state, evidence/context note | Accuracy, speed, net trend, strong topic, strengthen topic, readiness; six cards in each theme/width |

## Responsive behaviour

320 px card width is the narrow review test, with 20 px horizontal inset and 280 px reading width. At 480 px the inset is 24 px. All headings/paragraphs use measured font wrapping and grow the card; no truncated Turkish heading. Choices retain 44 px minimum row height. Indexed solution steps stack vertically at every width; step labels retain at least 48 px left gutter. Formula field has independent editable condition line. Long formulae in future native components must wrap at semantic boundaries or use an accessible horizontally scrollable formula region; squeezing font or rasterizing mathematics is prohibited. No horizontally adjacent steps on mobile. Metadata wraps individually rather than collapsing provenance into a tooltip.

Mini analysis set is a responsive collection: use a single column on narrow screens; wider layouts may place cards in a grid without removing evidence notes. No hidden 0–110 score is rendered. Readiness remains a separate signal and limited data is explicit. Example numbers are sample layout content, not actual user data or new scoring rules.

## Semantics and future component integration

Named error/attention text accompanies color. The type icon comes from the approved global glyph set. Radio choices are SVG review structures, not implemented interactive controls; future Figma/native product integration must bind default/selected/focus/error states and provide keyboard/accessibility semantics. This batch does not create product code or invent a new lesson feature.

Verified academic solution stays the reference authority above AI, consistent with PRODUCT_PLAN §49. The ACADEMIC-04 sample is explicitly a layout/example with academic review required; no false live verification badge. ACADEMIC-06 preserves time-sensitive provenance, exam period and validity rather than treating current affairs as evergreen mastery. Mini-check is learning support, not main adaptive measurement (PRODUCT_PLAN §16/46). Production polish of previously approved raster assets is outside this native component track.
