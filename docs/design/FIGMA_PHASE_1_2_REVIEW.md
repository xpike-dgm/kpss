# Kavriva KPSS — FIGMA PHASE 1–2 REVIEW

2026-10-08 · **Phase 1 ve Phase 2 native build tamamlandı / Review**. Owner UI acceptance Pending. Canonical source: [Kavriva KPSS — Product Design System](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=0-1).

## 1. Figma erişimi / preflight

Read/write PASS. Gerçek geçici native oluşturma, düzenleme ve silme testi başarılı; test nesneleri temizlendi. Write permission blocker kaldırıldı. [Preflight raporu](FIGMA_PREFLIGHT_REPORT.md). Main başlangıçta origin/main ile senkronize edildi (`ec20b9c`); canonical belgeler tam okundu.

## 2. Canonical page structure

22 native page, canonical ad/sıra ve gerekli section'lar kuruldu. Cover, Brand, Foundations, Icons, Core/Academic Components, Product Patterns, Mobile Screens ve 87 kayıtlı Asset Registry oluşturuldu. Sonraki fazların page/section'ları placeholder kapsamındadır; tüm ürün ekranları çizilmeye başlanmadı.

| Page | Figma |
|---|---|
| 00 — Cover / Index | [0:1](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=0-1) |
| 01 — Brand | [7:14](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-14) |
| 02 — Foundations | [7:15](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-15) |
| 03 — Icons | [7:16](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-16) |
| 04 — Core Components | [7:17](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-17) |
| 05 — Academic Components | [7:18](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-18) |
| 06 — Category Visuals | [7:19](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-19) |
| 07 — Empty States | [7:20](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-20) |
| 08 — Onboarding | [7:21](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-21) |
| 09 — Gamification | [7:22](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-22) |
| 10 — AI | [7:23](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-23) |
| 11 — Social | [7:24](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-24) |
| 12 — Product Patterns | [7:25](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-25) |
| 13 — Mobile Screens | [7:26](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-26) |
| 14 — Desktop Screens | [7:27](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-27) |
| 15 — Admin / Operations | [7:28](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-28) |
| 16 — Marketing | [7:29](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-29) |
| 17 — Share / Social Export | [7:30](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-30) |
| 18 — Motion | [7:31](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-31) |
| 19 — Asset Registry | [7:32](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-32) |
| 90 — Playground | [7:33](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-33) |
| 99 — Archive | [7:34](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=7-34) |

## 3. Variables / collections

11 collection, 123 native variable. Brand, Neutral, Surface, Text, Border, Semantic, DataViz Light/Dark; Spacing/Radius/Motion Default; Typography Standard/Large Text 200%. Scopes ve native variable bindings kuruldu. Primary #4F46E5, Electric #4355E8; semantic essential/decorative roller ayrıldı. Ayrıntılı actual ID/value kayıtları [native state](figma/FIGMA_NATIVE_STATE.json) içindedir.

## 4. Typography

Manrope display/headings, Inter UI/body/numeric; 16 native text style. Size ve line-height Typography variable'larına bağlıdır. 200% mode gerçekten text reflow sağlar; raster büyütme değildir. Unicode fallback yalnız eksik işaretler içindir. [Typography tablosu](figma/FOUNDATIONS_SPEC.md).

## 5. Spacing / radius / responsive foundation

12 spacing, 5 radius, 4 elevation style, 4 motion duration. Native 320/390/768/1024/1440 grid specimens; mobile 4, tablet 8, desktop 12 columns. UI ilişkileri Auto Layout ile; content FILL/HUG, text wrap ve viewport scrolling kullanır. Tablet/desktop specimen tam product ekranı değildir.

## 6. Core component library

43 core family, 46 native component set, 222 variant. Button kind'ları dört set içinde aynı grammar'a bağlıdır; diğer navigation/form/feedback/data/overlay families canonical kapsamdan gelir. Reusable editable components ve instances gerçek native node'lardır. [Component spec ve linkler](figma/COMPONENT_SPEC.md).

## 7. Variants / properties

Size/State variants, TEXT labels, INSTANCE_SWAP icons ve gerekli BOOLEAN visibility properties kuruldu. Default/hover/pressed/focus/disabled/loading; form error/filled; selection ve status durumları ilgili setlerde bulunur. Modal/Dialog/Sheet anatomy ve Calendar 44 px target korunur. Focus ring 2 px + 4 px gap; Danger solid rolü contrast kontrolünden sonra düzeltildi.

