# Batch 01 — production brief

Shared creative direction and canonical briefs. Method: deterministic native PNG crops, SVG composition, reversible channel inversion/luminance mask, uniform scaling and canvas padding. No generative image model or logo tracing used.

# Master Creative Direction — BÜTÜN PROMPTLARIN ORTAK TEMELİ

Aşağıdaki kurallar, bu dosyadaki **bütün görsel üretim promptlarında ortak referans** kabul edilmelidir.
Her üretimde bu görsel dil korunmalıdır.

## 0.1 Marka kimliği
- Marka adı: **Kavriva KPSS**
- Ana marka: **Kavriva**
- Ürün: **KPSS**
- Ana slogan: **Sıradaki doğru adım.**
- Ana ürün vaadi: Kullanıcının seviyesini tanıyan, eksiklerini takip eden ve ne çalışması gerektiğini gösteren akıllı KPSS hazırlık platformu.

## 0.2 Genel görsel dil
- Stil: **modern, sade, premium, güvenilir, veri odaklı, sakin**
- Estetik: teknoloji ürünü / SaaS arayüz kalitesi
- Kaçınılacak tarzlar:
  - çocukça çizgi film dili
  - aşırı oyun görselliği
  - ucuz dershane afişi hissi
  - kalabalık, dağınık, gürültülü kompozisyon
  - stok fotoğraf hissi
  - rastgele 3D emoji kültürü
  - mezuniyet kepi, açık kitap, kalem, beyin gibi klişe eğitim sembollerinin aşırı kullanımı

## 0.3 Ana renk sistemi
Bu renkler yönlendirici referanstır. Exact tonlar küçük farklarla uyarlanabilir ama ruh korunmalıdır.

- Primary Indigo: **#4F46E5**
- Secondary Electric Indigo / Blue: **#4355E8**
- Dark Ink: **#101828**
- Slate Text: **#344054**
- Soft Border: **#D0D5DD**
- Surface Light: **#F7F8FC**
- Surface White: **#FFFFFF**
- Deep Dark Surface: **#0C111D**
- Success Green: **#12B76A**
- Warning Amber: **#F59E0B**
- Error Red: **#EF4444**
- Info Blue: **#2E90FA**

## 0.4 Tipografik yaklaşım
- Başlık hissi: **Manrope benzeri modern, güçlü, net sans-serif**
- UI/metin hissi: **Inter benzeri temiz, okunaklı sans-serif**
- Türkçe karakter desteği iyi olmalı
- Başlıklarda güven veren, temiz, teknolojik bir hava olmalı
- Aşırı süslü veya dekoratif font kullanılmamalı

## 0.5 İllüstrasyon dili
- Hafif geometrik
- Düzensiz el çizimi değil, kontrollü dijital çizim
- Flat ile soft-depth arasında dengeli, hafif modern gölge kullanımı olabilir
- Tam realist olmamalı
- Aşırı çocuk kitabı illüstrasyonu olmamalı
- İnsan figürleri kullanılacaksa sade, temiz, nötr ve profesyonel görünmeli
- Arka planlar sade tutulmalı, görselin amacı UI/ürün hissini desteklemek olmalı

## 0.6 İkon dili
- Mümkün olduğunca **temiz, dengeli, yuvarlatılmış köşeli, modern line/outline icon** yaklaşımı
- Seçili durumlarda filled varyasyon mantığına uygun görsel dil
- Stroke kalınlıkları tutarlı olmalı
- Gereksiz minik detaylardan kaçınılmalı

## 0.7 Gamification dili
- Oyunlaştırma var ama çocuklaştırma yok
- Rozetler premium ve toplanabilir görünmeli
- XP / streak / badge / achievement görselleri parlak olabilir ama aşırı neon veya arcade oyun hissine kaymamalı
- Rekabet hissi zarif ve kontrollü olmalı

## 0.8 AI yüzeyleri
- AI karakter/mascot zorunlu değil
- Tercih: sembolik, sofistike, teknoloji hissi veren işaret sistemi
- Aşırı robot kafa, anime karakter, karikatür maskot kullanılmamalı

## 0.9 Kompozisyon kuralları
- Tasarımlar nefes almalı
- Beyaz alan iyi kullanılmalı
- Her üretim tek başına güçlü görünmeli ama bütün sistemin parçası olduğu anlaşılmalı
- Bir tasarım diğerinden kopuk, rastgele stil denemesi gibi görünmemeli

## 0.10 Genel çıktı talimatı
Bu dosyadaki her promptta, eğer ayrıca belirtilmediyse şu ek kurallar geçerlidir:
- **No watermark**
- **No random brand names**
- **No stock-photo look**
- **No clutter**
- **Consistent with the Kavriva KPSS visual system**
- **Use a clean, premium educational product aesthetic**

---


# BRAND-01

**Amaç:** Kavriva ana marka logosu. Bu doğrudan Kavriva master brand içindir, KPSS alt ürününden bağımsızdır.

**Prompt:**
Use the **existing approved Kavriva master logo as an immutable visual reference**. Do **not redesign, reinterpret, regenerate, simplify into a different symbol, or replace** the existing geometric K mark. The task is to prepare and standardize the existing Kavriva master brand artwork for the Kavriva KPSS design system: preserve the exact recognizable K geometry and existing Kavriva identity, clean only technical/vector inconsistencies if necessary, establish precise spacing and alignment, and prepare professional monochrome black-on-white and white-on-dark master presentations. The result must remain visibly the same Kavriva brand the owner already uses. Do not add education, motorcycle, book, cap, brain, pencil, gear, shield, or other category symbols. If the approved Kavriva logo reference is not available in the current working context, **stop and request the source/reference logo instead of inventing a new K mark**.

---

# BRAND-05

**Amaç:** Favicon, app icon çekirdeği, küçük kimlik alanları.

**Prompt:**
Extract and prepare the standalone **existing approved Kavriva K symbol** from the master Kavriva logo. Do **not create a new K symbol and do not alter its recognizable geometry**. Preserve the exact brand mark while preparing technically clean vector-ready, small-size-safe presentations for white, dark, and indigo backgrounds. Optical centering and export padding may be adjusted without changing the symbol itself. The purpose is to create a reusable master symbol asset for favicon, app icon, small brand marker, and future Kavriva product identities. If the approved source logo is not available, stop and request it instead of reconstructing the mark from imagination.

---

# BRAND-06

**Amaç:** Batch 01 içinde yalnız mevcut Kavriva master markasının geometri, boşluk, kontrast ve kullanım davranışını standardize eden brand-calibration board. **Kavriva KPSS ürün lockup'ını içermez; ürün lockup'ı Batch 02'de BRAND-02/03/04 ile üretilir.**

**Prompt:**
Create a polished **master-brand calibration and usage board for the existing approved Kavriva logo only**. Do not create or show a Kavriva KPSS product lockup in this asset. Use the existing Kavriva geometric K symbol and existing Kavriva wordmark exactly as approved, without redesigning either. Present the master brand in a professional brand-guideline composition with clear white-space, optical alignment, safe-area/clear-space demonstration, small-size behavior, black-on-white, white-on-dark, and symbol-only examples. The board should establish the visual anchor that later Kavriva products will inherit. Keep the composition premium, minimal, and technical. If the approved Kavriva logo reference is unavailable, stop and request it rather than recreating the logo from memory.

---

# 2. APP ICON / FAVICON / PWA ASSETS
