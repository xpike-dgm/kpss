# Kavriva KPSS — Görsel Asset Üretim Prompt Paketi

Bu dosya, **Kavriva KPSS** için üretilecek tüm temel görsel varlıklar için hazırlanmış kapsamlı prompt paketidir.
Amaç yalnız tek tek görsel üretmek değil; bütün varlıkların **aynı marka sisteminin parçası** gibi görünmesini sağlamaktır.

Bu dosyadaki promptlar; logo, uygulama ikonu, UI görselleri, empty state görselleri, onboarding illüstrasyonları, oyunlaştırma varlıkları, AI yüzeyleri, sosyal yüzeyler, marketing görselleri ve paylaşım kartları için ayrı ayrı hazırlanmıştır.

---

# 0. MASTER CREATIVE DIRECTION — BÜTÜN PROMPTLARIN ORTAK TEMELİ

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

# 1. BRAND CORE ASSETS

## 1.1 Asset ID: BRAND-01 — Kavriva Ana Marka Logosu
**Amaç:** Kavriva ana marka logosu. Bu doğrudan Kavriva master brand içindir, KPSS alt ürününden bağımsızdır.

**Prompt:**
Use the **existing approved Kavriva master logo as an immutable visual reference**. Do **not redesign, reinterpret, regenerate, simplify into a different symbol, or replace** the existing geometric K mark. The task is to prepare and standardize the existing Kavriva master brand artwork for the Kavriva KPSS design system: preserve the exact recognizable K geometry and existing Kavriva identity, clean only technical/vector inconsistencies if necessary, establish precise spacing and alignment, and prepare professional monochrome black-on-white and white-on-dark master presentations. The result must remain visibly the same Kavriva brand the owner already uses. Do not add education, motorcycle, book, cap, brain, pencil, gear, shield, or other category symbols. If the approved Kavriva logo reference is not available in the current working context, **stop and request the source/reference logo instead of inventing a new K mark**.

---

## 1.2 Asset ID: BRAND-02 — Kavriva KPSS Ana Ürün Logosu
**Amaç:** Kavriva KPSS için ana logo sistemi.

**Prompt:**
Design the primary product logo for **Kavriva KPSS** using the existing brand logic of **Kavriva** as the master brand. Keep the core Kavriva geometric **K** symbol and the Kavriva wordmark as the dominant brand element. Add **KPSS** as a smaller, secondary product label so that the brand architecture is clearly “master brand + product.” The design should look organized, premium, and productized, not like a cheap exam-prep banner. The hierarchy must make it obvious that Kavriva is the parent brand and KPSS is the specific product. Use a clean, modern, tech-product aesthetic. Prefer a mostly monochrome logo with **KPSS** highlighted using an indigo/electric blue accent that fits the Kavriva KPSS visual system. The composition should work beautifully on websites, product headers, landing pages, PWA splash screens, and social thumbnails. Avoid extra symbols such as caps, pencils, books, or decorative education clichés. Keep the design elegant, minimal, and highly scalable.

---

## 1.3 Asset ID: BRAND-03 — Kavriva KPSS Yatay Logo Varyantı
**Amaç:** Header, navbar, landing hero üst alanı gibi yüzeylerde kullanılacak yatay versiyon.

**Prompt:**
Create a horizontal logo lockup for **Kavriva KPSS**. Use the Kavriva geometric K symbol on the left, the Kavriva wordmark as the main brand name, and the smaller product label **KPSS** on the right or neatly aligned as a secondary label. The layout should be ideal for website headers, dashboards, top navigation bars, and presentation covers. The visual feel must be crisp, premium, minimal, and suitable for a modern digital product. Use restrained color, primarily black, white, and a refined indigo accent. Make sure the logo remains very readable at smaller header sizes. Avoid decorative noise and keep the spacing, alignment, and visual balance highly polished.

---

## 1.4 Asset ID: BRAND-04 — Kavriva KPSS Dikey / Stacked Logo Varyantı
**Amaç:** Splash, onboarding cover, sosyal paylaşım kapağı gibi dikey yüzeyler için stacked logo.

**Prompt:**
Design a stacked vertical logo variation for **Kavriva KPSS**. The composition should place the Kavriva geometric K symbol at the top, the word **Kavriva** underneath as the dominant brand name, and **KPSS** as a smaller sub-brand line beneath it. The structure should feel refined, modern, and appropriate for launch screens, cover cards, onboarding intros, marketing blocks, and centered compositions. Use the same premium, clean, technology-oriented aesthetic as the rest of the brand system. Keep the colors minimal: black, white, and indigo accent. The result should be simple, elegant, and unmistakably part of the Kavriva brand family.

---

## 1.5 Asset ID: BRAND-05 — Sadece K Sembolü
**Amaç:** Favicon, app icon çekirdeği, küçük kimlik alanları.

