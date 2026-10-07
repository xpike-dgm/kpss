# Kavriva KPSS — AI Asset Batch Production Plan

Bu belge, `KAVRIVA_KPSS_ASSET_PROMPT_PACK.md` içindeki 87 asset'in **hangi sırayla**, **hangi bağımlılıklarla** ve **hangi kalite kontrolünden sonra** üretileceğini tanımlar.

Ana ilke: **önce görsel sistem, sonra o sistemden türeyen asset'ler**. Bir batch onaylanmadan sonraki bağımlı batch'e geçilmez.

---

# 0. Batch çalışma protokolü

Her batch'te AI şu akışı izlemelidir:

1. `PRODUCT_PLAN.md` içindeki marka kararlarını oku.
2. `KAVRIVA_KPSS_ASSET_PROMPT_PACK.md` içindeki Master Creative Direction bölümünü oku.
3. İlgili Asset ID promptlarını oku.
4. Önce aynı batch için 1–3 güçlü direction/exploration üret.
5. Kullanıcı/creative owner tarafından yön seçildikten sonra final varyantları üret.
6. Aynı batch içindeki bütün asset'leri **aynı görsel sistemle** tamamla.
7. Light/dark/required-state varyantlarını tamamla.
8. Checklist durumunu Review'a taşı.
9. Grup tutarlılığı kontrolü yap.
10. Onay sonrası Approved/Exported işaretle.
11. Ancak sonra bağımlı batch'e geç.

Bir batch içinde iyi görünen tek bir asset uğruna bütün marka dili değiştirilmez.

---

# BATCH 01 — Master Brand Calibration

## Asset'ler
- BRAND-01 — Kavriva Ana Marka Logosu
- BRAND-05 — Sadece K Sembolü
- BRAND-06 — Logo Kullanım Sunum Kartı

## Amaç
Mevcut Kavriva kimliğini referans alarak **değiştirilecek değil, standardize edilecek** master brand dili oluşturmak.

## Kritik kararlar
- K sembolünün kesin geometrisi
- wordmark ilişkisi
- optical spacing
- monochrome davranış
- küçük boyut okunabilirliği

## Gate
Bu batch onaylanmadan KPSS alt markası, app icon veya icon geometry üretilmez.

---

# BATCH 02 — Kavriva KPSS Brand Lockup

## Asset'ler
- BRAND-02 — Kavriva KPSS Ana Ürün Logosu
- BRAND-03 — Yatay Logo
- BRAND-04 — Dikey / Stacked Logo

## Bağımlılık
Batch 01 final K sembolü ve wordmark.

## Amaç
“Kavriva” master brand, “KPSS” product label hiyerarşisini kesinleştirmek.

## Gate
Header, splash, landing ve app branding test edilir. KPSS etiketi ana markayla yarışmamalıdır.

---

# BATCH 03 — Product Icon Family

## Asset'ler
- APP-01 — Main App Icon
- APP-02 — Maskable PWA Icon
- APP-03 — Favicon
- APP-04 — Splash / Launch Screen Hero

## Bağımlılık
Batch 01–02.

## Amaç
**Indigo zemin + beyaz Kavriva K** ürün ayırıcı kimliğini kurmak.

## Gate
16px/favicon, 32px, 64px, 128px ve büyük app icon önizlemelerinde sembol okunur olmalıdır.

---

# BATCH 04 — Foundation Icon Grammar

## Asset'ler
- ICON-01 — Global UI Icon Sheet

## Amaç
Bütün ürün ikonlarının stroke, grid, roundness ve optical size standardını kurmak.

## Gate
Aynı icon seti içinde farklı kütüphanelerden toplanmış görünüm olmamalı.

---

# BATCH 05 — Academic + Gamification Icon Extensions

## Asset'ler
- ICON-02 — Ders / Kategori İkon Seti
- ICON-03 — Gamification Icon Seti

## Bağımlılık
Batch 04.

## Gate
Academic ve gamification ikonları karakter olarak farklılaşabilir ama stroke/geometry ailesi aynı kalmalıdır.

---

# BATCH 06 — Academic Category Visual Language

## Asset'ler
- CAT-01 Matematik
- CAT-02 Türkçe
- CAT-03 Tarih
- CAT-04 Coğrafya
- CAT-05 Vatandaşlık
- CAT-06 Güncel Bilgiler
- CAT-07 Eğitim Bilimleri

## Amaç
İllüstrasyon dilinin ilk gerçek testini yapmak.

## Özel kural
İlk önce **CAT-01 Matematik + CAT-03 Tarih + CAT-04 Coğrafya** birlikte exploration yapılır. Üç farklı konu aynı aile gibi görünüyorsa kalan dört kategori üretilir.

## Gate
Kategori kartları birbirine benzeyecek kadar sistemli, birbirinden ayırt edilecek kadar özgün olmalı.

---

# BATCH 07 — Empty State Base Language

