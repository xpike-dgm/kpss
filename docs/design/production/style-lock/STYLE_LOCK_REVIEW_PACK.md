# Kavriva KPSS — Style Lock Review Pack · v01

Tarih: 2026-10-07 (Europe/Istanbul)
Faz: Batch 03 → Batch 04 → Batch 05 · Owner pack approval: **Pending**
Yeni asset durumu: **Review** · Durma noktası: **Batch 06 öncesi**

## A. Batch 02 finalizasyonu

- **Direction A — Açık alt etiket**, Owner tarafından canonical Kavriva KPSS lockup direction olarak seçildi.
- **BRAND-02 / BRAND-03 / BRAND-04 = Approved for Design Direction**.
- **Final Production Vector Export = Pending**, **Figma = Pending**.
- B/C, `assets/brand/batch-02/archive/rejected-exploration/` içinde **Archive / Rejected Exploration** olarak korunur. 28 dosya taşındı, içerikleri değiştirilmedi veya silinmedi. A'nın 14 review snapshot dosyası korunur.
- Owner Decision, `production/batch-02/BATCH_02_REVIEW.md` ve `owner-decisions.json` içinde kaydedildi. Onay GitHub main'e commit edildi.

## B. Batch 03 — Product Icon Family

| Asset | Hazır çıktılar | QA / durum |
|---|---|---|
| APP-01 | 192/512 px main PNG + raster-embedded SVG; beyaz K / #4F46E5 | Review; K width .62 canvas, 32/64/128/192 native preview |
| APP-02 | 192/512 px maskable PNG + raster-embedded SVG; full-bleed opaque square | Review; K width .50 canvas; güvenli circle, rounded square ve squircle-like crop karşılaştırması |
| APP-03 | 16/32/48 px indigo/light/dark favicon PNG + raster-embedded SVG | Review; geometri aynı; yalnız canvas, padding, background ve export scale |
| APP-04 | 390×844 mobile ve 1440×900 desktop splash; light/indigo/dark | Review; canonical Direction A; mevcut master row + editable KPSS alt etiketi |

K PNG kaynak crop'u aynen embed edildi; redraw, simplify, tracing, contour değişimi veya non-uniform scale yok. Beyaz sunum, aynı raster source'un luminance alpha mask'idir; artwork'e threshold uygulanmadı. Kaynaktaki hafif doku/antialiasing korunur. K içeren SVG'ler **gerçek vector logo export değildir**. `source asset needed` ve final production vector ihtiyacı açık kalır.

Main export kare/full-bleed canvas'tır. Family-board'daki rounded main örnek yalnız platform sunum preview'udur. Maskable dosyalarda rounded corner veya dış saydam padding baked-in değildir; bütün canvas opaque indigo.

Maskable güvenli alan: merkezli, yarıçapı canvas kenarının %40'ı olan circle. [W3C Web App Manifest](https://www.w3.org/TR/appmanifest/#icon-masks-and-safe-zone) bu alanı tanımlar. 512 px canvas için r=204.8 px; tüm kaynak crop dikdörtgeninin en uzak köşesi r≈179.72 px, belirgin ink r≈142.34 px. **Bütün crop safe-zone içinde; PASS.** Bitmap alpha kontrolü bütün piksellerin opaque olduğunu doğruladı. Bu test OS/cihaz install testi yerine geçmez.

16 px favicon, Owner'ın zorunlu küçük yüzey istisnasıyla üretildi. K tanınabilir fakat iç ayrıntı sınırlı; geometri değiştirilmedi. Main 32 px'de de aynı K kullanılır. Standalone mark için 24 px+ recommended kuralı korunur; 16 px yalnız zorunlu browser/favicon kullanımına yöneliktir. Master logo için 160 px hâlâ raster review boyutudur, final minimum değildir.

Family comparison: `assets/app/batch-03/review/APP-01__app-icon-family__comparison__v01.png`.

## C. Batch 04 — Foundation Icon Grammar

