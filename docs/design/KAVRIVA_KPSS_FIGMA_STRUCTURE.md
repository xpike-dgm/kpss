# Kavriva KPSS — Figma Dosya ve Klasör Yapısı

Bu belge, Kavriva KPSS tasarım sisteminin Figma içinde **tek bir düzenli kaynak** olarak kurulması için kullanılacaktır.

Amaç: marka, design system, asset, ürün ekranları ve marketing çıktılarının birbirinden kopmadan aynı dosya mimarisinde yönetilmesi.

---

# 1. Dosya seviyesi yapı

Önerilen ana Figma dosyaları:

1. **Kavriva KPSS — Design System & Assets**
2. **Kavriva KPSS — Product Screens**
3. **Kavriva KPSS — Marketing & Social**
4. **Kavriva KPSS — Archive** *(gerekirse ayrı dosya)*

Küçük ekipte ilk üçü tek dosyada page olarak da tutulabilir. Ancak source of truth her zaman **Design System & Assets** tarafıdır.

---

# 2. Page sırası

Figma page'leri şu sırayla oluşturulmalıdır:

## 00 — Cover / Index
- Proje adı: Kavriva KPSS
- Slogan: **Sıradaki doğru adım.**
- Design system version
- Son güncelleme tarihi
- Owner
- Hızlı bağlantılar
- Asset durum özeti
- “DO NOT DESIGN OUTSIDE TOKENS” notu

## 01 — Brand
Sections:
- 01.01 Kavriva Master Brand
- 01.02 Kavriva KPSS Lockups
- 01.03 Symbol
- 01.04 Clear Space
- 01.05 Minimum Size
- 01.06 Light / Dark / Mono
- 01.07 Incorrect Uses
- 01.08 App Icon Family
- 01.09 Brand Examples

Asset bağlantıları:
- BRAND-01 → BRAND-06
- APP-01 → APP-04

## 02 — Foundations
Sections:
- 02.01 Color Tokens
- 02.02 Typography
- 02.03 Spacing
- 02.04 Radius
- 02.05 Border
- 02.06 Shadows / Elevation
- 02.07 Motion
- 02.08 Grid / Breakpoints
- 02.09 Accessibility
- 02.10 Data Visualization Foundations

### Color variables
Collections:
- `Brand`
- `Neutral`
- `Semantic`
- `Surface`
- `DataViz`

Modes:
- Light
- Dark

Başlangıç brand yönü:
- Primary Indigo: #4F46E5
- Electric Indigo / Blue: #4355E8
- Ink: #101828
- Surface Light: #F7F8FC
- White: #FFFFFF
- Success: #12B76A
- Warning: #F59E0B
- Error: #EF4444
- Info: #2E90FA

Exact token'lar kontrast ve gerçek UI testinden sonra sabitlenmelidir.

### Typography
Font family:
- Display / Heading: **Manrope**
- UI / Body: **Inter**

Önerilen text styles:
- Display/XL
- Display/L
- Heading/H1
- Heading/H2
- Heading/H3
- Heading/H4
- Body/L
- Body/M
- Body/S
- Label/L
- Label/M
- Label/S
- Caption
- Numeric/XL
- Numeric/L
- Numeric/M

## 03 — Icons
Sections:
- 03.01 Global UI
- 03.02 Navigation
- 03.03 Academic
- 03.04 Gamification
- 03.05 Social
- 03.06 AI
- 03.07 Status
- 03.08 Admin / Ops

Asset bağlantıları:
- ICON-01 → ICON-03

Icon kuralları:
- tek grid sistemi
- tutarlı optical size
- tutarlı stroke
- outline default
- selected/active durumda gerektiğinde filled
- icon içine rastgele gradient veya farklı stroke dili eklenmez

## 04 — Core Components
Sections:
- Buttons
- Icon Buttons
- Inputs
- Search
- Select / Dropdown
- Checkbox
- Radio
- Switch
- Chips
- Tags
- Badges
- Tabs
- Segmented Controls
- Tooltips
- Toasts
- Alerts
- Dialogs
- Bottom Sheets
- Drawers
- Progress
- Skeletons
- Pagination
- Stepper
- Calendar / Date
- Timer
- Cards
- List Items
- Table
- Empty Container
- Navigation

Her component:
- Auto Layout
- component property
- variant
- state
- responsive behaviour
- light/dark
- keyboard/focus state
ile kurulmalıdır.

