# YAĞIZ — İLAN OLUŞTURMA VE YÖNETİMİ

**Sorumlu:** Yağız  
**Görev:** İlan Oluşturma ve Yönetimi  
**Önerilen branch:** `feature/listing-management`  
**Çalışma alanı:** `backend/` ve `frontend/` içindeki ilan yönetimiyle ilgili dosyalar

## 1. Görevin Tanımı

Emlak360 platformunda giriş yapmış kullanıcıların gayrimenkul ilanı oluşturmasını, mevcut ilanlarını düzenlemesini, silmesini ve kendi ilanlarını yönetmesini sağlayan sistemi geliştirmek.

Yağız, ilanların veritabanında güvenli ve düzenli şekilde saklanmasından ve ilan yönetimi işlemlerinin frontend ile backend arasında doğru çalışmasından sorumludur.

## 2. Yapılacak İşler

### A. İlan veritabanı modeli

- [ ] Prisma üzerinde `Listing` (İlan) modeli oluşturmak.
- [ ] İlanları `User` modeliyle ilişkilendirmek.
- [ ] İlan için gerekli alanları belirlemek:
  - Başlık
  - Açıklama
  - Fiyat
  - İlan türü (satılık/kiralık)
  - Gayrimenkul türü (daire, villa, arsa vb.)
  - İl ve ilçe
  - Adres veya konum açıklaması
  - Metrekare
  - Oda sayısı (uygun gayrimenkul türlerinde)
  - Görsel bilgileri
  - İlan durumu
  - Oluşturulma ve güncellenme tarihi
- [ ] Zorunlu ve isteğe bağlı alanları belirlemek.
- [ ] Prisma migration oluşturmak ve test etmek.
- [ ] Kübra ve Leyla'nın kullanacağı model ilişkilerini koordine etmek.

### B. İlan oluşturma

- [ ] `POST /api/listings` endpoint'ini geliştirmek.
- [ ] Yalnızca giriş yapmış kullanıcıların ilan oluşturmasını sağlamak.
- [ ] İlanı giriş yapan kullanıcının hesabıyla ilişkilendirmek.
- [ ] İlan bilgilerinin doğrulamasını Zod ile yapmak.
- [ ] Eksik veya geçersiz bilgileri reddetmek.
- [ ] İlan oluşturma formunu geliştirmek.
- [ ] Başarılı ve başarısız işlemler için kullanıcıya geri bildirim göstermek.

### C. İlan düzenleme

- [ ] `PATCH /api/listings/:id` endpoint'ini geliştirmek.
- [ ] Kullanıcının yalnızca kendi ilanını düzenlemesini sağlamak.
- [ ] Mevcut ilan bilgilerini düzenleme formuna getirmek.
- [ ] Değiştirilen bilgileri doğrulamak.
- [ ] Güncelleme sonrasında ilan bilgilerini veritabanına kaydetmek.
- [ ] Başka kullanıcıya ait ilanların değiştirilmesini engellemek.

### D. İlan silme

- [ ] `DELETE /api/listings/:id` endpoint'ini geliştirmek.
- [ ] Yalnızca ilan sahibinin silme işlemi yapmasını sağlamak.
- [ ] Silmeden önce kullanıcıdan onay almak.
- [ ] Silinen ilanla ilişkili verilerin nasıl yönetileceğini belirlemek.
- [ ] Silme işlemini test etmek.

### E. İlan görselleri

- [ ] İlanlara birden fazla görsel eklenebilmesini planlamak.
- [ ] Görsel yükleme ve saklama yöntemini ekip ile belirlemek.
- [ ] Dosya türü ve boyut kontrollerini uygulamak.
- [ ] Görselleri ilgili ilanla ilişkilendirmek.
- [ ] İlan düzenlenirken görsellerin güncellenmesini sağlamak.
- [ ] İlan silindiğinde görsellerin nasıl yönetileceğini belirlemek.

**Not:** Görsel saklama yöntemi henüz kesinleşmemiştir. Gereksiz veya ücretli bir servis doğrudan projeye eklenmemelidir.

### F. Kullanıcının kendi ilanlarını yönetmesi

