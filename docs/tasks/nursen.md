# NURŞEN — KULLANICI ARAYÜZÜ VE TEMEL SAYFALAR

**Sorumlu:** Nurşen  
**Görev:** Kullanıcı Arayüzü ve Temel Sayfalar  
**Önerilen branch:** `feature/frontend-pages`  
**Çalışma alanı:** `frontend/`

## 1. Görevin Tanımı

Emlak360 platformunun genel kullanıcı arayüzünü, ortak tasarım yapısını ve temel sayfalarını geliştirmek.

Amaç; modern, anlaşılır, mobil uyumlu ve kullanımı kolay bir emlak platformu oluşturmaktır.

Nurşen, diğer ekip üyelerinin geliştireceği ilan, favori, iletişim ve yönetici özelliklerinin ortak arayüzle uyumlu çalışabilmesi için temel frontend altyapısını hazırlayacaktır.

## 2. Yapılacak İşler

### A. Frontend kurulumu ve ortak tasarım

- [x] React tabanlı frontend projesini oluşturmak.
- [x] Gerekli bağımlılıkları kurmak.
- [x] Sayfalar arası yönlendirme sistemini hazırlamak.
- [x] Ortak renk paleti, yazı tipleri ve tasarım kurallarını belirlemek.
- [x] Header, navigasyon menüsü ve footer oluşturmak.
- [x] Tekrar kullanılabilir buton, input, kart ve bildirim bileşenleri hazırlamak.
- [x] Mobil, tablet ve masaüstü ekranlara uyumlu tasarım oluşturmak.
- [x] Yükleniyor, boş veri ve hata durumları için ortak arayüz bileşenleri hazırlamak.

### B. Ana sayfa

- [x] Emlak360 ana sayfasını tasarlamak.
- [x] Kullanıcıların ilanlara ulaşabileceği belirgin bir yönlendirme alanı oluşturmak.
- [x] İlan arama alanının görsel tasarımını hazırlamak.
- [x] Öne çıkan veya son eklenen ilanların gösterileceği alanı tasarlamak.
- [ ] İlan kartları için Kübra ile ortak bileşen yapısını belirlemek.
- [x] Ana sayfayı mobil uyumlu hâle getirmek.

**Not:** İlan arama algoritması, filtreleme ve ilan verilerinin yönetimi Kübra'nın sorumluluğundadır. Nurşen ana sayfanın tasarımını ve bu özelliklerin yerleşimini hazırlar.

### C. Kullanıcı kayıt ve giriş sayfaları

- [x] Kullanıcı kayıt sayfasını oluşturmak.
- [x] Kullanıcı giriş sayfasını oluşturmak.
- [x] Form doğrulama ve hata mesajlarını hazırlamak.
- [x] Kayıt formunu `POST /api/auth/register` endpoint'ine bağlamak.
- [x] Giriş formunu `POST /api/auth/login` endpoint'ine bağlamak.
- [x] Giriş sonrasında kullanıcı bilgilerini almak.
- [x] Kullanıcı çıkış işlemini arayüze eklemek.
- [x] Başarılı ve başarısız işlemler için bildirimler göstermek.

### D. Profil ve hesap sayfası

- [x] Kullanıcı profil sayfasını oluşturmak.
- [x] `GET /api/users/profile` ile profil bilgilerini görüntülemek.
- [x] `PATCH /api/users/profile` ile profil adı güncelleme işlemini bağlamak.
- [x] Şifre değiştirme formu hazırlamak.
- [x] `PATCH /api/users/password` endpoint'ini kullanmak.
- [x] Şifre değiştirildiğinde kullanıcının tekrar giriş yapmasını sağlamak.
- [x] Giriş yapmamış kullanıcıları uygun şekilde giriş sayfasına yönlendirmek.

### E. Ortak sayfa ve navigasyon düzeni

- [x] Kullanıcıların ilan listeleme sayfasına ulaşabileceği menü bağlantısını eklemek.
- [x] İlan oluşturma sayfasına yönlendirme eklemek.
- [x] Favoriler sayfasına yönlendirme eklemek.
- [x] Kullanıcı profili bağlantısını eklemek.
- [x] ADMIN rolündeki kullanıcılar için yönetici paneli bağlantısını göstermek.
- [x] Bilinmeyen adresler için 404 sayfası oluşturmak.
- [x] Sayfalar arası geçişlerin düzgün çalışmasını sağlamak.

**Önemli:** Bir sayfanın menü bağlantısını hazırlamak, o sayfanın bütün işlevlerini geliştirmek anlamına gelmez. Diğer ekip üyeleri kendi sayfalarının içeriğini hazırlayacaktır.

## 3. Görev Nasıl Yapılacak?

### Adım 1 — Frontend altyapısını kur

`frontend/` klasörünün mevcut durumunu kontrol et.

React projesini kur ve geliştirme sunucusunu çalıştır. Projede gereksiz bağımlılıklar kullanma.

Frontend'in klasör yapısını, diğer ekip üyelerinin kendi sayfalarını rahatça ekleyebileceği şekilde düzenle.

### Adım 2 — Ortak tasarım sistemini oluştur

Önce Emlak360'ın genel görünümünü belirle.

Header, footer, navigasyon, butonlar, form alanları ve ortak sayfa düzenini hazırla.

Böylece diğer ekip üyeleri kendi sayfalarını sıfırdan tasarlamak yerine ortak bileşenleri kullanabilir.

### Adım 3 — Temel sayfaları geliştir

Ana sayfa, kayıt, giriş ve profil sayfalarını oluştur.

