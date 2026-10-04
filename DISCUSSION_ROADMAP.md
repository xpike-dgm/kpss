# KPSS Çalışma Platformu — Tartışma Yol Haritası

Bu belge, proje geliştirmeye başlanmadan önce ürünün nasıl çalışacağını adım adım belirlemek için kullanılacaktır.

Amaç: Her başlığı sırayla tartışmak, kararları netleştirmek ve kesinleşen kararları `PRODUCT_PLAN.md` dosyasına aktarmak.

## Durum Anahtarı

- ⬜ Tartışılmadı
- 🟨 Tartışılıyor
- ✅ Kararlaştırıldı

## Tartışma Başlıkları

1. ✅ **Ana Sayfa / Dashboard**
   - Kullanıcı siteyi açtığında ne görecek?
   - Bugün ne yapması gerektiği nasıl gösterilecek?
   - Dashboard hangi bilgileri öne çıkaracak?
   - Kullanıcı iş ve günlük hayatın yanında KPSS çalıştığı için ana sayfa yalnızca verimli değil, motive edici ve eğlenceli de olmalı.
   - Oyunlaştırmanın dashboard içindeki görünürlüğü ve yoğunluğu ayrıca tartışılacak.

2. ✅ **Günlük Çalışma Sistemi**
   - Kullanıcı kendi isteğiyle çalışmaya başlar; sistem günlük zorunlu çalışma saati dayatmaz.
   - Kullanıcıya “bugün şu kadar saat çalışmalısın” denmeyecek.
   - Sistem o gün ne kadar çalıştığını ve geçmiş çalışma sürelerini gösterebilir.
   - Platformun rolü kullanıcıyı zorlamak değil; çalışmasını kolaylaştırmak, verimli hale getirmek, ilerlemesini takip etmek ve doğru yönlendirmeler sunmak olacaktır.
   - Kullanıcı ne zaman isterse çalışmaya başlayabilir, istediği kadar ilerleyebilir ve istediği zaman bırakabilir.
   - Çalışma tek bir uzun oturum olmak zorunda değildir; gün içine bölünebilir.
   - Kaldığı yerden devam etme desteklenmelidir.
   - Yeni öğrenme / pekiştirme / adaptif soru / tekrar dengesi
   - Çalışılmayan günün “borç görev” baskısına dönüşmemesi
   - **Yeni bir konuda soru çözmeden önce konu öğrenme aşaması bulunması**
   - Kullanıcı konuyu bilmiyorsa konu anlatımı bitmeden o konuya ait normal/adaptif sorular açılmamalı.
   - Kullanıcı konuyu zaten biliyorsa video zorunlu olmamalı; soru/kalibrasyon aşamasına doğrudan geçebilmeli.
   - Konu videosunun çalışma ilerlemesinin bir parçası sayılması
   - Videoların kendi sunucumuzda tutulmaması; YouTube üzerinden seçilmesi
   - Mümkün olan videoların resmi YouTube embed oynatıcısıyla site içinde izletilmesi
   - Embed kapalı / video kaldırılmış ise YouTube bağlantısı veya alternatif video gösterilmesi
   - YouTube videosunun indirilmemesi, kopyalanmaması veya yeniden barındırılmaması
   - 1–2 saatlik uzun videoların farklı oturumlarda tamamlanabilmesi
   - Oynatma konumunun kaldığı yerden devam kolaylığı için takip edilip edilemeyeceği
   - Video izlemenin tek başına “konu öğrenildi” sayılmaması
   - YouTube izleme/like/subscription gibi etkileşimlere XP bağlanmaması; ödülün gerçek öğrenme/çalışma davranışına bağlanması
   - Konu öğrenme tamamlandıktan sonra pekiştirme ve adaptif soru çözümüne geçilmesi
   - Hızlı akademik kalibrasyonun ancak konu öğrenildikten veya kullanıcı konuyu bildiğini belirttikten sonra başlaması
   - Bu başlıkta kalan ayrıntılar program motoru, konu öğrenme sistemi ve oyunlaştırma başlıklarında ele alınacaktır.