- [ ] `GET /api/users/me/listings` endpoint'ini geliştirmek.
- [ ] Giriş yapan kullanıcının yalnızca kendi ilanlarını getirmek.
- [ ] **İlanlarım** sayfasını oluşturmak.
- [ ] Kullanıcının ilanlarını görüntüleyebilmesini sağlamak.
- [ ] Her ilan için düzenleme ve silme seçenekleri eklemek.
- [ ] İlan bulunmadığında uygun boş durum mesajı göstermek.

## 3. Görev Nasıl Yapılacak?

### Adım 1 — Mevcut backend'i incele

Öncelikle `docs/AI_REHBER.md` dosyasını ve mevcut backend kodlarını incele.

Zemzem'in geliştirdiği `User`, `Session`, `requireAuth` ve oturum sistemini kullan.

**Yeni bir kullanıcı kayıt veya giriş sistemi oluşturma.**

### Adım 2 — İlan modelini tasarla

Prisma üzerinde ilan modelini oluştur.

İlanın hangi kullanıcıya ait olduğunu gösteren `userId` ilişkisini tanımla.

İlan modelini kesinleştirmeden önce Kübra ve Leyla ile alanlar ve ilişkiler konusunda anlaş.

Mevcut Prisma modellerini silmeden migration oluştur.

### Adım 3 — İlan API'lerini geliştir

Öncelikle şu endpoint'leri hazırla:

| Metot | Endpoint | İşlev |
|---|---|---|
| POST | `/api/listings` | Yeni ilan oluşturma |
| PATCH | `/api/listings/:id` | İlan düzenleme |
| DELETE | `/api/listings/:id` | İlan silme |
| GET | `/api/users/me/listings` | Kullanıcının kendi ilanları |

Bu endpoint'ler önerilen API sözleşmesidir. Uygulamaya geçmeden önce Kübra ve diğer ilgili ekip üyeleriyle netleştirilmelidir.

İsteklerde kullanıcı kimliğini istemciden gelen `userId` değerine güvenerek belirleme. Kimliği doğrulanmış oturumdan al.

### Adım 4 — Yetki ve veri doğrulamasını uygula

- İlan oluşturmak için giriş zorunlu olmalı.
- İlanı yalnızca sahibi düzenleyebilmeli.
- İlanı yalnızca sahibi silebilmeli.
- Fiyat ve metrekare gibi sayısal değerler doğrulanmalı.
- Zorunlu alanlar boş bırakılamamalı.
- Hatalı ilan ID'leri uygun şekilde ele alınmalı.
- Kullanıcı, API isteğini değiştirerek başka birinin ilanını yönetememeli.

### Adım 5 — İlan yönetimi ekranlarını oluştur

Nurşen'in hazırladığı ortak frontend altyapısını kullanarak:

- Yeni İlan Oluştur
- İlan Düzenle
- İlanlarım

sayfalarını geliştir.

Form alanlarını backend API'lerine bağla. İşlem sırasında yükleniyor, başarı ve hata durumlarını göster.

**Genel ilan listeleme, arama, filtreleme ve ilan detay sayfasını geliştirme. Bunlar Kübra'nın sorumluluğundadır.**

### Adım 6 — Görsel yönetimini tamamla

İlan görsellerinin nasıl yükleneceğini ve saklanacağını belirle.

Görsellerin doğru ilana bağlandığını, geçersiz dosyaların reddedildiğini ve ilan düzenleme sırasında güncellenebildiğini test et.

### Adım 7 — Testleri gerçekleştir

Şu senaryoları test et:

- Giriş yapmadan ilan oluşturma denemesi
- Geçerli bilgilerle ilan oluşturma
- Eksik veya hatalı bilgilerle ilan oluşturma
- Kendi ilanını düzenleme
- Başka kullanıcının ilanını düzenleme denemesi
- Kendi ilanını silme
- Başka kullanıcının ilanını silme denemesi
- Kullanıcının yalnızca kendi ilanlarını görmesi
- Geçersiz ilan ID'si
- Görsel yükleme ve güncelleme

### Adım 8 — DİR risk analizini yap

İlan yönetimiyle ilgili riskleri DREAD kriterleriyle değerlendir.

