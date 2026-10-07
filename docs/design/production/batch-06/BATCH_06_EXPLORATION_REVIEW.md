# Batch 06 — Illustration Grammar Exploration · Review v01

Tarih: 2026-10-07 (Europe/Istanbul)
Owner illustration-direction selection: **Pending**

## Önceki kapı / bu çalışmanın kapsamı

Style Lock Pack Owner tarafından kabul edildi ve önce GitHub main'e commit edildi (`848861c`). APP-01/02/03/04 ve ICON-01/02/03 **Approved for Design Direction**. UI ana kullanım boyutu 20/24 px; 16 px yalnız basit ve okunabilir glyph'lerde. Brand/App K Final Production Vector Export ve Figma Pending. Reward chest nötr reward sembolü olarak kalır; yeni ekonomi/mekanik tanımlamaz.

Bu faz yalnız **CAT-01 Matematik, CAT-03 Tarih, CAT-04 Coğrafya** için A/B/C art-direction exploration üretir. **9 seçili görsel / 3 Asset ID** vardır. Hiçbir illustration Approved veya canonical yapılmadı. CAT-02/05/06/07 üretilmedi. Batch 07 veya parallel tracks başlatılmadı.

Batch 02 canonical lockup Direction A aynen kalır. Buradaki illustration A/B/C seçimi ayrı bir karardır; branding seçimini değiştirmez.

## Üretim yöntemi / aile tutarlılığı

- Araç: **built-in image_gen**; CLI/API fallback kullanılmadı.
- İlk olarak üç Direction'ın Matematik referansı üretildi. Aynı Direction'ın Tarih ve Coğrafya görselleri o Matematik PNG'sini **provisional style reference** olarak kullandı.
- Ortak brief: premium, modern, sakin academic-tech; indigo #4F46E5 yönü + cool neutral yüzeyler; kontrollü büyük geometriler ve bol negatif alan. İnsan/maskot yok; stok fotoğraf, Pixar, neon/gaming veya background gradient spam yok.
- Her üretim promptunda Asset ID ve direction korunur. UI metni, başlık, sayı veya marka logosu görselin içine üretilmedi. Pafta başlıkları editable SVG text'tir.
- Mevcut Kavriva K veya wordmark hiçbir generated illustration içinde kullanılmadı; logo source'u değiştirilmedi. Bunlar kategori görselleridir, yeni marka işaretleri değildir.
- 9 seçili native PNG **1254×1254**, true alpha. Repo kopyaları generated source ile hash bakımından birebir aynı. Renk/alpha/contour üzerinde post-edit uygulanmadı.
- Comparison board: 544×470 eşit kart, her PNG için 420×420 eşit image box, aynı #FFFFFF sunum yüzeyi ve aynı scale. PNG'nin kendi composition/negatif alanı korunur; objeler ayrı ayrı büyütülerek sonucu avantajlı gösterecek normalizasyon yapılmadı.
- 96 px light/dark kontrol paftası aynı ham alpha'yı gösterir; gerçek final dark varyant değildir.

## A / B / C değerlendirmesi

| Kriter | A — Geometric Editorial | B — Structured Isometric Lite | C — Abstract Data / Knowledge |
|---|---|---|---|
| Visual character | Frontal geometri, hafif overlap/soft-depth, koyu rounded çizgiler. Konu metaforları özgür. | Aynı açıda ince matte panel/slab'lar, yumuşak kısa contact shadow. Üç konuda spatial workspace ailesi. | Frontal node/connector sistemi; merkezi bilgi hub'ı + iki panel. En belirgin ortak composition şablonu. |
| Scalability | Yüksek; farklı konu ve akışlara adapte edilebilir, native vector yeniden kurmaya uygun. | Orta; ortak perspektif ve kalınlıkta kontrollü değişiklik gerekir. | Yüksek; diagram/knowledge motifleri için güçlü, aynı üçlü şablona hapsolma riski var. |
| Mobile readability | 96 px'de ana siluet ve konu farkı korunur; ince dash/contour detayları azalır. | 96 px'de panel ailesi okunur; yüzey içi pattern/contour ve milestone detayları sınırlı. | 96 px'de ana hub/iki panel okunur; ince connector ve panel içi bilgi detayları sınırlı. |
| Onboarding suitability | Yüksek; her kavram için ayrı ama aynı dilde metafor üretmeye elverişli. | Orta-yüksek; workspace/çok cihaz/öğrenme katmanlarında iyi, bazı soyut davranışlarda daha zor. | Yüksek; adaptasyon, AI, bilgi akışı ve rehberlik açıklamalarında iyi. |
| Empty-state suitability | Yüksek; obje azaltma ve boş alanla sakin/yargılamayan durumlar kurulabilir. | Orta; panel/obje sayısı fazla kalırsa boş durumdan çok dolu workspace hissi verir. | Orta-yüksek; node/flow azaltılabilir, ancak fazla teknik diagram anlatımı riskli. |
| Marketing suitability | Yüksek; sade ve zamansız product illustration, crop/yerleşim esnek. | Yüksek; daha belirgin spatial hero dili; objelerin 3D yoğunluğu kontrol edilmeli. | Orta-yüksek; intelligence vaadi güçlü, geniş hero'da soğuk enterprise şeması olmamalı. |
| Dark-mode compatibility | Koşullu; beyaz/pale yüzeyler korunur ama koyu ink connector'lar dark zeminde kaybolabilir. Theme-specific line/alpha review gerekir. | Koşullu-iyi; pale panel yüzeyleri ayrışır. Contact shadow ve cutout kenarları dark için ayrı review ister. | Koşullu-iyi; pale connector'lar dark üzerinde daha görünür. White panels/halo ve indigo dengesi yeniden kontrol edilmeli. |
| Production difficulty | Düşük-orta; sade geometry/line/overlap kurallarıyla sürdürülebilir. | Orta-yüksek; perspektif, slab depth, contact shadows ve materyal değişimi dikkat ister. | Orta; connector/node/panel kuralları sabitlenirse hızlı, içerik metaforlarını çeşitlendirmek gerekir. |
| Style drift risk | Düşük-orta; obje/perspektif sayısı sınırlanmalı, gölge ve saturation cap tanımlanmalı. | Orta-yüksek; full 3D/toy materyale kayma riski en yüksek. | Orta; başka bir icon/enterprise diagram setine kayma veya çok fazla node ekleme riski. |