**Prompt:**
Extract and prepare the standalone **existing approved Kavriva K symbol** from the master Kavriva logo. Do **not create a new K symbol and do not alter its recognizable geometry**. Preserve the exact brand mark while preparing technically clean vector-ready, small-size-safe presentations for white, dark, and indigo backgrounds. Optical centering and export padding may be adjusted without changing the symbol itself. The purpose is to create a reusable master symbol asset for favicon, app icon, small brand marker, and future Kavriva product identities. If the approved source logo is not available, stop and request it instead of reconstructing the mark from imagination.

---

## 1.6 Asset ID: BRAND-06 — Kavriva Master Brand Kalibrasyon / Kullanım Kartı
**Amaç:** Batch 01 içinde yalnız mevcut Kavriva master markasının geometri, boşluk, kontrast ve kullanım davranışını standardize eden brand-calibration board. **Kavriva KPSS ürün lockup'ını içermez; ürün lockup'ı Batch 02'de BRAND-02/03/04 ile üretilir.**

**Prompt:**
Create a polished **master-brand calibration and usage board for the existing approved Kavriva logo only**. Do not create or show a Kavriva KPSS product lockup in this asset. Use the existing Kavriva geometric K symbol and existing Kavriva wordmark exactly as approved, without redesigning either. Present the master brand in a professional brand-guideline composition with clear white-space, optical alignment, safe-area/clear-space demonstration, small-size behavior, black-on-white, white-on-dark, and symbol-only examples. The board should establish the visual anchor that later Kavriva products will inherit. Keep the composition premium, minimal, and technical. If the approved Kavriva logo reference is unavailable, stop and request it rather than recreating the logo from memory.

---

# 2. APP ICON / FAVICON / PWA ASSETS

## 2.1 Asset ID: APP-01 — Kavriva KPSS App Icon
**Amaç:** Ana uygulama/PWA ikonu.

**Prompt:**
Design the main app icon for **Kavriva KPSS**. Use the existing Kavriva geometric **K** symbol as the only central symbol. Place it on a premium **indigo / electric blue** background so this product is visually distinct from other Kavriva products. The icon should feel clean, strong, modern, and highly recognizable at small sizes. Use a simple composition with excellent silhouette clarity. The icon must look native and premium on iOS, Android, and PWA surfaces. Avoid tiny details, text, shadows that are too heavy, or generic exam symbols. The icon should feel like a high-quality modern app, not a student homework app.

---

## 2.2 Asset ID: APP-02 — Maskable PWA Icon
**Amaç:** Android/PWA maskable ikon için güvenli kompozisyon.

**Prompt:**
Create a **maskable app icon** version for **Kavriva KPSS**. Use the same Kavriva K symbol and indigo brand background, but make sure the symbol sits with enough safe margin so it remains recognizable inside different adaptive icon masks such as circle, rounded square, and squircle. The composition should remain centered, minimal, and highly legible. It should feel like the same icon family as the main Kavriva KPSS app icon, just optimized for adaptive cropping.

---

## 2.3 Asset ID: APP-03 — Favicon
**Amaç:** Çok küçük boyutta kullanılacak favicon.

**Prompt:**
Create a favicon-ready presentation of the **existing approved Kavriva K symbol** optimized through export sizing, optical centering, padding, and contrast only. **Do not simplify, redraw, reinterpret, or alter the K geometry**, even at very small sizes. If the exact symbol becomes unreadable at a target favicon size, preserve the geometry and solve the issue through canvas padding/background/size strategy rather than changing the mark. The favicon should work on white, dark, and indigo contexts. No extra text.

---

## 2.4 Asset ID: APP-04 — Splash / Launch Screen Hero
**Amaç:** Uygulama açılış ekranı.

**Prompt:**
Design a premium launch screen / splash screen for **Kavriva KPSS**. Use a minimal composition with the Kavriva K symbol and the **Kavriva KPSS** product mark. The background should use the Kavriva KPSS visual language—preferably a clean indigo gradient or a flat indigo surface with subtle premium depth. The overall look should be elegant, calm, and high-end. No crowded interface elements. This should feel like the launch screen of a polished premium educational technology product.

---

# 3. CORE UI ICON SYSTEM

> Not: Aşağıdaki ikon promptlarında, tüm ikonların **aynı setin parçası** olması gerektiği özellikle korunmalıdır.

## 3.1 Asset ID: ICON-01 — Global UI Icon Sheet
**Amaç:** Temel sistem ikonlarının tek bir uyumlu set olarak üretilmesi.

