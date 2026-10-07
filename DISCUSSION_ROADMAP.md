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
   - Tam klavye navigasyonu erişilebilirlik gereği zorunlu olacak; özel power-user kısayolları opsiyonel kalacaktır.
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
   - Jev ölçülmeden ana sınıflandırıcı olmayacak; Türkçe golden dataset'te yeterli olduğu taxonomy alanlarında geçerli ID'lerle sınırlı kullanılacak, aksi durumda structured-output LLM ana/yedek olacaktır. İlk zorluk tahmini yalnız cold-start sinyalidir.
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
   - Tahmini KPSS puanı ve hedef ilişkisi kabul edilmiş **Hedef Puan Sistemi** kurallarını kullanacaktır; ölçülen net ile tahmini puan ayrı tutulacaktır.
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

12. ✅ **AI Öğretmen**
    - Genel chatbot değil; soru bankası, konu öğrenme, yanlışlar, notlar ve adaptif sistemle bağlamlı öğretim katmanı olacak.
    - Soru ekranında ders/konu/alt konu/soru/şıklar/doğrulanmış çözüm/kullanıcı cevabı bağlamını otomatik kullanacak.
    - Video/öğrenme ekranında konu, video, bölüm ve zaman damgasını kullanacak; transcript yalnız resmî/yetkili ise kullanılacak, normal bağlam admin onaylı bölüm/zaman aralığı/özetlerden kurulacak ve scraping'e bağımlılık olmayacak.
    - Açıklama derinliği kullanıcının gerçek öğrenme durumuna göre ayarlanacak.
    - Varsayılan cevap kısa ve doğrudan olacak; Daha basit / Detaylı / Adım adım / Örnek / Benzer soru gibi genişletmeler bulunabilecek.
    - İpucu → daha güçlü ipucu → tam çözüm akışı desteklenecek; tam çözüm isteyen kullanıcı gereksiz yere engellenmeyecek.
    - Yanlış şık ve çeldirici analizi yapabilecek; kullanıcının seçtiği cevabın neden yanlış olduğunu açıklayabilecek.
    - KPSS odaklı bağımsız konu anlatımı yapabilecek.
    - Geçmiş yanlışlar, alt konu hata örüntüleri ve hata nedenlerini kişiselleştirme bağlamı olarak kullanabilecek.
    - AI Öğretmen ile AI Çalışma Koçu ayrı sorumluluklar olarak tutulacak.
    - Kayıtlı sorularda doğrulanmış doğru cevap ve çözüm akademik gerçek kaynağı olacak; AI bunları kendi başına değiştirmeyecek.
    - Çelişki fark edilirse yeni cevap uydurmak yerine hatalı soru bildirim akışına yönlendirecek.
    - AI benzer soru/örnek üretebilecek; kalite kontrolden geçmemiş AI pratik soruları akademik seviye puanını etkilemeyecek.
    - AI sohbetleri ders/konu bazlı oturumlar halinde saklanabilecek.
    - Yararlı AI açıklamaları Notlarıma ekle ile ilgili konu notlarına kaydedilebilecek.
    - Gerçek Sınav Modu sırasında AI kapalı; sınav sonrasında inceleme aşamasında açık olacak.
    - 10 soruluk adaptif testin cevaplama aşamasını bozmayacak; ağırlıklı olarak Testi Bitir sonrasında kullanılacak.
    - Ton destekleyici olacak fakat aşırı yapay motivasyon dili kullanılmayacak; kısa/normal/detaylı anlatım tercihleri desteklenebilecek.
    - Mimari düzeyde ana kararlar tamamlandı; teknik model/maliyet/transcript/moderasyon ayrıntıları Teknik Altyapı başlığına bırakıldı.

13. ✅ **AI Çalışma Koçu**
    - Program motorunun yerine geçmeyecek; onun verilerini ve gerçek performans sinyallerini açıklayan/konuşulabilir katman olacak.
    - Bugün ne çalışmalıyım, bu hafta neye odaklanmalıyım, neden ilerleyemiyorum, hedefime göre durumum nasıl gibi soruları destekleyecek.
    - Kullanıcının seviye, güven, unutma, yanlış, hız, deneme, hedef ve çalışma geçmişinden gerekli bağlamı seçerek kullanabilecek.
    - Öneriler gerçek program motoru adaylarından üretilecek ve Neden? açıklamasıyla sunulabilecek.
    - Kullanıcı öneriyi reddedebilir; uygun alternatif çalışma sunulabilir.
    - Yorgunluk veya eldeki süre gibi doğal dilde verilen kullanıcı bağlamı dikkate alınabilir; süre/kota zorunluluğu getirilmeyecek.
    - Veri yetersizliğinde kesin yargı üretmeyecek.
    - Çalışma/deneme sonunda kısa Koçun yorumu kartları bulunabilecek.
    - Öneriler Çalışmaya Başla / Yanlışları Aç / Tekrarı Başlat gibi doğrudan eylemlere bağlanabilecek.
    - Proaktif öneriler rahatsız edici popup/chatbot davranışına dönüşmeyecek.
    - AI Öğretmenle geçiş yapabilecek ancak Öğretmen ve Koç görevleri ayrı kalacak.
    - Oyunlaştırma/meta bağlamı Koç için ikincil olabilir ancak akademik planner'ın önüne geçmeyecek; ayrıntılı çapraz ilişki post-audit planlama turunda kapatılacak.
    - Mimari düzeyde ana kararlar tamamlandı.

### ✅ Genel AI altyapı prensibi — çapraz ürün kararı
- Site AI kullanmak zorunda değildir; API anahtarı olmadan çekirdek özelliklerin tamamı çalışmalıdır.
- Kullanıcı Ayarlar'dan kendi desteklenen AI sağlayıcısını/API bağlantısını ve kendi API anahtarını ekleyebilir.
- Kullanıcıya ham model adları yerine dört kalite/maliyet seviyesi gösterilir:
  1. Düşük Seviyeli AI — Çok Ucuz Fiyat
  2. Normal Seviyeli AI — Ucuz Fiyat
  3. Yüksek Seviyeli AI — Normal Fiyat
  4. Çok Yüksek Seviyeli AI — Yüksek Fiyat
- Her seçeneğin bilgi/ünlem ikonunda kısa yetenek, hız ve göreli maliyet açıklaması bulunabilir.
- Gerçek model eşlemesi arka planda tutulur; normal kullanıcı arayüzünde model adı gösterilmez.
- AI bağlantısı yoksa veya servis hata verirse çekirdek çalışma akışı bozulmaz; AI'sız moda güvenli biçimde devam edilir.
- Kullanıcı AI özelliklerini tamamen kapatabilir.
- API anahtarı güvenliği ve sağlayıcı adapter/mapping ayrıntıları Teknik Altyapı başlığında kesinleştirilecektir.

