# Kavriva KPSS — Native Component Spec

2026-10-08 · Approved for Design Direction — Owner Decision. Final implementation acceptance / export Pending.

Yalnız **04 — Core Components** alt kümesi: 43 core family, 46 component set, 222 variant component. Button family Primary/Secondary/Ghost/Danger olarak dört sete ayrılır; Size × State matrisi yönetilebilir tutulur. **05 — Academic Components**: 18 set, 58 variant. File-wide: 22 page, 123 variable, 16 text style, **68 component set / 466 component node / 1,727 instance**. Üç brand lockup seti ve APP-04 setiyle toplam 68 set oluşur. 140 ayrı native icon component (70 glyph × outline/active) standalone component node olarak 466 toplamına dahildir; set sayısına dahil değildir. Galeri/pattern/ekran instance'ları file-wide 1,727 içinde sayılır; screen/test frame alt kümesi 1,258'dir.

## Ortak anatomy ve binding

Yukarıdaki file-wide sayılar **Phase 1–2 Owner acceptance snapshot** kapsamıdır. Phase 3 yalnız Product Patterns'e 10 set / 41 variant ekledi; güncel file-wide **78 set / 507 component / 3,729 instance**. Core 46/222 ve Academic 18/58 değişmedi. [Phase 3 actual state](PHASE_3_NATIVE_STATE.json) güncel sayım kaydıdır.

İlgili children Auto Layout container içinde tutulur. Dikey container children FILL width; editable text HEIGHT resize ve wrapping; content HUG height. Paint, spacing, radius ve text size/line-height role variable'a bağlıdır. Label/Text TEXT, icon INSTANCE_SWAP, göster/gizle BOOLEAN ve state/size VARIANT property'leri kullanılır. Ürün ekranları reusable instance'lardan kurulur.

Default/hover/pressed/focus/disabled/loading yalnız gerekli component'lerde vardır; checkbox/radio/switch checked durumları native shape içerir. Button sizes 44/48/56; focus dış ring 2 px + 4 px gap. Answer selected durumu editable “Seçili” label taşır; doğruluk test tamamlanmadan gösterilmez. Tabs ve segmented control label'ları editable; active underline/indicator renkten bağımsız ipucu sağlar. Dialog ShowAction property tek primary CTA düzenini korur.

## Core sets

| Family / Set | Variants | Figma |
|---|---:|---|
| Button/Primary | 18 | [11:38](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=11-38) |
| Button/Secondary | 18 | [11:75](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=11-75) |
| Button/Ghost | 18 | [11:112](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=11-112) |
| Button/Danger | 18 | [11:149](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=11-149) |
| Icon Button | 5 | [12:27](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-27) |
| Text Input | 6 | [12:53](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-53) |
| Password Input | 6 | [12:79](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-79) |
| Search | 6 | [12:105](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-105) |
| Textarea | 6 | [12:131](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-131) |
| Select | 6 | [12:181](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-181) |
| Combobox | 6 | [12:231](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-231) |
| Checkbox | 4 | [12:244](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-244) |
| Radio | 4 | [12:257](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-257) |
| Switch | 4 | [12:270](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-270) |
| Chip | 3 | [12:277](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-277) |
| Tag | 3 | [12:284](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-284) |
| Badge | 3 | [12:291](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-291) |
| Tabs | 4 | [12:320](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-320) |
| Segmented Control | 4 | [12:349](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-349) |
| Tooltip | 4 | [12:362](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-362) |
| Toast | 4 | [12:375](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-375) |
| Alert | 4 | [12:388](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-388) |
| Modal | 3 | [12:405](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-405) |
| Dialog | 3 | [12:422](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-422) |
| Bottom Sheet | 3 | [12:439](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-439) |
| Drawer | 3 | [12:456](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=12-456) |
| Progress Bar | 3 | [13:65](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-65) |
| Progress Ring | 2 | [13:72](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-72) |
| Skeleton | 2 | [13:83](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-83) |
| Pagination | 3 | [13:105](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-105) |
| Stepper | 3 | [13:127](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-127) |
| Calendar | 2 | [13:274](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-274) |
| Timer | 3 | [13:299](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-299) |
| Card | 3 | [13:310](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-310) |
| List Item | 3 | [13:321](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-321) |
| Data Row | 3 | [13:332](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-332) |
| Accordion | 3 | [13:343](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-343) |
| Empty Container | 3 | [13:354](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-354) |
| Table | 3 | [13:389](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-389) |
| Avatar | 2 | [13:394](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-394) |
| Breadcrumb | 2 | [13:399](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-399) |
| Navigation Item | 4 | [13:428](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-428) |
| Mobile Bottom Navigation | 5 | [13:605](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-605) |
| Desktop Sidebar | 2 | [13:620](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-620) |
| Top Bar | 3 | [13:631](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-631) |
| Context Menu | 2 | [13:646](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=13-646) |

## Academic sets

| Set | Variants | Figma |
|---|---:|---|
| Question Card | 4 | [14:16](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-16) |
| Answer Option | 8 | [14:44](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-44) |
| Question Navigator | 5 | [14:55](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-55) |
| Topic Summary | 3 | [14:70](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-70) |
| Formula / Rule | 3 | [14:85](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-85) |
| Mini Check | 3 | [14:103](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-103) |
| Step-by-Step Solution | 3 | [14:118](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-118) |
| Hint / Warning | 3 | [14:133](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-133) |
| Current Affairs Card | 3 | [14:148](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-148) |
| Analysis Mini Cards | 3 | [14:163](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-163) |
| Example | 2 | [14:170](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-170) |
| Wrong Answer Card | 2 | [14:177](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-177) |
| Retention Card | 2 | [14:184](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-184) |
| Mastery Summary | 2 | [14:191](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-191) |
| Verified Solution | 2 | [14:198](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-198) |
| Test Header | 2 | [14:205](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-205) |
| Test Footer | 2 | [14:212](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-212) |
| Sıradaki Adım | 6 | [14:255](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=14-255) |

Question/Formula/Example/Solution gibi akademik içerik native editable text layer'dır. Yanlış çözümünde verified academic solution önceliklidir; AI açıklaması ayrı yardımcı bölümdür. Mini Check öğrenme desteğidir, mastery veya devam kapısı değildir. Hidden 0–110 mastery değeri UI'da gösterilmez.

## Icon grammar / Brand

24 px grid, 1.75 px stroke, round cap/join, default outline ve active counterpart aynı sistemdedir. Ana kullanım 20/24 px; 16 px yalnız basit glyph. Approved kaynaklar ICON-01/02/03'ten gelir; farklı library karışımı yok. Academic ve gamification glyph'leri aynı grid/stroke grammar'ını kullanır.

Master K/wordmark raster reference instance'ı immutable kalır; Direction A editable Manrope KPSS alt etiketi subordinate product descriptor'dır. Clear space x = görünür K yüksekliği / 4, optical offset 0 px. 160 px mevcut raster güvenli review ölçüsüdür, final marka minimumu değildir. Standalone K 24 px+ recommended, favicon 16 px zorunlu yüzeyde padding/canvas/contrast/export ile; contour değişmez.

## Implementation handoff

Native variants bir çalışan uygulama state machine'i değildir. Keyboard/ARIA, auth/server, offline sync, gerçek bağımsız soru havuzu, math/KaTeX, long Turkish editorial content, narrow layout ve verified academic içerik validation ayrıca uygulanıp test edilmelidir. Desktop Sidebar component ve responsive specimen, Phase 3/desktop full-screen üretimi anlamına gelmez.
