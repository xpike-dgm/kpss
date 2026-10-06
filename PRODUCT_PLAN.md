# KPSS Çalışma Platformu — Ürün Planı

> Bu belge, proje hakkında yapılan konuşmalarda kararlaştırılmış ürün kararlarını kalıcı olarak tutar. Yeni kararlar netleştikçe güncellenecektir.

## 1. Projenin amacı ve kalite hedefi
- Proje ticari amaçlı değildir.
- Kişisel kullanım ve arkadaşların kullanımı için geliştirilecektir.
- Ticari olmaması kalite hedefini düşürmeyecektir.
- Hedef; mümkün olduğunca profesyonel, kapsamlı, güvenilir, modern ve uzun süre kullanılabilir bir KPSS çalışma platformu oluşturmaktır.
- Geliştirmeye hemen başlanmayacak; önce ürünün çalışma mantığı ve özellikleri aşamalı olarak planlanacaktır.

## 2. Sınav kapsamı
Platformun odağı KPSS Genel Yetenek – Genel Kültür olacaktır.

Kullanıcı kayıt sırasında hangi sınava hazırlandığını zorunlu olarak seçecektir:
- KPSS Ortaöğretim
- KPSS Önlisans
- KPSS Lisans

Bu seçim soru seçimi, içerik derinliği, zorluk seviyesi ve adaptif sistem tarafından dikkate alınacaktır.

## 3. İlk kayıt / onboarding
Kayıt yalnızca e-posta ve şifre formu olmayacak; kullanıcının başlangıç çalışma profilini oluşturacaktır.

Zorunlu başlangıç bilgileri:
- Hazırlandığı KPSS türü
- Ders bazında kendi mevcut seviyesi

Dersler için başlangıç seviyeleri:
- Hiç bilmiyorum
- Başlangıç
- Orta
- İyi
- Çok iyi

Hedef puan, günlük çalışma süresi, önceki KPSS deneyimi ve çalışma aşaması gibi ek sorular ileride değerlendirilebilir; henüz kesin değildir.

## 4. Adaptif konu bazlı seviye sistemi
Kullanıcının gerçek seviyesi yalnızca ders bazında tutulmayacaktır. Her konu için ayrı bir gizli seviye puanı olacaktır.

Örnek:
- Matematik / Temel Kavramlar
- Matematik / Problemler
- Matematik / Oran-Orantı
- Türkçe / Paragraf
- Tarih / Osmanlı Kültür ve Medeniyet

Ders seviyesi daha sonra konu seviyelerinden türetilen bir üst seviye özet olarak kullanılabilir.

### Başlangıç puanı
Kullanıcının kayıt sırasında seçtiği ders seviyesi, o dersteki konuların ilk puanı için başlangıç tahmini oluşturur.

| Seviye | Başlangıç puanı |
|---|---:|
| Hiç bilmiyorum | 20 |
| Başlangıç | 40 |
| Orta | 60 |
| İyi | 80 |
| Çok iyi | 100 |

- Maksimum konu puanı: 110
- Puan kullanıcıya doğrudan gösterilmeyecektir.
- Bu değer sistemin soru seçimi ve adaptasyonu için kullanılacaktır.
- Kayıttaki seçim gerçek seviye değil, ilk tahmindir.

## 5. Hızlı kalibrasyon sistemi
Kullanıcının kendi seviyesini yanlış değerlendirmesi normal kabul edilir. Bu nedenle her konu için ilk sorularda puan değişimi daha yüksek olacaktır.

| O konuda çözülen benzersiz soru | Doğru | Yanlış |
|---|---:|---:|
| 1–10 | +5 | -5 |
| 11–20 | +3 | -3 |
| 21–30 | +2 | -2 |
| 31+ | +1 | -1 |

Amaç:
- İlk 10 soruda hızlı seviye aramak
- 11–20 arasında aralığı daraltmak
- 21–30 arasında ince ayar yapmak
- 30 sorudan sonra stabil gelişim sistemine geçmek

Kurallar:
- Kalibrasyon sayacında benzersiz sorular esas alınacaktır.
- Aynı sorunun tekrar çözülmesi ilk 30 soruluk kalibrasyon sayacını ilerletmeyecektir.
- 10 soruluk test sırasında verilen cevaplar test teslim edilene kadar geçici kabul edilir; kullanıcı önceki sorulara dönüp cevabını değiştirebilir.
- Test içindeki sorular, test başındaki güncel gizli seviyeye uygun seçilir. Test sürerken geçici cevaplar nedeniyle kalıcı gizli seviye değiştirilmez.
- Kullanıcı **“Testi Bitir”** dediğinde yalnızca nihai cevaplar kalibrasyon kurallarına göre işlenir ve gizli seviye güncellenir.
- Sonraki 10 soruluk test, test sonunda oluşan yeni gizli seviyeye göre hazırlanır.
- Puan 0–110 sınırları içinde tutulacaktır.

Örnek: Kullanıcı Matematik için “Orta” seçti ve Temel Kavramlar 60 puanla bir 10 soruluk teste başladı. Test boyunca cevaplarını değiştirebilir ve kalıcı puanı 60 olarak kalır. Test teslim edildiğinde nihai cevaplar ilgili +5/-5, +3/-3, +2/-2 veya +1/-1 kurallarıyla işlenir. Örneğin test sonunda gizli seviye 70 olduysa bir sonraki test 70 civarındaki seviyeye uygun sorulardan hazırlanır.

## 6. Seviye güveni / örnek sayısı
Sistem yalnızca konu puanını değil, o puanın ne kadar güvenilir olduğunu da bilmelidir.

Örneğin `topic_score = 68, unique_answer_count = 7` ile `topic_score = 68, unique_answer_count = 80` aynı kesinlikte değerlendirilmemelidir.

Bu güven bilgisi kullanıcıya puan olarak gösterilmek zorunda değildir; adaptif soru seçimi ve analiz sistemi için kullanılacaktır.

## 7. Soru zorluk sistemi
- Her sorunun konu bilgisi olacaktır.
- Her sorunun gizli bir zorluk skoru / seviyesi olacaktır.
- Kullanıcının konu seviyesi ile soru seviyesi eşleştirilerek uygun soru seçilecektir.
- Kullanıcı yalnızca kolay sorularla değil, seviyesine yakın ve gelişmeye açık sorularla karşılaşacaktır.
- Soru zorluk puanının kesin hesaplama yöntemi henüz tamamlanmamıştır.

## 8. Jev AI kullanımı
Jev, sistemin matematiksel kurallarının yerine geçmeyecektir.

Jev için planlanan görevler:
- Sorunun konu / alt konusunu sınıflandırmak
- Sorunun zorluk seviyesini başlangıçta tahmin etmek
- Soru tipini sınıflandırmak
- Çeldirici gücü ve bilişsel zorluk gibi nitelikleri değerlendirmek
- KPSS seviyesine uygunluğunu değerlendirmek
- Kod tarafından önceden filtrelenmiş aday sorular arasından uygun seçimlerde yardımcı olmak

Jev'in yapmayacağı işler:
- Kullanıcının +5/-5, +3/-3, +2/-2, +1/-1 puan değişimini belirlemek
- Temel seviye matematiğini yönetmek
- Kesin sistem kurallarını tek başına değiştirmek

Yaklaşım:
- Kod: kesin kurallar, puanlama, sınırlar ve matematik
- Jev: sınıflandırma ve sınırlı karar problemleri
- LLM: açıklama, öğretim, çözüm anlatımı ve koçluk gibi açık uçlu görevler

## 9. AI tahmini ve gerçek kullanım verisi
Yeni sorularda yeterli kullanıcı verisi olmayacağı için AI başlangıç zorluk tahmini yapabilir.

Uzun vadede gerçek kullanıcı çözüm verileri daha değerli kabul edilecektir:
1. Yeni soru sisteme eklenir.
2. Jev / ilgili model başlangıç zorluğu tahmini verir.
3. Kullanıcılar soruyu çözer.
4. Yeterli veri oluştuğunda gerçek başarı oranı ve kullanıcı seviyeleri analiz edilir.
5. Sorunun gerçek zorluğu kullanım verileriyle yeniden kalibre edilir.

AI özellikle cold-start aşamasında yardımcı olur; sistem zamanla kendi verisiyle daha doğru hale gelir.

## 10. Ürün prensipleri
1. Kullanıcının seviyesini kendi beyanına kalıcı olarak bağlama.
2. Seviyeyi ders yerine mümkün olduğunca konu bazında takip et.
3. Arka plan puanlarını kullanıcıya göstermek zorunda kalma.
4. İlk kullanımda hızlı kalibrasyon, sonrasında stabil gelişim sağla.
5. Her tamamlanmış testten sonra sistem kullanıcı hakkında biraz daha doğru hale gelsin.
6. Rastgele soru yığını yerine seviyeye ve ihtiyaca uygun soru sun.
7. AI'ı kesin matematiksel kuralların yerine değil, belirsiz sınıflandırma ve karar noktalarında kullan.
8. Gerçek kullanım verisi oluştuğunda AI tahmininden daha fazla ağırlık ver.
9. Proje ticari olmadığı için profesyonel kalite hedefinden taviz verme.
10. Kullanıcı kendi iradesiyle çalışır; sistem günlük zorunlu çalışma saati veya baskıcı kota dayatmaz.
11. Platformun görevi kullanıcıyı zorlamak değil; çalışmasını kolaylaştırmak, daha verimli hale getirmek, gelişimini takip etmek ve doğru yönlendirmelerle gelişimini desteklemektir.
12. Sistem çalışma süresini ölçebilir ve kullanıcıya ne kadar çalıştığını gösterebilir; ancak bunu “bugün şu kadar saat çalışmak zorundasın” biçiminde kullanmayacaktır.

## 11. Dashboard ve oyunlaştırma yönü — kısmen kararlaştırıldı
- Dashboard'un ana görevi kullanıcıya “şimdi ne çalışabilirim / sıradaki mantıklı adım ne?” sorusunun cevabını hızlıca vermek olacaktır.
- Kullanıcının iş, günlük hayat ve KPSS hazırlığını aynı anda yürüttüğü kabul edilecektir; çalışma deneyimi gereksiz yere sıkıcı veya ağır hissettirilmemelidir.
- Dashboard önerici olacaktır; kullanıcıya günlük çalışma süresi veya çalışma miktarı zorunluluğu dayatmayacaktır.
- Oyunlaştırma projede bilinçli biçimde kullanılacaktır. Amaç yalnızca ödül dağıtmak değil, ders çalışmayı daha keyifli, sürükleyici ve devam ettirilebilir hale getirmektir.
- Profesyonellik ile eğlence birbirinin karşıtı kabul edilmeyecektir. Site ciddi bir sınava hazırlık aracı olurken aynı zamanda kullanıcının çalışmaktan keyif almasını hedefleyecektir.
- XP, seri, görevler, başarımlar, görsel ilerleme, seviyeler ve benzeri mekaniklerin tam biçimi henüz kararlaştırılmamıştır; ayrı oyunlaştırma başlığında detaylandırılacaktır.
- Gizli akademik seviye puanı ile kullanıcıya gösterilen oyunlaştırma/ödül puanları birbirine karıştırılmayacaktır.

## 12. Günlük çalışma sistemi — kısmen kararlaştırıldı
- Günlük çalışma sistemi kullanıcının kendi isteğiyle başlattığı çalışma oturumlarını destekleyecektir; sistem kullanıcıya “bugün X saat çalışmalısın” zorunluluğu koymayacaktır.
- Kullanıcı siteye ne zaman isterse gelir, istediği kadar ilerler ve istediği noktada bırakabilir.
- Sistem kullanıcının o gün ve geçmişte ne kadar süre çalıştığını gösterebilir.
- Kullanıcı kısa zaman aralıklarında da verimli çalışabilmelidir; çalışma tek bir uzun oturum olmak zorunda değildir.
- Aynı gün içindeki çalışma farklı zamanlara bölünebilir ve sistem ilerlemeyi kaldığı yerden devam ettirmelidir.
- Büyük çalışmalar mümkün olduğunca küçük, anlaşılır adımlara bölünebilir; ancak bunlar zorunlu günlük kota olarak sunulmayacaktır.
- Sistem yeni öğrenme, pekiştirme, adaptif soru çözme ve tekrar türlerini desteklemelidir.
- Kaçırılan gün kavramı cezalandırıcı biçimde kullanılmayacaktır; kullanıcı çalışmadığı için borç veya birikmiş görev baskısı yaşamamalıdır.
- Platform, kullanıcının ne kadar ilerlediğini ve neyin sırada mantıklı olduğunu takip eder; son karar kullanıcıdadır.

