# EMLAK360 — ORTAK PROJE VE YAPAY ZEKÂ GELİŞTİRME REHBERİ

**Proje:** Emlak360  
**Ders:** Yazılım Kalite Standartları  
**Ekip:** 6 öğrenci  
**Proje yönetimi:** GitHub Projects — Kanban  
**GitHub:** https://github.com/zemzemertkn/emlak360  
**Son güncelleme:** 18 Kasım 2026

---

## 1. PROJENİN TANIMI VE AMACI

Emlak360, kullanıcıların gayrimenkul ilanlarını görüntüleyebildiği, arayabildiği, filtreleyebildiği, oluşturabildiği, yönetebildiği, favorilerine ekleyebildiği ve ilan sahipleriyle iletişim kurabildiği web tabanlı bir emlak platformudur.

### Temel özellikler

- Kullanıcı kayıt, giriş ve çıkış işlemleri
- Kullanıcı profili ve hesap yönetimi
- Gayrimenkul ilanı oluşturma, düzenleme ve silme
- İlan listeleme, arama ve filtreleme
- İlan detay sayfası
- Favorilere ilan ekleme ve çıkarma
- İlan sahibine iletişim isteği gönderme
- Gelen iletişim isteklerini görüntüleme
- Yönetici paneli
- Kullanıcı ve ilan denetimi

Bu özelliklerin tamamı projenin hedef kapsamıdır. Henüz geliştirilmemiş özellikler tamamlanmış kabul edilmemelidir.

### Projenin akademik amacı

Emlak360, Yazılım Kalite Standartları dersi kapsamında geliştirilmektedir.

Amaç yalnızca çalışan bir web uygulaması oluşturmak değildir. Aynı zamanda:

- Yazılım geliştirme sürecini planlamak ve takip etmek
- Görevleri ekip üyeleri arasında dağıtmak
- Kanban yöntemiyle ilerlemeyi yönetmek
- Kod kalitesini ve sürdürülebilirliği sağlamak
- Yazılım testleri gerçekleştirmek
- DİR/DREAD yöntemiyle risk analizi yapmak
- Teknik kararları ve geliştirme sürecini belgelemek
- Ekip üyeleri arasında düzenli entegrasyon sağlamak

hedeflenmektedir.

---

## 2. EKİP VE GÖREV DAĞILIMI

Aşağıdaki görev dağılımı kesindir. Ekip üyelerinin sorumlulukları birbirine karıştırılmamalıdır.

| Ekip üyesi | Sorumluluk |
|---|---|
| **Zemzem** | Backend ve Kullanıcı Yönetimi |
| **Nurşen** | Kullanıcı Arayüzü ve Temel Sayfalar |
| **Yağız** | İlan Oluşturma ve Yönetimi |
| **Kübra** | İlan Listeleme, Arama ve Detay |
| **Asmin** | Yönetici Paneli ve Kalite Testleri |
| **Leyla** | İletişim, Favoriler ve Entegrasyon |

### Görev dosyaları

Her ekip üyesinin ayrıntılı görev tanımı `docs/tasks/` klasöründeki kendi dosyasında yer alacaktır:

- `zemzem.md`
- `nursen.md`
- `yagiz.md`
- `kubra.md`
- `asmin.md`
- `leyla.md`

Her ekip üyesi geliştirmeye başlamadan önce hem bu ortak rehberi hem de kendi görev dosyasını okumalıdır.

### Ekip içi sorumluluk

Her kişi kendi modülünden sorumludur. Ancak modüllerin birbiriyle uyumlu çalışması bütün ekibin ortak sorumluluğudur.

Başka bir ekip üyesinin sorumluluğundaki kod, veritabanı modeli veya API sözleşmesi değiştirilmeden önce ilgili kişiyle koordinasyon sağlanmalıdır.

---

## 3. KULLANILAN TEKNOLOJİLER

### Backend