14. ✅ **Motivasyon / Oyunlaştırma**
    - ✅ **KPSS Seviye / Karakter Gelişim Sistemi kabul edildi.**
      - Akademik gizli seviye ile oyuncu/account seviyesi tamamen ayrı tutulacak.
      - Gerçek çalışma faaliyetleri XP verecek; pasif veya anlamsız işlemler XP üretmeyecek.
      - XP soru yeniliği, zorluk, gerçek çalışma değeri ve anti-farm sinyalleriyle dengelenecek.
      - Konu öğrenme, tekrar, yanlış güçlendirme, adaptif test ve denemeler XP sistemine bağlanacak.
      - Başlangıç level'ları daha hızlı, yüksek level'lar daha yavaş ilerleyecek; kabul edilmiş temel oyuncu level aralığı 1–100 olacak.
      - Level-up, XP özeti, sonraki ödül ve Seviye Merkezi ekranı olacak.
      - Profil çerçevesi, tema, banner, unvan ve benzeri kozmetik ödüller açılabilecek; akademik avantaj verilmeyecek.
      - Günlük gerçek çalışma için XP tavanı olmayacak; yalnızca farm davranışlarına azalan getiri uygulanacak.
      - AI kullanımı XP için zorunlu olmayacak ve yalnızca AI ile mesajlaşmak XP üretmeyecek.
      - Kesin XP tablosu, level eğrisi ve ödül kilometre taşları daha sonra dengelenecek.
      - ✅ XP ekonomisinin ana ilkeleri de kabul edildi: sabit soru başı XP yerine aktivite değeri + kalite + anti-farm yaklaşımı kullanılacak.
      - Doğrudan dakika başı XP verilmeyecek; gerçek aktif çalışma varsa oturum bonusu düşünülebilecek.
      - İlk tamamlama ve tam öğrenme döngüsü bonusları bulunabilecek.
      - Aynı soru/kolay içerik spamında XP getirisi kademeli azalacak; planlı yanlış/tekrar çalışmaları farm sayılmayacak.
      - Level eğrisi doğrusal olmayacak; başlangıç hızlı, yüksek seviyeler daha yavaş ilerleyecek.
      - Belirli level kilometre taşlarında şeffaf kozmetik/unvan ödülleri açılacak; lootbox olmayacak.
      - Başarımlar sınırlı ek XP verebilecek.
      - Sürekli 2X XP temel ekonomi yapılmayacak.
      - Ayrı coin/mağaza ekonomisi kullanılmayacak; ana ekonomi XP → Level → Ödül olacak.
      - Kesin XP sayıları ve katsayıları sonradan değiştirilebilir denge parametreleri olarak tutulacak.
      - ✅ **XP / Level alt sistemi ürün mimarisi açısından tamamlandı.**
      - Kesin sayısal denge, kozmetik kataloğu ve seviye 100 sonrası sistem uygulama/gerçek kullanım verisi aşamasına bırakıldı.
    - ✅ **Streak / Çalışma Serisi Sistemi kabul edildi.**
      - Seri yalnızca gerçek/anlamlı çalışmayla ilerleyecek; login streak sayılmayacak.
      - Güncel Seri, En Uzun Seri ve 30 günlük İstikrar ayrı göstergeler olacak.
      - Tekil kaçırılan günler için sınırlı Dinlenme Hakkı / Seri Koruması bulunacak; sınırsız gün atlama aracı olmayacak.
      - Seri bozulunca XP/level/ödül kaybı olmayacak ve cezalandırıcı dil kullanılmayacak.
      - Streak sürekli XP çarpanı vermeyecek; milestone ödülleri tek seferlik ve kalıcı olabilecek.
      - Gece yarısına taşan oturumlar ve saat dilimi adil, tutarlı kuralla ele alınacak.
      - Aynı gün ne kadar çalışılırsa çalışılsın tek streak günü sayılacak.
      - Takvim görünümü, istikrar başarımları ve isteğe bağlı sosyal profil görünürlüğü desteklenebilecek.
      - Kullanıcı streak göstergesini kapatabilecek.
      - Kesin aktif gün eşiği, koruma kazanma sıklığı ve milestone değerleri denge parametresi olarak sonra netleşecek.
      - ✅ **Streak alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Başarımlar ve Rozetler kabul edildi.**
      - Level sürekli hesap gelişimini, başarımlar özel kilometre taşlarını temsil edecek.
      - Çalışma, akademik gelişim, deneme, yanlışlardan öğrenme, istikrar, derslere özel ve nadir başarımlar gibi kategoriler bulunabilecek.
      - Bazı başarımlar kademeli olacak; aynı başarı ailesi I / II / III / IV biçiminde gelişebilecek.
      - Sayısal başarımların yanında anlamlı öğrenme davranışlarını ödüllendiren başarımlar bulunacak.
      - Gizli akademik skor doğrudan başarım koşulu olarak gösterilmeyecek.
      - Başarımların çoğu ilerleme göstergesiyle görülebilecek; küçük bir kısmı gizli/sürpriz olabilecek.
      - Başarımlar sınırlı tek seferlik XP ve/veya kozmetik ödül verebilecek.
      - Standart / Nadir / Destansı / Efsanevi gibi nadirlik katmanları desteklenebilecek.
      - Gerçek kullanım verisi oluştuğunda gerçek açılma oranları nadirlik göstergesi olarak sunulabilecek.
      - Profilde 3–5 seçili başarımın sergilendiği Rozet Vitrini bulunabilecek.
      - Ayrı Başarım Merkezi; kategori, nadirlik, ilerleme ve kupa geçmişini gösterecek.
      - Anti-farm kuralları benzersiz/geçerli soru, gerçek aktif çalışma ve gerçekçi deneme davranışını esas alacak.
      - Kazanılmış başarım geri alınmayacak.
      - ✅ **Başarımlar ve Rozetler alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Günlük / Haftalık Görev Sistemi kabul edildi.**
      - Görevler program motorunun oyunlaştırılmış uzantısı olacak; ayrı karar motoru olmayacak.
      - Günlük görevler kişiye özel, az sayıda ve kısa; haftalık görevler daha geniş davranış hedefleri olacak.
      - Tamamlanmayan görevler borç olarak birikmeyecek.
      - Kullanıcı uygun alternatif görev seçebilecek; görev değişimi kolay görev farmına dönüşmeyecek.
      - Görev çalışması normal XP verecek; görev tamamlama yalnızca küçük ek bonus üretebilecek.
      - Görev tamamlamak streak için zorunlu olmayacak.
      - Öğrenme, Test, Tekrar, Yanlış, Deneme, Denge ve Hız gibi görev türleri desteklenebilecek.
      - Kullanıcı görev sistemini kapatabilecek; sistem AI olmadan da çalışacak.
      - Dashboard özeti ve ayrı Görevler ekranı bulunabilecek.
      - Çok aşamalı ihtiyaçlar Görev Zinciri / Kamp yapısına dönüşebilecek.
      - ✅ **Günlük / Haftalık Görev alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Görev Zincirleri / Kamplar kabul edildi.**
      - Kamp, belirli akademik problemi birkaç aşamada çözmeye yönelik kişisel mini program olacak.
      - Yalnızca anlamlı zayıflık/retention/hız/önkoşul sinyallerinde önerilecek; her konu için otomatik açılmayacak.
      - Kamp 2–6 gibi makul sayıda aşamadan oluşabilecek ve tek oturumda bitmek zorunda olmayacak.
      - Tekrar/öğrenme, test, yanlış güçlendirme, doğrulama ve gerektiğinde hız kontrolü aşamaları kullanılabilecek.
      - Kamp borç veya ceza üretmeyecek; uzun aradan sonra yeni verilerle yeniden değerlendirilebilecek.
      - Program motoruyla aynı öncelik sistemi kullanılacak; aynı anda çok sayıda aktif kamp açılmayacak.
      - Kullanıcı kendi isteğiyle kamp başlatabilecek; hazır şablonlar kişiselleştirilebilecek.
      - AI olmadan çalışacak; kamp tamamlaması küçük bonus ve bazı durumlarda başarım/rozet verebilecek.
      - Kamp bitirmek konuya kalıcı ustalık anlamına gelmeyecek; akademik doğrulama ayrı kalacak.
      - Deneme Sonrası Güçlendirme Kampı özellikle desteklenecek.
      - Kullanıcı kampı durdurabilecek; XP/streak cezası veya başarısız etiketi olmayacak.
      - Aktif kamp günlük/haftalık görevlerle entegre olabilecek.
      - ✅ **Görev Zincirleri / Kamplar alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Oturum Sonu Geri Bildirimi / Ödül Sunumu kabul edildi.**
      - Sonuç akışı Akademik Sonuç → Gelişim → XP/Level → Görev/Streak/Başarım → Sonraki Öneri şeklinde ilerleyecek.
      - Akademik sonuç her zaman oyunlaştırmadan önce ve daha görünür olacak.
      - Gizli akademik puan gösterilmeyecek; gelişim insan diliyle anlatılacak.
      - XP özeti sade, ayrıntısı isteğe bağlı olacak; level-up kısa ve atlanabilir geri bildirimle gösterilecek.
      - Streak aynı gün tekrar tekrar gösterilmeyecek; görev ve başarımlar uygun oturum sonunda özetlenecek.
      - Çoklu ödüller tek bir “Bu oturumda kazandıkların” alanında gruplanacak.
      - Normal / Önemli / Büyük olaylara göre görsel yoğunluk değişecek.
      - Sesler ve animasyonlar azaltılabilir/kapatılabilir olacak; reduce-motion tercihine uyulacak.
      - Yanlışları inceleme ve sonraki akademik adım ana CTA olarak kalacak.
      - Deneme ve Gerçek Sınav Modu sonuçlarında oyunlaştırma akademik analizi gölgelemeyecek.
      - Düşük performansta sahte kutlama dili kullanılmayacak.
      - XP kaynakları kategori düzeyinde şeffaf olacak; anti-farm formülü tamamen açılmayacak.
      - Ödül olayları bir kez kutlanacak, sonrasında merkezlerde/geçmişte erişilebilir olacak.
      - ✅ **Oturum Sonu Geri Bildirimi / Ödül Sunumu alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Kozmetik Ödüller / Profil Kişiselleştirme kabul edildi.**
      - Kozmetikler akademik avantaj değil, hesap kimliği ve yolculuk geçmişi sağlayacak.
      - Profil çerçevesi, banner, unvan, avatar/aksesuar, rozet vitrini, tema ve çalışma ekranı kozmetikleri ayrı slotlar olacak.
      - Sosyal profilde level, seçili unvan, çerçeve, banner, rozet vitrini ve isteğe bağlı seri bilgisi gösterilebilecek; gizli akademik seviye gösterilmeyecek.
      - Temel açık/koyu mod ve erişilebilirlik ödül arkasına kilitlenmeyecek.
      - Soru/gerçek sınav ekranlarında kozmetik kullanım sınırlı ve dikkat dağıtmayan yapıda olacak.
      - Lootbox ve ayrı coin/mağaza sistemi olmayacak; ödüller şeffaf koşullarla açılacak.
      - Standart / Nadir / Destansı / Efsanevi nadirlikleri desteklenebilecek; efsanevi ödüller gerçekten nadir tutulacak.
      - Kazanılmış kozmetikler kalıcı olacak, duplicate item verilmeyecek.
      - Koleksiyon ve profil düzenleme/önizleme ekranları desteklenebilecek.
      - FOMO düşük tutulacak; varsayılan görünüm zaten kaliteli olacak.
      - Kozmetik hedefleri program motorunun akademik önerilerini değiştirmeyecek.
      - Reduce-motion, sade profil ve efekt azaltma tercihleri desteklenecek.
      - ✅ **Kozmetik Ödüller / Profil Kişiselleştirme alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **KPSS Yolculuk Haritası / Aşamalar kabul edildi.**
      - Yolculuk Haritası oyuncu level'ından ayrı olacak; level emeği, yolculuk ise hazırlık sürecindeki büyük aşamayı temsil edecek.
      - Aşamalar yalnızca XP'ye değil; konu kapsamı, doğrulanmış performans, güven, retention, önkoşullar, yanlışlar, denemeler ve zaman yönetimi gibi gerçek akademik sinyallere dayanacak.
      - Başlangıç → Temel Atma → Gelişim → Güçlenme → Deneme Dönemi → Final Hazırlığı/Sınav Dönemi biçiminde yaklaşık altı ana aşama kullanılacak.
      - Yolculuk aşaması ile gerçek sınav readiness'i ayrı sistemler olacak.
      - Geçişler tek eşikle değil çoklu kanıtla yapılacak; kullanıcıya karmaşık formül gösterilmeyecek.
      - Ana aşama bir kez kazanıldıktan sonra geri alınmayacak; güncel akademik durum/readiness gerektiğinde düşebilecek.
      - Harita özellik kilidi olmayacak ve program motorunun yerini almayacak.
      - Sınava kalan süre tek başına kullanıcıyı ileri aşamaya taşımayacak.
      - Görsel dil premium rota/istasyon/kilometre taşı yapısında olacak; aşırı fantastik RPG estetiğine kaçılmayacak.
      - Kamp, görev, zayıf alan ve deneme gibi kişisel olaylar haritada yan milestone olarak gösterilebilecek.
      - Sosyal profilde aşama isteğe bağlı gösterilebilecek ancak sıralama/üstünlük ölçütü olmayacak.
      - Dashboard “şimdi ne yapmalıyım?”, Yolculuk Haritası “genel olarak neredeyim?” sorusunu cevaplayacak.
      - ✅ **KPSS Yolculuk Haritası / Aşamalar alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Sürpriz Ödüller / Özel Anlar kabul edildi.**
      - Özel Anlar gerçek ve anlamlı çalışma olaylarından doğacak; ödül hakkı rastgele olmayacak.
      - İlkler, kişisel rekorlar, geri dönüşler, istikrar, akademik kırılma noktaları ve yolculuk anları desteklenecek.
      - Şansa dayalı kutu/büyük XP sistemi olmayacak; ana ödüller hatıra kartı, rozet, unvan veya küçük kozmetik olacak.
      - Aynı tür Özel An sık tekrarlanmayacak; seyrek ve kişiselleştirilmiş olacak.
      - Önemli Anlar / Hatıra Kartları geçmişi tutulabilecek.
      - FOMO ve farm davranışı oluşturulmayacak; hak edilen olay sonradan da görülebilecek.
      - Sistem AI olmadan çalışacak; kullanıcı Özel An sunumlarını kapatabilecek.
      - ✅ **Sürpriz Ödüller / Özel Anlar alt sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Motivasyon / Oyunlaştırma ana başlığı tamamlandı.**
      - Bireysel oyunlaştırma omurgası XP/Level, Streak, Başarımlar, Görevler, Kamplar, Oturum Ödül Sunumu, Kozmetikler, Yolculuk Haritası ve Özel Anlar olarak tamamlandı.
      - Lig/sıralama ve arkadaşlarla rekabet gibi sosyal oyunlaştırma kararları Meta Oyun ve Arkadaş Sistemi başlıklarına taşındı.
      - Kesin sayısal denge, kataloglar ve görsel üretim ayrıntıları uygulama/denge/UI aşamalarında netleştirilecek.

