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
   - Kullanıcı iş ve günlük hayatın yanında KPSS hazırlığı yürüttüğü için ana sayfa yalnızca verimli değil, motive edici ve eğlenceli de olmalı.
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

3. ✅ **Çalışma Programı Motoru**
   - Motor katı takvim yerine dinamik biçimde “şu anda en mantıklı çalışma nedir?” sorusunu cevaplayan öneri sistemi olacaktır.
   - Program önerici olacaktır; kullanıcı kendi çalışma özgürlüğünü koruyacaktır.
   - Kullanıcıdan “kaç dakikan var?” veya benzeri bir müsait süre girdisi istenmeyecektir; kullanıcı ne kadar isterse o kadar çalışır.
   - Öneriler yalnızca global öncelik puanına göre sıralanmamalı; yeni öğrenilen bir konu pekiştirilmeden araya çok sayıda bağımsız çalışma girmemeli.
   - Bir konuya başlandığında o konu için bir **öğrenme zinciri** oluşmalı: konu anlatımı tamamlandıktan sonra kısa sürede pekiştirme ve adaptif soru çözümü gelmeli.
   - Yeni öğrenilen konu için gerekli ilk pekiştirme, başka derslerin daha düşük aciliyetli önerilerinin önüne geçebilmeli.
   - Motor “yeni konu öğrenildi ama henüz pekiştirilmedi” durumunu ayrı bir durum olarak takip etmeli.
   - Kullanıcı bir konuyu öğrendikten sonra o konu 4–5 öneri geriye düşüp unutulmaya bırakılmamalı.
   - Pekiştirme tamamlandıktan sonra konu normal öneri havuzuna dönebilmeli ve daha uzun aralıklı tekrar sistemi 7. başlıktaki unutma/tekrar motoruna devredilmeli.
   - Konu zincirinin ne kadar sıkı olacağı, ilk pekiştirmede kaç soru kullanılacağı ve tekrar aralıkları ilgili sonraki başlıklarda detaylandırılacak.
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
   - Sınava kalan süre sürekli değişen bir **zaman baskısı** girdisi olacaktır; katı dönem sınırları veya belirli bir tarihten sonra yeni konu yasağı olmayacaktır.
   - Sınava uzun süre varken temel oluşturma, yeni konu öğrenme ve kapsamı genişletme daha yüksek değer taşır; sınav yaklaştıkça tekrar, pekiştirme, yanlışlar, denemeler ve kısa sürede yüksek fayda sağlayan çalışmaların ağırlığı artar.
   - Sınav çok yakın olsa bile kısa sürede öğrenilebilecek ve anlamlı fayda sağlayabilecek yeni konu otomatik olarak elenmez; zaman baskısı yalnızca öncelikleri değiştirir.
   - Dersler arasında mekanik eşit zaman dağıtımı yapılmaz. Uzun süredir anlamlı biçimde çalışılmayan dersin önceliği **ihmal bonusu** ile kademeli biçimde yükselir.
   - Son dönemde sürekli aynı derse çalışılmışsa o dersin global öneri avantajı bir miktar azaltılabilir; böylece diğer önemli dersler uzun süre görünmez kalmaz.
   - **Aktif öğrenme zinciri ders dengesi kuralının önüne geçebilir:** yeni öğrenilmiş konu henüz pekiştirilmediyse sırf başka ders ihmal edildi diye zincir yarıda kesilmez; ilk pekiştirme tamamlandıktan sonra ders dengesi yeniden değerlendirilir.
   - Mimari düzeyde açık soru kalmamıştır; sayısal eşiklerin ve alt mekaniklerin ayrıntıları ilgili sonraki başlıklarda ele alınacaktır.

