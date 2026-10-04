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
- Çalışma süresi soru bazlı ayrı bir test kronometresinden ziyade platformun genel çalışma kronometresi üzerinden takip edilecektir.
- Genel çalışma kronometresi kullanıcı tarafından başlatılabilecek, duraklatılabilecek ve durdurulabilecektir.
- Özel klavye kısayolları öncelikli ihtiyaç değildir ve planın temel parçası olmayacaktır.
- Kullanıcı hatalı, belirsiz, cevabı sorunlu veya görseli bozuk soruları bildirebilecektir.
- 10 soruluk test bittikten sonra kullanıcı isterse yeni bir teste geçerek çalışmaya devam edebilecektir.
- Gönderilen örnek ekranlar **görsel tasarım referansı değil, işlevsel/wireframe referansı** olarak kabul edilecektir; mevcut koyu renkli/yoğun görsel dil kopyalanmayacaktır.
- Masaüstünde soru içeriği ana odak olacaktır. 10 soruluk yapı için ağır bir 20 soruluk yan panel yerine, 1–10 arasındaki sorulara hızlı geçiş sağlayan daha kompakt ve zarif bir soru navigasyonu / ilerleme alanı kullanılacaktır.
- Cevaplanmış, boş ve kullanıcı tarafından işaretlenmiş sorular soru haritasında tek bakışta ayırt edilebilmelidir.
- Mobilde soru numaraları ekran alanını sürekli tüketmemelidir; `7 / 10` benzeri kompakt bir gösterge üzerinden açılan panel/bottom-sheet ile soru haritasına erişim sağlanabilir.
- Mobil ekranda öncelik her zaman **soru ve şıklar** olacaktır; arayüz öğeleri soru içeriğini gölgelemeyecektir.
- Üst bar mümkün olduğunca sade tutulacak; konu bilgisi, test ilerlemesi, genel çalışma kronometresi ve gerekli ana eylemler net bir hiyerarşiyle sunulacaktır.
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

## 18. Henüz planlanacak büyük alanlar
- Deneme sınavı sistemi
- Yanlış / boş / işaretlenen sorular
- İstatistik ve performans analizi
- Hedef puan ve sınava hazır oluş sistemi
- AI öğretmen / AI koç
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
