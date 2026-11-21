# API Sözleşmesi — v0.1 (Yerelde doğrulanan kısım)
Base URL geliştirmede `http://localhost:5000`. JSON. Oturum cookie: `emlak360_session` (HttpOnly, SameSite=Lax; prod HTTPS'te Secure). Korumalı isteklerde çerez gerekir. Yetki hataları 401 (oturum yok/geçersiz), 403 (rol yetersiz). Zod hataları 400. Başka kodlar: 409 (kayıtlı e-posta), 500 (sunucu hatası).

| Method | Path | Auth | Request | Başarılı sonuç |
|---|---|---|---|---|
| GET | /api/health | Hayır | — | `{status:"ok"}` |
| POST | /api/auth/register | Hayır | `{name,email,password}` | 201, `{message,user}` |
| POST | /api/auth/login | Hayır | `{email,password}` | 200, `{message,user}` + cookie |
| GET | /api/auth/me | Evet | — | `{user}` |
| POST | /api/auth/logout | İsteğe bağlı | — | `{message}` |
| GET | /api/users/profile | Evet | — | `{user}` |
| PATCH | /api/users/profile | Evet | `{name}` | `{message,user}` |
| PATCH | /api/users/password | Evet | `{currentPassword,newPassword}` | `{message}` + oturumların iptali |
| GET | /api/admin/users | ADMIN | — | `{users:[...]}` |

`user` güvenli alanlar: `id,name,email,role` (bazı yanıtlar `createdAt` içerir); **passwordHash asla dönmez**. İlan, favori, iletişim API'leri henüz tanımlı değildir; ilgili ekip üyeleri ortak sözleşmeyi PR üzerinden güncelleyerek belirleyecek.

## Yeni endpoint tasarımı
İlanlar: Yağız/Kübra birlikte veri modeli ve alan adlarını kararlaştırsın. Favoriler ve iletişim: Leyla, ilan ID ve sahiplik ilişkilerini Yağız/Kübra ile netleştirsin. Admin işlemleri: Asmin, mevcut `requireAuth`/`requireAdmin` mantığını kullansın. `app.js` içindeki middleware'i doğrudan ayrı route dosyasından import etmek döngüsel bağımlılık yaratabilir; route ayrıştırması yapılacaksa ortak middleware modülünü önce ekipçe kararlaştırın.