| Teknoloji | Kullanım amacı |
|---|---|
| Node.js | Sunucu çalışma ortamı |
| Express.js | REST API geliştirme |
| PostgreSQL 17 | İlişkisel veritabanı |
| Prisma ORM 6.19.3 | Veritabanı erişimi ve migration |
| Zod | Gelen verilerin doğrulanması |
| Argon2 | Şifre hashleme ve doğrulama |
| cookie-parser | Oturum çerezlerini okuma |
| Node.js Crypto | Güvenli oturum anahtarı üretimi |
| Nodemon | Geliştirme sırasında otomatik sunucu yeniden başlatma |

### Frontend

Frontend tarafında React tabanlı bir web arayüzü planlanmaktadır.

Kesin frontend kurulumu ve ek teknoloji tercihleri Nurşen tarafından ekip ile koordine edilerek belirlenecektir.

Frontend, backend API'leriyle HTTP üzerinden iletişim kuracaktır.

### Proje yönetimi

- Git
- GitHub
- GitHub Issues
- GitHub Projects (Kanban)
- GitHub Pull Requests
- Markdown dokümantasyonu

---

## 4. MEVCUT PROJE KLASÖR YAPISI

18 Kasım 2026 itibarıyla mevcut proje yapısı:

```text
emlak360/
│
├── backend/
│   ├── node_modules/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── cookies.txt
│   ├── package-lock.json
│   ├── package.json
│   └── prisma.config.ts
│
├── docs/
│   ├── architecture/
│   ├── dir/
│   ├── quality/
│   ├── tasks/
│   └── AI_REHBER.md
│
├── frontend/
│   └── .gitkeep
│
├── tests/
│   └── .gitkeep
│
└── README.md
```

### Klasörlerin görevleri

| Klasör | Açıklama |
|---|---|
| `backend/` | Backend API ve veritabanı kodları |
| `backend/prisma/` | Prisma şeması ve migration dosyaları |
| `backend/src/` | Express uygulaması ve sunucu |
| `frontend/` | Kullanıcı arayüzü |
| `docs/architecture/` | Mimari tasarım ve teknik açıklamalar |
| `docs/dir/` | DİR/DREAD risk analizleri |
| `docs/quality/` | Yazılım kalite ve test belgeleri |
| `docs/tasks/` | Kişiye özel görev dosyaları |
| `tests/` | Ortak test dosyaları |
| `README.md` | Projenin genel tanıtımı |

### Dosya ve klasör kuralları

1. Mevcut klasör yapısı gereksiz yere değiştirilmemelidir.
2. Yeni dosya veya klasör oluşturulmadan önce mevcut yapı kontrol edilmelidir.
3. `node_modules/` GitHub'a gönderilmemelidir.
4. `.env` dosyası ve gerçek şifreler GitHub'a gönderilmemelidir.
5. `cookies.txt` oturum bilgisi içerir; GitHub'a gönderilmemeli ve test sonrasında silinmelidir.
6. `.env.example` gerçek gizli bilgi içermeyen örnek yapılandırma dosyası olarak kullanılmalıdır.
7. `package.json` ve `package-lock.json` GitHub'da tutulmalıdır.
8. Prisma migration dosyaları korunmalıdır.
9. `.gitkeep`, boş klasörlerin GitHub'da bulunmasını sağlar. Klasör içine gerçek dosyalar eklendiğinde kaldırılabilir.
10. Başka ekip üyelerinin dosyaları habersiz silinmemeli veya yeniden yazılmamalıdır.

---

## 5. PROJEYİ YEREL ORTAMDA ÇALIŞTIRMA

### 5.1. Gereksinimler

- Node.js
- PostgreSQL
- Git
- npm

### 5.2. Repository'yi klonlama

```bash
git clone https://github.com/zemzemertkn/emlak360.git
cd emlak360/backend
```

### 5.3. Bağımlılıkları yükleme

```bash
npm install
```

### 5.4. PostgreSQL yapılandırması

PostgreSQL sunucusu çalışır durumda olmalıdır.

Her geliştirici kendi yerel PostgreSQL kullanıcısını ve veritabanını hazırlamalıdır.