15. ✅ **Sürekli Gelişim / Meta Oyun Sistemi**
    - ✅ Meta oyun, mevcut bireysel oyunlaştırma sistemlerini aylar boyunca bağlayan uzun vadeli katman olarak kabul edildi.
    - ✅ Sezonlar ve kalıcı oyuncu level'ı birbirinden ayrılacak; sezon puanı dönemsel, hesap gelişimi kalıcı olacak.
    - ✅ Kişisel Sezon Yolu sosyal rekabetten bağımsız çalışacak ve gerçek çalışmayla kozmetik/milestone açacak.
    - ✅ Ligler ve leaderboard'lar isteğe bağlı olacak; sosyal rekabeti kapatan kullanıcı meta sistemden tam yararlanabilecek.
    - ✅ Ham süre, ham soru sayısı ve ham net tek başına ana sıralama metriği olmayacak; anti-farm ve geçerli çalışma sinyalleri kullanılacak.
    - ✅ Kendi geçmişinle yarışmak sosyal rekabetten daha önemli olacak; Kişisel Rekor Merkezi ve dönem karşılaştırmaları desteklenecek.
    - ✅ Sezon görevleri, dönemsel etkinlikler, koleksiyonlar ve topluluk hedefleri akademik motorla uyumlu çalışacak.
    - ✅ Takım/arkadaş meta özellikleri ürün kapsamındadır; ayrıntıları 16. Arkadaş Sistemi başlığında kesinleştirilecek.
    - ✅ Uzun ara sonrası Geri Dönüş Akışı olacak; kaçırılmış görevler borç olarak birikmeyecek.
    - ✅ Sınav sonrası geçmiş KPSS dönemleri arşivlenebilecek; hesap level'ı, başarımlar, kozmetikler ve tarihçe korunacak.
    - ✅ Meta Merkez; sezon, lig, rekor, koleksiyon, geçmiş ve yaklaşan milestone'ları bir arada gösterecek; dashboard'un görevini devralmayacak.
    - ✅ Ayrı coin/mağaza ekonomisi kullanılmayacak; meta ödülleri akademik avantaj sağlamayacak.
    - ✅ **Sürekli Gelişim / Meta Oyun Sistemi ürün mimarisi açısından tamamlandı.**
    - ✅ **Çıkış kapsamı ilkesi:** ürün MVP/“ilk sürüm sonra ekleriz” mantığıyla parçalanmayacak; kabul edilen ana sistemlerin tamamı tek kapsamlı ürün çıkışının parçasıdır. “Daha sonra ele alınacak” ifadesi yalnızca planlama sırasını belirtir.

