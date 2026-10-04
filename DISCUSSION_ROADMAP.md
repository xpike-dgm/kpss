# KPSS Çalışma Platformu — Tartışma Yol Haritası

Bu belge, proje geliştirmeye başlanmadan önce ürünün nasıl çalışacağını adım adım belirlemek için kullanılacaktır.

Amaç: Her başlığı sırayla tartışmak, kararları netleştirmek ve kesinleşen kararları `PRODUCT_PLAN.md` dosyasına aktarmak.

## Durum Anahtarı

- ⬜ Tartışılmadı
- 🟨 Tartışılıyor
- ✅ Kararlaştırıldı

## Tartışma Başlıkları

1. 🟨 **Ana Sayfa / Dashboard**
   - Kullanıcı siteyi açtığında ne görecek?
   - Bugün ne yapması gerektiği nasıl gösterilecek?
   - Dashboard hangi bilgileri öne çıkaracak?
   - Kullanıcı iş ve günlük hayatın yanında KPSS çalıştığı için ana sayfa yalnızca verimli değil, motive edici ve eğlenceli de olmalı.
   - Oyunlaştırma dashboard deneyiminin doğal bir parçası olabilir; akademik ciddiyet ile eğlence karşıt kabul edilmeyecek.
   - Gizli akademik seviye puanı ile görünen XP/ödül/ilerleme sistemleri ayrı tutulmalı.

2. ⬜ **Günlük Çalışma Sistemi**
   - Günlük görevler
   - Ders dağılımı
   - Soru hedefleri
   - Konu çalışma hedefleri

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
   - Kısa özetler
   - Formüller / önemli bilgiler
   - Örnek sorular
   - Püf noktaları

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
    - Seri sistemi
    - XP / başarımlar
    - Görevler
    - Görsel ilerleme ve seviye hissi
    - Çalışma seanslarını daha eğlenceli ve sürükleyici hale getirme
    - Kullanıcının gerçek öğrenmesini gölgelemeyen ödül tasarımı
    - Akademik gizli seviye ile görünen oyunlaştırma seviyesini ayırma

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

Şu anda aktif tartışma konusu: **1. Ana Sayfa / Dashboard**.