`backend/.env.example` dosyası temel alınarak `backend/.env` oluşturulmalıdır.

Örnek bağlantı:

```env
DATABASE_URL="postgresql://KULLANICI:SIFRE@127.0.0.1:5432/emlak360_db?schema=public"
```

Bu örnek gerçek bağlantı bilgisi değildir.

### 5.5. Prisma işlemleri

```bash
npx prisma migrate dev
npx prisma generate
```

Var olan migration dosyaları yerel veritabanına uygulanmalıdır. Mevcut migration geçmişi silinmemelidir.

### 5.6. Backend sunucusunu başlatma

```bash
npm run dev
```

Backend adresi:

`http://localhost:5000`

Sağlık kontrolü:

`GET http://localhost:5000/api/health`

### 5.7. Prisma Studio

```bash
npx prisma studio
```

Prisma Studio, geliştirme ortamında veritabanı tablolarını incelemek için kullanılabilir.

**Önemli:** Express sunucusunun çalışması PostgreSQL'in de çalıştığı anlamına gelmez. Veritabanı sunucusu kapalıysa veritabanı kullanan API istekleri hata verir.

### 5.8. Frontend kurulumu

Frontend kurulumu tamamlandığında Nurşen bu bölüme kullanılan teknolojileri, kurulum komutlarını, geliştirme sunucusu adresini ve gerekli ortam değişkenlerini eklemelidir.

Mevcut olmayan kurulum komutları varsayılarak yazılmamalıdır.

---

## 6. BACKEND VE KULLANICI YÖNETİMİ

Bu bölüm Zemzem tarafından geliştirilen mevcut backend altyapısını açıklar.

### 6.1. Veritabanı modelleri

**User modeli**

Kullanıcı bilgilerini tutar.

Temel alanlar:

- `id`
- `name`
- `email`
- `passwordHash`
- `role`
- `createdAt`
- `updatedAt`

Kullanıcı rolleri:

- `USER`
- `ADMIN`

**Session modeli**

Kullanıcı oturumlarını tutar.

Temel alanlar:

- `id`
- `userId`
- `expiresAt`
- `createdAt`

Oturum anahtarının ham değeri veritabanında tutulmaz. SHA-256 hash değeri saklanır.

### 6.2. Mevcut API endpoint'leri

| Metot | Endpoint | Yetki | Açıklama |
|---|---|---|---|
| GET | `/api/health` | Herkes | API sağlık kontrolü |
| POST | `/api/auth/register` | Herkes | Kullanıcı kaydı |
| POST | `/api/auth/login` | Herkes | Kullanıcı girişi |
| POST | `/api/auth/logout` | Oturum varsa iptal eder | Kullanıcı çıkışı |
| GET | `/api/auth/me` | Giriş gerekli | Aktif kullanıcı bilgileri |
| GET | `/api/users/profile` | Giriş gerekli | Kullanıcı profili |
| PATCH | `/api/users/profile` | Giriş gerekli | Profil adını güncelleme |
| PATCH | `/api/users/password` | Giriş gerekli | Şifre değiştirme |
| GET | `/api/admin/users` | ADMIN | Kullanıcı listesi |

### 6.3. Örnek API istekleri

**Kayıt**

```http
POST /api/auth/register
Content-Type: application/json
```

```json
{
  "name": "Test Kullanici",
  "email": "test@example.com",
  "password": "OrnekSifre123!"
}
```