16. ✅ **Arkadaş Sistemi**
   - ✅ Arkadaşlık karşılıklı onaylı, benzersiz kullanıcı adı/kod/link tabanlı ve ayrıntılı gizlilik kontrollü olacak.
   - ✅ Gizli akademik skor, zayıf alanlar ve paylaşılmamış netler sosyal profile açılmayacak.
   - ✅ Sosyal profil; avatar, çerçeve, banner, level, unvan, rozet vitrini, isteğe bağlı yolculuk/lig ve önemli anlardan oluşabilecek.
   - ✅ Sonsuz sosyal feed yerine kompakt Arkadaşlar Merkezi kullanılacak.
   - ✅ Birlikte Çalış odaları, sessiz odak, isteğe bağlı Pomodoro ve ortak oturum geçmişi desteklenecek.
   - ✅ Meydan okumalar isteğe bağlı ve akademik motorla uyumlu olacak; ham soru spamı teşvik edilmeyecek.
   - ✅ Canlı 1v1 soru düellosu desteklenecek; doğruluk hızdan önce gelecek ve akademik mastery'nin ana verisi olmayacak.
   - ✅ Arkadaş sıralamaları haftalık/sezonluk sağlıklı metriklerle çalışacak; ham net ana sosyal sıralama olmayacak.
   - ✅ Küçük Çalışma Ekipleri, ortak görevler, takım sezon puanı, takım ligleri ve takım geçmişi desteklenecek.
   - ✅ Takım büyüklüğü sıralamalarda normalize edilecek; ayrı kalıcı takım XP ekonomisi kurulmayacak.
   - ✅ Topluluk hedefleri, tebrikler, isteğe bağlı Hatıra Kartı paylaşımı ve çalışma içeriği/soru paylaşımı desteklenecek.
   - ✅ Tam birebir DM olmayacak; sosyal iletişim çalışma odası, takım bağlamı ve kısa tepki/tebrik gibi çalışma odaklı yüzeylerle sınırlı olacak; güvenlik araçları korunacak.
   - ✅ Gerçek Sınav Modunda sosyal bildirim ve etkileşimler sessize alınacak.
   - ✅ Sosyal başarımlar arkadaş sayısına değil, birlikte yapılan anlamlı çalışmaya dayanacak ve anti-farm korunacak.
   - ✅ **Arkadaş Sistemi ürün mimarisi açısından tamamlandı.**

