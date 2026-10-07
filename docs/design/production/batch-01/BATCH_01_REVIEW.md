# Batch 01 — Master Brand Calibration · Review v01

Tarih: 2026-10-07 · Owner approval: Pending · Figma: Pending

## Kapsam ve yöntem

Yalnız BRAND-01, BRAND-05 ve BRAND-06 üretildi. Kullanıcının verdiği Kavriva L05A PNG paftası immutable kaynak kabul edildi. Native raster crop'lar, canvas/padding, uniform ölçekleme ve SVG sunum kompozisyonu kullanıldı. AI image generation, tracing, yeniden çizim, simplification veya wordmark'ı yeni fontla yeniden dizme uygulanmadı. Renk tersleme ve luminance-mask yalnız sunum için uygulandı; kaynak dosya aynen saklandı.

Çıktılar `assets/brand/batch-01/review/` içindedir. Bunlar **Review sunumlarıdır**, production logo source veya final export değildir. Toplam 20 dosya: 9 editable presentation SVG, bunların 9 PNG önizlemesi ve 2 native crop PNG. Asset sayısı yalnız 3'tür; dosya/varyant sayısı asset envanterini artırmaz.

## BRAND-01 — Kavriva Ana Marka Logosu

- Native master crop: kaynak koordinatı (164, 245), 1132 × 341 px. 3 px edge guard içerir.
- Mevcut K + Kavriva wordmark ve aralarındaki ilişkinin tamamı tek raster crop içinde korunur.
- Light / dark reference sunumları ve karşılaştırma paftası hazır.
- 160 / 240 / 320 px master-logo genişlikleri light/dark incelendi. 160 px okunabilir başlangıç önerisidir; onaylanmış minimum değildir.
- Master crop RGB pikselleri orijinal kaynak bölgesiyle birebir aynı. Dark PNG, ilgili crop'un RGB terslemesiyle birebir eşleşir; maksimum kanal hatası 0.
- Durum: **Review**. Gerçek vektör kaynak: **source asset needed**.

## BRAND-05 — Sadece K Sembolü

- Aynı master logodan native symbol crop: kaynak koordinatı (164, 245), 346 × 341 px; 3 px edge guard içerir.
- Light / dark / indigo sunum varyantları hazır. Indigo örneği arka plan/kontrast incelemesidir; app icon, maskable icon veya favicon üretilmedi.
- 16 / 24 / 32 / 48 / 64 px footprint incelendi. 16 px'de ayrıntı kaybı sınırdadır. 24 px ve üzeri görsel olarak daha güvenli adaydır; geometri değiştirilmedi.
- Bounding-box merkezleme korunur. Raster ink centroid yaklaşık (158.62, 163.84) px; geometrik merkezden farklı olması optik düzeltme otoritesi sayılmaz. Şimdilik offset 0 px önerilir.
- Native crop pikselleri kaynakla birebir aynı. Indigo beyaz sunum luminance mask ile elde edilir; threshold veya yeni contour üretilmez. Kaynaktaki hafif doku/antialiasing bu varyantta da korunur.
- Durum: **Review**. Gerçek vektör kaynak: **source asset needed**.

## BRAND-06 — Master Brand Kalibrasyon / Kullanım Kartı

- Yalnız mevcut Kavriva master logo/wordmark ve symbol-only içerir. Ayrı Kavriva KPSS ürün adı, ürün lockup veya KPSS etiketi yoktur.
- Immutable reference, clear-space önerisi, optik hizalama, siyah/beyaz kullanım ve symbol-only küçük-boyut incelemesi aynı paftadadır.
- Clear-space önerisi: `x = görünür K yüksekliği / 4`, master logo ve symbol dış sınırlarında her yönde en az x. Kaynakta K yüksekliği 335 px, x yaklaşık 83.75 px. Bu oran master içindeki sembol–wordmark aralığını değiştirmez.
- Sunum fontları Manrope (başlık) ve Inter (açıklama). Logo wordmark'ı raster kaynakta aynen korunur.
- SVG metinleri editable `<text>` öğeleridir. PNG yalnız önizlemedir. Figma native text layer dönüşümü ve font/variable bağları Pending'dir.
- Son görsel QA'da taşma/örtüşme yok. İlk denemedeki yerleşim ve filtre bölgesi sorunları teslim öncesinde düzeltildi.
- Durum: **Review**. Bu paftanın onayı vektör logo source onayı yerine geçmez.

## Consistency QA

