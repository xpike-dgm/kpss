# Kavriva KPSS — Asset Checklist

Bu dosya, `KAVRIVA_KPSS_ASSET_PROMPT_PACK.md` içindeki **87 asset'in üretim ve onay takibidir**.

## Durum akışı

**⬜ Planned → 🟨 In Production → 🟦 Review → ✅ Approved → 📦 Exported / Figma Ready**

Bir asset yalnız görsel olarak güzel olduğu için tamamlanmış sayılmaz. Final kabul için prompt uyumu, marka tutarlılığı, teknik export, gerekli varyantlar ve Figma yerleşimi kontrol edilmelidir.

## Genel kabul kriterleri

- Kavriva KPSS görsel sistemiyle tutarlı.
- Mevcut Kavriva geometrik K kimliğine aykırı yeni bir marka dili oluşturmuyor.
- Indigo / elektrik mavisi yönü ve nötr yüzey sistemi korunuyor.
- Rastgele font, ikon stili veya illüstrasyon dili kullanılmıyor.
- Mobil küçük boyutta okunabilir ve temiz.
- Gerekli light/dark veya semantic varyantları mevcut.
- Vektör olması gereken asset'ler gerçek SVG/vector source olarak mevcut.
- Raster gerekiyorsa optimize WebP/PNG export mevcut.
- Dosya adı Asset ID ile başlıyor.
- Figma'da doğru page/section içine yerleştirilmiş.
- Final asset'in prompt/review notu ve versiyonu izlenebilir.

## Dosya adlandırma standardı

`{ASSET_ID}__{short-name}__{variant}__v01.ext`

Örnek:
`APP-01__kavriva-kpss-app-icon__main__v01.svg`

## Checklist