17. ✅ **Kayıt ve İlk Kurulum Deneyimi**
   - ✅ Kayıt kısa ve gereksiz kişisel veri toplamayan yapıda olacak.
   - ✅ KPSS türü/dönemi temel akademik kurulum bilgisi olacak.
   - ✅ Hedef puan/net isteğe bağlı olacak; günlük saat/gün kotası zorunlu olmayacak.
   - ✅ Ders öz değerlendirmesi yalnızca başlangıç tahmini olacak; doğrulanmış kanıt yerine geçmeyecek.
   - ✅ Kısa kalibrasyon isteğe bağlı olacak; kullanıcı isterse çalışırken sistemin kendisini tanımasına izin verecek.
   - ✅ İlk profil gizli akademik skoru göstermeyecek; sade ve dürüst insan dili kullanılacak.
   - ✅ Ana onboarding CTA’sı “İlk Çalışmanı Başlat” olacak ve öneri program motorundan gelecek.
   - ✅ XP, streak, kamp, sezon, lig ve benzeri sistemler progressive disclosure ile ihtiyaç anında tanıtılacak.
   - ✅ AI ve sosyal kurulum zorunlu olmayacak; güvenli gizlilik varsayılanları kullanılacak.
   - ✅ Onboarding ilerlemesi kaydedilecek; temel tercihler sonradan değiştirilebilecek.
   - ✅ Yeni KPSS dönemi ve uzun aradan dönüş ayrı, daha kısa akışlarla yönetilecek.
   - ✅ Readiness/hedef puan ilk gün veri yokken sahte kesinlik üretmeyecek.
   - ✅ Kayıt öncesi örnek verili Demo akışı desteklenebilecek.
   - ✅ **Kayıt ve İlk Kurulum Deneyimi ürün mimarisi açısından tamamlandı.**

18. ✅ **Mobil / PWA Deneyimi**
   - ✅ Responsive web + kurulabilir PWA tek ürün/tek hesap olarak çalışacak.
   - ✅ Mobil navigasyon sade, aksiyon öncelikli ve tek elle kullanıma uygun olacak.
   - ✅ Mobil soru çözme; büyük dokunma alanları, soru paleti, zoom ve güvenli geri hareketi destekleyecek.
   - ✅ Normal çalışmalar sürekli otomatik kaydedilecek; uygulama kapanması/arama/arka plan veri kaybettirmeyecek.
   - ✅ Çevrimiçi / zayıf bağlantı / çevrimdışı / yeniden bağlandı durumları tutarlı biçimde desteklenecek.
   - ✅ Uygun içerikler çevrimdışı kullanılabilecek; AI ve canlı sosyal özellikler bağlantı gerektirebilecek.
   - ✅ Offline çalışmalar bağlantı gelince güvenli şekilde senkronlanacak; soru sürümleri korunacak.
   - ✅ Telefon, tablet ve masaüstü arasında kaldığın yerden devam temel ürün davranışı olacak.
   - ✅ Bildirimler bağlamsal ve kategori bazlı olacak; deep-link doğrudan ilgili ekrana götürecek.
   - ✅ Oturum süresi ile gerçek aktif çalışma süresi ayrılacak.
   - ✅ Video, AI Öğretmen, notlar, istatistik, Yolculuk, Sezon ve çalışma odaları mobil için özel UX kullanacak.
   - ✅ Tablet ve masaüstü kendi ekran avantajlarını kullanacak; mobil uğruna fakirleştirilmeyecek.
   - ✅ Erişilebilirlik, dark mode, düşük veri modu, düşük güçlü cihaz performansı ve safe-area desteği korunacak.
   - ✅ PWA güncellemeleri aktif oturumu/testi bozmayacak.
   - ✅ Hassas yerel veri, oturum ve izinler güvenli/minimum yetki yaklaşımıyla yönetilecek.
   - ✅ En kritik kalite üçlüsü: offline devam + otomatik kayıt + cihazlar arası devam.
   - ✅ **Mobil / PWA Deneyimi ürün mimarisi açısından tamamlandı.**

19. ✅ **Admin Paneli**
   - ✅ Admin Paneli soru yönetimiyle sınırlı olmayacak; ürünün tamamını yöneten Control Center / Operasyon Merkezi olacak.
   - ✅ Rol/yetki sistemi, kritik işlem koruması ve tam audit log kullanılacak.
   - ✅ Soru bankası, PDF/kitap importu, Jev sınıflandırması, kalite sinyalleri, duplicate kontrolü ve versioning yönetilecek.
   - ✅ Müfredat/taxonomy/prerequisite ağı, öğrenme içerikleri ve akademik motor config'leri panelden yönetilecek.
   - ✅ Akademik motor, XP/level, streak, görev, kamp, başarımlar, kozmetikler, Yolculuk, Özel Anlar, sezon ve ligler versiyonlu config ile yönetilecek.
   - ✅ AI Control Center; provider/model mapping, prompt versioning, kalite analizi ve AI üretim pipeline'ını yönetecek.
   - ✅ Kullanıcı destek görünümü, event geçmişi, kontrollü veri düzeltme/recalculation ve moderasyon araçları bulunacak.
   - ✅ Arkadaş/takım/sosyal sistem, topluluk hedefleri, bildirimler ve PWA operasyonları yönetilecek.
   - ✅ Feature flags, kontrollü deneyler, sistem konfigürasyonu, import/export ve operasyon araçları bulunacak.
   - ✅ Sistem sağlığı, background jobs, Event Explorer, güvenlik ve Anti-Farm merkezi bulunacak.
   - ✅ Taslak → Önizleme → Yayın, geri alma ve Değişiklik Etkisi analizi temel admin çalışma modeli olacak.
   - ✅ Gerçek veriye karışmayan Sandbox / Simülasyon araçları kullanıcı yolculuğu ve ekonomi/akademik motor davranışını test edecek.
   - ✅ Temel kalite üçlüsü: Versioned Configuration + Simulation/Sandbox + Full Audit Log.
   - ✅ **Admin Paneli ürün mimarisi açısından tamamlandı.**

20. ✅ **İçerik Kalite Kontrolü**
   - ✅ Kaynak/provenance, cevap, çözüm, taxonomy, zorluk, güncellik ve görsel bütünlük ayrı kalite boyutları olarak yönetilecek.
   - ✅ Cevap ve çözüm ayrı doğrulanacak; uygun Matematik sorularında deterministik/symbolic kontrol kullanılabilecek.
   - ✅ Jev ve diğer AI sistemleri kalite sinyali üretecek ancak doğru cevap otoritesi olmayacak.
   - ✅ PDF/OCR içeriklerinde kritik sembol, görsel, bağlam ve source-comparison kontrolleri yapılacak.
   - ✅ Estimated difficulty ile gerçek data difficulty ayrı kalacak; kullanıcı performansı anomaly sinyali olarak kullanılacak.
   - ✅ Doğruluk, süre, blank oranı, distractor dağılımı ve kullanıcı raporları birlikte kalite sinyali üretecek.
   - ✅ Quality Queue risk/severity ile önceliklendirilecek; güçlü sorunlarda Quarantine kullanılacak.
   - ✅ Hatalı soru düzeltmesinde **Impact Repair** geçmiş mastery, yanlış, retention ve deneme etkilerini mümkün olduğunca onaracak.
   - ✅ Platform hatası nedeniyle kullanıcıdan level/başarım geri alınmayacak; akademik ölçümler doğru veriye göre yeniden hesaplanabilecek.
   - ✅ Evergreen ve time-sensitive içerikler ayrılacak; resmî kaynak/provenance ve güncellik metadata'sı tutulacak.
   - ✅ Minor/Material revision ayrımı ve question version snapshot kullanılacak.
   - ✅ Coverage Matrix, fake-diversity/near-duplicate ve difficulty/kazanım coverage takibi yapılacak.
   - ✅ Practice / Calibration / Mock / Duel gibi kullanım uygunluğu flag'leri ve daha yüksek Exam-Grade kalite standardı desteklenecek.
   - ✅ Taslak/Approved/Active ayrımı ve otomatik Quality Gate yayın standardını koruyacak.
   - ✅ Gerekli kritik içeriklerde bağımsız double review uygulanabilecek.
   - ✅ AI/OCR/Jev/model-prompt kalite performansı gerçek review sonuçlarıyla ölçülerek pipeline iyileştirilecek.
   - ✅ Ana kalite döngüsü Kaynak → Doğrulama → Quality Gate → Review → Active → Gerçek Kullanım → Re-review → Versioned Fix → Impact Repair → Pipeline Learning olacak.
   - ✅ **İçerik Kalite Kontrolü ürün mimarisi açısından tamamlandı.**