## 8. Accessibility QA

68 native Light/Dark text/control eşleşmesi PASS. Minimum normal text 4.51:1, minimum control 4.45:1. Color tek durum taşıyıcısı değildir; native labels/check/selected indicators vardır. 320 px ve text 200% testleri yapıldı. Keyboard order, focus trap/return, ARIA ve screen-reader output implementation handoff konusudur; çalışan uygulama erişilebilirlik sertifikasyonu iddia edilmez.

## 9. Asset mapping / master brand

87 Asset ID, duplicate 0; Prompt Pack ve Checklist birebir. 81 Approved for Design Direction, 6 MKT Planned değişmedi. 47 asset native review node'larına eşleştirildi; kalan 40 native mapping Pending. Registry 87 kartın source/version/approvedBy/theme/formats/usage/prompt/final-export alanlarını editable olarak içerir. [Import map](figma/ASSET_IMPORT_MAP.json).

Existing K ve Kavriva wordmark geometri değiştirilmeden immutable PNG reference kullanıldı. Direction A native editable KPSS alt etiketiyle kuruldu; B/C exploration repo/archive'de korunur. x = K visible height / 4; offset 0; 160 px yalnız raster review ölçüsü. K 24 px+ recommended; 16 px favicon yalnız padding/canvas/contrast/export. Vector source needed açık.

Source SHA-256: `0dcbcd704014a0cec8a6f40a9fe6917ffe954ca4123e3b1a723aed8c222ea98d` (değişmedi). Dark presentation'da approved dark kaynak crop ve SCREEN, Light'ta MULTIPLY teknik sunum kullanılır. Üç source canvas crop overflow'u intentional clip'tir; ürün UI taşması değildir. Brand/App reference'ları gerçek vector export olarak sunulmaz.

## 10. Auth / onboarding

Auth: splash/welcome, giriş/kayıt/şifre yenileme, diğer giriş seçenekleri, passkey, error, email verification/resend durumları. Onboarding: KPSS türü Ortaöğretim/Ön Lisans/Lisans, sınav dönemi, beş self-assessment seviyesi, optional hedef/kalibrasyon/tercihler ve “İlk Çalışmanı Başlat”. “Şimdi çöz / Çalışırken beni tanı” ayrımı korunur. İlk açılış notification permission popup eklenmedi. [Welcome](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=19-2) · [Dark Welcome](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=25-1175).

## 11. Dashboard

Ana Sayfa default/fresh-start/offline/loading. Akademik özet ve Sıradaki Adım ana ağırlıktadır; ödül destekleyicidir. Offline device saved ile server sync ayrıdır; kanıtlanmamış XP veya server success gösterilmez. Navigation canonical Ana Sayfa/Çalış/Denemeler/İstatistikler/Profil. [Dashboard](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=20-183) · [Dark](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=25-1582).

## 12. Sıradaki Adım

Native recommendation card ve alternatif adımlar. Akademik gerekçe, kısa eylem, tek primary CTA; quota/debt/guilt dili yok. Learning skip ve test/retention seçenekleri mastery kanıtı gibi gösterilmez. [Sıradaki Adım](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=20-489).

## 13. Çalış / konu öğrenme

GY/GK ders, konu/alt konu ve empty search. Native topic summary/formula/example/solution components; resmi video embed için dürüst placeholder/provider-unavailable state. Sahte YouTube arayüzü oluşturulmadı. Video veya küçük öğrenme kontrolü mastery kanıtı değildir. Mini Check devam kapısı değildir. [Çalış](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=20-607) · [Konu öğrenme](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=20-850).

## 14. 10 soruluk test

Default/selected/unanswered/offline, 10-question navigator, soru notu, finish confirmation, submitting ve offline pending. A–E exclusive seçim frame'leri; seçimi test bitmeden değiştirme akışı. Immediate correctness yok; blank ayrı. Tek primary finish CTA. [Test](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=22-831) · [320 px](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=26-2934) · [Finish](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=22-1047).

## 15. Result / academic-first hierarchy