**Prompt:**
Create a cohesive icon set for **Kavriva KPSS** in a clean, modern outline style with slightly rounded corners and balanced stroke thickness. All icons must feel like part of the same system. The set should include the following UI icons: home, study, exams, mistakes/wrong answers, revision/review, saved/bookmark, teams, profile, settings, notifications, search, filter, sort, back, forward, close, share, delete, edit, download, upload, help, report, security/privacy, AI, support, calendar, analytics, chart, target, timer, streak, trophy, lock, unlock, sync, offline, online. The icons must be visually consistent, minimal, and designed for a premium educational app interface. Use one presentation sheet on a clean background so the icons can be reviewed together as a system.

---

## 3.2 Asset ID: ICON-02 — Ders / Kategori İkon Seti
**Amaç:** KPSS derslerini temsil edecek özel ikonlar.

**Prompt:**
Create a cohesive icon set for the main **Kavriva KPSS** content categories, using the same icon style as the main UI system. The set must include icons for: Turkish, Mathematics, History, Geography, Citizenship, Current Affairs, General Ability / General Culture overview, question solving, topic learning, revision, full mock exams, analysis, time management, accuracy, difficulty, concept mastery, and progress. **Do not include Education Sciences; the current accepted product scope is General Ability / General Culture.** The icons must look academic and modern without relying on cliché school symbols. If symbolic cues are used, keep them subtle and abstract. Show the set as a unified icon board with consistent visual language and clean spacing.

---

## 3.3 Asset ID: ICON-03 — Gamification Icon Seti
**Amaç:** Oyunlaştırma yüzeyleri için temel ikon sistemi.

**Prompt:**
Create a premium gamification icon set for **Kavriva KPSS** that still fits the refined product aesthetic. The set should include icons for XP, level, streak, daily mission, weekly mission, badge, achievement, season, rank, leaderboard, team contribution, milestone, special moment, reward chest, and progress ring. Use the same structural icon language as the rest of the brand, but allow slightly richer visual emphasis, subtle energy, or soft depth so these feel rewarding. Avoid childish cartoon energy. Present the icons together as a coherent system.

---

# 4. ACADEMIC CATEGORY VISUALS

## 4.1 Asset ID: CAT-01 — Matematik Görsel Kartı
**Prompt:**
Create a clean category visual for **Mathematics** in the Kavriva KPSS system. This is not just a tiny icon, but a compact category illustration/card visual. It should feel analytical, structured, and problem-solving oriented. Use geometric shapes, subtle abstract number/logic motifs, and a calm academic-tech visual style. Avoid childish school imagery. Use the Kavriva KPSS indigo-forward palette with white space and clean composition.

## 4.2 Asset ID: CAT-02 — Türkçe Görsel Kartı
**Prompt:**
Create a clean category visual for **Turkish** in the Kavriva KPSS system. The image should suggest reading, comprehension, language structure, and interpretation without looking like a generic language school ad. Use subtle abstract text-flow motifs, layered cards, structured reading blocks, or semantic-flow symbolism. The visual must feel smart, clean, and productized.

## 4.3 Asset ID: CAT-03 — Tarih Görsel Kartı
**Prompt:**
Create a refined category visual for **History** in the Kavriva KPSS system. The illustration should suggest chronology, historical understanding, and structured knowledge, not a museum poster. Use elegant timeline or archive-inspired motifs, calm academic composition, and the same premium product visual language.

## 4.4 Asset ID: CAT-04 — Coğrafya Görsel Kartı
**Prompt:**
Create a refined category visual for **Geography** in the Kavriva KPSS system. The visual should suggest maps, regions, landforms, and geographic reasoning without becoming a literal atlas page. Keep it modern, light, clean, and consistent with the brand.

## 4.5 Asset ID: CAT-05 — Vatandaşlık Görsel Kartı
**Prompt:**
Create a refined category visual for **Citizenship** in the Kavriva KPSS system. The image should suggest institutions, structure, governance, rights, and civic knowledge using abstract structured motifs rather than cliché government building illustrations. Keep the style premium, calm, and contemporary.

## 4.6 Asset ID: CAT-06 — Güncel Bilgiler Görsel Kartı
**Prompt:**
Create a refined category visual for **Current Affairs** in the Kavriva KPSS system. The image should suggest updates, ongoing relevance, and curated important information. Use clean card-like structures, signal/wave/news-flow inspired abstract motifs, and a modern educational product feel.

## 4.7 Asset ID: CAT-07 — Genel Yetenek / Genel Kültür Overview Görsel Kartı
**Prompt:**
Create a refined overview category visual for **General Ability / General Culture (Genel Yetenek / Genel Kültür)** in the Kavriva KPSS system. This asset represents the overall accepted academic scope rather than a separate subject. Visually combine analytical/problem-solving energy with structured general-knowledge signals in one balanced composition, while staying consistent with the individual Turkish, Mathematics, History, Geography, Citizenship, and Current Affairs category visuals. Do not introduce Education Sciences or field-exam imagery. Keep the design modern, clean, premium, and clearly part of the same category-visual family.