### Konu öğrenmeden soru çözmeye geçmeme prensibi
- Kullanıcı bir konuyu bilmiyorsa, o konunun soru çözme aşamasına geçmeden önce konu anlatımını tamamlamalıdır.
- Konu anlatımı bitmeden o konuya ait normal/adaptif soru çözümü başlatılmamalıdır; bilmediği bilgiyi soru üzerinden tahmin etmeye zorlamak öğrenme modeli olarak kabul edilmeyecektir.
- Kullanıcı konuyu zaten bildiğini belirtiyorsa konu anlatımını izlemek zorunlu değildir; doğrudan soru/kalibrasyon aşamasına geçebilir.
- Platform kendi konu anlatım videolarını üretmek veya video dosyalarını kendi sunucusunda barındırmak zorunda değildir.
- Ana model, uygun KPSS konu anlatım videolarını YouTube üzerinden seçmek ve mümkün olduğu durumlarda resmi YouTube gömülü oynatıcısıyla ders sayfası içinde izletmektir.
- Böylece video YouTube altyapısında kalırken kullanıcı mümkün olduğunca siteden çıkmadan konu çalışabilir.
- Bir video gömülmeye izin vermiyorsa, kaldırılmışsa, gizliye alınmışsa veya erişilemiyorsa kullanıcıya doğrudan YouTube bağlantısı ve mümkünse alternatif video gösterilmelidir.
- Platform YouTube videolarını indirmeyecek, kopyalamayacak veya kendi sunucusundan yeniden yayınlamayacaktır.
- YouTube embed kullanılması telif sorumluluğunun tamamen ortadan kalktığı anlamına gelmez; resmi YouTube oynatıcısı ve YouTube'un kullanım/oynatıcı politikaları çerçevesinde hareket edilecektir.
- YouTube IFrame Player API kullanılırsa oynatma durumu ve mevcut zaman gibi verilerden yararlanılarak kullanıcının kaldığı konuma geri dönmesi kolaylaştırılabilir; ancak bu veri tek başına “konuyu öğrendi” kanıtı sayılmayacaktır.
- YouTube politikaları nedeniyle video izleme, beğenme, paylaşma veya kanala abone olma gibi YouTube etkileşimlerine doğrudan XP/ödül bağlanmayacaktır. Oyunlaştırma ödülleri video sonrası öğrenme kontrolü, soru çözümü veya gerçek çalışma davranışlarına bağlanabilir.
- Bazı konu videolarının 1–2 saat veya daha uzun olabileceği kabul edilerek, kullanıcı videoyu farklı oturumlarda tamamlayabilmelidir.
- Uzun videolar için YouTube chapter'ları varsa kullanılabilir; yoksa platform kendi çalışma arayüzünde ilerleme/kaldığın yer mantığı sağlayabilir.
- Konu öğrenme tamamlandıktan sonra pekiştirme ve adaptif soru çözümü başlar.
- İlk 30 soruluk hızlı akademik kalibrasyon konu öğrenildikten sonra veya kullanıcı “bu konuyu biliyorum” diyerek öğrenme aşamasını geçtiğinde devreye girer.

## 13. Çalışma programı motoru — kararlaştırıldı
- Çalışma motoru kullanıcıya zorunlu saat veya katı günlük program dayatmak yerine, mevcut durumda en mantıklı çalışma yönünü önerecektir.
- Motor kullanıcıdan “kaç dakikan var?” veya benzeri bir müsait süre girdisi istemeyecektir. Kullanıcı ne kadar çalışmak isterse o kadar çalışır; süre, öneri motorunun kullanıcıdan talep ettiği bir planlama parametresi değildir.
- Öncelik karşılaştırması yalnızca konu bazındaki anlık net getirisine göre yapılmayacaktır. Ana bakış; **dersin genel sınav değeri, kullanıcının o dersteki mevcut ilerlemesi ve dersin öğrenme sırası** olacaktır.
- Konu bazındaki geçmiş soru sıklığı, gizli seviye ve beklenen net kaybı yardımcı sinyallerdir; ancak ders içi öğrenme yolunu bozacak kadar baskın olamaz.
- Bir ders içindeki temel/önkoşul konular, doğrudan az soru getiriyor olsalar bile sonraki öğrenmeyi mümkün kılıyorsa düşük öncelikli sayılmayacaktır.
- Gereken derslerde konu önkoşul ağı / öğrenme yolu tanımlanacaktır. Öncelik puanı bu yapıyı geçersiz kılamaz.
- Yeni öğrenilen bir konu pekiştirilmeden çok sayıda bağımsız önerinin arkasına düşmemelidir. Konu anlatımı sonrasında kısa sürede pekiştirme ve adaptif soru çözümü önerilmelidir.
- Kullanıcı bir konuyu tamamladıktan sonra aynı dersin sonraki konusunu önermeden önce mevcut konuda yeterli öğrenme kanıtı aranacaktır.
- **Tüm kullanıcılar için sabit bir `60` geçiş eşiği kullanılmayacaktır.** 0–20 seviyesindeki kullanıcıyı sırf evrensel eşik nedeniyle 60'a taşımaya çalışmak ile 60 seviyesindeki kullanıcıyı geliştirmek aynı yük değildir.
- Geçiş değerlendirmesi iki ana şartı birlikte kullanacaktır:
  1. **Kişisel gelişim hedefi:** Kullanıcının gerçek sorularla doğrulanmış başlangıç seviyesine göre anlamlı ilerleme göstermesi. Başlangıç kuralı olarak yaklaşık `+20` puanlık gelişim düşünülecektir; 110 üst sınırdır.
  2. **Sonraki konunun önkoşul yeterliliği:** Yeni konu mevcut konudan belirli bir bilgi düzeyi gerektiriyorsa, kullanıcı bu minimum yeterliliğe de ulaşmış olmalıdır.
- Örneğin doğrulanmış başlangıcı 10 olan kullanıcı için kişisel hedef yaklaşık 30 olabilir. Sonraki konu mevcut konudan en az 40 düzeyinde yeterlilik gerektiriyorsa sistem 30'da gelişimi başarılı kabul eder fakat sonraki konuyu önermeden önce 40'a kadar mevcut konuyu güçlendirmeyi önerebilir.
- Doğrulanmış başlangıç seviyesi, onboarding beyanından gelen ilk puanla aynı şey değildir. Geçiş kararında gerçek benzersiz soru performansı ve seviye güveni dikkate alınmalıdır.
- Bir kullanıcı yüksek seviyede başlıyorsa sistem düşük bir sabit eşikle “zaten yeterlisin” dememelidir; yüksek seviyeli kullanıcıdan da kendi başlangıcına göre anlamlı gelişim beklenmelidir.
- Sonraki konunun önerilmesi mevcut konunun tamamen bittiği anlamına gelmez. Eski konu daha sonra tekrar/unutma sistemi üzerinden korunur ve geliştirilmeye devam eder.
- Bu kurallar öneri motorunu yönetir; kullanıcının özgür çalışma prensibi korunur ve kullanıcı isterse farklı bir konuya manuel olarak gidebilir.
- `+20` gelişim miktarı başlangıç ürün kuralıdır; gerçek kullanım verileri ileride bunun konu türüne veya seviyeye göre ayarlanmasının daha doğru olduğunu gösterirse kalibre edilebilir.
- Sınava kalan süre motor için sürekli değişen bir **zaman baskısı** girdisidir; katı dönemler veya “şu tarihten sonra yeni konu yasak” gibi sert eşikler kullanılmayacaktır.
- Sınava uzun süre varken temel kurma, yeni konu öğrenme ve kapsamı genişletme daha değerli kabul edilir. Sınav yaklaştıkça tekrar, pekiştirme, yanlışlar, denemeler ve kısa sürede yüksek fayda sağlayabilecek çalışmaların ağırlığı artar.
- Sınava çok az süre kalmış olsa bile kısa sürede öğrenilebilecek ve anlamlı sınav faydası sağlayabilecek yeni bir konu otomatik olarak dışlanmaz; zaman baskısı yalnızca öncelikleri değiştirir.
- Dersler arasında mekanik eşit zaman dağıtımı yapılmayacaktır; ancak bir ders uzun süre anlamlı biçimde çalışılmadığında **ihmal baskısı / ihmal bonusu** ile önceliği kademeli olarak yükselir.
- Kullanıcının yakın zamanda sürekli aynı derse çalışması, o dersin global öneri avantajını bir miktar azaltabilir; böylece diğer önemli derslerin uzun süre görünmez hale gelmesi engellenir.
- Aktif öğrenme zinciri istisnadır: yeni öğrenilen bir konu henüz pekiştirilmemişse sırf ders dengesi sağlamak için zincir kesilmez. Önce gerekli ilk pekiştirme tamamlanır, sonra dersler arası denge yeniden değerlendirilir.

## 14. Soru çözme deneyimi — kararlaştırıldı
- Ana soru çözme deneyimi tek tek “şıkkı seç → hemen cevapla” biçiminde olmayacaktır; kısa test mantığıyla ilerleyecektir.
- Standart kısa test başlangıçta **10 soru** olacaktır.
- Kullanıcı 10 soruyu sırayla yanıtlayacak, test bitmeden önce önceki sorulara dönebilecek ve verdiği cevabı değiştirebilecektir.
- Test sırasında soruların doğru/yanlış sonucu gösterilmeyecektir.
- Testin sonunda **“Testi Bitir”** eylemi bulunacaktır.
- Test teslim edildiğinde ayrı bir sonuç ekranı açılacak ve kullanıcının **doğru, yanlış ve boş** sayıları gösterilecektir.
- Sonuç ekranında yanlış yapılan sorular görülebilecek ve her yanlış soru için **“İncele”** eylemi bulunacaktır.
- Yanlış soru incelemesinde kullanıcının seçtiği yanlış şık kırmızı, doğru şık yeşil olarak belirgin gösterilecektir.
- İnceleme ekranında sorunun yazılı çözümü bulunacaktır.
- Çözümün yanında **AI'ya sor** seçeneği bulunacak; kullanıcı isterse o soru veya konu hakkında AI öğretmene takip sorusu sorabilecektir.
- Yanlış soru incelemesinde “Neden yanlış yaptım?” seçenekleri opsiyonel olarak sunulacaktır. Kullanıcıya bu geri bildirimin sistemin ve öğrenme içeriğinin daha iyi çalışmasına yardımcı olduğu açıkça belirtilecektir.
- Kullanıcıdan “eminim / emin değilim” bilgisi istenmeyecektir.
- Soru çözme sırasında kullanıcıya özel not alanı bulunabilir.
- Soru çözme sırasında karalama alanı bulunabilir.
- Adaptif sistem test performansıyla bağlantılı olacaktır; soru/test sonuçları kullanıcının gizli konu seviyesini ve öğrenme verilerini beslemeye devam edecektir.
- 10 soruluk test, test başındaki mevcut gizli seviyeye göre hazırlanacaktır. Test sırasında cevaplar değiştirilebildiği için geçici cevaplar kalıcı gizli seviye değişikliğine yol açmayacaktır.
- Kullanıcı **“Testi Bitir”** dediğinde nihai cevaplar topluca işlenecek ve gizli konu seviyesi güncellenecektir. Sonraki test güncellenmiş seviyeye göre hazırlanacaktır.
- **Normal 10 soruluk testlerde test bazlı geçen süre ölçülecektir.** Bu süre kullanıcıya gösterilebilir ve testin ne kadar sürdüğü kalıcı performans verisi olarak tutulacaktır.
- Mümkün olduğu ölçüde soru bazlı etkileşim/çözüm süreleri de arka planda tutulabilir; ancak soru ekranını gereksiz sayaçlarla doldurmak zorunlu değildir.
- Normal kısa testlerde süre varsayılan olarak bir sınav süresi kısıtı/deadline değildir; esas işlevi hız, verimlilik ve gelişim analizi için veri üretmektir.
- Test süre verileri kullanıcı istatistiklerinde, konu/soru türü bazlı hız analizinde, AI koç içgörülerinde, soru zorluğu/kalite değerlendirmesinde ve sistemin gerçek kullanım verisiyle geliştirilmesinde kullanılabilecektir.
- Süre tek başına akademik seviye puanını doğrudan değiştiren bağımsız bir kural olmayacaktır; doğruluk ve diğer performans sinyalleriyle birlikte yorumlanabilecek yardımcı veridir.
- Platformun genel çalışma kronometresi ayrıca toplam çalışma süresini takip etmeye devam edecektir; kullanıcı tarafından başlatılabilecek, duraklatılabilecek ve durdurulabilecektir. Test süresi ile genel çalışma süresi farklı amaçlara hizmet eder.
- Özel klavye kısayolları öncelikli ihtiyaç değildir ve planın temel parçası olmayacaktır.
- Kullanıcı hatalı, belirsiz, cevabı sorunlu veya görseli bozuk soruları bildirebilecektir.
- 10 soruluk test bittikten sonra kullanıcı isterse yeni bir teste geçerek çalışmaya devam edebilecektir.
- Gönderilen örnek ekranlar **görsel tasarım referansı değil, işlevsel/wireframe referansı** olarak kabul edilecektir; mevcut koyu renkli/yoğun görsel dil kopyalanmayacaktır.
- Masaüstünde soru içeriği ana odak olacaktır. 10 soruluk yapı için ağır bir 20 soruluk yan panel yerine, 1–10 arasındaki sorulara hızlı geçiş sağlayan daha kompakt ve zarif bir soru navigasyonu / ilerleme alanı kullanılacaktır.
- Cevaplanmış, boş ve kullanıcı tarafından işaretlenmiş sorular soru haritasında tek bakışta ayırt edilebilmelidir.
- Mobilde soru numaraları ekran alanını sürekli tüketmemelidir; `7 / 10` benzeri kompakt bir gösterge üzerinden açılan panel/bottom-sheet ile soru haritasına erişim sağlanabilir.
- Mobil ekranda öncelik her zaman **soru ve şıklar** olacaktır; arayüz öğeleri soru içeriğini gölgelemeyecektir.
- Üst bar mümkün olduğunca sade tutulacak; konu bilgisi, test ilerlemesi, test süresi/genel çalışma süresi ve gerekli ana eylemler net bir hiyerarşiyle sunulacaktır.
- Not, karalama ve soru işaretleme gibi ikincil araçlar erişilebilir olacak ancak ana soru alanıyla görsel olarak yarışmayacaktır.
- Normal kısa çalışma testlerinde eylem adı **“Testi Bitir”** olacaktır. **“Sınavı Bitir”** ifadesi yalnızca gerçek deneme/sınav simülasyonu modlarında kullanılacaktır.
- Nihai UI; daha güçlü tipografi, boşluk kullanımı, dokunma alanları, seçili şık durumları ve mobil uyumlulukla örnek görsellerden belirgin biçimde daha yüksek kalite hedefleyecektir.
- Soru çözme deneyiminin mimari düzeyde açık sorusu kalmamıştır. Boş soru uyarısının biçimi, not/karalama panelinin konumu ve benzeri küçük UX ayrıntıları geliştirme sırasında netleştirilebilir.

