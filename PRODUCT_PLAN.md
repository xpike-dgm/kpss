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

## 26. Streak / Çalışma Serisi Sistemi — kararlaştırıldı
- Çalışma serisi klasik **“her gün gir, bir gün kaçırırsan her şey sıfırlanır”** modeli olmayacaktır. Amaç motivasyon sağlamak, kullanıcıyı strese sokmak değildir.
- Seri yalnızca **gerçek ve anlamlı çalışma** ile ilerleyecektir. Siteye giriş yapmak, sayfa açmak veya pasif kullanım streak günü sayılmayacaktır.
- Streak için katı günlük soru/süre kotası zorunlu tutulmayacaktır. Kısa ama gerçek bir çalışma günü de aktif gün sayılabilecektir; kesin teknik eşikler sonradan dengelenecektir.
- Kullanıcıya iki ayrı gösterge sunulacaktır:
  - **Güncel Seri:** ardışık anlamlı çalışma günleri.
  - **İstikrar:** örneğin son 30 gündeki aktif çalışma günü oranı/sayısı.
- Streak bozulsa bile kullanıcının uzun dönem emeği görünür kalacaktır. Örneğin **Son 30 gün: 26 aktif gün** bilgisi seri sıfırlansa da korunur.
- Ayrı bir **En Uzun Seri** kaydı tutulacaktır. Güncel seri bittiğinde kişisel rekor ve geçmiş başarım silinmeyecektir.
- **Dinlenme Hakkı / Seri Koruması** mekanizması olacaktır. Belirli gerçek çalışma birikimi sonrasında kullanıcı sınırlı sayıda koruma hakkı kazanabilir.
- Seri koruması izole kaçırılan tek günü otomatik olarak koruyabilir. Koruma hakları sınırsız biriktirilmeyecek; örneğin düşük bir maksimum stok sınırı bulunacaktır.
- Art arda birden fazla çalışılmayan günün sonsuza kadar korumayla geçirilmesine izin verilmeyecektir. Seri koruması düzenli biçimde gün atlama aracı değil, gerçek hayat kaynaklı tekil kaçırmalar için kullanılacaktır.
- Seri bozulduğunda dramatik veya cezalandırıcı mesajlar kullanılmayacaktır. **“68 günlük serini kaybettin”** yerine önceki rekoru ve yeni başlangıcı vurgulayan yapıcı dil kullanılacaktır.
- Streak kaybı **XP kaybı, level düşüşü veya daha önce açılmış ödüllerin geri alınması** gibi cezalar üretmeyecektir.
- Streak sürekli XP çarpanına dönüşmeyecektir. Uzun seri sahibi kullanıcılara kalıcı 2X XP gibi ekonomik avantajlar verilmeyecektir.
- Bunun yerine **milestone ödülleri** kullanılabilir. Örneğin 3 / 7 / 14 / 30 / 60 / 100 günlük seri eşiklerinde tek seferlik küçük XP, başarım, unvan veya kozmetik ödül açılabilir.
- Bir milestone bir kez kazanıldığında streak bozulsa bile başarım/ödül kalıcı olacaktır.
- Takvim günü hesabı kullanıcının saat dilimine göre yapılacaktır. Gece yarısına taşan gerçek çalışma oturumlarında adaletsiz seri kaybı yaşanmaması için oturumun hangi güne yazılacağı tutarlı bir kuralla belirlenecektir.
- Aynı gün çok uzun çalışmak birden fazla streak günü üretmeyecektir. Streak **miktarı değil devamlılığı** ölçer.
- Dashboard'da seri görünür olabilir fakat ana akademik içeriği gölgelemeyecektir.
- Haftalık/aylık takvim görünümüyle çalışılan günler, dinlenme hakkı kullanılan günler ve bugünün durumu gösterilebilecektir.
- **İstikrar başarımları** streak'ten ayrı olabilir; örneğin son 30 günün 20'sinde çalışma veya 90 günün 65'inde çalışma gibi.
- Sosyal profil tarafında kullanıcı isterse **güncel seri, en uzun seri ve son 30 günlük aktif gün** bilgilerini gösterebilecektir.
- Leaderboard doğrudan en uzun streak üzerine kurulmayacaktır; eski kullanıcıların kalıcı avantaj kazanmaması için dönemsel istikrar gibi sosyal metrikler ileride ayrıca değerlendirilebilir.
- Kullanıcıya **“bugün henüz çalışma kaydedilmedi”** gibi sakin hatırlatmalar gösterilebilir; kırmızı alarm ve kayıp korkusu dili kullanılmayacaktır.
- Bildirim gönderilip gönderilmeyeceği ayrıca bildirim başlığında kararlaştırılacaktır.
- Kullanıcı isterse streak göstergesini tamamen kapatabilecektir. Oyunlaştırma isteğe bağlı kalacaktır.
- Streak sistemi ile XP sistemi görev olarak ayrı tutulacaktır: streak **devamlılığı**, XP ise **gerçek çalışma ve hesap gelişimini** temsil edecektir.
- Streak alt sistemi ürün mimarisi açısından kararlaştırılmıştır; kesin aktif gün eşiği, koruma hakkı kazanma sıklığı, milestone değerleri ve UI ayrıntıları daha sonra denge parametresi olarak netleştirilecektir.

## 27. Başarımlar ve Rozetler — kararlaştırıldı
- Başarım sistemi oyuncu level'ından farklı bir amacı temsil edecektir:
  - **Level:** kullanıcının hesabını ne kadar geliştirdiği ve ne kadar gerçek çalışma yaptığı.
  - **Başarımlar:** süreçte hangi özel kilometre taşlarını, davranışları ve gelişimleri gerçekleştirdiği.
- Başarımlar yalnızca ham sayaçlardan oluşmayacaktır. Sistem **Çalışma, Akademik Gelişim, Deneme, Yanlışlardan Öğrenme, İstikrar, Derslere Özel ve Özel/Nadir** gibi farklı kategorilere ayrılabilecektir.
- Bazı başarımlar **kademeli** olacaktır. Örneğin aynı başarım ailesi I / II / III / IV biçiminde gelişebilir ve bronz/gümüş/altın/özel görsel seviyelere sahip olabilir.
- Aynı tür davranış için yüzlerce ayrı küçük rozet üretmek yerine kademeli başarımlar tercih edilecektir.
- Başarımların önemli bir bölümü sayısal eşikten ziyade **anlamlı öğrenme davranışlarını** ödüllendirecektir; örneğin bir yanlışı gerçekten güçlendirmek, uzun aradan sonra geri dönmek, farklı derslerde dengeli çalışma yapmak veya retention tekrarını başarıyla tamamlamak.
- Akademik başarımlar kullanıcının gizli 0–110 skorunu doğrudan göstermeyecektir. Kullanıcıya anlaşılır ve doğrulanmış olaylar üzerinden başarım verilecektir.
- Derslere özel başarım aileleri bulunabilecektir. Türkçe, Matematik, Tarih, Coğrafya ve Vatandaşlık kendi özgün çalışma davranışlarını ödüllendirebilir.
- Ders başarımlarında sistem ölçmediği bir yeterliliği iddia eden aşırı unvanlar kullanılmayacaktır.
- Başarımların büyük bölümü kullanıcı tarafından önceden görülebilecek; kilitli başarımlarda koşul ve ilerleme örneğin **37 / 50** şeklinde takip edilebilecektir.
- Başarımların küçük bir bölümü **gizli / sürpriz** olabilir. Bu tür başarımlar sınırlı tutulacak ve kullanıcıyı anlamsız denemeler yapmaya teşvik edecek kadar belirsiz tasarlanmayacaktır.
- Başarımlar tek seferlik küçük XP ödülleri verebilir ancak başarım XP'si normal gerçek çalışmanın ana XP kaynağının önüne geçmeyecektir.
- Bazı özel başarımlar profil çerçevesi, unvan, rozet, tema veya başka kozmetik öğeler açabilecektir.
- Başarımlarda **Standart / Nadir / Destansı / Efsanevi** benzeri nadirlik katmanları kullanılabilecektir.
- Gerçek kullanım verisi yeterli olduğunda kullanıcıya **“kullanıcıların %X'i bu başarımı açtı”** benzeri gerçek nadirlik istatistiği gösterilebilir. Bu oran yapay olarak uydurulmayacaktır.
- Kullanıcı profilinde sınırlı sayıda özel başarıyı sergileyebileceği **Rozet Vitrini** bulunacaktır. Örneğin kullanıcı 3–5 rozetini seçerek sosyal profilinde gösterebilir.
- Tüm başarımlar ayrıca ayrı bir **Başarım Merkezi** ekranından görüntülenebilecektir.
- Yeni başarım açıldığında geri bildirim kısa ve kaliteli olacaktır; soru çözme akışını kesen büyük popup'lar kullanılmayacaktır.
- Başarım bildirimi ad, açıklama ve varsa XP/kozmetik ödülünü gösterebilir.
- Başarımlar **anti-farm** kurallarına tabi olacaktır:
  - Soru sayısı başarımlarında gerektiğinde benzersiz/geçerli sorular esas alınacaktır.
  - Çalışma süresi başarımlarında yalnızca kronometrenin açık kalması yeterli olmayacaktır.
  - Açıkça rastgele veya gerçek dışı hızda tamamlanan denemeler geçerli başarım ilerlemesi üretmeyebilir.
- Kazanılmış başarım sonradan geri alınmayacaktır. Akademik performans düşse bile geçmişte gerçekten kazanılmış bir kilometre taşı kalıcıdır.
- Başarımlar kullanıcının KPSS yolculuğunu kronolojik olarak anlatabilecek bir **hesap geçmişi / kupa tarihçesi** oluşturacaktır.
- Başarım Merkezi; toplam açılan başarım, toplam başarım sayısı, kategori dağılımı, nadirlik dağılımı, devam eden kademeli başarımlar ve rozet vitrini gibi bilgileri gösterebilecektir.
- Başarımlar doğal çalışma akışını bozmayacaktır. Kullanıcının sırf bir rozete ulaşmak için çalışma motorunun daha değerli önerilerini terk etmesini teşvik eden aşırı ödül dengelerinden kaçınılacaktır.
- Oyunlaştırma rolleri birbirinden ayrı tutulacaktır:
  - **XP / Level:** sürekli hesap gelişimi.
  - **Streak:** devamlılık.
  - **Başarımlar:** özel kilometre taşları ve yolculuk hikâyesi.
  - **Rozet Vitrini:** sosyal prestij ve kişiselleştirme.
- Başarımlar ve Rozetler alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin başarım kataloğu, eşikler, XP ödülleri, kozmetik listesi ve nadirlik dağılımı daha sonra içerik/denge konfigürasyonu olarak tasarlanacaktır.

## 28. Günlük / Haftalık Görev Sistemi — kararlaştırıldı
- Görev sistemi ayrı bir çalışma motoru olmayacak; mevcut program motorunun yararlı önerilerini oyunlaştırılmış hedeflere çevirecek.
- Günlük görevler kişiye özel olacak; temel yapı düşük sayıda görevden, örneğin 1 ana + 1–2 yan görevden oluşabilecek.
- Ana görev dashboard/program motorunun en değerli önerisiyle çelişmeyecek.
- Görevler zorunlu olmayacak; tamamlanmayan görevler ertesi güne borç olarak taşınmayacak.
- Günlük görevler kısa ve somut, haftalık görevler daha geniş davranış/denge hedefleri olacak.
- Haftalık görevler belirli güne zorlamayacak; kullanıcı hafta içinde istediği zaman tamamlayabilecek.
- Kullanıcı görevi değiştirebilecek; alternatifler program motorunun akademik olarak uygun seçeneklerinden gelecek ve sınırsız kolay görev aramaya dönüşmeyecek.
- Görev içindeki çalışma normal XP'sini verecek; görev tamamlaması yalnızca küçük ek bonus üretebilecek.
- Görev tamamlamak streak için zorunlu olmayacak.
- Görev türleri Öğrenme, Test, Tekrar, Yanlış Güçlendirme, Deneme, Denge ve Hız gibi farklı ailelerden oluşabilecek.
- Görev zorluğu kullanıcının seviyesi, geçmişi, tekrar ihtiyacı ve program motoruna göre ayarlanabilecek; kullanıcıdan zorunlu süre girdisi istenmeyecek.
- Tüm günlük görevleri tamamlamaya küçük ek bonus verilebilir; kısmi tamamlamalar boşa gitmeyecek.
- Streak sistemini kopyalayan görevlerden kaçınılacak; oyunlaştırma mekaniklerinin rolleri ayrı tutulacak.
- Günlük yenilenme kullanıcının saat dilimine göre olacak; gece yarısına taşan oturumlar adil bir grace-period/oturum günü kuralıyla ele alınabilecek.
- Kullanıcı görev sistemini görünürlük ayarlarından kapatabilecek.
- Dashboard'da kısa görev özeti, ayrı Görevler ekranında günlük/haftalık görevler, aktif görev zincirleri ve geçmiş bulunabilecek.
- Görev geçmişinde tamamlanan çalışmalar öne çıkarılacak; kaçırılan görevler negatif performans metriği olarak kullanılmayacak.
- Görev sistemi AI olmadan çalışacak. AI Koç varsa görevin neden önerildiğini doğal dille açıklayabilecek.
- Çok aşamalı akademik ihtiyaçlar için Görev Zinciri / Kamp yapısı kullanılabilecek.
- Online/takım görevleri daha sonra sosyal/meta oyun başlığında ele alınacak.
- Temel ilke: **Görev sistemi çalışma programına rakip değil, onun oyunlaştırılmış uzantısıdır.**
- Kesin görev sayıları, bonus değerleri, reroll sınırı, görev kataloğu ve yenilenme ayrıntıları daha sonra denge parametresi olarak ayarlanacaktır.