---

# 5. EMPTY STATE / NO DATA VISUALS

## 5.1 Asset ID: EMPTY-01 — Hiç Soru Çözülmemiş
**Prompt:**
Create an empty-state illustration for **no questions solved yet** in the Kavriva KPSS app. The scene should feel encouraging, clean, and calm rather than disappointing. Show the sense of a fresh academic beginning, perhaps through a clean dashboard card, progress placeholder, or a person about to begin a study session. The illustration should be minimal, premium, and in line with the Kavriva KPSS visual system. It should communicate “you are just getting started” in a positive way.

## 5.2 Asset ID: EMPTY-02 — Henüz Deneme Yok
**Prompt:**
Create an empty-state illustration for **no mock exams completed yet** in Kavriva KPSS. The visual should suggest readiness waiting to be built—perhaps a clean exam card, chart placeholders, and a calm “results will appear here” feeling. The aesthetic should remain premium and product-driven.

## 5.3 Asset ID: EMPTY-03 — Yanlışlarım Boş
**Prompt:**
Create an empty-state illustration for **no wrong answers saved yet**. The message should feel like a positive status, not a broken state. The visual may suggest a clean review tray, an empty mistake list, or a neat success state that still fits the overall app design language.

## 5.4 Asset ID: EMPTY-04 — Kaydedilenler Boş
**Prompt:**
Create an empty-state illustration for **saved items/bookmarks list is empty**. The visual should feel tidy, calm, and useful, with a premium product aesthetic. Suggest bookmarking or collecting content in a subtle way.

## 5.5 Asset ID: EMPTY-05 — Takım Yok
**Prompt:**
Create an empty-state illustration for **the user has not joined or created a team yet**. The scene should suggest collaboration potential without showing a childish social network look. Keep it modern, light, and brand-consistent.

## 5.6 Asset ID: EMPTY-06 — AI Sohbet Yok
**Prompt:**
Create an empty-state illustration for **no AI conversation history yet** in Kavriva KPSS. The image should suggest an intelligent assistant ready to help, but should remain symbolic and elegant. No cartoon robot mascots. Use subtle AI-related graphic motifs.

## 5.7 Asset ID: EMPTY-07 — Arama Sonucu Yok
**Prompt:**
Create an empty-state illustration for **no search results found**. The illustration should be clear, calm, and useful, with a subtle search motif, clean shapes, and a premium digital product feel.

## 5.8 Asset ID: EMPTY-08 — Offline Durumu
**Prompt:**
Create an empty-state or status illustration for **offline mode / no internet connection**. The visual should communicate temporary disconnection without panic. Show a calm, controlled product status with subtle connectivity motifs.

## 5.9 Asset ID: EMPTY-09 — İçerik Kalite İncelemesinde
**Prompt:**
Create an empty/state visual for **content currently under quality review**. It should feel trustworthy and clear, not like an error. Suggest a temporary review or verification process using refined product-style symbols.

## 5.10 Asset ID: EMPTY-10 — Bu Alanda Yeterli Soru Yok
**Prompt:**
Create an empty-state illustration for **not enough question pool in this topic yet**. The image should gently communicate limited availability while preserving trust. Suggest curation, incoming growth, or a focused content area without making the app feel broken.

---

# 6. ONBOARDING VISUALS

## 6.1 Asset ID: ONBOARD-01 — Kavriva KPSS Nedir
**Prompt:**
Create the first onboarding illustration for **Kavriva KPSS**. The theme is introducing the product as a smart KPSS preparation platform. The visual should communicate guided learning, personal progress, and intelligent structure. It should look like a premium educational tech product, not a tutoring flyer. Use the Kavriva KPSS visual system, indigo accents, and clean modern shapes.

## 6.2 Asset ID: ONBOARD-02 — Seviyeni Tanır
**Prompt:**
Create an onboarding illustration for the concept **“Kavriva KPSS understands your level.”** Visually communicate measurement, personal analysis, and tailored understanding. Use charts, progress motifs, or layered academic indicators in a clean illustrative way.

## 6.3 Asset ID: ONBOARD-03 — Sıradaki Adım
**Prompt:**
Create an onboarding illustration for **Sıradaki Adım**, the signature feature of Kavriva KPSS. The visual should communicate that the system identifies the most useful next study action for the user. Show direction, clarity, and guided progress in a premium, product-centered style.

## 6.4 Asset ID: ONBOARD-04 — Tekrar Sistemi
**Prompt:**
Create an onboarding illustration for the **revision/review system**. The image should suggest spaced repetition, returning to knowledge, and smart reinforcement. Keep it calm, systematic, and clean.