## 15. Soru bankasının yapısı — kararlaştırıldı
- Soru bankası yalnızca soru metni ve doğru cevabı tutan bir depo olmayacak; adaptif sistemin akademik veri kaynağı olarak tasarlanacaktır.
- Her soruda en az ders, konu, alt konu, mümkünse kazanım/beceri, uygun KPSS türü, soru tipi, gizli zorluk değeri, soru metni, varsa görsel/tablo, şıklar, doğru cevap, çözüm, kaynak, oluşturulma/güncellenme bilgisi ve kalite durumu tutulacaktır.
- İçerik sınıflandırması mümkün olduğunca **Ders → Konu → Alt konu → Kazanım/Beceri** hiyerarşisinde tutulacaktır. Gizli kullanıcı seviyesi her mikro kazanımda tutulmak zorunda değildir; ancak soruların ayrıntılı etiketlenmesi ileride zayıf alt alanların tespitini mümkün kılacaktır.
- Soru kaynakları üç ana grupta tutulabilir: resmî/geçmiş sınav kaynaklı sorular, insan tarafından hazırlanmış özgün sorular ve AI destekli üretilmiş özgün sorular.
- AI destekli oluşturulan soru doğrudan canlı bankaya girmeyecektir. İçerik yaşam döngüsü taslak/kontrol/onay/aktif benzeri aşamalarla yönetilecektir.
- Jev veya ilgili sınıflandırma modeli; ders, konu, alt konu, kazanım, soru tipi, ilk zorluk tahmini ve KPSS uygunluğu gibi alanları doldurmaya yardımcı olabilir. AI sınıflandırması tek başına nihai otorite olmayacaktır.
- Soru zorluğunda başlangıçta AI tahmini tutulabilir; yeterli kullanıcı verisi oluştuğunda gerçek kullanıcı performansından türetilen zorluk ve bu tahminin güveni daha önemli hale gelecektir.
- Gerçek zorluk değerlendirmesi yalnızca ham doğru yüzdesine bakmayacak; mümkün olduğunca soruyu çözen kullanıcıların seviyeleriyle birlikte yorumlanacaktır.
- Sistem kullanıcı-soru ilişkisini takip edecektir: sorunun daha önce görülüp görülmediği, doğru/yanlış/boş sonucu, tekrar çözümü ve işaretlenme durumu gibi bilgiler tutulacaktır. İlk 30 benzersiz soru kalibrasyonunda daha önce çözülen soru yeni soru sayılmayacaktır.
- Birbirinin yalnızca sayı veya küçük ifade değişikliği yapılmış kopyalarına aşırı yüklenmemek için soru çeşitliliği ve benzerlik ileride kalite sinyali olarak kullanılabilir.
- Soruların bilgi, yorum, işlem, problem çözme, grafik/tablo okuma, paragraf, çıkarım, kavram, kronoloji gibi soru/beceri türleriyle etiketlenmesi desteklenecektir.
- Canlı soru bankasındaki her sorunun kullanıcı inceleme ekranında kullanılabilecek açıklamalı bir çözümü bulunması hedeflenecektir.
- Kullanıcının bulduğu kaynak soruda hazır açıklamalı çözüm bulunmaması normal kabul edilecektir; kullanıcıdan ders bilgisiyle çözümü kendisinin yazması beklenmeyecektir.
- Hazır çözümü olmayan sorular için **AI açıklamalı çözüm üretebilecektir**. AI'ya soru metni, şıklar ve mevcutsa güvenilir doğru cevap/cevap anahtarı verilerek adım adım, anlaşılır bir çözüm oluşturulacaktır.
- AI tarafından üretilen çözüm doğrudan güvenilir kabul edilmeyecek; canlı kullanım öncesinde doğrulama zincirinden geçecektir.
- Kabul edilen doğrulama yaklaşımı: **üretici AI → bağımsız doğrulayıcı → mümkün olan yerde kod/simgesel kontrol → uyuşmazlıkta karantina/kontrol kuyruğu**.
- Doğrulayıcı model çözümü ve doğru cevabı bağımsız biçimde kontrol etmelidir; üretici model ile aynı hatayı tekrar etme riskini azaltmak için doğrulama mümkün olduğunca bağımsız yürütülmelidir.
- Matematik ve hesaplanabilir alanlarda mümkün olduğu ölçüde kod, formül veya simgesel hesapla ek doğrulama yapılmalıdır.
- Üretici AI, doğrulayıcı AI ve varsa kod/simgesel kontrol aynı sonuca ulaşmıyorsa soru/çözüm otomatik olarak canlı bankaya alınmayacak; kontrol/karantina durumunda kalacaktır.
- Eğer sorunun güvenilir doğru cevabı da bilinmiyorsa, yalnızca tek bir AI cevabına dayanarak soru otomatik aktif edilmemelidir; en az bağımsız doğrulama gerektiren taslak/kontrol durumunda kalmalıdır.
- Kullanıcı hata bildirimleri ve kullanım verileri soru kalitesini besleyecektir. Çok sayıda cevap hatası bildirimi, sıra dışı başarı dağılımı veya başka anormallikler soruyu inceleme kuyruğuna taşıyabilir.
- Sorular mümkün olduğunca silinip geçmiş veriyle bağ koparmak yerine sürümlenebilir; düzeltme sonrası yeni sürüm oluşturulması geçmiş kullanıcı çözüm kayıtlarının hangi soru sürümüne ait olduğunu korur.
- 10 soruluk adaptif test rastgele aynı seviyedeki 10 sorudan oluşmak zorunda değildir. Kullanıcının seviyesine yakın sorular temel ağırlığı oluştururken bir miktar daha kolay ve daha zor soru da seviye doğrulama/gelişim amacıyla kullanılabilir. Kesin dağılım gerçek kullanım verisi ve test kalitesi gözlendikçe ayarlanabilir.
- Soru bankasının mimari düzeyde açık sorusu kalmamıştır; ayrıntılı kalite operasyonları daha sonra İçerik Kalite Kontrolü ve Admin Paneli başlıklarında ele alınacaktır.

## 16. Konu öğrenme sistemi — kararlaştırıldı
- Konu öğrenme sistemi yalnızca video oynatıcı olmayacaktır; temel akış **konuya giriş → konu çerçevesi → öğretmen/video seçimi → konu anlatımı → kısa destek materyalleri → kısa anlayış kontrolü → 10 soruluk pekiştirme/adaptif test** şeklinde ilerleyecektir.
- Konu girişinde kullanıcıya “Bu konuda neleri öğreneceksin?” benzeri kısa bir çerçeve sunulacaktır.
- Kullanıcı konuyu zaten biliyorsa öğrenme videosunu zorunlu olarak izlemek zorunda olmayacak; **“Bu konuyu biliyorum”** benzeri bir seçenekle doğrudan kalibrasyon/test aşamasına geçebilecektir.
- Konuyu bilmeyen kullanıcı için öğrenme aşaması normal/adaptif soru çözümünden önce gelecektir.
- YouTube konu anlatımları resmi embed oynatıcı üzerinden mümkün olduğunca site içinde izletilecek; videolar indirilmeyecek veya yeniden barındırılmayacaktır.
- Konu öğrenme ekranı video ile sınırlı kalmayacak; **kısa özet, önemli kurallar/formüller, püf noktaları, örnekler ve kullanıcının kendi notları** gibi destek materyalleri bulunacaktır.
- Bu kısa özet/not içeriklerinin ilk taslakları AI tarafından üretilebilir; ancak akademik içerik oldukları için kalite kontrolünden geçmeleri gerekir.
- Video ilerlemesi öğrenme ilerlemesi olarak takip edilebilir fakat **video izleme oranı akademik ustalık kanıtı değildir**.
- Kullanıcının video içinde kaldığı konum saklanarak farklı oturumlarda aynı yerden devam etmesi sağlanacaktır. Dashboard veya konu sayfasında kaldığı yerden devam kolaylığı sunulabilir.
- Uzun videolar mümkün olduğunca mantıksal bölümlere ayrılacaktır. YouTube chapter'ları varsa kullanılabilir; yoksa platform video zaman aralıklarını konu alt başlıklarıyla eşleştirebilir.
- Kullanıcı konu videosu sırasında not alabilecektir. Uygun olduğunda notlar video zaman damgasına bağlanarak kullanıcı daha sonra nota tıkladığında ilgili video anına dönebilir.
- Konu ekranında **AI'ya Sor** entegrasyon noktası bulunacaktır; AI öğretmen ayrıntıları 12. başlıkta tasarlanacaktır.
- Video/öğrenme sonrasında ana 10 soruluk teste geçmeden önce **çok kısa ve düşük sürtünmeli bir anlayış kontrolü** kullanılacaktır. Bu kontrol normal adaptif testin yerine geçmeyecek ve gizli akademik seviyeyi ana test kadar etkilemeyecektir.
- Anlayış kontrolünün amacı kullanıcının içeriği temel düzeyde takip edip etmediğini görmek ve gerekirse ilgili özet/video bölümüne geri yönlendirmektir.
- Konu özeti ilk öğrenmeden sonra da tekrar sistemi içinde hızlı hatırlatma materyali olarak kullanılabilecektir.
- Öğrenme içeriği dersin doğasına göre değişebilecektir: Matematikte yöntem/işlem/örnek; Tarihte bilgi/kronoloji/ilişki; Coğrafyada kavram/harita/neden-sonuç; Vatandaşlıkta kavram/kurum/işleyiş; Türkçede kural/yorum/soru tekniği gibi farklı bloklar kullanılabilir.
- Sistem **başlanmadı / öğreniliyor / öğrenme aşaması tamamlandı** gibi öğrenme durumlarını akademik gizli seviyeden ayrı tutacaktır. “Öğrenme tamamlandı” durumu “konuda ustalaştı” anlamına gelmeyecektir.
- Kullanıcı öğrenmeyi yarıda bırakırsa sistem kaldığı yerden devam etmeyi önerebilir; kullanıcı isterse başka bir çalışma seçerek özgürlüğünü korur.
- **Kullanıcı tek bir öğretmene/hocaya zorlanmayacaktır.** Aynı konuyu anlatan mümkün olduğunca çok uygun KPSS öğretmeni/video seçeneği konu sayfasında erişilebilir olacaktır.
- Kullanıcı anlatım tarzına, öğretmene veya videoya göre kendi seçimini yapabilecektir. Platformun bir videoyu varsayılan/önerilen göstermesi, diğer öğretmenleri erişilemez hale getirmeyecektir.
- Kullanıcı bir derste ilk kez bir öğretmen/hoca seçtiğinde bu seçim **o ders için varsayılan öğretmen** olarak kaydedilecektir. Sonraki konularda o öğretmenin uygun içeriği varsa sistem öncelikle onu açacak/öne çıkaracaktır.
- Kullanıcı varsayılan öğretmeni daha sonra ayarlardan değiştirebilecektir. Varsayılan öğretmen seçimi diğer uygun öğretmenleri erişilemez hale getirmeyecektir.
- Video seçenekleri arasında KPSS kapsamına uygunluk, güncellik, anlatım kalitesi, konu kapsamı ve erişilebilirlik gibi kalite sinyalleri tutulabilir; ancak kullanıcı seçimi korunacaktır.
- Kullanıcı **“Bu konuyu biliyorum”** diyerek öğrenme aşamasını atladığında öğrenme aşaması tamamlanmış kabul edilir ve akademik yeterlilik doğrudan 10 soruluk kalibrasyon/test performansıyla ölçülür.
- Konuyu öğrenen kullanıcı için öğrenme aşamasının tamamlanması kullanıcının **“Konu anlatımını tamamladım”** benzeri açık eylemiyle gerçekleşecektir; video izleme yüzdesi tek başına zorunlu tamamlama kapısı olmayacaktır.
- Bu eylemden sonra kısa anlayış kontrolü gösterilecektir. Mini kontrolde zayıf sonuç alınırsa ilgili özet/video bölümüne dönme önerisi yapılabilir; ancak kullanıcı ana 10 soruluk teste geçmekten zorla alıkonulmayacaktır.
- Video %100 izlenmedi diye öğrenme tamamlanamaz gibi sert bir kural kullanılmayacaktır. Video ilerlemesi yardımcı sinyal ve kaldığın yer bilgisi olarak kalacaktır.
- Akademik ustalık ve sonraki konuya hazır oluş; öğrenme tamamlama düğmesinden veya video yüzdesinden değil, gerçek soru performansı ve daha önce kabul edilen adaptif/önkoşul kurallarından türetilecektir.
- Çok sayıdaki öğretmen/video seçeneğinin tam kart, filtre ve sıralama UX'i geliştirme aşamasında netleştirilebilir; mimari düzeyde karar verilmiştir: varsayılan öğretmen ders bazında hatırlanır, fakat kullanıcı diğer öğretmenlere erişimini kaybetmez.
- Konu öğrenme sisteminin mimari düzeyde açık sorusu kalmamıştır.

