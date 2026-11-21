# ZEMZEM — BACKEND VE KULLANICI YÖNETİMİ

**Sorumlu:** Zemzem  
**Görev:** Backend ve Kullanıcı Yönetimi  
**Branch:** `feature/auth-backend`

## 1. Görevin Tanımı

Emlak360'ın backend altyapısını ve kullanıcı yönetimi sistemini geliştirmek. Diğer ekip üyelerinin hazırlayacağı modüllerin mevcut kullanıcı, oturum ve yetkilendirme sistemiyle uyumlu çalışmasını sağlamak.

## 2. Yapılacak İşler

### A. Backend ve veritabanı altyapısı

- [x] Express sunucusunu kurmak.
- [x] PostgreSQL bağlantısını hazırlamak.
- [x] Prisma ORM yapılandırmasını tamamlamak.
- [x] Kullanıcı ve oturum modellerini oluşturmak.
- [x] Veritabanı migration işlemlerini gerçekleştirmek.

### B. Kullanıcı yönetimi

- [x] Kullanıcı kayıt sistemi.
- [x] Kullanıcı giriş ve çıkış sistemi.
- [x] Cookie tabanlı oturum yönetimi.
- [x] USER ve ADMIN rol kontrolü.
- [x] Profil bilgilerini görüntüleme.
- [x] Profil adını güncelleme.
- [x] Şifre değiştirme.
- [x] Şifre değişikliğinde mevcut oturumları iptal etme.
- [x] Yönetici için kullanıcı listeleme.

### C. Tamamlanacak işler

- [ ] Kimlik doğrulama ve yetkilendirme fonksiyonlarını diğer modüllerin kullanabileceği şekilde düzenlemek.
- [ ] Frontend ile backend arasındaki CORS ve cookie bağlantısını hazırlamak.
- [ ] Kullanıcı işlemleri için otomatik API testleri yazmak.
- [ ] Giriş denemelerine hız sınırlaması eklemek.
- [ ] CSRF korumasını uygulamak.
- [ ] npm bağımlılıklarının güvenlik uyarılarını incelemek.
- [ ] Backend'e ait DİR/DREAD risk değerlendirmelerini hazırlamak.
- [ ] Kodları GitHub'a gönderip Pull Request oluşturmak.

## 3. Görev Nasıl Yapılacak?

1. **Mevcut kodları koru:** Öncelikle `backend/src/app.js`, `backend/src/server.js` ve `backend/prisma/schema.prisma` dosyalarını incele. Tamamlanmış kullanıcı işlemlerini yeniden geliştirme.
2. **Ortak yetkilendirmeyi hazırla:** Diğer ekip üyelerinin API'lerinde kullanabileceği `requireAuth` ve `requireAdmin` middleware'lerini düzenle. Döngüsel bağımlılık oluşturmayan sade bir yapı kullan.
3. **Frontend bağlantısını sağla:** Nurşen'in kullanacağı frontend adresine göre CORS yapılandırmasını yap. Cookie ile giriş, oturum kontrolü ve çıkış işlemlerini tarayıcı üzerinden test et.
4. **Güvenliği tamamla:** Giriş denemelerini sınırla, CSRF riskini ele al ve bağımlılık güvenlik uyarılarını incele. Gizli bilgilerin GitHub'a gönderilmediğinden emin ol.
5. **Testleri hazırla:** Başarılı ve hatalı kayıt, giriş, çıkış, profil güncelleme, şifre değiştirme ve yetkisiz erişim senaryolarını otomatik testlerle doğrula.
6. **DİR analizini yap:** Kullanıcı yönetimindeki yetkisiz erişim ve oturum güvenliği risklerini DREAD kriterleriyle puanla. Gerekçelerini ve alınan önlemleri `docs/dir/` altında belgele.
7. **GitHub'a aktar:** Değişiklikleri kendi branch'ine kaydet, testleri çalıştır, Pull Request aç ve inceleme sonrasında `main` ile birleştir.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Zemzem'in sağlayacağı destek |
|---|---|
| **Nurşen** | Kayıt, giriş, çıkış ve profil API'lerinin frontend'e bağlanması |
| **Yağız** | İlanların giriş yapan kullanıcıyla ilişkilendirilmesi ve sahiplik kontrolü |
| **Kübra** | İlan API'lerinde ortak yanıt ve hata yönetimi konusunda destek |
| **Asmin** | ADMIN yetkilendirmesi ve backend güvenlik testleri |
| **Leyla** | Favori ve iletişim işlemlerinde kullanıcı oturumu ve yetkilendirme desteği |

**Önemli:** İlan, favori, iletişim ve yönetici panelinin bütün özelliklerini Zemzem geliştirmeyecek. Her modülün sahibi kendi işini yapacak.

## 5. Görevin Kabul Kriterleri

- [ ] Kullanıcı kayıt, giriş, çıkış ve profil işlemleri çalışıyor.
- [ ] USER ve ADMIN yetkileri doğru uygulanıyor.
- [ ] Diğer modüller mevcut oturum altyapısını kullanabiliyor.
- [ ] Frontend ile kullanıcı işlemleri sorunsuz çalışıyor.
- [ ] Temel güvenlik kontrolleri ve otomatik testler tamamlandı.
- [ ] Backend DİR risk analizleri hazırlandı.
- [ ] Kodlar GitHub'a aktarıldı ve Pull Request incelemesi tamamlandı.

## 6. Görev Tamamlandığında

Görev sahibi, kendi yapay zekâ asistanıyla birlikte:

1. Tamamlanan işleri ve test sonuçlarını kontrol eder.
2. GitHub Issue ve Pull Request bağlantılarını ekler.
3. `docs/AI_REHBER.md` dosyasındaki **Yapılan Çalışmalar** bölümüne yeni bir kayıt ekler.
4. Önceki ekip üyelerinin kayıtlarını silmez.
5. Diğer ekip üyelerine gerekli API veya entegrasyon değişikliklerini bildirir.

**Teslim koşulu:** Backend ve kullanıcı yönetimi altyapısı diğer ekip üyelerinin modüllerinde kullanılabilir, test edilmiş ve GitHub üzerinden erişilebilir durumda olmalıdır.