## 6.5 Asset ID: ONBOARD-05 — Yanlışlarım Sistemi
**Prompt:**
Create an onboarding illustration for the **wrong answers / mistake review system**. Show how mistakes become useful learning material. The visual should feel constructive, not negative.

## 6.6 Asset ID: ONBOARD-06 — Deneme ve Analiz
**Prompt:**
Create an onboarding illustration for **mock exams and analysis**. The scene should suggest full exam practice, data breakdown, and insight extraction. Use charts and exam-card metaphors in a modern product illustration style.

## 6.7 Asset ID: ONBOARD-07 — AI Öğretmen
**Prompt:**
Create an onboarding illustration for **AI Teacher** in Kavriva KPSS. The visual should suggest helpful explanation, clarity, and support. Avoid mascot-heavy or cartoon robot visuals. Stay symbolic, elegant, and tech-like.

## 6.8 Asset ID: ONBOARD-08 — Takımlar ve Sosyal Sistem
**Prompt:**
Create an onboarding illustration for **teams and social study features**. The visual should communicate collaborative progress, challenges, and structured social learning without looking like a generic social media app.

## 6.9 Asset ID: ONBOARD-09 — Bildirimler ve Takip
**Prompt:**
Create an onboarding illustration for **smart reminders and tracking**. The visual should suggest timely nudges, awareness, and continuity. Keep it elegant, useful, and product-centric.

## 6.10 Asset ID: ONBOARD-10 — Offline / PWA Kullanımı
**Prompt:**
Create an onboarding illustration for **PWA / offline capable study**. The image should suggest flexible access, continuity, and practical usage on multiple devices, while staying visually clean and premium.

---

# 7. GAMIFICATION ASSETS

## 7.1 Asset ID: GAME-01 — XP Sembolü
**Prompt:**
Create a premium XP symbol for Kavriva KPSS. It should feel rewarding, clean, and modern. The symbol must fit the brand system and work in small UI surfaces. It should not look childish or arcade-like. Consider a refined energy crystal, abstract spark, or structured radiant token feeling.

## 7.2 Asset ID: GAME-02 — Seviye Rozeti Sistemi
**Prompt:**
Create a modular **level badge system** for Kavriva KPSS. The system should include multiple tiered badge frames representing player level progression. The visual language should feel collectible and premium, with indigo as the core family color and carefully controlled use of silver, gold, or energetic accents for higher tiers. The set should feel like a consistent progression ladder rather than random unrelated badges.

## 7.3 Asset ID: GAME-03 — Streak Simgesi
**Prompt:**
Create a streak icon/mini-badge for Kavriva KPSS that symbolizes study continuity and daily consistency. Use controlled energy and momentum. Avoid cartoon flames that feel childish. The symbol should feel premium and motivating.

## 7.4 Asset ID: GAME-04 — Günlük Görev Görsel Dili
**Prompt:**
Create a visual system card for **daily missions** in Kavriva KPSS. Show how a daily task card should look: structured, rewarding, neat, with space for title, progress, reward, and completion state. The overall visual style must fit the Kavriva product UI.

## 7.5 Asset ID: GAME-05 — Haftalık Görev Görsel Dili
**Prompt:**
Create a visual system card for **weekly missions** in Kavriva KPSS. The card should feel slightly more strategic and substantial than daily missions. Preserve the same brand style and UI consistency.

## 7.6 Asset ID: GAME-06 — Achievement Badge Framework
**Prompt:**
Create a modular **achievement badge framework** for Kavriva KPSS. Design a family of achievement badges with a shared frame system and multiple categories. The set should include a base badge shape, locked state, unlocked state, highlighted state, and premium/rare state. The badges must feel refined and collectible, not like childish game stickers.

## 7.7 Asset ID: GAME-07 — Lig / Rank Rozetleri
**Prompt:**
Create a premium rank/league badge system for Kavriva KPSS. These should represent competitive standing or league tiers. Use a clear progression in prestige and sophistication, but maintain the product’s calm premium identity. The set should work in leaderboards, duels, and seasonal systems.

## 7.8 Asset ID: GAME-08 — Sezon Kapanış Kutlama Kartı
**Prompt:**
Create a season-end celebration card for Kavriva KPSS. The visual should feel rewarding and polished, suitable for displaying final rank, progress summary, and seasonal achievements. Use elegant celebratory energy, not noisy party aesthetics.

## 7.9 Asset ID: GAME-09 — Level Up Kutlama Ekranı
**Prompt:**
Create a level-up celebration visual for Kavriva KPSS. The design should communicate accomplishment and progress while staying aligned with the brand’s premium educational product style. It should feel meaningful, bright, and polished.

## 7.10 Asset ID: GAME-10 — Special Moment Kutlama Kartı
**Prompt:**
Create a special milestone celebration card for Kavriva KPSS, intended for “special moments” such as reaching a major level, completing a long streak, or a major study milestone. The card should feel elevated and share-worthy.