| Kontrol | Sonuç |
|---|---|
| K / wordmark geometrisi | PASS — aynı raster crop; redraw/trace yok |
| Kaynak bütünlüğü | PASS — source SHA256 aynı |
| Master crop / symbol crop | PASS — native RGB pixel equality |
| Dark renk dönüşümü | PASS — maksimum kanal hatası 0 |
| Oran / yerleşim | PASS — yalnız uniform scale, bbox centering |
| Görsel aile | PASS — aynı kaynak, aynı Manrope/Inter sunum dili, nötr + indigo |
| Light / dark | PASS — sunum karşılaştırmaları incelendi |
| Küçük boyut | CONDITIONAL — 16 px sınırda; 24 px+ önerisi owner review bekler |
| Dosya adlandırma | PASS — yalnız BRAND-01/05/06 ve canonical v01 standardı |
| Gerçek vector logo | PENDING — source asset needed; SVG container vektör logo değildir |
| Figma structure / variables / registry | PENDING — write erişimi varsayılmadı |
| Approved / final export | PENDING — kullanıcı onayı verilmedi |

Sunum token çiftleri için hesaplanan kontrast: beyaz/#4F46E5 **6.29:1**, beyaz/#4355E8 **5.67:1**, Ink/Surface Light **16.72:1**, Slate Text/Surface Light **9.86:1**. Bunlar solid renk çiftlerinin ölçümüdür; tüm uygulamanın WCAG uygunluğu iddiası değildir. Exact production token'lar kilitlenmedi; raster logo içindeki ton/doku ayrıca kaynak niteliğidir.

## Takip ve açık ihtiyaçlar

- Checklist: bu üç ID `Planned → In Production → Review`; diğer 84 ID Planned.
- `asset-registry.json`: 87 kimlik için local takip; Figma içine kurulmuş registry değildir.
- `geometry-qa.json` ve `consistency-qa.json`: kaynak, crop ve çıktı doğrulama kanıtları.
- `presentation-tokens.json`: Review sunum değerleri; Approved foundation token seti değildir.
- `BRAND-06__batch-01-production-brief__reference__v01.md`: canonical Master Creative Direction ve ilgili üç Asset ID brief'i.
- Vektör kaynak olmadan logo cleanup/final SVG handoff tamamlanamaz. Kaynak SVG/AI/PDF gerektiği kaydedildi; PNG üzerinden geometrik tahmin yapılmayacak.
- Edit yetkili hedef Figma dosya/link geldiğinde canonical page/section yapısı, variables ve native registry kurulacak.
- Clear-space H/4, optical offset 0, master minimum 160 px ve symbol minimum 24 px **onay bekleyen inceleme önerileri**dir.
- Batch 02 başlatılmadı. Approved işaretlenmedi. Kullanıcı onayı bekleniyor.

## Owner Decision — 2026-10-07

Owner Batch 01 yaklaşımını ve consistency QA sonucunu kabul etti.

- BRAND-01, BRAND-05, BRAND-06: **Approved for Design Direction**.
- **Final Production Vector Export = Pending**. Raster-embedded SVG sunumları gerçek vektör logo olarak kabul edilmedi.
- Clear-space: `x = görünür K yüksekliği / 4` kabul edildi.
- Optical offset: şimdilik `0 px` kabul edildi; gerçek vector source geldiğinde yeniden optical review yapılabilir.
- Master logo `160 px`: yalnız mevcut raster referans için güvenli review boyutu. Kalıcı/final marka minimumu değildir; vector source geldiğinde tekrar test edilir.
- Standalone K: `24 px+ recommended minimum` kabul edildi. Favicon/browser gibi zorunlu küçük yüzeylerde `16 px` kullanılabilir; simplify/redraw/geometri değişikliği yasaktır. Yalnız padding, canvas, contrast ve export optimizasyonu kullanılabilir.
- Vector source: **source asset needed** açık kalır; sonraki design-direction batch'lerini bloklamaz.
- Figma: **Pending**; write erişimi varsayılmaz ve asset üretimini bloklamaz.
- Batch 02 design-direction exploration için yetkilendirildi. Bu onay Batch 02 veya Batch 03 asset onayı değildir.

Yukarıdaki Owner Decision, belgenin önceki Review v01 değerlendirmesindeki “onay bekliyor / öneri” durumlarını belirtilen kapsamda günceller. Önceki görsel dosyalar inceleme tarihçesi olarak korunur; içlerindeki REVIEW/öneri ibareleri bu tarihsel sunuma aittir.