## 29. Görev Zincirleri / Kamplar — kararlaştırıldı
- Görev Zinciri / Kamp, günlük görevden daha büyük ve belirli bir akademik problemi birkaç aşamada çözmeye yönelik kişisel mini programdır.
- Kamp her zayıf konu için otomatik açılmayacaktır. Tekrarlayan yanlışlar, yeterince güvenilir düşük performans, retention riski, denemelerde sürekli aynı kayıp, hız problemi, önkoşul eksikliği veya ilerleyememe gibi anlamlı sinyaller olduğunda önerilecektir.
- Her kampın kullanıcıya açık, anlaşılır bir amacı olacaktır; örneğin belirli bir konudaki tekrar eden hataları azaltmak veya hızı iyileştirmek.
- Kamp kullanıcıya başarı garantisi vermeyecek; “güçlendirme süreci” olarak sunulacaktır.
- Kamp yapısı probleme göre değişebilecek ve tipik olarak 2–6 aşamadan oluşabilecektir. Gereksiz uzun zincirlerden kaçınılacaktır.
- Tipik aşamalar: kısa tekrar/öğrenme, uygun seviyede test, yanlış güçlendirme, yeni doğrulama testi ve gerektiğinde hız kontrolü.
- Kamp tek oturumda bitmek zorunda olmayacaktır; ilerleme kaydedilecek ve kullanıcı kaldığı yerden devam edebilecektir.
- Kampın tamamlanmaması veya ara verilmesi borç/ceza üretmeyecektir. Uzun aradan sonra kamp yeni performans verilerine göre yeniden değerlendirilebilecektir.
- Kamp belirli kontrol noktalarında dinamik olarak kısalabilir, uzayabilir veya farklı aşama ekleyebilir; ancak sürekli değişerek kullanıcıyı şaşırtmayacaktır.
- Kamp, program motoruyla aynı akademik öncelik sistemine bağlı olacaktır. Ayrı bir motor gibi “her şeyi bırak bunu yap” yaklaşımı kullanmayacaktır.
- Aktif kampın sıradaki aşaması program motorunda uygun bir öncelik sinyali olarak kullanılabilecektir.
- Aynı anda çok sayıda aktif kamp açılmayacaktır. Varsayılan yaklaşım bir ana kamp ve gerekirse sınırlı bir yan kamp olabilir; kesin sınır daha sonra dengelenecektir.
- Kullanıcı sistem önerisi olmadan da istediği ders/konu için kamp başlatabilecektir; kamp yine mevcut kullanıcı verilerine göre kişiselleştirilecektir.
- Hazır kamp şablonları kullanılabilecektir: Problemler Güçlendirme, Paragraf Hız, Tarih Tekrar, Coğrafya Yorum/Harita, Vatandaşlık Kavram ve Deneme Sonrası Hata gibi.
- Kamp sistemi AI olmadan tamamen çalışacaktır. AI açıksa kampın gerekçesini ve açıklamalarını daha doğal biçimde sunabilir.
- Her kamp aşaması kendi normal çalışma XP’sini üretir; kamp tamamlandığında küçük bir Kamp Tamamlama Bonusu ve bazı özel durumlarda başarım/rozet verilebilir.
- Kamp sırf XP için tekrar tekrar farm edilebilir olmayacaktır. Aynı kolay kampın tekrarında ilk tamamlama bonusu kaldırılabilir, soru havuzu yenilenebilir veya yalnızca gerçek ihtiyaç varsa tekrar önerilebilir.
- Kampı tamamlamak “konu kesin bitti” anlamına gelmeyecektir. Akademik durum doğrulama verisine göre ayrı takip edilmeye devam edecektir.
- Kamp sonunda gerçek veriye dayalı bir özet gösterilebilecektir: aşama sayısı, benzersiz soru, güçlendirilen yanlışlar, doğruluk/süre değişimi ve sonraki öneri.
- Yeterli gelişim olmazsa “kamp başarısız” gibi cezalandırıcı dil kullanılmayacak; sistem farklı öğrenme yolu, önkoşul, daha kolay test, AI Öğretmen veya başka bir tekrar yaklaşımı önerebilecektir.
- Kamp normal görevden daha özel bir görsel kimliğe sahip olabilir; aşama ilerlemesi ve mini kilometre taşları gösterilebilir.
- Kamp geçmişi saklanacaktır. Sistem geçmiş kamp bilgisini gelecekteki kişiselleştirmede kullanabilecektir.
- Özellikle **Deneme Sonrası Güçlendirme Kampı** desteklenecektir; denemede kümelenen konu, hız veya hata problemleri gerçek çalışma zincirine dönüştürülebilecektir.
- Kamp bitişi sadece kutu işaretlemeye dayanmayacaktır. Gerekli durumlarda içerik tamamlanmış olsa bile ayrı doğrulama testi istenebilecektir.
- Kullanıcı kampı durdurabilir/arşivleyebilir; XP geri alınmaz, streak etkilenmez ve “başarısız” etiketi oluşmaz.
- Aktif kampın aşamaları günlük görevlere entegre olabilecektir; örneğin günün ana görevi kampın sıradaki aşaması olabilir.
- Haftalık görevler aktif kampta ilerlemeyi teşvik edebilir ancak kampı tamamen bitirmeyi zorunlu deadline haline getirmeyecektir.
- Başlangıç kamp türleri: **Güçlendirme Kampı, Hız Kampı, Deneme Sonrası Kampı**. Yeni Konu Kampı ileride normal öğrenme sistemiyle çakışmayacak biçimde ayrıca değerlendirilebilir.
- Temel ayrım: **Günlük görev = küçük adım; Haftalık görev = geniş davranış hedefi; Kamp = belirli akademik problemi birkaç aşamada çözmeye yönelik kişisel mini program.**
- Görev Zincirleri / Kamplar alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin kamp sayısı, aşama sınırları, bonus değerleri, şablon kataloğu ve yeniden değerlendirme eşikleri daha sonra denge/konfigürasyon olarak netleştirilecektir.

## 30. Oturum Sonu Geri Bildirimi / Ödül Sunumu — kararlaştırıldı
- Oturum sonucu tek bir tutarlı akışta gösterilecektir: **Akademik Sonuç → Gelişim → XP/Level → Görev/Streak/Başarım → Sonraki Öneri**.
- İlk ve en görünür bölüm her zaman akademik sonuç olacaktır. Doğru/yanlış/boş, süre, gerekirse zayıf alanlar ve incelenmesi gereken yanlışlar oyunlaştırma bilgisinden önce gelecektir.
- Gizli akademik 0–110 puanı doğrudan gösterilmeyecektir. Bunun yerine “ilerleme sinyali”, “daha güçlü performans”, “daha fazla kanıt gerekiyor” gibi insan dili kullanılacaktır.
- XP özeti ana ekranda sade biçimde gösterilecek; ayrıntılı XP kaynakları isteğe bağlı açılabilir olacaktır.
- XP animasyonu kısa ve akıcı olacak; uzun sayı sayma veya ilerlemeyi bekleten animasyonlar kullanılmayacaktır.
- Level-up normal oturumdan daha görünür olabilir ancak kullanıcıyı bekletmeyecek ve doğrudan devam etme seçeneği olacaktır.
- Oyuncu level-up ile akademik başarı birbirine karıştırılmayacaktır. Zayıf test performansında dahi level atlanmışsa akademik sonuç dürüst, level mesajı nötr biçimde gösterilecektir.
- Streak bilgisi aynı gün tekrar tekrar gösterilmeyecek; günün ilk anlamlı çalışma sonucunda veya ilgili milestone/koruma olayında gösterilebilecektir.
- Göreve bağlı çalışma tamamlandığında görev ilerlemesi ve varsa küçük görev bonusu sonuç ekranında gösterilebilir.
- Yeni başarım/rozet soru sırasında değil, oturum sonunda gösterilecektir.
- Aynı oturumda birden fazla ödül açılırsa art arda popup yerine **Bu oturumda kazandıkların** biçiminde toplu özet kullanılacaktır.
- Ödül geri bildirimi üç yoğunluk seviyesinde düşünülecektir:
  - **Normal:** XP ve görev ilerlemesi.
  - **Önemli:** başarım, streak milestone, kamp tamamlama.
  - **Büyük:** level-up, nadir kozmetik veya büyük milestone.
- Nadirlik, görsel geri bildirimin yoğunluğunu etkileyebilir; ancak profesyonel KPSS deneyimini bozacak aşırı mobil oyun estetiğinden kaçınılacaktır.
- Oyunlaştırma sesleri isteğe bağlı olacaktır.
- Kullanıcı **Tam / Azaltılmış / Kapalı** gibi animasyon seviyeleri seçebilecek; cihazın reduce-motion tercihlerine de saygı gösterilecektir.
- Oyunlaştırma animasyonları hiçbir zaman “Devam Et” veya “Atla” aksiyonunu engellemeyecektir.
- Yanlışları inceleme, önerilen güçlendirme veya sonraki çalışma gibi akademik aksiyonlar XP/ödül detaylarından daha görünür ana CTA olacaktır.
- Oturum ekranının sonunda program motorundan gelen **sonraki en iyi hareket** gösterilecektir.
- Kamp aşaması ve kamp tamamlanması normal testten daha zengin sonuç özeti kullanabilir; yalnızca gerçek veri varsa değişim/trend bilgisi gösterilecektir.
- Tam KPSS ve branş denemelerinde akademik analiz önce gelecek; oyunlaştırma ödülleri sonuç analizinin sonunda daha küçük bölüm olarak sunulacaktır.
- Gerçek Sınav Modu sonucu daha sade ve ciddi görünecek; oyunlaştırma gerçek sınav simülasyonu hissini bozmayacaktır.
- Düşük performansta sahte kutlama dili kullanılmayacaktır. Gerçek çalışma XP’si verilebilir ancak akademik mesaj dürüst ve yapıcı kalacaktır.
- Yanlış cevaplar tüm emeği değersizleştirmeyecek; temel çalışma XP’si ile performans bonusu birbirinden ayrılabilecektir.
- Karşılaştırılabilir veri olduğunda kişisel rekorlar gösterilebilir; farklı zorluk/koşullar arasında sahte rekor üretilmeyecektir.
- Oturum sonunda bugünkü toplam soru, oturum, XP ve aktif çalışma süresi gibi küçük bir gün özeti gösterilebilir.
- Ayrı bir isteğe bağlı **Gün Sonu Özeti** bulunabilir; zorunlu bildirim olmayacaktır.
- XP kaynakları kategori seviyesinde şeffaf olacaktır; ancak anti-farm algoritmasının sömürülebilecek kesin katsayı/formülü açıklanmayacaktır.
- Yeni kozmetik veya ödül açıldığında kullanıcı mümkünse **Şimdi Kullan** seçeneğiyle doğrudan etkinleştirebilecektir.
- Hızlı kapatılan sonuçlarda kazanımlar kaybolmayacak; Seviye Merkezi, Başarım Merkezi veya geçmişte tekrar görülebilecektir.
- Aynı olay birden fazla ekranda tekrar tekrar kutlanmayacaktır; ödül olayı bir kez aktif olarak gösterilip sonrasında geçmişte saklanacaktır.
- Kullanıcı ödül sunumunu **Normal / Sade / Minimum** gibi bir tercihle azaltabilecektir.
- Temel amaç kullanıcının oturum sonunda üç soruyu net cevaplayabilmesidir: **Ne yaptım? Akademik sonucu neydi? Hesabım/yolculuğum nasıl ilerledi?**
- Oyunlaştırma üçüncü soruyu destekleyecek; ilk iki sorunun önüne geçmeyecektir.
- Oturum Sonu Geri Bildirimi / Ödül Sunumu alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin animasyon süreleri, sesler, görsel efekt yoğunluğu ve kart yerleşimleri UI/UX aşamasında netleştirilecektir.

## 31. Kozmetik Ödüller / Profil Kişiselleştirme — kararlaştırıldı
- Kozmetik sisteminin amacı akademik avantaj vermek değil, kullanıcının hesabına zamanla **kimlik, geçmiş ve kişiselleştirme hissi** kazandırmaktır.
- Sosyal profil; avatar/profil görseli, oyuncu seviyesi, seçili unvan, profil çerçevesi, banner, seçilmiş rozet vitrini ve kullanıcının isterse göstereceği streak/istikrar bilgilerini içerebilir. Gizli akademik seviye sosyal profile taşınmayacaktır.
- Kozmetikler ayrı slotlarda yönetilecektir: **Profil Çerçevesi, Banner, Unvan, Avatar/Avatar Öğesi, Rozet Vitrini, Tema ve Çalışma Ekranı Kozmetiği** gibi.
- Profil çerçeveleri ve bannerlar sosyal profilin en görünür kişiselleştirme araçlarından olacaktır. Hareketli öğeler desteklenebilir ancak dikkat dağıtıcı yanıp sönme/yoğun efektlerden kaçınılacaktır.
- Unvanlar level, başarım, streak, kamp, deneme veya başka anlamlı kilometre taşlarından açılabilir. Ölçülmeyen akademik üstünlüğü iddia eden “deha/uzman” gibi unvanlardan kaçınılacaktır.
- İlk sürüm avatar sistemi basit tutulabilir: kaliteli hazır avatarlar ve uygun olduğunda profil fotoğrafı. Parça parça karakter oluşturma sistemi ileride değerlendirilebilir.
- Avatar aksesuarları yalnızca kozmetik olacaktır; akademik statü veya avantaj ifade etmeyecektir.
- Rozet Vitrini daha önce kararlaştırıldığı gibi sınırlı sayıda seçili başarımı (yaklaşık 3–5) sosyal profilde sergilemeye izin verecektir.
- Açık/Koyu mod, erişilebilirlik ve temel kullanılabilirlik özellikleri ödül arkasına kilitlenmeyecektir. Kozmetik temalar yalnızca alternatif görsel stiller, vurgu renkleri ve yüzey/motif seçenekleri sunacaktır.
- Soru çözme ve gerçek sınav ekranlarında kozmetik kullanım çok sınırlı tutulacaktır. İşlevsel renkler, kontrast, doğru/yanlış durumu ve ana navigasyon kozmetik temadan bağımsız kalacaktır.
- Kilitli kozmetiklerin açılma koşulları gizli başarım ödülleri dışında açıkça gösterilecektir; örneğin level, başarım veya streak kilometre taşı.
- Lootbox, rastgele kutu veya şansa dayalı kozmetik kazanımı kullanılmayacaktır.
- İlk sürümde ayrı coin/mağaza sistemi olmayacaktır. Temel akış **gerçek çalışma → level/başarım/milestone → kozmetik açılması** şeklinde kalacaktır.
- Kozmetiklerde **Standart / Nadir / Destansı / Efsanevi** gibi nadirlik katmanları kullanılabilir. Yüksek nadirlik gerçekten daha özel koşullara bağlanacak ve özellikle Efsanevi ödüller sınırlı tutulacaktır.
- Kozmetik kaynakları çeşitlenecektir: level, başarım, streak, kamp, deneme, kişisel rekor ve ileride sosyal/meta etkinlikler.
- Aynı kozmetik ikinci kez “duplicate item” olarak verilmez. Bir kez açılan ödül kalıcıdır.
- Önceden kazanılmış kozmetikler streak bozulması, akademik performans düşüşü veya uzun ara nedeniyle geri alınmayacaktır.
- Ayrı bir **Koleksiyon** ekranı açılmış/kilitli kozmetikleri kategori bazında gösterebilir; ancak kullanıcıyı zorlayıcı yüzde 100 tamamlama/FOMO tasarımından kaçınılacaktır.
- Süreli etkinlik kozmetikleri ileride kullanılırsa sert “şimdi almazsan sonsuza kadar yok” modeli temel yaklaşım olmayacaktır; mümkün olduğunda yeniden erişim veya alternatif kazanım yolu düşünülecektir.
- Profilde tek bir **Düzenle** modu üzerinden avatar, çerçeve, banner, unvan ve rozet vitrini birlikte düzenlenebilecektir.
- Kullanıcı kilitli kozmetiklerin profilinde nasıl görüneceğini önizleyebilecek ancak açılmadan kullanamayacaktır.
- Yeni açılan kozmetik sonuç ekranından **Şimdi Kullan / Sonra** seçeneğiyle doğrudan etkinleştirilebilecektir.
- Birden fazla profil görünümü/loadout desteklenebilir; kesin sayı ve kullanım biçimi UI/UX aşamasında netleştirilecektir.
- Sosyal profilde kozmetikler görünür olabilir; netler, zayıf konular ve ayrıntılı akademik istatistiklerin paylaşımı otomatik olmayacak ve sosyal/gizlilik başlığında ayrıca kararlaştırılacaktır.
- Bazı kişiselleştirmeler yalnızca kullanıcının kendi dashboard/çalışma deneyiminde görünebilir; sosyal gösterim zorunlu değildir.
- Kullanıcı **kozmetik efektleri azalt / sade profil** benzeri seçeneklerle görünümü sadeleştirebilecektir.
- Hareketli kozmetikler reduce-motion ve daha önce seçilmiş animasyon azaltma tercihlerine uyacak; gerektiğinde statik sürümleri gösterilecektir.
- Varsayılan profil ve tema zaten kaliteli olacaktır. Kullanıcının iyi bir arayüz elde etmek için kozmetik kasması gerekmeyecektir.
- Kozmetik hedefleri program motorunun akademik kararlarını değiştirmeyecektir; kullanıcı ödüle yakın diye daha az faydalı çalışma önerilmeyecektir.
- Dashboard'da yaklaşan önemli kozmetik ödül küçük biçimde gösterilebilir; ancak ödül uğruna akademik akış bozulmayacaktır.
- Bazı özel kozmetikler dengeli çalışma kombinasyonlarından açılabilir; sadece tek bir metriği spamlamak yerine öğrenme + tekrar + deneme + yanlış güçlendirme gibi sağlıklı davranışların bileşimi ödüllendirilebilir.
- **KPSS yolculuğu** ve ders temalı koleksiyonlar kullanılabilir. Bunlar estetik tercih sağlar; akademik uzmanlık iddiası taşımaz.
- Sosyal etkinlik/turnuva/topluluk kozmetikleri ileride Meta Oyun/Sosyal sistemlerde ayrıca ele alınacaktır.
- Kozmetiklerde kazanma/açılma tarihi gösterilebilir; böylece ödüller hesabın yolculuk anılarına dönüşebilir.
- Profilin üst bölümünde avatar + çerçeve, oyuncu level'ı, seçili unvan, banner, 3–5 rozet vitrini ve isteğe bağlı seri bilgisi yer alabilir; gizli akademik puan/zayıf alanlar burada gösterilmeyecektir.
- Temel ilke: **Kozmetik “daha güçlü oldum” değil, “hesabımın kimliği ve geçmişi oluştu” hissini vermelidir.**
- Kozmetik Ödüller / Profil Kişiselleştirme alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin kozmetik kataloğu, görsel stiller, nadirlik dağılımı ve çıkış içerik sayıları UI/UX ve içerik üretimi aşamasında netleştirilecektir.