4. ✅ **Soru Çözme Ekranı**
   - Ana soru çözme deneyimi tek tek “şıkkı seç → hemen cevapla” biçiminde olmayacak; kısa test mantığıyla ilerleyecek.
   - Standart kısa test başlangıçta **10 soru** olacaktır.
   - Kullanıcı soruları sırayla yanıtlayacak; test bitmeden önce önceki sorulara geri dönüp cevabını değiştirebilecektir.
   - Sorular cevaplanırken doğru/yanlış sonucu gösterilmeyecektir.
   - Testin sonunda **“Testi Bitir”** butonu olacaktır.
   - Test tamamlanınca ayrı bir sonuç ekranı açılacak; **doğru, yanlış ve boş** sayıları gösterilecektir.
   - Sonuç ekranında kullanıcının yanlış yaptığı sorular açıkça görülebilecek ve her yanlış sorunun yanında **“İncele”** eylemi bulunacaktır.
   - İnceleme ekranında kullanıcının verdiği yanlış cevap kırmızı, doğru cevap yeşil biçimde şıklar üzerinde belirgin gösterilecektir.
   - İnceleme ekranında sorunun yazılı çözümü bulunacaktır.
   - Çözümün yanında **AI'ya sor** eylemi bulunacak; kullanıcı isterse o soru/konu hakkında AI öğretmene takip sorusu sorabilecektir.
   - Yanlış soru incelemesinde **“Neden yanlış yaptım?”** seçenekleri opsiyonel olarak bulunacaktır.
   - Bu geri bildirimin zorunlu olmadığı, ancak sistemin ve öğrenme içeriğinin kullanıcıya daha iyi uyarlanmasına yardımcı olduğu kullanıcıya açıkça belirtilecektir.
   - “Eminim / emin değilim” özelliği kullanılmayacaktır.
   - Soru çözme sırasında kullanıcıya ait **not alanı** bulunabilir.
   - Soru çözme sırasında **karalama alanı** bulunabilir.
   - Adaptif sistem soru çözme/test sonuçlarıyla bağlantılı olacaktır; gizli konu seviyesi ve diğer öğrenme verileri test performansından güncellenmeye devam edecektir.
   - 10 soruluk test, test başındaki mevcut gizli seviyeye göre hazırlanacaktır.
   - Test sürerken cevaplar değiştirilebildiği için geçici cevaplar kalıcı gizli seviye değişikliğine yol açmayacaktır.
   - Kullanıcı **“Testi Bitir”** dediğinde yalnızca nihai cevaplar topluca işlenecek ve gizli konu seviyesi güncellenecektir.
   - Sonraki 10 soruluk test, test sonunda oluşan yeni gizli seviyeye göre hazırlanacaktır.
   - **Normal 10 soruluk testlerde test bazlı süre ölçülecek ve kaydedilecektir.** Bu süre kullanıcıya gösterilebilir; varsayılan olarak sınav tipi zorlayıcı geri sayım değil, performans/istatistik verisidir.
   - Mümkün olduğu ölçüde soru bazlı etkileşim/çözüm süresi arka planda tutulabilecek; bu veri konu/soru türü bazlı hız analizi, kullanıcı istatistikleri, AI koç içgörüleri, soru kalite/zorluk analizi ve sistem geliştirmede kullanılacaktır.
   - Süre tek başına akademik seviye puanını değiştirmeyecek; doğruluk ve diğer performans verileriyle birlikte yardımcı sinyal olarak yorumlanacaktır.
   - Platformun genel çalışma kronometresi toplam çalışma süresini ayrıca takip etmeye devam edecektir; test süresi ile genel çalışma süresi farklı amaçlara hizmet edecektir.
   - Klavye kısayolları öncelikli bir ihtiyaç değildir; özel klavye desteği planlanmayacaktır.
   - Kullanıcı hatalı, belirsiz, cevabı sorunlu veya görseli bozuk soruları bildirebilecektir.
   - Mobil ve masaüstü arayüz sade olacak; asıl odak soru, şıklar, soru navigasyonu, not/karalama ve testi bitirme akışı olacaktır.
   - Kullanıcı 10 soruluk testi bitirdikten sonra isterse yeni bir teste geçerek çalışmaya devam edebilecektir.
   - Mimari düzeyde açık soru kalmamıştır; boş soru uyarısının biçimi, not/karalama panelinin konumu ve benzeri küçük UX ayrıntıları geliştirme aşamasında netleştirilebilir.

5. ✅ **Soru Bankasının Yapısı**
   - Soru bankası adaptif sistemin akademik veri kaynağı olacaktır; yalnızca soru metni ve cevap depolamayacaktır.
   - Her soruda ders, konu, alt konu, mümkünse kazanım/beceri, KPSS türü, soru tipi, gizli zorluk, içerik, şıklar, doğru cevap, çözüm, kaynak ve kalite durumu gibi bilgiler tutulacaktır.
   - Etiketleme mümkün olduğunca **Ders → Konu → Alt konu → Kazanım/Beceri** hiyerarşisinde yapılacaktır.
   - Kaynaklar resmî/geçmiş sınav soruları, insan tarafından hazırlanmış özgün sorular ve AI destekli özgün sorular şeklinde ayrıştırılabilir.
   - AI tarafından oluşturulan yeni sorular doğrudan canlı bankaya girmeyecek; taslak/kontrol/onay/aktif benzeri kalite aşamalarından geçecektir.
   - Jev/AI; ders, konu, alt konu, kazanım, soru tipi, ilk zorluk tahmini ve KPSS uygunluğu gibi sınıflandırmalarda kullanılacaktır; tek başına nihai otorite olmayacaktır.
   - Başlangıç AI zorluk tahmini ile gerçek kullanıcı verisinden türetilen zorluk ayrı tutulabilecek; yeterli veri oluşunca gerçek kullanım verisi daha değerli olacaktır.
   - Ham doğru yüzdesi tek başına yeterli görülmeyecek; mümkün olduğunca soruyu çözen kullanıcıların seviyeleri de gerçek zorluk değerlendirmesinde hesaba katılacaktır.
   - Kullanıcı-soru geçmişi tutulacaktır: gördü mü, doğru/yanlış/boş, tekrar çözüm, işaretleme gibi bilgiler.
   - İlk 30 benzersiz soru kalibrasyonunda tekrar gösterilen soru yeni benzersiz soru sayılmayacaktır.
   - Soru benzerliği/neredeyse kopya sorular ileride çeşitlilik ve kalite sinyali olarak değerlendirilebilir.
   - Sorular bilgi, yorum, işlem, problem çözme, grafik/tablo, paragraf, çıkarım, kavram, kronoloji gibi soru/beceri tipleriyle etiketlenebilecektir.
   - Canlı bankadaki soruların kullanıcı incelemesinde kullanılabilecek açıklamalı çözümleri bulunması hedeflenecektir.
   - Kullanıcının bulduğu soruda hazır açıklamalı çözüm olmaması normaldir; kullanıcıdan çözümü kendi ders bilgisiyle yazması beklenmeyecektir.
   - **Hazır çözümü olmayan sorular için AI açıklamalı çözüm üretecektir.** Soru metni, şıklar ve varsa güvenilir cevap anahtarı modele verilerek anlaşılır çözüm oluşturulacaktır.
   - AI çözümü doğrudan güvenilir kabul edilmeyecek; yayına girmeden önce doğrulama/kalite kontrol sürecinden geçecektir.
   - Kabul edilen doğrulama zinciri: **üretici AI → bağımsız doğrulayıcı → mümkün olan yerde kod/simgesel kontrol → uyuşmazlıkta karantina/kontrol kuyruğu**.
   - Matematik ve hesaplanabilir alanlarda mümkün olduğu ölçüde kod, formül veya simgesel hesapla ek doğrulama yapılacaktır.
   - Üretici AI, doğrulayıcı AI ve varsa kod/simgesel kontrol aynı sonuca ulaşmıyorsa soru/çözüm otomatik olarak canlı bankaya alınmayacaktır.
   - Güvenilir doğru cevabı bilinmeyen sorular tek bir AI cevabına dayanarak otomatik aktif edilmeyecek; bağımsız doğrulama gerektiren taslak/kontrol durumunda kalacaktır.
   - Kullanıcı hata bildirimleri, sıra dışı başarı oranları ve benzeri kullanım sinyalleri sorunlu soruları inceleme kuyruğuna taşıyabilecektir.
   - Soruların silinmesi yerine sürümlenmesi tercih edilebilir; düzeltmelerin hangi soru sürümüne ait olduğu geçmiş kullanıcı verileriyle korunacaktır.
   - 10 soruluk testler sadece aynı zorlukta 10 rastgele sorudan oluşmayacak; seviyeye yakın sorular temel ağırlıkta olurken bir miktar daha kolay/zor soruyla seviye doğrulama ve gelişim sağlanabilecektir.
   - Kesin test zorluk dağılımı gerçek kullanım verisiyle kalibre edilebilir.
   - Soru bankasının mimari düzeyde açık sorusu kalmamıştır; ayrıntılı kalite operasyonları Admin Paneli ve İçerik Kalite Kontrolü başlıklarında ele alınacaktır.