3. 🟨 **Çalışma Programı Motoru**
   - Sınava kalan süre
   - Kullanıcının müsait olduğu zaman
   - Eksik konular
   - Otomatik ve dinamik program üretimi
   - Programın önerici mi yoksa daha yönlendirici mi olacağı
   - Kullanıcının özgür çalışma yaklaşımıyla nasıl uyumlu hale getirileceği
   - Öneriler yalnızca global öncelik puanına göre sıralanmamalı; yeni öğrenilen bir konu pekiştirilmeden araya çok sayıda bağımsız çalışma girmemeli.
   - Bir konuya başlandığında o konu için bir **öğrenme zinciri** oluşmalı: konu anlatımı tamamlandıktan sonra kısa sürede pekiştirme ve adaptif soru çözümü gelmeli.
   - Yeni öğrenilen konu için gerekli ilk pekiştirme, başka derslerin daha düşük aciliyetli önerilerinin önüne geçebilmeli.
   - Motor “yeni konu öğrenildi ama henüz pekiştirilmedi” durumunu ayrı bir durum olarak takip etmeli.
   - Kullanıcı bir konuyu öğrendikten sonra o konu 4–5 öneri geriye düşüp unutulmaya bırakılmamalı.
   - Pekiştirme tamamlandıktan sonra konu normal öneri havuzuna dönebilmeli ve daha uzun aralıklı tekrar sistemi 7. başlıktaki unutma/tekrar motoruna devredilmeli.
   - Konu zincirinin ne kadar sıkı olacağı, ilk pekiştirmede kaç soru kullanılacağı ve tekrar aralıkları ayrıca tartışılacak.
   - Öncelik motoru yalnızca “en düşük gizli seviye puanına sahip konu” mantığıyla çalışmamalı.
   - Geçmiş KPSS sınavlarında bir konunun görülme sıklığı / ortalama soru sayısı yararlı bir sinyal olabilir; ancak **konu bazındaki anlık net getirisi tek başına çalışma sırasını belirlememeli**.
   - Ana optimizasyon mantığı konu konu kısa vadeli net kovalamak yerine **dersin genel sınav değeri + kullanıcının o dersteki mevcut ilerlemesi + dersin öğrenme sırası** üzerinden düşünülmeli.
   - Örneğin Matematikte temel bir konu doğrudan az soru getiriyor olsa bile Matematik dersinin geri kalanında sağlıklı ilerlemek için gerekliyse düşük öncelikli sayılmamalı.
   - Öncelik karşılaştırması özellikle dersler arasında yapılırken, o dersin toplam KPSS net potansiyeli ve kullanıcının o dersteki ilerleme ihtiyacı hesaba katılmalı.
   - Konu bazındaki geçmiş soru sıklığı, gizli seviye ve beklenen net kaybı yine yardımcı girdiler olabilir; fakat ders içi öğrenme yolunu bozacak kadar baskın olmamalı.
   - Gizli seviye puanı doğrudan “doğru yapma yüzdesi” kabul edilmeden önce gerçek kullanıcı verisiyle kalibre edilmeli; ileride `seviye → beklenen doğru olasılığı` dönüşümü öğrenilebilir.
   - Geçmiş sınav sıklığı tek bir yıla aşırı bağlı olmamalı; birden fazla yılın verisi, güncellik ve müfredat değişiklikleri hesaba katılmalı.
   - İleride daha gelişmiş bir metrik olarak ders bazında **beklenen kazanılabilir net / tahmini çalışma süresi** düşünülebilir.
   - **Öncelik puanı konu sırasını / önkoşul mantığını geçersiz kılamaz.** Bir konu yüksek net getirili olsa bile gerekli temel konular öğrenilmeden ana öneri olarak sunulmamalı.
   - Derslerde gerektiği ölçüde bir **konu önkoşul ağı / öğrenme yolu** tanımlanmalı. Sistem hangi konunun başka hangi konulara dayandığını bilmelidir.
   - Motor önce kullanıcının mevcut bilgisine göre **öğrenmeye uygun (unlocked)** konuları belirlemeli; ardından dersler arası öncelik ve ders içi mantıklı sırayı birlikte değerlendirmelidir.
   - Örneğin aynı derste 6. konu 1. konudaki bilgiye dayanıyorsa, 6. konu sınavda daha fazla soru getiriyor olsa bile 1. konu yeterince öğrenilmeden 6. konu öne çıkarılmamalı.
   - Önkoşul sistemi her ders için tamamen doğrusal olmak zorunda değildir. Birbirinden bağımsız ilerleyebilen konu kolları varsa paralel biçimde açılabilir.
   - Amaç **öğrenme mantığını bozmadan sınavda mümkün olan en yüksek puanı getirecek çalışma sırasını önermek** olmalıdır.
   - Aynı ders içinde sonraki konuyu önermek için bütün kullanıcıları tek bir sabit gizli seviye eşiğine (ör. `60`) zorlamak doğru değildir.
   - Geçiş değerlendirmesi **kişisel gelişim hedefi + sonraki konunun önkoşul yeterliliği** birlikte kullanılarak yapılmalıdır.
   - Kişisel gelişim hedefi, onboarding tahminine değil gerçek sorularla doğrulanmış başlangıç seviyesine göre belirlenmelidir.
   - Başlangıç kuralı olarak doğrulanmış seviyeden yaklaşık `+20` puanlık anlamlı gelişim hedeflenebilir; üst sınır 110'dur. Bu miktar ileride kullanım verisiyle kalibre edilebilir.
   - Çok düşük başlangıç seviyesindeki kullanıcı sırf evrensel bir eşik nedeniyle 0/10/20 seviyelerinden 60'a kadar aynı konuda tutulmamalıdır.
   - Örneğin doğrulanmış başlangıç 10 ise kişisel gelişim hedefi yaklaşık 30 olabilir. Ancak sonraki konu mevcut konudan en az 40 düzeyinde yeterlilik gerektiriyorsa, sistem yeni konuyu önermeden önce 40'a kadar güçlendirmeyi önerebilir.
   - Yüksek seviyede başlayan kullanıcı da düşük bir sabit eşik nedeniyle “zaten yeterli” kabul edilmemeli; kendi başlangıç düzeyine göre anlamlı gelişim göstermelidir.
   - Geçiş kararı için gizli puanın yanında yeterli **gerçek çözüm kanıtı / güven seviyesi / benzersiz soru sayısı** bulunmalıdır.
   - Sonraki konunun önerilmesi önceki konunun tamamen bittiği anlamına gelmez; önceki konu tekrar/unutma sistemiyle korunup geliştirilmeye devam eder.
   - Kullanıcının özgür çalışma prensibi korunur: sistem bir sonraki konuyu henüz önermese bile kullanıcı isterse manuel olarak başka bir konuya gidebilir.

