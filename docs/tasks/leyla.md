# LEYLA — İLETİŞİM, FAVORİLER VE ENTEGRASYON

**Sorumlu:** Leyla  
**Görev:** İletişim, Favoriler ve Entegrasyon  
**Önerilen branch:** `feature/favorites-contact`  
**Çalışma alanı:** `backend/` ve `frontend/` içindeki favori, iletişim ve entegrasyonla ilgili dosyalar

## 1. Görevin Tanımı

Emlak360 platformunda kullanıcıların beğendikleri gayrimenkul ilanlarını favorilerine ekleyebilmesini, favori ilanlarını yönetebilmesini ve ilan sahipleriyle platform üzerinden iletişim kurabilmesini sağlayan sistemi geliştirmek.

Ayrıca ekip üyelerinin geliştirdiği modüllerin birbirleriyle doğru şekilde bağlantı kurmasını sağlamak ve entegrasyon çalışmalarını koordine etmek.

Leyla, favori ve iletişim özelliklerinin hem backend hem frontend geliştirmesinden sorumludur. Diğer modüllerin geliştirilmesi ilgili ekip üyelerine aittir.

## 2. Yapılacak İşler

### A. Favoriler veritabanı modeli

- [ ] Prisma üzerinde `Favorite` modeli oluşturmak.
- [ ] Favori kayıtlarını `User` ve `Listing` modelleriyle ilişkilendirmek.
- [ ] Aynı kullanıcının aynı ilanı birden fazla kez favorilerine eklemesini engellemek.
- [ ] Favori kayıtlarının oluşturulma tarihini saklamak.
- [ ] Kullanıcı veya ilan silindiğinde ilişkili favorilerin nasıl yönetileceğini belirlemek.
- [ ] Gerekli Prisma migration işlemlerini gerçekleştirmek.

### B. Favorilere ilan ekleme ve çıkarma

- [ ] `POST /api/favorites` endpoint'ini geliştirmek.
- [ ] `DELETE /api/favorites/:listingId` endpoint'ini geliştirmek.
- [ ] Yalnızca giriş yapmış kullanıcıların favori işlemi yapmasını sağlamak.
- [ ] Favorilere eklenen ilanı kullanıcı hesabıyla ilişkilendirmek.
- [ ] Favoriden çıkarma işlemini gerçekleştirmek.
- [ ] Aynı ilan için tekrarlanan favori kayıtlarını engellemek.
- [ ] Başka kullanıcının favorilerini değiştirmeyi engellemek.

### C. Favorilerim sayfası

- [ ] `GET /api/favorites` endpoint'ini geliştirmek.
- [ ] Kullanıcının favori ilanlarını getirmek.
- [ ] Favorilerim sayfasını oluşturmak.
- [ ] Favori ilanları kartlar hâlinde göstermek.
- [ ] Favori ilanından detay sayfasına yönlendirmek.
- [ ] Favoriden çıkarma butonu eklemek.
- [ ] Favori ilan bulunmadığında uygun bilgilendirme göstermek.

### D. İlan detayında favori butonu

- [ ] Kübra'nın geliştirdiği ilan detay sayfasına favori bileşeni eklemek.
- [ ] İlanın favorilerde olup olmadığını göstermek.
- [ ] Favoriye ekleme ve çıkarma işlemlerini arayüzden gerçekleştirmek.
- [ ] İşlem sonrasında buton durumunu güncellemek.
- [ ] Giriş yapmamış kullanıcıya giriş yapması gerektiğini bildirmek.

**Not:** İlan detay sayfasının tamamını yeniden geliştirme. Yalnızca favori özelliğini mevcut sayfaya entegre et.

### E. İlan sahibine iletişim isteği gönderme

- [ ] Prisma üzerinde `ContactRequest` modeli oluşturmak.
- [ ] İletişim isteğini gönderen kullanıcıyı belirlemek.
- [ ] İsteğin gönderildiği ilanı ilişkilendirmek.
- [ ] İlan sahibinin isteği alabilmesini sağlamak.
- [ ] İletişim mesajı için gerekli alanları belirlemek.
- [ ] `POST /api/contact-requests` endpoint'ini geliştirmek.
- [ ] Mesaj içeriğini doğrulamak.
- [ ] Boş veya geçersiz mesajları reddetmek.
- [ ] Kullanıcıların kendi ilanlarına iletişim isteği göndermesini engellemek.
- [ ] Tekrarlanan veya aşırı iletişim isteklerine karşı kontroller uygulamak.