## 32. KPSS Yolculuk Haritası / Aşamalar — kararlaştırıldı
- KPSS hazırlığı kullanıcıya genel konumunu gösteren ayrı bir **Yolculuk Haritası** ile görselleştirilecektir.
- Yolculuk Haritası oyuncu level'ından tamamen farklı anlam taşıyacaktır:
  - **Oyuncu Level:** gerçek çalışma ve hesap gelişimi.
  - **KPSS Yolculuğu:** sınava hazırlık sürecinin hangi büyük aşamasında olunduğu.
- Yolculuk aşaması yalnızca XP'ye bağlanmayacaktır. Konu kapsamı, doğrulanmış akademik kanıt, güven, önkoşullar, retention, yanlışlar, branş/tam deneme verileri, hız/zaman yönetimi ve dersler arası kapsam gibi gerçek hazırlık sinyalleri kullanılacaktır.
- XP yolculuk aşamasının belirleyici akademik ölçütü olmayacaktır; gerekli görülürse yalnızca yardımcı bağlamsal sinyal olabilir.
- İlk ana aşama yapısı yaklaşık altı büyük bölümden oluşacaktır:
  1. **Başlangıç** — kalibrasyon ve kullanıcı profilinin oluşması.
  2. **Temel Atma** — temel konular/önkoşullar ve büyük bilgi boşluklarının kapatılması.
  3. **Gelişim** — konu kapsamının genişlemesi ve daha fazla güvenilir performans verisi oluşması.
  4. **Güçlenme** — yanlış, retention, zayıf alt konu ve hız problemlerinin aktif güçlendirilmesi.
  5. **Deneme Dönemi** — branş/tam deneme ve zaman yönetiminin ağırlığının artması.
  6. **Final Hazırlığı / Sınav Dönemi** — yeni içerikten çok deneme, retention, kritik zayıflıklar ve sınav stratejisinin öne çıkması.
- **“Sınava Hazır”** ifadesi yolculuk aşaması adı olarak kullanılmayacaktır; çünkü gerçek sınav readiness'i ayrı çok boyutlu sistemdir.
- Yolculuk aşaması “hazırlık sürecinin hangi bölümündesin?”, readiness ise “bugün sınava ne kadar hazırsın?” sorusunu cevaplayacaktır.
- Aşama geçişi tek bir yüzde veya tek eşikle olmayacak; her aşama için birden fazla gerçek akademik sinyal ve minimum koşul birlikte değerlendirilecektir.
- Backend çok sinyalli olabilir ancak kullanıcıya formül gösterilmeyecektir. Kullanıcı mevcut aşamasını, bu aşamadaki odaklarını ve bir sonraki aşama için anlaşılır genel ihtiyaçlarını görecektir.
- Aşama ilerlemesinde sahte hassasiyet üreten kesin yüzdelerden kaçınılacaktır. Gerekirse sayısız ilerleme barı veya “başlangıç / ilerliyor / aşamaya yakın” gibi kaba durumlar kullanılacaktır.
- Ana yolculuk doğrusal büyük aşamalardan oluşabilir; kişisel kamp, zayıflık, deneme ve özel çalışma olayları yan rota/kilometre taşı olarak haritada gösterilebilir.
- Yolculuk geçmişi tarihsel olarak saklanacaktır; kullanıcı hangi büyük aşamaya ne zaman geçtiğini görebilecektir.
- Bir kez geçilmiş ana yolculuk aşaması sonradan akademik düşüş nedeniyle geri alınmayacaktır. **Yolculuk milestone'u kalıcı**, güncel akademik durum/readiness ise gerektiğinde düşebilir.
- Geri alınmayan aşama yapısı nedeniyle aşama geçişleri yeterli kanıt oluşmadan erken verilmemeli; sistem gerektiğinde “bir sonraki aşamaya yakınsın” durumunda beklemelidir.
- Aşama geçişi önemli ama abartısız bir oyunlaştırma olayı olarak gösterilebilir; geçişin akademik anlamı kısa şekilde açıklanacaktır.
- Aşama geçişi küçük XP, başarım, unvan, banner veya profil çerçevesi gibi kalıcı kozmetik ödüller açabilir; ancak ödüller akademik kriterleri değiştirmeyecektir.
- Yolculuk aşamaları özellik kilidi olmayacaktır. Kullanıcı ilgili aşamaya ulaşmadan da deneme vb. özellikleri kullanabilir; aşama yalnızca sistem önerilerinin bağlamını ve ağırlığını etkileyebilir.
- Program motoru mevcut aşamayı bağlamsal sinyal olarak kullanabilir; ancak asıl karar yine güncel kullanıcı verisi, önkoşullar ve akademik fayda üzerinden verilecektir.
- Sınava kalan süre aşama bağlamını etkileyebilir fakat tek başına kullanıcıyı Final Hazırlığı gibi ileri aşamaya taşımayacaktır.
- Genel yolculuk haritasının yanında dersler için daha işlevsel mini durum etiketleri kullanılabilir; ana altı aşama her derse birebir zorla uygulanmayacaktır.
- Görsel tasarım aşırı fantastik RPG dünyası olmayacak; premium rota, istasyon, kamp noktası ve kilometre taşı metaforları tercih edilecektir.
- Ana aşamaların kendi görsel atmosferi olabilir ancak bu estetik katman akademik mantığı değiştirmeyecektir.
- Harita yaklaşan kamp, zayıf alan, deneme veya önemli milestone gibi kişisel olayları gösterebilir.
- Aktif görev/kamp ve “sonraki yararlı hareket” haritada görsel bağlama oturtulabilir; harita ayrı bir çalışma karar motoru olmayacaktır.
- Yolculuk aşaması XP/streak farmı ile açılmayacak; gerçek hazırlık ilerlemesinin oyunlaştırılmış sunumu olacaktır.
- Mevcut aşamanın ayrıntısında **bu aşamada yaptıkların / geliştirilmesi gerekenler / sonraki aşamaya genel ihtiyaçlar** gösterilebilecektir.
- Kullanıcıya “bir sonraki aşamaya 300 soru kaldı” gibi farm edilebilir sayısal eşikler gösterilmeyecektir.
- Yolculuk aşaması sosyal profilde isteğe bağlı gösterilebilir; ancak aşama bir kullanıcıyı diğerinden akademik olarak üstün ilan eden sıralama ölçütü olmayacaktır.
- Ana aşamalara bağlı kalıcı başarımlar/rozetler ve daha küçük yolculuk milestone'ları oluşturulabilir.
- Ana yolculuk aşamaları sık değişmeyecek; birkaç haftalık/aylık hazırlık dönemlerini temsil eden büyük bölümler olacaktır.
- Kullanıcı onboarding'de güçlü çıkarsa Başlangıç aşamasında uzun süre zorunlu tutulmayacaktır; ancak ileri aşamaya yerleşmek yalnızca self-report ile değil, yeterli doğrulanmış kanıtla yapılacaktır.
- Yolculuk Haritası dashboard'un yerini almayacaktır:
  - **Dashboard:** “Şimdi ne yapmalıyım?”
  - **Yolculuk Haritası:** “Genel hazırlık sürecinde neredeyim?”
- Harita ayrı bir **Yolculuk** ekranında veya uygun merkez içinde ayrıntılı, dashboard'da ise küçük özet olarak gösterilebilir.
- Temel sistem ayrımı korunacaktır:
  - **XP/Level:** emek ve hesap gelişimi.
  - **Streak:** devamlılık.
  - **Başarımlar:** özel kilometre taşları.
  - **Görevler:** mevcut yararlı küçük adımlar.
  - **Kamplar:** belirli akademik problemi çözmeye yönelik mini programlar.
  - **KPSS Yolculuğu:** genel hazırlık sürecindeki büyük konum.
  - **Readiness:** bugün gerçek sınava ne kadar hazır olunduğu.
- KPSS Yolculuk Haritası / Aşamalar alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin aşama adları, görsel rota tasarımı, çok sinyalli geçiş eşikleri ve milestone kataloğu daha sonra veri/denge/UI aşamasında netleştirilecektir.

## 33. Sürpriz Ödüller / Özel Anlar — kararlaştırıldı
- Özel Anlar, kullanıcının gerçek çalışma geçmişindeki nadir ve anlamlı gelişmeleri özel biçimde vurgulayacaktır.
- Ödül hakkı rastgele olmayacaktır; rastgelelik yalnızca sunum varyasyonunda kullanılabilir.
- Şansa dayalı kutu/ödül sistemi, rastgele büyük XP avantajı veya kullanıcıyı farm etmeye iten mekanikler kullanılmayacaktır.
- Özel Anlar; ilkler, kişisel rekorlar, geri dönüşler, istikrar, akademik kırılma noktaları, yolculuk aşamaları ve nadir anlamlı davranış kombinasyonlarından doğabilecektir.
- Başarım ile Özel An ayrılacaktır: başarım önceden tanımlı milestone, Özel An ise kullanıcının yolculuğundaki bağlamsal ve anlamlı olaydır.
- Kişisel rekorlar yalnızca karşılaştırılabilir koşullarda üretilecektir.
- Aynı özel an türü sık tekrarlanmayacak; tür bazlı tekrar sınırı/cooldown uygulanacaktır.
- Özel Anlar seyrek ve kişiselleştirilmiş olacaktır; her kullanıcı aynı anları aynı sırada görmeyecektir.
- Gizli başarımların küçük bir bölümü Özel An sunumuyla açılabilir.
- Özel An ödülleri çoğunlukla hatıra kartı, rozet, unvan, banner varyantı veya küçük kozmetik olacaktır; küçük XP bonusu verilebilse de ana XP ekonomisinin yerini almayacaktır.
- Çok nadir bir Özel An mutlaka büyük ödül vermek zorunda değildir; yalnızca kalıcı bir hatıra kartı da yeterli olabilir.
- Ayrı bir **Önemli Anlar / Hatıra Kartları** bölümü bulunabilir ve olaylar tarihleriyle saklanabilir.
- Hatıra kartları ileride sosyal sistemde kullanıcı isterse paylaşılabilir; otomatik paylaşım yapılmayacaktır.
- Kötü performans “özel başarısızlık anı” olarak koleksiyonlaştırılmayacaktır; sistem yapıcı gelişim ve geri dönüşleri öne çıkaracaktır.
- Sistem AI olmadan çalışacaktır. AI Koç yalnızca açıklama dilini zenginleştirebilir.
- Özel An sunumları kısa, atlanabilir ve olayın önemine göre farklı yoğunlukta olacaktır.
- Kullanıcı **Özel Anları Göster** ayarını kapatabilecektir; temel başarımlar ve milestone'lar etkilenmeyecektir.
- Sistem FOMO yaratmayacak; kullanıcı belirli bir gün giriş yapmadığı için hak ettiği geçmiş bir özel anı kaybetmeyecektir.
- Sonuç ekranı hızlı geçilse bile Özel An geçmişe kaydedilecek ve sonradan görülebilecektir.
- Bazı Özel Anlar hiçbir XP/kozmetik vermeden yalnızca anlamlı bir geri bildirim ve hatıra kartı olabilir.
- Kullanıcıya “bu neden geldi?” sorusunun anlaşılır cevabı verilecek; ancak sömürülebilecek kesin formül gösterilmeyecektir.
- Temel amaç, uzun vadede kullanıcının kendi **KPSS çalışma tarihçesini** oluşturabilmesidir.
- Sürpriz Ödüller / Özel Anlar alt sistemi ürün mimarisi açısından tamamlanmıştır; kesin katalog, tekrar sınırları, nadirlik ve görseller daha sonra içerik/denge/UI aşamasında netleştirilecektir.

## 34. Sürekli Gelişim / Meta Oyun Sistemi — kararlaştırıldı
- Meta oyun, mevcut XP/Level, streak, başarımlar, görevler, kamplar, kozmetikler, yolculuk haritası ve özel anların üstünde duran **uzun vadeli bağlayıcı katman** olacaktır.
- Meta oyun ayrı bir ikinci kalıcı XP/enerji/coin ekonomisi yaratmayacaktır. Mevcut sistemleri sezon, lig, kişisel rekor, koleksiyon, dönemsel etkinlik ve sosyal rekabet döngüleriyle birleştirecektir.
- Akademik katman “ne çalışmalıyım?”, meta katman ise “uzun vadede hesabım ve çalışma yolculuğum nasıl gelişiyor?” sorusunu cevaplayacaktır.
- Meta sistem akademik program motorunu hiçbir zaman override etmeyecek; ödül veya sıralama uğruna daha düşük akademik faydalı çalışma önerilmeyecektir.

### Sezon sistemi
- Ana uzun vadeli döngü **Sezonlar** olacaktır. Kesin süre daha sonra dengelenecek; yaklaşık birkaç haftalık dönemler mantığı kullanılacaktır.
- Sezon boyunca kullanıcı, kalıcı oyuncu XP’sinden ayrı **Sezon Puanı** kazanabilecektir.
- Sezon Puanı yalnızca dönemsel rekabet/ilerleme içindir; sezon bitince yenilenebilir. Kalıcı oyuncu level'ı, başarımlar, kozmetikler, yolculuk ve hatıra geçmişi korunur.
- Sezon puanı ham çalışma süresine bağlanmayacaktır. Geçerli testler, yeni/benzersiz sorular, retention, yanlış güçlendirme, kamp ilerlemesi, denemeler, konu öğrenme ve dengeli çalışma gibi gerçek davranışlar esas alınacaktır.
- Aynı etkinlik hem kalıcı XP hem sezon puanı üretebilir ancak iki sistemin ağırlıkları farklı amaçlara göre ayarlanabilir.
- Sezon puanı aynı soru spamı, kolay içerik farmı, kronometre açık bırakma, rastgele deneme tamamlama gibi davranışlara karşı anti-farm koruması kullanacaktır.
- Gerçek ve uzun süreli kaliteli çalışma sert günlük tavanla cezalandırılmayacaktır; düşük değerli tekrar davranışlarında azalan getiri uygulanabilir.

### Kişisel Sezon Yolu
- Her sezonda sosyal rekabetten bağımsız **Kişisel Sezon Yolu** bulunacaktır.
- Kullanıcı anlamlı sezon puanı/milestone'ları ile sezon yolu üzerinde ilerleyerek kozmetik, unvan, banner, rozet ve benzeri kalıcı ödüller açabilir.
- Sezon Yolu ücretli battle-pass mantığında olmayacaktır; ilerleme yalnızca gerçek çalışmayla sağlanacaktır.
- Ana sezon ödülleri önceden görülebilir ve şeffaf olacaktır; küçük Özel Anlar sürpriz kalabilir.
- Sezon Yolu sağlıksız sonsuz grind baskısı yaratmayacak; anlamlı sayıda ana milestone ve isteğe bağlı prestij ilerlemesi mantığı kullanılabilir.
- Sezon boyunca makul ve gerçek katılım gösteren kullanıcılar temel sezon ödüllerine ulaşabilir; yalnızca en üst yüzdeye ödül verme yaklaşımı kullanılmayacaktır.

