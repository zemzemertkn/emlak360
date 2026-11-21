# ASMİN — YÖNETİCİ PANELİ VE KALİTE TESTLERİ

**Sorumlu:** Asmin  
**Görev:** Yönetici Paneli ve Kalite Testleri  
**Önerilen branch:** `feature/admin-panel`  
**Çalışma alanı:** `backend/`, `frontend/`, `tests/`, `docs/quality/` ve `docs/dir/` içindeki ilgili dosyalar

## 1. Görevin Tanımı

Emlak360 platformunda yöneticilerin kullanıcıları ve ilanları denetleyebileceği bir yönetici paneli geliştirmek.

Ayrıca bütün ekip üyelerinin hazırladığı modüllerin doğru, güvenli ve birbiriyle uyumlu çalıştığını doğrulamak için yazılım kalite ve test süreçlerini koordine etmek.

Asmin, kendi yönetici panelinin geliştirilmesinden ve genel test sürecinin takibinden sorumludur. Diğer ekip üyeleri kendi modüllerinin testlerini gerçekleştirmeye devam eder.

## 2. Yapılacak İşler

### A. Yönetici paneli altyapısı

- [ ] Yalnızca ADMIN rolündeki kullanıcıların erişebileceği yönetici paneli oluşturmak.
- [ ] Yönetici panelinin temel sayfa düzenini hazırlamak.
- [ ] Yönetici menüsü ve navigasyon alanı geliştirmek.
- [ ] Yönetici panelinde kullanıcı ve ilan yönetimi bölümleri oluşturmak.
- [ ] Yetkisiz erişimlerde uygun hata veya yönlendirme göstermek.
- [ ] Paneli mobil ve masaüstü ekranlarla uyumlu hâle getirmek.

### B. Kullanıcı yönetimi

- [ ] Zemzem'in geliştirdiği `GET /api/admin/users` endpoint'ini kullanmak.
- [ ] Kullanıcıları tablo veya liste hâlinde görüntülemek.
- [ ] Kullanıcı adı, e-posta, rol ve kayıt tarihi gibi bilgileri göstermek.
- [ ] Kullanıcıları arama ve filtreleme özelliği eklemek.
- [ ] Kullanıcı detaylarını görüntülemek.
- [ ] Yönetici tarafından yapılabilecek kullanıcı işlemlerini ekip ile belirlemek.
- [ ] Gerekli görülürse kullanıcı hesabını pasifleştirme veya yeniden etkinleştirme özelliğini geliştirmek.
- [ ] Kritik yönetici işlemlerinde onay mekanizması kullanmak.

**Not:** Hesap pasifleştirme gibi özellikler henüz mevcut backend'de bulunmamaktadır. Uygulanmadan önce Zemzem ile API ve veritabanı değişiklikleri kararlaştırılmalıdır.

### C. İlan denetimi

- [ ] Yönetici için ilanları görüntüleme ekranı hazırlamak.
- [ ] İlanları durumlarına göre filtrelemek.
- [ ] İlan detaylarını yönetici panelinden inceleyebilmek.
- [ ] Uygunsuz veya yanıltıcı ilanların denetlenmesini sağlayacak yapı geliştirmek.
- [ ] Gerekli görülürse ilanı yayından kaldırma ve yeniden yayınlama işlemlerini eklemek.
- [ ] İlan denetimi işlemlerini yalnızca ADMIN rolüne açmak.
- [ ] Yönetici işlemlerinin sonuçlarını kullanıcıya göstermek.

İlan durumları ve yönetici müdahalesinin veritabanında nasıl tutulacağı Yağız ile kararlaştırılmalıdır.

### D. Yönetici paneli özet ekranı

- [ ] Toplam kullanıcı sayısını göstermek.
- [ ] Toplam ilan sayısını göstermek.
- [ ] Aktif ve pasif ilan sayılarını göstermek (bu durumlar veri modelinde destekleniyorsa).
- [ ] Temel istatistik kartları hazırlamak.
- [ ] Verileri gerçek API sonuçlarından almak.

**Önemli:** Gerçek veriler yerine sabit veya uydurma istatistikler kullanılmamalıdır.

### E. Kalite ve test planlaması

- [ ] Emlak360 için genel test planı oluşturmak.
- [ ] Her modülün kabul kriterlerini incelemek.
- [ ] Test senaryolarını belirlemek.
- [ ] Fonksiyonel testleri koordine etmek.
- [ ] Yetkilendirme ve güvenlik testlerini planlamak.
- [ ] Frontend ve backend entegrasyon testlerini takip etmek.
- [ ] Mobil uyumluluk ve temel kullanılabilirlik kontrolleri yapmak.
- [ ] Bulunan hataları GitHub Issues üzerinden kaydetmek.
- [ ] Hataların düzeltilip düzeltilmediğini tekrar test etmek.