Örnek Button variants:
- Kind: Primary / Secondary / Ghost / Danger
- Size: S / M / L
- State: Default / Hover / Pressed / Focus / Disabled / Loading

## 05 — Academic Components
Sections:
- Question Card
- Answer Option
- Question Navigator
- Test Header
- Test Footer
- Explanation
- Step-by-step Solution
- Hint
- Formula Card
- Rule Card
- Topic Summary
- Mini Check
- Current Affairs Card
- Mastery Summary
- Retention Card
- Wrong Answer Card
- Mock Exam Card
- Exam Result Card
- Analysis Card

Asset bağlantıları:
- ACADEMIC-01 → ACADEMIC-07

## 06 — Category Visuals
Sections:
- Mathematics
- Turkish
- History
- Geography
- Citizenship
- Current Affairs
- General Ability / General Culture Overview

Asset bağlantıları:
- CAT-01 → CAT-07

Her kategorinin görseli:
- aynı illustration grammar
- aynı perspektif
- aynı gölge/depth
- aynı saturation bandı
- farklı ama marka uyumlu kategori accent'i
kullanmalıdır.

## 07 — Empty States
Sections:
- First Questions
- No Mocks
- No Wrongs
- No Saved
- No Team
- No AI Chat
- No Search Result
- Offline
- Under Review
- Low Question Pool

Asset bağlantıları:
- EMPTY-01 → EMPTY-10

Her empty state:
- illustration
- title slot
- explanation slot
- primary CTA slot
- optional secondary action
şablonuna oturmalıdır.

## 08 — Onboarding
Sections:
- Product Intro
- Understand Your Level
- Sıradaki Adım
- Revision
- Wrong Answers
- Mock & Analysis
- AI Teacher
- Social / Teams
- Notifications
- Offline / PWA

Asset bağlantıları:
- ONBOARD-01 → ONBOARD-10

## 09 — Gamification
Sections:
- XP
- Level
- Streak
- Daily Missions
- Weekly Missions
- Achievements
- League / Rank
- Season
- Special Moments
- Celebration

Asset bağlantıları:
- GAME-01 → GAME-10

Bu page içinde ayrıca:
- badge anatomy
- tier rules
- locked/unlocked states
- rarity treatment
- level 100 treatment
tanımlanmalıdır.

## 10 — AI
Sections:
- AI Teacher
- AI Coach
- Chat Entry
- Thinking / Loading
- Unavailable
- Verified Solution Conflict
- AI Suggestion Chips
- Report AI Answer

Asset bağlantıları:
- AI-01 → AI-06

## 11 — Social
Sections:
- Avatar System
- Team Emblems
- Team Cards
- Duel Matchup
- Study Rooms
- Invites
- Presence
- Block / Mute / Report States

Asset bağlantıları:
- SOCIAL-01 → SOCIAL-05

## 12 — Product Patterns
Bu page tek tek component değil, birden çok component'in birlikte nasıl kullanıldığını gösterir.

Sections:
- Sıradaki Adım Pattern
- Dashboard Insight Pattern
- Study Session Pattern
- Test Pattern
- Result Pattern
- Review Pattern
- Offline Pattern
- Error Recovery Pattern
- Confirmation Pattern
- Permission Pattern
- Notification Pattern

## 13 — Mobile Screens
Frame standardı:
- ana referans: modern 390px-class viewport
- safe-area dikkate alınır
- exact device'e kilitlenmez

Sections:
- Onboarding
- Auth
- Dashboard
- Study
- Topic
- Questions
- Mock Exams
- Results
- Statistics
- Wrong Answers
- Saved
- Current Affairs
- AI Teacher
- AI Coach
- Social
- Team
- Duel
- Profile
- Notifications
- Settings
- Help
- Privacy
- Offline

## 14 — Desktop Screens
Responsive desktop counterparts:
- Dashboard
- Study
- Test
- Result
- Stats
- Social
- Settings
- Help

Desktop yalnız mobile frame'i büyütmek değildir; bilgi yoğunluğu ve navigation desktop'a göre yeniden düzenlenir.

## 15 — Admin / Operations
Sections:
- Admin Dashboard
- Content Review Queue
- Question Review
- Quality Center
- Content Debt
- Coverage Matrix
- Rights Status
- Exam Blueprint
- Current Affairs
- User Support
- AI Control
- System Health
- Job Center
- Event Explorer
- Privacy Requests
- Release Readiness
- Audit