### Ligler ve sıralama
- Sosyal rekabet isteyen kullanıcılar için **isteğe bağlı Lig sistemi** olacaktır.
- Kullanıcılar benzer dönem/aktivite bağlamında daha küçük rekabet gruplarına yerleştirilebilir; kesin grup boyutu ve lig yapısı sonra dengelenecektir.
- Lig yükselme/düşme mekanizması olabilir ancak düşüş ağır ceza veya hesap kaybı olarak sunulmayacaktır.
- Lig seviyesi akademik avantaj sağlamayacaktır; ödüller prestij, profil ve kozmetik tarafında kalacaktır.
- Lig/sezon adı ve görsel hiyerarşisi profesyonel ama oyun hissi veren yapıda tasarlanacaktır; kesin isimler UI/marka aşamasında netleşecektir.
- Yeni kullanıcılar uzun süredir aktif kullanıcılarla anlamsız biçimde eşleştirilmeyecek; placement/korumalı başlangıç mantığı kullanılacaktır.
- Kalıcı oyuncu level'ı sezon veya lig değişiminde sıfırlanmayacaktır.
- Profilde geçmiş sezon/lig dereceleri ve tarihçesi saklanabilecektir.
- Sezon ödülleri **katılım ödülü + başarı/prestij varyantı** şeklinde katmanlanabilir.
- Liglere katılım isteğe bağlı olacaktır; sosyal rekabeti kapatan kullanıcı Sezon Yolu, kişisel rekor, koleksiyon ve diğer meta sistemlerden tam olarak yararlanabilecektir.
- Sosyal rekabeti kapatan kullanıcı temel ödül sisteminde ikinci sınıf kullanıcıya dönüştürülmeyecektir.

### Leaderboard ilkeleri
- Tek bir global “en çok çalışan” sıralaması ana meta sistem olmayacaktır.
- Ham akademik net, ham çalışma süresi veya ham soru sayısı tek başına ana leaderboard metriği olmayacaktır.
- Gerekirse birkaç ayrı rekabet ekseni kullanılabilir; örneğin **Sezon Genel, İstikrar, Deneme/Geçerli Çalışma Katkısı** gibi.
- Çok fazla leaderboard açılmayacak; her sıralama neyi ölçtüğünü açıkça anlatacaktır.
- Akademik gelişim karşılaştırması kullanılacaksa başlangıç noktası, veri güveni ve zorluk farkı normalize edilmelidir; güvenilir değilse sosyal sıralama yerine kişisel rekor olarak gösterilecektir.
- Aktif çalışma süresi gösterilecekse yalnızca kronometre süresi değil, gerçek etkileşimle desteklenen aktif süre kullanılacaktır.
- Soru sayısı gösterilecekse geçerli/benzersiz soru ve anti-farm filtreleri kullanılacaktır.

### Kişisel rekabet ve rekorlar
- Meta sistemde **kendi geçmişinle yarışmak**, sosyal rekabetten daha önemli olacaktır.
- Ayrı bir **Kişisel Rekor Merkezi**; karşılaştırılabilir deneme performansı, en uzun seri, 30 günlük istikrar, yanlış güçlendirme, hız/doğruluk dengesi, kamp ve benzeri güvenilir rekorları gösterebilir.
- “Bu haftaki sen vs geçen haftaki sen” gibi dönem karşılaştırmaları yalnızca toplam süreyi değil, çalışma kalitesini ve davranış çeşitliliğini de gösterecektir.
- AI Koç varsa dönem karşılaştırmasını doğal dille yorumlayabilir; sistem AI olmadan da çalışacaktır.

### Sezon görevleri ve uzun dönem hedefleri
- Sezon görevleri günlük/haftalık görevlerden farklı, birkaç haftaya yayılan geniş davranış hedefleri olacaktır.
- Örnek hedefler retention, gerçek sınav denemeleri, yanlış güçlendirme ve dersler arası dengeli çalışma gibi faydalı davranışlara dayanabilir.
- Sezon görevleri program motorunun akademik önceliklerini bozmayacak; tek konuya zorlayıcı ve farm edilebilir tasarlanmayacaktır.
- Kullanıcıya zorunlu kota vermeden kişisel haftalık gelişim hedefleri sunulabilir; kaçırılması ceza/borç üretmeyecektir.

### Koleksiyon ve uzun vadeli hesap hissi
- Meta merkezde sezon koleksiyonları, ders temalı koleksiyonlar, yolculuk rozetleri ve diğer kalıcı setler görülebilecektir.
- Koleksiyon sistemi FOMO veya zorunlu %100 tamamlama baskısı yaratmayacaktır.
- Kalıcı level, geçmiş sezon rozetleri, başarımlar, kozmetikler, hatıra kartları ve yolculuk geçmişi hesabın zamanla “yaşlanmış ve gelişmiş” hissini verecektir.
- Ayrı bir yeni city-builder/üs ekonomisi zorunlu değildir; mevcut profil/yolculuk/meta sistemlerinin uzun vadeli hesap kimliği üretmesi esas alınacaktır.

### Dönemsel etkinlikler ve topluluk hedefleri
- KPSS çalışma mantığıyla uyumlu dönemsel etkinlikler desteklenecektir; örneğin Deneme Dönemi, Retention Haftası veya Yanlışlardan Öğrenme temaları.
- Etkinlikler program motorunu override etmeyecek ve kullanıcıyı akademik ihtiyacından uzaklaştırmayacaktır.
- Topluluk çapında ortak hedefler desteklenebilir; örneğin belirli dönemde toplam geçerli çalışma katkısıyla ortak kozmetik/rozet açılması.
- Topluluk hedefleri “global boss” benzeri oyun hissi verebilir ancak profesyonel KPSS dili ve akademik fayda korunacaktır.
- Sezon ve etkinlikler sert FOMO yaratmayacak; kaçırılan bir dönem kullanıcı hesabını kalıcı olarak eksik/işlevsiz bırakmayacaktır.

### Takım ve arkadaş bağlantısı
- Takım/arkadaş temelli meta özellikler ürün kapsamındadır; ayrıntıları **Arkadaş Sistemi** başlığında sosyal grafik ve gizlilik kararlarıyla birlikte kesinleştirilecektir.
- Küçük çalışma ekipleri, ortak haftalık hedefler, takım sezon puanı, takım ligleri ve ortak etkinlikler desteklenebilecek ana konseptlerdir.
- Sosyal profil ve leaderboard görünürlüğü kontrollü olacaktır; net, zayıf konu ve ayrıntılı akademik veri otomatik olarak paylaşılmayacaktır.

### Geri dönüş ve uzun ara
- Uzun ara veren kullanıcı cezalandırılmayacak; **Geri Dönüş Akışı** ile retention riski, kısa yeniden kalibrasyon ve en yararlı sonraki adım gösterilebilecektir.
- Kaçırılmış günlük/haftalık/sezon görevleri borç olarak birikmeyecektir.
- Kullanıcı döndüğünde geçmiş hesap gelişimi korunacak ve sistem o günkü gerçek duruma göre yeniden başlayacaktır.

### Sınava yaklaşma ve sınav sonrası
- Sınava çok yaklaşıldığında meta oyun arayüz ağırlığı azaltılabilir; deneme, kritik tekrar ve sınav stratejisi daha görünür hale gelir.
- Meta sistem arka planda ilerlemeye devam edebilir ancak akademik odak önceliklidir.
- Sınav sonrası hesap “ölmeyecektir”. Tamamlanan KPSS dönemi arşivlenebilir ve yeni sınav dönemi ayrı bir yolculuk olarak başlatılabilir.
- Önceki dönemler yıl/hedef bazında saklanabilir; kalıcı oyuncu level'ı, başarımlar, kozmetikler ve hesap tarihi korunabilir.
- Veri modeli kullanıcının sonraki yıllarda farklı KPSS hedef/düzey dönemlerine geçmesini destekleyecek şekilde tasarlanmalıdır.

### Meta Merkez
- Kullanıcı arayüzünde adı “Meta Oyun” olmak zorunda değildir; **Gelişim / Sezon / Merkez** gibi doğal bir ad kullanılabilir.
- Meta Merkez; oyuncu level'ı, sezon durumu, Sezon Yolu, lig, kişisel rekorlar, koleksiyon, önemli anlar, sezon geçmişi ve yaklaşan büyük milestone'ları birlikte gösterebilir.
- Dashboard “şimdi ne yapmalıyım?”, Meta Merkez ise “uzun vadede hesabım/sezonum nasıl ilerliyor?” sorusunu cevaplayacaktır.
- Kullanıcıya ayrıca anlamsız bir “Meta Güç” birleşik skoru gösterilmeyecektir.
- Meta ödülleri hiçbir zaman soru zorluğu, AI kalitesi, sınav sonucu veya akademik ayrıcalık sağlamayacaktır.

### Ekonomi sınırları
- Ayrı coin/mağaza sistemi şu anki ürün tasarımına dahil edilmeyecektir; mevcut XP → Level → Ödül ve sezon/kozmetik yapısı yeterlidir.
- Level 100 sonrası ayrı Prestij sistemi gerçek denge/ilerleme eğrisi netleşmeden yapay biçimde eklenmeyecektir; bunun ayrıntısı seviye ekonomisi son dengelemesinde kararlaştırılacaktır.
- Meta sistem yeni para birimleri ekleyerek karmaşıklaştırılmayacaktır.

### Ana meta omurga
- Ürünün kapsamlı meta omurgası şu bileşenlerden oluşacaktır:
  - Kalıcı Oyuncu Level'ı
  - Sezonlar
  - Kişisel Sezon Yolu
  - İsteğe bağlı Ligler / Leaderboard'lar
  - Kişisel Rekor Merkezi
  - Sezon görevleri ve dönemsel hedefler
  - Koleksiyon / sezon geçmişi
  - Dönemsel etkinlikler ve topluluk hedefleri
  - Geri Dönüş Akışı
  - Arkadaş/takım meta özellikleri
  - Çok yıllı KPSS dönem arşivi
- Sürekli Gelişim / Meta Oyun Sistemi ürün mimarisi açısından tamamlanmıştır; kesin sezon süresi, puan katsayıları, lig boyutları, milestone eşikleri ve ödül kataloğu daha sonra denge/konfigürasyon/UI aşamasında netleştirilecektir.

## 35. Ürün Çıkış Kapsamı İlkesi — kararlaştırıldı
- Ürün planı **MVP / ilk sürüm / sonra ekleriz** mantığıyla parçalanmayacaktır.
- Hedef, planlama sürecinde kabul edilen ana sistemlerin tamamını içeren **tek, kapsamlı ve bütünlüklü ürün çıkışı**dır.
- Bir özellik başka bir başlıkta “daha sonra ele alınacak” denildiğinde bu, sonraki ürün sürümüne ertelendiği anlamına gelmez; yalnızca ürün planlama sırasındaki ilgili tartışma başlığını ifade eder.
- Kabul edilmiş bir özelliğin detayları UI/UX, teknik mimari, denge veya içerik üretimi aşamasında netleşebilir; bu durum özelliği çıkış kapsamı dışına çıkarmaz.
- Bundan sonraki planlama metinlerinde “ilk sürümde yapardım / sonraki sürümde eklenir” dili kullanılmayacak; bunun yerine **çıkış kapsamı**, **ürün kapsamı** veya **ilgili başlıkta detaylandırılacak** ifadeleri kullanılacaktır.
- Yalnızca kullanıcı açıkça kapsam dışı bırakırsa veya daha sonra karar değiştirirse bir özellik ana çıkıştan çıkarılacaktır.

## 36. Arkadaş Sistemi — kararlaştırıldı
- Arkadaş sistemi tamamen isteğe bağlı sosyal katman olacaktır; arkadaş kullanmayan kullanıcı ürünün akademik, oyunlaştırma veya meta özelliklerinden mahrum kalmayacaktır.
- Sosyal sistemin amacı sosyal medya oluşturmak değil, **birlikte çalışma, sağlıklı rekabet ve motivasyonu** desteklemektir.
- Arkadaş ekleme; benzersiz @kullanıcıadı, profil bağlantısı, arkadaş kodu ve uygun olduğunda QR kod ile yapılabilecektir.
- Gerçek ad zorunlu olmayacak; görünen ad değişebilir, benzersiz kullanıcı adı kimlik için kullanılacaktır.
- Arkadaşlık karşılıklı onayla kurulacaktır. İstek gizliliği; Herkes / arkadaşların arkadaşları / yalnızca kod-link / kimse gibi seçeneklerle yönetilebilir.
- Engelleme, sessize alma ve sosyal görünürlük kontrolleri temel güvenlik özellikleri olacaktır.
- Profil görünürlüğü tek açık/kapalı seçeneğine sıkıştırılmayacak; level, streak, rozet, yolculuk aşaması, aktivite durumu ve benzeri öğeler ayrı ayrı paylaşılabilir/gizlenebilir olacaktır.
- Gizli akademik skor hiçbir koşulda sosyal profile taşınmayacaktır.
- Zayıf konular ve ayrıntılı akademik analizler varsayılan olarak özel kalacaktır.
- Deneme netleri ve sonuçlar varsayılan olarak özel olacak; kullanıcı isterse belirli bir sonucu manuel paylaşabilecektir.
- Sosyal profilin ana vitrini avatar, çerçeve, banner, oyuncu level'ı, seçili unvan, 3–5 rozet vitrini, isteğe bağlı KPSS Yolculuk aşaması, sezon/lig rozeti ve önemli anlardan oluşabilecektir.
- Son aktivite/presence bilgisi isteğe bağlı olacaktır; örneğin “Çalışıyor”, “Bugün aktif”, “Yakın zamanda aktif”. Tam zaman ve ayrıntılı izleme gösterilmeyecektir.
- Arkadaş ana ekranı sonsuz sosyal feed olmayacaktır. Bunun yerine kompakt **Arkadaşlar Merkezi** kullanılacaktır.
- Arkadaşlar Merkezi; arkadaş listesi, çalışan arkadaşlar, istekler, ortak hedefler, çalışma davetleri, meydan okumalar ve uygun karşılaştırmaları gösterebilir.
- Arkadaş listesinde çevrimiçi, çalışıyor, takımım, favoriler ve son birlikte çalışılanlar gibi filtreler desteklenebilir.
- Favori arkadaşlar çalışma daveti ve sosyal bildirimlerde önceliklendirme için kullanılabilir.
- Arkadaşlık silme sessiz olacaktır; karşı tarafa gereksiz sosyal gerilim oluşturan bildirim gönderilmeyecektir.

### Birlikte çalışma
- Arkadaşlar birbirini **Birlikte Çalış** davetiyle ortak çalışma odasına çağırabilecektir.
- Ortak çalışma odasında herkes kendi akademik programına devam edebilir; aynı soru/konuyu çözmek zorunda değildir.
- Oda; aktif kullanıcılar, çalışma durumu, bireysel hedef, mola durumu ve toplam ortak çalışma bağlamını gösterebilir.
- Kullanıcı isterse çalıştığı konu bilgisini gizleyip yalnızca “Çalışıyor” durumunu paylaşabilir.
- Pomodoro zorunlu değildir; 25/5, 50/10 veya serbest çalışma gibi seçenekler desteklenebilir.
- Sessiz odak modu bulunacaktır; kullanıcılar birlikte çalışırken sohbet tamamen kapatılabilir.
- Grup molası desteklenebilir ancak herkes aynı anda mola vermeye zorlanmaz.
- Oda gizliliği Davetle / Arkadaşlar katılabilir / Takıma özel gibi seçeneklerle yönetilebilir.
- Ortak oturum sonunda kişi kişi hassas akademik veri açmadan toplam aktif süre, kişi sayısı ve tamamlanan oturum gibi grup özeti gösterilebilir.
- Ortak odada bulunmak ayrı ana XP kaynağı olmayacaktır; kullanıcı kendi gerçek çalışmasından normal XP kazanır.
- Sosyal milestone/başarım yalnızca gerçek aktif çalışma sinyali varsa üretilebilir.
- İki arkadaş arasında “birlikte X saat çalışıldı / X ortak oturum yapıldı” gibi ortak geçmiş istatistikleri tutulabilir.
- “Arkadaşlık serisi” gibi kırılınca baskı oluşturan bir mekanik kullanılmayacaktır; milestone yaklaşımı tercih edilecektir.

