# Batch 02 — Kavriva KPSS Brand Lockup · Direction Review v01

Tarih: 2026-10-07 · Status: Review · Owner direction selection: Pending

## Ortak sistem

Batch 01, Owner tarafından Approved for Design Direction olarak kabul edildi. Vector source ve Figma Pending durumları design-direction üretimini engellemiyor. Yalnız BRAND-02, BRAND-03 ve BRAND-04 için üç ortak direction hazırlandı; henüz final direction seçilmedi.

Her direction aynı source artwork, aynı Manrope KPSS label, aynı indigo (#4F46E5), aynı clear-space ve aynı crop/ölçek mantığıyla Primary / Horizontal / Stacked üretir. Kavriva wordmark yeniden dizilmedi. K yeniden çizilmedi. Yeni ürün/eğitim sembolü yok.

Primary ve Horizontal mevcut master logo crop'unu bütün olarak kullanır. Stacked için aynı kaynaktan K ve mevcut wordmark ayrı raster crop'larla, aynı uniform scale oranıyla düzenlenir. Bu yalnız lockup yerleşimidir; glyph veya K konturu değişmez. Wordmark crop koordinatı (574,340), 722×166 px; native RGB pixel equality PASS.

Normalize ölçü birimleri: görünür K yüksekliği H=335, x=H/4=83.75 px. Dış clear-space en az x; yatay master→ürün boşluğu x; alt ürün satırında gap x/2; stacked K→wordmark boşluğu x. Normalizasyon source piksel koordinatındadır, ekranda tüm lockup ile uniform ölçeklenir. Batch 01'de kabul edilen optical offset 0 korunur.

## Direction karşılaştırması

| Boyut | A — Açık alt etiket | B — Kompakt ürün etiketi | C — Merkezli / aralıklı etiket |
|---|---|---|---|
| Hierarchy | Kavriva ana satır; açık KPSS ikinci satır. Ürün doğrudan ve ikincil. | Kavriva ana ağırlık; çerçeve KPSS'yi ayrı ürün etiketi olarak vurgular. | Kavriva baskın; daha küçük, aralıklı ürün adı merkezli imza olur. |
| Alignment | Primary: wordmark sol kenarı; Horizontal: wordmark alt hizası; Stacked: merkez. | Primary/Horizontal: wordmark görsel orta hattı; Stacked: merkez. | Primary: bütün master lockup merkezi; Horizontal: wordmark görsel orta hattı; Stacked: merkez. |
| Spacing | Ortak x/x/2; tracking 0. | Ortak x/x/2; tag yatay padding x/3, dikey padding x/6; tracking .04em. | Ortak x/x/2; tracking .18em. Primary daha fazla dikey alan kullanır. |
| KPSS label size | Manrope 650; font-size / görünür wordmark yüksekliği .36. | Manrope 650; oran .32. | Manrope 600; oran .30. |
| KPSS placement | Primary wordmark altında; Horizontal sağda; Stacked wordmark altında. | Primary/Horizontal sağda ince çerçeveli etiket; Stacked wordmark altında aynı etiket. | Primary bütün lockup altında merkezli; Horizontal sağda; Stacked wordmark altında merkezli. |
| Indigo usage | Light: yalnız KPSS. Dark: beyaz monochrome label. | Light: KPSS + ince outline. Dark: beyaz label/outline. | Light: yalnız KPSS. Dark: beyaz monochrome label. |
| Small-size behaviour | Üçü içinde en güçlü label; 320px toplam yatay genişlikte ≈13.5px KPSS font-size. | 320px toplam genişlikte ≈11.6px; outline küçükte ek yoğunluk yaratır. | 320px toplam genişlikte ≈11.2px; letter-spacing belirgin ama küçükte harfler zayıflar. |

Ratio değerleri SVG font-size'ın kaynak wordmark görünür yüksekliğine oranıdır; gerçek büyük harf yüksekliği oranı veya onaylı marka token'ı değildir. Direction'lar karşılaştırma için aynı kartlara sığdırılır; C primary daha yüksek olduğu için family-board kartında biraz daha küçük ölçekle gösterilir.

## Öneri: Direction A

A, accepted master-brand + product hiyerarşisini en açık biçimde uygular. Primary'de mevcut K+Kavriva satırı aynen kalır, KPSS doğrudan wordmark'ın altında ikincil ürün tanımlayıcısıdır. Çerçeve gerektirmez, yatay varyantta ek görsel yük üretmez ve üç aday içinde küçültmede en güçlü ürün label'ını korur. Stacked aynı label diliyle türetilir.

B, ürün katalogu/çok ürünlü marka ailesi için daha belirgin tag hissi verir; bu görevde ürün label'ını kontrol veya badge gibi algılatabilir. B'de Primary ve Horizontal aynı ortak geometriyi paylaşır; iki bağımsız tasarım oluşturulmadı. C, merkezli kapak/splash sunumlarında güçlüdür; daha fazla dikey boşluk ister ve küçük yatay kullanımda label daha zayıftır.

Bu öneri Owner seçimi veya Approved kararı değildir.

## Asset değerlendirmesi

- **BRAND-02 — Primary:** A açık alt etiket; B inline ürün tag'i; C merkezli ikinci satır. Her biri aynı direction'ın yatay/stacked kurallarıyla birlikte incelenebilir. Status Review.
- **BRAND-03 — Horizontal:** üç direction'da mevcut master row korunur; KPSS sağda ikincildir. 160/240/320 px toplam genişlik light ve family-board dark sunumuyla incelendi. Status Review.
- **BRAND-04 — Stacked:** K üstte, mevcut Kavriva wordmark altında, KPSS daha küçük alt satırda. K ve wordmark aynı uniform source scale ile düzenlenir. Status Review.

## QA / açık sınırlamalar

- Kaynak SHA256: `0dcbcd704014a0cec8a6f40a9fe6917ffe954ca4123e3b1a723aed8c222ea98d`; Batch 01 ile aynı.
- Native wordmark crop pixel equality PASS. K/master crop dosyaları Batch 01'den değiştirilmeden kullanıldı.
- Redraw, simplify, trace, non-uniform scale ve wordmark retype: uygulanmadı.
- 21 SVG render'da text canvas overflow 0. Üç family-board görsel olarak incelendi. C primary'de alt satırın nefes alanı teslim öncesinde düzeltildi.
- Her üç asset/direction için light/dark Review PNG ve editable presentation SVG hazır. KPSS label `<text>` olarak kalır.
- SVG'ler raster logo artwork içerir; gerçek vector logo export değildir. **Final Production Vector Export = Pending**; **source asset needed**.
- Indigo/white solid kontrast 6.29:1; production color token veya bütün UI erişilebilirlik onayı değildir.
- 160 px toplam product-lockup genişliğinde KPSS label her üç yönde de küçük ve sınırlıdır (A≈6.7, B≈5.8, C≈5.6 px font-size). 240 px A≈10.1, B≈8.7, C≈8.4; 320 px A≈13.5, B≈11.6, C≈11.2. Bunlar dış padding hariç gerçek mark footprint testleridir.
- 160 px master logo güvenli raster review boyutu kalır; product lockup minimumu veya kalıcı marka minimumu sayılmaz. Ürün etiketi gerektiğinde küçük yüzeylerde seçilen direction'ın kullanım boyutu/yerleşimi ayrıca optimize edilecek; K ve wordmark geometrisi değişmeyecek.
- Figma structure/variables/native text/registry **Pending**. Figma yazma işlemi yapılmadı.
- Checklist: BRAND-02/03/04 `Planned → In Production → Review`. Approved yok. Batch 03 başlatılmadı.

## Dosyalar ve tekrar üretim

`assets/brand/batch-02/review/`: 3 direction × 3 asset × 2 light/dark presentation = 18 SVG + 18 PNG; ayrıca 3 family-board SVG + 3 PNG. Toplam 42 review dosyası; envanterde yalnız üç asset.

Dosyalar `{ASSET_ID}__kavriva-kpss-lockup__direction-{a|b|c}-{light|dark|family-board}__v01.ext` standardını kullanır. Family-board'lar BRAND-02 kimliğiyle bütün üçlü sistemi gösterir; ayrı asset üretmez.

`build-directions.cjs` teknik kompozisyon script'i; `direction-qa.json` ölçü ve kaynak kanıtı; `asset-registry.json` local durum takibidir. Canonical brief'ler Prompt Pack BRAND-02/03/04; kaynak sırası AI Batch Plan Batch 02; üst katman Master Creative Direction ve PRODUCT_PLAN marka kararlarıdır. Generative image model kullanılmadı; native artwork yalnız yerleşim ve editable product text ile sunuldu.

Owner'ın A/B/C seçimi bekleniyor. Seçimden önce final direction, Approved asset veya Batch 03 yok.
