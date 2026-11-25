EMLAK360 — ORTAK PROJE VE YAPAY ZEKÂ GELİŞTİRME REHBERİ
Proje: Emlak360
Ders: Yazılım Kalite Standartları
Ekip: 6 öğrenci
Proje yönetimi: GitHub Projects — Kanban
GitHub: https://github.com/zemzemertkn/emlak360
Son güncelleme: 25 Kasım 2026
Güncellik notu: Bu rehberde ekip deposuna birleştirilmiş kod ile kişisel fork/feature branch üzerinde geliştirilip Pull Request aşamasında olan kod ayrı belirtilir. 24 Kasım 2026 tarihinde kontrol edilen PR durumları, sonradan değişmiş olabilir; kesin durum GitHub üzerinden doğrulanmalıdır.

25 Kasım 2026 güncellemesinin kapsamı
- Ekip çalışma tabanı develop; main ve develop üzerinde doğrudan geliştirme yapılmaz.
- Kişisel feature/fix/test branch’leri, develop ile ilişkilendirilir; PR hedefi ekip deposundaki develop olur. Henüz birleştirilmemiş bir özelliğe bağımlı PR için geçici alt-branch/PR hedefi açıkça belirtilir.
- React/Vite frontend, yönetici paneli, CORS ve oturum senkronizasyonu çalışmalarının mevcut durumu kayda geçirilir.
- Tamamlanan yerel testler ile ekip reposuna entegrasyon birbirinden ayrılır.
1. PROJENİN TANIMI VE AMACI
Emlak360, kullanıcıların gayrimenkul ilanlarını görüntüleyebildiği, arayabildiği, filtreleyebildiği, oluşturabildiği, yönetebildiği, favorilerine ekleyebildiği ve ilan sahipleriyle iletişim kurabildiği web tabanlı bir emlak platformudur.
Temel özellikler
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
Projenin akademik amacı
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
2. EKİP VE GÖREV DAĞILIMI
Aşağıdaki görev dağılımı kesindir. Ekip üyelerinin sorumlulukları birbirine karıştırılmamalıdır.
Ekip üyesi	Sorumluluk
Zemzem	Backend ve Kullanıcı Yönetimi
Nurşen	Kullanıcı Arayüzü ve Temel Sayfalar
Yağız	İlan Oluşturma ve Yönetimi
Kübra	İlan Listeleme, Arama ve Detay
Asmin	Yönetici Paneli ve Kalite Testleri
Leyla	İletişim, Favoriler ve Entegrasyon


Görev dosyaları
Her ekip üyesinin ayrıntılı görev tanımı docs/tasks/ klasöründeki kendi dosyasında yer alacaktır:
- zemzem.md
- nursen.md
- yagiz.md
- kubra.md
- asmin.md
- leyla.md
Her ekip üyesi geliştirmeye başlamadan önce hem bu ortak rehberi hem de kendi görev dosyasını okumalıdır.
Ekip içi sorumluluk
Her kişi kendi modülünden sorumludur. Ancak modüllerin birbiriyle uyumlu çalışması bütün ekibin ortak sorumluluğudur.

Başka bir ekip üyesinin sorumluluğundaki kod, veritabanı modeli veya API sözleşmesi değiştirilmeden önce ilgili kişiyle koordinasyon sağlanmalıdır.
3. KULLANILAN TEKNOLOJİLER
Backend
Teknoloji	Kullanım amacı
Node.js	Sunucu çalışma ortamı
Express.js	REST API geliştirme
PostgreSQL 17	İlişkisel veritabanı
Prisma ORM 6.19.3	Veritabanı erişimi ve migration
Zod	Gelen verilerin doğrulanması
Argon2	Şifre hashleme ve doğrulama
cookie-parser	Oturum çerezlerini okuma
Node.js Crypto	Güvenli oturum anahtarı üretimi
Nodemon	Geliştirme sırasında otomatik sunucu yeniden başlatma


Frontend
Frontend tarafında React 19 + Vite 8 tabanlı uygulama geliştirilmektedir. İstemci tarafında react-router-dom ile sayfa yönlendirmeleri, lucide-react ile ikonlar kullanılmaktadır. Bu teknolojiler geliştirme sürecinde yerel olarak gözlemlenmiştir; ekip deposundaki son sürümler için frontend/package.json esas alınmalıdır.

Frontend geliştirme sunucusu yerel olarak http://localhost:5173, backend API'si http://localhost:5000 adresindedir. Ayrı origin'ler nedeniyle CORS yapılandırması ve çerezli isteklerde credentials: 'include' gereklidir.