### Meydan okumalar ve 1v1
- Arkadaşlar birbirine isteğe bağlı meydan okumalar gönderebilecektir.
- Meydan okumalar retention, gerçek deneme, yanlış güçlendirme, aktif gün veya program motoruyla uyumlu geçerli çalışmalar gibi sağlıklı davranışlara dayanacaktır.
- Ham soru sayısı spamı veya akademik plana aykırı görevler teşvik edilmeyecektir.
- Meydan okumayı karşı taraf kabul etmeden kullanıcıya görev dayatılamayacaktır.
- Program motorunun önerileri sosyal meydan okuma nedeniyle bozulmayacaktır.
- Aynı şartlarda gerçek oyun rekabeti için **canlı 1v1 soru düellosu** desteklenecektir.
- 1v1'de doğruluk hızdan önce gelecektir; yanlış hızlı cevap, doğru cevaba karşı avantaj sağlamayacaktır.
- Düello soru havuzu yakın zamanda görülmüş sorulara ve ezber/farm riskine karşı korunacaktır.
- Düello bir oyun modu olacaktır; normal akademik mastery hesabının ana veri kaynağı olmayacaktır.
- Düello sonuç dili nötr ve profesyonel olacaktır; aşağılayıcı “ezildin” benzeri dil kullanılmayacaktır.
- Aynı kullanıcıların tekrar tekrar düello yaparak XP/sezon puanı farm etmesi engellenecektir.
- Sosyal rekabet ödülleri çoğunlukla kozmetik, prestij ve hatıra niteliğinde olacaktır.

### Arkadaş sıralamaları ve karşılaştırmalar
- Arkadaşlar arasında haftalık/sezonluk mini sıralamalar bulunabilecektir.
- Sezon Puanı, İstikrar ve geçerli aktif çalışma gibi sağlıklı metrikler kullanılabilir; ham net ana sosyal sıralama metriği olmayacaktır.
- Günlük bilgi gösterilebilir ancak ödüllü rekabet daha çok haftalık/sezonluk bağlamda tutulacaktır.
- Arkadaş karşılaştırmasında level, başarımlar, streak, sezon puanı, ortak çalışma ve meydan okuma geçmişi gibi izinli veriler kullanılabilir.
- Gizli akademik skor, zayıf alanlar ve paylaşılmamış akademik veriler karşılaştırmaya dahil edilmeyecektir.
- “Seni geçti / geriye düştün” gibi baskıcı bildirim dili temel yaklaşım olmayacaktır.
- Lig görünümünde arkadaşların konumu vurgulanabilir.
- Aynı takım üyeleri bireysel liglerde birbirini görebilir ancak “takımın sonuncusu” gibi utandırıcı etiketler kullanılmayacaktır.
- Hedef net sosyal üstünlük metriği olmayacak; paylaşımı tamamen isteğe bağlıdır.

### Çalışma ekipleri
- Küçük **Çalışma Ekibi** sistemi ürün kapsamındadır; yaklaşık 3–8 kişilik gruplar hedeflenebilir, kesin limit daha sonra dengelenir.
- Ekiplerde ad, logo/avatar, banner ve kısa açıklama bulunabilir.
- Kullanıcı birden fazla çalışma grubunda bulunabilir; sezon rekabetinde bir aktif takım seçme gibi sınırlamalar adalet için kullanılabilir.
- Takım için ayrı kalıcı XP ekonomisi oluşturulmayacaktır.
- Takım gelişimi ortak milestone, görev, sezon katkısı, başarımlar ve geçmiş ile gösterilecektir.
- Takım ortak görevleri retention, gerçek denemeler, yanlış güçlendirme ve başka akademik olarak değerli katkılara dayanabilir.
- Ekip hedefleri toplam katkı modeliyle tasarlanabilir; herkesin %100 tamamlaması zorunlu olmayacaktır.
- Takım görevi tamamlanmazsa ceza, streak kaybı veya borç oluşmayacaktır.
- Bireysel katkılar gösterilebilir fakat kullanıcıları suçlayan/toksik dil kullanılmayacaktır.
- Takım sezon puanı ve takım ligleri desteklenecektir.
- Takım büyüklüğü sıralama adaletinde normalize edilecek; kalabalık takım sırf kişi sayısıyla avantaj kazanmayacaktır.
- Takım rolleri basit olacaktır: Kurucu / Yönetici / Üye gibi.
- Takım sahibi üyeleri davet edebilir, çıkarabilir ve temel yönetim yapabilir; karmaşık Discord tarzı rol sistemi kurulmayacaktır.
- Kurucu ayrılırsa takım devredilebilir; takım geçmişi ve sezon başarıları korunacaktır.
- Takım sezon geçmişi, ortak hedefler ve takım rozetleri saklanabilir.
- Geçmiş takım başarıları kullanıcı hesabında hatıra olarak kalabilir; aktif takım kozmetiklerinin kullanım kuralları kozmetik bağlamında belirlenebilir.
- Arkadaşlar birlikte sezon meydan okumaları başlatabilir.

### Topluluk ve paylaşım
- Global Topluluk Hedefleri sosyal sistemle entegre çalışacaktır; hedefler yalnızca gerçek akademik fayda sağlayan davranışlardan üretilecektir.
- Topluluk hedefleri ortak kozmetik, rozet veya hatıra gibi ödüller verebilir.
- Arkadaşlar birbirine kısa tebrik/reaksiyon gönderebilir.
- Önemli An / Hatıra Kartları kullanıcı isterse arkadaşlarıyla paylaşılabilir; otomatik paylaşım olmayacaktır.
- Her test veya küçük aktivite otomatik feed'e yayınlanmayacaktır.
- Platform içindeki konu özeti, video veya başka yararlı çalışma kaynağı arkadaşla paylaşılabilir; bu paylaşım karşı tarafın programına otomatik görev olarak eklenmez.
- Test tamamlandıktan sonra uygun sorular arkadaşla paylaşılabilir ve tartışılabilir.
- Aktif test veya Gerçek Sınav Modunun bütünlüğünü bozacak soru paylaşımı engellenecektir.
- Uygun bağlamda arkadaşla soru tartışmasına AI Öğretmen dahil edilebilir.

### Mesajlaşma ve güvenlik
- Ürünün odağı sosyal ağ olmayacaktır. Temel model; çalışma odası sohbeti, kısa sosyal mesajlar/reaksiyonlar ve çalışma odaklı iletişimdir.
- Tam DM sistemi kullanılacaksa engelleme, sessize alma, şikâyet, mesaj isteği ve “kim mesaj gönderebilir?” kontrolleri eksiksiz uygulanacaktır.
- Sosyal güvenlik araçları yarım bırakılmayacaktır.
- Arkadaş önerileri agresif rehber/telefon taramasına dayanmayacaktır; ortak arkadaş veya takım gibi bağlamlar kullanılabilir ve öneriler kapatılabilir.
- Profil için doğum tarihi, okul veya şehir gibi kişisel bilgilerin paylaşılması gerekmeyecektir.
- KPSS türü/düzeyi dahi kullanıcı isterse görünür olacaktır.
- AI özel arkadaş mesajlarını varsayılan olarak analiz etmeyecektir.
- AI Koç sosyal veriyi kullanacaksa yalnızca gerekli yapılandırılmış veriler (ortak oturum sayısı, ekip hedefi, meydan okuma sonucu vb.) kullanılacaktır.

### Bildirim ve odak koruması
- Sosyal bildirimler seçici olacaktır; arkadaşlık isteği, çalışma daveti, meydan okuma, takım hedefi ve doğrudan tebrik gibi anlamlı olaylara odaklanacaktır.
- “X seni geçti”, “Y çevrimiçi”, “Z 10 soru çözdü” gibi sürekli sosyal baskı/spam bildirimleri kullanılmayacaktır.
- Sosyal bildirim kategorileri ayrı ayrı kapatılabilecektir.
- Gerçek Sınav Modunda mesajlar, davetler, presence ve sosyal popup'lar tamamen sessize alınacaktır.
- Sınav sonucu paylaşımı yalnızca manuel olacaktır.
- Dashboard sosyal özelliklerle doldurulmayacaktır; en fazla küçük ve yararlı sosyal özetler gösterilebilir.
- Meta Merkez lig, takım sezonu, arkadaş sıralaması ve sezon sosyal durumunun daha doğal ana yüzeyi olacaktır.

### Sosyal başarımlar ve anti-farm
- Ortak çalışma, ekip görevi ve benzeri sosyal başarımlar bulunabilir.
- Arkadaş sayısı üzerinden “100 arkadaş ekle” gibi başarımlar kullanılmayacaktır.
- Sosyal başarının ölçüsü arkadaş sayısı değil, **birlikte yapılan anlamlı çalışma** olacaktır.
- Çok kısa sahte çalışma odaları, sahte hesaplar ve tekrar eden düellolar sosyal XP/başarım/sezon puanı üretmeyecektir.
- Sosyal sistem tüm ürünle aynı gerçek aktif çalışma, geçerli soru, gerçekçi süre ve anti-farm sinyallerini paylaşacaktır.
- Sosyal sistem AI olmadan tamamen çalışacaktır.

### Sosyal mimarinin ana zinciri
- Temel sosyal akış: **kişisel profil + kontrollü gizlilik → arkadaşlık → birlikte çalışma → isteğe bağlı meydan okumalar → küçük ekipler → takım hedefleri → bireysel/takım sezon rekabeti → ortak hatıra ve sosyal prestij**.
- Sosyal sistem akademik veriyi izinsiz ifşa etmeyecek, çalışma ekranını sosyal bildirim kalabalığına çevirmeyecek ve akademik program motorunun üzerinde karar verici olmayacaktır.
- Arkadaş Sistemi ürün mimarisi açısından tamamlanmıştır; kesin ekip limiti, düello puanlama formülü, takım normalizasyonu, presence ayrıntıları ve mesajlaşma arayüzü daha sonra denge/UI/teknik aşamada netleştirilecektir.

## 37. Kayıt ve İlk Kurulum Deneyimi — kararlaştırıldı
- Onboarding’in amacı tüm bilgileri baştan toplamak değil, sistemin ilk yararlı akademik kararı için gereken minimum güvenilir bilgiyi almak ve geri kalan profili gerçek kullanım sırasında oluşturmaktır.
- Kayıt kısa tutulacak; ürün için gereksiz kişisel bilgiler istenmeyecektir.
- Görünen ad ile benzersiz @kullanıcıadı ayrılacaktır; sosyal sistemi kullanmayan kişi ilk anda kullanıcı adı seçmeye zorlanmayacaktır.
- Temel akademik seçimler KPSS türü/düzeyi ve sınav dönemi/yılı olacaktır.
- Resmî sınav tarihi varsa sistem kullanır; kesin tarih yoksa tahmini dönem ile resmî tarih ayrılır.
- Hedef puan/net isteğe bağlıdır.
- Günlük saat veya haftalık gün kotası zorunlu onboarding girdisi olmayacaktır.
- Ana dersler için **Hiç bilmiyorum / Başlangıç / Orta / İyi / Çok iyi** öz değerlendirmesi kullanılacaktır.
- Öz değerlendirme yalnızca başlangıç tahmini sayılacak; doğrulanmış akademik kanıt olmayacaktır.
- Arka plandaki başlangıç eşlemesi kabul edilen 20 / 40 / 60 / 80 / 100 mantığını kullanacaktır.
- “Bu dersi hiç görmedim” seçeneği öğrenme akışına erken yönlendirme için kullanılabilir.
- Her konu için uzun anket yapılmayacak; ayrıntılı konu profili kalibrasyon ve gerçek kullanım verisiyle oluşacaktır.
- Kısa başlangıç kalibrasyonu sunulacak; kullanıcı **Şimdi çöz** veya **Çalışırken beni tanı** seçeneğiyle ilerleyebilecektir.
- Kalibrasyon normal test prensibini kullanacak: cevaplar bitişe kadar değiştirilebilir, sonuçlar toplu işlenir.
- İlk profil gizli 0–110 skorları göstermeyecek; güçlü başlangıç sinyali, ilk odak ve veri yetersiz alanlar insan diliyle anlatılacaktır.
- Onboarding sonunda ana CTA **İlk Çalışmanı Başlat** olacaktır.
- İlk çalışma program motoru tarafından mevcut başlangıç verisine göre seçilecek; kullanıcı öneriyi değiştirebilecektir.
- “Neden bunu öneriyoruz?” açıklaması ilk günden erişilebilir olacaktır.

### Progressive disclosure
- XP, streak, kamp, sezon, lig, başarım ve readiness gibi sistemler onboarding’de uzun uzun anlatılmayacaktır.
- Bu sistemler ilk kez gerçekten kullanıldıklarında kısa mikro açıklamalarla tanıtılacaktır.
- İsteğe bağlı kısa özet en fazla şu üç fikri anlatacaktır: sistem seni zamanla tanır; sıradaki yararlı çalışmayı önerir; gerçek çalışmaların hesabını ve KPSS yolculuğunu geliştirir.

### AI ve sosyal kurulum
- AI kurulumu zorunlu olmayacak ve onboarding’i kilitlemeyecektir.
- AI bağlantısı yoksa çekirdek akademik sistem eksiksiz çalışacaktır.
- Sosyal profil ve arkadaş ekleme de isteğe bağlı olacaktır.
- Sosyal kurulum rehber/telefon erişimine dayanmayacaktır; kullanıcı adı, kod ve link yeterlidir.
- İlk girişte uzun kozmetik seçimi yaptırılmayacak; kaliteli varsayılan görünüm kullanılacaktır.
- Gizlilik güvenli varsayılanlarla başlayacak; zayıf konular, netler ve ayrıntılı akademik bilgiler özel kalacaktır.
- Bildirim izni ilk saniyede değil, kullanıcıya faydası oluşan bağlamda istenecektir.

### Akış dayanıklılığı
- Onboarding ilerlemesi adım adım kaydedilecek; yarıda çıkan kullanıcı baştan başlamayacaktır.
- Zorunlu çekirdek mümkün olduğunca az olacaktır: **hesap + KPSS türü/dönemi + minimum başlangıç akademik profili**.
- Hedef, AI, sosyal profil ve ayrıntılı kalibrasyon gibi adımlar geçilebilir olacaktır.
- Geri butonu ve seçim düzeltme akışı düzgün çalışacaktır.
- Onboarding sonrası temel tercihler değiştirilebilir olacaktır.
- KPSS türü/dönemi değişiminde geçmiş veri mümkün olduğunca korunacaktır.
- Eski kullanıcı yeni KPSS döneminde tam onboarding yerine kısa **Yeni KPSS Dönemi Başlat** akışını kullanacaktır.
- Uzun ara sonrası normal onboarding değil, kabul edilen **Geri Dönüş Akışı** kullanılacaktır.
- Hata durumlarında tamamlanan adımlar kaybolmayacaktır.

### İlk kullanım ilkeleri
- İlk gün streak veya sezon/lig baskısı yapılmayacaktır.
- Login/hoş geldin için yapay büyük XP verilmeyecek; ilk gerçek çalışma normal XP üretir.
- Günlük görevler gerçek başlangıç verisi oluştuktan sonra üretilecektir.
- Kamp, tekrar eden zayıflık kanıtı oluşmadan açılmayacaktır.
- Readiness ve hedef puan tahmini veri yetersizken sahte kesinlik göstermeyecektir.
- Yolculuk Haritası görülebilir ancak onboarding’i bitirmek otomatik ileri aşama sağlamaz.
- Akademik kişiselleştirme verisi ile sosyal paylaşım verisi açık biçimde ayrılacaktır.