### F. Gelen ve gönderilen iletişim istekleri

- [ ] `GET /api/contact-requests/received` endpoint'ini geliştirmek.
- [ ] `GET /api/contact-requests/sent` endpoint'ini geliştirmek.
- [ ] Gelen iletişim istekleri sayfasını oluşturmak.
- [ ] Gönderilen iletişim istekleri sayfasını oluşturmak.
- [ ] Mesaj içeriğini, ilgili ilanı ve gerekli kullanıcı bilgilerini göstermek.
- [ ] Kullanıcıların yalnızca kendileriyle ilgili iletişim kayıtlarını görüntülemesini sağlamak.
- [ ] Boş mesaj listeleri için uygun bilgilendirme göstermek.

### G. İletişim formu

- [ ] Kübra'nın ilan detay sayfasına iletişim formu eklemek.
- [ ] Mesaj alanı ve gönderme butonu hazırlamak.
- [ ] Formu iletişim API'sine bağlamak.
- [ ] Başarılı gönderim sonrasında kullanıcıya bildirim göstermek.
- [ ] Hatalı veya başarısız işlemleri kullanıcıya açıklamak.
- [ ] Mobil uyumlu tasarım sağlamak.

### H. Modüller arası entegrasyon

- [ ] Favori ve iletişim özelliklerini mevcut kullanıcı oturum sistemine bağlamak.
- [ ] Yağız'ın ilan modeliyle ilişkileri doğrulamak.
- [ ] Kübra'nın listeleme ve detay sayfalarına gerekli bileşenleri eklemek.
- [ ] Nurşen'in ortak frontend tasarımını kullanmak.
- [ ] Gerekli sayfa yönlendirmelerini ekip ile koordine etmek.
- [ ] Backend API adresleri ve veri formatlarının uyumunu kontrol etmek.
- [ ] Modüller birleştirildiğinde temel kullanıcı akışlarını test etmek.
- [ ] Entegrasyon sırasında tespit edilen sorunları ilgili ekip üyelerine bildirmek.

## 3. Görev Nasıl Yapılacak?

### Adım 1 — Mevcut projeyi incele

Öncelikle `docs/AI_REHBER.md` dosyasını ve kendi görev dosyanı oku.

Zemzem'in kullanıcı ve oturum sistemini incele.

Yağız'ın ilan modelini ve Kübra'nın ilan detay sayfasını kontrol et.

**Yeni bir kullanıcı sistemi veya ikinci bir ilan modeli oluşturma.**

### Adım 2 — Veritabanı ilişkilerini oluştur

Prisma üzerinde `Favorite` ve `ContactRequest` modellerini tasarla.

Favori kaydı bir kullanıcı ve bir ilanla ilişkilendirilmelidir.

İletişim isteği ise gönderen kullanıcı, ilgili ilan ve ilan sahibiyle ilişkilendirilebilmelidir.

Mevcut `User` ve `Listing` modellerini koru. Gerekli ilişkileri Zemzem ve Yağız ile koordine ederek ekle.

### Adım 3 — Favori API'lerini geliştir

Önerilen endpoint'ler:

| Metot | Endpoint | İşlev |
|---|---|---|
| GET | `/api/favorites` | Kullanıcının favorilerini listeleme |
| POST | `/api/favorites` | İlanı favorilere ekleme |
| DELETE | `/api/favorites/:listingId` | İlanı favorilerden çıkarma |

API işlemlerinde kullanıcı kimliğini giriş yapılan oturumdan al.

İstemciden gönderilen kullanıcı kimliğine güvenme.

### Adım 4 — Favori arayüzünü oluştur

Nurşen'in ortak tasarımını kullanarak Favorilerim sayfasını geliştir.

Kübra'nın ilan kartı ve detay bileşenleriyle uyumlu çalış.