6. ✅ **Konu Öğrenme Sistemi**
   - Ana akış: **konuya giriş → öğrenilecekler çerçevesi → öğretmen/video seçimi → konu anlatımı → kısa destek materyalleri → kısa anlayış kontrolü → 10 soruluk pekiştirme/adaptif test**.
   - Kullanıcı konuyu bilmiyorsa öğrenme aşaması soru çözümünden önce gelecektir.
   - Kullanıcı konuyu zaten biliyorsa video zorunlu olmayacak; “Bu konuyu biliyorum” benzeri bir seçenekle doğrudan kalibrasyon/test aşamasına geçebilecektir.
   - YouTube konu anlatımları mümkün olduğunca resmi embed oynatıcıyla site içinde izletilecek; video indirilmeyecek veya yeniden barındırılmayacaktır.
   - Konu ekranında kısa özet, önemli kurallar/formüller, püf noktaları, örnekler ve kullanıcının kendi notları bulunacaktır.
   - Kısa özet/not içerikleri AI ile taslak olarak üretilebilir; akademik kalite kontrolünden geçecektir.
   - Video izleme ilerlemesi akademik ustalık sayılmayacaktır.
   - Video oynatma konumu saklanacak ve kullanıcı farklı oturumlarda kaldığı yerden devam edebilecektir.
   - Uzun videolar mantıksal bölümlere ayrılabilecek; YouTube chapter varsa kullanılacak, yoksa video zaman aralıkları alt başlıklarla eşleştirilebilecektir.
   - Kullanıcı video sırasında not alabilecek; uygun olduğunda not video zaman damgasına bağlanarak ilgili ana geri dönüş sağlayacaktır.
   - Konu ekranında AI öğretmene soru sorabilmek için entegrasyon noktası bulunacaktır; ayrıntılar 12. başlıkta tartışılacaktır.
   - Ana 10 soruluk testten önce çok kısa ve düşük sürtünmeli bir anlayış kontrolü olacaktır; bu mini kontrol ana adaptif testin yerine geçmeyecek ve gizli seviyeyi ana test kadar etkilemeyecektir.
   - Anlayış kontrolü zayıfsa ilgili özet veya video bölümüne geri yönlendirme yapılabilecektir; ancak ana teste geçiş zorla engellenmeyecektir.
   - Konu özeti daha sonra tekrar sistemi içinde hızlı hatırlatma materyali olarak da kullanılabilecektir.
   - Öğrenme içeriği dersin doğasına göre farklı bloklar kullanabilecektir; bütün derslere tek tip içerik şablonu zorlanmayacaktır.
   - Öğrenme durumu **başlanmadı / öğreniliyor / öğrenme aşaması tamamlandı** gibi durumlarla akademik gizli seviyeden ayrı tutulacaktır.
   - “Öğrenme aşaması tamamlandı” ifadesi “konuda ustalaşıldı” anlamına gelmeyecektir; akademik yeterlilik soru performansıyla doğrulanacaktır.
   - Kullanıcı öğrenmeyi yarıda bırakırsa sistem kaldığı yerden devam etmeyi önerecek; ancak kullanıcı başka çalışma seçmekte özgür olacaktır.
   - **Kullanıcı tek bir öğretmen/hoca ile sınırlandırılmayacaktır.** Aynı konuyu anlatan mümkün olduğunca çok uygun KPSS öğretmeni ve video seçeneği sunulacaktır.
   - Kullanıcı bir derste ilk kez seçtiği öğretmen/hocayı **o dersin varsayılan öğretmeni** olarak belirlemiş olur. Sonraki konularda o öğretmenin uygun içeriği varsa sistem öncelikle onu açar/öne çıkarır.
   - Kullanıcı varsayılan öğretmeni daha sonra ayarlardan değiştirebilir; diğer uygun öğretmen/video seçeneklerine erişim devam eder.
   - “Bu konuyu biliyorum” seçeneği öğrenme aşamasını tamamlanmış kabul eder; gerçek akademik seviye 10 soruluk kalibrasyon/test ile ölçülür.
   - Konuyu öğrenen kullanıcı **“Konu anlatımını tamamladım”** benzeri açık bir eylemle öğrenme aşamasını tamamlar. Video izleme yüzdesi tek başına zorunlu tamamlama kapısı değildir.
   - Bu eylem sonrasında kısa anlayış kontrolü gelir. Zayıf sonuçta özet/video bölümüne dönme önerilebilir fakat kullanıcı ana 10 soruluk teste geçmekten zorla alıkonulmaz.
   - Video %100 izlenmedi diye öğrenme tamamlanamaz gibi sert bir kural kullanılmayacaktır.
   - Akademik ustalık ve sonraki konuya hazır oluş; video yüzdesinden veya öğrenmeyi tamamla düğmesinden değil, gerçek soru performansı ve adaptif/önkoşul kurallarından türetilecektir.
   - Mimari düzeyde açık soru kalmamıştır; öğretmen kartlarının/filtrelerin tam görsel düzeni geliştirme aşamasında netleştirilebilir.