---

# 8. AI ASSETS

## 8.1 Asset ID: AI-01 — AI Öğretmen Sembolü
**Prompt:**
Create a refined visual symbol for **AI Teacher** in Kavriva KPSS. It should communicate explanation, assistance, and intelligence. Avoid cartoon robots. Use clean abstract forms or a subtle conversational-intelligence motif in the same visual family as the rest of the product.

## 8.2 Asset ID: AI-02 — AI Koç Sembolü
**Prompt:**
Create a refined visual symbol for **AI Coach** in Kavriva KPSS. It should feel slightly more planning- and motivation-oriented than AI Teacher, but remain visually related. The symbol should suggest guidance and next-step support.

## 8.3 Asset ID: AI-03 — AI Sohbet Giriş Kartı
**Prompt:**
Create a polished UI-style entry card visual for opening an AI conversation in Kavriva KPSS. The visual should show the concept of asking for help, getting explanations, and interacting with a smart assistant in a modern, trustworthy academic product.

## 8.4 Asset ID: AI-04 — AI Loading / Thinking Durumu
**Prompt:**
Create a clean loading/processing visual for AI responses in Kavriva KPSS. This should feel intelligent and calm, not playful or noisy. Use elegant motion-friendly motifs or symbolic pulse/wave structures that fit the brand.

## 8.5 Asset ID: AI-05 — AI Unavailable Durumu
**Prompt:**
Create a status illustration for **AI temporarily unavailable** in Kavriva KPSS. The image should clearly communicate temporary unavailability without making the app feel broken. Use a calm, trustworthy, premium product style.

## 8.6 Asset ID: AI-06 — Verified Solution ile Çelişme Uyarısı
**Prompt:**
Create a compact but refined warning/attention visual for the case where an AI explanation conflicts with the verified solution. It should feel trustworthy, clear, and safe. Use clean status design language.

---

# 9. SOCIAL ASSETS

## 9.1 Asset ID: SOCIAL-01 — Varsayılan Avatar Sistemi
**Prompt:**
Create a coherent default avatar system for Kavriva KPSS. The avatars should be abstract or lightly character-based, clean, modern, and inclusive. They should feel neutral, professional, and suitable for an educational platform. Avoid cartoonish extremes. Present multiple avatar variations that clearly belong to the same family.

## 9.2 Asset ID: SOCIAL-02 — Takım Amblemi Kütüphanesi
**Prompt:**
Create a starter library of team emblems for Kavriva KPSS. The emblems should feel clean, competitive, and collectible while staying appropriate for an academic product. Use abstract geometric motifs, not military or aggressive esports aesthetics. Show a consistent system of multiple emblem options.

## 9.3 Asset ID: SOCIAL-03 — Düello Eşleşme Kartı
**Prompt:**
Create a duel match-up card visual for Kavriva KPSS. The card should communicate a head-to-head academic challenge between two users in a premium, clean, controlled competitive format. Use symmetry, balanced comparison zones, and subtle dynamic tension.

## 9.4 Asset ID: SOCIAL-04 — Çalışma Odası Kapak Görseli
**Prompt:**
Create a visual header/cover style for study rooms in Kavriva KPSS. The image should suggest shared focus, calm collaboration, and structured group learning. Avoid generic social-chat aesthetics.

## 9.5 Asset ID: SOCIAL-05 — Davet Kartı
**Prompt:**
Create a premium invite card for inviting users to a team, duel, or study room in Kavriva KPSS. The design should be clean, modern, and shareable, with strong brand consistency.

---

# 10. ACADEMIC CONTENT VISUAL TEMPLATES

## 10.1 Asset ID: ACADEMIC-01 — Konu Özeti Kart Şablonu
**Prompt:**
Create a visual template for a **topic summary card** in Kavriva KPSS. The design should look clear, structured, and easy to scan. It should feel like a polished component from a professional educational platform. Use restrained indigo accents, clear hierarchy, and good whitespace.

## 10.2 Asset ID: ACADEMIC-02 — Formül / Kural Kart Şablonu
**Prompt:**
Create a visual template for a **formula or rule card** in Kavriva KPSS. The card should emphasize clarity and retention. The style must be elegant, highly readable, and consistent with the academic UI system.

## 10.3 Asset ID: ACADEMIC-03 — Mini Check Kartı
**Prompt:**
Create a visual template for a **mini understanding check** in Kavriva KPSS. The card should look lightweight, interactive, and educational, suitable for quick understanding checks inside a lesson flow.

## 10.4 Asset ID: ACADEMIC-04 — Çözüm Adımı Blok Şablonu
**Prompt:**
Create a polished visual block template for **step-by-step solution explanation** in Kavriva KPSS. The design should make sequential reasoning feel clear and easy to follow. It must suit both mobile and desktop product layouts.