### F. DİR/DREAD risk değerlendirmesi

- [ ] Yönetici panelinin güvenlik risklerini belirlemek.
- [ ] ADMIN yetkisinin kötüye kullanılması veya yetkisiz erişim riskini değerlendirmek.
- [ ] Ekip üyelerinin hazırladığı DİR analizlerini kontrol etmek.
- [ ] Risk puanlarının gerekçelerinin yazıldığını doğrulamak.
- [ ] Yaklaşık 10 riskten oluşan ortak değerlendirme kapsamını ekip ile takip etmek.
- [ ] Yüksek riskli maddelerin öncelikli ele alınmasını sağlamak.
- [ ] Risk analizlerini `docs/dir/` altında düzenli tutmak.

## 3. Görev Nasıl Yapılacak?

### Adım 1 — Mevcut sistemi incele

Öncelikle `docs/AI_REHBER.md` dosyasını ve kendi görev dosyanı oku.

Zemzem'in geliştirdiği oturum ve ADMIN yetkilendirme sistemini incele.

Mevcut `GET /api/admin/users` endpoint'ini kullan.

**Yeni bir kullanıcı giriş sistemi veya ayrı bir ADMIN kimlik doğrulama sistemi oluşturma.**

### Adım 2 — Yönetici panelini oluştur

Nurşen'in hazırladığı ortak frontend tasarımını kullanarak yönetici panelinin temel sayfa düzenini oluştur.

Panelde şu alanlar bulunabilir:

- Genel Bakış
- Kullanıcı Yönetimi
- İlan Denetimi

Yönetici paneli yalnızca ADMIN rolündeki kullanıcılar tarafından kullanılabilmelidir.

Frontend'de menü bağlantısını gizlemek tek başına güvenlik sağlamaz. Backend'deki bütün yönetici işlemleri ayrıca ADMIN yetkisiyle korunmalıdır.

### Adım 3 — Kullanıcı yönetimini geliştir

Önce mevcut kullanıcı listeleme API'sini arayüze bağla.

Kullanıcıları listele, ara ve filtrele.

Ek yönetici işlemleri gerekiyorsa Zemzem ile API sözleşmesini belirle. Mevcut kullanıcı yönetimi altyapısını değiştirmeden gerekli yönetici özelliklerini geliştir.

### Adım 4 — İlan denetimini geliştir

Yağız'ın ilan modelini ve Kübra'nın ilan görüntüleme altyapısını incele.

Yöneticilerin ilanları denetleyebileceği bir ekran oluştur.

İlan yayından kaldırma gibi işlemler için gerekli API endpoint'lerini ilgili modül sahipleriyle koordine et.

Normal kullanıcıların ilan oluşturma, düzenleme ve silme işlemlerini yeniden geliştirme.

### Adım 5 — Test planını hazırla

Her ekip üyesinin görev dosyasındaki kabul kriterlerini incele.

Modül bazında test senaryoları oluştur:

| Modül | Test odağı |
|---|---|
| Zemzem | Kayıt, giriş, oturum, profil ve yetkilendirme |
| Nurşen | Temel sayfalar, formlar ve mobil uyumluluk |
| Yağız | İlan oluşturma, düzenleme, silme ve sahiplik kontrolü |
| Kübra | Listeleme, arama, filtreleme ve detay |
| Asmin | Yönetici paneli ve ADMIN yetkileri |
| Leyla | Favoriler, iletişim ve entegrasyon |

Her modül sahibi kendi testlerini gerçekleştirir. Asmin test sonuçlarını kontrol eder ve genel kalite durumunu takip eder.

### Adım 6 — Hataları kaydet ve takip et

Test sırasında bulunan hatalar için GitHub Issue oluştur.

Her hata kaydında:

- Hatanın açıklaması
- Tekrarlama adımları
- Beklenen sonuç
- Gerçekleşen sonuç
- Önem derecesi
- İlgili modül ve sorumlu kişi

bulunmalıdır.

Hata düzeltildikten sonra aynı senaryo tekrar test edilmelidir.

### Adım 7 — DİR risk analizlerini koordine et

DREAD kriterlerini kullan:

- Damage Potential
- Reproducibility
- Exploitability
- Affected Users
- Discoverability

Her kriter 0–10 arasında puanlanır.

**DİR skoru = Beş kriterin toplamı / 5**

Asmin kendi yönetici paneli risklerini puanlar. Diğer ekip üyelerinin risk puanlarını ise gerekçeler, önlemler ve testlerle tutarlılık açısından kontrol eder.