## 17. Tekrar ve unutma sistemi — kararlaştırıldı
- Konu seviyesi yalnızca zaman geçti diye otomatik olarak düşürülmeyecektir. **Akademik gizli seviye** ile **hatırlama/unutma riski** birbirinden ayrı tutulacaktır.
- Akademik gizli seviye, kullanıcının doğrulanmış soru performansına dayanır. Zaman geçmesi tek başına bu seviyeyi düşürmek için yeterli kanıt sayılmayacaktır.
- Ayrı bir retention/hatırlama güveni veya unutma riski sinyali; son doğrulanmış çalışma zamanı, konu seviyesi, seviye güveni, son test performansı, yeni öğrenilmiş olma durumu, geçmiş tekrar sonuçları ve sınava kalan süre gibi girdilerden beslenecektir.
- Zaman geçtikçe hatırlama riski artabilir. Sistem bu durumda kısa tekrar önerebilir; ancak gerçek akademik seviye ancak yeni performans kanıtı oluştuğunda değişir.
- Yeni öğrenilmiş konular ilk dönemde daha sık korunacaktır. Başarılı hatırlama/tekrar performansı geldikçe tekrar aralığı uzayacak; kullanıcı zorlandıkça aralık kısalacaktır.
- `1 gün → 3 gün → 7 gün → 14 gün` gibi sabit aralıklar başlangıçta yardımcı olabilir fakat bütün kullanıcılar ve bütün konular için değişmez kural olmayacaktır. Sistem zamanla kullanıcıya ve konuya göre uyarlanacaktır.
- Tekrarın varsayılan biçimi uzun konu videosunu yeniden izlemek olmayacaktır. Temel akış **hatırlama kontrolü → kısa soru paketi → sonuca göre hedefli güçlendirme** şeklinde olacaktır.
- Normal tekrar için yaklaşık **5 soruluk hızlı tekrar** kullanılabilir. Bu kısa kontrol yeterli güven üretmez veya kullanıcı zorlanırsa **10 soruluk güçlendirme testi** gibi daha derin bir çalışma önerilebilir.
- Tekrar paketinde ağırlık, kullanıcının daha önce görmediği fakat aynı konu/kazanımı ölçen yeni sorularda olacaktır. Böylece yalnızca eski sorunun cevabını hatırlamak gerçek bilgiyle karıştırılmayacaktır.
- Eski yanlış sorular da tekrar paketine dahil edilebilir; ancak yeni ve bağımsız sorular akademik kanıt açısından daha güçlü kabul edilecektir.
- Kullanıcı tekrar sırasında belirli bir alt konu/kazanımda zorlanırsa tüm konuyu baştan çalıştırmak yerine ilgili alt alana hedefli **kısa güçlendirme** önerilebilecektir.
- Hedefli güçlendirme; ilgili konu özeti, önemli kural/formül, kullanıcının eski notları, gerekli soru örnekleri ve gerekirse seçili video bölümünü içerebilir. Kullanıcı her seferinde tüm konu videosuna geri gönderilmeyecektir.
- Tekrar içeriği dersin doğasına göre değişebilecektir. Tarih/Vatandaşlık gibi bilgi ağırlıklı derslerde bilgi, kronoloji ve kavram hatırlama; Matematikte işlem/yöntem uygulama; Türkçede kural ve düzenli pratik gibi farklı tekrar biçimleri desteklenebilir.
- Soru bankasındaki ayrıntılı **Ders → Konu → Alt konu → Kazanım/Beceri** etiketleri, kullanıcının genel konudan ziyade belirli zayıf alt alanlarının tekrar edilmesinde kullanılacaktır.
- Kullanıcının eski yanlışları önemli bir sinyal olacak; aynı alt konuda tekrarlanan hatalar, genel konu seviyesinden bağımsız olarak hedefli tekrar önceliğini yükseltebilecektir.
- Tekrarlar kaçırıldığında görevler borç gibi birikmeyecektir. Kullanıcı uzun süre siteye girmemişse sistem “17 tekrar gecikti” benzeri baskıcı bir yapı kurmak yerine o an için en değerli tekrar ihtiyaçlarını yeniden hesaplayacaktır.
- Tekrar sistemi ayrı bir zorunlu yapılacaklar listesi gibi çalışmayacak; çalışma programı motoruna **unutma riski / tekrar ihtiyacı** sinyali verecektir. Motor bunu yeni konu öğrenme, aktif öğrenme zinciri, ders dengesi ve sınava kalan süreyle birlikte değerlendirecektir.
- Sistem zamanla kullanıcıya özgü **hafıza dayanıklılığı** öğrenebilir. Kullanıcının bazı dersleri/konuları daha uzun süre koruduğu, bazılarını daha hızlı unuttuğu gözlenirse tekrar aralıkları kişiselleştirilecektir.
- Kullanıcıya ham retention skoru göstermek zorunlu değildir. Bunun yerine **Sağlam**, **Tazelemek iyi olabilir**, **Tekrar öneriliyor** gibi anlaşılır durum ifadeleri kullanılabilir.
- Başarılı tekrar performansı hatırlama güvenini yükseltir ve sonraki tekrarın daha ileri tarihe taşınmasını sağlar. Zayıf tekrar performansı ise gerekirse gerçek akademik seviyeyi performans kuralları çerçevesinde düşürür, hedefli güçlendirmeyi tetikler ve sonraki tekrar aralığını kısaltır.
- Tekrar ve unutma sisteminin mimari düzeyde açık sorusu kalmamıştır; kesin gün aralıkları ve adaptasyon katsayıları gerçek kullanım verisiyle kalibre edilebilir.

## 18. Yanlış soru sistemi — kararlaştırıldı
- Kullanıcının yanlış yaptığı her soru otomatik olarak **Yanlışlarım** alanına alınacaktır; kullanıcıdan manuel olarak yanlış defterine ekleme beklenmeyecektir.
- Yanlış kaydında en az soru/soru sürümü, kullanıcının verdiği cevap, doğru cevap, açıklamalı çözüm, ders-konu-alt konu/kazanım bilgisi, yanlışın tarihi ve ilgili test/deneme bağlamı korunacaktır.
- Tek bir yanlış otomatik olarak “kullanıcı bu konuyu bilmiyor” anlamına gelmeyecektir. Sistem tekil hatadan çok **tekrarlanan hata örüntülerine** önem verecektir.
- Aynı alt konu/kazanımda farklı sorularda tekrar eden yanlışlar, o alt alanın riskini ve hedefli güçlendirme önceliğini artıracaktır. Bu sinyal tekrar sistemi, çalışma programı motoru ve gerektiğinde AI öğretmen/koç tarafından kullanılabilecektir.
- Test sonrası yanlış incelemesinde daha önce kabul edilen **“Neden yanlış yaptım?”** geri bildirimi opsiyonel olarak sunulacaktır. Kullanıcı yanıtlamak zorunda olmayacaktır.
- Başlangıç neden seçenekleri: **Bilgiyi bilmiyordum**, **Formülü/kuralı unuttum**, **Soruyu yanlış anladım**, **İşlem hatası yaptım**, **Dikkatsizlik yaptım**, **İki şık arasında kaldım**, **Emin değilim / bilmiyorum**.
- Kullanıcının seçtiği hata nedenleri yalnızca etiket olarak saklanmayacak; yeterli veri oluştuğunda “bilgi eksiğinden çok işlem hatası yapıyor” benzeri gerçek çalışma içgörüleri üretmekte kullanılabilecektir.
- Yanlışlar ekranı yüzlerce sorunun biriktiği pasif bir arşiv olmayacaktır. Kullanıcı açısından **Aktif Yanlışlar**, **Tekrar Bekleyenler** ve **Çözüldü / Pekişti** benzeri anlamlı gruplar kullanılabilir.
- İç sistemde yanlışın yaşam döngüsü yeni yanlış → incelendi → güçlendiriliyor → doğrulandı → arşivlendi benzeri durumlarla takip edilebilir; kullanıcıya bu teknik durum isimlerini aynen göstermek zorunlu değildir.
- Yanlış soruyu düzeltmenin ana yöntemi aynı soruyu sürekli yeniden göstermek olmayacaktır. Kullanıcı önce yanlışı ve doğrulanmış çözümünü inceler; daha sonra aynı kazanımı ölçen **daha önce görülmemiş yeni sorularla** gerçekten öğrenip öğrenmediği doğrulanır.
- Eski yanlış soru daha sonra yeniden gösterilebilir; ancak cevabın ezberlenmesi gerçek öğrenmeyle karıştırılmayacaktır. Akademik doğrulamada yeni bağımsız sorular daha güçlü kanıt kabul edilecektir.
- Başlangıç ürün kuralı olarak, bir yanlışın aktif problem olmaktan çıkması için aynı kazanımı ölçen **en az iki ayrı yeni doğrulama sorusunda** başarılı performans aranabilir. Bu sayı ve zaman aralığı gerçek kullanım verisiyle kalibre edilebilir.
- İlk doğrulama kısa süre sonra, ikinci doğrulama ise daha ileri bir zamanda/başka bir pakette yapılabilir. Böylece anlık ezber ile kalıcı toparlanma ayrıştırılır.
- Kullanıcı yeni benzer sorularda düzenli başarılı hale geldiğinde yanlış “çözüldü/pekişti” durumuna geçer; geçmiş kayıt silinmez ve performans geçmişinde korunur.
- Kullanıcı isterse bir yanlış soruyu **Önemli / Tekrar Bak** benzeri bir işaretle manuel olarak saklayabilir. Sistem bir yanlışı toparlanmış saysa bile kullanıcının kendi işaretlediği soru erişilebilir kalır.
- **Boş sorular yanlışlarla aynı şey sayılmayacaktır.** Boş bırakma; bilmeme, emin olamama, süre, uğraşmama veya başka nedenlerden kaynaklanabilir ve ayrı bir sonuç türü olarak tutulacaktır.
- Bununla birlikte aynı konu/kazanımda tekrarlanan boşlar da zayıflık sinyali sayılabilir ve hedefli tekrar/güçlendirmeyi etkileyebilir.
- Yanlış soru incelemesindeki **AI'ya sor** akışı, mümkün olduğunca doğrulanmış doğru cevap ve açıklamalı çözümü bağlam olarak kullanacaktır. Kullanıcı “daha basit anlat”, “neden C'yi seçmiş olabilirim?”, “benzer örnek ver” gibi takip soruları sorabilecektir.
- Yanlış soru sistemi için ayrıca bağımsız bir “yanlış puanı” oluşturulmayacaktır. Yanlış verileri zaten gizli konu seviyesini, alt konu riskini, tekrar ihtiyacını ve program motoru önceliğini besleyecektir.
- Yanlış soru sisteminin temel döngüsü **yanlış → incele → nedeni anlamaya çalış → aynı beceriyi yeni sorularla doğrula → yeterli kanıt oluşunca aktif yanlış olmaktan çıkar** olacaktır.
- Yanlış soru sisteminin mimari düzeyde açık sorusu kalmamıştır; kesin doğrulama zamanlamaları ve küçük UX ayrıntıları gerçek kullanım verisi/geliştirme aşamasında ayarlanabilir.