Öncelikli riskler:

**Risk 1:** Başka kullanıcıya ait ilanın yetkisiz değiştirilmesi veya silinmesi.

**Risk 2:** Sahte, yanıltıcı veya geçersiz ilan bilgilerinin sisteme kaydedilmesi.

Her risk için beş kriteri puanla, ortalama DİR skorunu hesapla ve alınan önlemleri `docs/dir/` altında belgele.

### Adım 9 — GitHub'a teslim et

Geliştirmeleri kendi feature branch'inde yap.

Testlerden sonra Pull Request oluştur.

Prisma modelinde veya ortak API yapısında değişiklik varsa ilgili ekip üyelerine bildir.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Birlikte yapılacak çalışma |
|---|---|
| **Zemzem** | Oturum kontrolü, kullanıcı kimliği, Prisma ilişkileri ve yetkilendirme |
| **Nurşen** | İlan oluşturma ve düzenleme ekranlarının ortak tasarımla uyumu |
| **Kübra** | İlan modeli, görseller, ilan durumları ve listeleme için gerekli alanların belirlenmesi |
| **Asmin** | İlan yönetimi testleri, güvenlik kontrolleri ve yönetici işlemleri |
| **Leyla** | İlan-favori ilişkisi, ilan sahibine iletişim ve silinen ilanların ilişkili kayıtları |

### Görev sınırları

Yağız yalnızca ilan oluşturma ve yönetimi işlemlerini geliştirir.

- **Kübra:** Genel ilan listeleme, arama, filtreleme ve ilan detay
- **Leyla:** Favoriler ve iletişim işlemleri
- **Asmin:** Yönetici paneli ve kalite testleri
- **Nurşen:** Ortak arayüz ve temel sayfalar
- **Zemzem:** Kullanıcı yönetimi ve ortak yetkilendirme altyapısı

## 5. Görevin Kabul Kriterleri

- [ ] İlan modeli ve kullanıcı ilişkisi doğru oluşturuldu.
- [ ] Kullanıcı yeni ilan oluşturabiliyor.
- [ ] İlan bilgileri veritabanına kaydediliyor.
- [ ] Kullanıcı kendi ilanlarını görüntüleyebiliyor.
- [ ] Kullanıcı kendi ilanlarını düzenleyebiliyor.
- [ ] Kullanıcı kendi ilanlarını silebiliyor.
- [ ] Başka kullanıcıların ilanları değiştirilemiyor veya silinemiyor.
- [ ] İlan görselleri eklenebiliyor ve yönetilebiliyor.
- [ ] İlan oluşturma ve düzenleme formları çalışıyor.
- [ ] Hatalı ve eksik veriler uygun şekilde reddediliyor.
- [ ] İlan yönetimi testleri tamamlandı.
- [ ] İlgili DİR risk analizleri hazırlandı.
- [ ] Kübra ve Leyla'nın kullanacağı veri yapısı paylaşıldı.
- [ ] GitHub Pull Request incelemesi tamamlandı.

## 6. Görev Tamamlandığında

Yağız, kendi yapay zekâ asistanıyla birlikte:

1. Geliştirdiği ilan yönetimi özelliklerini test eder.
2. Prisma modelindeki değişiklikleri ve yeni API endpoint'lerini belgeler.
3. İlan oluşturma, düzenleme ve silme işlemlerinin nasıl kullanılacağını ilgili ekip üyelerine açıklar.
4. DİR risk analizlerini tamamlar.
5. GitHub Issue ve Pull Request bağlantılarını kaydeder.
6. `docs/AI_REHBER.md` içindeki **Yapılan Çalışmalar** bölümüne yeni kayıt ekler.
7. Daha önce yazılmış geliştirme kayıtlarını silmez.
8. Kübra ve Leyla'ya ilan modelinin son hâlini ve entegrasyon için gerekli bilgileri iletir.

**Teslim koşulu:** Kullanıcılar kendi ilanlarını güvenli şekilde oluşturabilmeli, düzenleyebilmeli ve silebilmelidir. İlan verileri, diğer modüllerin kullanabileceği tutarlı bir yapıda saklanmalıdır.