Önce sayfaların tasarımını ve kullanıcı etkileşimlerini hazırla. Ardından mevcut backend API'lerine bağla.

### Adım 4 — Kullanıcı oturumunu frontend'e entegre et

Backend'deki mevcut kullanıcı yönetimi API'lerini kullan.

Özellikle:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/users/profile`
- `PATCH /api/users/profile`
- `PATCH /api/users/password`

Oturum gerektiren isteklerde çerezlerin gönderilmesini sağla.

Frontend ve backend farklı portlarda çalışıyorsa CORS ve cookie yapılandırması için Zemzem ile koordinasyon kur.

**Yeni bir kullanıcı giriş sistemi veya ayrı bir kimlik doğrulama backend'i oluşturma.**

### Adım 5 — Diğer modüller için entegrasyon alanlarını hazırla

Yağız, Kübra, Asmin ve Leyla'nın kendi ekranlarını ekleyebileceği ortak navigasyon ve sayfa düzenini hazırla.

Sayfaların içeriklerini onların yerine geliştirme.

Ortak bileşenlerin kullanımını ilgili ekip üyelerine açıkla.

### Adım 6 — Test et

Şu senaryoları kontrol et:

- Kayıt ve giriş formları çalışıyor mu?
- Hatalı bilgilerde anlaşılır uyarı gösteriliyor mu?
- Kullanıcı giriş yaptıktan sonra oturum korunuyor mu?
- Çıkış yapıldığında kullanıcı arayüzü güncelleniyor mu?
- Profil bilgileri görüntülenip güncellenebiliyor mu?
- Şifre değişikliği sonrası yeniden giriş isteniyor mu?
- Mobil görünümde taşma veya bozuk yerleşim var mı?
- Menü bağlantıları doğru sayfalara yönlendiriyor mu?

### Adım 7 — DİR risklerini değerlendir

Kendi modülün için arayüz kaynaklı riskleri belirle.

Örneğin:

- Hatalı form doğrulaması
- Oturum durumunun arayüzde yanlış gösterilmesi
- Kullanıcıya hatalı veya eksik bilgi sunulması
- Mobil uyumsuzluk nedeniyle temel işlemlerin kullanılamaması

Riskleri DREAD kriterleriyle gerekçelendirerek puanla ve `docs/dir/` klasörüne ekle.

### Adım 8 — GitHub'a teslim et

Kendi feature branch'inde çalış.

Değişiklikleri test ettikten sonra GitHub'a gönder ve Pull Request oluştur.

Ortak dosyalarda değişiklik yapıldıysa diğer ekip üyelerine bildir.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Birlikte yapılacak çalışma |
|---|---|
| **Zemzem** | Kullanıcı API'lerinin bağlanması, oturum ve CORS sorunlarının çözülmesi |
| **Yağız** | İlan oluşturma ve düzenleme sayfalarının ortak tasarımla uyumlu olması |
| **Kübra** | Ana sayfadaki ilan kartları, arama alanı ve ilan listeleme ekranlarının uyumu |
| **Asmin** | Yönetici panelinin ortak tasarım bileşenlerini kullanması ve arayüz testleri |
| **Leyla** | Favori butonları, iletişim alanları ve sayfalar arası entegrasyon |

Nurşen'in sorumluluğu ortak arayüz altyapısını sağlamaktır. Diğer ekip üyeleri kendi özelliklerinin işlevlerini geliştirir.

## 5. Görevin Kabul Kriterleri

- [x] React frontend projesi sorunsuz çalışıyor.
- [x] Ortak tasarım ve navigasyon bileşenleri hazır.
- [x] Ana sayfa tamamlandı.
- [ ] Kayıt ve giriş sayfaları backend ile uçtan uca çalışıyor.
- [x] Kullanıcı çıkış işlemi arayüzden yapılabiliyor.
- [ ] Profil görüntüleme ve güncelleme uçtan uca doğrulandı.
- [ ] Şifre değiştirme arayüzü uçtan uca doğrulandı.
- [x] Mobil, tablet ve masaüstü uyumluluğu kontrol edildi.
- [ ] Diğer ekip üyeleri ortak frontend bileşenlerini kullanabiliyor.
- [x] Temel arayüz testleri gerçekleştirildi.
- [x] Modüle ait DİR risk değerlendirmesi hazırlandı.
- [x] Pull Request açıldı.
- [ ] Kod incelemesi ve birleştirme tamamlandı.

## 6. Görev Tamamlandığında

Nurşen, kendi yapay zekâ asistanıyla birlikte:

1. Tamamladığı sayfaları ve bileşenleri kontrol eder.
2. Diğer ekip üyelerinin kullanabileceği ortak bileşenleri açıklar.
3. Frontend kurulum ve çalıştırma komutlarını `docs/AI_REHBER.md` dosyasına ekler.
4. Yapılan testleri ve DİR risk analizini belgeler.
5. `docs/AI_REHBER.md` içindeki **Yapılan Çalışmalar** bölümüne kendi geliştirme kaydını ekler.
6. Önceki ekip üyelerinin kayıtlarını silmez.
7. GitHub Issue ve Pull Request bağlantılarını paylaşır.
8. Diğer ekip üyelerine kendi modüllerini frontend'e nasıl ekleyeceklerini bildirir.

**Teslim koşulu:** Emlak360'ın temel kullanıcı arayüzü çalışır durumda olmalı ve diğer ekip üyeleri kendi modüllerini bu arayüze sorunsuz şekilde entegre edebilmelidir.