## 19. Deneme sınavları — kararlaştırıldı
- Deneme sistemi normal 10 soruluk testlerin yalnızca büyütülmüş hali olmayacaktır; amacı **gerçek sınav koşullarında bilgi düzeyini, süre yönetimini ve sınav performansını birlikte ölçmek** olacaktır.
- İki ana deneme türü bulunacaktır: **Tam KPSS Denemesi** ve **Branş Denemesi**.
- Tam KPSS denemesi kullanıcının seçtiği KPSS türüne uygun soru dağılımı, toplam soru sayısı ve süre yapısını taklit edecektir. Bu sınav yapısı kod içine sabit gömülmeyecek; sınav türü ve güncel kurallar değişebileceği için yapılandırılabilir olacaktır.
- Branş denemeleri Matematik, Türkçe, Tarih, Coğrafya, Vatandaşlık gibi tek bir dersin farklı konularını karışık biçimde ölçen genel ders denemeleri olacaktır; tek konuya ait 10 soruluk testlerle aynı şey sayılmayacaktır.
- Branş denemelerinde de süre ölçülecek; deneme şablonunda belirlenmiş bir süre hedefi/kısıtı varsa uygulanabilecektir. Kesin branş süreleri içerik şablonuna göre tanımlanabilir.
- Denemelerde soru navigasyonu, önceki soruya dönme, cevabı değiştirme ve soru işaretleme desteklenecektir. Doğru/yanlış sonucu sınav bitmeden gösterilmeyecektir.
- Deneme sınavlarında bitirme eylemi **“Sınavı Bitir”** olarak adlandırılacaktır.
- Deneme için iki kullanım modu desteklenecektir: **Gerçek Sınav Modu** ve **Çalışma Modu**.
- Gerçek Sınav Modu resmi/atanmış süreyi kullanacak, süre kullanıcı tarafından duraklatılamayacak ve gerçek sınav performansını ölçen esas mod olarak ayrı tutulacaktır.
- Çalışma Modu daha esnek olacaktır; gerektiğinde duraklatma gibi kolaylıklar sunulabilir. Gerçek Sınav Modu ve Çalışma Modu sonuçları aynı performans kategorisiymiş gibi karşılaştırılmayacaktır.
- Denemelerde ayrı sınav kronometresi bulunacaktır. Platformun genel çalışma kronometresi denemede geçirilen zamanı toplam çalışma süresine ekleyebilir; ancak deneme ekranındaki ana süre bilgisi denemenin kendi süresi/kalan süresi olacaktır.
- Deneme sırasında cevaplar, işaretlenen sorular, mevcut soru ve başlangıç zamanı otomatik kaydedilecektir. Sayfa yenilenmesi, uygulamanın kapanması veya bağlantı sorunu denemenin cevaplarını kaybettirmemelidir.
- Gerçek Sınav Modunda uygulamanın kapanması veya sayfanın terk edilmesi süreyi durdurmayacaktır. Kullanıcı geri geldiğinde sınav gerçek zaman üzerinden kaldığı yerden devam edecektir.
- Deneme sonu yalnızca toplam doğru/yanlış/boş göstermekle sınırlı kalmayacaktır. **Toplam sonuç, net, kullanılan süre, ders bazlı sonuçlar ve konu/alt konu analizi** katmanlı biçimde sunulacaktır.
- Denemelerde soru başına ve ders/konu bazında harcanan süre mümkün olduğunca arka planda ölçülecek; bu veriler hız analizi, zaman yönetimi ve kullanıcı istatistiklerinde kullanılacaktır.
- Süre analizi; örneğin kullanıcının Matematikte doğru yapmasına rağmen yavaş kalması, sınavın son bölümünde hız/doğruluk düşüşü yaşaması veya belirli soru türlerinde gereğinden fazla süre harcaması gibi anlamlı içgörüler üretebilecektir.
- Deneme soruları da ders/konu/alt konu/kazanım/zorluk etiketlerine sahip olduğu için sonuçlar mevcut adaptif akademik sisteme gerçek performans kanıtı olarak katılacaktır. Denemeler için ayrı ve paralel bir akademik puan sistemi kurulmayacaktır.
- Tek bir denemedeki kötü sonuç kullanıcının geçmiş akademik verisini aşırı biçimde ezmeyecektir; deneme cevapları mevcut soru bazlı performans ve güven mantığına yeni kanıt olarak eklenecektir.
- Akademik konu yeterliliğinden ayrı olarak **deneme/sınav performansı** da izlenecektir. Böylece bilgisi iyi olduğu halde süre yetiştiremeyen, sınav sonunda dağılan veya gerçek sınav koşullarında daha fazla hata yapan kullanıcılar ayırt edilebilecektir.
- Her deneme ve sonucu geçmişte saklanacaktır. Kullanıcı tek bir denemeden çok **son denemelerdeki trendi** görebilecek; gelişim/gerileme değerlendirmesi birden fazla denemeye dayanabilecektir.
- Denemelerin kendi zorluk seviyeleri/kalite bilgileri tutulacaktır. Gerçek kullanım verisi oluştuğunda denemelerin zorluğu kullanıcı performansından yeniden kalibre edilebilecektir.
- Farklı zorluktaki denemelerin ham netleri doğrudan eşdeğer kabul edilmeyecektir. İleride kullanıcılar arası karşılaştırma veya sıralama yapılırsa aynı deneme ya da zorluk normalize edilmiş sonuç kullanılması gerekecektir.
- Deneme sonrası yanlış ve boş incelemesi ayrı bir sistem kurmak yerine mevcut **Yanlış Soru Sistemi**ne bağlanacaktır: yanlış → çözüm → AI'ya sor → neden yanlış yaptım → benzer yeni sorularla doğrulama/güçlendirme.
- Deneme sonucu çalışma programı motorunu besleyecektir. Sistem deneme sonrasında **“Bu denemeye göre en değerli sonraki çalışmalar”** benzeri bir bölümde hedefli konu güçlendirme, kısa tekrar veya hız çalışması önerebilecektir; bunlar zorunlu görev olmayacaktır.
- Deneme çözme sıklığı katı takvimle zorunlu tutulmayacaktır. Program motoru, son denemeden geçen süreyi, sınava kalan zamanı ve genel ölçüm ihtiyacını değerlendirerek deneme önerebilir; kullanıcı istediği zaman manuel deneme de başlatabilir.
- Kullanıcının kendi ders/soru sayısı/zorluk karışımını seçerek oluşturduğu çalışma paketleri desteklenebilir; ancak gerçek KPSS simülasyonuyla karışmaması için bunlar **Karma Test** gibi ayrı bir kategori altında tutulacaktır.
- Tahmini KPSS puanı ve hedef puanla ilişkilendirme 11. **Hedef Puan Sistemi** başlığında ayrıca netleştirilecektir; deneme mimarisinin çalışması buna bağlı değildir.
- Deneme sınavlarının mimari düzeyde açık sorusu kalmamıştır; kesin sınav şablonları, süreler ve küçük UX ayrıntıları güncel sınav kuralları/uygulama aşamasında yapılandırılabilir.

## 20. Performans ve istatistik ekranı — kararlaştırıldı
- İstatistik ekranının amacı mümkün olan her veriyi göstermek değil; kullanıcının **nerede iyi olduğunu, nerede zorlandığını, hızının nasıl değiştiğini, gerçekten gelişip gelişmediğini ve bundan sonra neye odaklanmasının mantıklı olduğunu** anlaşılır biçimde göstermektir.
- Ana yapı **Genel Durum**, **Ders ve Konu Performansı**, **Hız ve Süre**, **Deneme Performansı**, **Hata / Tekrar Analizi** bölümlerinden oluşacaktır.
- Kullanıcı istatistikleri **7 gün / 30 gün / 3 ay / tüm zamanlar** gibi zaman filtreleriyle inceleyebilecektir.
- Genel özet; çözülen soru sayısı, toplam çalışma süresi, doğruluk, öğrenilen konu, yapılan tekrar ve çözülen deneme gibi temel metrikleri gösterebilir. Ham sayıların yanında sistem kısa ve anlamlı yorumlar da üretecektir.
- Kullanıcıya gizli `0–110` akademik konu puanı doğrudan gösterilmeyecektir. Bunun yerine **Yeni / Temel / Gelişiyor / İyi / Güçlü / Çok Güçlü** benzeri anlaşılır durum etiketleri veya görsel ilerleme ifadeleri kullanılabilecektir. Kesin isimler UI aşamasında rafine edilebilir.
- Kullanıcı yalnızca mevcut durumu değil, zaman içindeki değişimi de görebilecektir; örneğin “Problemler — son 30 günde belirgin gelişim” gibi trend ifadeleri kullanılacaktır.
- Ders kartlarında doğruluk, son dönem trendi, ortalama soru süresi, güçlü alanlar, aktif zayıf alanlar ve tekrar ihtiyacı gibi özet bilgiler yer alabilecektir.
- Ders kartından konu ve alt konu seviyesine inilebilecek; son testler, doğruluk, hız, yanlış/boş, tekrar ihtiyacı, son çalışma tarihi ve alt konu/kazanım kırılımı incelenebilecektir.
- Sistem yalnızca ders bazında değil, mümkün olduğunda **konu / alt konu / kazanım / soru türü** bazında performans analizi sunacaktır.
- Hız analizi test süresi, soru bazlı süre, ders, konu ve soru türü kırılımlarını kullanacaktır. Kullanıcı zaman içindeki hız gelişimini görebilecektir.
- **Hız ve doğruluk birlikte değerlendirilecektir.** Sadece daha hızlı çözmek gelişim sayılmayacak; hızlanırken doğruluğun korunup korunmadığı veya düştüğü de yorumlanacaktır.
- Sistem “Türkçede hızlandın ve doğruluğunu korudun” veya “Matematikte daha hızlı çözüyorsun ancak hata oranı arttı” gibi birleşik performans içgörüleri üretebilecektir.
- Genel çalışma kronometresi verisi bugün/hafta/ay/toplam bazında gösterilebilecek; çalışma süresi derslere ve çalışma türlerine göre ayrıştırılabilecektir.
- Çalışma türü kırılımında **konu öğrenme, soru çözme, tekrar, deneme, yanlış inceleme** gibi aktiviteler ayrı analiz edilebilecektir.
- Sistem yalnızca “ne kadar çalıştı?” sorusuna değil, mümkün olduğunda **“çalışma performansa nasıl yansıdı?”** sorusuna da bakacaktır. Örneğin bir konuya harcanan çalışma süresi ile doğruluk/hız gelişimi birlikte incelenebilir.
- Çalışma → performans ilişkisi kullanıcıya kesin ve yanıltıcı tek bir “verimlilik puanı” olarak sunulmayacak; örüntü ve içgörü şeklinde yorumlanacaktır.
- Yanlış nedeni analizi yalnızca kullanıcı gerçekten geri bildirim verdiği örnekler üzerinden yapılacaktır. Yetersiz örnek varken bütün yanlışlara genelleme yapılmayacaktır.
- Hata nedenleri bilgi eksikliği, dikkatsizlik, işlem hatası, yanlış anlama gibi kategorilerde özetlenebilecek ve veri kapsamı kullanıcıya dürüst biçimde belirtilecektir.
- Boş sorular da ayrı analiz edilecektir. Özellikle denemelerde yüksek boş oranı, düşük yanlış oranıyla birlikte görüldüğünde süre, risk alma veya bilgi eksikliği gibi olası örüntüler için sinyal oluşturacaktır.
- Tekrar/unutma sisteminin kullanıcıya dönük özeti ham retention skoru göstermeyecek; örneğin **Sağlam / Tazelemek iyi olabilir / Tekrar öneriliyor** durumlarının sayıları ve değişimi gösterilebilecektir.
- Tekrarların sonrasında performansın korunup korunmadığı veya toparlanıp toparlanmadığı takip edilebilecektir.
- Deneme istatistiklerinde tek “en iyi sonuç” yerine trend ön planda olacaktır. Son deneme, en iyi deneme, son 5 ortalama, ders bazlı netler, doğru/yanlış/boş ve süre kullanımı gösterilebilecektir.
- Deneme süre analizi sınavın bölümlerindeki hız/doğruluk değişimini, özellikle sınav sonlarına doğru düşüşleri ve belirli derslerde aşırı süre tüketimini tespit edebilecektir.
- Soru zorluğuna göre performans analizinde kolay/orta/zor benzeri seviyelerde doğruluk ve özellikle zaman içindeki gelişim gösterilebilecektir; daha zor sorularda daha düşük doğruluk normal bağlamıyla sunulacaktır.
- Soru türü/beceri analizi kullanılacaktır. Örneğin işlem, problem çözme, grafik/tablo, bilgi, yorum, kronoloji gibi etiketler kullanıcının konu bilgisinden bağımsız performans örüntülerini gösterebilir.
- İstatistik yorumları **örnek sayısı ve veri güvenini** dikkate alacaktır. Az sayıda sorudan çıkan sonuç ile yüzlerce sorudan çıkan sonuç eşit kesinlikte sunulmayacaktır.
- Kullanıcıya teknik güven puanı göstermek zorunlu değildir; **Veri henüz sınırlı / güven orta / yeterli veri var** benzeri anlaşılır ifadeler kullanılabilir.
- İstatistik ekranı yalnızca geçmişi raporlamayacak; ekranın sonunda veya uygun yerlerinde **“Bundan sonra ne yapmalıyım?”** sorusuna veri tabanlı yanıt verecektir.
- Sistem, örneğin tekrar eden Yüzde Problemleri hatası için güçlendirme, iyi doğruluk ama yüksek süre görülen Paragraf için hız çalışması veya uzun süredir dokunulmayan bir konu için hızlı tekrar önerebilecektir.
- Bu öneriler mevcut çalışma programı motoruna bağlanacak ve zorunlu görev olmayacaktır.
- AI tarafından üretilen istatistik yorumları havadan/genel motivasyon cümleleri kurmayacak; yapılandırılmış gerçek kullanıcı verisine dayanacaktır.
- AI yorumlarında doğruluk trendi, süre trendi, tekrar eden alt konu hatası, hata nedeni ve benzeri gerçek sinyaller kullanılabilecek; yetersiz veri varsa kesin yargıdan kaçınılacaktır.
- Kullanıcı **bu ay vs geçen ay** gibi dönem karşılaştırmaları yapabilecek; soru sayısı, çalışma süresi, doğruluk, ortalama çözüm süresi ve öğrenilen konu gibi değişimler görülebilecektir.
- İstatistik ekranının ana karşılaştırma ekseni **kullanıcı vs geçmişteki kendisi** olacaktır. Arkadaş/lig/leaderboard kıyasları bu ekranın temel amacı olmayacak; sosyal rekabet ayrı oyunlaştırma/meta sisteminde ele alınacaktır.
- Ana ekran mümkün olduğunca sade tutulacaktır: dönem özeti → gelişim/trend → dersler → hız ve doğruluk → deneme trendi → tekrar/yanlış durumu → kişisel içgörüler/öneriler biçiminde katmanlı bir bilgi hiyerarşisi kullanılabilir.
- Performans ve istatistik sisteminin mimari düzeyde açık sorusu kalmamıştır; görsel grafik türleri, kesin etiket isimleri ve küçük sunum ayrıntıları UI geliştirme aşamasında rafine edilebilir.

