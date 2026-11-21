# KÜBRA — İLAN LİSTELEME, ARAMA VE DETAY

**Sorumlu:** Kübra  
**Görev:** İlan Listeleme, Arama ve Detay  
**Önerilen branch:** `feature/listing-search`  
**Çalışma alanı:** `backend/` ve `frontend/` içindeki ilan listeleme, arama ve detay modülleri

## 1. Görevin Tanımı

Emlak360 platformunda kullanıcıların yayınlanmış gayrimenkul ilanlarını görüntüleyebilmesini, arayabilmesini, çeşitli kriterlere göre filtreleyebilmesini ve seçtikleri ilanların detaylarını inceleyebilmesini sağlayan sistemi geliştirmek.

Kübra, ilan verilerinin veritabanından doğru şekilde getirilmesinden, arama ve filtreleme işlemlerinin uygulanmasından ve ilan listeleme ile detay ekranlarının geliştirilmesinden sorumludur.

## 2. Yapılacak İşler

### A. İlan listeleme

- [ ] Yayınlanmış ilanları veritabanından getiren API geliştirmek.
- [ ] `GET /api/listings` endpoint'ini oluşturmak.
- [ ] İlanların kartlar hâlinde gösterildiği listeleme sayfasını geliştirmek.
- [ ] İlan kartlarında temel bilgileri göstermek:
  - İlan görseli
  - İlan başlığı
  - Fiyat
  - İl ve ilçe
  - Gayrimenkul türü
  - Satılık/kiralık bilgisi
  - Metrekare
- [ ] İlanları oluşturulma tarihine göre sıralamak.
- [ ] Sayfalama sistemi eklemek.
- [ ] İlan bulunmadığında uygun bilgilendirme göstermek.
- [ ] Yüklenme ve hata durumlarını yönetmek.

### B. İlan arama

- [ ] İlan başlığı ve açıklamasına göre anahtar kelime araması geliştirmek.
- [ ] `GET /api/listings?search=...` sorgusunu desteklemek.
- [ ] Arama sonuçlarını listeleme ekranında göstermek.
- [ ] Boş arama sonuçları için bilgilendirme hazırlamak.
- [ ] Büyük/küçük harf farklılıklarını uygun şekilde ele almak.
- [ ] Arama girdilerini doğrulamak.

### C. İlan filtreleme

- [ ] İl ve ilçeye göre filtreleme.
- [ ] Satılık/kiralık seçimi.
- [ ] Gayrimenkul türüne göre filtreleme.
- [ ] Minimum ve maksimum fiyat filtreleri.
- [ ] Minimum ve maksimum metrekare filtreleri.
- [ ] Oda sayısına göre filtreleme.
- [ ] Birden fazla filtrenin aynı anda kullanılmasını sağlamak.
- [ ] Filtreleri temizleme seçeneği eklemek.
- [ ] Filtre sonuçlarını sayfalama ve sıralama ile uyumlu çalıştırmak.

**Not:** Kullanılabilir filtreler Yağız'ın hazırladığı `Listing` modelindeki alanlara göre kesinleştirilecektir.

### D. İlan sıralama ve sayfalama

- [ ] En yeni ilanlar.
- [ ] En eski ilanlar.
- [ ] Fiyat: düşükten yükseğe.
- [ ] Fiyat: yüksekten düşüğe.
- [ ] Sayfa başına gösterilecek ilan sayısını belirlemek.
- [ ] Önceki ve sonraki sayfa geçişlerini hazırlamak.
- [ ] Filtre veya arama değiştiğinde sayfalama durumunu doğru güncellemek.

### E. İlan detay sayfası

- [ ] `GET /api/listings/:id` endpoint'ini geliştirmek.
- [ ] İlan detay sayfasını oluşturmak.
- [ ] İlan başlığı ve açıklamasını göstermek.
- [ ] Fiyat ve konum bilgilerini göstermek.
- [ ] Gayrimenkul özelliklerini görüntülemek.
- [ ] İlan görselleri için galeri hazırlamak.
- [ ] İlanın yayınlanma tarihini göstermek.
- [ ] İlan sahibinin paylaşılmasına izin verilen temel bilgilerini göstermek.
- [ ] Geçersiz veya bulunamayan ilanlar için uygun hata sayfası hazırlamak.
- [ ] Favorilere ekleme ve iletişim alanları için Leyla'nın geliştireceği bileşenlere yer ayırmak.