Akademik sonuç önce, reward özeti sonra. Editable doğru/yanlış/boş/net/süre: açıkça örnek data. Örnek 7 doğru, 2 yanlış, 1 boş, net 6.5, süre 08:24; gerçek kullanıcı/sınav kanıtı iddia edilmez. Limited-data state ayrı. [Result](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=22-1110).

## 16. Yanlışlarım / verification lifecycle

Liste, filtre, detay, yeni bağımsız sorularla güçlendirme, limited pool, empty, doğrulama ve arşiv. Yeni/İncelendi/Güçleniyor/Doğrulandı/Arşivlendi dili korunur. Verified academic solution ana otorite; AI açıklaması ayrı yardımcı alan. En az iki yeni bağımsız soru gereksinimi görünür; eski soruyu yeniden yanıtlamak doğrulama değildir. Hidden numeric mastery 0–110 UI'ya taşınmadı. [Wrong detail](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=22-1279).

## 17. Mobile / small-size QA

56 Light case, 56 Dark eşleşme, 10 narrow 320 px, 5 text 200% fixture = 127 native screen/test frame. 127 ayrı ürün yüzeyi gibi sayılmadı. 2.071 visible text, 1.258 component instance, 37 bireysel görsel/image fill; full-screen raster dump 0. [127 satırlı inventory](figma/SCREEN_INVENTORY.md). Son structural kontrolde text overflow, eksik font veya visible internal asset metadata bulunmadı.

## 18. Light/Dark ve cross-screen consistency

Theme native variable mode ile; surfaces/text/border/semantic roller tutarlı. 140 native icon component 24 px grid, 1.75 stroke, round cap/join, outline/active ailesinden gelir. Academic ve gamification grammar değişmedi. Existing K, Direction A, indigo, Manrope/Inter, spacing/radius aynı sistemde.

Görsel kontrol örnekleri: Welcome Light/Dark, Dashboard Dark, Selected Test 320, Auth 200%, Wrong Detail, Result, Finish Dialog, native Input/Danger variant galleries. Row FILL/wrapping, native selection, dialog duplicate CTA ve Dark destructive contrast/focus geometry sorunları düzeltilip ilgili görseller tekrar kontrol edildi. Son passing görüntüler final kontrol kanıtıdır. [Scoped QA](figma/CONSISTENCY_QA.json).

488 native prototype source node bulunur; navigation ve illustrative seçim/geri/finish akışları bağlıdır. Bu backend, auth, validation veya offline synchronization implementasyonu değildir. Phase 3 destination'ları kapsam dışı kalır. Bu QA **Batch 21 final Cross-System Audit değildir**.

## 19. Açık kararlar / production sınırlamaları

| Konu | Durum |
|---|---|
| Phase 1–2 UI Owner acceptance | Pending / Review |
| Brand/App gerçek vector source | Source asset needed |
| Final Production Vector Export / Export | Pending |
| Final Figma handoff / Batch 22 | Pending / Not started |
| P-01–P-06 | Open; bu UI assembly işleri otomatik kapatmaz |
| Math / KaTeX / narrow long Turkish layouts / editorial validation | Production implementation'da ayrıca test |
| Gerçek kalibrasyon/bağımsız soru havuzu / provider/auth/sync | Implementation handoff; prototype demo |
| Raster final Dark / alpha / palette polish | Backlog kabul şartları açık |
| SHARE dynamic-data / platform compression / vectors | Final assembly Pending |
| MKT-01–06 / Batch 18–19 | Planned / HOLD; stabil kabul edilmiş product screens bağımlılığı |

## 20. Sapmalar / kapanış checkpoint

Canonical çelişki veya yeni marka kararı gerektiren blocker bulunmadı. Teknik düzenlemeler: Button kind'ları dört set; accessible error solid ayrı rol; gerçek native 200% typography mode; immutable kaynak için clipped raster presentation. Bunlar yeni ürün/marka direction'ı değildir.

Phase 1–2 native tasarım review'a hazırdır; kendi kendine Approved yapılmadı. Kod/React/Next.js/database üretimi yapılmadı. Phase 3'e geçilmedi; marketing üretilmedi; Batch 21/22 başlamadı; P-01–P-06 kapanmadı. Asset Design Direction onayları ve Final Production Pending ayrımı korunur. Bu checkpoint'te durulur.