4. ⬜ **Soru Çözme Ekranı**
   - Şıklar
   - Süre
   - Çözüm gösterimi
   - Not alma
   - Soru işaretleme
   - Mobil ve masaüstü UX

5. ⬜ **Soru Bankasının Yapısı**
   - Soruların kaynağı
   - Ders / konu / alt konu / kazanım etiketleri
   - Soru tipi
   - Zorluk değeri
   - Jev ile sınıflandırma

6. ⬜ **Konu Öğrenme Sistemi**
   - YouTube üzerinden küratörlü konu anlatımı videoları
   - Resmi YouTube embed oynatıcısının kullanımı
   - Embed mümkün değilse harici YouTube bağlantısı / alternatif video
   - Video dosyalarını kendi sunucumuzda barındırmama
   - Uzun videoları farklı oturumlarda tamamlayabilme
   - Video oynatma konumunu kaldığı yerden devam için kullanma
   - Kullanıcı konuyu bilmiyorsa video/öğrenme aşaması tamamlanmadan soru çözümüne geçmeme
   - Konuyu zaten bilen kullanıcı için videoyu atlama davranışı
   - Kısa özetler
   - Formüller / önemli bilgiler
   - Örnek sorular
   - Püf noktaları
   - Video sonrası anlayış kontrolü

7. ⬜ **Tekrar ve Unutma Sistemi**
   - Öğrenilmiş konuların unutulmasını tespit etme
   - Tekrar zamanlaması
   - Tekrar testleri

8. ⬜ **Yanlış Soru Sistemi**
   - Yanlış defteri
   - Yanlış nedenleri
   - Sorunun yeniden gösterilmesi
   - Benzer soru önerileri

9. ⬜ **Deneme Sınavları**
   - Gerçek KPSS simülasyonu
   - Branş denemeleri
   - Süre yönetimi
   - Deneme sonrası analiz

10. ⬜ **Performans ve İstatistik Ekranı**
    - Netler
    - Doğruluk oranları
    - Çalışma süresi
    - Konu gelişimi
    - Hazır oluş seviyesi

11. ⬜ **Hedef Puan Sistemi**
    - Hedef KPSS puanı
    - Gereken yaklaşık netler
    - Mevcut durum ile hedef arasındaki fark