## 21. Hedef puan sistemi — kararlaştırıldı
- Kullanıcı profilinde isteğe bağlı bir **hedef KPSS puanı** tutulacaktır. Kullanıcı hedefini belirleyebilir, daha sonra değiştirebilir veya hedef puan belirtmeden platformu kullanmaya devam edebilir.
- Hedef puan yalnızca kaydedilen bir sayı olmayacak; sistem kullanıcının mevcut gerçek performansı ile hedef arasındaki mesafeyi sürekli yeniden değerlendirecek ve farkın nereden kapatılabileceğini göstermeye çalışacaktır.
- Sistem **ölçülen performans** ile **tahmini KPSS puanını** birbirinden ayıracaktır. Son deneme netleri gerçek ölçüm olarak saklanırken puan karşılığı tahmin olarak sunulacaktır.
- Kullanıcıya gereksiz kesinlik veren `81,37` benzeri tek değerler yerine mümkün olduğunca **tahmini puan aralığı** gösterilecektir. Örneğin `80–83` gibi bir aralık ve veri güveni sunulabilir.
- Puan tahminindeki güven; deneme sayısı, gerçek sınav modu verisi, denemelerin güncelliği ve kalitesi, zorluk kalibrasyonu, kapsanan ders/konular ve genel veri miktarı gibi sinyallere dayanacaktır.
- Yeterli veri yoksa sistem açıkça **“Henüz güvenilir puan tahmini için yeterli deneme verisi yok”** benzeri bir ifade kullanacak; sahte bir tahmin üretmeye zorlanmayacaktır.
- Kullanıcı hedef ile mevcut tahmini performansı birlikte görebilecektir. Sistem gerekirse hedefe ulaşmak için gereken **yaklaşık net gelişimini** aralık halinde gösterebilir; bunun kesin reçete değil tahmin olduğu belirtilmelidir.
- Hedefe kalan net ihtiyacı derslere mekanik eşit biçimde dağıtılmayacaktır. Sistem kullanıcının gerçek seviyesine, hata örüntülerine, soru sıklığına, gelişim alanlarına ve öğrenme sırasına göre **en ulaşılabilir gelişim fırsatlarını** bulmaya çalışacaktır.
- Sistem konu/ders bazında tahmini net gelişim potansiyeli gösterebilir; ancak bu değerler kesin sonuç değil karar destek sinyali olacaktır.
- Hedef puan sistemi mevcut çalışma programı motorunun eğitim mantığını geçersiz kılamaz. Yüksek kısa vadeli net potansiyeli olan bir konu için gerekli önkoşullar atlanmayacak; hedef sistemi motora amaç/öncelik sinyali verirken öğrenme sırası korunacaktır.
- Kullanıcıya **“85 puan alma ihtimalin %74”** gibi temelsiz hassas olasılıklar gösterilmeyecektir. Bunun yerine **Veri yetersiz / Hedeften uzak / Gelişim gerekiyor / Hedefe yaklaşıyor / Hedef bandında / Hedefin üzerinde** benzeri anlaşılır durumlar kullanılabilecektir.
- **Tahmini puan performansı** ile **sınava hazır oluş** aynı kavram olmayacaktır. Kullanıcı hedef puan bandına ulaşsa bile konu kapsamı eksik, veri güveni düşük, retention riski yüksek veya süre yönetimi zayıfsa sistem otomatik olarak “sınava hazırsın” demeyecektir.
- Hazır oluş değerlendirmesinde puan performansına ek olarak **kapsam, veri güveni, hatırlama/retention durumu, gerçek sınav modu performansı ve zaman yönetimi** gibi sinyaller birlikte kullanılacaktır.
- Puan tahmininde tek bir en iyi deneme yerine **trend ve yakın dönem performansı** esas alınacaktır. Son gerçek sınav modu denemeleri eski verilere göre daha yüksek ağırlık alabilir.
- Deneme zorluğu mümkün olduğunca normalize edilecektir. Daha zor bir denemedeki daha düşük ham net otomatik olarak gerçek performans düşüşü sayılmayacaktır.
- **Gerçek Sınav Modu** hedef puan tahmininde **Çalışma Modu**ndan daha güçlü kanıt kabul edilecektir. Çalışma Modu verisi yardımcı olabilir ancak gerçek sınav performansıyla eşdeğer sayılmayacaktır.
- Hedef puan çalışma programı motoruna kullanıcıya göre farklı optimizasyon sinyalleri verebilir. Daha yüksek hedeflerde zor sorular, küçük hata oranlarını azaltma ve hız optimizasyonu daha değerli hale gelebilir; temel seviyesi düşük kullanıcıda ise kolay/orta sorulardaki kayıpları kapatma ve temel öğrenme daha değerli olabilir.
- Hedef hiçbir zaman sert konu yasağına dönüşmeyecektir. Sistem **“Hedefin sadece 70, bu konuyu öğrenmene gerek yok”** gibi davranmayacak; hedef yalnızca önceliklendirme sinyali olacaktır.
- Kullanıcı farklı puan hedeflerinin gerektirdiği gelişim farkını görebileceği **hedef senaryolarını** inceleyebilir; örneğin 80 / 85 / 90 hedeflerinin mevcut performansa göre yaklaşık gereksinimleri karşılaştırılabilir. Yine de tek bir aktif hedef kullanıcı tarafından seçilecektir.
- Hedef puan zaman içinde değiştirilebilecektir. Geçmiş hedefler istenirse kilometre taşı olarak saklanabilir; örneğin `75 ✅ → 80 ✅ → güncel 85` biçiminde gelişim geçmişine dönüştürülebilir.
- Hedef sistemi motivasyon baskısına dönüşmeyecektir. Dashboard ve diğer ekranlarda “hedefinden 12 puan geridesin” gibi cezalandırıcı alarm dili yerine **hedef için en değerli sonraki gelişim alanı** gibi yapıcı yönlendirmeler kullanılacaktır.
- Hedef ekranında en az **aktif hedef, tahmini mevcut performans aralığı, güven düzeyi, son deneme trendi, hedefe kalan yaklaşık gelişim, en yüksek gelişim fırsatları ve hazır oluş sinyalleri** birlikte gösterilebilecektir.
- **“Hedefime göre çalış”** benzeri bir eylem bulunabilir. Bu eylem ayrı ve çelişkili bir çalışma algoritması başlatmayacak; mevcut çalışma programı motorunu hedef puan bağlamıyla çalıştıracaktır.
- Hedef puan sistemi temel olarak **belirsizlik içeren bir hedef optimizasyon problemi** kabul edilecektir; basit “X puan için Y net kesin gerekir” hesaplayıcısına indirgenmeyecektir.
- Gerçek deneme ve kullanıcı verisi arttıkça puan tahmini, net gereksinimi ve ders/konu bazlı gelişim potansiyeli daha iyi kalibre edilecektir.
- Hedef puan ve sınava hazır oluş sisteminin mimari düzeyde açık sorusu kalmamıştır; gerçek KPSS puan dönüşümünün kesin formülleri, güncel sınav parametreleri ve görsel sunum ayrıntıları uygulama aşamasında güncel/verifiye edilmiş sınav bilgilerine göre yapılandırılacaktır.