21. ✅ **Teknik Altyapı**
   - ✅ Modüler monolit + ayrı worker/realtime/Python içerik süreçleri kabul edildi.
   - ✅ Ana omurga: Next.js PWA + Hono/Zod/Drizzle + managed PostgreSQL 18.
   - ✅ pg-boss background jobs; ayrı WebSocket realtime; Python/FastAPI PDF/OCR/istatistik servisi kullanılacak.
   - ✅ Better Auth, admin MFA, least-privilege RBAC ve güvenli session yaklaşımı kullanılacak.
   - ✅ S3 uyumlu object storage, IndexedDB/Dexie offline katmanı ve service worker kullanılacak.
   - ✅ Selective immutable event ledger + projection/state tabloları + versioning + idempotency veri güvenilirliğinin temeli olacak.
   - ✅ Deterministik TypeScript motorları AI'dan bağımsız çalışacak; reason-code üretecek.
   - ✅ Gerçek Sınav Modu başlatılırken internet gerekecek; başladıktan sonra desteklenen offline devam süreyi durdurmayacak.
   - ✅ AI Gateway sağlayıcı/model bağımsız olacak; BYOK anahtarları sunucuda zarf şifreli tutulacak.
   - ✅ Jev ana sınıflandırıcı olmadan önce Türkçe golden dataset üzerinde ölçülecek; yetersizse structured-output LLM ana/yedek olacak.
   - ✅ FSRS güçlü retention adayı, Rasch/1PL güçlü difficulty adayı olacak; ikisi de gerçek veriyle doğrulanarak aktive edilecek ve engine arayüzleri algoritmadan bağımsız kalacak.
   - ✅ PDF/OCR hattı ayrı worker havuzunda; native soru çıkarımı + kritik token doğrulama + mevcut Quality Gate akışıyla çalışacak.
   - ✅ Tam DM olmayacak; çalışma odası/takım/kısa tepki odaklı iletişim korunacak.
   - ✅ Çalışma günü varsayılan sınırı kullanıcı saat diliminde 04:00 olacak ve config ile değiştirilebilecek.
   - ✅ Cloudflare + Docker tabanlı taşınabilir hosting yaklaşımı; Hetzner güçlü aday ancak sağlayıcı bağımlılığı olmayacak.
   - ✅ Production veritabanında managed PostgreSQL tercih edilecek; yedek + bağımsız kopya + restore tatbikatı uygulanacak.
   - ✅ OpenTelemetry, audit, correlation ID, structured logs ve güvenlik/PII maskeleme uygulanacak.
   - ✅ Golden dataset, regression, end-to-end ve gerekli load testleri teknik kalite kapısı olacak.
   - ✅ **Teknik Altyapı ürün mimarisi açısından tamamlandı.**


22. ✅ **PRODUCT_PLAN Konsolidasyonu ve Çelişki Temizliği**
   - ✅ `PRODUCT_PLAN.md` güncel kabul edilmiş kararların kanonik kaynağı olacak; eski/geçici çelişkiler Git geçmişine bırakılacak.
   - ✅ Onboarding, Dashboard, Günlük Çalışma, soru zorluğu ve Jev kararları daha yeni kabul edilmiş kurallarla senkronlandı.
   - ✅ “İlk sürüm” dili kapsam ilkesiyle uyumlu biçimde temizlendi.
   - ✅ Tam DM yok kararı, yetkili transcript politikası ve bildirimlerde güncel genel prensip plana işlendi.
   - ✅ Klavye çelişkisi çözüldü: erişilebilir tam klavye navigasyonu zorunlu, özel power-user kısayolları opsiyonel.
   - ✅ **Plan konsolidasyonu tamamlandı.**

23. ✅ **KPSS Sınav Modeli / Müfredat / Güncel Bilgiler / Puan Türleri**
   - ✅ Versiyonlu Exam Blueprint / Sınav Profili merkezi sınav modeli olacak.
   - ✅ KPSS Lisans / Ön Lisans / Ortaöğretim GY-GK profilleri sınav dönemi ve ilgili puan türüyle bağlanacak.
   - ✅ Resmî tarih durumu Tahmini / Resmî / Revize Edildi / Gerçekleşti olarak yönetilecek; tarih değişikliği programı yeniden hesaplatacak, borç/ceza üretmeyecek.
   - ✅ Official Scope ile platformun ayrıntılı Ders → Konu → Alt Konu → Kazanım taxonomy'si ayrı ve versiyonlu mapping ile bağlanacak.
   - ✅ Müfredat değişikliğinde geçmiş veri silinmeyecek; yalnız yeni dönem aktif kapsam/uygunluk değişecek.
   - ✅ Soru sayısı, süre ve yaklaşık resmî dağılımlar koda sabit gömülmeyecek; blueprint verisi olacak.
   - ✅ Denemeler blueprint ve question-version snapshot'ı koruyacak.
   - ✅ Net performansı ile KPSS puan tahmini ayrılacak; sahte kesin “X net = Y puan” yaklaşımı kullanılmayacak.
   - ✅ Hedef puan sınav dönemi + profil + puan türü + hedef değer bağlamıyla saklanacak.
   - ✅ Güncel Bilgiler time-sensitive akademik içerik olarak ayrı aktif dönem havuzuyla yönetilecek; sert “son 12 ay” kuralı olmayacak.
   - ✅ Güncel Bilgiler akışı doğrulanmış kısa bilgi → mini kontrol → retention → sınava yakın karma tekrar mantığında çalışabilecek.
   - ✅ Çıkmış sorular kendi dönem/blueprint provenance'ını koruyacak ve yeni dönemde kapsam/güncellik kontrolünden geçecek.
   - ✅ Admin Sınav Modeli Merkezi eski/yeni blueprint karşılaştırması, etki analizi ve audit ile çalışacak.
   - ✅ Sınav gerçeklerinde ÖSYM resmî kılavuz/takvim/dokümanları birincil kaynak olacak.
   - ✅ **KPSS Sınav Modeli / Müfredat / Güncel Bilgiler / Puan Türleri tamamlandı.**