### Demo ve ana akış
- Kalıcı akademik kullanım hesap gerektirebilir; kayıt öncesi isteğe bağlı örnek verili **Demo** akışı bulunabilir ve gerçek profile yazılmaz.
- Görsel dil premium ve hafif oyunlaştırılmış olacaktır; çocukça veya aşırı kutlamalı olmayacaktır.
- Son ekran eylem odaklı olacaktır: **Başlangıç profilin hazır. İlk çalışmanı başlatalım.**
- Temel akış: **Hesap Oluştur → KPSS Türü/Dönemi → Kısa Ders Öz Değerlendirmesi → İsteğe Bağlı Kısa Kalibrasyon → İlk Profil Özeti → İlk Çalışmayı Başlat**.
- Temel ilke: **Sistem ilk gün kullanıcıyı tamamen bildiğini iddia etmez; kullanıcı çalıştıkça onu giderek daha doğru tanır.**
- Kayıt ve İlk Kurulum Deneyimi ürün mimarisi açısından tamamlanmıştır; kesin ekran sayısı, metinler ve kalibrasyon uzunluğu UI/UX ve teknik aşamada netleştirilecektir.

## 38. Mobil / PWA Deneyimi — kararlaştırıldı
- Ürün telefonda masaüstünün küçültülmüş hali gibi değil, **uygulama kalitesinde mobil deneyim** olarak tasarlanacaktır.
- Tek ürün/tek hesap yaklaşımı korunacak; responsive web masaüstünde güçlü çalışma alanı, kurulabilir PWA telefonda uygulama hissi sunacaktır.
- Kullanıcı telefonda başladığı çalışmayı bilgisayarda, bilgisayarda başladığını tablette/telefonda sürdürebilecektir.

### PWA ve mobil kabuk
- PWA ana ekrana eklenebilir, uygulama ikonu/splash/standalone pencere ve uygun deep-link davranışları sunacaktır.
- PWA kurulumu kullanıcıya ilk saniyede zorlanmayacak; anlamlı kullanım sonrası sakin biçimde önerilecektir.
- Kurulu PWA ve tarayıcı sürümü aynı hesap/backend/veriyi kullanacaktır.
- Linkler mümkün olduğunda kurulu PWA içindeki doğru ekrana; kurulu değilse webde aynı route'a açılacaktır.
- PWA güncellemeleri aktif test/oturumu zorla yenilemeyecek; güncelleme güvenli zamanda uygulanacaktır.

### Mobil navigasyon ve yerleşim
- Mobil ana navigasyon sade kalacaktır: **Ana Sayfa · Çalış · Denemeler · İstatistikler · Profil**.
- Yolculuk, Sezon, Başarımlar, Koleksiyon ve Arkadaşlar gibi ikincil alanlar ilgili merkezlerden erişilecektir.
- Mobil dashboard aksiyon öncelikli; masaüstü dashboard daha fazla bağlam gösterebilecektir.
- Mobil **Çalış** ekranı program motorunun ana önerisi, kaldığın yer, kısa tekrar, yanlışlar ve uygun alternatiflere hızlı erişim sunacaktır.
- Sık kullanılan CTA'lar başparmak erişimine uygun bölgelerde olacaktır.
- Safe-area, notch, gesture bar ve farklı ekran oranları desteklenecektir.
- Tabletlerde uygun yerlerde iki kolon gibi daha zengin responsive düzenler kullanılabilecektir.
- Masaüstü mobil uğruna fakirleştirilmeyecek; geniş ekran, çoklu kolon ve klavye kısayolları gibi avantajlar kullanılacaktır.

### Mobil soru çözme
- Şıklar büyük dokunma alanlarına sahip olacak; küçük radio-button tarzı kontrol kullanılmayacaktır.
- Görseller pinch-to-zoom ve gerektiğinde tam ekran görüntülenebilecektir.
- Önceki/Sonraki ve soru paleti mobil için ergonomik olacak; soru paleti bottom-sheet gibi açılabilecektir.
- Android geri hareketi veya tarayıcı geri tuşu normal testte veri kaybettirmeyecektir.
- Her cevap ve önemli durum düzenli biçimde otomatik kaydedilecektir.
- Uygulama kapanması, arama gelmesi, ekran kilitlenmesi veya arka plana düşme normal çalışmayı kaybettirmeyecektir.
- Gerçek Sınav Modunda gerçek süre kuralları korunacak; uygulamadan çıkmak süreyi durdurmayacaktır.

### Offline ve bağlantı durumları
- Ürün dört tutarlı bağlantı durumunu destekleyecektir: **Çevrimiçi / Zayıf bağlantı / Çevrimdışı / Yeniden bağlandı**.
- Önceden cihazda bulunan uygun akademik içerikler çevrimdışı çalışabilecektir: aktif test, özet, not, yanlışlar ve yerel soru paketleri gibi.
- Kullanıcı isterse belirli konu/çalışma paketini **Çevrimdışı Kullan** için önceden hazırlayabilecektir.
- YouTube içeriği indirilmeyecek; çevrimdışında video erişilemeyebilir ancak özet/not/sorular kullanılabilir.
- AI Öğretmen, AI Koç, canlı sosyal özellikler, presence, 1v1 ve leaderboard gibi sunucu gerektiren özellikler bağlantı yokken açıkça bekleme durumuna geçecektir.
- Offline testlerde soru sürümü, başlangıç/bitiş ve cevap olayları saklanacak; bağlantı gelince sunucu doğrulayacaktır.
- Sosyal/sezon puanı gibi rekabet verilerinde nihai doğrulama sunucuda yapılacaktır.
- Kullanıcıya sade senkron durumları gösterilebilir: **Kaydedildi / Çevrimdışı, değişiklikler bekliyor / Senkronlandı**.
- Not gibi kullanıcı içeriğinde sürüm/çakışma yönetimi; test/XP/mastery gibi sistem kayıtlarında olay temelli sunucu mantığı kullanılacaktır.
- Soru bankası sürümleme sistemi cache ile uyumlu olacak; eski offline soru sürümü çözüldüğünde hangi sürümün kullanıldığı bilinecektir.

### Cihazlar arası devam
- Video/özet ilerlemesi, normal test, kamp aşaması, yanlış inceleme ve notlar mümkün olduğunca cihazlar arasında kaldığı yerden devam edecektir.
- Aynı test iki cihazda aynı anda düzenleniyorsa sistem bunu fark edip kontrollü davranacaktır.
- Telefon + bilgisayar + tablet aynı hesapta doğal çalışma yüzeyleri olacaktır.
- Kullanıcının deneyimi “sabah telefonda başladım, öğlen bilgisayarda devam ettim” şeklinde kesintisiz hissettirmelidir.

### Bildirim ve deep-link altyapısı
- PWA bildirimleri desteklenecek ancak bildirim izni bağlama göre istenecektir.
- Bildirimler retention, kullanıcı hatırlatması, çalışma daveti, takım hedefi ve önemli sezon olayı gibi gerçek faydalı durumlara odaklanacaktır.
- Suçluluk üreten veya spam sosyal bildirim dili kullanılmayacaktır.
- Bildirim kategorileri ayrı ayrı yönetilebilir olacaktır.
- Bildirime dokunulduğunda kullanıcı ana sayfaya değil ilgili içeriğin deep-link'ine gidecektir.
- Gerçek Sınav Modunda sosyal bildirimler ürün içinde susturulacaktır.

### Kronometre ve aktif çalışma
- Mobil çalışma kronometresi uygulama arka plana geçtiğinde teknik olarak bozulmayacaktır.
- **Oturum süresi** ile **aktif çalışma süresi** ayrılacaktır.
- Kronometrenin açık kalması tek başına aktif çalışma/XP/sezon katkısı sayılmayacaktır.

### Öğrenme, video, AI ve notlar
- Video öğrenme ekranı mobil için özel tasarlanacak; video, bölüm listesi, özet, notlar ve AI Öğretmen rahat erişilebilir olacaktır.
- Timestamp'e bağlı notlar desteklenecektir.
- Telefon yataya döndüğünde video uygun tam ekran davranışı gösterecektir.
- AI Öğretmen mobilde bottom-sheet veya tam ekran chat olarak açılabilir; mevcut soru/öğrenme bağlamını otomatik taşıyacaktır.
- Hızlı AI aksiyonları: Daha basit anlat / Adım adım / Bu şık neden yanlış / Benzer örnek.
- AI sohbetinden çıkınca kullanıcı aynı çalışma/yanlış konumuna geri dönecektir.
- Mobil not alma hızlı bottom-sheet mantığında başlayıp gerektiğinde genişleyebilecektir.

### İstatistik, yolculuk, sezon ve sosyal mobil UX
- Mobil istatistikler masaüstü tablolarının küçültülmüş hali olmayacak; kart, drill-down ve dokunmatik grafiklerle tasarlanacaktır.
- Hover bağımlı etkileşimler mobilde tap/tooltip davranışına çevrilecektir.
- Yolculuk Haritası mobilde dikey rota olarak akabilecek ve aktif aşama odağa getirilebilecektir.
- Meta/Sezon ekranları sekme/kart mantığıyla düzenlenecektir; önemli özellikler yalnız swipe hareketine saklanmayacaktır.
- Ortak çalışma odaları mobilde sade odak görünümü sunacak; sessiz modda sosyal UI minimuma inecektir.
- Canlı 1v1 mobilde büyük şıklar, reconnect ve adil bağlantı davranışıyla tasarlanacaktır.

### Erişilebilirlik, tema ve performans
- Sistem font büyütme, kontrast, screen reader, klavye erişimi ve reduce-motion tercihlerine dayanacaktır.
- Dark mode **Sistem / Açık / Koyu** seçenekleriyle temel özellik olacaktır; kozmetik ödül sayılmayacaktır.
- Düşük veri modu desteklenebilir; ağır görsel/animasyon ve gereksiz prefetch azaltılacaktır.
- Düşük güçlü cihazlarda ilk açılış ve soru ekranı hızlı kalmalıdır.
- Ağır grafik, sosyal ve AI bölümleri gerektiğinde lazy-load edilecektir.
- Kritik içerik önce yüklenecek; AI/sosyal widget'lar soru/test açılışını yavaşlatmayacaktır.
- Mobil klavye açıldığında input alanları görünür kalacak ve sayfa düzeni bozulmayacaktır.

### Güvenlik ve izinler
- API anahtarları, token'lar ve hassas veriler için güvenli depolama yaklaşımı kullanılacak; sınırsız düz localStorage yaklaşımı kullanılmayacaktır.
- Oturum yönetimi kullanıcıyı gereksiz tekrar login'e zorlamayacak; yeni/şüpheli cihazlarda uygun yeniden doğrulama yapılacaktır.
- Aktif cihazlar/oturumlar yönetimi desteklenebilir.
- İzin minimizasyonu uygulanacaktır: bildirim isteğe bağlı, kamera yalnız gerçek QR gibi ihtiyaçta, dosya/görsel yalnız kullanıcı seçtiğinde.
- Gereksiz konum, mikrofon veya benzeri izinler istenmeyecektir.

### Paylaşım ve cihaz entegrasyonu
- Hatıra kartı, çalışma odası daveti veya soru linki cihazın doğal paylaşım menüsüyle paylaşılabilecektir.
- Dosya/görsel ekleme gereken yerlerde sistem picker'ları kullanılacaktır.
- Kamera yalnız gerçek ürün faydası olan QR gibi durumlarda kullanılacaktır.

### Hata ve kalite davranışı
- Mobil bağlantı hataları teknik hata kodu yerine kullanıcıyı rahatlatan doğru durum mesajları verecektir.
- Yerelde kayıtlı çalışma varsa “bağlantı gelince senkronlanacak” açıkça belirtilecektir.
- Sunucu gereken özellikte “Bu özellik için bağlantı gerekiyor” ayrımı yapılacaktır.
- Skeleton/loading kullanılabilir ancak çalışma başlangıcını gereksiz bekletmeyecektir.
- Ürün kalite telemetrisi performans/bozuk ekran gibi teknik sorunları anlamak için kullanılabilir; gereksiz hassas veri toplanmayacaktır.

### Temel mobil/PWA ilkesi
- Kullanıcı için ürün teknik olarak “PWA” değil, **KPSS uygulaması** gibi hissettirmelidir.
- En kritik kalite üçlüsü **offline devam + otomatik kayıt + cihazlar arası kaldığın yerden devam** olacaktır.
- Mobil / PWA Deneyimi ürün mimarisi açısından tamamlanmıştır; kesin breakpoint'ler, cache stratejisi, deep-link route'ları, sync protokolü ve performans hedefleri Teknik Altyapı/UI aşamasında netleştirilecektir.

## 39. Admin Paneli — PDF / Kitap İçe Aktarma alt sistemi — kararlaştırıldı
- Admin Panelinde ayrı bir **PDF / Kitap İçe Aktarma Merkezi** bulunacaktır.
- Amaç PDF sayfasını veya tüm soruyu görsel olarak kırpıp soru diye saklamak değildir. Sistem soruyu **yapısal/native içerik** olarak yeniden oluşturacaktır.
- PDF içindeki soru metni ve şıklar normal metin/matematik içeriğine dönüştürülecek; yalnızca gerçek şekil, grafik, tablo, harita veya benzeri görsel öğeler kaynak PDF'den ayrıştırılarak görsel olarak saklanacaktır.
- Matematiksel ifadeler mümkün olduğunca yapılandırılmış matematik gösterimine dönüştürülecek; üs, kök, kesir, eşitsizlik, parantez ve benzeri kritik semboller ayrıca doğrulanacaktır.
- Kopyalanabilir text layer bulunmayan, tamamen taranmış/image tabanlı PDF'ler de desteklenecektir.
- Sistem OCR ile sınırlı olmayacak; sayfa düzeni, kolonlar, soru sınırları, şıklar, görseller, header/footer ve sayfadan sayfaya devam eden sorular document-layout + vision tabanlı analizle ayrıştırılacaktır.
- Soruya ait görsel gerekiyorsa yalnız ilgili görsel bölgesi yüksek kalitede çıkarılacak; soru metni veya şıklar screenshot olarak saklanmayacaktır.
- Embedded orijinal görsel mevcutsa mümkün olduğunda doğrudan kaynak görsel kullanılacak; tarama ise yüksek çözünürlüklü crop ve uygun trim/padding uygulanacaktır.
- Geometri/grafik gibi görseller AI tarafından yeniden çizilerek veri değiştirme riski oluşturulmayacak; kaynak görsel korunacaktır.
- Kitap sonundaki cevap anahtarı otomatik tespit edilip soru numaralarıyla eşleştirilebilecektir.
- Kitapta çözümler varsa soru, cevap anahtarı ve çözüm bölümleri mümkün olduğunca eşleştirilecektir.
- Orijinal PDF, sayfa numarası, source region ve import batch bilgisi provenance olarak saklanacaktır; öğrenci yüzeyinde zorunlu olarak gösterilmeyecek ancak admin doğrulamasında erişilebilir olacaktır.
- Her import işlemi ayrı **Import Batch** olarak izlenecek; OCR, soru tespiti, görsel çıkarma, cevap anahtarı eşleme, sınıflandırma ve doğrulama aşamalarının durumu görülebilecektir.
- İşlem sonunda başarılı, kontrol önerilen, düşük güvenli ve işlenemeyen sorular ayrı sayılarla raporlanacaktır.
- Admin inceleme ekranında solda orijinal PDF bölgesi, sağda sistemin oluşturduğu native soru gösterilecek ve alanlar sonradan elle düzenlenebilecektir.
- Yüksek güvenli sorular toplu review/onay akışına alınabilir; düşük güvenli alanlar öncelikli insan incelemesine gönderilecektir.
- Aynı PDF'nin yeniden yüklenmesi dosya hash'i ve soru benzerliği ile tespit edilmeye çalışılacaktır.
- Yeni sorular mevcut soru bankasına karşı duplicate/near-duplicate kontrolünden geçebilecektir.
- Import batch gerektiğinde kontrollü biçimde geri alınabilecektir; yayımlanmış/sürüm geçmişi olan kayıtlar veri bütünlüğü kurallarına göre ele alınacaktır.
- Büyük PDF'lerde binlerce soru için toplu işleme ve ilerleme takibi desteklenecektir.