## 22. AI Öğretmen — kararlaştırıldı
- AI Öğretmen platformun kenarına eklenmiş genel amaçlı bir chatbot olmayacak; soru bankası, konu öğrenme, yanlışlar, notlar ve adaptif seviye sistemiyle bağlamlı çalışan öğretim katmanı olacaktır.
- Kullanıcı soru inceleme ekranında **AI'ya Sor** dediğinde soru metnini yeniden kopyalamak zorunda kalmayacaktır. Sistem AI'a ders, konu, alt konu, soru, şıklar, doğrulanmış doğru cevap/çözüm, kullanıcının verdiği cevap ve varsa yanlış nedeni gibi mevcut bağlamı otomatik sağlayabilecektir.
- Öğrenme/video ekranındaki AI; ders, konu, seçilen hoca/video, ilgili video bölümü, mümkünse transcript ve mevcut zaman damgası bağlamını kullanarak **“burayı anlamadım”** gibi kısa soruları anlamlandırabilecektir.
- AI açıklama biçimini kullanıcının gerçek öğrenme durumuna göre ayarlayacaktır. Gizli akademik skor doğrudan gösterilmese de sistem AI'a kullanıcının yaklaşık düzeyi, zorlandığı alt alanlar ve uygun anlatım derinliği için bağlam verebilecektir.
- Varsayılan AI cevabı kısa, anlaşılır ve soruna doğrudan yönelik olacaktır. Kullanıcı isterse **Daha basit anlat / Detaylı anlat / Adım adım çöz / Örnek ver / Benzer soru göster** gibi eylemlerle açıklamayı genişletebilecektir.
- AI yalnızca doğru cevabı veren bir makine gibi davranmayacaktır. Kullanıcı isterse önce ipucu, ardından daha güçlü ipucu ve en sonunda tam çözüm akışını kullanabilecektir; ancak kullanıcı tam çözümü istiyorsa sistem bunu gereksiz yere engellemeyecektir.
- Soru incelemesinde AI; **Benim cevabım neden yanlış? / Doğru cevap neden doğru? / Diğer şıkları açıkla / Bu sorunun püf noktası ne? / En hızlı nasıl çözülürdü?** gibi bağlama özel soruları destekleyecektir.
- AI yalnızca soru açıklaması değil, bağımsız **KPSS odaklı konu anlatımı** da yapabilecektir. Konu anlatımı genel ansiklopedi cevabı yerine temel mantık, KPSS'de bilinmesi gerekenler, sık karıştırılanlar ve çıkabilecek soru tipleri gibi sınava yönelik biçimde yapılandırılabilecektir.
- AI Öğretmen kişiselleştirme için kullanıcının gerçek performans geçmişinden yararlanabilecektir. Örneğin geçmiş yanlışlar, alt konu hata örüntüleri ve kullanıcı tarafından belirtilmiş hata nedenleri üzerinden **“konunun tamamından çok şu bölümde zorlanıyorsun”** gibi kanıta dayalı açıklamalar yapabilecektir.
- **AI Öğretmen** ile **AI Çalışma Koçu** ayrı sorumluluklar olacaktır. AI Öğretmen soru/konu öğretimi ve açıklama yaparken, 13. başlıktaki AI Çalışma Koçu çalışma önceliği ve strateji kararlarına odaklanacaktır.
- Kayıtlı sorularda AI'ın temel akademik bağlamı sistemdeki **doğrulanmış doğru cevap ve doğrulanmış çözüm** olacaktır. AI anlatım biçimini değiştirebilir fakat doğrulanmış akademik gerçeği kendi başına değiştirmeyecektir.
- AI doğrulanmış çözüm ile soru metni arasında çelişki fark ederse yeni bir doğru cevap uydurmak yerine olası tutarsızlığı belirtip **Hatalı soru bildir** akışına yönlendirebilecektir.
- Kullanıcı AI'dan **benzer soru / yeni örnek** isteyebilecektir. Ancak AI'ın anlık ürettiği ve kalite kontrolden geçmemiş sorular **AI pratik sorusu** sayılacak, normal soru bankası kanıtı gibi kullanıcının gizli akademik seviyesini değiştirmeyecektir.
- AI tarafından oluşturulan soru ancak normal kalite kontrol/onay sürecinden geçerse soru bankasına alınabilecek ve adaptif akademik ölçümde kullanılabilecektir.
- AI öğretmen konuşmaları tek dev sonsuz sohbet olmak yerine ders/konu bağlamında oturumlar halinde tutulabilecektir. Kullanıcı aynı konuya döndüğünde önceki yararlı bağlamdan devam edebilmesi hedeflenecektir.
- Kullanıcı yararlı bir AI açıklamasını tek hareketle **Notlarıma ekle** diyerek ilgili ders/konu notlarına kaydedebilecektir; bu notlar daha sonra öğrenme ve tekrar akışında tekrar kullanılabilir.
- **Gerçek Sınav Modu** sırasında AI Öğretmen kapalı olacaktır. Deneme tamamlandıktan sonra yanlış/boş incelemesinde yeniden kullanılabilecektir.
- Normal 10 soruluk adaptif testte AI yardımı testin cevaplama aşamasını bozmayacak; mevcut test modeline uygun biçimde özellikle **Testi Bitir** sonrasında inceleme/öğretim için devreye girecektir. Konu öğrenme ekranında ise AI her zaman kullanılabilir.
- AI Öğretmenin tonu destekleyici ve anlaşılır olacaktır ancak aşırı oyunlaştırılmış veya yapay motivasyon diline dönüşmeyecektir. Kullanıcı isterse **Kısa ve net / Normal / Detaylı** gibi açıklama tercihleri kullanabilecektir.
- AI'nın kişiselleştirmesindeki ana değer kozmetik “kişilik” değil, kullanıcının gerçekten ne bildiğini ve nerede zorlandığını anlayıp uygun açıklama sunması olacaktır.
- Temel akış: **anlamadım → mevcut bağlamı otomatik al → seviyeye uygun kısa açıklama → isteğe göre ipucu/detay/adım adım/örnek → gerekirse AI pratik sorusu → yararlı açıklamayı nota kaydet**.
- AI Öğretmenin mimari düzeyde temel yönü kararlaştırılmıştır. Model seçimi, maliyet, bağlam penceresi, transcript elde etme yöntemi, moderasyon ve teknik entegrasyon ayrıntıları 21. **Teknik Altyapı** başlığında ayrıca kesinleştirilecektir.

## 23. AI Çalışma Koçu — kararlaştırıldı
- AI Çalışma Koçu serbest biçimde çalışma programı uyduran ayrı bir karar motoru olmayacaktır. Mevcut çalışma programı motorunun, performans verilerinin ve hedef sisteminin **kişisel, açıklanabilir ve konuşulabilir yüzü** olacaktır.
- Koç gerektiğinde kullanıcının KPSS türü, hedef puanı, sınava kalan süre, konu bazlı gizli seviyeleri ve güvenleri, öğrenilmiş/öğrenilmemiş konular, önkoşullar, unutma riskleri, yanlış/hata örüntüleri, çözüm hızları, çalışma geçmişi, deneme sonuçları ve program motoru önerilerini kullanabilecektir.
- Her AI çağrısına bütün kullanıcı geçmişi gönderilmeyecek; backend soruya uygun ve gerekli bağlamı seçerek aktaracaktır.
- **“Bugün ne çalışmalıyım?”** sorusunda çalışma motoru en değerli adayları hesaplayacak, AI Koç bunları kullanıcıya anlaşılır gerekçelerle açıklayacak ve mümkünse doğrudan **Çalışmaya Başla** eylemi sunacaktır.
- **“Bu hafta neye odaklanmalıyım?”** sorusu günlük öneriden farklı olarak daha stratejik, ders/konu odaklarını özetleyen bir cevap verecektir.
- **“Neden ilerleyemiyorum?”** gibi sorulara genel tavsiye vermek yerine gerçek verilerden hata örüntüsü, hız, tekrar ihtiyacı, konu bazlı gelişim ve benzeri kanıtlara dayanarak cevap verecektir.
- Koç kullanıcıyı çalışmadığı için azarlamayacak, geçmiş görevleri borç olarak yığmayacak ve projedeki baskısız çalışma felsefesini koruyacaktır.
- Kullanıcı uzun süre ara verdiyse sistem mevcut durumu yeniden hesaplayıp en değerli dönüş noktasını önerecektir.
- Haftalık değerlendirmelerde yalnızca ham istatistikleri tekrar etmek yerine gelişim, risk, unutma, hız ve sonraki en değerli çalışma gibi **içgörüler** üretmeye çalışacaktır.
- Hedef puan sistemiyle entegre çalışacak; hedefe kalan gelişimi tek bir kaba net reçetesine indirgemek yerine en ulaşılabilir ders/konu fırsatlarını yorumlayacaktır.
- Kullanıcı koç önerisini reddedebilir. Örneğin Matematik çalışmak istemiyorsa koç program motorunun uygun alternatifleri arasından ikinci en faydalı seçeneği sunabilir; kullanıcı algoritmaya zorlanmayacaktır.
- Kullanıcı doğal dilde **“bugün çok yorgunum”**, **“15 dakikam var”** gibi ek bağlam verirse koç bu bilgiyi mevcut çalışma motoruyla birlikte değerlendirebilir. Sistem kullanıcıya süre girmeyi zorunlu kılmayacaktır.
- Zamanla yeterli veri oluşursa kullanıcının çalışma alışkanlıkları hakkında düşük riskli örüntüler çıkarılabilir; yetersiz veriyle kesin kişilik/alışkanlık yargıları üretilmeyecektir.
- Koç önerilerinde **“Neden?”** açıklaması bulunabilecek; kullanıcı bir önerinin hangi gerçek sinyallere dayandığını görebilecektir.
- Koç önerileri mümkün olduğunda doğrudan eyleme dönüşecektir: **Çalışmaya Başla / Yanlışları Aç / Tekrarı Başlat / Denemeyi İncele** gibi.
- AI Koç program motorunun kesin kurallarını, konu önkoşullarını veya akademik hesaplarını kendi başına değiştiremeyecektir.
- Veri yetersiz olduğunda koç **“bunu söylemek için yeterli veri yok”** diyebilecek ve sahte kesinlik üretmeyecektir.
- Test, deneme veya çalışma oturumu sonunda kısa **Koçun yorumu** kartlarıyla bağlamsal öneriler sunulabilecektir.
- Koç proaktif olabilir ancak rahatsız edici popup/chatbot davranışı göstermeyecektir. Dashboard ve sonuç ekranlarında gerektiğinde küçük bağlamsal öneriler gösterebilir.
- Oyunlaştırma ve XP mekanikleri henüz kararlaştırılmadığı için AI Koçun ana amacı şimdilik **öğrenme verimliliği ve yönlendirme** olacaktır. Oyunlaştırma 14–15. başlıklarda tasarlandıktan sonra entegrasyon ayrıca yapılabilir.
- AI Koç ile AI Öğretmen birbirine geçiş yapabilecek ancak görevleri ayrı kalacaktır. Koç çalışma stratejisine, Öğretmen konu/soru öğretimine odaklanacaktır.
- Ayrı bir Koç ekranında **Bugün ne çalışayım? / Bu hafta neye odaklanayım? / Neden ilerleyemiyorum? / Hedefime göre durumum nasıl? / Son denememi yorumla / Zayıf alanlarımı söyle** gibi hızlı başlangıçlar bulunabilir.
- AI Çalışma Koçunun temel ürün mimarisi kararlaştırılmıştır; model, maliyet, context seçimi ve teknik entegrasyon ayrıntıları Teknik Altyapı başlığında netleştirilecektir.

## 24. Genel AI kullanımı, kullanıcı API'si ve AI'sız çalışma — kararlaştırıldı
- Platformun **AI kullanması zorunlu olmayacaktır**. Kullanıcı hiçbir API anahtarı eklemeden de sitenin çekirdek özelliklerini kullanabilecektir.
- AI olmadan da soru bankası, konu öğrenme, adaptif seviye/kalibrasyon, soru çözme, tekrar ve unutma sistemi, yanlışlar, denemeler, performans/istatistikler, hedef puan sistemi ve deterministik çalışma programı motoru çalışacaktır.
- AI Öğretmen, AI Çalışma Koçu, AI açıklamaları, AI pratik soruları ve benzeri özellikler çekirdek ürünün üzerine eklenen **opsiyonel gelişmiş katmanlar** olacaktır.
- Proje ticari olmadığı için platform kullanıcılara merkezi olarak AI kullanım maliyeti yüklemek zorunda olmayacaktır. Ayarlarda kullanıcı kendi desteklenen AI sağlayıcısını/API bağlantısını ve **kendi API anahtarını** tanımlayabilecektir.
- Normal kullanıcı arayüzünde ham model adlarıyla seçim yaptırılmayacaktır. Kullanıcı model ailesi isimleri yerine dört anlaşılır kalite/maliyet profili arasından seçim yapacaktır:
  1. **Düşük Seviyeli AI — Çok Ucuz Fiyat**
  2. **Normal Seviyeli AI — Ucuz Fiyat**
  3. **Yüksek Seviyeli AI — Normal Fiyat**
  4. **Çok Yüksek Seviyeli AI — Yüksek Fiyat**