Diğer kişilerin risklerini onların yerine rastgele puanlamaz.

### Adım 8 — Entegrasyon ve kabul testlerini gerçekleştir

Modüller birleştirildikçe temel kullanıcı senaryolarını uçtan uca test et.

Örnek senaryo:

1. Kullanıcı kayıt olur.
2. Sisteme giriş yapar.
3. Yeni ilan oluşturur.
4. İlanı listede görüntüler.
5. İlan detayını açar.
6. Favorilerine ekler.
7. İlan sahibine iletişim isteği gönderir.
8. Yönetici ilanları denetler.

Bu senaryo yalnızca ilgili modüller hazır olduğunda uçtan uca test edilebilir.

### Adım 9 — GitHub'a teslim et

Yönetici paneli geliştirmelerini kendi branch'inde yap.

Test sonuçlarını ve tespit edilen hataları belgele.

Pull Request oluştur ve kod incelemesinden sonra birleştirme sürecini tamamla.

## 4. Diğer Ekip Üyeleriyle İş Birliği

| Kişi | Birlikte yapılacak çalışma |
|---|---|
| **Zemzem** | ADMIN yetkilendirmesi, kullanıcı API'leri ve güvenlik testleri |
| **Nurşen** | Yönetici panelinin ortak frontend tasarımına uyumu |
| **Yağız** | İlan durumları, ilan denetimi ve yönetici işlemleri |
| **Kübra** | Yönetici panelinde ilan listeleme ve detay bilgilerinin kullanılması |
| **Leyla** | Favori, iletişim ve modüller arası entegrasyon testleri |

### Görev sınırları

Asmin'in sorumluluğu yönetici panelini geliştirmek ve genel kalite testlerini koordine etmektir.

- Kullanıcı kayıt ve giriş sistemini Zemzem geliştirir.
- Genel frontend tasarımını Nurşen hazırlar.
- Normal kullanıcı ilan yönetimini Yağız geliştirir.
- İlan arama, listeleme ve detay işlemlerini Kübra geliştirir.
- Favori ve iletişim sistemini Leyla geliştirir.

**Asmin diğer modüllerde bulunan hataları ilgili kişilere bildirir; bütün hataları tek başına düzeltmekle sorumlu değildir.**

## 5. Görevin Kabul Kriterleri

- [ ] Yönetici paneli çalışıyor.
- [ ] Yalnızca ADMIN kullanıcıları yönetici işlemlerine erişebiliyor.
- [ ] Kullanıcılar yönetici panelinde listelenebiliyor.
- [ ] Kullanıcı arama ve filtreleme işlemleri çalışıyor.
- [ ] İlan denetim ekranı çalışıyor.
- [ ] Kararlaştırılan ilan denetimi işlemleri doğru yetkilerle gerçekleştiriliyor.
- [ ] Genel bakış istatistikleri gerçek verilerden alınıyor.
- [ ] Yönetici paneli mobil uyumlu.
- [ ] Genel test planı hazırlandı.
- [ ] Modül test sonuçları kontrol edildi.
- [ ] Bulunan hatalar GitHub Issues üzerinden takip edildi.
- [ ] Kritik entegrasyon senaryoları test edildi.
- [ ] Yönetici paneline ait DİR analizi tamamlandı.
- [ ] Ekip genelindeki DİR analizleri kontrol edildi.
- [ ] Kalite sonuçları belgelendi.
- [ ] Pull Request incelemesi tamamlandı.

## 6. Görev Tamamlandığında

Asmin, kendi yapay zekâ asistanıyla birlikte:

1. Yönetici panelinin özelliklerini ve yetkilendirme kontrollerini test eder.
2. Tamamlanan yönetici API'lerini ve ekranlarını belgeler.
3. Genel test sonuçlarını `docs/quality/` altında düzenler.
4. Açık hataları ve test edilmemiş özellikleri açıkça belirtir.
5. DİR risk değerlendirmelerini kontrol eder.
6. GitHub Issue ve Pull Request bağlantılarını kaydeder.
7. `docs/AI_REHBER.md` içindeki **Yapılan Çalışmalar** bölümüne kendi geliştirme kaydını ekler.
8. Önceki ekip üyelerinin kayıtlarını silmez.
9. Kendi görev dosyasına yapılan işleri, test sonuçlarını ve bilinen eksikleri ekler.
10. Ekip üyelerine genel kalite ve test durumunu bildirir.

**Teslim koşulu:** ADMIN kullanıcılarının kullanıcıları ve ilanları denetleyebildiği çalışan bir yönetici paneli bulunmalı; Emlak360'ın modül testleri, tespit edilen hataları ve DİR riskleri düzenli şekilde belgelenmiş olmalıdır.