24. ✅ **Akademik Evidence & Scoring Kuralları**
   - ✅ Ana model cevap → bağlamlı Evidence Event → Mastery / Confidence / Retention / Readiness / Difficulty projection zinciri olacak.
   - ✅ Mastery, confidence, retention, readiness, difficulty ve wrong/blank risk ayrı boyutlar olacak.
   - ✅ Mevcut +5/+3/+2/+1 benzersiz-soru mastery omurgası korunacak; evidence kaynağı/kalitesi versioned katsayı ve eligibility ile yorumlanacak.
   - ✅ Doğru/yanlış geçerli bağımsız soruda güçlü evidence olacak; tek cevap geçmişi aşırı ezmeyecek.
   - ✅ Boş cevap yanlıştan daha düşük mastery etkisi taşıyacak; Gerçek Sınav Modunda zaman yönetimi/readiness için ayrıca güçlü sinyal olabilecek.
   - ✅ Test teslim edilmeden kalıcı akademik evidence oluşmayacak.
   - ✅ Aynı soru, çözümü görülmüş soru ve near-duplicate/template tekrarları daha düşük evidence taşıyacak.
   - ✅ Yeni Wrong Verification ve Retention soruları güçlü bağımsız evidence olacak.
   - ✅ Gerçek Sınav Modu readiness için en güçlü kaynaklardan biri; Çalışma Modu daha düşük readiness ağırlığında olacak.
   - ✅ Uygun yeni sorulu Karma Test mastery evidence üretecek ancak tek başına gerçek sınav readiness kanıtı olmayacak.
   - ✅ Mini check, video/özet, AI sohbeti, not alma ve “konuyu biliyorum” beyanı mastery üretmeyecek.
   - ✅ Quality Gate'ten geçmemiş AI pratik soruları kalıcı akademik modele girmeyecek.
   - ✅ 1v1 düello doğrudan mastery/readiness üretmeyecek.
   - ✅ Confidence evidence miktarı/çeşitliliği/güncelliğini ayrı izleyecek; mastery sırf zaman geçti diye düşmeyecek.
   - ✅ Exam Readiness ayrı composite projection olacak.
   - ✅ Difficulty kalibrasyonunda kullanıcı başına aynı question_version'ın ilk bağımsız geçerli attempt'i ana veri olacak.
   - ✅ Primary Assessed Skill yaklaşımı çok becerili sorularda mastery'nin yapay şişmesini engelleyecek.
   - ✅ Material question revision geçmiş evidence için Impact Analysis/Repair tetikleyebilecek.
   - ✅ Evidence Event, policy/engine/version/oturum bağlamıyla tam izlenebilir olacak ve reason codes üretecek.
   - ✅ **Akademik Evidence & Scoring Kuralları tamamlandı.**

25. ✅ **Ayarlar / Hesap Yaşam Döngüsü / Bildirimler / Gizlilik**
   - ✅ Ayarlar Merkezi hesap, KPSS/hedef, görünüm/erişilebilirlik, bildirim, gizlilik/sosyal, AI/BYOK, öğrenme tercihleri, cihazlar/offline ve Verilerim alanlarını birleştirecek.
   - ✅ E-posta doğrulama, şifre sıfırlama/değiştirme, e-posta değişikliği, passkey/TOTP ve recovery akışları bulunacak.
   - ✅ Kritik hesap işlemlerinde step-up authentication kullanılabilecek; normal kullanıcı 2FA'sı opsiyonel, admin MFA'sı zorunlu kalacak.
   - ✅ Kullanıcı aktif cihaz/oturumlarını görebilecek, tekil oturum veya diğer tüm cihazları kapatabilecek.
   - ✅ Transactional e-posta güvenlik/hesap mesajlarını pazarlama iletişiminden ayrı yönetecek.
   - ✅ KPSS türü/dönemi değişikliği geçmişi silmeyecek; aktif blueprint/program yeni bağlama göre yeniden hesaplanacak.
   - ✅ Erişilebilirlik temel özellik olacak; tema Sistem/Açık/Koyu desteklenecek.
   - ✅ Bildirim olayı ile uygulama içi/push/e-posta teslim kanalları ayrılacak.
   - ✅ Güvenlik bildirimleri kritik kategori olacak; akademik/streak/sosyal/meta push kullanıcı kontrolünde kalacak.
   - ✅ Push izni ilk açılışta değil bağlama göre istenecek.
   - ✅ Varsayılan sessiz saat 22:00–08:00 kullanıcı yerel saati olacak; değiştirilebilir/kapatılabilir.
   - ✅ Merkezi Notification Orchestrator anti-spam/frekans politikası uygulayacak; yaklaşık 2 proaktif push/gün başlangıç adayı, kesin değer config olacak.
   - ✅ Akademik bilgiler varsayılan olarak özel olacak; sosyal görünürlük alan bazlı opt-in olacak.
   - ✅ Arkadaş keşfi kullanıcı adı/kod/link üzerinden çalışacak; telefon rehberi zorunlu olmayacak.
   - ✅ Presence ayrı gizlilik tercihi olacak; engelleme güçlü sosyal kısıtlar uygulayacak.
   - ✅ AI tamamen kapatılabilir; varsayılan AI gizlilik modu yalnız mevcut bağlam olacak, geniş çalışma geçmişi kişiselleştirmesi opt-in olacak.
   - ✅ BYOK anahtarları maskeli/encrypted olacak; kullanıcı değiştirebilecek/kaldırabilecek.
   - ✅ Zorunlu operasyonel telemetry ile isteğe bağlı ürün analitiği ayrılacak.
   - ✅ Kullanıcı offline cihaz verisini yönetebilecek; local cache temizliği bulut verisini silmeyecek.
   - ✅ Self-service veri export'u ve self-service hesap silme bulunacak.
   - ✅ Hesap silme Deletion Pending + 7 günlük geri alma penceresiyle çalışacak; final retention/anonimleştirme ayrıntıları 28'de kapanacak.
   - ✅ Hesap silme finalinde BYOK credential'ları da güvenli silme sürecine girecek.
   - ✅ Kritik güvenlik/gizlilik değişiklikleri audit event üretecek; hesap düzeyi ve cihaz düzeyi ayarlar ayrılacak.
   - ✅ **Ayarlar / Hesap Yaşam Döngüsü / Bildirimler / Gizlilik tamamlandı.**