7. ✅ **Tekrar ve Unutma Sistemi**
   - Akademik gizli seviye ile **hatırlama/unutma riski** ayrı tutulacaktır; yalnızca zaman geçti diye konu puanı otomatik düşmeyecektir.
   - Unutma/hatırlama sinyali; son çalışma zamanı, gizli seviye, seviye güveni, yakın performans, konunun ne kadar yeni olduğu, geçmiş tekrar sonuçları ve sınava kalan süre gibi girdileri kullanacaktır.
   - Zaman geçmesi tekrar ihtiyacını artırabilir fakat gerçek akademik seviye yalnızca yeni performans kanıtıyla değişecektir.
   - Yeni öğrenilen konular ilk dönemde daha sık korunacak; başarılı hatırlama geldikçe tekrar aralığı uzayacak, zorlanıldıkça kısalacaktır.
   - Sabit `1-3-7-14` benzeri aralıklar bütün kullanıcılar için değişmez kural olmayacak; tekrar sistemi kullanıcıya ve konuya göre uyarlanacaktır.
   - Standart tekrar uzun videoyu baştan izlemek olmayacak; **hatırlama kontrolü → kısa soru paketi → gerekirse hedefli güçlendirme** akışı kullanılacaktır.
   - Normal tekrar yaklaşık **5 soruluk hızlı tekrar** olabilir; yeterli güven oluşmazsa veya performans zayıfsa **10 soruluk güçlendirme testi** önerilebilir.
   - Tekrar sorularının ağırlığı daha önce görülmemiş fakat aynı kazanımı ölçen yeni sorularda olacaktır. Eski yanlışlar da gösterilebilir fakat yeni sorular daha güçlü akademik kanıt kabul edilir.
   - Belirli alt konu/kazanımda tekrarlanan hata varsa tüm konuyu baştan çalıştırmak yerine hedefli kısa güçlendirme yapılacaktır.
   - Hedefli güçlendirmede kısa konu özeti, formül/kural, eski notlar, örnekler ve gerekirse seçili video bölümü kullanılabilir.
   - Tekrar biçimi ders türüne göre değişebilir; Tarih/Vatandaşlıkta bilgi-kronoloji-kavram, Matematikte işlem/yöntem, Türkçede kural ve düzenli pratik gibi farklı yapılar kullanılabilir.
   - Ayrıntılı soru etiketleri ve eski yanlışlar, zayıf alt alanların bulunmasında ve tekrar önceliğinde kullanılacaktır.
   - Kaçırılmış tekrarlar “borç görev” olarak birikmeyecektir; sistem o an için en değerli tekrar ihtiyaçlarını yeniden hesaplayacaktır.
   - Tekrar sistemi çalışma programı motoruna **unutma riski / tekrar ihtiyacı** sinyali verecek; ayrı ve zorunlu bir yapılacaklar listesine dönüşmeyecektir.
   - Sistem zamanla kullanıcının ders/konu bazındaki **hafıza dayanıklılığını** öğrenip tekrar aralıklarını kişiselleştirebilecektir.
   - Kullanıcıya ham retention puanı yerine **Sağlam / Tazelemek iyi olabilir / Tekrar öneriliyor** benzeri anlaşılır durumlar gösterilebilir.
   - Başarılı tekrar hatırlama güvenini yükseltip sonraki tekrar aralığını uzatır; zayıf performans gerekirse gerçek seviyeyi performans kurallarıyla düşürür, hedefli güçlendirme tetikler ve tekrar aralığını kısaltır.
   - Mimari düzeyde açık soru kalmamıştır; kesin gün aralıkları ve adaptasyon katsayıları gerçek kullanım verisiyle kalibre edilebilir.

