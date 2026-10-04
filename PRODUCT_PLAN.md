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

## 14. Soru çözme deneyimi — kısmen kararlaştırıldı
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

## 15. Henüz planlanacak büyük alanlar
- Soru çözme deneyiminin kalan ayrıntıları
- Soru bankası ve içerik yönetimi
- Deneme sınavı sistemi
- Yanlış / boş / işaretlenen sorular
- Tekrar ve unutma sistemi
- Konu anlatımı ve öğrenme materyalleri
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