### Jev ile otomatik akademik sınıflandırma
- PDF'den yapısal olarak çıkarılan her soru **Jev sınıflandırma aşamasından** geçirilebilecektir.
- Jev; soru içeriği ve gerektiğinde ilişkili görseli kullanarak şu metadata alanları için aday üretir:
  - Ders
  - Konu
  - Alt konu
  - Kazanım / beceri
  - Soru tipi
  - Tahmini zorluk seviyesi
  - Gerekli diğer akademik etiketler
- Jev sınıflandırması mevcut müfredat/taxonomy ağacındaki geçerli ID'lere bağlanacaktır; serbest metinle kontrolsüz yeni konu üretmeyecektir.
- Her sınıflandırma alanı için güven/confidence tutulacaktır.
- Yüksek güvenli sınıflandırmalar hızlı review akışına girebilir; düşük güven veya taxonomy çakışması insan incelemesine gönderilecektir.
- Jev özellikle PDF importunda yüzlerce/binlerce sorunun konu ve alt konuya elle ayrılma yükünü ciddi biçimde azaltmak için kullanılacaktır.
- Jev'in tahmini zorluk etiketi **başlangıç tahmini** olacaktır; gerçek kullanıcı çözüm verisi oluştukça data-driven difficulty daha yüksek ağırlık kazanacaktır.
- Jev doğru cevap için tek otorite olmayacaktır. Cevap anahtarı, doğrulanmış çözüm ve mevcut soru kalite pipeline'ı ayrı otorite olarak korunacaktır.
- Jev classification/scoring aracı olarak kullanılabilir; nihai akademik doğruluk ve yayın kararı mevcut review/validation pipeline'ından geçecektir.
- Admin, Jev'in önerdiği konu/alt konu/zorluk etiketlerini toplu veya tekil olarak değiştirebilecektir.
- Jev'in hangi sınıflandırmalarda sık hata yaptığı ölçülebilecek; kategori bazında doğruluk/itiraz oranları kalite iyileştirmesinde kullanılabilecektir.
- PDF importer'ın kalite ilkesi **yüksek otomasyon + confidence tabanlı review** olacaktır; sistem belirsiz bir alanı sessizce doğru kabul etmek yerine inceleme kuyruğuna taşıyacaktır.

## 40. Admin Paneli — ana yönetim sistemi — kararlaştırıldı
- Admin Paneli yalnızca soru yönetim ekranı değil, ürünün tamamını yöneten **Control Center / Operasyon Merkezi** olacaktır.
- Üründeki önemli sistemler mümkün olduğunca kod değişikliği ve deploy gerektirmeden güvenli biçimde izlenebilir, yapılandırılabilir ve yönetilebilir olacaktır.
- Admin ana ekranı grafik kalabalığı yerine **aksiyon gerektiren durumları** öne çıkaracaktır: inceleme bekleyen sorular, yüksek itirazlı içerikler, sync hataları, AI servis sorunları, moderasyon kuyruğu, yaklaşan sezon olayları ve kritik sistem uyarıları.
- Evrensel admin araması; kullanıcı, soru ID, konu, test, deneme, sezon, başarım, kamp, bildirim, rapor ve işlem kayıtlarını bulabilecektir.

### Yetki ve güvenlik modeli
- Tek tip sınırsız admin yaklaşımı kullanılmayacaktır; ayrıntılı rol/yetki sistemi olacaktır.
- Yetkiler modüler izinler olarak tanımlanacak; Super Admin, İçerik Editörü, Reviewer, Akademik Yönetici, AI Yöneticisi, Moderasyon, Destek, Oyunlaştırma Yöneticisi, Sistem Operatörü ve Analist benzeri roller bu izinlerin birleşimi olacaktır.
- Kritik işlemler ikinci onay, etki önizlemesi ve gerektiğinde yeniden doğrulama isteyecektir.
- Admin hiçbir zaman kullanıcı şifresini veya API anahtarını açık metin olarak göremeyecektir.
- Production ve test/staging ortamları görsel olarak net biçimde ayrılacaktır.

### Soru bankası ve içerik operasyonları
- Soru pipeline'ı **Draft → Review → Approved → Active** ve gerektiğinde **Problemli / Quarantine / Pasif / Arşiv** durumlarını destekleyecektir.
- Her soruda metin, şıklar, doğrulanmış cevap, çözüm, taxonomy, kazanım, tahmini/data-driven zorluk, kaynak, sürüm, kullanım istatistikleri, itirazlar ve değişiklik geçmişi görülebilecektir.
- Soru düzenlemeleri destructive olmayacak; versioning kullanılacaktır.
- Toplu filtreleme, tag/taxonomy değişikliği, durum değiştirme ve batch review desteklenecek; bulk işlem öncesi etki önizlemesi olacaktır.
- Hatalı soru bildirimleri kategori bazlı toplanacak ve aynı soruya gelen bildirimler gruplanacaktır.
- Yüksek bildirim oranı veya istatistiksel anomali gösteren sorular **Kalite Sinyalleri** kuyruğuna alınabilecektir.
- Duplicate / near-duplicate soru tespiti desteklenecektir.
- PDF / Kitap İçe Aktarma ve Jev sınıflandırması bu ana soru operasyonlarının parçası olarak çalışacaktır.

### Müfredat / taxonomy yönetimi
- Ders → Konu → Alt Konu → Kazanım/Beceri ağacı ayrı profesyonel editörde yönetilecektir.
- Konu ekleme, yeniden adlandırma, taşıma, birleştirme, arşivleme, sınav türüne göre kullanılabilirlik ve prerequisite ilişkileri yönetilebilecektir.
- Prerequisite grafiği görsel olarak incelenebilecek; döngüsel bağımlılıklar engellenecektir.
- Taxonomy değişikliklerinde etkilenecek soru, kullanıcı profili, kamp ve diğer bağımlılıklar önceden gösterilecektir.

### Öğrenme içeriği yönetimi
- Konu özetleri, formüller, püf noktaları, örnekler, understanding-check içerikleri, video kaynakları, öğretmen seçenekleri, video segmentleri ve timestamp açıklamaları yönetilebilecektir.
- Eksik içerik, erişilemeyen video ve kalite boşlukları raporlanabilecektir.
- İçerikler taslak → önizleme → yayın akışıyla yönetilecektir.

### Akademik motor yönetimi
- Program motoru, retention, prerequisite, ihmal bonusu, deneme etkisi, improvement potential ve benzeri tuning parametreleri açıklamalı biçimde yönetilebilir olacaktır.
- Akademik config versiyonlanacak; taslak config test edilip aktive edilecek, gerektiğinde önceki sürüme dönülebilecektir.
- Her parametrede açıklama, mevcut değer, varsayılan ve güvenli aralık bulunacaktır.
- Admin gerçek kullanıcı verisini bozmadan sahte profiller üzerinde **Program Motoru Simülasyonu** çalıştırabilecektir.
- Kullanıcının mastery skorunu keyfi elle değiştirmek yerine event düzeltme / yeniden işleme / recalculation araçları kullanılacaktır.
- Gereken özel override yalnız yüksek yetkiyle ve audit log ile yapılabilecektir.

### Kullanıcı yönetimi ve destek
- Kullanıcı detayında hesap durumu, KPSS dönemi, son aktiflik, level, sezon, streak, AI bağlantı durumu, cihazlar, sync sorunları, moderasyon ve teknik olay geçmişi görülebilecektir.
- Hassas akademik verilere erişim ayrıca yetkilendirilecektir.
- XP, test, sync ve event geçmişi kullanıcı destek incelemesi için açıklanabilir olacaktır.
- Kullanıcı adına veri değiştiren doğrudan impersonation yerine mümkün olduğunca **read-only Destek Görünümü** kullanılacaktır.
- Uyarı, sosyal kısıtlama, geçici askı, yeniden aktivasyon ve hesap silme gibi aksiyonlar yetki + gerekçe + audit ile yönetilecektir.

### AI Control Center
- AI sağlayıcıları, gerçek model eşlemeleri, kalite/maliyet seviyeleri, fallback yolları ve servis sağlıkları yönetilecektir.
- Kullanıcı tarafında gizlenen gerçek model isimleri admin tarafında görülebilecektir.
- AI Öğretmen, AI Koç, soru üretici, çözüm üretici, sınıflandırıcı ve zorluk tahmini için prompt şablonları versiyonlanacaktır.
- Prompt test alanı eski/yeni prompt çıktılarının karşılaştırılmasını destekleyecektir.
- AI kalite merkezi; negatif feedback, doğrulanmış cevap çelişkileri, hata oranları ve örnek inceleme kuyruğunu gösterecektir.
- AI soru üretimi doğrudan yayına çıkmayacak; mevcut Draft → Review → Approved → Active sürecine girecektir.

### Oyunlaştırma ve meta yönetimi
- XP bantları, anti-farm katsayıları, level eğrisi, milestone ödülleri ve ilgili config panelden yönetilebilecektir.
- Level ekonomisi simülasyonu; tipik çalışma davranışının level ilerlemesine etkisini gösterebilecektir.
- Başarım/Rozet editörü; isim, açıklama, kategori, rarity, koşul, ödül, görünür/gizli ve ikon alanlarını destekleyecektir.
- Günlük/haftalık/sezon görev aileleri ve şablonları yönetilebilecektir.
- Kamp şablonları; aşamalar, tetikleme koşulları, minimum veri, doğrulama ve ödüllerle yönetilebilecektir.
- Streak, koruma ve milestone kuralları versiyonlu config ile yönetilecektir.
- Kozmetik katalog; avatar, çerçeve, banner, unvan, tema ve çalışma kozmetiklerini içerecek, mobil/dark mode önizleme sunacaktır.
- Sezon Yönetimi; tarih, tema, Sezon Yolu, milestone, görev, ödül, lig ve takım ligi ayarlarını kapsayacaktır.
- Sezonlar taslak → preview/simülasyon → yayın akışını kullanacaktır; başlamış sezonda adaleti etkileyen kritik değişiklikler sınırlandırılacaktır.
- Lig katmanları, placement, grup boyutu, yükselme/düşme ve ödüller yönetilecektir.
- Özel Anlar; tetik koşulu, cooldown, sunum, rarity, hatıra kartı ve ödül alanlarıyla yönetilecektir.
- KPSS Yolculuk aşamaları; metin, görsel, milestone, ödül ve geçiş kriter gruplarıyla yönetilecektir.

### Sosyal sistem ve moderasyon
- Arkadaş, takım, çalışma odası, meydan okuma, düello ve topluluk hedeflerine ilişkin operasyon araçları bulunacaktır.
- Moderasyon Merkezi; kullanıcı adı, profil görseli, takım adı, mesaj, spam, taciz, sahte hesap ve farm raporlarını tek kuyruğa toplayacaktır.
- Moderasyon aksiyonları uyarı, içerik kaldırma, mesaj/sosyal kısıtlama, geçici askı ve hesap askısını destekleyecektir.
- Bütün moderasyon aksiyonları reason code ve audit log ile kaydedilecektir.
- Topluluk hedefleri yalnız kontrollü akademik hedef tiplerinden üretilecektir.

### Bildirim ve duyuru yönetimi
- Olay tabanlı bildirim şablonları; başlık, metin, deep-link, kategori, kanal ve koşul ile yönetilecektir.
- Toplu duyurularda hedef kitle seçimi, önizleme ve ikinci onay bulunacaktır.
- Bildirimlerin mobil/PWA görünümü önizlenebilecektir.

### Mobil/PWA operasyonları
- PWA sürümleri, cihaz dağılımı, push abonelik sağlığı, cache/sync hataları ve eski sürüm kullanımı izlenebilecektir.
- Offline sync kuyruğu ve problemli cihaz/oturum sinyalleri görülebilecektir.

### Feature Flags ve deneyler
- Özellikler feature flag ile tüm kullanıcılar, belirli kullanıcılar, belirli gruplar veya yüzdesel rollout için açılıp kapatılabilecektir.
- Feature flag sistemi kapsam erteleme aracı değil, güvenli operasyon ve geri dönüş mekanizmasıdır.
- UI/oyunlaştırma gibi uygun alanlarda kontrollü A/B deneyleri desteklenebilir; akademik güvenliği bozacak deneyler yapılmayacaktır.

### Sistem konfigürasyonu ve audit
- Akademik, Oyunlaştırma, Sosyal, AI ve Mobil/PWA config alanları ayrı kategorilerde yönetilecektir.
- Her ayarda açıklama, tip, mevcut değer, varsayılan, güvenli aralık ve son değiştiren kişi görülecektir.
- Önemli bütün admin işlemleri **Audit Log** içine yazılacaktır.
- Audit; kim, ne zaman, neyi, önceki/yeni değeri ve mümkünse neden değiştirdi bilgisini içerecektir.
- Audit kayıtları normal adminler tarafından silinemeyecektir.
- Kritik değişikliklerde kısa gerekçe zorunlu olacaktır.
- Content Audit, Security Audit, User Support Audit ve Configuration Audit gibi kategoriler desteklenecektir.

### Sistem sağlığı, jobs ve event explorer
- Admin temel sistem sağlığını dış geliştirici araçlarına girmeden görebilecektir: API hata oranı, response time, database, queue, AI provider, push, realtime ve sync sağlığı.
- Background Job Merkezi retention hesapları, sezon kapanışı, achievement değerlendirmesi, bildirim, analytics, AI queue ve cleanup işlerini gösterecektir.
- Başarısız job uygun yetkiyle yeniden çalıştırılabilecektir.
- Event Explorer kullanıcı/sistem olaylarını zaman çizelgesi halinde gösterecektir: TEST_STARTED, ANSWER_SELECTED, TEST_COMPLETED, XP_GRANTED, MASTERY_UPDATED, ACHIEVEMENT_UNLOCKED vb.
- Veri düzeltme araçları SQL yerine kontrollü preview → execute → audit akışıyla çalışacaktır.
- Büyük recalculation işleri progress ve hata raporuyla yönetilecektir.

### Import / Export ve içerik operasyonları
- Soru bankası, taxonomy, achievement katalogu, season config ve uygun diğer yapıların kontrollü export/import araçları olacaktır.
- Import işlemleri validation → preview → import akışını kullanacaktır.
- Geçerli/hatalı/duplicate şüpheli kayıtlar ayrı raporlanacaktır.
- Kaydedilmiş filtreler/görünümler ve admin notları desteklenecektir.
- Gerekirse içerik ekipleri için hafif operasyon task/atama sistemi bulunabilecektir.

### Analytics, güvenlik ve anti-farm
- Ürün analytics merkezi; aktif kullanım, onboarding, test tamamlama, AI, PWA, offline, sosyal ve sezon kullanımını gösterecektir.
- Akademik kalite analytics'i konu bazında soru sayısı, çözüm eksikleri, difficulty dağılımı, çeşitlilik ve kalite flag'lerini gösterecektir.
- AI kullanım/maliyet/servis sağlık verileri admin tarafından izlenebilecektir; kullanıcı API anahtarları görünmeyecektir.
- Güvenlik Merkezi başarısız giriş, şüpheli oturum, rate limit, spam, sahte hesap ve anormal kullanım sinyallerini gösterecektir.
- Anti-Farm Merkezi aşırı soru spamı, kronometre/aktif süre uyumsuzluğu, düello spamı ve benzeri anomalileri review kuyruğuna alabilecektir.
- Şüpheli sinyal otomatik olarak suçluluk kararı anlamına gelmeyecektir.