26. ✅ **İçerik Üretim Operasyonu / Coverage / Telif / Release İçerik Kriterleri**
   - ✅ İçerik üretimi sürekli Content Factory olarak çalışacak; source → extraction/creation → validation → review → Active → kullanım → re-review → Impact Repair döngüsü korunacak.
   - ✅ Sorular, çözümler, özetler, formül/kural kartları, örnekler, mini check'ler, video mapping'leri, Güncel Bilgiler ve deneme şablonları ayrı içerik tipleri olacak.
   - ✅ Her içerik provenance taşıyacak; PDF kaynaklarında hash/sürüm/sayfa/batch gibi izlenebilir metadata korunacak.
   - ✅ Rights Status zorunlu metadata olacak ancak teknik yayın hard gate'i olmayacak.
   - ✅ Hak durumu belirsiz/kısıtlı kaynak Admin Rights Override + açık uyarı + audit ile learner-facing Active yapılabilecek.
   - ✅ Rights override akademik kalite gate'lerini düşürmeyecek; Exam-Grade içerik de akademik review standardını koruyacak.
   - ✅ Her Active soru en az 1 human approval alacak; Exam-Grade/yüksek riskli içerikte double review uygulanabilecek.
   - ✅ Review Queue severity/priority ile çalışacak; kritik canlı içerik sorunları en yüksek öncelikte olacak.
   - ✅ Coverage raw count değil Effective Independent Count ile ölçülecek; near-duplicate/template varyantları coverage'ı şişiremeyecek.
   - ✅ Primary Assessed Skill coverage'ın temel birimi olacak.
   - ✅ ContentCoveragePolicy v1 başlangıç standardı: ≥12 effective soru/skill, genel olarak ≥40/topic, geniş/yüksek ağırlıklı topic'lerde 60+, ≥8 full mock-equivalent, ≥6 branch mock-equivalent/ana ders.
   - ✅ Unseen Reserve ayrıca ölçülecek ve içerik üretim önceliğini etkileyebilecek.
   - ✅ Practice/Calibration/Retention/Wrong Verification/Mock/Duel eligibility flag'leri ayrı tutulacak.
   - ✅ Active soru = doğrulanmış doğru cevap + açıklamalı çözüm; solution coverage %100 olacak.
   - ✅ Active sorularda provenance + rights status + version + Primary Skill + quality metadata bulunacak.
   - ✅ Learning content coverage da release gate'in parçası olacak; video yoksa native fallback öğrenme içeriği bulunacak.
   - ✅ Güncel Bilgiler coverage; freshness, source, kategori ve question coverage ile birlikte değerlendirilecek.
   - ✅ Content Debt + Coverage Matrix + gerçek kullanım verisi içerik üretim önceliğini yönetecek.
   - ✅ Yeni OCR/Jev/model/prompt/parser sürümleri golden corpus regression karşılaştırması olmadan production içerik hattına alınmayacak.
   - ✅ Import batch pause/quarantine/rollback destekleyecek; kullanılmış içerik hard-delete yerine version/quarantine/archive ile yönetilecek.
   - ✅ Kullanıcı raporları ve anomaly sinyalleri Quality Queue'ya bağlanacak; güçlü sorunlar otomatik Quarantine Pending Review oluşturabilecek.
   - ✅ Content Release Dashboard scope mapping, effective coverage, solution, rights/override, Exam-Grade capacity, mock capacity, reserve, freshness, overdue review, critical issue ve Content Debt gösterecek.
   - ✅ Release content gate; %100 official scope mapping, minimum effective coverage, %100 solution/provenance/rights metadata, 0 kritik answer conflict/broken context ve yeterli mock/learning/current-affairs kapasitesi isteyecek.
   - ✅ Rights belirsiz/kısıtlı içerik release gate'i yalnız Admin override + audit ile geçebilecek; rights metadata'nın bulunması yine zorunlu olacak.
   - ✅ İçerik üretimi release sonrası da sürekli operasyon olarak devam edecek.
   - ✅ **İçerik Üretim Operasyonu / Coverage / Telif / Release İçerik Kriterleri tamamlandı.**

27. ✅ **Sosyal Edge Cases / AI Lifecycle / Yardım / Kaydedilenler**
   - ✅ Arkadaşlık/block/mute yaşam döngüsü ve sosyal geçmişin korunması kesinleştirildi.
   - ✅ Takım katkısı takım değiştirirken taşınmayacak; başlangıç takım değiştirme cooldown'ı 7 gün olacak.
   - ✅ Lider ayrılması, takım dağılması ve ortak geçmiş davranışları tanımlandı.
   - ✅ Çalışma odalarında host bağlantı kopması/ayrılması, block ve ownership edge-case'leri ele alındı.
   - ✅ Düello server-authoritative lifecycle'ı, 60 sn reconnect window, forfeit/void, beraberlik ve invalid-question davranışı kesinleştirildi.
   - ✅ Challenge ve moderasyon lifecycle'ları akademik state'ten ayrıldı.
   - ✅ Username başlangıç politikası 30 günde bir değişiklik + eski ad için 30 gün rezervasyon olacak.
   - ✅ AI thread'leri bağlamlı ve sınırlı olacak; evrensel sınırsız hafıza varsayılan olmayacak.
   - ✅ AI sohbetleri kullanıcı tarafından silinebilecek/export edilebilecek; model/prompt/provider/version metadata'sı izlenebilir olacak.
   - ✅ Verified Solution > AI Teacher otoritesi korunacak; AI quality reporting bulunacak.
   - ✅ AI outage core ürünü durdurmayacak; AI Koç Academic Planner kararını gamification uğruna değiştiremeyecek.
   - ✅ AI kritik akademik/sosyal/güvenlik state'lerine doğrudan write yapamayacak.
   - ✅ Yardım & Geri Bildirim Merkezi ticket lifecycle, güvenli diagnostics, read-only Support View ve Sistem Durumu yüzeylerini içerecek.
   - ✅ Kaydedilenler Merkezi soru/öğrenme/not/önemli yanlış/Güncel Bilgiler içeriklerini birleştirecek; kaydetmek mastery evidence olmayacak.
   - ✅ Kaydedilenlerden test oluşturma normal evidence/eligibility kurallarına tabi olacak; offline kullanım ayrı aksiyon olacak.
   - ✅ **Level 100 hard cap** olacak; prestige olmayacak. Level 100 sonrası uzun vadeli ilerlemeyi Season/Journey/Achievements/Records/Collections/Special Moments taşıyacak.
   - ✅ **Sosyal Edge Cases / AI Lifecycle / Yardım / Kaydedilenler tamamlandı.**

28. 🟨 **Data Retention / Compliance / Release Acceptance Criteria**
   - Veri saklama/silme süreleri
   - KVKK/compliance çıkış kapısı
   - Felaket kurtarma ve güvenlik release koşulları
   - “Ürün hazır” kabul kriterleri

---

## Çalışma Prensibi

Bu listedeki başlıklar mümkün olduğunca sırayla ele alınacaktır. Bir başlık yeterince netleştiğinde durumu ✅ olarak değiştirilecek ve kesinleşmiş ürün kararları `PRODUCT_PLAN.md` içerisine işlenecektir.

İlk 21 ana başlık tamamlandıktan sonra yapılan gap analysis ile post-audit planlama turu açılmıştır. Şu anda aktif tartışma konusu: **28. Data Retention / Compliance / Release Acceptance Criteria 🟨**.
