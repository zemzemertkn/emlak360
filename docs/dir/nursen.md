# Nurşen — Kullanıcı Arayüzü DİR/DREAD Risk Analizi

**Tarih:** 21 Kasım 2026  
**Sorumlu:** Nurşen Akay  
**Kapsam:** Ana sayfa, kayıt, giriş, oturum kontrolü, profil ve şifre değiştirme arayüzleri

## Puanlama

DIR/DREAD skoru her risk için 1-10 aralığında verilmiştir:

| Risk | Damage | Reproducibility | Exploitability | Affected Users | Discoverability | Ortalama | Seviye |
|---|---:|---:|---:|---:|---:|---:|---|
| Hatalı form doğrulaması | 5 | 7 | 6 | 7 | 7 | 6.4 | Orta |
| Oturum durumunun yanlış gösterilmesi | 8 | 6 | 5 | 8 | 6 | 6.6 | Yüksek |
| Profil veya şifre bilgilerinin yanlış iletimi | 8 | 5 | 5 | 6 | 5 | 5.8 | Orta |
| Mobilde temel işlemlerin kullanılamaması | 6 | 7 | 3 | 8 | 8 | 6.4 | Orta |
| API hata durumunun kullanıcıya anlaşılmaz olması | 5 | 7 | 3 | 7 | 8 | 6.0 | Orta |

## Kontrol ve azaltma

- Kayıt ve şifre alanlarında minimum uzunluk, zorunlu alan ve şifre tekrar kontrolleri uygulanır.
- Oturum durumu `/api/auth/me` ile doğrulanır.
- Profil ve hesap işlemlerinde `credentials: 'include'` kullanılır.
- Profil sayfası giriş yapmamış kullanıcıları `/giris` adresine yönlendirir.
- Şifre değiştirme sonrası oturum arayüzden kapatılır ve kullanıcı tekrar girişe yönlendirilir.
- Mobil, tablet ve masaüstü görünümü için Vite uygulamasında CSS duyarlı düzenler eklenir.
- Backend hata mesajları kullanıcıya anlaşılır bildirimlerde gösterilir.
