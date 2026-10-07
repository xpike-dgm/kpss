# Kavriva KPSS — Style Anchor Pack v1

Owner canonical illustration: **A — Geometric Editorial**, 2026-10-07. Bu pack tüm paralel track'lerde zorunlu referanstır. Canonical brand lockup A ve illustration A iki ayrı owner kararıdır. Final export/Figma approval değildir.

## Zorunlu kaynaklar

| Referans | Repo path |
|---|---|
| BRAND-02 canonical A lockup | assets/brand/batch-02/review/BRAND-02__kavriva-kpss-lockup__direction-a-light__v01.png |
| APP-01 canonical icon | assets/app/batch-03/review/APP-01__kavriva-kpss-app-icon__main-512__v01.png |
| ICON-01 global grammar | assets/icons/batch-04/review/ICON-01__global-ui-icon-sheet__review__v01.png |
| ICON-02 academic grammar | assets/icons/batch-05/review/ICON-02__academic-icon-sheet__review__v01.png |
| ICON-03 gamification grammar | assets/icons/batch-05/review/ICON-03__gamification-icon-sheet__review__v01.png |
| CAT-01 selected A Mathematics | assets/categories/batch-06/family-review/CAT-01__mathematics__canonical-a__v01.png |
| CAT-03 selected A History | assets/categories/batch-06/family-review/CAT-03__history__canonical-a__v01.png |
| CAT-04 selected A Geography | assets/categories/batch-06/family-review/CAT-04__geography__canonical-a__v01.png |
| CAT-07 GY/GK overview | assets/categories/batch-06/family-review/CAT-07__gy-gk-overview__canonical-a__v01.png |
| Illustration source of truth | docs/design/KAVRIVA_KPSS_ILLUSTRATION_GRAMMAR.md |
| Master Creative Direction | docs/design/KAVRIVA_KPSS_ASSET_PROMPT_PACK.md §0 |
| Brand palette / typography | PRODUCT_PLAN.md §51; Prompt Pack §0.3–0.4; Manrope headings, Inter body |

## Kullanım
Ürün kararlarında PRODUCT_PLAN; görsel içerikte Prompt Pack; sıra/dependency'de AI_BATCH_PLAN otoritedir. Owner'ın bu faz için açık izni: category family direction QA PASS sonrası Tracks A–E Review'a kadar üretilebilir; Batch 15 öncesi durulur. ONBOARD-03 kendi track'inin hero anchor'ı olarak önce üretilir; diğer track'lerin başlangıcını bekletmez. Bu, eski Batch Plan minimum anchor listesine bu faz için owner açıklamasıdır.

Görsel üretimde CAT A referansları **style reference**, logo ve app icon **immutable identity reference**, ikon sheet'leri **line/shape reference** olarak okunur. Generated illustration'da K veya wordmark yeniden üretilmez. B isometric/slab/material kullanılmaz. C yalnız ikincil node/connector motifleriyle A içinde kalır. Önceki A reference pixels korunur; generated raster exact hex token veya gerçek vector sayılmaz.

## Track boundary / gate
- A: EMPTY-01–10, Batch 07 family QA ardından 08.
- B: ONBOARD-01–10, hero ONBOARD-03; Batch 09 family QA ardından 10.
- C: GAME-01–10, Batch 11 family QA ardından 12. Level100 hard cap; prestige-yok, ekonomi icadı yok.
- D: AI-01–06, verified solution > AI. Robot yok.
- E: SOCIAL-01–05, sakin akademik sosyal; esports yok.

Her track asset promptlarını okur, yalnız kendi kapsamını üretir, provenance/prompt seti ve karşılaştırma paftasını kaydeder; family QA, 96px ve dark diagnostic yapar; en fazla Review. Gerçek UI text editable SVG/Figma layer olarak korunur. Tema/state/native-vector eksikleri production Pending olarak açık yazılır. Kendi raporu scoped commit ile main'e kaydedilir; ortak checklist/registry koordinatör tarafından birleştirilir.