8. ✅ **Yanlış Soru Sistemi**
   - Her yanlış soru otomatik olarak **Yanlışlarım** alanına alınacaktır.
   - Yanlış kaydında soru/sürüm, kullanıcının cevabı, doğru cevap, açıklamalı çözüm, ders-konu-alt konu/kazanım, tarih ve ilgili test/deneme bağlamı tutulacaktır.
   - Tek bir yanlış “konuyu bilmiyor” anlamına gelmeyecek; sistem tekrar eden hata örüntülerini izleyecektir.
   - Aynı alt konu/kazanımda tekrarlanan yanlışlar o alanın riskini ve hedefli güçlendirme önceliğini yükseltecek; bu veri tekrar sistemi, program motoru ve AI katmanlarına sinyal verecektir.
   - **“Neden yanlış yaptım?”** geri bildirimi opsiyonel olacaktır. Başlangıç seçenekleri: bilgiyi bilmiyordum, formülü/kuralı unuttum, soruyu yanlış anladım, işlem hatası yaptım, dikkatsizlik yaptım, iki şık arasında kaldım, emin değilim/bilmiyorum.
   - Hata nedeni geçmişi ileride gerçek çalışma içgörüleri üretmekte kullanılabilecektir.
   - Yanlışlar pasif bir arşiv olmayacak; **Aktif Yanlışlar / Tekrar Bekleyenler / Çözüldü-Pekişti** benzeri anlamlı gruplar kullanılabilecektir.
   - İç yaşam döngüsü yeni yanlış → incelendi → güçlendiriliyor → doğrulandı → arşivlendi benzeri durumlarla takip edilebilir.
   - Aynı yanlış soru sürekli döndürülmeyecek; yanlış incelendikten sonra aynı kazanımı ölçen daha önce görülmemiş yeni sorularla öğrenme doğrulanacaktır.
   - Eski yanlış soru yeniden gösterilebilir fakat yeni bağımsız sorular akademik doğrulamada daha güçlü kanıt olacaktır.
   - Başlangıç kuralı olarak aynı kazanımı ölçen **en az iki ayrı yeni doğrulama sorusunda** başarılı performans, yanlışın aktif problem olmaktan çıkması için kullanılabilir; gerçek kullanım verisiyle kalibre edilebilir.
   - İlk doğrulama kısa süre sonra, ikinci doğrulama daha ileri bir zamanda/başka pakette yapılabilir.
   - Yeterli yeni soru kanıtı oluşunca yanlış **çözüldü/pekişti** durumuna geçer; geçmiş kayıt silinmez.
   - Kullanıcı bir yanlışı **Önemli / Tekrar Bak** şeklinde manuel işaretleyebilir; sistem toparlanmış saysa bile kullanıcı işaretli soruya erişebilir.
   - **Boş sorular yanlışlarla aynı şey sayılmayacaktır** ve ayrı sonuç türü olarak tutulacaktır; ancak aynı kazanımda tekrarlanan boşlar da zayıflık sinyali oluşturabilir.
   - Yanlış incelemesindeki **AI'ya sor** akışı doğrulanmış doğru cevap ve açıklamalı çözümü bağlam olarak kullanacaktır.
   - Yanlış soru sistemi için ayrı bir yanlış puanı oluşturulmayacak; yanlışlar gizli konu seviyesini, alt konu riskini, tekrar ihtiyacını ve program motoru önceliğini besleyecektir.
   - Temel döngü: **yanlış → incele → nedeni anlamaya çalış → aynı beceriyi yeni sorularla doğrula → yeterli kanıt oluşunca aktif yanlış olmaktan çıkar**.
   - Mimari düzeyde açık soru kalmamıştır; kesin doğrulama zamanları ve küçük UX ayrıntıları geliştirme/gerçek kullanım verisiyle ayarlanabilir.