## 10.5 Asset ID: ACADEMIC-05 — İpucu / Dikkat Kutuları
**Prompt:**
Create a family of visual callout boxes for **tip**, **important note**, **warning**, and **remember this** states in Kavriva KPSS. The set should be consistent, elegant, and clearly differentiated by semantics.

## 10.6 Asset ID: ACADEMIC-06 — Güncel Bilgiler Kart Şablonu
**Prompt:**
Create a visual template for a **Current Affairs card** in Kavriva KPSS. The card should look curated, timely, and easy to review. It should feel structured rather than newsy-chaotic.

## 10.7 Asset ID: ACADEMIC-07 — Analiz Mini Kart Seti
**Prompt:**
Create a small family of **analysis summary cards** for Kavriva KPSS, such as accuracy, speed, net trend, strongest topics, weakest topics, and readiness indicators. The cards should feel like a modern SaaS analytics product, calm and data-rich.

---

# 11. LANDING / MARKETING ASSETS

## 11.1 Asset ID: MKT-01 — Landing Hero Görseli
**Prompt:**
Create the main hero visual for the **Kavriva KPSS** landing page. The visual should immediately communicate that this is a modern, intelligent KPSS preparation platform. Show a premium digital-product feeling with clean interface mockups, academic progress, smart guidance, and an overall sense of clarity. The image should support the slogan **“Sıradaki doğru adım.”** Avoid clutter and keep the composition premium and conversion-focused.

## 11.2 Asset ID: MKT-02 — Sıradaki Adım Özellik Görseli
**Prompt:**
Create a feature visual for the signature **Sıradaki Adım** feature of Kavriva KPSS. Show how the platform identifies the most useful next study action. The image should feel product-centric, with elegant UI cards, progress reasoning, and clear directional guidance.

## 11.3 Asset ID: MKT-03 — Deneme ve Analiz Özellik Görseli
**Prompt:**
Create a feature visual for **mock exams and analysis** in Kavriva KPSS. The visual should communicate exam readiness, performance breakdown, and insight-driven improvement.

## 11.4 Asset ID: MKT-04 — AI Öğretmen Özellik Görseli
**Prompt:**
Create a feature visual for **AI Teacher** in Kavriva KPSS. The image should show explanation support, intelligent help, and trustworthiness, all inside the same premium product style.

## 11.5 Asset ID: MKT-05 — Takımlar / Düello Özellik Görseli
**Prompt:**
Create a feature visual for **teams, duels, and social study** in Kavriva KPSS. The visual should communicate healthy structured competition and collaborative study, not chaotic social networking.

## 11.6 Asset ID: MKT-06 — Mobil + Desktop Mockup Kompozisyonu
**Prompt:**
Create a polished marketing visual showing **Kavriva KPSS** on both mobile and desktop screens. The composition should feel modern, premium, and suitable for landing pages or investor-style overview sections. Use actual-like product UI framing, not generic device mockups.

---

# 12. SHARE / SEO / SOCIAL DISTRIBUTION ASSETS

## 12.1 Asset ID: SHARE-01 — Open Graph Genel Görseli
**Prompt:**
Create a clean Open Graph / social sharing visual for **Kavriva KPSS**. The image should prominently show the brand, the slogan **“Sıradaki doğru adım.”**, and a premium product feel. It should work when shared as a website preview on social platforms and messaging apps.

## 12.2 Asset ID: SHARE-02 — Deneme Sonucu Paylaşım Kartı
**Prompt:**
Create a stylish share card for **mock exam results** in Kavriva KPSS. It should feel polished, data-driven, and shareable without being loud or childish. Include room for key result metrics visually, while maintaining the brand system.

## 12.3 Asset ID: SHARE-03 — Level Up Paylaşım Kartı
**Prompt:**
Create a branded share card for **level up** moments in Kavriva KPSS. The visual should feel rewarding, neat, and social-share friendly, while staying within the premium Kavriva brand style.

## 12.4 Asset ID: SHARE-04 — Streak Paylaşım Kartı
**Prompt:**
Create a share card for a **study streak milestone** in Kavriva KPSS. The card should celebrate continuity and discipline in an elegant way.

## 12.5 Asset ID: SHARE-05 — Achievement Paylaşım Kartı
**Prompt:**
Create a social share card for **achievement unlocks** in Kavriva KPSS. The card should feel like a premium achievement moment rather than a flashy game pop-up.

---

# 13. ADMIN / OPERATIONS VISUALS

## 13.1 Asset ID: ADMIN-01 — Content Quality Status Seti
**Prompt:**
Create a compact visual status system for **content quality states** in Kavriva KPSS admin surfaces. The system should include visual states for approved, review required, quarantined, archived, and conflict detected. The icons or mini-badges should look professional, readable, and operational.