## Öneri: Direction A

A, category → onboarding → empty state → AI/social → marketing hattında en geniş anlatım alanını verir. Hafif frontal geometri mevcut line-icon grammar ile daha rahat yan yana durur; perspective/material bağımlılığı B'den düşük, sabit diagram şablonuna bağımlılığı C'den azdır. Mobilde ana konu siluetleri ayrışır; gelecekte motion veya native geometry'ye dönüştürülmesi daha kolaydır.

C, bilgi-akışı ve AI yüzeylerinde özellikle güçlüdür; yalnız bütün illustration ailesini zorunlu üç-node/iki-panel template'e çevirmemek gerekir. B daha spatial/product-workspace karakteri sunar; maintain edilecek perspective/depth kuralları daha fazladır.

Bu öneri Owner seçimi değildir. Owner **A / B / C** seçmeden hiçbir direction canonical olmaz.

## Asset bazında anlam kontrolü

- **CAT-01 Matematik:** A analytical geometry/axis/pattern, B aynı yüzeyde düzenli triangle pattern, C ilişki graph'ı ve kümeler. Rakam yığını, worksheet veya gerçek formül metni yok.
- **CAT-03 Tarih:** A sıralı archive cards + timeline, B düşük profilli chronology panel + archive index layers, C archive hub + chronological/cause-effect panels. Bina/müze/Osmanlı temalı poster yok.
- **CAT-04 Coğrafya:** A üç ilişkili bölge + contour, B aynı isometric panel ailesinde region/terrain relationships, C region hub + terrain/spatial knowledge panels. Gerçek ülke sınırı, yer adı veya literal atlas/Google Maps yok.

## QA / production sınırları

| Kontrol | Sonuç |
|---|---|
| Scope | PASS — yalnız CAT-01/03/04, 9 seçili exploration |
| Direction içi tutarlılık | PASS for exploration — A frontal, B thin spatial, C fixed flow grammar korunur |
| Direction ayrışması | PASS — üç farklı perspective/composition yaklaşımı |
| Brand/icon harmony | PASS for exploration — indigo/neutral, kontrollü rounded geometry, no logos/mascot/neon |
| UI text | PASS — gerçek UI metni raster'a gömülmedi; pafta label'ları native SVG text |
| Source copies | PASS — native PNG hash eşleşir; original alpha korunur |
| Native dimensions | PASS — dokuz PNG aynı 1254×1254 |
| Small-size / dark | CONDITIONAL — 96 px'de detay kaybı ve theme-line/alpha sınırları yukarıdaki tabloda açık |
| Exact color tokens | NOT LOCKED — #4F46E5 prompt hedefi; generated raster shading/pale tonlar yaklaşık. Production swatch doğruluğu seçili family'de ayrıca normalize/test edilecek |
| Vector | Raster exploration; comparison SVG, illustration vector source'u değildir |
| Approved / Figma | Pending — illustration owner selection yok; Figma write yapılmadı |

İlk denemelerde B/C Mathematics hacmi fazla çıktı; thin-panel/flat-flow yönlerine çekildi. A History bina motiflerinden archive/timeline'a; B History upright panel/landscape motiflerinden düşük profilli chronology katmanlarına düzeltildi. Dört superseded iteration silinmeden `archive/rejected-iterations/` içinde saklandı. Bunlar comparison board'un dokuz seçili görseline dahil değildir ve farklı Asset ID oluşturmaz.

Transparent alpha doğrulandı; ince cutout/edge halo ve shadows production temizliği sayılmaz. Koyu zemin preview özellikle A'nın ink connector kaybını gösterir. Bu pack bir **illustration grammar seçimi** içindir, production-ready theme/export onayı değildir.

## Dosyalar / kayıt

- Seçili görseller: `assets/categories/batch-06/review/{CAT-01|CAT-03|CAT-04}__{mathematics|history|geography}__direction-{a|b|c}__v01.png`.
- Tek ana comparison board: `CAT-01__illustration-comparison__abc__v01.svg` + `.png`.
- Ek compatibility kontrolü: `CAT-01__illustration-mobile-dark__abc__v01.svg` + `.png`.
- `prompt-set.json`: built-in tool'a verilen 13 call'ın tam prompt seti ve referans rolleri. İlk 3 anchor prompt'u ayrıca `prompts.json` snapshot'ında.
- `generation-manifest.json`: seçili 9 + superseded 4 dosya eşlemesi/provenance.
- `exploration-qa.json`: source hashes, boyutlar, alpha ve palette-bin ölçümleri.
- `asset-registry.json`: güncel local 87 Asset ID kaydı; Figma registry değildir.

Durum: **13 Approved for Design Direction**, **3 Review (Exploration)**, **71 Planned**. CAT-02/05/06/07 Planned kalır. Owner direction seçimi bekleniyor; Batch 07 ve parallel tracks başlamadı.