Favori butonunu ilan detay sayfasına entegre et.

Kübra ile anlaşılırsa listeleme kartlarında da aynı favori bileşeni kullanılabilir.

### Adım 5 — İletişim API'lerini geliştir

Önerilen endpoint'ler:

| Metot | Endpoint | İşlev |
|---|---|---|
| POST | `/api/contact-requests` | İletişim isteği gönderme |
| GET | `/api/contact-requests/received` | Gelen iletişim istekleri |
| GET | `/api/contact-requests/sent` | Gönderilen iletişim istekleri |

Bu endpoint'ler geliştirme öncesinde ilgili ekip üyeleriyle kesinleştirilmelidir.

İletişim isteği gönderilirken ilanın gerçekten mevcut olduğu ve mesajın doğru ilan sahibine yönlendirildiği kontrol edilmelidir.

### Adım 6 — İletişim arayüzünü geliştir

Kübra'nın ilan detay sayfasına iletişim formunu ekle.

Kullanıcıların kendi gelen ve gönderilen iletişim isteklerini görebileceği ekranları oluştur.

İlan sahibinin telefon numarası veya e-posta adresi gibi özel bilgilerini, gerekli izin ve açık tasarım kararı olmadan herkese açık gösterme.

### Adım 7 — Entegrasyonu koordine et

Ekip üyelerinin geliştirdiği modülleri kontrol et.

Özellikle şu bağlantıları doğrula:

- Kullanıcı oturumu → Favori işlemleri
- Kullanıcı oturumu → İletişim işlemleri
- İlan modeli → Favoriler
- İlan modeli → İletişim istekleri
- İlan detay sayfası → Favori butonu
- İlan detay sayfası → İletişim formu
- Ortak navigasyon → Favoriler ve iletişim sayfaları

Entegrasyon sırasında başka bir ekip üyesinin kodunda değişiklik gerekiyorsa önce ilgili kişiyle koordinasyon kur.

### Adım 8 — Testleri gerçekleştir

Aşağıdaki senaryoları kontrol et:

**Favoriler:**

- Giriş yapmadan favori ekleme denemesi
- İlanı favorilere ekleme
- Aynı ilanı tekrar favorilere ekleme
- Favoriler listesini görüntüleme
- Favoriden çıkarma
- Başka kullanıcının favorilerine erişme denemesi
- Silinmiş veya bulunamayan ilan için favori işlemi

**İletişim:**

- Giriş yapmadan iletişim isteği gönderme
- Geçerli mesaj gönderme
- Boş mesaj gönderme
- Kendi ilanına mesaj gönderme denemesi
- Gelen iletişim isteklerini görüntüleme
- Gönderilen iletişim isteklerini görüntüleme
- Başka kullanıcının mesajlarına erişme denemesi
- Aşırı veya tekrarlanan mesaj gönderme

**Entegrasyon:**

- Giriş yapan kullanıcının ilanı favorilemesi
- Favori ilanın detayına geçiş
- İlan sahibine mesaj gönderilmesi
- İlan sahibinin gelen isteği görüntülemesi
- Oturum kapatıldıktan sonra korumalı işlemlerin engellenmesi

### Adım 9 — DİR risk analizini yap

Favori ve iletişim modülleri için DREAD risk değerlendirmesi hazırla.

Öncelikli riskler:

**Risk 1 — Başka kullanıcıların favori kayıtlarına yetkisiz erişim**

Bir kullanıcının başka bir kullanıcının favorilerini görüntülemesi veya değiştirmesi.

**Risk 2 — İletişim sisteminin spam veya kötüye kullanım amacıyla kullanılması**

Aşırı iletişim isteği gönderilmesi veya mesaj sisteminin kötüye kullanılması.

Her risk için beş DREAD kriterini puanla, ortalama DİR skorunu hesapla ve önlemleri `docs/dir/` altında belgele.

### Adım 10 — GitHub'a teslim et

Geliştirmeleri kendi feature branch'inde gerçekleştir.

API ve frontend testlerini tamamla.

Entegrasyon sırasında tespit edilen hataları ilgili kişilere bildir.