Asset bağlantıları:
- ADMIN-01 → ADMIN-04

## 16 — Marketing
Sections:
- Landing Hero
- Sıradaki Adım Feature
- Mock / Analysis Feature
- AI Teacher Feature
- Social Feature
- Mobile + Desktop Product Mockups

Asset bağlantıları:
- MKT-01 → MKT-06

## 17 — Share / Social Export
Sections:
- Open Graph
- Mock Result
- Level Up
- Streak
- Achievement

Asset bağlantıları:
- SHARE-01 → SHARE-05

Format template'leri:
- OG 1.91:1
- Square 1:1
- Story 9:16 gerektiğinde

## 18 — Motion
Sections:
- XP Gain
- Achievement Unlock
- Success Pulse
- Celebration
- Loading
- Reduced Motion Alternatives

Asset bağlantıları:
- MOTION-01 → MOTION-04

Motion için her efektte:
- trigger
- duration
- easing
- repeat rule
- reduced-motion fallback
notu bulunmalıdır.

## 19 — Asset Registry
Figma içi görsel registry.

Her asset kartında:
- Asset ID
- isim
- status
- source
- version
- approved by
- light/dark
- export formats
- usage
- prompt link/ref
- final export link/ref

## 90 — Playground
- AI denemeleri
- tasarım keşifleri
- final olmayan varyasyonlar

Bu page'teki hiçbir şey doğrudan production source kabul edilmez.

## 99 — Archive
- deprecated components
- eski logo varyantları
- eski asset versiyonları
- reddedilmiş ama saklanması gereken exploration

---

# 3. Figma component naming standardı

Örnek:

`Button/Primary/L`
`Button/Secondary/M`
`Card/Academic/TopicSummary`
`Card/Gamification/Mission`
`Status/Quality/Quarantined`
`Icon/Academic/Mathematics`
`Asset/Empty/EMPTY-08`

Asset component'leri mümkün olduğunca ID içerir:

`Asset/Onboarding/ONBOARD-03/SiradakiAdim`

---

# 4. Variable naming standardı

Örnek:

`color/brand/primary`
`color/text/primary`
`color/surface/base`
`color/semantic/success`
`space/200`
`radius/card`
`elevation/card/default`
`motion/duration/fast`

Hardcoded local renk ve spacing kullanımı mümkün olduğunca azaltılmalıdır.

---

# 5. AI'nın Figma'da çalışma kuralları

Figma bağlantılı AI şu kurallara uymalıdır:

1. Yeni ekran üretmeden önce mevcut variables ve components'i kullan.
2. Aynı ihtiyacı karşılayan component varsa yenisini oluşturma.
3. Hardcoded renk yerine token kullan.
4. Auto Layout kullan.
5. Component state'lerini variant/property ile kur.
6. Mobile ve desktop tasarımları aynı design system'den üret.
7. Asset Prompt Pack'teki görsel dilin dışına çıkma.
8. Yeni görsel/ikon gerekiyorsa önce Asset Registry ve Checklist'i kontrol et.
9. Playground dışındaki exploration'ı final gibi bırakma.
10. Final component'leri isimlendirme standardına göre yerleştir.
11. Accessibility/focus state'lerini atlama.
12. Text layer'larını raster görsele gömme; UI text editable kalmalı.

---

# 6. Final handoff düzeni

Bir ekran geliştirmeye hazır sayılmadan önce:
- kullanılan component'ler final
- assets Approved
- responsive behaviour tanımlı
- empty/loading/error state mevcut
- dark mode kontrol edilmiş
- focus/keyboard behaviour not edilmiş
- gerçek Türkçe metin taşması kontrol edilmiş
- developer notes eklenmiş
olmalıdır.

---

# 7. Kaynak belgeler

Figma çalışması her zaman şu dosyaları birlikte dikkate almalıdır:

- `PRODUCT_PLAN.md`
- `docs/design/KAVRIVA_KPSS_ASSET_PROMPT_PACK.md`
- `docs/design/KAVRIVA_KPSS_ASSET_CHECKLIST.md`
- `docs/design/KAVRIVA_KPSS_AI_BATCH_PLAN.md`

Bu dosyalardan biriyle çelişen rastgele görsel karar üretme.