### Gizlilik ve veri yönetimi
- Veri export, hesap silme ve uygun anonimleştirme operasyonları admin panelinden yönetilebilecektir.
- Hassas kullanıcı verisine erişim rol ve audit ile sınırlandırılacaktır.
- Kullanıcının özel verileri merak amaçlı görüntülenemeyecek şekilde least-privilege yaklaşımı uygulanacaktır.

### Taslak, geri alma ve etki analizi
- Soru dışında sezon, başarım, görev, kamp, bildirim, AI prompt, taxonomy ve öğrenme içeriğinde de **Taslak → Önizleme → Yayın** modeli kullanılacaktır.
- Versioning olan alanlarda mümkün olduğunca **Önceki sürüme dön** desteği olacaktır.
- Büyük değişikliklerde **Değişiklik Etkisi** ekranı; etkilenecek soru, kullanıcı, kamp, config ve diğer bağımlılıkları gösterecektir.

### Sandbox / simülasyon
- Gerçek analytics ve leaderboard'a karışmayan test kullanıcıları/profilleri oluşturulabilecektir.
- Yeni kullanıcı, ileri kullanıcı, belirli derslerde zayıf/güçlü kullanıcı ve sınava az süre kalmış kullanıcı gibi senaryolar test edilebilecektir.
- **Kullanıcı Yolculuğunu Simüle Et** aracı; belirli çalışma davranışları altında level, streak, görev, retention, yolculuk ve sezon sistemlerinin nasıl ilerlediğini gösterebilecektir.

### Admin UX
- Admin Paneli masaüstü/tablet öncelikli olacaktır; telefon üzerinden temel izleme ve basit moderasyon yapılabilir ancak karmaşık taxonomy/sezon tasarımı telefona zorlanmayacaktır.
- Her ana modülde güçlü arama, filtre, kaydedilmiş görünüm ve toplu işlem desteği olacaktır.
- Admin Panelinin temel kalite üçlüsü: **Versioned Configuration + Simulation/Sandbox + Full Audit Log**.
- Admin Paneli ürün mimarisi açısından tamamlanmıştır; kesin ekran bilgi mimarisi, permission matrisi, config şemaları ve operasyon metrikleri Teknik Altyapı/UI aşamasında netleştirilecektir.

## 41. İçerik Kalite Kontrolü — kararlaştırıldı
- İçerik kalite sistemi yalnız “soru doğru mu?” kontrolü olmayacak; **kaynak, cevap, çözüm, taxonomy, zorluk, güncellik, görsel bütünlük, kullanım uygunluğu ve geçmiş kullanıcı etkisini** birlikte yönetecektir.
- Her içerik arka planda kaynak/provenance, doğrulama durumu, sürüm ve kalite geçmişi taşıyacaktır.
- Kaynak türleri ayrılacaktır: resmî/çıkmış soru, insan üretimi, izinli/lisanslı kaynak, AI destekli üretim ve AI taslağı gibi.
- Güçlü kaynak tek başına hata imkânsızlığı anlamına gelmeyecek; gerektiğinde bağımsız doğrulama uygulanacaktır.

### Cevap ve çözüm doğrulaması
- Doğru cevap için kaynak cevap anahtarı, bağımsız çözüm, reviewer kararı ve mümkün olduğunda deterministik/matematiksel kontrol ayrı kanıtlar olarak tutulabilecektir.
- Kaynak cevap anahtarı ile bağımsız çözüm çelişirse **Answer Conflict** kalite sinyali üretilecektir.
- **Answer validation** ve **Solution validation** ayrı yapılacaktır; doğru cevap doğru olsa bile hatalı çözüm kalite problemi sayılacaktır.
- Matematikte uygun sorular mümkün olduğunda kod/symbolic doğrulama ile kontrol edilecektir.
- Jev ve diğer AI sistemleri kalite sinyali/reviewer olarak kullanılabilir ancak nihai doğru cevap otoritesi olmayacaktır.
- Birden fazla AI'nın aynı sonuca ulaşması yalnızca güven sinyalidir; tek başına doğruluk kanıtı değildir.
- AI tarafından üretilen sorular duplicate, cevap, ambiguity, taxonomy, zorluk, çözüm ve reviewer kontrollerinden geçmeden yayına alınmayacaktır.

### PDF/OCR kalite kontrolü
- PDF import soruları extraction sonrası source-comparison kontrolünden geçecektir.
- OCR confidence yalnız genel yüzde olarak kullanılmayacak; sayı, işaret, üs, kök, kesir, eşitsizlik ve seçenek değerleri gibi kritik token'lar ayrıca kontrol edilecektir.
- Eksik görsel/bağlam, yanlış crop ve soru-görsel eşleşme sorunları otomatik kalite sinyali oluşturabilecektir.
- “Aşağıdaki/yukarıdaki/şekilde/tabloda” benzeri referans dili bulunup gerekli bağlam eksikse **Missing Context** uyarısı üretilecektir.
- Kaynak görsel ile extracted görsel admin review ekranında karşılaştırılabilecektir.

### Taxonomy ve zorluk kalitesi
- Ders, konu, alt konu ve kazanım sınıflandırması ayrı kalite boyutu olacaktır.
- Jev başlangıç taxonomy ve tahmini zorluk sınıflandırmasını yapabilir; gerçek kullanıcı verisi oluştuğunda data-driven difficulty daha yüksek ağırlık kazanacaktır.
- Estimated difficulty ile gerçek performans arasında büyük uyumsuzluk varsa **Difficulty Mismatch** kalite sinyali oluşacaktır.
- Taxonomy anomalileri gerçek kullanıcı performansı ve soru benzerliklerinden de tespit edilebilecektir.

### Gerçek kullanım sinyalleri
- Kullanıcı verisi doğru cevabı belirlemek için değil, kalite anomalisini tespit etmek için kullanılacaktır.
- Doğruluk oranı tek başına karar vermeyecek; kullanıcı seviyesi, cevap süresi, blank oranı, distractor dağılımı, benzer soru performansı ve raporlar birlikte değerlendirilecektir.
- Yüksek seviyeli kullanıcıların beklenmedik ölçüde hata yaptığı sorular güçlü kalite sinyali oluşturabilir.
- Distractor dağılımı iki şık arasında belirsizlik, aşırı kolaylık veya zayıf çeldirici sinyali verebilir.
- Olağan dışı uzun çözüm süresi ve yüksek boş bırakma oranı da kalite incelemesine katkı sağlayacaktır.
- Kullanıcı raporları kategori/severity bazlı gruplanacak; aynı soruya gelen çoklu raporlar önceliği yükseltecektir.
- Geçmişte yüksek doğrulukla hata raporlayan kullanıcıların raporları internal triage için daha yüksek ağırlık alabilir; bu sosyal prestij sistemine dönüşmeyecektir.

### Quality Queue ve quarantine
- İçerik Kalite Merkezi; **Kritik Sorunlar, Kullanıcı Raporları, AI/Validator Çakışmaları, İstatistiksel Anomaliler, Güncellik, Coverage Eksikleri, Duplicate/Benzerlik, PDF Import Kalitesi, Çözüm Kalitesi ve Geçmiş Etki Onarımları** gibi kuyrukları içerecektir.
- Quality Queue severity ve risk üzerinden önceliklendirilecektir.
- Ciddi şüpheli soru **Quarantine** durumuna alınabilecek; yeni testlere dağıtılmayacak ancak geçmiş kayıtları korunacaktır.
- Otomatik quarantine yalnız güçlü sinyallerde kullanılacaktır; yalnız düşük doğruluk oranı otomatik kapatma nedeni olmayacaktır.
- Kullanılmış içerikler hard-delete yerine Archived/Retired olarak tutulacaktır.

### Impact Repair
- Hatalı soru bulunduğunda sistem yalnız soruyu düzeltmekle kalmayacak, hatanın geçmiş kullanıcı modeline etkisini de analiz edecektir.
- **Geçmiş Etki Analizi**; etkilenen cevapları, wrong history kayıtlarını, mastery event'lerini, retention'ı, deneme sonuçlarını ve ilgili diğer hesaplamaları belirleyebilecektir.
- Material düzeltmeler sonrasında kontrollü **Impact Repair / yeniden işleme** job'u çalıştırılabilecektir.
- Kullanıcının aslında doğru olan cevabı yanlış sayıldıysa wrong history, mastery, retention ve deneme sonucu mümkün olduğunca düzeltilir.
- Platform hatası nedeniyle eksik XP verilmişse fark verilebilir; platform hatası nedeniyle fazla XP verilmişse normal kullanıcıdan XP/level geri alınmayacaktır.
- Kazanılmış başarımlar platform hatası nedeniyle kullanıcıdan geri alınmayacaktır.
- Akademik mastery/readiness gerçek veriye göre yeniden hesaplanabilir; oyuncu prestiji cezalandırılmaz.
- Deneme sonucu değişirse geçmişte açıklanabilir bir kalite-düzeltme kaydı gösterilebilir.
- Kullanıcıya teknik event ayrıntısı değil, sade “Daha önce çözdüğün bir soruda hata düzeltildi; ilgili istatistiklerin güncellendi.” mesajı verilecektir.

### Güncellik ve provenance
- Zaman duyarlı içerik ile evergreen içerik ayrılacaktır.
- Gereken içeriklerde validFrom, lastVerifiedAt ve reviewDueAt benzeri metadata kullanılabilecektir.
- Mevzuat, kurum bilgisi ve güncel resmî içerik AI tarafından time-sensitive olarak işaretlenebilir; nihai güncellik kontrolü mümkün olduğunda resmî kaynağa dayanacaktır.
- Kaynak/provenance; PDF, sayfa, resmî kaynak, sınav/yıl veya insan yazar gibi bilgileri internal olarak saklayacaktır.
- Kaynak güncellendiğinde ona bağlı içerikler topluca **Review Required** durumuna alınabilecektir.
- Resmî geçmiş sorular **Official / Past Exam** olarak ayrı işaretlenecek; resmî soru ile platformun hazırladığı çözüm provenance olarak ayrılacaktır.
- PDF/kitap içeriklerinde teknik kaliteye ek olarak kaynak kullanım hakkı durumu tutulabilecektir; “kaynağı biraz değiştirip bizim yapmak” yaklaşımı kullanılmayacaktır.

### Versioning ve revision
- Her sorunun revision history'si tutulacaktır.
- **Minor revision** ile **Material revision** ayrılacaktır.
- Doğru cevap, anlam veya ölçülen beceriyi etkileyen material revision geçmiş etki analizini tetikleyebilecektir.
- Yayındaki soru sessizce kökten değiştirilmeyecektir; gerektiğinde yeni version veya yeni question entity oluşturulacaktır.
- Kullanıcının hangi question version'ını çözdüğü bilinebilecektir.
- Aktif test ve Gerçek Sınav oturumları question/version snapshot ile korunacaktır; admin değişikliği oturum ortasında soruyu değiştirmeyecektir.

### Coverage ve içerik çeşitliliği
- Kalite yalnız tek tek soruların doğruluğu değil, konu/alt konu/kazanım kapsamını da içerecektir.
- Admin **Coverage Matrix** ile soru sayısı, onaylı soru, zorluk çeşitliliği, görsel soru, çıkmış soru ve kalite boşluklarını görebilecektir.
- Aynı template'in sayı değiştirilmiş çok sayıda varyasyonu gerçek çeşitlilik sayılmayacak; semantic/template similarity ile fake diversity tespit edilecektir.
- Difficulty coverage gerçek sınav ihtiyacına göre izlenecek; yapay 33/33/33 dağılım zorunluluğu olmayacaktır.
- Kazanım/skill coverage konu başlığından daha ayrıntılı kalite göstergesi olarak kullanılacaktır.
- İçerik az olduğunda sistem kalite barını sessizce düşürüp zayıf sorularla havuzu doldurmayacak; coverage shortage admin'e bildirilecektir.

### Quality Gate ve kullanım uygunluğu
- Bir soru Active olabilmek için soru yapısı, şıklar, doğrulanmış cevap, taxonomy, kaynak/provenance, çözüm ve kritik kalite flag'leri gibi gerekli koşulları sağlamalıdır.
- **Approved** ile **Active** ayrı durumlar olarak kalacaktır.
- Quality Gate eksik kritik alanlarda yayını engelleyecektir; yüksek yetkili override açık risk uyarısı ve audit gerektirir.
- Sorular kullanım uygunluğu flag'lerine sahip olabilecektir: **Practice Eligible, Calibration Eligible, Mock Eligible, Duel Eligible** vb.
- Kalibrasyon ve retention doğrulama soruları daha yüksek güven standardı kullanacaktır.
- Tam/branş denemeleri ve özellikle Gerçek Sınav Modu için daha yüksek **Exam-Grade** kalite standardı uygulanabilecektir.
- Program motoru yalnız Active + ilgili quality tier/eligibility şartlarını sağlayan sorulardan seçim yapacaktır.

### Review operasyonları
- Kritik/karmaşık içeriklerde double review zorunlu tutulabilir.
- Bağımsız ikinci reviewer ilk reviewer kararını görmeden değerlendirme yapabilir.
- Reviewer performansı içerik kalitesini geliştirmek için internal olarak izlenebilir; editör leaderboard'u yapılmayacaktır.
- Review kuyruğu yaşlanması görünür olacak; kritik sorunların uzun süre beklemesi engellenecektir.
- Soru yayın checklist'i admin'e neden Active olamadığını açıkça gösterecektir.

### Çözüm ve AI kalite döngüsü
- Çözüm kalitesi ayrı izlenecek; “çözüm hatalı” ve “çözümü anlamadım” raporları ayrılacaktır.
- AI Öğretmen verified solution'a dayanacak.
- AI Öğretmen doğrulanmış çözümle çelişirse bu soru hatası sayılmadan **AI Quality Event** oluşturulacaktır.
- Model/prompt sürümlerinin taxonomy ve kalite performansı gerçek review sonuçlarıyla ölçülebilecektir.
- PDF kaynakları/import batch'leri extraction correction rate gibi kalite metrikleriyle karşılaştırılabilecektir.
- Sürekli iyi sonuç veren kaynak profilleri review önceliğini optimize edebilir; hiçbir kaynak kör güven statüsü kazanmayacaktır.
- Kalite sisteminden öğrenilen hata paternleri OCR, Jev sınıflandırması, prompt ve import pipeline'larını iyileştirmek için kullanılacaktır.

### İçerik kalite operasyon ilkesi
- Kalite otomasyonu kullanıcı test akışını gereksiz AI çağrılarıyla yavaşlatmayacaktır; ağır analizler yayın öncesinde veya asenkron/batch çalışabilir.
- Bir soru review/quarantine durumuna geçse bile aktif kullanıcı oturumu snapshot ile bozulmadan devam edecektir.
- Kalite sisteminin amacı “sıfır hata” iddiası değil; **hataları yayına girmeden mümkün olduğunca yakalamak, yayındaki hataları hızlı tespit etmek ve kullanıcı modeline bıraktığı izi onarmaktır.**
- Ana kalite döngüsü: **Kaynak → Extraction/Creation → Jev Sınıflandırma → Answer/Solution Validation → Quality Gates → Gerektiğinde Human Review → Approved → Active → Gerçek Kullanım Verisi → Anomaly/Reports → Re-review → Versioned Fix → Impact Repair → Pipeline Learning**.
- İçerik Kalite Kontrolü ürün mimarisi açısından tamamlanmıştır; kesin kalite skorları, severity eşikleri, review SLA'ları ve eligibility kuralları denge/operasyon/teknik aşamasında netleştirilecektir.

## 42. Henüz planlanacak büyük alanlar
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