## 13.2 Asset ID: ADMIN-02 — Rights Status Seti
**Prompt:**
Create a compact visual status system for **rights status** in the Kavriva KPSS admin panel. Include visual markers for owned/original, licensed, permission confirmed, open/public use verified, private reference only, rights unknown, restricted, and admin override. The set should be clear, professional, and suitable for operational use.

## 13.3 Asset ID: ADMIN-03 — Review Queue Severity Seti
**Prompt:**
Create a compact visual severity system for review queues in the Kavriva KPSS admin panel. Include visual states for P0 critical, P1 high, P2 normal, and P3 enrichment. The design should feel systematic and trustworthy.

## 13.4 Asset ID: ADMIN-04 — System Health / Release Readiness Durumları
**Prompt:**
Create a small visual status family for **system health and release readiness** in Kavriva KPSS operations surfaces. Include states such as healthy, warning, degraded, blocked, ready, and no-go. These should feel professional and operational, not decorative.

---

# 14. MOTION / MICRO-ANIMATION STYLE FRAMES

> Burada doğrudan animasyon yerine, animasyonun key visual frame’lerini ürettirmek için prompt veriliyor.

## 14.1 Asset ID: MOTION-01 — XP Gain Visual Frame
**Prompt:**
Create a key visual frame for a subtle **XP gain** micro-animation in Kavriva KPSS. The frame should suggest motion, reward, and positive progress in a small elegant burst. It must stay premium and restrained.

## 14.2 Asset ID: MOTION-02 — Achievement Unlock Visual Frame
**Prompt:**
Create a key visual frame for an **achievement unlock** animation in Kavriva KPSS. The image should suggest a polished reveal moment, premium glow, and celebratory emphasis, without becoming noisy.

## 14.3 Asset ID: MOTION-03 — Success Pulse Visual Frame
**Prompt:**
Create a key visual frame for a **success confirmation pulse** animation in Kavriva KPSS. It should feel light, confident, and refined.

## 14.4 Asset ID: MOTION-04 — Confetti / Kutlama Hafif Efekt Frame
**Prompt:**
Create a restrained celebratory visual frame for a **light confetti or celebration effect** in Kavriva KPSS. The effect should feel premium and elegant, not childish party confetti.

---

# 15. TOPLU ÜRETİM İÇİN EK TALİMATLAR

Eğer bu promptlardan çok sayıda asset aynı oturumda üretilecekse, üretim aracına şu genel talimatı ayrıca ver:

## 15.1 Global Batch Consistency Prompt
Use the previously established **Kavriva KPSS** master visual system consistently across all assets in this batch. Preserve the same overall brand DNA: master brand **Kavriva**, product **KPSS**, geometric K-based identity, premium educational technology aesthetic, indigo/electric blue accent system, clean white and dark-neutral surfaces, modern calm product tone, minimal but polished illustration language, and consistent icon/shape geometry. Do not let individual outputs drift into unrelated styles. Every asset must feel like it belongs to the same design system and same product family.

---

# 16. ÜRETİM SIRASI — TEK OTORİTE: AI BATCH PLAN

Bu Prompt Pack asset'in **ne ve nasıl üretileceğini** tanımlar; üretim sırasını ayrıca tekrar tanımlamaz.

Canonical sıra ve bağımlılık kaynağı:

**`docs/design/KAVRIVA_KPSS_AI_BATCH_PLAN.md`**

Kurallar:
- Batch Plan içindeki **22 batch** sırası geçerlidir.
- Bu dosyadaki Asset ID numara sırası üretim sırası değildir.
- Batch Plan ile Prompt Pack arasında sıra çelişkisi görülürse **Batch Plan sıra açısından otoritedir**.
- Prompt Pack ise ilgili Asset ID'nin içerik/görsel brief'i açısından otoritedir.
- BRAND-06 Batch 01'de yalnız master-brand calibration board olarak kullanılır.
- Kavriva KPSS product lockup BRAND-02/03/04 ile Batch 02'de üretilir.
- Bir batch onaylanmadan ona bağımlı sonraki batch finale taşınmaz.

---

# 17. SON NOT

Bu dosyadaki promptlar, tek tek üretim için olduğu kadar bir **art direction belgesi** gibi de kullanılabilir.
Üretim sırasında:
- önce ana logo ve app icon sistemi netleştirilmeli,
- sonra icon ve kategori dili kurulmalı,
- ardından onboarding / empty states / gamification / AI / sosyal yüzeyler üretilmeli,
- en son marketing ve paylaşım kartları yapılmalıdır.

Amaç yalnız güzel görsel üretmek değil; **Kavriva KPSS için baştan sona aynı aileye ait, profesyonel, tekrar kullanılabilir ve genişleyebilir bir asset sistemi kurmaktır.**