Pull Request oluştur ve kod incelemesinden sonra birleştirme sürecini tamamla.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Birlikte yapılacak çalışma |
|---|---|
| **Zemzem** | Oturum yönetimi, kullanıcı kimliği, Prisma ilişkileri ve yetkilendirme |
| **Nurşen** | Favoriler ve iletişim ekranlarının ortak tasarıma uyumu |
| **Yağız** | İlan modeli, ilan sahibi bilgileri ve ilan silindiğinde ilişkili kayıtların yönetimi |
| **Kübra** | İlan detay sayfasına favori ve iletişim bileşenlerinin eklenmesi |
| **Asmin** | Favori, iletişim, güvenlik ve entegrasyon testleri |

### Görev sınırları

Leyla'nın sorumluluğu favoriler, iletişim ve entegrasyon koordinasyonudur.

- **Zemzem:** Kullanıcı yönetimi ve oturum altyapısı
- **Nurşen:** Genel arayüz ve temel sayfalar
- **Yağız:** İlan oluşturma, düzenleme ve silme
- **Kübra:** İlan listeleme, arama, filtreleme ve detay
- **Asmin:** Yönetici paneli ve kalite testleri

**Leyla diğer modülleri baştan geliştirmez. Modüllerin birlikte çalışmasını sağlar ve gerekli değişiklikleri sorumlu ekip üyeleriyle koordine eder.**

## 5. Görevin Kabul Kriterleri

- [ ] Favorite modeli ve ilişkileri oluşturuldu.
- [ ] Kullanıcı ilanları favorilerine ekleyebiliyor.
- [ ] Kullanıcı ilanları favorilerinden çıkarabiliyor.
- [ ] Aynı ilan tekrar tekrar favorilere eklenemiyor.
- [ ] Favorilerim sayfası çalışıyor.
- [ ] Kullanıcı yalnızca kendi favorilerine erişebiliyor.
- [ ] İlan detayında favori butonu çalışıyor.
- [ ] ContactRequest modeli ve ilişkileri oluşturuldu.
- [ ] Kullanıcı ilan sahibine iletişim isteği gönderebiliyor.
- [ ] Gelen iletişim istekleri görüntülenebiliyor.
- [ ] Gönderilen iletişim istekleri görüntülenebiliyor.
- [ ] Başka kullanıcıların iletişim kayıtlarına erişilemiyor.
- [ ] Spam ve kötüye kullanım kontrolleri uygulandı.
- [ ] Favori ve iletişim ekranları mobil uyumlu.
- [ ] Mevcut kullanıcı ve ilan modelleriyle entegrasyon tamamlandı.
- [ ] Temel entegrasyon senaryoları test edildi.
- [ ] İlgili DİR risk analizleri hazırlandı.
- [ ] GitHub Pull Request incelemesi tamamlandı.

## 6. Görev Tamamlandığında

Leyla, kendi yapay zekâ asistanıyla birlikte:

1. Favori ve iletişim özelliklerinin testlerini tamamlar.
2. Geliştirdiği Prisma modellerini ve API endpoint'lerini belgeler.
3. Entegrasyon sırasında yapılan değişiklikleri ilgili ekip üyeleriyle paylaşır.
4. Başarılı ve başarısız entegrasyon senaryolarını kaydeder.
5. DİR risk değerlendirmelerini tamamlar.
6. GitHub Issue ve Pull Request bağlantılarını ekler.
7. `docs/AI_REHBER.md` içindeki **Yapılan Çalışmalar** bölümüne kendi geliştirme kaydını ekler.
8. Önceki ekip üyelerinin kayıtlarını silmez.
9. Kendi görev dosyasına tamamlanan işleri, test sonuçlarını ve bilinen eksikleri ekler.
10. Entegrasyonda çözülmemiş sorunları ilgili ekip üyelerine bildirir.

**Teslim koşulu:** Kullanıcılar ilanları favorilerine ekleyebilmeli, favorilerini yönetebilmeli ve ilan sahiplerine iletişim isteği gönderebilmelidir. Favori ve iletişim modülleri mevcut kullanıcı, ilan ve frontend altyapısıyla uyumlu çalışmalıdır.