9. ✅ **Deneme Sınavları**
   - İki ana tür: **Tam KPSS Denemesi** ve **Branş Denemesi**.
   - Tam deneme, kullanıcının seçtiği KPSS türünün soru dağılımı/soru sayısı/süre yapısını taklit edecek; sınav şablonları değişebilir olduğu için yapılandırılabilir tutulacaktır.
   - Branş denemesi tek konu testi değil; bir dersin farklı konularını karışık biçimde ölçen genel ders denemesidir.
   - Branş denemelerinde de süre ölçülecek; deneme şablonuna göre süre hedefi/kısıtı tanımlanabilecektir.
   - Denemelerde soru navigasyonu, cevap değiştirme ve soru işaretleme desteklenecek; sınav bitmeden doğru/yanlış gösterilmeyecektir.
   - Bitirme eylemi **“Sınavı Bitir”** olacaktır.
   - İki mod: **Gerçek Sınav Modu** ve **Çalışma Modu**.
   - Gerçek Sınav Modunda tanımlı/resmi süre durdurulamaz; sayfa/app kapanması süreyi durdurmaz. Çalışma Modu daha esnek ve gerektiğinde duraklatılabilir olabilir.
   - Gerçek Sınav ve Çalışma Modu sonuçları aynı performans kategorisi olarak değerlendirilmez.
   - Denemede ayrı sınav kronometresi vardır; genel çalışma kronometresi toplam çalışma süresini ayrıca takip edebilir.
   - Cevaplar, işaretler, mevcut soru ve başlangıç zamanı otomatik kaydedilir; sayfa yenileme/bağlantı sorunu cevapları kaybettirmemelidir.
   - Sonuç ekranı toplam doğru/yanlış/boş/net/süre yanında ders bazlı ve konu/alt konu bazlı analiz sunacaktır.
   - Soru, ders ve konu bazlı süre verisi mümkün olduğunca arka planda tutulacak; hız ve zaman yönetimi analizi yapılacaktır.
   - Deneme cevapları mevcut adaptif akademik sisteme gerçek performans kanıtı olarak eklenecek; deneme için ayrı paralel akademik puan sistemi kurulmayacaktır.
   - Tek deneme geçmiş akademik veriyi aşırı ezmeyecek; mevcut performans/güven modeline yeni kanıt olarak katılacaktır.
   - Akademik konu yeterliliğinden ayrı **deneme/sınav performansı** izlenecektir; bilgi ile süre yönetimi/sınav dayanıklılığı ayrıştırılabilecektir.
   - Deneme geçmişi saklanacak ve tek deneme yerine son denemelerdeki trendler gösterilebilecektir.
   - Denemelerin zorluk/kalite bilgisi tutulacak ve gerçek kullanıcı verisiyle yeniden kalibre edilebilecektir.
   - Farklı zorluktaki denemelerin ham netleri doğrudan eşdeğer sayılmayacak; ileride karşılaştırma/sıralama için aynı deneme veya normalize edilmiş sonuç kullanılacaktır.
   - Deneme sonrası yanlış/boş incelemesi 8. **Yanlış Soru Sistemi**ne bağlanacaktır.
   - Deneme sonucu program motoruna sinyal verecek ve **“Bu denemeye göre en değerli sonraki çalışmalar”** benzeri hedefli öneriler oluşturulabilecektir; zorunlu görev olmayacaktır.
   - Deneme sıklığı katı takvimle zorunlu tutulmayacak; program motoru ölçüm ihtiyacı ve sınava kalan süreye göre deneme önerebilecektir.
   - Kullanıcının özel soru/ders/zorluk karışımıyla oluşturduğu paketler gerçek denemeden ayrılarak **Karma Test** gibi ayrı kategori altında tutulabilecektir.
   - Tahmini KPSS puanı ve hedef puan ilişkisi 11. **Hedef Puan Sistemi** başlığında ayrıca netleştirilecektir.
   - Mimari düzeyde açık soru kalmamıştır; kesin deneme şablonları, resmi süreler ve küçük UX ayrıntıları uygulama aşamasında güncel sınav kurallarına göre yapılandırılabilir.