## Asset'ler
- EMPTY-01 Hiç Soru Çözülmemiş
- EMPTY-02 Henüz Deneme Yok
- EMPTY-03 Yanlışlarım Boş
- EMPTY-04 Kaydedilenler Boş
- EMPTY-07 Arama Sonucu Yok

## Amaç
Ürünün “sakin ve yargılamayan” boş durum dilini kurmak.

## Gate
Empty state'ler hata ekranı gibi görünmemeli; CTA alanına yeterli görsel boşluk bırakmalı.

---

# BATCH 08 — Empty State Operational / Social Extensions

## Asset'ler
- EMPTY-05 Takım Yok
- EMPTY-06 AI Sohbet Yok
- EMPTY-08 Offline
- EMPTY-09 İçerik Kalite İncelemesinde
- EMPTY-10 Yeterli Soru Yok

## Bağımlılık
Batch 07.

## Gate
Offline/quality-review/low-pool görselleri panik veya sistem arızası hissi yaratmamalıdır.

---

# BATCH 09 — Onboarding Core

## Asset'ler
- ONBOARD-01 Kavriva KPSS Nedir
- ONBOARD-02 Seviyeni Tanır
- ONBOARD-03 Sıradaki Adım
- ONBOARD-04 Tekrar Sistemi
- ONBOARD-05 Yanlışlarım Sistemi

## Amaç
Kullanıcıya ürünün temel akademik değer önerisini anlatan seri.

## Özel önem
ONBOARD-03 **Sıradaki Adım**, markanın imza görseli olabilecek kadar güçlü olmalıdır.

## Gate
Beş görsel yan yana konduğunda aynı hikâyenin devamı gibi görünmelidir.

---

# BATCH 10 — Onboarding Advanced

## Asset'ler
- ONBOARD-06 Deneme ve Analiz
- ONBOARD-07 AI Öğretmen
- ONBOARD-08 Takımlar ve Sosyal
- ONBOARD-09 Bildirimler
- ONBOARD-10 Offline / PWA

## Bağımlılık
Batch 09.

---

# BATCH 11 — Gamification Core

## Asset'ler
- GAME-01 XP
- GAME-02 Seviye Rozeti Sistemi
- GAME-03 Streak
- GAME-04 Günlük Görev
- GAME-05 Haftalık Görev

## Amaç
Gamification'ın “premium ama çocukça olmayan” ana stilini kurmak.

## Gate
Rozet ve görev dili, academic UI'dan tamamen kopuk bir oyun asset pack'i gibi görünmemeli.

---

# BATCH 12 — Gamification Prestige / Celebration

## Asset'ler
- GAME-06 Achievement Framework
- GAME-07 Lig / Rank Rozetleri
- GAME-08 Sezon Kapanış Kartı
- GAME-09 Level Up
- GAME-10 Special Moment

## Bağımlılık
Batch 11.

## Gate
Level 100 hard cap ve prestige-yok kararına aykırı sonsuz prestige görsel dili oluşturulmaz.

---

# BATCH 13 — AI Visual System

## Asset'ler
- AI-01 AI Öğretmen
- AI-02 AI Koç
- AI-03 AI Sohbet Giriş Kartı
- AI-04 Thinking / Loading
- AI-05 AI Unavailable
- AI-06 Verified Solution Conflict

## Amaç
Robot maskot yerine **güvenilir, sembolik AI product language** oluşturmak.

## Gate
AI Teacher ve AI Coach kardeş ama ayırt edilebilir olmalı. AI görselleri verified academic content'ten daha “otoriter” görünmemeli.

---

# BATCH 14 — Social Visual System

## Asset'ler
- SOCIAL-01 Default Avatar
- SOCIAL-02 Team Emblem Library
- SOCIAL-03 Duel Matchup
- SOCIAL-04 Study Room Cover
- SOCIAL-05 Invite Card

## Gate
Esports/agresif gaming görsel dili yasak. Sosyal sistem akademik ve sakin kalmalıdır.

---

# BATCH 15 — Academic Content Components

## Asset'ler
- ACADEMIC-01 Konu Özeti
- ACADEMIC-02 Formül / Kural
- ACADEMIC-03 Mini Check
- ACADEMIC-04 Çözüm Adımı
- ACADEMIC-05 İpucu / Dikkat
- ACADEMIC-06 Güncel Bilgiler
- ACADEMIC-07 Analiz Mini Kartları

## Not
Bunlar mümkün olduğunca yalnız raster görsel olarak değil, **Figma native component** olarak kurulmalıdır.

## Gate
Türkçe uzun metin, matematik formülü, mobil dar ekran ve dark mode test edilir.

---

# BATCH 16 — Admin / Operations Status System

## Asset'ler
- ADMIN-01 Content Quality
- ADMIN-02 Rights Status
- ADMIN-03 Review Queue Severity
- ADMIN-04 System Health / Release Readiness

## Amaç
Dekorasyon değil, hızlı operasyonel okuma.

