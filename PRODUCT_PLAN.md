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
- Her cevap sonrasında yeni puan hesaplanacak ve sonraki soru güncel seviyeye göre seçilecektir.
- Puan 0–110 sınırları içinde tutulacaktır.

Örnek: Kullanıcı Matematik için “Orta” seçti ve Temel Kavramlar 60 puanla başladı.
- 1. soru doğru → 65
- 2. soru doğru → 70
- 3. soru yanlış → 65
- 4. soru doğru → 70

Sonraki soru, başlangıçtaki 60 yerine kullanıcının güncel seviyesine göre seçilmelidir.

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
5. Her yeni cevaptan sonra sistem kullanıcı hakkında biraz daha doğru hale gelsin.
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

## 13. Henüz planlanacak büyük alanlar
- Günlük çalışma sisteminin kalan ayrıntıları
- Çalışma programı ve planlama motoru
- Soru çözme deneyimi
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
- Bildirimler / hatırlatmalar
- Profil ve kişiselleştirme
- Mobil/PWA deneyimi
- Admin paneli
- Teknik mimari ve veri modeli
- İçerik kalite kontrolü

---
Durum: Ürün planlama aşaması devam ediyor. Henüz geliştirmeye başlanmadı.
