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

- [ ] React tabanlı frontend projesini oluşturmak.
- [ ] Gerekli bağımlılıkları kurmak.
- [ ] Sayfalar arası yönlendirme sistemini hazırlamak.
- [ ] Ortak renk paleti, yazı tipleri ve tasarım kurallarını belirlemek.
- [ ] Header, navigasyon menüsü ve footer oluşturmak.
- [ ] Tekrar kullanılabilir buton, input, kart ve bildirim bileşenleri hazırlamak.
- [ ] Mobil, tablet ve masaüstü ekranlara uyumlu tasarım oluşturmak.
- [ ] Yükleniyor, boş veri ve hata durumları için ortak arayüz bileşenleri hazırlamak.

### B. Ana sayfa

- [ ] Emlak360 ana sayfasını tasarlamak.
- [ ] Kullanıcıların ilanlara ulaşabileceği belirgin bir yönlendirme alanı oluşturmak.
- [ ] İlan arama alanının görsel tasarımını hazırlamak.
- [ ] Öne çıkan veya son eklenen ilanların gösterileceği alanı tasarlamak.
- [ ] İlan kartları için Kübra ile ortak bileşen yapısını belirlemek.
- [ ] Ana sayfayı mobil uyumlu hâle getirmek.

**Not:** İlan arama algoritması, filtreleme ve ilan verilerinin yönetimi Kübra'nın sorumluluğundadır. Nurşen ana sayfanın tasarımını ve bu özelliklerin yerleşimini hazırlar.

### C. Kullanıcı kayıt ve giriş sayfaları

- [ ] Kullanıcı kayıt sayfasını oluşturmak.
- [ ] Kullanıcı giriş sayfasını oluşturmak.
- [ ] Form doğrulama ve hata mesajlarını hazırlamak.
- [ ] Kayıt formunu `POST /api/auth/register` endpoint'ine bağlamak.
- [ ] Giriş formunu `POST /api/auth/login` endpoint'ine bağlamak.
- [ ] Giriş sonrasında kullanıcı bilgilerini almak.
- [ ] Kullanıcı çıkış işlemini arayüze eklemek.
- [ ] Başarılı ve başarısız işlemler için bildirimler göstermek.

### D. Profil ve hesap sayfası

- [ ] Kullanıcı profil sayfasını oluşturmak.
- [ ] `GET /api/users/profile` ile profil bilgilerini görüntülemek.
- [ ] `PATCH /api/users/profile` ile profil adı güncelleme işlemini bağlamak.
- [ ] Şifre değiştirme formu hazırlamak.
- [ ] `PATCH /api/users/password` endpoint'ini kullanmak.
- [ ] Şifre değiştirildiğinde kullanıcının tekrar giriş yapmasını sağlamak.
- [ ] Giriş yapmamış kullanıcıları uygun şekilde giriş sayfasına yönlendirmek.

### E. Ortak sayfa ve navigasyon düzeni

- [ ] Kullanıcıların ilan listeleme sayfasına ulaşabileceği menü bağlantısını eklemek.
- [ ] İlan oluşturma sayfasına yönlendirme eklemek.
- [ ] Favoriler sayfasına yönlendirme eklemek.
- [ ] Kullanıcı profili bağlantısını eklemek.
- [ ] ADMIN rolündeki kullanıcılar için yönetici paneli bağlantısını göstermek.
- [ ] Bilinmeyen adresler için 404 sayfası oluşturmak.
- [ ] Sayfalar arası geçişlerin düzgün çalışmasını sağlamak.

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

- [ ] React frontend projesi sorunsuz çalışıyor.
- [ ] Ortak tasarım ve navigasyon bileşenleri hazır.
- [ ] Ana sayfa tamamlandı.
- [ ] Kayıt ve giriş sayfaları backend ile çalışıyor.
- [ ] Kullanıcı çıkış işlemi arayüzden yapılabiliyor.
- [ ] Profil görüntüleme ve güncelleme çalışıyor.
- [ ] Şifre değiştirme arayüzü çalışıyor.
- [ ] Mobil, tablet ve masaüstü uyumluluğu kontrol edildi.
- [ ] Diğer ekip üyeleri ortak frontend bileşenlerini kullanabiliyor.
- [ ] Temel arayüz testleri gerçekleştirildi.
- [ ] Modüle ait DİR risk değerlendirmesi hazırlandı.
- [ ] Pull Request açıldı ve kod incelemesi tamamlandı.

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