## Gate
Renk tek başına anlam taşımaz; icon/label formu erişilebilir olmalıdır.

---

# BATCH 17 — Motion Key Frames

## Asset'ler
- MOTION-01 XP Gain
- MOTION-02 Achievement Unlock
- MOTION-03 Success Pulse
- MOTION-04 Light Celebration

## Bağımlılık
Gamification final sistemi.

## Not
Önce static keyframe dili onaylanır; sonra Lottie/CSS/motion implementasyonu yapılır.

## Gate
Reduced-motion static fallback tanımlanır.

---

# BATCH 18 — Landing Core Marketing

## Asset'ler
- MKT-01 Landing Hero
- MKT-02 Sıradaki Adım
- MKT-03 Deneme ve Analiz

## Amaç
Ürünün ana satış/anlatım dili.

## Gate
Gerçek ürün tasarımına benzemeli; fake UI ile production design arasında çelişki olmamalı.

---

# BATCH 19 — Landing Feature Extensions

## Asset'ler
- MKT-04 AI Öğretmen
- MKT-05 Takımlar / Düello
- MKT-06 Mobile + Desktop Mockup

## Bağımlılık
Gerçek Product Screens veya yeterince stabil component library.

---

# BATCH 20 — Share / SEO System

## Asset'ler
- SHARE-01 Open Graph
- SHARE-02 Deneme Sonucu
- SHARE-03 Level Up
- SHARE-04 Streak
- SHARE-05 Achievement

## Gate
Kişisel veri taşımayan safe template varsayımları kullanılmalı. Share card'lar platform içinde üretilen gerçek değerler için alan bırakmalı.

---

# BATCH 21 — Cross-System Consistency Audit

Bu batch yeni asset üretmez.

## Kontrol edilenler
- 87 Asset ID tam mı?
- K sembolü tutarlı mı?
- Brand indigo drift etti mi?
- İkon stroke'ları uyumlu mu?
- Kategori ve onboarding illustration grammar aynı mı?
- Gamification fazla oyunlaştı mı?
- AI ayrı bir marka gibi mi görünmeye başladı?
- Social asset'ler esports'a kaydı mı?
- Admin status'ları kullanıcı-facing dekorasyonla karışıyor mu?
- Light/dark varyantları tam mı?
- Figma component naming doğru mu?
- Export formatları hazır mı?
- Checklist'te Final Export alanı tamam mı?

Eksikler ilgili batch'e geri döndürülür.

---

# BATCH 22 — Production Export & Figma Handoff

Yeni tasarım üretmez.

## İşler
- SVG cleanup
- optimize PNG/WebP export
- app icon boyutları
- favicon
- maskable safe-zone check
- light/dark exports
- file naming
- Figma component placement
- Asset Registry update
- archive rejected variants
- final version tagging

Bu batch sonunda asset sistemi developer handoff'a hazırdır.

---

# Paralel üretilebilecek batch'ler

Temel stil sabitlendikten sonra şu gruplar paralel ilerleyebilir:

- Batch 07–08 Empty States
- Batch 09–10 Onboarding
- Batch 13 AI
- Batch 14 Social

Ancak aynı anda farklı AI/artist kullanılıyorsa hepsine:
- aynı Master Creative Direction
- final logo
- final app icon
- icon grammar örneği
- en az 2 onaylı illustration reference
verilmelidir.

---

# Paralel Üretimde “Style Anchor Pack”

Birden fazla AI kullanıldığında her ajana minimum şu referans paketi verilir:

1. BRAND-02 final Kavriva KPSS logo
2. APP-01 final app icon
3. ICON-01 final icon sheet
4. CAT-01 final Mathematics visual
5. CAT-03 final History visual
6. ONBOARD-03 final Sıradaki Adım illustration
7. brand palette / typography
8. Master Creative Direction metni

Bu sekiz öğe, görsel drift'i azaltmak için **style anchor** olarak kullanılmalıdır.

---

# AI batch başlangıç prompt şablonu

Her batch'e başlamadan önce AI'a aşağıdaki mantıkta talimat verilir:

> Kavriva KPSS için yalnız Batch XX üzerinde çalış. Önce PRODUCT_PLAN.md, KAVRIVA_KPSS_ASSET_PROMPT_PACK.md ve bu batch planını oku. Daha önce Approved olan style-anchor asset'leri referans al. Bu batch dışındaki asset'leri üretme. İlk olarak batch içi ortak görsel direction'ı belirle; sonra Asset ID sırasıyla üret. Her çıktı için Asset ID'yi koru. Rastgele yeni renk, font, icon geometry veya illustration style oluşturma. Batch bitince kendi consistency QA raporunu ver ve checklist'te Review'a geçmeye hazır asset'leri belirt.

---

# Başarı ölçütü

Amaç “87 güzel görsel” değildir.

Amaç:
**tek tasarım ekibi tarafından üretilmiş gibi görünen 87 parçalık tutarlı Kavriva KPSS asset sistemi** oluşturmaktır.