12. ⬜ **AI Öğretmen**
    - Soru açıklama
    - Konu anlatımı
    - Kullanıcının seviyesine göre anlatım
    - Takip soruları

13. ⬜ **AI Çalışma Koçu**
    - Bugün ne çalışmalıyım?
    - Bu hafta neye odaklanmalıyım?
    - Neden ilerleyemiyorum?
    - Çalışma stratejisi önerileri

14. ⬜ **Motivasyon / Oyunlaştırma**
    - Oyunlaştırmanın temel amacı: kullanıcının ders çalışırken hem öğrenmesi hem de eğlenmesi
    - XP sistemi olacak mı, nasıl kazanılacak?
    - Kullanıcıya görünen genel profil seviyesi olacak mı?
    - Akademik gizli seviye ile oyunlaştırma seviyesi birbirinden nasıl ayrılacak?
    - Günlük görev sistemi ve görev tamamlama ödülleri
    - Çalışma serisi / streak sistemi
    - Bir gün çalışamayan kullanıcıyı gereksiz yere cezalandırmayan seri tasarımı
    - Başarımlar ve rozetler
    - Çözülen soru, tamamlanan konu, deneme ve tekrar gibi gerçek çalışmalara bağlı ödüller
    - Haftalık görevler
    - Lig / sıralama sistemi olup olmayacağı
    - Arkadaşlarla rekabetin oyunlaştırmaya nasıl bağlanacağı
    - Görsel ilerleme ve seviye atlama animasyonları
    - Çalışma oturumu sonunda XP, seri, başarım ve ilerleme geri bildirimi
    - Profil çerçevesi, avatar öğeleri, tema ve unvan gibi kilidi açılabilir kozmetik ödüller
    - Sürpriz ödüller olup olmayacağı
    - KPSS hazırlığını görsel bir yolculuk / ilerleme haritasına dönüştürme fikri
    - “Başlangıç → Temel Atma → Gelişim → Güçlenme → Deneme Dönemi → Sınava Hazır” benzeri aşamalar olup olmayacağı
    - Bu aşamaların yalnızca XP ile mi yoksa gerçek akademik ilerleme ile birlikte mi açılacağı
    - Adaptif sistemin zayıf alanları kullanıcıya görev/kamp şeklinde sunması
    - Örneğin “Problemler Kampı” gibi dinamik özel görevler
    - Kullanıcının sadece siteye girerek veya anlamsız işlem yaparak XP kasmasının engellenmesi
    - Ödüllerin gerçek öğrenme ve çalışma davranışına bağlı olması
    - Oyunlaştırmanın profesyonel KPSS hazırlık hissini bozmayacak şekilde nasıl tasarlanacağı

15. ⬜ **Arkadaş Sistemi**
    - Arkadaş ekleme
    - Ortak çalışma
    - Sıralamalar
    - Ortak hedefler
    - İlerleme paylaşımı

16. ⬜ **Kayıt ve İlk Kurulum Deneyimi**
    - Hesap oluşturma
    - KPSS türü seçimi
    - Ders seviyeleri
    - Hedefler
    - İlk çalışma profilinin oluşturulması

17. ⬜ **Mobil / PWA Deneyimi**
    - Telefon ana ekranına ekleme
    - Mobil navigasyon
    - Bildirimler
    - Çevrimdışı davranış

18. ⬜ **Admin Paneli**
    - Soru ekleme ve düzenleme
    - Hatalı soru bildirimleri
    - Kullanıcı yönetimi
    - Konu ağacı
    - AI sınıflandırmalarının kontrolü

19. ⬜ **İçerik Kalite Kontrolü**
    - Yanlış cevaplı sorular
    - Hatalı / belirsiz sorular
    - Güncelliğini kaybetmiş içerikler
    - AI ve insan kontrol akışı

20. ⬜ **Teknik Altyapı**
    - Veritabanı
    - Backend
    - Auth
    - Hosting
    - AI servisleri
    - Yedekleme
    - Performans

---

## Çalışma Prensibi

Bu listedeki başlıklar mümkün olduğunca sırayla ele alınacaktır. Bir başlık yeterince netleştiğinde durumu ✅ olarak değiştirilecek ve kesinleşmiş ürün kararları `PRODUCT_PLAN.md` içerisine işlenecektir.

Şu anda aktif tartışma konusu: **3. Çalışma Programı Motoru**.