**ICON-01: 38 global UI glyph**, 4 theme/state varyantı ile toplam 152 gerçek vector glyph SVG. Ayrıca editable icon-sheet SVG ve PNG önizlemesi.

Global kapsam: home, study, exams, mistakes, revision, saved, teams, profile, settings, notifications, search, filter, sort, back, forward, close, share, delete, edit, download, upload, help, report, security/privacy, AI, support, calendar, analytics, chart, target, timer, streak, trophy, lock, unlock, sync, offline, online.

| Grammar | Review kuralı |
|---|---|
| Canvas | 24×24 px |
| Ana keyline | x/y 3–21 |
| Optical envelope | x/y 2–22; curve/arrow overshoot en fazla 1 px |
| Stroke | 1.75 px @24; uniform scale ile 16/20/32'ye uyarlanır |
| Stroke cap / join | round / round |
| Rect corner | 2 px @24; küçük özel inset primitive'lerde 1 px |
| Default | Outline |
| Active | Light: indigo. Uygun primary silhouette filled; karmaşık glyph'ler outline kalır |
| Dark | Outline neutral #D0D5DD, active beyaz; aynı path geometrisi |
| Filled iç detay | Light white / Dark Surface cutout; native Figma'da Surface token'a bağlanacak |
| SVG renk kontrolü | currentColor + root presentation color; CSS ile override edilebilir |
| Boyut incelemesi | 16 / 20 / 24 / 32 px |

Sistem orijinal path/primitive tanımlarıyla tek grammar dosyasında kuruldu; hazır icon library veya farklı kütüphane karışımı kullanılmadı. Native glyph dosyalarında raster veya gömülü metin yoktur. Icon-sheet label'ları editable SVG text'tir; PNG yalnız review preview'dur.

Home, bookmark, profile, notification, security, trophy ve lock gibi uygun primary silhouette'lerde gerçek filled active varyant vardır. Her glyph'i zorla doldurmak yerine, karmaşık çizgisel glyph'lerde active indigo/white outline kullanılır. Bu faz ürün component state'lerini veya etkileşim/focus davranışlarını kodlamaz.

## D. Batch 05 — Academic + Gamification Extensions

**ICON-02: 17 academic glyph / 68 vector varyant.**

Türkçe, Matematik, Tarih, Coğrafya, Vatandaşlık, Güncel Bilgiler, GY/GK overview, question solving, topic learning, revision, full mock exam, analysis, time management, accuracy, difficulty, concept mastery, progress. **Education Sciences yok.** Kapsam makine denetiminde tam eşleşti.

**ICON-03: 15 gamification glyph / 60 vector varyant.**

XP, level, streak, daily mission, weekly mission, badge, achievement, season, rank, leaderboard, team contribution, milestone, special moment, reward chest, progress ring. XP, badge ve achievement'ta sınırlı filled emphasis var; neon, 3D, gradient, metal/rarity paleti veya farklı stroke dili yok. Reward-chest glyph'i yalnız mevcut prompt kapsamındaki nötr ödül kutusu işaretidir; lootbox veya yeni ekonomi özelliği tanımlamaz.

Batch 05, Batch 04 QA dosyasının varlığı ve **aynı grammar hash'i** olmadan çalışmaz. İki set aynı grid, stroke, cap/join, optik envelope, theme ve active mantığını değiştirmeden kullanır. Glyph'ler farklı anlamlar taşır; ayrı bir illustration veya esports stili yoktur.

Grammar hash: `2d791051b8841e979fa8c9c17c6e66a368ed5a0c290ad7349e5244be181b6d7a`.

## E. Cross-style QA

