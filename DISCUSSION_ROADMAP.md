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

2. 🟨 **Günlük Çalışma Sistemi**
   - Günlük görevler
   - Ana görevler ve isteğe bağlı ekstra çalışma
   - Ders dağılımı
   - Soru hedefleri
   - Konu çalışma hedefleri
   - Kullanıcının gün içindeki kısa zamanlarını da değerlendirebilmesi
   - Çalışmayı gün içine bölme ve kaldığı yerden devam etme
   - Uzun görevleri küçük tamamlanabilir parçalara bölme
   - Yeni öğrenme / pekiştirme / adaptif soru / tekrar dengesi
   - Kaçırılan günlerde planın cezalandırmadan yeniden dağıtılması
   - Günün net biçimde “tamamlandı” hissi vermesi
   - **Yeni bir konuda soru çözmeden önce konu öğrenme aşaması bulunması**
   - Konu videosu / öğrenme içeriğinin gerçek bir günlük çalışma görevi sayılması
   - 1–2 saatlik uzun konu videolarının tek oturum zorunluluğu olmadan parçalara/chapter'lara bölünmesi
   - Video ilerlemesinin kaydedilmesi ve sonraki oturumda kaldığı yerden devam edilmesi
   - Önerilen akış: Öğren → kısa anlayış kontrolü → pekiştirme → adaptif soru → tekrar
   - Hızlı akademik kalibrasyonun konu öğrenildikten sonra başlaması
   - Kullanıcının konuyu zaten bildiğini belirtmesi halinde videoyu atlama veya kısa seviye kontrolüyle geçme seçeneği olup olmayacağı
   - “Yorgun / Normal / Enerjik” gibi günlük enerji seçiminin gerekli olup olmadığı

3. ⬜ **Çalışma Programı Motoru**
   - Sınava kalan süre
   - Kullanıcının müsait olduğu zaman
   - Eksik konular
   - Otomatik ve dinamik program üretimi

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
   - Konu anlatımları
   - Uzun video içeriklerini chapter/bölümlere ayırma
   - Video ilerlemesini kaydetme
   - Kısa özetler
   - Formüller / önemli bilgiler
   - Örnek sorular
   - Püf noktaları
   - Video sonu anlayış kontrolü
   - Konuyu zaten bilen kullanıcı için atlama / seviye kontrolü davranışı

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

Şu anda aktif tartışma konusu: **2. Günlük Çalışma Sistemi**.