- Her kalite seçeneğinin yanında küçük bir **bilgi/ünlem ikonu** bulunabilecektir. Masaüstünde hover, mobilde dokunma ile kısa bir açıklama açılacak; örneğin hız, muhakeme/öğretim kapasitesi, uzun veya zor sorulardaki yetenek ve göreli maliyet gibi farklar sade biçimde anlatılacaktır.
- Uygulama arka planda seçilen sağlayıcının gerçek modellerini bu dört kalite seviyesine eşleştirecektir. Böylece model isimleri veya sağlayıcı katalogları değişse bile kullanıcı deneyimi aynı soyut kalite seviyeleri üzerinden korunabilecektir.
- Bir sağlayıcıda belirli kalite seviyesine uygun model yoksa sistem o seçeneği desteklenmiyor olarak işaretleyebilir; kullanıcıya var olmayan bir yetenek vaat edilmeyecektir.
- Fiyat etiketleri **göreli maliyet seviyesi** anlamına gelecektir; sağlayıcı fiyatları zamanla değişebileceği için arayüzde kalıcı ve doğrulanmamış sabit token fiyatları model adına bağlanmayacaktır.
- AI özelliği kullanılmak istendiğinde API yapılandırması yoksa kullanıcıya sade şekilde **“AI özelliklerini kullanmak için Ayarlar'dan kendi API bağlantını ekleyebilirsin”** benzeri yönlendirme gösterilecektir; çekirdek çalışma akışı engellenmeyecektir.
- Geçersiz API anahtarı, kota aşımı, rate limit, sağlayıcı kesintısı veya AI hatası platformun çekirdek çalışma sistemlerini bozamayacaktır. AI özelliği hata verirse site **AI'sız akışa güvenli biçimde geri dönecektir**.
- AI çağrıları akademik seviye puanlama, doğrulanmış cevaplar, test sonuçları veya deterministik çalışma motoru gibi çekirdek gerçeklerin tek kaynağı olmayacaktır.
- Kullanıcı isterse AI özelliklerini tamamen kapatabilecektir.
- API anahtarının güvenli saklanması, maskelenmesi, istemci/sunucu sınırı, şifreleme, loglardan çıkarılması, sağlayıcı adapter yapısı ve model→kalite eşlemesinin teknik biçimi **Teknik Altyapı** başlığında ayrıca tasarlanacaktır.
- Varsayılan güvenlik ilkesi olarak API anahtarı ekranda açık biçimde tekrar gösterilmeyecek ve uygulama loglarına yazılmayacaktır.
- AI mimarisi mümkün olduğunca sağlayıcıdan bağımsız kurulacaktır; böylece gelecekte desteklenen servis veya modeller değiştiğinde ürün mantığının tamamını yeniden yazmak gerekmeyecektir.

## 25. KPSS Seviye / Karakter Gelişim Sistemi — kararlaştırıldı
- Platformda kullanıcıya görünen ayrı bir **oyuncu seviyesi / hesap seviyesi** bulunacaktır. Bu seviye akademik gizli puandan tamamen ayrı tutulacaktır.
- Akademik seviye **ne kadar bildiğini**, oyuncu seviyesi ise **bu yolculukta hesabını ne kadar geliştirdiğini ve ne kadar gerçek çalışma yaptığını** temsil edecektir.
- Oyuncu seviyesi kullanıcıya açık biçimde gösterilebilir; örneğin `Seviye 27`, toplam XP ve bir sonraki seviyeye kalan XP.
- Soru çözme, konu öğrenme, tekrar, yanlış güçlendirme, adaptif test, branş denemesi ve tam deneme gibi **gerçek çalışma faaliyetleri** XP kazandıracaktır.
- Siteye giriş, sayfa açma, anlamsız tıklamalar, videoyu açık bırakma veya benzeri pasif davranışlar XP üretmeyecektir.
- XP yalnızca ham soru sayısına bağlı olmayacaktır. Soru yeniliği, uygun zorluk, gerçek çalışma değeri, testin tamamlanması ve tekrar/farm davranışı gibi sinyaller dikkate alınabilecektir.
- Kullanıcının seviyesinin çok altında, daha önce defalarca çözülmüş veya açıkça farm amacıyla kullanılan soruların XP getirisi azalabilecek veya sıfırlanabilecektir.
- Yanlış cevap tamamen değersiz sayılmayacaktır. Gerçek bir çalışma/test tamamlayan kullanıcı temel emek XP'si kazanabilir; kaliteli doğru performans ve gerçek öğrenme kanıtı ek değer üretebilir.
- Konu öğrenme XP'si yalnızca video süresine bağlanmayacaktır. Konu öğrenmenin tamamlanması ve sonrasındaki gerçek öğrenme/pekiştirme sinyalleri esas alınacaktır.
- **“Bu konuyu zaten biliyorum”** diyerek içeriği atlayan kullanıcı konu öğrenme XP'si kazanmayacak, ancak kalibrasyon/test performansından normal XP kazanabilecektir.
- Yanlışların gerçekten düzeltilmesi özel olarak ödüllendirilebilecektir. Yanlış incelenip aynı beceriyi ölçen yeni doğrulama sorularında başarı sağlandığında **Hata Düzeltme / Güçlendirme XP'si** verilebilir.
- Seviye eğrisi başlangıçta daha hızlı, ilerleyen seviyelerde daha yavaş olacaktır. İlk seviyeler kısa sürede tatmin vermeli; yüksek seviyeler uzun dönem gerçek çalışma gerektirmelidir.
- İlk sürüm için 1–100 seviye yaklaşımı kullanılabilir; 100 sonrası prestij veya daha uzun vadeli ilerleme sistemi gerçek kullanım verisine göre ayrıca tasarlanabilir.
- Seviye atlama kaliteli ama dikkat dağıtmayan bir görsel geri bildirimle gösterilecektir. Test/oturum sonunda kazanılan XP ve level-up durumu özetlenebilir.
- Her seviyede özel ödül bulunmak zorunda değildir. Belirli kilometre taşlarında daha anlamlı ödüller açılacaktır.
- Ödüller akademik avantaj vermeyecektir. Profil çerçevesi, banner, tema, avatar öğesi, unvan, çalışma ekranı kozmetiği ve benzeri görsel/kişisel ödüller kullanılabilir.
- Unvan sistemi yalnızca level'a bağlı olmayabilir. Bazı unvanlar gerçek davranış ve başarılardan açılarak aynı seviyedeki kullanıcıların profillerinin farklılaşmasını sağlayabilir.
- Profil zamanla görsel olarak gelişecek; arkadaş/sosyal sistem geldiğinde level, seçili unvan, çerçeve ve bazı başarılar diğer kullanıcılar tarafından görülebilecektir.
- XP geri bildirimi her soruda popup olarak gösterilmeyecek. XP sessizce birikebilir; test, konu, oturum veya level-up sonunda toplu ve anlamlı biçimde gösterilecektir.
- Sistem **anti-farm** mantığına sahip olacaktır. Aynı kolay soruyu tekrar tekrar çözme, kronometreyi açık bırakma, aşırı hızlı rastgele işaretleme ve benzeri davranışların getirisi düşürülecektir.
- Gerçek ve anlamlı çalışmaya **günlük XP tavanı** konulmayacaktır. Uzun süre gerçekten çalışan kullanıcı cezalandırılmayacak; yalnızca sömürülebilir davranışlara azalan getiri uygulanacaktır.
- Denemeler, normal kısa testlerden daha büyük çalışma olayları olarak daha yüksek XP değeri taşıyabilir; ancak açıkça rastgele/gerçek dışı tamamlanan denemeler normal ödülü üretmemelidir.
- Tekrar ve retention çalışmaları özellikle ödüllendirilecektir; çünkü oyunlaştırma sıkıcı ama gerekli tekrar davranışını daha çekici hale getirmelidir.
- Kullanıcı XP geçmişinde XP'nin hangi çalışma türlerinden geldiğini görebilecektir; örneğin soru çözme, konu öğrenme, tekrar, yanlış düzeltme ve deneme.
- Oyuncu seviyesi dashboard'da küçük ama sürekli görülebilir; ana akademik çalışma deneyimini gölgelemeyecektir.
- Kullanıcıya yalnızca mevcut XP değil, **bir sonraki önemli ödül** de gösterilebilir. Örneğin `Seviye 25: yeni tema açılıyor`.
- XP ekonomisi çalışma programını bozmamalıdır. Farklı aktivitelerin XP/zaman getirileri aşırı dengesiz olmayacak; kullanıcı yalnızca daha çok XP verdiği için program motorunun faydalı önerisini terk etmeye teşvik edilmeyecektir.
- AI kullanımı XP için zorunlu değildir. AI kapalı kullanıcı aynı level sistemini eksiksiz kullanacaktır.
- AI Öğretmen/Koç ile yalnızca mesajlaşmak kendi başına XP vermeyecektir; AI sonrası gerçekleşen gerçek öğrenme, test veya güçlendirme faaliyeti kendi XP'sini üretecektir.
- Ayrı bir **Seviye Merkezi** ekranında mevcut level, toplam XP, sonraki level, sonraki ödül, son açılan ödüller, kozmetikler ve XP kaynakları gösterilebilecektir.
- Oyuncu seviyesi sosyal prestij sağlayabilir ancak **yüksek level = yüksek akademik yeterlilik** şeklinde yorumlanmayacak; iki sistem kullanıcı deneyimi ve veri modelinde ayrı tutulacaktır.
- Kesin XP değerleri, 1–100 eğrisi, kilometre taşı ödülleri ve anti-farm katsayıları ayrıca dengelenecektir; şu an ürün mimarisi ve davranış ilkeleri kesinleşmiştir.
- XP ekonomisinin temel yaklaşımı **sabit “1 doğru = X XP” modeli olmayacaktır**. Aktivite türü, öğrenme değeri, kalite/performance ve tekrar/farm etkileri birlikte değerlendirilebilecektir.
- Başlangıç dengelemesinde 10 soruluk adaptif test, kısa tekrar, konu öğrenme, yanlış güçlendirme, branş denemesi ve tam KPSS denemesi farklı temel XP bantlarına sahip olacaktır; ancak bu sayılar ürün kuralı değil **ayar parametresi** olacaktır.
- Testlerde yalnızca doğru cevap sayısı ödüllendirilmeyecek; gerçek bir testi tamamlamak temel emek XP'si verebilir, doğruluk ve kaliteli performans ek bonus üretebilir.
- **Dakika başına doğrudan XP** verilmeyecektir. Kronometreyi açık bırakmak XP üretmez. Gerçek aktif çalışma sinyalleri varsa oturum sonunda küçük **Odaklı Çalışma Bonusu** verilebilir.
- Bir öğrenme döngüsünü kaliteli biçimde tamamlamak, örneğin **konu öğrenme → adaptif test → yanlış inceleme**, küçük bir **Tam Öğrenme Döngüsü bonusu** üretebilir.
- İlk kez tamamlanan anlamlı aktivitelerde bir defalık **ilk tamamlama bonusları** bulunabilir; örneğin ilk konu, ilk gerçek deneme veya ilk yanlış güçlendirme.
- Tekrar edilen aynı sorularda XP getirisi kademeli biçimde azalabilir; anti-farm sistemi mümkün olduğunca **görünmez ve sessiz** çalışacaktır.
- Yanlış defterindeki planlı tekrar ve güçlendirme çalışmaları farm sayılmayacak; bunlar yeni soru XP'si yerine tekrar/güçlendirme XP'si üretebilecektir.
- Seviye gereksinimleri doğrusal olmayacaktır. İlk seviyeler hızlı ilerlerken yüksek seviyeler giderek daha fazla XP isteyecektir.
- İlk sürümde seviye kilometre taşları belirli ödüller açacaktır. Her seviyeye eşya koymak yerine 5/10/15/20 vb. önemli noktalarda daha anlamlı kozmetik ve unvan ödülleri kullanılabilir.
- Kozmetik ödüllerde **Standart / Nadir / Destansı / Efsanevi** benzeri nadirlik katmanları kullanılabilir; ancak lootbox veya rastgele satın alma mantığı olmayacaktır. Ödülün nasıl açılacağı şeffaf olacaktır.
- Başarımlar ve rozetler ayrıca XP verebilir; ancak başarım XP'si normal çalışmanın ana XP kaynağının önüne geçmeyecektir.
- Dashboard ve Seviye Merkezi kullanıcıya yalnızca mevcut level'ı değil, **bir sonraki önemli ödülü** ve ona kalan ilerlemeyi de gösterebilecektir.
- Seviye atlama geri bildirimi kısa ve kaliteli olacaktır; uzun konfeti/popup akışları soru çözme deneyimini kesmeyecektir.
- Sürekli **2X XP** benzeri kampanyalar temel ekonomi haline getirilmeyecektir. Özel çevrimiçi etkinliklerde sınırlı bonuslar ileride ayrıca düşünülebilir.
- İlk sürümde ayrı bir coin/mağaza ekonomisi kurulmayacaktır. Temel akış **XP → Level → Ödül açılması** olarak sade tutulacaktır.
- Online sistemlerde oyuncu level'ı sosyal profil bilgisi olabilir fakat tek başına rekabet sıralaması ölçütü olmayacaktır; haftalık/aylık XP ve diğer sosyal ölçüler daha sonra ayrı tasarlanacaktır.
- Kesin XP değerleri uygulamaya gömülü değişmez sabitler olmayacak; gerçek kullanım verisine göre ayarlanabilen **denge konfigürasyonu** olarak tutulacaktır.

## 26. Henüz planlanacak büyük alanlar
- Arkadaş ve sosyal özellikler
- Motivasyon ve gamification
- Sürekli gelişim / meta oyun sistemi
- Bildirimler / hatırlatmalar
- Profil ve kişiselleştirme
- Mobil/PWA deneyimi
- Admin paneli
- Teknik mimari ve veri modeli
- İçerik kalite kontrolü

---
Durum: Ürün planlama aşaması devam ediyor. Henüz geliştirmeye başlanmadı.