| Soru | Sonuç |
|---|---|
| Kavriva K korunuyor mu? | PASS — source/K crop hash aynı; aynı raster embed, contour işlemi yok |
| Direction A uygulanıyor mu? | PASS — splash'ta aynı source master row; KPSS x410 / baseline357.475 / Manrope57.6 normalize değerleri |
| Indigo tutarlı mı? | PASS — app ve light active ikonlarda #4F46E5; rastgele accent yok |
| App ve UI aynı marka mı? | PASS — app'te orijinal K, UI'da kontrollü line grammar; aynı palette/spacing, K'yi UI line icon'a dönüştürme yok |
| Academic başka set gibi mi? | PASS — aynı grammar hash, primitive ve stroke |
| Gamification fazla oyunlaşmış mı? | PASS — yalnız motif/filled emphasis; UI ile aynı geometri ve palette |
| Küçük boyut | CONDITIONAL — 16px favicon ve detaylı UI glyph'leri sınırlı; UI 20/24px önerilir, label/context gerekir |
| Light / dark | PASS — aynı outline paths; active cutout'lar tema yüzeyine uygun |
| Rastgele renk/stroke/radius | PASS — tanımlı palette + shared grammar; UI corner 2 ve inset1 belgeli |
| SVG vector doğruluğu | PASS — 280 glyph SVG gerçek vector; APP K artwork raster exception açıkça Pending |
| Maskable safe-zone | PASS — bütün source crop r179.72 < safe r204.8 |
| Viewport / layout | PASS — 70 glyph outline bounds güvenli, sheet text taşması yok; görseller incelendi |
| Durum/onay | PASS — 7 yeni Asset ID yalnız Review; owner style-lock kararı Pending |
| Figma | Pending — dosya yazma veya kuruldu iddiası yok |

Solid kontrast ölçümleri: white/indigo **6.29:1**; ink/white **17.75:1**; ink/surface **16.72:1**; neutral/dark **12.79:1**; white/dark **18.86:1**. Dark active beyazdır; indigo-on-dark erişilebilirliğini varsayarak palette kilitlenmedi. Bu rakamlar UI akışının tüm WCAG kriterlerinin onayı değildir.

## Durum, dosyalar ve açık ihtiyaçlar

- **6 Brand asset Approved for Design Direction**, **7 APP/ICON asset Review**, **74 diğer asset Planned**; toplam 87 ID.
- Glyph/varyant dosya sayısı asset sayısını artırmaz. ICON-01/02/03 üç Asset ID'dir, 70 glyph ve 280 state/theme varyant içerir.
- App review klasörü 40 dosya (20 SVG + 20 PNG); ikon klasörleri 280 native glyph SVG + 3 sheet SVG + 3 sheet PNG.
- `asset-registry.json`: güncel local kayıt; Figma registry değildir.
- Figma page structure / variable collections / native components / Asset Registry / export handoff Pending.
- Original vector source needed; Brand/App K Final Production Vector Export Pending. Bu durum mevcut Owner yetkisiyle design-direction fazını bloklamaz.
- Native UI icon vector source mevcut; final export/handoff yine Owner approval ve Figma aşamasını bekler. Exported/Figma Ready işaretlenmedi.
- Batch 06, category/empty/onboarding/gamification/AI/social üretimi veya parallel agent üretimi başlatılmadı. Style Lock Pack sonunda duruldu.
- Pack onayından önce Brand+App+Icon grammar “kilitlenmiş/final” diye işaretlenmez. Bu dosya tek toplu Owner review teslimidir.

## Teknik tekrar üretim / kanıt

- `build-app-family.cjs` → Batch 03 source-preserving canvas export.
- `icon-grammar.cjs` → tek UI grammar ve Global UI path tanımları.
- `build-icon-set.cjs` → Batch 04 gerçek vector glyph exports + sheet.
- `build-extensions.cjs` → Batch 04 hash gate sonrası Batch 05 extensions.
- `cross-style-qa.cjs` → source hash, canonical A, maskable alpha/safe-zone, vector markup, palette/stroke ve grammar karşılaştırması.
- `batch-03-qa.json`, `batch-04-icon-01-qa.json`, `batch-05-icon-02-qa.json`, `batch-05-icon-03-qa.json`, `cross-style-qa.json` → ölçüm kanıtları.

Bu script'ler asset üretim araçlarıdır; ürün React/Next.js sayfası, database, uygulama davranışı veya yeni özellik oluşturulmadı. Logo regenerate edilmedi; generative image model kullanılmadı.