**Giriş**

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "test@example.com",
  "password": "OrnekSifre123!"
}
```

**Profil güncelleme**

```http
PATCH /api/users/profile
Content-Type: application/json
```

```json
{
  "name": "Yeni Kullanici Adi"
}
```

**Şifre değiştirme**

```http
PATCH /api/users/password
Content-Type: application/json
```

```json
{
  "currentPassword": "EskiSifre123!",
  "newPassword": "YeniSifre123!"
}
```

Örnek şifreler gerçek hesaplarda kullanılmamalıdır.

### 6.4. Kimlik doğrulama

Emlak360, cookie tabanlı oturum yönetimi kullanmaktadır.

Kullanıcı giriş yaptığında:

1. E-posta ve şifre kontrol edilir.
2. Şifre Argon2 ile doğrulanır.
3. Güvenli bir oturum anahtarı oluşturulur.
4. Oturum kaydı PostgreSQL'e eklenir.
5. Tarayıcıya `HttpOnly` oturum çerezi gönderilir.

Oturum süresi mevcut geliştirmede 7 gündür.

Kullanıcı çıkış yaptığında oturum kaydı iptal edilir.

Şifre değiştirildiğinde kullanıcının aktif oturumları iptal edilir ve yeniden giriş yapması gerekir.

### 6.5. Frontend bağlantısı

Oturum gerektiren isteklerde tarayıcının çerez göndermesi gerekir.

Örnek:

```javascript
fetch("http://localhost:5000/api/auth/me", {
  credentials: "include",
});
```

Frontend ve backend farklı origin'lerde çalışacaksa CORS ve çerez ayarları ayrıca yapılandırılmalıdır. Bu yapılandırmanın tamamlandığı varsayılmamalıdır.

### 6.6. Yetkilendirme

Backend'de iki temel kontrol bulunmaktadır:

- `requireAuth`: Giriş yapılmış ve geçerli oturum bulunmasını kontrol eder.
- `requireAdmin`: Kullanıcının ADMIN rolüne sahip olmasını kontrol eder.

İlan, favori ve iletişim modüllerinde giriş kontrolü yanında **kaynak sahipliği kontrolü** de yapılmalıdır.

Örneğin bir kullanıcı başka bir kullanıcıya ait ilanı değiştirememelidir.

### 6.7. Güvenlikte tamamlanması gerekenler

Mevcut sistem temel işlev testlerinden geçmiştir ancak üretim ortamı için aşağıdaki çalışmalar gereklidir:

- CSRF koruması
- Giriş denemelerine hız sınırlaması
- CORS ve güvenli çerez yapılandırması
- HTTPS
- Süresi dolan oturumların temizlenmesi
- Bağımlılık güvenlik uyarılarının incelenmesi
- Otomatik API testleri

Bu maddeler tamamlanmadan üretim güvenliğinin eksiksiz olduğu iddia edilmemelidir.

---

## 7. MODÜLLER ARASI ENTEGRASYON

Emlak360 altı kişinin ayrı ayrı geliştirdiği modüllerden oluşacaktır.

Bu modüllerin birbiriyle uyumlu çalışması zorunludur.

### Temel bağlantılar

**Nurşen — Arayüz**

Kullanıcı kayıt, giriş, profil ve temel sayfa arayüzlerini geliştirirken mevcut backend API'lerini kullanır.

**Yağız — İlan yönetimi**

İlan oluşturma, düzenleme ve silme işlemlerinde oturum kontrolü ve ilan sahipliği kurallarını uygular.

**Kübra — İlan listeleme**

Yağız tarafından geliştirilen ilan veri yapısı ve API'leriyle uyumlu listeleme, arama, filtreleme ve detay özellikleri geliştirir.

**Asmin — Yönetici paneli**

ADMIN yetkilendirmesini kullanır. Yönetim API'lerini geliştirirken ilgili modül sahipleriyle koordinasyon sağlar. Kalite testlerini takip eder.

**Leyla — İletişim, favoriler ve entegrasyon**

Favori ve iletişim işlemlerini kullanıcı ve ilan modelleriyle ilişkilendirir. Modüller arası entegrasyon testlerini koordine eder.

**Zemzem — Backend ve kullanıcı yönetimi**

Kimlik doğrulama, oturum, kullanıcı profili ve yetkilendirme altyapısının diğer modüllerle uyumlu çalışmasını sağlar.

### Ortak kurallar

- API endpoint'leri değiştirilmeden önce ilgili kişiler bilgilendirilir.
- Prisma modellerine ekleme yapılmadan önce mevcut ilişkiler incelenir.
- Aynı özellik iki farklı kişi tarafından yeniden geliştirilmez.
- Ortak dosyalarda değişiklik yapılırken Git çakışmalarına dikkat edilir.
- Modüller birleştirildikten sonra entegrasyon testleri yapılır.

---

## 8. GITHUB VE KANBAN ÇALIŞMA DÜZENİ

### 8.1. GitHub Issues

Her geliştirme işi için GitHub Issue açılır.

Issue içinde şunlar bulunmalıdır:

- Görevin başlığı
- Açıklaması
- Sorumlu kişi
- Yapılacak işlemler
- Kabul kriterleri
- Bağımlılıklar
- Öncelik

Bir görev birden fazla kişiyi ilgilendiriyorsa ilgili kişiler Issue üzerinde birlikte çalışabilir.

### 8.2. Kanban aşamaları

Görevler şu aşamalarda takip edilir:

1. **Todo:** Henüz başlanmadı.
2. **In Progress:** Geliştirme devam ediyor.
3. **In Review:** Kod incelemesi veya test bekliyor.
4. **Done:** Kabul kriterleri sağlandı ve gerekli birleştirme tamamlandı.

### 8.3. Branch kullanımı

Her ekip üyesi kendi feature branch'inde çalışmalıdır.

Örnek branch adları:

- `feature/auth-backend`
- `feature/frontend-pages`
- `feature/listing-management`
- `feature/listing-search`
- `feature/admin-panel`
- `feature/favorites-contact`

Branch adları öneridir; mevcut GitHub branch'leri kontrol edilmeden aynı adla yeniden oluşturulmamalıdır.

### 8.4. Pull Request

Görev tamamlandığında Pull Request açılır.

Pull Request açıklamasında:

- Yapılan değişiklikler
- İlgili Issue
- Değiştirilen önemli dosyalar
- Test sonuçları
- Diğer ekip üyelerini etkileyen değişiklikler

bulunmalıdır.

Kod, mümkün olduğunda ilgili modülle çalışan başka bir ekip üyesi tarafından incelenmelidir.

Doğrudan `main` branch'ine geliştirme yapılmamalıdır.

---

## 9. DİR / DREAD RİSK ANALİZİ

### 9.1. DİR nedir?

Emlak360 projesinde güvenlik ve kalite açısından önemli riskleri değerlendirmek için DREAD risk puanlama yöntemi kullanılacaktır.

DREAD beş kriterden oluşur:

| Kriter | Açıklama |
|---|---|
| D — Damage Potential | Risk gerçekleştiğinde oluşabilecek zarar |
| R — Reproducibility | Problemin tekrarlanabilirliği |
| E — Exploitability | Zafiyetin istismar edilme kolaylığı |
| A — Affected Users | Etkilenen kullanıcılar |
| D — Discoverability | Zafiyetin keşfedilme kolaylığı |

### 9.2. DİR skoru hesaplama

Her kriter 0–10 arasında puanlanır.

**DİR skoru = (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5**

Örnek:

| Kriter | Puan |
|---|---:|
| Damage | 9 |
| Reproducibility | 8 |
| Exploitability | 7 |
| Affected Users | 8 |
| Discoverability | 8 |
| **DİR skoru** | **8,0** |

### 9.3. Risk seviyeleri

Proje içi değerlendirme için önerilen ölçek:

| DİR skoru | Risk seviyesi |
|---|---|
| 0–3,9 | Düşük |
| 4–6,9 | Orta |
| 7–10 | Yüksek |

Bu eşikler ekip tarafından kullanılan çalışma ölçeğidir; DREAD yönteminin evrensel ve zorunlu eşikleri değildir.

### 9.4. Emlak360 için başlangıç riskleri

Proje kapsamında başlangıç olarak yaklaşık 10 risk değerlendirilecektir.

| No | Risk | İlgili modül |
|---|---|---|
| 1 | Yetkisiz kullanıcı erişimi | Backend / Kullanıcı Yönetimi |
| 2 | Şifre veya oturum bilgilerinin ele geçirilmesi | Backend / Kullanıcı Yönetimi |
| 3 | Başka kullanıcıya ait ilanın değiştirilmesi | İlan Yönetimi |
| 4 | Sahte veya yanıltıcı ilan oluşturulması | İlan Yönetimi |
| 5 | Arama ve filtreleme işlemlerinde hatalı veri işleme | İlan Listeleme |
| 6 | İlan detay bilgilerinin eksik veya hatalı gösterilmesi | İlan Detay |
| 7 | Başka kullanıcıların favori kayıtlarına yetkisiz erişim | Favoriler |
| 8 | İletişim isteklerinin spam amacıyla kullanılması | İletişim |
| 9 | Yönetici paneline yetkisiz erişim | Yönetici Paneli |
| 10 | API ve modüller arası entegrasyon hataları | Entegrasyon |

Bu risklerin puanları henüz belirlenmiş değildir. Değerlendirme yapılmadan rastgele skor yazılmamalıdır.

### 9.5. DİR değerlendirmelerinde bulunması gerekenler

Her risk için:

- Risk adı
- Riskin açıklaması
- İlgili modül
- Sorumlu ekip üyesi
- Beş DREAD kriterinin ayrı ayrı puanları
- Puanların gerekçeleri
- Ortalama DİR skoru
- Risk seviyesi
- Alınan veya önerilen önlemler
- Riskin güncel durumu
- İlgili test veya Issue

belirtilmelidir.

Risk analizleri `docs/dir/` klasöründe tutulacaktır.

### 9.6. Ekip sorumlulukları

Her ekip üyesi kendi modülündeki riskleri değerlendirmekten sorumludur.

Asmin, kalite testleri kapsamında risk analizlerinin tutarlılığını ve testlerle ilişkisini kontrol edecektir.

Risklerin değerlendirilmesi ve önlemlerin uygulanması ilgili görev sahipleriyle birlikte yürütülecektir.

---

## 10. TEST VE KALİTE KURALLARI

Her geliştirici kendi geliştirdiği özellikleri test etmekle sorumludur.

Asmin, genel kalite testlerinin koordinasyonunu üstlenecektir.

### Kontrol edilmesi gerekenler

- Geçerli girdilerle işlemlerin başarılı olması
- Hatalı girdilerin uygun biçimde reddedilmesi
- Yetkisiz erişimin engellenmesi
- Kullanıcıların yalnızca yetkili oldukları verilere erişmesi
- API hata durumlarının doğru yönetilmesi
- Frontend ve backend bağlantısının çalışması
- Modüller arası veri uyumluluğu
- Temel kullanıcı senaryolarının çalışması

Test sonuçları gerektiğinde `docs/quality/` veya `tests/` altında belgelenmelidir.

Test edilmemiş bir özellik, yalnızca kodu yazıldığı için tamamlanmış sayılmamalıdır.

---

## 11. YAPILAN ÇALIŞMALAR — PROJE GELİŞTİRME KAYDI

**BU BÖLÜM BÜTÜN EKİP ÜYELERİ TARAFINDAN GÜNCELLENECEKTİR.**

Bu bölüm Emlak360 projesinin gelişim geçmişini gösterir.

### Zorunlu güncelleme kuralları

1. Her ekip üyesi kendi görevini veya önemli bir geliştirme aşamasını tamamladığında bu bölüme yeni bir kayıt eklemelidir.
2. **Daha önce başka ekip üyeleri tarafından yazılmış çalışmalar kesinlikle silinmemelidir.**
3. Eski kayıtlar yeni kayıtlarla değiştirilmemelidir.
4. Yapılan işler tarih ve sorumlu kişi belirtilerek yazılmalıdır.
5. Tamamlanmamış işler tamamlanmış gibi gösterilmemelidir.
6. Diğer modülleri etkileyen değişiklikler açıkça belirtilmelidir.
7. İlgili GitHub Issue ve Pull Request bağlantıları eklenmelidir.
8. Her ekip üyesi ayrıca kendi görev dosyasındaki ilerleme ve teslim bölümünü güncellemelidir.

### 11.1. Zemzem — Backend ve Kullanıcı Yönetimi

**Tarih:** 18 Kasım 2026  
**Durum:** Temel kullanıcı yönetimi özellikleri geliştirildi ve manuel testlerden geçti.

**Yapılan çalışmalar:**

- Node.js ve Express backend altyapısı oluşturuldu.
- PostgreSQL veritabanı bağlantısı hazırlandı.
- Prisma ORM yapılandırıldı.
- `User` ve `Session` modelleri oluşturuldu.
- Veritabanı migration işlemleri uygulandı.
- Kullanıcı kayıt endpoint'i geliştirildi.
- Kullanıcı giriş endpoint'i geliştirildi.
- Cookie tabanlı oturum yönetimi geliştirildi.
- Kullanıcı çıkış endpoint'i geliştirildi.
- Aktif oturum kontrolü eklendi.
- USER ve ADMIN yetkilendirme kontrolleri oluşturuldu.
- Kullanıcı profili görüntüleme geliştirildi.
- Profil adı güncelleme geliştirildi.
- Şifre değiştirme geliştirildi.
- Şifre değişikliğinde mevcut oturumların iptal edilmesi sağlandı.
- Yönetici için kullanıcı listeleme endpoint'i geliştirildi.

**Gerçekleştirilen manuel testler:**

| Test | Sonuç |
|---|---|
| Kullanıcı kaydı | Başarılı |
| Kullanıcı girişi | Başarılı |
| Oturum kontrolü | Başarılı |
| Kullanıcı çıkışı | Başarılı |
| Çıkış sonrası erişimin engellenmesi | Başarılı |
| USER profil erişimi | Başarılı |
| USER'ın ADMIN endpoint'inden engellenmesi | Başarılı |
| ADMIN kullanıcı listeleme | Başarılı |
| Profil güncelleme | Başarılı |
| Şifre değiştirme | Başarılı |
| Eski oturumun iptal edilmesi | Başarılı |
| Yeni şifreyle giriş | Başarılı |

**Devam eden / kontrol edilmesi gereken işler:**

- Otomatik testlerin hazırlanması
- CSRF koruması ve giriş hızı sınırlaması
- Frontend bağlantısı için CORS yapılandırması
- Paket güvenlik uyarılarının incelenmesi
- Kodların GitHub'a aktarılması ve Pull Request süreci
- Diğer modüllerin kullanacağı ortak yetkilendirme altyapısının entegrasyonu

**Not:** Yerel ortamda başarılı olan testler, GitHub'a aktarım veya üretim ortamı hazırlığının tamamlandığı anlamına gelmez.

### 11.2. Diğer Ekip Üyelerinin Geliştirme Kayıtları

Nurşen, Yağız, Kübra, Asmin ve Leyla geliştirmelerini tamamladıkça bu başlık altında kendi adlarıyla yeni kayıt oluşturacaktır.

Yeni kayıt formatı:

#### [Ekip üyesi] — [Görev / Modül]

**Tarih:**  
**Durum:**  
**İlgili Issue:**  
**İlgili Pull Request:**

**Yapılan çalışmalar:**

- ...

**Eklenen veya değiştirilen dosyalar:**

- ...

**API veya veritabanı değişiklikleri:**

- ...

**Yapılan testler ve sonuçları:**

- ...

**DİR risk değerlendirmeleri:**

- ...

**Bilinen eksikler:**

- ...

**Diğer ekip üyelerinin dikkat etmesi gerekenler:**

- ...

**ÖNEMLİ:** Bu şablon yeni kayıt eklemek içindir. Mevcut kayıtların silinmesi veya üzerine yazılması için kullanılmamalıdır.

---

## 12. YAPAY ZEKÂ ASİSTANLARI İÇİN ZORUNLU TALİMATLAR

Bu belge, Emlak360 üzerinde çalışan bütün ekip üyelerinin yapay zekâ asistanları tarafından ortak bağlam olarak kullanılacaktır.

### Geliştirmeye başlamadan önce

Yapay zekâ asistanı:

1. Bu ortak rehberi okumalıdır.
2. Çalıştığı ekip üyesinin `docs/tasks/` altındaki kişisel görev dosyasını okumalıdır.
3. Mevcut kod ve klasör yapısını incelemelidir.
4. Görevin diğer modüllerle bağlantılarını belirlemelidir.
5. Önceden geliştirilmiş özellikleri yeniden yazmamalıdır.
6. Eksik bilgileri varsaymak yerine görev sahibine sormalıdır.

### Geliştirme sırasında

- Kod değişikliklerini anlaşılır şekilde açıklamalıdır.
- Gereksiz dosya, klasör ve bağımlılık oluşturmamalıdır.
- Mevcut API sözleşmesine uyum sağlamalıdır.
- Başka bir ekip üyesinin sorumluluklarını izinsiz üstlenmemelidir.
- Ortak dosyalarda değişiklik yapılacaksa bunu önceden belirtmelidir.
- Güvenlik ve veri doğrulama kontrollerini dikkate almalıdır.
- Yapılan işlemleri test etmelidir.
- GitHub'a gizli bilgi gönderilmesini önlemelidir.
- DİR/DREAD risklerini ilgili modül kapsamında değerlendirmelidir.

### Görev tamamlandığında

Yapay zekâ asistanı görev sahibine şu işlemlerde yardımcı olmalıdır:

1. Yapılan geliştirmeleri özetlemek.
2. Değiştirilen dosyaları listelemek.
3. Eklenen API endpoint'lerini belgelemek.
4. Veritabanı değişikliklerini açıklamak.
5. Test sonuçlarını yazmak.
6. DİR analizini güncellemek.
7. Kişisel görev dosyasının teslim bölümünü güncellemek.
8. **Bu rehberin 11. bölümüne, önceki kayıtları silmeden yeni geliştirme kaydı eklemek.**
9. İlgili GitHub Issue ve Pull Request bilgilerini eklemek.
10. Diğer ekip üyelerinin entegrasyon için bilmesi gerekenleri belirtmek.

### Yapay zekâ için temel kural

**Emlak360 ortak bir ekip projesidir. Bir kişinin geliştirmesi diğer beş kişinin çalışmasını bozmamalıdır. Yapay zekâ asistanı yalnızca kod üretmeye değil, ekip içi uyuma, kaliteye, test edilebilirliğe ve sürdürülebilirliğe de odaklanmalıdır.**

---

## 13. PROJENİN GÜNCEL DURUMUNU KONTROL ETME

Bu belge yaşayan bir proje rehberidir.

Her geliştirme aşamasında aşağıdaki bilgiler kontrol edilmelidir:

- GitHub'daki güncel branch'ler
- Açık ve tamamlanan Issues
- Açık ve birleştirilen Pull Requests
- Güncel Prisma şeması
- Mevcut API endpoint'leri
- `docs/tasks/` altındaki kişisel görev dosyaları
- Bu belgenin 11. bölümündeki geliştirme kayıtları

**Belge ile gerçek kod arasında farklılık varsa gerçek kod ve GitHub geçmişi kontrol edilerek belge güncellenmelidir.**

Hiçbir ekip üyesi, yalnızca bu rehberde yazdığı için bir özelliğin çalıştığını varsaymamalıdır.

---

## 14. SONUÇ VE ORTAK ÇALIŞMA İLKESİ

Emlak360 altı kişilik bir ekip projesidir.

Her ekip üyesi kendi sorumluluk alanındaki geliştirmeleri gerçekleştirir, test eder, belgeler ve GitHub üzerinden paylaşır.

Projenin başarılı kabul edilebilmesi için modüllerin ayrı ayrı çalışması yeterli değildir. Kullanıcı arayüzü, backend, ilan yönetimi, arama, favoriler, iletişim ve yönetici panelinin birlikte çalışması gerekir.

**Temel hedefimiz: Çalışan, güvenli, test edilebilir, belgelenmiş ve ekip tarafından birlikte geliştirilebilir bir Emlak360 uygulaması oluşturmak.**
