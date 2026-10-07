# Kavriva KPSS — Phase 3 Build Spec / State Matrix

Owner tarafından yalnız Phase 3 — Exam / Insight yetkilendirildi. Bağlantı yenilendi; actual native read/write **PASS**. Build tamamlandı ve **Review** durumunda; Owner Phase 3 acceptance Pending. [Phase 3 Review](../FIGMA_PHASE_3_REVIEW.md) ve [actual native state](PHASE_3_NATIVE_STATE.json) sonuç kaydıdır.

Canonical source: [Figma](https://www.figma.com/design/uNreojzi7JNDunoVUoboaH/Kavriva-KPSS?node-id=0-1). Kabul edilen Phase 1–2 foundations/components aynen reuse edilir. PRODUCT_PLAN §§19–21, Exam Blueprint ve evidence/readiness kararları uygulanır.

## Native assembly sırası

1. Mevcut native canvas ve component mapping read; Phase 1–2 Owner Decision metadata sync.
2. Eksik reusable patterns için önce library component/variants; sonra screen instances. Mevcut variable, text style, icon, card, navigation, feedback ve Question/Answer components reuse.
3. Denemeler → mode seçimi / exam profile → Real Exam → submit / result → insight / statistics → optional hedef → çok boyutlu readiness.
4. Light/Dark 390 px; 320 px narrow ve long Turkish wrapping QA.
5. SCREEN_INVENTORY ve actual node registry güncellemesi; FIGMA_PHASE_3_REVIEW.md yalnız üretim ve QA sonrası. Sonunda DUR / Owner review.

## Screen scope / assembly plan

Aşağıdaki ID'ler UI screen ID'dir; 87 Asset ID envanterine yeni asset eklemez. Native build'de **Review**'a getirildi. EXAM-14/15 ayrı Study confirmation/submitted, MRESULT-08 Study result ve EXAM-04-A/B/D/E exclusive selection eklendi. Actual inventory: 62 Light + 62 Dark + 10 narrow + 4 supplemental text-scale = **138**; bütün node ID'leri [registry](SCREEN_REGISTRY.json) içindedir.

| Screen ID | Yüzey / state | Amaç |
|---|---|---|
| MOCK-01 | Denemeler / Default | Full, branş, devam eden ve geçmiş girişleri |
| MOCK-02 | Full KPSS / Unstarted | Kullanıcının tür/dönem profiline uygun deneme |
| MOCK-03 | Branş denemeleri | Dersler ve şablona bağlı soru/süre |
| MOCK-04 | Deneme geçmişi / Completed | Gerçek Sınav ve Çalışma Modu ayrı etiket |
| MOCK-05 | Devam eden | Aynı oturuma geri dönüş; gerçek mod süreyi durdurmaz |
| MOCK-06 | Loading | Şablon/content kontrolü |
| MOCK-07 | Empty | Henüz deneme yok; dürüst başlangıç |
| MOCK-08 | Error | Liste yükleme / tekrar dene |
| MOCK-09 | Insufficient content | Uygun Exam-Grade havuz yok; begin disabled |
| MOCK-10 | Offline start unavailable | Başlatmak için internet gereksinimi |
| MOCK-11 | Partial Data | Güncel liste yok / cache eski bilgisi |
| EXAM-01 | Exam profile / mode seçim | Blueprint context, Study vs Real ayrımı |
| EXAM-02 | Real Exam start confirmation | Süre, internet, pause yok ve oturum snapshot |
| EXAM-03 | Real Exam / Unanswered | Timer, soru, yanıtlar, autosave, connection |
| EXAM-04 | Real Exam / Selected | Exclusive mutable answers; doğruluk yok |
| EXAM-05 | Question navigator | Answered/unanswered/flagged/current; ders/bölüm |
| EXAM-06 | Temporary offline | Timer devam; cihaz saved / server sync pending |
| EXAM-07 | Reconnecting | Sunucu deadline ile süre mutabakatı |
| EXAM-08 | Save / sync error | Cihaz kaydı ve sunucu kaydı ayrımı; retry |
| EXAM-09 | Finish confirmation | Answered/blank, submit ve geri dön |
| EXAM-10 | Submit pending | Sonuç henüz doğrulanmadı |
| EXAM-11 | Time expired | Süre bitti; final submit / sync sonucu beklenir |
| EXAM-12 | Submitted success | Server acknowledgement sonrası result |
| EXAM-13 | Study Mode | Esnek çalışma ve ayrı evidence etiketi |
| MRESULT-01 | Mock Result / Default | Net/doğru/yanlış/boş/süre, subject breakdown |
| MRESULT-02 | Result analysis | Hız/doğruluk, güçlü/zayıf alan ve kanıt |
| MRESULT-03 | Question review | Tamamlanma sonrası verified solution |
| MRESULT-04 | Score estimate / range | Tahmini band + confidence; resmî puan değildir |
| MRESULT-05 | Insufficient score evidence | Güvenilir tahmin için yeterli veri yok |
| MRESULT-06 | Partial / processing result | Akademik sonuç ile eksik analizi ayır |
| MRESULT-07 | Result error / offline | Last synced bağlamı; yeni sonuç iddiası yok |
| STATS-01 | Statistics / 30 Gün | Önce anlamlı kişisel insight |
| STATS-02 | 7 Gün | Aynı period pattern |
| STATS-03 | 3 Ay | Aynı period pattern |
| STATS-04 | Tümü | Aynı period pattern |
| STATS-05 | Ders/konu performansı | Human labels, soru türü/zorluk/kanıt |
| STATS-06 | Hız ve çalışma | Speed + accuracy birlikte; activity breakdown |
| STATS-07 | Deneme trendi | Difficulty/context farkını açıkla |
| STATS-08 | Wrong / review analysis | Boş ayrı; neden yalnız gerçek feedback örnekleri |
| STATS-09 | Loading | Metric placeholder / sahte veri yok |
| STATS-10 | Empty / Insufficient Data | Henüz yeterli veri yok |
| STATS-11 | Error | Safe retry |
| STATS-12 | Offline / Partial Data | Son eşitlenen veri / güncellik uyarısı |
| TARGET-01 | No target | Opsiyonel; hedefsiz kullanım devam |
| TARGET-02 | Create target | Net target + optional score, period/type context |
| TARGET-03 | Edit target | Eski context/history korunur |
| TARGET-04 | Saved | Pressure/guilt yok; changed goal ≠ readiness |
| TARGET-05 | Error / offline pending | Kaydetme sonucu dürüstçe ayrılır |
| READY-01 | Readiness / Evidence | Beş ayrı boyut, aggregate fake yüzde yok |
| READY-02 | Limited Data | “Henüz yeterli veri yok” |
| READY-03 | Partial Data | Bazı boyutlarda evidence var, diğerlerinde yok |
| READY-04 | Loading | Pending evaluation |
| READY-05 | Error | Son geçerli görünüm / retry |
| READY-06 | Offline / stale | Son eşitlenen evidence tarihi, güncellik sınırı |
| READY-07 | Next recommendation | Academic-first isteğe bağlı sonraki adım |

## State matrix

| Yüzey | Loading | Empty | Error | Offline | Partial Data | Insufficient Data | Success |
|---|---|---|---|---|---|---|---|
| Mocks | MOCK-06 | MOCK-07 | MOCK-08 | MOCK-10 | MOCK-11 | MOCK-09 | MOCK-04 / completed |
| Real Exam | Start/profile kontrolü + EXAM-10 submit | Aktif oturum yok: MOCK-01'e dön | EXAM-08 | EXAM-06; start MOCK-10 | EXAM-07/10: save/sync sonucu beklenir | MOCK-09 start disabled | EXAM-12 yalnız server acknowledgement |
| Statistics | STATS-09 | STATS-10 | STATS-11 | STATS-12 | STATS-12 | STATS-10 | STATS-01–08 insight/evidence |
| Readiness | READY-04 | READY-02 | READY-05 | READY-06 | READY-03 | READY-02 | READY-01; boyutlar ayrı, blanket “hazırsın” yok |

Bu states anlamına uygun kullanılır: started Real Exam'de question set sessizce boşaltılmaz; invalid pool başlatma öncesinde ele alınır. Offline ve success aynı kaydın kanıtı sayılmaz.

## Real Exam / Study Mode kuralları

Real Exam'de pause, AI, social, immediate correctness ve answer reveal bulunmaz. Kullanıcı ileri/geri gidebilir, cevabı değiştirebilir ve soruyu işaretleyebilir. Submit action “Sınavı Bitir”. Exam timer start/deadline sunucu otoritesine dayanır; app kapanması/arka plana geçiş süreyi durdurmaz. Temporary offline timer devam eder; cihaz autosave ile sunucu acknowledgement ayrı gösterilir. Yeni sınav başlatmak için internet gerekir. Time expired ve offline final submit sonucu Pending olabilir; başarı/XP uydurulmaz.

Study Mode ayrı etiket, esnek çalışma, daha düşük Real Exam Evidence ağırlığı ve ayrı trend kategorisi taşır. Study Mode performansı gerçek sınavla eşdeğer gösterilmez.

## Blueprint ve demo içerik

Kullanıcı-facing KPSS türü, dönem, GY/GK sınav profili ve resmi/tahmini tarih statüsü; internal version ID yok. Aktif/geçmiş attempt kendi snapshot context'ini korur. Net kuralı/soru adedi/süre ve score type dinamik blueprint verisidir.

Canonical planın 120 soru / 130 dakika örneği kullanılacaksa **örnek sınav profili** olarak etiketlenir; canlı resmi tarih/şablon doğrulaması iddia edilmez. Resmi bilgi olarak sunulacak değerler güncel official kaynakla ayrıca doğrulanmalıdır. Branş adet/süre gerçek content şablonundan gelir. Gerçek deneme bankası veya academic validation varmış gibi görünüm üretilmez.

## Insight / statistics / hedef / readiness

Measured net ile estimated score ayrı alanlar. Estimate yalnız range + confidence; exact resmi puan yok. Insufficient state sahte aralık üretmez. Demo band gösterimi açıkça örnek UI data'dır; production model sonucu değildir.

Statistics periods 7 Gün / 30 Gün / 3 Ay / Tümü. Personal performance, net, accuracy, speed, activity, mock trend, wrong/review, subject, question type, difficulty ve confidence/evidence katmanlıdır. Tek analytics dashboard içinde chart yığını değil, anlamlı insight ve sonraki akademik öneri ana hiyerarşidir. DataViz native shapes + editable labels/table; color tek bilgi taşıyıcısı değildir.

Hedef opsiyonel. Net / optional score, exam period/type context, create/edit/no-target/saved. Hedefe ulaşma garantisi, atanma olasılığı veya guilt/quota yok.

Readiness boyutları: Coverage / Kapsam, Confidence / Kanıt güveni, Retention / Hatırlama, Real Exam Evidence / Gerçek sınav kanıtı, Timing / Zaman yönetimi. Kısıtlı/güncelliğini yitirmiş evidence açıkça gösterilir. Hidden 0–110 mastery UI'da yok; fake “Atanmaya %82 hazırsın” yok.

## Reuse / actual patterns

Mevcut library yeniden oluşturulmadı. 12 — Product Patterns üzerinde 10 set / 41 variant eklendi: Exam Summary, Exam Context, Exam Session Status, Mock Result Summary, Statistics Insight, Readiness Dimension, Score Estimate, Goal Summary, Period Filter ve Trend Chart. Period Filter Row/Compact × dört dönemdir. Bütün UI text editable, surfaces/tipografi variable-bound; SVG/raster whole-screen dump yok. Phase 1–2 snapshot ve güncel file-wide count ayrı raporlanır.

## QA / stop gate

390 px Light/Dark + 320 px uzun Türkçe metin, native Auto Layout wrapping/scrolling, primary CTA ve navigation tutarlılığı, focus/touch targets, semantic contrast, score/net ayrımı, exam prohibited controls ve deadline/offline states kontrol edilir. Prototype server davranışını çalıştırmış gibi gösterilmez; timer/sync/academic validation implementation acceptance ayrı kalır.

PHASE 3 REVIEW tamamlandı; DUR / Owner review Pending. Phase 4–7, MKT-01–06 ve Batch 21/22 başlamadı. P-01–P-06 Open. Asset state 87 total / 81 Approved for Design Direction / 6 Marketing Planned ve vector/export/handoff Pending ayrımı korunur. Supplemental 200% fixtures reading content/title ölçekler; OS status ve bottom navigation Standard kalır. Native prototype backend/server veya academic validation implementasyonu değildir.