### F. Kullanıcı deneyimi

- [ ] Listeleme ve detay sayfalarını mobil uyumlu geliştirmek.
- [ ] Arama ve filtreleme alanlarını anlaşılır tasarlamak.
- [ ] İlan kartlarından detay sayfasına geçiş sağlamak.
- [ ] Filtreleme sırasında kullanıcıya yüklenme durumunu göstermek.
- [ ] Gereksiz API isteklerini azaltmak.
- [ ] İlan görsellerinin uygun şekilde yüklenmesini sağlamak.

## 3. Görev Nasıl Yapılacak?

### Adım 1 — Mevcut projeyi incele

Öncelikle `docs/AI_REHBER.md` dosyasını ve kendi görev dosyanı oku.

Yağız'ın hazırladığı ilan modelini incele. Hangi alanların mevcut olduğunu, ilan durumlarının nasıl tutulduğunu ve görsellerin nasıl ilişkilendirildiğini öğren.

**Yeni bir ilan modeli oluşturma. Mevcut modeli kullan.**

### Adım 2 — Yağız ile veri yapısını netleştir

Listeleme ve detay ekranlarında hangi bilgilerin gösterileceğini Yağız ile belirle.

Özellikle:

- İlanın benzersiz ID değeri
- Başlık ve açıklama
- Fiyat
- Konum
- Gayrimenkul özellikleri
- İlan görselleri
- İlan sahibi
- İlan durumu
- Oluşturulma tarihi

alanlarının API üzerinden nasıl alınacağını kararlaştır.

### Adım 3 — Listeleme API'sini geliştir

`GET /api/listings` endpoint'ini oluştur.

İlanları veritabanından getirirken yalnızca herkese açık olarak yayınlanması gereken kayıtları döndür.

Sayfalama ve sıralamayı mümkün olduğunca veritabanı sorgusu seviyesinde uygula.

API'nin ilan verileriyle birlikte toplam sonuç ve sayfalama bilgilerini de döndürmesini sağla.

### Adım 4 — Arama ve filtreleme sistemini geliştir

Arama ve filtreleri aynı listeleme endpoint'i üzerinden çalıştır.

Önerilen sorgu örneği:

```http
GET /api/listings?search=daire&city=Istanbul&listingType=SALE&minPrice=1000000&maxPrice=5000000&page=1
```

Parametre adlarını ve kullanılacak değerleri Yağız'ın veri modeliyle uyumlu olacak şekilde kesinleştir.

Filtreler bir arada kullanıldığında sonuçların doğru geldiğini test et.

### Adım 5 — Listeleme sayfasını oluştur

Nurşen'in hazırladığı ortak tasarım bileşenlerini kullan.

Sayfada:

- Arama alanı
- Filtreleme paneli
- Sıralama seçeneği
- İlan kartları
- Sayfalama kontrolleri

bulunsun.

İlan kartına tıklandığında kullanıcı ilgili ilan detay sayfasına yönlendirilsin.

### Adım 6 — İlan detay sayfasını geliştir

`GET /api/listings/:id` endpoint'ini oluştur.

İlan detay sayfasında bütün gerekli gayrimenkul bilgilerini ve görselleri göster.

Yalnızca herkese açık olması gereken ilan bilgilerini ve kullanıcı verilerini döndür.

Leyla'nın favori ve iletişim özellikleri için uygun entegrasyon alanlarını hazırla.

**Favorilere ekleme ve iletişim isteği gönderme işlevlerini kendin geliştirme. Bunlar Leyla'nın sorumluluğundadır.**

### Adım 7 — Testleri gerçekleştir

Aşağıdaki senaryoları kontrol et:

- İlanların doğru listelenmesi
- Yayınlanmamış ilanların herkese açık listede görünmemesi
- Anahtar kelime aramasının çalışması
- Tekli ve çoklu filtrelerin çalışması
- Minimum/maksimum fiyat kontrolü
- Sıralama seçeneklerinin doğru sonuç vermesi
- Sayfalama işlemlerinin çalışması
- Boş arama sonuçları
- Geçersiz filtre değerleri
- Geçersiz ilan ID'si
- İlan detay bilgilerinin doğruluğu
- Mobil ekran uyumluluğu

### Adım 8 — DİR risk analizini yap

İlan listeleme ve detay modülü için riskleri değerlendir.

Öncelikli riskler:

**Risk 1 — Arama ve filtreleme işlemlerinde hatalı veri işleme**

Yanlış filtre sonuçları, hatalı sıralama veya eksik ilan gösterimi.

**Risk 2 — İlan detay bilgilerinin yanlış veya eksik gösterilmesi**

Kullanıcının hatalı fiyat, konum veya gayrimenkul bilgileriyle karşılaşması.

Bu riskler için DREAD kriterlerini puanla, gerekçelerini açıkla ve alınan önlemleri `docs/dir/` klasöründe belgele.

### Adım 9 — GitHub'a teslim et

Kendi feature branch'inde çalış.

Kodları test ettikten sonra Pull Request oluştur.

API değişikliklerini ve diğer ekip üyelerinin kullanması gereken bilgileri paylaş.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Birlikte yapılacak çalışma |
|---|---|
| **Zemzem** | Backend API standartları, veri erişimi ve gerektiğinde yetkilendirme |
| **Nurşen** | İlan kartlarının, listeleme ve detay sayfalarının ortak tasarıma uyumu |
| **Yağız** | Listing modeli, ilan görselleri, durum bilgileri ve veri yapısı |
| **Asmin** | Arama, filtreleme, listeleme ve detay sayfası testleri |
| **Leyla** | İlan detayında favorilere ekleme ve iletişim bileşenlerinin entegrasyonu |

### Görev sınırları

Kübra yalnızca ilanların görüntülenmesi, aranması, filtrelenmesi ve detay bilgilerinin sunulmasıyla ilgilenir.

- **Yağız:** İlan oluşturma, düzenleme, silme ve İlanlarım sayfası
- **Nurşen:** Ortak frontend tasarımı ve temel sayfalar
- **Zemzem:** Kullanıcı yönetimi ve oturum altyapısı
- **Asmin:** Yönetici paneli ve genel kalite testleri
- **Leyla:** Favoriler, iletişim ve entegrasyon

## 5. Görevin Kabul Kriterleri

- [ ] Yayınlanmış ilanlar listelenebiliyor.
- [ ] İlan kartları gerekli bilgileri doğru gösteriyor.
- [ ] Anahtar kelime araması çalışıyor.
- [ ] İl, ilçe, fiyat ve gayrimenkul filtreleri çalışıyor.
- [ ] Birden fazla filtre birlikte kullanılabiliyor.
- [ ] Sıralama seçenekleri doğru çalışıyor.
- [ ] Sayfalama sistemi çalışıyor.
- [ ] İlan detay sayfası doğru bilgileri gösteriyor.
- [ ] İlan görselleri görüntülenebiliyor.
- [ ] Yayınlanmamış ilanlar herkese açık sayfalarda gösterilmiyor.
- [ ] Boş sonuçlar ve hatalı istekler doğru yönetiliyor.
- [ ] Listeleme ve detay sayfaları mobil uyumlu.
- [ ] Leyla'nın favori ve iletişim bileşenleri için entegrasyon alanları hazır.
- [ ] Modüle ait testler tamamlandı.
- [ ] DİR risk analizleri hazırlandı.
- [ ] GitHub Pull Request incelemesi tamamlandı.

## 6. Görev Tamamlandığında

Kübra, kendi yapay zekâ asistanıyla birlikte:

1. Listeleme, arama, filtreleme ve detay özelliklerini test eder.
2. Geliştirdiği API endpoint'lerini ve desteklenen sorgu parametrelerini belgeler.
3. Yağız'ın ilan modeliyle uyumluluğu kontrol eder.
4. Leyla'ya favori ve iletişim entegrasyonu için gerekli bilgileri iletir.
5. DİR risk değerlendirmelerini tamamlar.
6. GitHub Issue ve Pull Request bağlantılarını kaydeder.
7. `docs/AI_REHBER.md` dosyasındaki **Yapılan Çalışmalar** bölümüne kendi geliştirme kaydını ekler.
8. Önceki ekip üyelerinin kayıtlarını silmez.
9. Kendi görev dosyasına tamamlanan işlemleri, test sonuçlarını ve varsa bilinen eksikleri ekler.

**Teslim koşulu:** Kullanıcılar yayınlanmış gayrimenkul ilanlarını görüntüleyebilmeli, arayabilmeli, filtreleyebilmeli, sıralayabilmeli ve seçtikleri ilanın detaylarını sorunsuz inceleyebilmelidir.
