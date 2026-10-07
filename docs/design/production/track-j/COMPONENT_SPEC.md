# Track J — Share template specification

SHARE-01–05: Review. Figma / Final Production Export: Pending.

Anatomy: unchanged canonical Direction A brand slot → editable title → editable template value → optional metric unit → existing ICON-02/03 glyph → indigo baseline. Brand remains the master raster source nested intact in its approved SVG lockup; these are hybrid editable SVG, not final vector logos. No dashboard or product screen is simulated.

Variants: OG 1200×630 (standard approximate 1.91:1), square 1080×1080, story 1080×1920. All have Light/Dark. Story text and logo stay within y=250–1670; this is a conservative template safe area, subject to the eventual destination app's overlays. SVG text is editable; PNG files are previews only.

Fields: SHARE-02 `{{mock_name}}` / `{{net}}`; SHARE-03 `{{level}}`; SHARE-04 `{{streak_days}}`; SHARE-05 `{{achievement_name}}`. SHARE-01 has product identity and accepted slogan. `{{display_name}}` is disabled by default and requires explicit user opt-in in later assembly. No email, phone, ranking ID, account identifier or real person data. Sharing must be user initiated; no automatic publication is implemented.

Typography: Manrope title/value, Inter metric label. Colors: Brand Primary #4F46E5; Neutral #101828/#FFFFFF; Dark Brand Presentation #000000 (existing approved master presentation). Dark glyph uses white to retain contrast; indigo baseline remains a decorative product accent. ICON-02/03 paths, grid24/stroke1.75/round cap+join are reused intact. No new glyph library.

Responsive transfer: formats rearrange vertical spacing from the same anatomy. Dynamic Turkish names wrap to at most three lines in the reserved value slot. OG Net is below that slot. Never shrink the master brand below its source-safe review scale to fit dynamic copy. Longer than three lines or unbroken identifiers need validated wrap/reflow in the eventual native renderer; do not overlap the icon, crop text, or rasterize labels. SVG line breaks are editable but not automatic Figma auto-layout.

Actual QA fixtures include long Turkish mock and achievement names in all three formats. These synthetic copy fixtures contain no user record and are not production data. Contrast and text bounds are recorded in qa.json. Sharing preview legibility at 320px is visually reviewed; destination compression/accessibility metadata and native replacement/reflow remain final assembly tasks.