10. ✅ **Performans ve İstatistik Ekranı**
    - Ana amaç kullanıcıya “nerede iyiyim, nerede zorlanıyorum, hızım nasıl, gerçekten gelişiyor muyum ve bundan sonra neye odaklanmalıyım?” sorularını cevaplamaktır; ekran veri yığınına dönüştürülmeyecektir.
    - Ana bölümler: **Genel Durum / Ders ve Konu Performansı / Hız ve Süre / Deneme Performansı / Hata ve Tekrar Analizi**.
    - Zaman filtreleri: **7 gün / 30 gün / 3 ay / tüm zamanlar** benzeri dönemler.
    - Genel özet çözülen soru, çalışma süresi, doğruluk, öğrenilen konu, tekrar ve deneme gibi metrikleri gösterecek; sayıların yanında anlamlı kısa yorumlar da sunulacaktır.
    - Gizli `0–110` akademik puan gösterilmeyecek; **Yeni / Temel / Gelişiyor / İyi / Güçlü / Çok Güçlü** benzeri anlaşılır durumlar ve trend ifadeleri kullanılabilecektir.
    - Ders kartlarında doğruluk, trend, ortalama soru süresi, güçlü/zayıf alanlar ve tekrar ihtiyacı gösterilebilecek; konu ve alt konuya kadar detay açılabilecektir.
    - Konu/alt konu analizinde son testler, doğruluk, hız, yanlış, boş, tekrar ihtiyacı, son çalışma tarihi ve kazanım kırılımı kullanılacaktır.
    - Hız analizi ders, konu, soru türü ve mümkün olduğunda soru bazlı sürelerden yararlanacak; zaman içindeki hız gelişimi gösterilecektir.
    - **Hız ve doğruluk birlikte yorumlanacaktır**; sadece daha hızlı çözmek otomatik gelişim sayılmayacaktır.
    - Çalışma süresi bugün/hafta/ay/toplam bazında ve ders/aktivite türüne göre ayrıştırılabilecektir: konu öğrenme, soru çözme, tekrar, deneme, yanlış inceleme vb.
    - Mümkün olduğunda **çalışma miktarı → performans değişimi** ilişkisi incelenecek; ancak yanıltıcı tek bir “verimlilik puanı” oluşturulmayacaktır.
    - Yanlış nedeni istatistikleri yalnızca nedeni gerçekten belirtilmiş örneklere dayanacak; yetersiz veri tüm yanlışlara genellenmeyecektir.
    - Boş sorular ayrı analiz edilecek ve deneme bağlamında süre/bilgi/risk örüntüleri için sinyal olarak kullanılabilecektir.
    - Tekrar/unutma görünümünde ham retention puanı yerine **Sağlam / Tazelemek iyi olabilir / Tekrar öneriliyor** gibi anlaşılır durumlar kullanılacaktır.
    - Deneme bölümünde son sonuç, en iyi sonuç, son 5 ortalama, ders bazlı netler, doğru/yanlış/boş, süre kullanımı ve özellikle **trend** gösterilecektir.
    - Denemede bölüm/soru bazlı süre ve doğruluk değişimi, sınavın sonlarına doğru performans düşüşü ve aşırı süre tüketen dersler analiz edilebilecektir.
    - Soru zorluğu ve soru türü/beceri bazında performans analizi desteklenecek; kolay/orta/zor, işlem, yorum, problem, grafik, bilgi, kronoloji vb. kırılımlar kullanılabilecektir.
    - İstatistik yorumlarında **örnek sayısı ve veri güveni** dikkate alınacak; az veriyle güçlü hüküm verilmeyecektir. Kullanıcıya teknik olmayan “Veri henüz sınırlı” gibi ifadeler gösterilebilir.
    - İstatistik ekranı yalnızca geçmişi anlatmayacak; **“Bundan sonra ne yapmalıyım?”** sorusuna veri tabanlı güçlendirme, hız çalışması veya tekrar önerileri sunacaktır.
    - Bu öneriler çalışma programı motoruna bağlı olacak ve zorunlu görev olmayacaktır.
    - AI içgörüleri gerçek yapılandırılmış veriye dayanacak; doğruluk/süre trendleri, alt konu hataları, hata nedenleri ve benzeri kanıtlar olmadan kesin yorum üretmeyecektir.
    - Kullanıcı **bu ay vs geçen ay** gibi dönem karşılaştırmaları yapabilecek; soru sayısı, çalışma süresi, doğruluk, ortalama çözüm süresi ve öğrenilen konu gibi değişimleri görebilecektir.
    - Ana karşılaştırma **kullanıcı vs geçmişteki kendisi** olacaktır; arkadaş/lig/leaderboard bu ekranın temel amacı olmayacaktır.
    - Önerilen bilgi hiyerarşisi: dönem özeti → gelişim/trend → dersler → hız ve doğruluk → deneme trendi → tekrar/yanlış durumu → kişisel içgörüler/öneriler.
    - Mimari düzeyde açık soru kalmamıştır; kesin grafik türleri, etiket isimleri ve küçük görsel ayrıntılar UI aşamasında rafine edilebilir.

11. ✅ **Hedef Puan Sistemi**
    - Hedef puan kullanıcı profilinde isteğe bağlı tutulacak; kullanıcı hedefini değiştirebilecek veya hedef belirtmeden çalışabilecektir.
    - Sistem hedefi yalnızca kaydetmeyecek; mevcut gerçek performans ile hedef arasındaki mesafeyi ve bu farkın nereden kapatılabileceğini değerlendirecektir.
    - **Ölçülen performans** ile **tahmini KPSS puanı** ayrılacaktır; gerçek deneme netleri ölçüm, puan karşılığı tahmin olarak sunulacaktır.
    - Gereksiz kesin tek sayı yerine mümkün olduğunca **tahmini puan aralığı + veri güveni** kullanılacaktır.
    - Veri azsa sistem güvenilir puan tahmini için yeterli veri olmadığını açıkça söyleyecektir.
    - Hedefe kalan tahmini gelişim yaklaşık net aralığı olarak gösterilebilir; kesin reçete gibi sunulmayacaktır.
    - Gereken gelişim derslere eşit paylaştırılmayacak; sistem kullanıcının gerçek performansına göre **en ulaşılabilir gelişim fırsatlarını** bulacaktır.
    - Ders/konu bazlı tahmini net potansiyeli karar destek sinyali olabilir; önkoşullar ve dersin öğrenme sırası her zaman korunacaktır.
    - Hedef sistemi mevcut program motorunun eğitim mantığını geçersiz kılmayacak; motora amaç/öncelik sinyali verecektir.
    - Temelsiz hassas “hedefi tutturma ihtimali %X” gösterilmeyecek; **Veri yetersiz / Hedeften uzak / Gelişim gerekiyor / Hedefe yaklaşıyor / Hedef bandında / Hedefin üzerinde** gibi durumlar kullanılabilecektir.
    - **Tahmini puan** ile **sınava hazır oluş** ayrı kavramlar olacaktır. Hazır oluşta puan performansının yanında kapsam, veri güveni, retention, gerçek sınav modu ve zaman yönetimi birlikte değerlendirilecektir.
    - Tek en iyi deneme yerine yakın dönem trendi esas alınacak; yeni ve gerçek sınav modu verileri daha güçlü kanıt kabul edilebilecektir.
    - Deneme zorluğu mümkün olduğunca normalize edilecek; zor denemedeki daha düşük ham net otomatik gerileme sayılmayacaktır.
    - **Gerçek Sınav Modu**, hedef puan tahmininde **Çalışma Modu**ndan daha güçlü kanıt olacaktır.
    - Farklı hedef seviyeleri çalışma motorunun önceliklerini etkileyebilir; yüksek hedeflerde zor sorular/hata azaltma/hız, temel seviyesi düşük kullanıcıda temel ve kolay-orta kayıpları kapatma daha değerli olabilir.
    - Hedef hiçbir zaman sert konu yasağına dönüşmeyecek; sadece önceliklendirme sinyali olacaktır.
    - Kullanıcı farklı hedeflerin gerektirdiği yaklaşık gelişimi karşılaştırabileceği **hedef senaryolarını** inceleyebilir; tek aktif hedefi kendisi seçer.
    - Hedef zaman içinde değiştirilebilir; geçmiş hedefler istenirse kilometre taşı olarak saklanabilir.
    - Hedef sistemi baskıcı alarm diline dönüşmeyecek; kullanıcıya hedef için en değerli sonraki gelişim alanları gösterilecektir.
    - Hedef ekranında aktif hedef, tahmini mevcut performans aralığı, güven, deneme trendi, hedefe kalan yaklaşık gelişim, en yüksek gelişim fırsatları ve hazır oluş sinyalleri birlikte gösterilebilecektir.
    - **“Hedefime göre çalış”** eylemi ayrı bir algoritma kurmayacak; mevcut çalışma programı motorunu hedef bağlamıyla çalıştıracaktır.
    - Sistem hedef puanı **belirsizlik içeren bir optimizasyon problemi** olarak ele alacak; “X puan için Y net kesin gerekir” basit hesaplayıcısına indirgenmeyecektir.
    - Gerçek kullanım verisi arttıkça puan tahmini, net gereksinimi ve gelişim potansiyeli yeniden kalibre edilecektir.
    - Mimari düzeyde açık soru kalmamıştır; kesin KPSS puan dönüşümleri ve güncel sınav parametreleri uygulama aşamasında doğrulanmış güncel verilere göre yapılandırılacaktır.