| Asset ID | Asset | Grup | Durum | Zorunlu çıktı | Varyant / state | Marka review | Teknik review | Figma | Final export | Not |
|---|---|---|---|---|---|---|---|---|---|---|
| BRAND-01 | Kavriva Ana Marka Logosu | Brand Core | ✅ Approved for Design Direction | SVG + PNG/WebP | light / dark / mono where applicable | ✅ Owner: design direction | Raster QA passed; vector source needed | Final Production Vector Export = Pending | Owner Decision 2026-10-07; source asset needed; Figma Pending. See production/batch-01/BATCH_01_REVIEW.md Owner Decision. | Batch 01 v01: native crop + light/dark + 160/240/320px review. SVG is raster-embedded presentation, not vector logo. See production/batch-01/BATCH_01_REVIEW.md. |
| BRAND-02 | Kavriva KPSS Ana Ürün Logosu | Brand Core | ⬜ Planned | SVG + PNG/WebP | light / dark / mono where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| BRAND-03 | Kavriva KPSS Yatay Logo Varyantı | Brand Core | ⬜ Planned | SVG + PNG/WebP | light / dark / mono where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| BRAND-04 | Kavriva KPSS Dikey / Stacked Logo Varyantı | Brand Core | ⬜ Planned | SVG + PNG/WebP | light / dark / mono where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| BRAND-05 | Sadece K Sembolü | Brand Core | ✅ Approved for Design Direction | SVG + PNG/WebP | light / dark / mono where applicable | ✅ Owner: design direction | Raster QA passed; vector source needed | Final Production Vector Export = Pending | Owner Decision 2026-10-07; source asset needed; Figma Pending. See production/batch-01/BATCH_01_REVIEW.md Owner Decision. | Batch 01 v01: same K source; light/dark/indigo reference + 16/24/32/48/64px review. 16px marginal; 24px+ proposed. Not an app icon or favicon export. |
| BRAND-06 | Kavriva Master Brand Kalibrasyon / Kullanım Kartı | Brand Core | ✅ Approved for Design Direction | SVG + PNG/WebP | light / dark / mono where applicable | ✅ Owner: design direction | Presentation QA passed; logo vector Pending | Final Production Vector Export = Pending | Owner Decision 2026-10-07; source asset needed; Figma Pending. See production/batch-01/BATCH_01_REVIEW.md Owner Decision. | Batch 01 v01 master-only usage board; no KPSS lockup/title. Clear space H/4 and optical offset 0 are unapproved proposals. SVG text editable; native Figma transfer Pending. |
| APP-01 | Kavriva KPSS App Icon | App / PWA | ⬜ Planned | SVG master + PNG exports | main / maskable / small-size | ⬜ | ⬜ | ⬜ | ⬜ |  |
| APP-02 | Maskable PWA Icon | App / PWA | ⬜ Planned | SVG master + PNG exports | main / maskable / small-size | ⬜ | ⬜ | ⬜ | ⬜ |  |
| APP-03 | Favicon | App / PWA | ⬜ Planned | SVG master + PNG exports | main / maskable / small-size | ⬜ | ⬜ | ⬜ | ⬜ |  |
| APP-04 | Splash / Launch Screen Hero | App / PWA | ⬜ Planned | SVG master + PNG exports | main / maskable / small-size | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ICON-01 | Global UI Icon Sheet | Icon System | ⬜ Planned | SVG | outline + selected/filled where needed | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ICON-02 | Ders / Kategori İkon Seti | Icon System | ⬜ Planned | SVG | outline + selected/filled where needed | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ICON-03 | Gamification Icon Seti | Icon System | ⬜ Planned | SVG | outline + selected/filled where needed | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-01 | Matematik Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-02 | Türkçe Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-03 | Tarih Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-04 | Coğrafya Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-05 | Vatandaşlık Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-06 | Güncel Bilgiler Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| CAT-07 | Genel Yetenek / Genel Kültür Overview Görsel Kartı | Academic Category Visuals | ⬜ Planned | SVG/WebP | light; dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-01 | Hiç Soru Çözülmemiş | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-02 | Henüz Deneme Yok | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-03 | Yanlışlarım Boş | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-04 | Kaydedilenler Boş | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-05 | Takım Yok | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-06 | AI Sohbet Yok | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-07 | Arama Sonucu Yok | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-08 | Offline Durumu | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-09 | İçerik Kalite İncelemesinde | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| EMPTY-10 | Bu Alanda Yeterli Soru Yok | Empty States | ⬜ Planned | SVG/WebP | light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-01 | Kavriva KPSS Nedir | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-02 | Seviyeni Tanır | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-03 | Sıradaki Adım | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-04 | Tekrar Sistemi | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-05 | Yanlışlarım Sistemi | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-06 | Deneme ve Analiz | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-07 | AI Öğretmen | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-08 | Takımlar ve Sosyal Sistem | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-09 | Bildirimler ve Takip | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ONBOARD-10 | Offline / PWA Kullanımı | Onboarding | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-01 | XP Sembolü | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-02 | Seviye Rozeti Sistemi | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-03 | Streak Simgesi | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-04 | Günlük Görev Görsel Dili | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-05 | Haftalık Görev Görsel Dili | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-06 | Achievement Badge Framework | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-07 | Lig / Rank Rozetleri | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-08 | Sezon Kapanış Kutlama Kartı | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-09 | Level Up Kutlama Ekranı | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| GAME-10 | Special Moment Kutlama Kartı | Gamification | ⬜ Planned | SVG + PNG | base + required states/tiers | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-01 | AI Öğretmen Sembolü | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-02 | AI Koç Sembolü | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-03 | AI Sohbet Giriş Kartı | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-04 | AI Loading / Thinking Durumu | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-05 | AI Unavailable Durumu | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| AI-06 | Verified Solution ile Çelişme Uyarısı | AI | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SOCIAL-01 | Varsayılan Avatar Sistemi | Social | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SOCIAL-02 | Takım Amblemi Kütüphanesi | Social | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SOCIAL-03 | Düello Eşleşme Kartı | Social | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SOCIAL-04 | Çalışma Odası Kapak Görseli | Social | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SOCIAL-05 | Davet Kartı | Social | ⬜ Planned | SVG/WebP | light / dark-safe | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-01 | Konu Özeti Kart Şablonu | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-02 | Formül / Kural Kart Şablonu | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-03 | Mini Check Kartı | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-04 | Çözüm Adımı Blok Şablonu | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-05 | İpucu / Dikkat Kutuları | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-06 | Güncel Bilgiler Kart Şablonu | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ACADEMIC-07 | Analiz Mini Kart Seti | Academic Templates | ⬜ Planned | Figma component + SVG if needed | responsive / light / dark | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-01 | Landing Hero Görseli | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-02 | Sıradaki Adım Özellik Görseli | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-03 | Deneme ve Analiz Özellik Görseli | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-04 | AI Öğretmen Özellik Görseli | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-05 | Takımlar / Düello Özellik Görseli | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MKT-06 | Mobil + Desktop Mockup Kompozisyonu | Marketing | ⬜ Planned | WebP/PNG + editable source | desktop + mobile crop | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SHARE-01 | Open Graph Genel Görseli | Share / SEO | ⬜ Planned | PNG/WebP + editable source | 1.91:1 / square or story where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SHARE-02 | Deneme Sonucu Paylaşım Kartı | Share / SEO | ⬜ Planned | PNG/WebP + editable source | 1.91:1 / square or story where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SHARE-03 | Level Up Paylaşım Kartı | Share / SEO | ⬜ Planned | PNG/WebP + editable source | 1.91:1 / square or story where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SHARE-04 | Streak Paylaşım Kartı | Share / SEO | ⬜ Planned | PNG/WebP + editable source | 1.91:1 / square or story where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| SHARE-05 | Achievement Paylaşım Kartı | Share / SEO | ⬜ Planned | PNG/WebP + editable source | 1.91:1 / square or story where applicable | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ADMIN-01 | Content Quality Status Seti | Admin / Operations | ⬜ Planned | SVG | semantic states | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ADMIN-02 | Rights Status Seti | Admin / Operations | ⬜ Planned | SVG | semantic states | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ADMIN-03 | Review Queue Severity Seti | Admin / Operations | ⬜ Planned | SVG | semantic states | ⬜ | ⬜ | ⬜ | ⬜ |  |
| ADMIN-04 | System Health / Release Readiness Durumları | Admin / Operations | ⬜ Planned | SVG | semantic states | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MOTION-01 | XP Gain Visual Frame | Motion Frames | ⬜ Planned | Key frame SVG/PNG + motion source later | normal + reduced-motion static fallback | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MOTION-02 | Achievement Unlock Visual Frame | Motion Frames | ⬜ Planned | Key frame SVG/PNG + motion source later | normal + reduced-motion static fallback | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MOTION-03 | Success Pulse Visual Frame | Motion Frames | ⬜ Planned | Key frame SVG/PNG + motion source later | normal + reduced-motion static fallback | ⬜ | ⬜ | ⬜ | ⬜ |  |
| MOTION-04 | Confetti / Kutlama Hafif Efekt Frame | Motion Frames | ⬜ Planned | Key frame SVG/PNG + motion source later | normal + reduced-motion static fallback | ⬜ | ⬜ | ⬜ | ⬜ |  |

## Batch kapanış kontrolü

Her batch sonunda yalnız tek tek asset'ler değil, **grup içi tutarlılık** da kontrol edilir:

- stroke/geometry uyumu
- corner-radius dili
- shadow/depth dili
- indigo kullanım oranı
- illustration perspective
- insan figürü stili
- semantic renklerin doğru kullanımı
- icon optical sizing
- light/dark performansı
- Figma naming ve component bağlantıları

## Değişiklik yönetimi

Bir final asset ciddi biçimde değişirse eski dosya sessizce üzerine yazılmamalıdır. Yeni versiyon oluşturulmalı; eski versiyon Archive alanına taşınmalı ve kullanıldığı ekran/component'ler kontrol edilmelidir.
