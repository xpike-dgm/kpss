# Kavriva KPSS — Native Foundations Spec

2026-10-08 · Approved for Design Direction — Owner Decision. Final implementation acceptance / export Pending.

[Foundations](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-15) · [Native variables/modes/values](FIGMA_NATIVE_STATE.json) · [QA](CONSISTENCY_QA.json).

## Variables ve modes

123 native variable, 11 collection. Scopes role göre daraltıldı; semantic/brand/surface değerleri native paint bindings ve alias'larla kullanılır.

| Collection | Variable | Modes |
|---|---:|---|
| Neutral | 37 | Light / Dark |
| Brand | 5 | Light / Dark |
| Surface | 4 | Light / Dark |
| Text | 5 | Light / Dark |
| Border | 3 | Light / Dark |
| Semantic | 13 | Light / Dark |
| DataViz | 3 | Light / Dark |
| Spacing | 12 | Default |
| Radius | 5 | Default |
| Motion | 4 | Default |
| Typography | 32 | Standard / Large Text 200% |

Primary Indigo `#4F46E5`; Electric `#4355E8`. Brand rengi ile accessible text/accent rolü ayrıdır. Essential başarı/uyarı/hata anlamı editable label, check ve semantic foreground ile taşınır; decorative renk anlamın tek taşıyıcısı olmaz. Dark error foreground açık kırmızıdır; beyaz metinli destructive button ayrı `color/semantic/error-solid = #B42318` kullanır (iki mode). Bu mevcut paletteki role ayrımıdır.

## Typography

16 native text style; her stilin size/line-height değeri Typography collection'a bağlıdır. Standard ve Large Text 200% mode'ları gerçek native text reflow sağlar. OS status satırı sistem ölçüsünde kalır. Fallback glyph fontları yalnız eksik Unicode işaretleri içindir; yeni DS font ailesi değildir.

| Style | Family | Weight | Size / line height |
|---|---|---|---|
| Display/XL | Manrope | Bold | 48 / 56 |
| Display/L | Manrope | Bold | 40 / 48 |
| Heading/H1 | Manrope | Bold | 32 / 40 |
| Heading/H2 | Manrope | Bold | 28 / 36 |
| Heading/H3 | Manrope | SemiBold | 24 / 32 |
| Heading/H4 | Manrope | SemiBold | 20 / 28 |
| Body/L | Inter | Regular | 18 / 28 |
| Body/M | Inter | Regular | 16 / 24 |
| Body/S | Inter | Regular | 14 / 22 |
| Label/L | Inter | Semi Bold | 16 / 24 |
| Label/M | Inter | Semi Bold | 14 / 20 |
| Label/S | Inter | Medium | 12 / 18 |
| Caption | Inter | Regular | 12 / 18 |
| Numeric/XL | Manrope | Bold | 40 / 48 |
| Numeric/L | Manrope | Bold | 32 / 40 |
| Numeric/M | Inter | Semi Bold | 24 / 32 |

## Spacing / shape / motion

Spacing: 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48 px. Radius S/M/L/XL/full: 4/8/12/16/999 px. Elevation: none/card/floating/modal (4 native effect styles). Motion durations: fast 120, normal 200, slow 320, reduced 0 ms. Reduced motion runtime tercihine bağlanmalıdır; bu faz Motion asset export değildir.

## Responsive layout

| Width | Grid | Kullanım |
|---:|---:|---|
| 320 | 4 columns | Narrow mobile QA |
| 390 | 4 columns | Core mobile master |
| 768 | 8 columns | Tablet foundation specimen |
| 1024 | 12 columns | Desktop foundation specimen |
| 1440 | 12 columns | Wide foundation specimen |

Native Auto Layout, FILL width / HUG content, scrolling viewport kullanılır. Mobil ana içerik padding 24 px; 844 px ekranlarda safe area ve bottom navigation ayrı region'dır. Tablet/desktop foundation specimen'leri tam desktop product screen fazı değildir.

## Accessibility ve QA sınırı

İnteraktif target tasarım minimumu 44 px; primary control 48 px. Focus ring 2 px, control dışında 4 px gap. Selected/error/wrong durumları yalnız renkle anlatılmaz. Klavye focus sırası, dialog focus trap/return, switch/checkbox/radio rolleri, accessible name ve screen-reader announcements component usage notlarıdır; runtime uygulama testi gerekir.

68 Light/Dark text/control eşleşmesi geçti. Minimum text ratio 4.51:1 (hedef 4.5); minimum control ratio 4.45:1 (hedef 3). Bu belirlenmiş native rol eşleşmelerinin kontrolüdür, bütün raster paletinin veya çalışan ürünün WCAG sertifikasyonu değildir. P-01–P-06 Open kalır.