12. 🟨 **AI Öğretmen**
    - Soru açıklama
    - Konu anlatımı
    - Kullanıcının seviyesine göre anlatım
    - Takip soruları
    - Öğrenme sayfasında video/konu bağlamını kullanması
    - Yanlış soru incelemesinde doğrulanmış çözümü bağlam olarak kullanması
    - AI'ın ne zaman doğrudan cevap vermesi, ne zaman ipucu/sokratik yönlendirme yapması gerektiği
    - Akademik doğruluk ve güvenilir kaynak/çözüm bağlamı
    - Kullanıcı seviyesine göre açıklama derinliği ve dilinin ayarlanması
    - AI öğretmenin kullanıcıya yeni soru/örnek üretip üretmeyeceği ve bunların kalite kontrolü

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

15. ⬜ **Sürekli Gelişim / Meta Oyun Sistemi**
    - Ürünün yalnızca “KPSS soru çözme sitesi” gibi hissettirmeyip, kullanıcının devamlı gelişimini takip ettiği yarı oyun deneyimine dönüşmesi ayrıca tartışılacak.
    - Çalışma kronometresi bu sistemin önemli girdilerinden biri olabilir.
    - Bugün / bu hafta / bu ay en çok çalışan kullanıcılar için leaderboard olup olmayacağı.
    - Çalışma süresine göre sıralama.
    - Çözülen soru sayısına göre sıralama.
    - Test, konu, tekrar, deneme ve başka gerçek öğrenme davranışlarının meta ilerlemeye nasıl bağlanacağı.
    - Kullanıcının sadece süre açık bırakarak veya anlamsız soru çözerek sistemi sömürmesini önleyecek kurallar.
    - Akademik başarı, çalışma emeği ve oyun ilerlemesinin birbirine nasıl bağlanacağı.
    - Uzun vadeli karakter/profil/hesap gelişimi hissi oluşturulup oluşturulmayacağı.
    - Sosyal rekabet, sezonlar, ligler, görevler veya başka oyun sistemleri olup olmayacağı.
    - Bu başlık klasik XP/rozet oyunlaştırmasından daha geniş tutulacak ve ayrı tartışılacaktır.

16. ⬜ **Arkadaş Sistemi**
   - Arkadaş ekleme
   - Ortak çalışma
   - Sıralamalar
   - Ortak hedefler
   - İlerleme paylaşımı

17. ⬜ **Kayıt ve İlk Kurulum Deneyimi**
   - Hesap oluşturma
   - KPSS türü seçimi
   - Ders seviyeleri
   - Hedefler
   - İlk çalışma profilinin oluşturulması

18. ⬜ **Mobil / PWA Deneyimi**
   - Telefon ana ekranına ekleme
   - Mobil navigasyon
   - Bildirimler
   - Çevrimdışı davranış

19. ⬜ **Admin Paneli**
   - Soru ekleme ve düzenleme
   - Hatalı soru bildirimleri
   - Kullanıcı yönetimi
   - Konu ağacı
   - AI sınıflandırmalarının kontrolü

20. ⬜ **İçerik Kalite Kontrolü**
   - Yanlış cevaplı sorular
   - Hatalı / belirsiz sorular
   - Güncelliğini kaybetmiş içerikler
   - AI ve insan kontrol akışı

21. ⬜ **Teknik Altyapı**
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

Şu anda aktif tartışma konusu: **12. AI Öğretmen**.