Entegrasyon notu: CORS (#9), Header oturum senkronizasyonu (#10), Yönetici Paneli (#11) ve rehber güncellemesi (#13) 25 Kasım 2026 itibarıyla develop geçmişindedir.
Proje yönetimi
- Git
- GitHub
- GitHub Issues
- GitHub Projects (Kanban)
- GitHub Pull Requests
- Markdown dokümantasyonu
4. MEVCUT PROJE KLASÖR YAPISI
18 Kasım 2026 tarihli ilk iskelet, sonraki frontend ve test çalışmalarıyla genişlemiştir. Aşağıdaki yapı ilgili branch/PR çalışmalarının birleşik görünümüdür; tüm dosyalar henüz ekip develop branch'inde bulunmayabilir.
emlak360/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   │   └── admin.test.js           # test/admin-api branch'i / ayrı PR
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── pages/
│   │       ├── AdminPanel.jsx      # feature/admin-panel / PR #11
│   │       └── AdminPanel.css      # feature/admin-panel / PR #11
│   ├── package.json
│   └── package-lock.json
├── docs/
│   ├── architecture/
│   ├── dir/
│   ├── quality/
│   ├── tasks/
│   └── AI_REHBER.md
├── tests/
└── README.md
node_modules/, yerel .env, cookies.txt gibi geliştirme ortamına özel dosyalar sürüm kontrolüne eklenmemelidir. Yukarıdaki ağaç bütün frontend sayfalarını listelemeyi amaçlamaz; gerçek dosya yapısı seçili branch üzerinden kontrol edilir.
Klasörlerin görevleri
Klasör	Açıklama
backend/	Backend API ve veritabanı kodları
backend/prisma/	Prisma şeması ve migration dosyaları
backend/src/	Express uygulaması ve sunucu
frontend/	Kullanıcı arayüzü
docs/architecture/	Mimari tasarım ve teknik açıklamalar
docs/dir/	DİR/DREAD risk analizleri
docs/quality/	Yazılım kalite ve test belgeleri
docs/tasks/	Kişiye özel görev dosyaları
tests/	Ortak test dosyaları
README.md	Projenin genel tanıtımı


Dosya ve klasör kuralları
1. Mevcut klasör yapısı gereksiz yere değiştirilmemelidir.
2. Yeni dosya veya klasör oluşturulmadan önce mevcut yapı kontrol edilmelidir.
3. node_modules/ GitHub'a gönderilmemelidir.
4. .env dosyası ve gerçek şifreler GitHub'a gönderilmemelidir.
5. cookies.txt oturum bilgisi içerir; GitHub'a gönderilmemeli ve test sonrasında silinmelidir.
6. .env.example gerçek gizli bilgi içermeyen örnek yapılandırma dosyası olarak kullanılmalıdır.
7. package.json ve package-lock.json GitHub'da tutulmalıdır.
8. Prisma migration dosyaları korunmalıdır.
9. .gitkeep, boş klasörlerin GitHub'da bulunmasını sağlar. Klasör içine gerçek dosyalar eklendiğinde kaldırılabilir.
10. Başka ekip üyelerinin dosyaları habersiz silinmemeli veya yeniden yazılmamalıdır.
5. PROJEYİ YEREL ORTAMDA ÇALIŞTIRMA
5.1. Gereksinimler
- Node.js
- PostgreSQL
- Git
- npm
5.2. Repository'yi klonlama
git clone https://github.com/zemzemertkn/emlak360.git
cd emlak360
git fetch origin
git switch develop
cd backend
5.3. Bağımlılıkları yükleme
npm install
5.4. PostgreSQL yapılandırması
PostgreSQL sunucusu çalışır durumda olmalıdır.

Her geliştirici kendi yerel PostgreSQL kullanıcısını ve veritabanını hazırlamalıdır.

backend/.env.example dosyası temel alınarak backend/.env oluşturulmalıdır.

Örnek bağlantı:
DATABASE_URL="postgresql://KULLANICI:SIFRE@127.0.0.1:5432/emlak360_db?schema=public"
Bu örnek gerçek bağlantı bilgisi değildir.
5.5. Prisma işlemleri
npx prisma migrate dev
npx prisma generate
Var olan migration dosyaları yerel veritabanına uygulanmalıdır. Mevcut migration geçmişi silinmemelidir.
5.6. Backend sunucusunu başlatma
npm run dev
Backend adresi:

http://localhost:5000

Sağlık kontrolü:

GET http://localhost:5000/api/health
5.7. Prisma Studio
npx prisma studio
Prisma Studio, geliştirme ortamında veritabanı tablolarını incelemek için kullanılabilir.

Önemli: Express sunucusunun çalışması PostgreSQL'in de çalıştığı anlamına gelmez. Veritabanı sunucusu kapalıysa veritabanı kullanan API istekleri hata verir.
5.8. Frontend kurulumu
Frontend uygulaması React/Vite ile çalışmaktadır. Proje kök dizininden:
cd frontend
npm install
npm run dev
Geliştirme adresi: http://localhost:5173 (Vite varsayılanı; terminaldeki gerçek port esas alınır). Backend için ayrı terminal gereklidir. frontend/package.json bağımlılık ve script'lerin yetkili kaynağıdır.

Windows PowerShell'de npm yürütme politikası sorunuyla karşılaşıldığında npm.cmd install / npm.cmd run dev kullanılabilir. Backend'e erişim sorunu yaşanırsa önce backend'in 5000 portunda çalıştığı, sonra CORS değişikliğinin ilgili branch'e gerçekten birleştirildiği kontrol edilir.
6. BACKEND VE KULLANICI YÖNETİMİ
Bu bölüm Zemzem tarafından geliştirilen mevcut backend altyapısını açıklar.
6.1. Veritabanı modelleri
User modeli

Kullanıcı bilgilerini tutar.

Temel alanlar:
- id
- name
- email
- passwordHash
- role
- createdAt
- updatedAt
Kullanıcı rolleri:
- USER
- ADMIN
Session modeli

Kullanıcı oturumlarını tutar.

Temel alanlar:
- id
- userId
- expiresAt
- createdAt
Oturum anahtarının ham değeri veritabanında tutulmaz. SHA-256 hash değeri saklanır.
6.2. Mevcut API endpoint'leri
Metot	Endpoint	Yetki	Açıklama
GET	/api/health	Herkes	API sağlık kontrolü
POST	/api/auth/register	Herkes	Kullanıcı kaydı
POST	/api/auth/login	Herkes	Kullanıcı girişi
POST	/api/auth/logout	Oturum varsa iptal eder	Kullanıcı çıkışı
GET	/api/auth/me	Giriş gerekli	Aktif kullanıcı bilgileri
GET	/api/users/profile	Giriş gerekli	Kullanıcı profili
PATCH	/api/users/profile	Giriş gerekli	Profil adını güncelleme
PATCH	/api/users/password	Giriş gerekli	Şifre değiştirme
GET	/api/admin/users	ADMIN	Kullanıcı listesi


6.3. Örnek API istekleri
Kayıt
POST /api/auth/register
Content-Type: application/json
{
  "name": "Test Kullanici",
  "email": "test@example.com",
  "password": "OrnekSifre123!"
}
Giriş
POST /api/auth/login
Content-Type: application/json
{
  "email": "test@example.com",
  "password": "OrnekSifre123!"
}
Profil güncelleme
PATCH /api/users/profile
Content-Type: application/json
{
  "name": "Yeni Kullanici Adi"
}
Şifre değiştirme
PATCH /api/users/password
Content-Type: application/json
{
  "currentPassword": "EskiSifre123!",
  "newPassword": "YeniSifre123!"
}
Örnek şifreler gerçek hesaplarda kullanılmamalıdır.
6.4. Kimlik doğrulama
Emlak360, cookie tabanlı oturum yönetimi kullanmaktadır.

Kullanıcı giriş yaptığında:
1. E-posta ve şifre kontrol edilir.
2. Şifre Argon2 ile doğrulanır.
3. Güvenli bir oturum anahtarı oluşturulur.
4. Oturum kaydı PostgreSQL'e eklenir.
5. Tarayıcıya HttpOnly oturum çerezi gönderilir.
Oturum süresi mevcut geliştirmede 7 gündür.

Kullanıcı çıkış yaptığında oturum kaydı iptal edilir.

Şifre değiştirildiğinde kullanıcının aktif oturumları iptal edilir ve yeniden giriş yapması gerekir.
6.5. Frontend bağlantısı
Oturum gerektiren isteklerde tarayıcının çerez göndermesi gerekir.

Örnek:
fetch("http://localhost:5000/api/auth/me", {
  credentials: "include",
});
CORS düzeltmesi PR #9 ile develop dalına birleştirildi. Yerel entegrasyon dalında frontend istekleri ortak /api adresini kullanır. Vite geliştirme sunucusu bu istekleri localhost:5000 adresine iletir. Üretimde /api yönlendirmesi veya VITE_API_URL ve uyumlu CORS/çerez yapılandırması gerekir.

Oturum açma, çıkış ve profil güncellemesi sonrasında Header'ın anlık yenilenmesi için fix/frontend-auth-state üzerinde ayrı bir değişiklik hazırlanmış ve PR #10 açılmıştır. Bu da develop üzerinde birleştirilmeden tamamlanmış entegrasyon olarak değerlendirilmemelidir.
6.6. Yetkilendirme
Backend'de iki temel kontrol bulunmaktadır:
- requireAuth: Giriş yapılmış ve geçerli oturum bulunmasını kontrol eder.
- requireAdmin: Kullanıcının ADMIN rolüne sahip olmasını kontrol eder.
İlan, favori ve iletişim modüllerinde giriş kontrolü yanında kaynak sahipliği kontrolü de yapılmalıdır.

Örneğin bir kullanıcı başka bir kullanıcıya ait ilanı değiştirememelidir.
6.7. Güvenlikte tamamlanması gerekenler
Mevcut sistem temel işlev testlerinden geçmiştir ancak üretim ortamı için aşağıdaki çalışmalar gereklidir:
- CSRF koruması
- Giriş denemelerine hız sınırlaması
- PR #9 ile birleşen CORS ve güvenli çerez yapılandırmasının ortam bazında doğrulanması
- HTTPS
- Süresi dolan oturumların temizlenmesi
- Bağımlılık güvenlik uyarılarının incelenmesi
- Otomatik API testlerinin ekip deposuna entegre edilmesi ve CI'da çalıştırılması (yerelde dört yönetici API testi başarılı)
Bu maddeler tamamlanmadan üretim güvenliğinin eksiksiz olduğu iddia edilmemelidir.
7. MODÜLLER ARASI ENTEGRASYON
Emlak360 altı kişinin ayrı ayrı geliştirdiği modüllerden oluşacaktır.

Bu modüllerin birbiriyle uyumlu çalışması zorunludur.
Temel bağlantılar
Nurşen — Arayüz

Kullanıcı kayıt, giriş, profil ve temel sayfa arayüzlerini geliştirirken mevcut backend API'lerini kullanır.

Yağız — İlan yönetimi

İlan oluşturma, düzenleme ve silme işlemlerinde oturum kontrolü ve ilan sahipliği kurallarını uygular.

Kübra — İlan listeleme

Yağız tarafından geliştirilen ilan veri yapısı ve API'leriyle uyumlu listeleme, arama, filtreleme ve detay özellikleri geliştirir.

Asmin — Yönetici paneli

ADMIN yetkilendirmesini kullanır. Yönetim API'lerini geliştirirken ilgili modül sahipleriyle koordinasyon sağlar. Kalite testlerini takip eder.

Leyla — İletişim, favoriler ve entegrasyon

Favori ve iletişim işlemlerini kullanıcı ve ilan modelleriyle ilişkilendirir. Modüller arası entegrasyon testlerini koordine eder.

Zemzem — Backend ve kullanıcı yönetimi

Kimlik doğrulama, oturum, kullanıcı profili ve yetkilendirme altyapısının diğer modüllerle uyumlu çalışmasını sağlar.
Ortak kurallar
- API endpoint'leri değiştirilmeden önce ilgili kişiler bilgilendirilir.
- Prisma modellerine ekleme yapılmadan önce mevcut ilişkiler incelenir.
- Aynı özellik iki farklı kişi tarafından yeniden geliştirilmez.
- Ortak dosyalarda değişiklik yapılırken Git çakışmalarına dikkat edilir.
- Modüller birleştirildikten sonra entegrasyon testleri yapılır.
8. GITHUB VE KANBAN ÇALIŞMA DÜZENİ
8.1. GitHub Issues ve görev dosyaları
Her geliştirme işi için GitHub Issue / GitHub Projects kartı kullanılır. Görevlerde başlık, açıklama, sorumlu, kabul kriterleri, bağımlılıklar ve öncelik bulunmalıdır. Başlamadan önce docs/AI_REHBER.md ve docs/tasks/<kisi>.md okunur.
8.2. Kanban aşamaları
1. Backlog: Planlanan, henüz başlanmayacak işler.
2. Todo: Başlamaya hazır işler.
3. In Progress: Aktif geliştirme.
4. Review: PR incelemesi veya test bekleyen işler.
5. Done: Kabul kriterleri karşılanmış, gerekli PR'lar birleştirilmiş işler.
Kısmi tamamlanan veya bağımlılık bekleyen bir görev, yalnızca yerel testleri geçti diye Done yapılmaz.
8.3. Git branch stratejisi — ZORUNLU
- main: Ana/kararlı dal; doğrudan geliştirme ve doğrudan push yapılmaz.
- develop: Takımın ortak entegrasyon dalı; ekip çalışmaları bu daldan temel alınır. develop üzerinde doğrudan geliştirme/push yapılmaz.
- feature/*, fix/*, test/*: Her işin ayrı geliştirme dalı; kod bu dallarda yazılır, commit ve push edilir.
- Pull Request hedefi: Ekip deposu zemzemertkn/emlak360 → develop. Kod incelemesi ve testlerden sonra yetkili kişi birleştirir.
- develop üzerinde bulunmayan başka bir PR'a bağımlı test gibi durumlarda geçici olarak feature branch'e hedeflenen bir PR açılabilir. Bağımlı PR birleştirildikten sonra hedef develop olacak şekilde düzenlenir; ana depoya yanlış branch'e merge yapılmaz.
Örnek branch adları: feature/auth-backend, feature/frontend-pages, feature/listing-management, feature/listing-search, feature/admin-panel, feature/favorites-contact, fix/backend-cors, fix/frontend-auth-state, test/admin-api.

Mevcut branch adları kontrol edilmeden aynı adla yeniden branch oluşturulmaz.
8.4. Önerilen komutlar — ana depoya yazma yetkisi olanlar
git clone https://github.com/zemzemertkn/emlak360.git
cd emlak360
git switch develop
git pull --ff-only origin develop
git switch -c feature/gorev-adi
# Kod geliştir, test et
git add <yalnizca-ilgili-dosyalar>
git commit -m "feat: gorev aciklamasi"
git push -u origin feature/gorev-adi
Ardından GitHub'da base: zemzemertkn/emlak360:develop ve compare: feature/gorev-adi olacak şekilde PR açılır. PowerShell'de <yalnizca-ilgili-dosyalar> yer tutucudur; gerçek dosya yolu yazılır.
8.5. Fork üzerinden çalışma — Asmin örneği
Kişisel fork kullanan üyeler için origin kişisel depo, upstream ortak depodur:
git remote -v
# origin   https://github.com/asmintatar/emlak360.git
# upstream https://github.com/zemzemertkn/emlak360.git

git fetch upstream
git switch develop
git pull --ff-only upstream develop
git switch -c feature/yeni-gorev
# Geliştirme + test
git add <ilgili-dosyalar>
git commit -m "feat: gorev aciklamasi"
git push -u origin feature/yeni-gorev
Fork'ta açılacak PR için base repository zemzemertkn/emlak360, base branch develop; head repository asmintatar/emlak360, compare branch çalışma dalı seçilir. GitHub'ın varsayılan main seçimi mutlaka kontrol edilir. Henüz birleştirilmemiş bir PR'a bağımlı test PR'ı gibi istisnalar, PR açıklamasında ve görev kartında belirtilir.
8.6. Pull Request ve birleştirme kuralları
PR açıklamasında yapılan değişiklikler, ilgili Issue, önemli dosyalar, API/DB etkileri, test sonuçları, bilinen eksikler ve bağımlı PR'lar yazılır. İnceleme sırasında Files changed bölümünden yalnızca ilgili dosyaların bulunduğu teyit edilir.

PR'ın açılmış veya fork'a push edilmiş olması, kodun develop içinde görünmesi anlamına gelmez. Takım üyeleri ortak kodu görmek için birleştirme sonrası develop branch'ini güncellemelidir. Bağımlılık sırasına dikkat edilir: örneğin CORS #9, Header güncellemesi #10, Yönetici Paneli #11 değişiklikleri incelemeden sonra uygun sırayla birleştirilir; bu birleştirmelerin yapıldığı önceden varsayılmaz.
8.7. Git güvenlik kontrolleri
- Commit öncesi git status --short ve git diff --cached --name-only kontrol edilir.
- Farklı bir PR'a ait CORS/oturum düzeltmesi, ilgisiz feature PR'ına tekrar dahil edilmez.
- .env, kullanıcı şifreleri, gerçek oturum çerezleri ve yerel DB dosyaları commit edilmez.
- git push --force, git reset --hard ve paylaşılan branch geçmişini değiştiren komutlar ekip onayı olmadan kullanılmaz.
- Aynı anda birkaç PR üzerinde çalışılırken, PR hedefleri, bağımlılıklar ve merge sonrası güncelleme açıkça belgelenir.
9. DİR / DREAD RİSK ANALİZİ
9.1. DİR nedir?
Emlak360 projesinde güvenlik ve kalite açısından önemli riskleri değerlendirmek için DREAD risk puanlama yöntemi kullanılacaktır.

DREAD beş kriterden oluşur:
Kriter	Açıklama
D — Damage Potential	Risk gerçekleştiğinde oluşabilecek zarar
R — Reproducibility	Problemin tekrarlanabilirliği
E — Exploitability	Zafiyetin istismar edilme kolaylığı
A — Affected Users	Etkilenen kullanıcılar
D — Discoverability	Zafiyetin keşfedilme kolaylığı


9.2. DİR skoru hesaplama
Her kriter 0–10 arasında puanlanır.

DİR skoru = (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5

Örnek:
Kriter	Puan
Damage	9
Reproducibility	8
Exploitability	7
Affected Users	8
Discoverability	8
DİR skoru	8,0


9.3. Risk seviyeleri
Proje içi değerlendirme için önerilen ölçek:
DİR skoru	Risk seviyesi
0–3,9	Düşük
4–6,9	Orta
7–10	Yüksek


Bu eşikler ekip tarafından kullanılan çalışma ölçeğidir; DREAD yönteminin evrensel ve zorunlu eşikleri değildir.
9.4. Emlak360 için başlangıç riskleri
Proje kapsamında başlangıç olarak yaklaşık 10 risk değerlendirilecektir.
No	Risk	İlgili modül
1	Yetkisiz kullanıcı erişimi	Backend / Kullanıcı Yönetimi
2	Şifre veya oturum bilgilerinin ele geçirilmesi	Backend / Kullanıcı Yönetimi
3	Başka kullanıcıya ait ilanın değiştirilmesi	İlan Yönetimi
4	Sahte veya yanıltıcı ilan oluşturulması	İlan Yönetimi
5	Arama ve filtreleme işlemlerinde hatalı veri işleme	İlan Listeleme
6	İlan detay bilgilerinin eksik veya hatalı gösterilmesi	İlan Detay
7	Başka kullanıcıların favori kayıtlarına yetkisiz erişim	Favoriler
8	İletişim isteklerinin spam amacıyla kullanılması	İletişim
9	Yönetici paneline yetkisiz erişim	Yönetici Paneli
10	API ve modüller arası entegrasyon hataları	Entegrasyon


Bu risklerin puanları henüz belirlenmiş değildir. Değerlendirme yapılmadan rastgele skor yazılmamalıdır.
9.5. DİR değerlendirmelerinde bulunması gerekenler
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

Risk analizleri docs/dir/ klasöründe tutulacaktır.
9.6. Ekip sorumlulukları
Her ekip üyesi kendi modülündeki riskleri değerlendirmekten sorumludur.

Asmin, kalite testleri kapsamında risk analizlerinin tutarlılığını ve testlerle ilişkisini kontrol edecektir.

Risklerin değerlendirilmesi ve önlemlerin uygulanması ilgili görev sahipleriyle birlikte yürütülecektir.
10. TEST VE KALİTE KURALLARI
Her geliştirici kendi geliştirdiği özellikleri test etmekle sorumludur.

Asmin, genel kalite testlerinin koordinasyonunu üstlenecektir.
Kontrol edilmesi gerekenler
- Geçerli girdilerle işlemlerin başarılı olması
- Hatalı girdilerin uygun biçimde reddedilmesi
- Yetkisiz erişimin engellenmesi
- Kullanıcıların yalnızca yetkili oldukları verilere erişmesi
- API hata durumlarının doğru yönetilmesi
- Frontend ve backend bağlantısının çalışması
- Modüller arası veri uyumluluğu
- Temel kullanıcı senaryolarının çalışması
Test sonuçları gerektiğinde docs/quality/, modüle ait backend/tests/ veya ortak tests/ altında belgelenmelidir.

Yönetici API otomasyon örneği: backend/tests/admin.test.js dosyası test/admin-api branch'inde, Node.js yerleşik node:test ve fetch kullanılarak hazırlanmıştır. Dört senaryo yerel ortamda başarıyla çalıştırılmıştır: (1) oturumsuz istek 401, (2) USER rolü 403, (3) ADMIN rolü 200, (4) ADMIN kullanıcı listesi veri alanları/rolleri. Testler gerçek backend'in http://localhost:5000 üzerinde çalışmasını ve yerel test hesaplarının ortam değişkenleriyle verilmesini gerektirir. Backend kapalı olduğunda ECONNREFUSED hatası beklenir; bu, otomatik olarak iş mantığı hatası anlamına gelmez. Test şifreleri kodda veya Git'te tutulmaz.

Testler Asmin'in fork'unda test/admin-api → feature/admin-panel hedefli PR #1 ile sunulmuştur. Yönetici Paneli PR #11 develop dalına birleştirildi. Fork'taki backend testleri ortak develop dalına henüz aktarılmadı.

Test edilmemiş bir özellik, yalnızca kodu yazıldığı için tamamlanmış sayılmamalıdır. Yerel test başarıları da tek başına ortak branch'e entegrasyon veya CI başarısını kanıtlamaz.
11. YAPILAN ÇALIŞMALAR — PROJE GELİŞTİRME KAYDI
BU BÖLÜM BÜTÜN EKİP ÜYELERİ TARAFINDAN GÜNCELLENECEKTİR.

Bu bölüm Emlak360 projesinin gelişim geçmişini gösterir.
Zorunlu güncelleme kuralları
1. Her ekip üyesi kendi görevini veya önemli bir geliştirme aşamasını tamamladığında bu bölüme yeni bir kayıt eklemelidir.
2. Daha önce başka ekip üyeleri tarafından yazılmış çalışmalar kesinlikle silinmemelidir.
3. Eski kayıtlar yeni kayıtlarla değiştirilmemelidir.
4. Yapılan işler tarih ve sorumlu kişi belirtilerek yazılmalıdır.
5. Tamamlanmamış işler tamamlanmış gibi gösterilmemelidir.
6. Diğer modülleri etkileyen değişiklikler açıkça belirtilmelidir.
7. İlgili GitHub Issue ve Pull Request bağlantıları eklenmelidir.
8. Her ekip üyesi ayrıca kendi görev dosyasındaki ilerleme ve teslim bölümünü güncellemelidir.
11.1. Zemzem — Backend ve Kullanıcı Yönetimi
Tarih: 18 Kasım 2026
Durum: Temel kullanıcı yönetimi özellikleri geliştirildi ve manuel testlerden geçti.

Yapılan çalışmalar:
- Node.js ve Express backend altyapısı oluşturuldu.
- PostgreSQL veritabanı bağlantısı hazırlandı.
- Prisma ORM yapılandırıldı.
- User ve Session modelleri oluşturuldu.
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
Gerçekleştirilen manuel testler:
Test	Sonuç
Kullanıcı kaydı	Başarılı
Kullanıcı girişi	Başarılı
Oturum kontrolü	Başarılı
Kullanıcı çıkışı	Başarılı
Çıkış sonrası erişimin engellenmesi	Başarılı
USER profil erişimi	Başarılı
USER'ın ADMIN endpoint'inden engellenmesi	Başarılı
ADMIN kullanıcı listeleme	Başarılı
Profil güncelleme	Başarılı
Şifre değiştirme	Başarılı
Eski oturumun iptal edilmesi	Başarılı
Yeni şifreyle giriş	Başarılı


Devam eden / kontrol edilmesi gereken işler:
- Otomatik testlerin hazırlanması
- CSRF koruması ve giriş hızı sınırlaması
- Frontend bağlantısı için CORS yapılandırması
- Paket güvenlik uyarılarının incelenmesi
- Kodların GitHub'a aktarılması ve Pull Request süreci
- Diğer modüllerin kullanacağı ortak yetkilendirme altyapısının entegrasyonu
Not: Yerel ortamda başarılı olan testler, GitHub'a aktarım veya üretim ortamı hazırlığının tamamlandığı anlamına gelmez.
11.2. Asmin — Yönetici Paneli ve Kalite Testleri (Yeni kayıt; önceki kayıtlar korunmuştur)
Tarih: 22–24 Kasım 2026
Durum: Yerel geliştirme ve ilgili manuel/otomatik testler tamamlandı; PR #9, #10 ve #11 develop dalına birleştirildi. İlan Denetimi, ilan modülü henüz hazır olmadığından beklemede.
İlgili Issue: QA-01 / emlak360 #5
İlgili Pull Request'ler: CORS #9, Header #10, Yönetici Paneli #11, otomatik test — kişisel fork PR #1.

Yapılan çalışmalar:
- feature/admin-panel: /admin rotasına Yönetici Paneli bağlandı; /api/auth/me üzerinden ADMIN rol kontrolü ile yetkisiz kullanıcı için 403 gösterimi eklendi.
- ADMIN kullanıcılarının /api/admin/users üzerinden kullanıcı listesini görmesi, ad/e-posta araması ve USER/ADMIN rol filtrelemesi uygulandı.
- Veritabanından gelen kullanıcı listesine göre toplam kullanıcı, yönetici ve normal kullanıcı istatistikleri gösterildi; yükleme ve kullanıcı listesinin hata durumları için arayüz kontrolleri eklendi.
- Yönetici Paneli için AdminPanel.css oluşturuldu.
- fix/backend-cors branch'inde frontend-backend CORS yapılandırması hazırlandı; ana modül PR'ından tekrar eden CORS farkı çıkarıldı.
- fix/frontend-auth-state branch'inde giriş/çıkış ve profil güncellemesi sonrasında Header'ın anlık kullanıcı durumunu izlemesi için değişiklik hazırlandı.
- test/admin-api branch'inde dört otomatik yetkilendirme ve veri yapısı API testi yazıldı.
Eklenen / değişen dosyalar:
- frontend/src/App.jsx (panel yönlendirmesi; #11)
- frontend/src/pages/AdminPanel.jsx ve frontend/src/pages/AdminPanel.css (#11)
- backend/src/app.js (yalnızca ilgili CORS PR #9; #11 farkından çıkarıldı)
- Header davranışı için frontend/src/App.jsx (#10; PR çakışmalarında entegrasyon kontrolü gerekli)
- backend/tests/admin.test.js (kişisel fork test PR #1)
API / veritabanı değişiklikleri: Yönetici Paneli mevcut GET /api/auth/me ve GET /api/admin/users endpoint'lerini kullanır. Panel çalışması için yeni tablo/migration eklenmedi. CORS uygulama yapılandırması ayrı PR'dır.

Yerel testler: ADMIN panelini görüntüleme; USER rolündeki Ali test hesabıyla /admin üzerinde 403; kullanıcı arama/rol filtreleme (üç senaryo); sayaçların veriye uygun gösterimi; backend erişilemezken oturum kontrolünün giriş sayfasına yönlendirmesi; API üzerinde 401, 403, 200 ve kullanıcı alan/rol doğrulaması — dört otomatik test başarılı. Frontend Header'da backend erişilemezken eski kullanıcı adının görünmesi ayrıca iyileştirme notudur; oturumun kesin sonlandığını kanıtlamaz.

Bilinen eksikler / bağımlılıklar: İlan Denetimi henüz uygulanmadı (ilan modülünü bekliyor). PR #9, #10 ve #11 develop dalına birleştirildi. Birlikte regresyon testi gerekir. Otomatik test PR'ının ortak develop branch'ine taşınması ve CI entegrasyonu beklenir. CORS ve Header değişiklikleri farklı branch'lerde olduğundan aynı App.jsx dosyasındaki entegrasyon ayrıca kontrol edilmelidir.

DİR / DREAD: Yönetici paneline yetkisiz erişim riski için test kanıtı oluştu; beş kriterin sayısal puanları henüz belgelenmediği için skor belirtilmez.
#### Nurşen — Kullanıcı Arayüzü ve Temel Sayfalar

**Tarih:** 21 Kasım 2026
**Durum:** Temel frontend uygulaması, oturum kontrolleri ve API bağlantıları hazırlandı.
**İlgili Issue:** UI-01
**İlgili Pull Request:** https://github.com/zemzemertkn/emlak360/pull/7

**Yapılan çalışmalar:**

- React + Vite frontend uygulaması oluşturuldu.
- Figma tasarımına uygun ana sayfa, header, footer ve liste kartları hazırlandı.
- Kayıt, giriş, profil ve şifre değiştirme ekranları oluşturuldu.
- `/api/auth/me` oturum kontrolü AuthProvider içinde bağlandı.
- Kayıt, giriş, çıkış, profil ve şifre API çağrıları eklendi.
- Giriş yapmamış kullanıcıların profil sayfasına giriş ekranına yönlendirilmesi sağlandı.
- Mobil, tablet ve masaüstü CSS duyarlı düzenleri hazırlandı.
- 404 ve ekip modülleri için placeholder yönlendirmeler eklendi.
- Vite proxy üzerinden geliştirme ortamı API yönlendirmesi eklendi.

**Eklenen veya değiştirilen dosyalar:**

- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `frontend/src/index.css`
- `frontend/vite.config.js`
- `frontend/src/App.test.jsx`
- `docs/dir/nursen.md`
- `docs/tasks/nursen.md`

**Yapılan testler ve sonuçları:**

- Üretim derleme kontrolü.
- Oxlint kaynak kontrolü.
- Ana sayfa, oturum yönlendirme ve eşleşmeyen şifre senaryoları için Vitest testleri.

**DİR risk değerlendirmeleri:**

- `docs/dir/nursen.md` dosyasında form doğrulama, oturum, mobil uyum ve API hata riskleri değerlendirildi.

**Bilinen eksikler:**

- Yerel backend ve PostgreSQL ortamı kurularak uçtan uca API testleri yapılmalıdır.
- Ekip modülleri (ilan, favori, iletişim ve yönetici) henüz ayrı görev sahipleri tarafından entegre edilmelidir.

11.3. Frontend oturum ve yönetici paneli entegrasyonu
Tarih: 25 Kasım 2026
Dal: integration/frontend-auth-admin (yerel)
Kaynak: Nurşen'in 9af48c5 commit'i ve develop 6a091df.

- Header, profil ve yönetici paneli sunucu oturumuna dayanan tek AuthProvider kullanır.
- Ortak API istemcisi çerezli istekleri, ağ hatalarını ve HTTP durumlarını yönetir. Yetkisiz oturum temizlenir. Şifre değiştirme 401 yanıtında mevcut şifrenin yanlış olması ile oturumun sona ermesi oturum sorgusuyla ayrılır.
- Başarısız çıkış isteğinde kullanıcı durumu korunur ve hata gösterilir. Başarılı şifre değişikliği ortak oturumu temizler.
- Asmin'in yönetici rotası, tablo, arama ve rol filtresi korunur. Backend rol kontrolleri ve veritabanı değişmedi.
- Nurşen'in frontend testleri ve ek regresyonlar entegrasyon dalındadır. Asmin'in fork'undaki backend otomasyon testi ayrı çalışmadır ve bu dalla aktarılmadı.
- Doğrulama: npm ci, lint ve üretim derlemesi başarılı. Vitest 4.1.12 ve Vite 8.3.8 ile 13 frontend testi geçti. Oturumlu senaryolar sahte API yanıtlarıyla çalıştırıldı.
- Vite geliştirme proxy'si üzerinden sağlık isteği 200, çerezsiz oturum ve admin istekleri 401 döndürdü. Canlı oturumlu USER ve ADMIN akışları çalıştırılmadı.

11.4. Diğer Ekip Üyelerinin Geliştirme Kayıtları
Yağız, Kübra ve Leyla geliştirmelerini tamamladıkça bu başlık altında kendi adlarıyla yeni kayıt oluşturacaktır. Asmin'in sonraki gelişmeleri de yeni tarihli kayıt olarak eklenir; mevcut kayıt değiştirilmez.

Yeni kayıt formatı:
[Ekip üyesi] — [Görev / Modül]
Tarih:
Durum:
İlgili Issue:
İlgili Pull Request:

Yapılan çalışmalar:
- ...
Eklenen veya değiştirilen dosyalar:
- ...
API veya veritabanı değişiklikleri:
- ...
Yapılan testler ve sonuçları:
- ...
DİR risk değerlendirmeleri:
- ...
Bilinen eksikler:
- ...
Diğer ekip üyelerinin dikkat etmesi gerekenler:
- ...
ÖNEMLİ: Bu şablon yeni kayıt eklemek içindir. Mevcut kayıtların silinmesi veya üzerine yazılması için kullanılmamalıdır.
12. YAPAY ZEKÂ ASİSTANLARI İÇİN ZORUNLU TALİMATLAR
Bu belge, Emlak360 üzerinde çalışan bütün ekip üyelerinin yapay zekâ asistanları tarafından ortak bağlam olarak kullanılacaktır.
Geliştirmeye başlamadan önce
Yapay zekâ asistanı:
1. Bu ortak rehberi okumalıdır.
2. Çalıştığı ekip üyesinin docs/tasks/ altındaki kişisel görev dosyasını okumalıdır.
3. git remote -v, git branch -a, git status --short ve açık PR'lara bakarak hangi branch ve fork'ta çalışıldığını doğrulamalı; develop üzerinden ilgili feature branch'i seçmelidir.
4. Mevcut kod ve klasör yapısını incelemelidir.
5. Görevin diğer modüllerle bağlantılarını belirlemelidir.
6. Önceden geliştirilmiş özellikleri yeniden yazmamalıdır.
7. Eksik bilgileri varsaymak yerine görev sahibine sormalıdır.
Geliştirme sırasında
- Kod değişikliklerini anlaşılır şekilde açıklamalıdır.
- Gereksiz dosya, klasör ve bağımlılık oluşturmamalıdır.
- Mevcut API sözleşmesine uyum sağlamalıdır.
- Başka bir ekip üyesinin sorumluluklarını izinsiz üstlenmemelidir.
- Ortak dosyalarda değişiklik yapılacaksa bunu önceden belirtmelidir.
- Güvenlik ve veri doğrulama kontrollerini dikkate almalıdır.
- Yapılan işlemleri test etmelidir.
- GitHub'a gizli bilgi gönderilmesini önlemelidir.
- main ve develop üzerinde doğrudan kod değiştirmemeli/push önermemelidir; PR için base: develop ve doğru upstream repository'yi seçmelidir.
- Kişisel fork'a push edilmesini ekip develop branch'ine merge edilmiş gibi anlatmamalıdır.
- Bağımlı PR'larda geçici hedef branch seçilmişse bunu açıkça açıklamalı ve entegrasyon sonrası düzeltmeyi takip etmelidir.
- DİR/DREAD risklerini ilgili modül kapsamında değerlendirmelidir.
Görev tamamlandığında
Yapay zekâ asistanı görev sahibine şu işlemlerde yardımcı olmalıdır:
1. Yapılan geliştirmeleri özetlemek.
2. Değiştirilen dosyaları listelemek.
3. Eklenen API endpoint'lerini belgelemek.
4. Veritabanı değişikliklerini açıklamak.
5. Test sonuçlarını yazmak.
6. DİR analizini güncellemek.
7. Kişisel görev dosyasının teslim bölümünü güncellemek.
8. Bu rehberin 11. bölümüne, önceki kayıtları silmeden yeni geliştirme kaydı eklemek.
9. İlgili GitHub Issue ve Pull Request bilgilerini, açık/merge edilmiş/kişisel fork ayrımıyla eklemek.
10. Diğer ekip üyelerinin entegrasyon için bilmesi gerekenleri belirtmek.
11. Test PR'ları ve bağımlılıkların develop branch'ine gerçekten taşındığını doğrulamak.
Yapay zekâ için temel kural
Emlak360 ortak bir ekip projesidir. Bir kişinin geliştirmesi diğer beş kişinin çalışmasını bozmamalıdır. Yapay zekâ asistanı yalnızca kod üretmeye değil, ekip içi uyuma, kaliteye, test edilebilirliğe ve sürdürülebilirliğe de odaklanmalıdır.
13. PROJENİN GÜNCEL DURUMUNU KONTROL ETME
Bu belge yaşayan bir proje rehberidir.

Her geliştirme aşamasında aşağıdaki bilgiler kontrol edilmelidir:
- GitHub'daki güncel branch'ler, özellikle develop ve feature branch'lerin ayrımı
- Açık ve tamamlanan Issues
- Açık ve birleştirilen Pull Requests (hedef depo / hedef branch dahil)
- Güncel Prisma şeması
- Mevcut API endpoint'leri
- docs/tasks/ altındaki kişisel görev dosyaları
- Bu belgenin 11. bölümündeki geliştirme kayıtları
Belge ile gerçek kod arasında farklılık varsa gerçek kod ve GitHub geçmişi kontrol edilerek belge güncellenmelidir.

Hiçbir ekip üyesi, yalnızca bu rehberde yazdığı için bir özelliğin çalıştığını varsaymamalıdır.
14. SONUÇ VE ORTAK ÇALIŞMA İLKESİ
Emlak360 altı kişilik bir ekip projesidir.

Her ekip üyesi kendi sorumluluk alanındaki geliştirmeleri gerçekleştirir, test eder, belgeler ve GitHub üzerinden paylaşır.

Projenin başarılı kabul edilebilmesi için modüllerin ayrı ayrı çalışması yeterli değildir. Kullanıcı arayüzü, backend, ilan yönetimi, arama, favoriler, iletişim ve yönetici panelinin birlikte çalışması gerekir.

Temel hedefimiz: Çalışan, güvenli, test edilebilir, belgelenmiş ve ekip tarafından birlikte geliştirilebilir bir Emlak360 uygulaması oluşturmak.
