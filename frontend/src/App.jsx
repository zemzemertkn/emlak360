import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import {
  Bath,
  BedDouble,
  Building2,
  ChevronDown,
  Heart,
  Home,
  LayoutGrid,
  LockKeyhole,
  LogOut,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Square,
  UserRound,
  X,
} from 'lucide-react'
import './App.css'

const API_URL = 'http://localhost:5000'

const listings = [
  {
    id: 1,
    title: 'Deniz Manzaralı Modern Daire',
    location: 'Marmaris, Muğla',
    price: '7.250.000 TL',
    rooms: '3+1',
    area: '155 m²',
    baths: 2,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    title: 'Şehir Merkezinde Lüks Villa',
    location: 'Beşiktaş, İstanbul',
    price: '32.000.000 TL',
    rooms: '5+2',
    area: '420 m²',
    baths: 4,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    title: 'Sakin Bahçe Katı Daire',
    location: 'Çankaya, Ankara',
    price: '5.780.000 TL',
    rooms: '2+1',
    area: '118 m²',
    baths: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
  },
]

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Emlak360 ana sayfa">
      <span className="brand-mark"><Building2 size={19} strokeWidth={2.2} /></span>
      <span>Emlak<span>360</span></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('emlak360_user') || 'null')
  })

  useEffect(() => {
    const updateUser = () => {
      setUser(JSON.parse(localStorage.getItem('emlak360_user') || 'null'))
    }

    window.addEventListener('emlak360-auth-changed', updateUser)

    return () => {
      window.removeEventListener('emlak360-auth-changed', updateUser)
    }
  }, [])

  const logout = async () => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' })
    } catch {
      // Tarayıcı sunucuyla görüşemese bile oturumu yerel arayüzden kapatır.
    }
    localStorage.removeItem('emlak360_user')
    window.dispatchEvent(new Event('emlak360-auth-changed'))
    window.location.href = '/'
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Menüyü aç">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Ana navigasyon">
          <NavLink to="/ilanlar">İlanlar</NavLink>
          <Link to="/ilan-ver">İlan Ver</Link>
          {user && <Link to="/favoriler">Favoriler</Link>}
          {user?.role === 'ADMIN' && <Link to="/admin">Yönetici Paneli</Link>}
          {user ? (
            <div className="nav-user">
              <Link className="profile-link" to="/profil"><UserRound size={17} /> {user.name}</Link>
              <button className="logout-button" type="button" onClick={logout} title="Çıkış yap">
                <LogOut size={17} />
              </button>
            </div>
          ) : (
            <>
              <Link className="button button-ghost" to="/giris">Giriş Yap</Link>
              <Link className="button button-primary" to="/kayit">Kayıt Ol</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Hayalindeki evi güvenle bulmak için Emlak360 yanında.</p>
        </div>
        <div>
          <strong>Keşfet</strong>
          <Link to="/ilanlar">Tüm İlanlar</Link>
          <Link to="/ilan-ver">İlan Ver</Link>
        </div>
        <div>
          <strong>Hesap</strong>
          <Link to="/giris">Giriş Yap</Link>
          <Link to="/kayit">Kayıt Ol</Link>
        </div>
        <div>
          <strong>Destek</strong>
          <a href="mailto:destek@emlak360.com">İletişim</a>
          <span>Destek Merkezi</span>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Emlak360. Tüm hakları saklıdır.</div>
    </footer>
  )
}

function ListingCard({ listing }) {
  const [favorite, setFavorite] = useState(false)
  return (
    <article className="listing-card">
      <div className="listing-image-wrap">
        <img src={listing.image} alt={listing.title} />
        <button
          className={favorite ? 'favorite-button active' : 'favorite-button'}
          type="button"
          onClick={() => setFavorite(!favorite)}
          aria-label="Favorilere ekle"
        >
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="listing-body">
        <div className="listing-price">{listing.price}</div>
        <h3>{listing.title}</h3>
        <p><MapPin size={15} /> {listing.location}</p>
        <div className="listing-meta">
          <span><BedDouble size={16} /> {listing.rooms}</span>
          <span><Square size={16} /> {listing.area}</span>
          <span><Bath size={16} /> {listing.baths}</span>
        </div>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Güvenli gayrimenkul deneyimi</span>
            <h1>Hayalindeki evi<br /><em>birlikte bulalım</em></h1>
            <p>Binlerce güncel ilan arasından sana en uygun evi kolayca keşfet.</p>
          </div>
          <div className="hero-image" aria-label="Modern villa">
            <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85" alt="Modern villa" />
          </div>
        </div>
        <div className="container search-panel">
          <label>
            <span>Konum</span>
            <div><MapPin size={17} /><input placeholder="Şehir veya ilçe ara" /></div>
          </label>
          <label>
            <span>Gayrimenkul</span>
            <div><Home size={17} /><select defaultValue=""><option value="" disabled>Türünü seç</option><option>Daire</option><option>Villa</option><option>Arsa</option></select><ChevronDown size={16} /></div>
          </label>
          <label>
            <span>Fiyat aralığı</span>
            <div><span className="currency">TL</span><select defaultValue=""><option value="" disabled>Fiyatı seç</option><option>1.000.000 - 5.000.000 TL</option><option>5.000.000 - 10.000.000 TL</option><option>10.000.000 TL üzeri</option></select><ChevronDown size={16} /></div>
          </label>
          <Link className="search-button" to="/ilanlar"><Search size={18} /> İlan Ara</Link>
        </div>
      </section>

      <section className="container listing-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Yeni fırsatlar</span>
            <h2>Öne çıkan ilanlar</h2>
          </div>
          <Link className="text-link" to="/ilanlar">Tüm ilanları gör <span>→</span></Link>
        </div>
        <div className="listing-grid">
          {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
        </div>
      </section>

      <section className="container trust-section">
        <div><span><ShieldCheck /></span><h3>Güvenli süreç</h3><p>Onaylı ilanlar ve şeffaf bilgiler.</p></div>
        <div><span><Search /></span><h3>Kolay arama</h3><p>İhtiyacına göre hızlı filtreleme.</p></div>
        <div><span><Building2 /></span><h3>Geniş seçenek</h3><p>Her bütçeye uygun gayrimenkul.</p></div>
      </section>
    </>
  )
}

function AuthLayout({ title, subtitle, children, side }) {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-form-side">
          <Link className="brand auth-brand" to="/"><span className="brand-mark"><Building2 size={19} /></span><span>Emlak<span>360</span></span></Link>
          <div className="auth-form-wrap">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
          </div>
        </div>
        <div className="auth-image-side">
          <img src={side || 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85'} alt="Emlak360" />
        </div>
      </div>
    </main>
  )
}

function RegisterPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    const form = new FormData(event.currentTarget)
    if (form.get('password') !== form.get('passwordAgain')) {
      setError('Şifreler aynı olmalıdır.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.get('name'), email: form.get('email'), password: form.get('password') }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Kayıt yapılamadı.')
      navigate('/giris')
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Tekrar hoş geldiniz" subtitle="Yeni bir Emlak360 hesabı oluştur." side="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85">
      <form className="auth-form" onSubmit={submit}>
        {error && <div className="alert error">{error}</div>}
        <label>Ad soyad<input name="name" type="text" placeholder="Adını ve soyadını gir" required minLength={2} /></label>
        <label>E-posta<input name="email" type="email" placeholder="ornek@mail.com" required /></label>
        <label>Şifre<div className="password-input"><LockKeyhole size={16} /><input name="password" type="password" placeholder="En az 8 karakter" required minLength={8} /></div></label>
        <label>Şifre tekrar<div className="password-input"><LockKeyhole size={16} /><input name="passwordAgain" type="password" placeholder="Şifreni tekrar gir" required minLength={8} /></div></label>
        <button className="auth-submit" type="submit" disabled={loading}>{loading ? 'Kaydediliyor...' : 'Kayıt Ol'}</button>
      </form>
      <p className="auth-switch">Zaten hesabın var mı? <Link to="/giris">Giriş yap</Link></p>
    </AuthLayout>
  )
}

function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    const form = new FormData(event.currentTarget)
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: form.get('email'), password: form.get('password') }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Giriş yapılamadı.')
      localStorage.setItem('emlak360_user', JSON.stringify(data.user))
      window.dispatchEvent(new Event('emlak360-auth-changed'))
      navigate('/profil')
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Tekrar hoş geldin" subtitle="Emlak360 hesabına giriş yap." >
      <form className="auth-form" onSubmit={submit}>
        {error && <div className="alert error">{error}</div>}
        <label>E-posta<input name="email" type="email" placeholder="ornek@mail.com" required /></label>
        <label>Şifre<div className="password-input"><LockKeyhole size={16} /><input name="password" type="password" placeholder="Şifreni gir" required /></div></label>
        <button className="auth-submit" type="submit" disabled={loading}>{loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}</button>
      </form>
      <p className="auth-switch">Hesabın yok mu? <Link to="/kayit">Hemen kayıt ol</Link></p>
    </AuthLayout>
  )
}

function ProfilePage() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('emlak360_user') || 'null')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  if (!user) return <Navigate to="/giris" replace />

  const updateProfile = async (event) => {
    event.preventDefault()
    setMessage('')
    setError('')
    const name = new FormData(event.currentTarget).get('name')
    try {
      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Profil güncellenemedi.')
      localStorage.setItem('emlak360_user', JSON.stringify(data.user))
      window.dispatchEvent(new Event('emlak360-auth-changed'))
      setMessage(data.message)
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  const changePassword = async (event) => {
    event.preventDefault()
    setMessage('')
    setError('')
    const form = new FormData(event.currentTarget)
    try {
      const response = await fetch(`${API_URL}/api/users/password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          currentPassword: form.get('currentPassword'),
          newPassword: form.get('newPassword'),
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Şifre değiştirilemedi.')
      localStorage.removeItem('emlak360_user')
      setMessage(data.message)
      navigate('/giris')
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <main className="profile-page container">
      <aside className="profile-sidebar">
        <div className="avatar">{user.name?.slice(0, 1).toUpperCase()}</div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <nav>
          <a className="active" href="#profile"><UserRound size={18} /> Profil bilgileri</a>
          <a href="#password"><LockKeyhole size={18} /> Şifre değiştir</a>
        </nav>
      </aside>
      <div className="profile-content">
        {message && <div className="alert success">{message}</div>}
        {error && <div className="alert error">{error}</div>}
        <section id="profile" className="profile-card">
          <h2>Profil bilgileri</h2>
          <form onSubmit={updateProfile}>
            <label>Ad soyad<input name="name" defaultValue={user.name} required /></label>
            <label>E-posta<input value={user.email} readOnly /></label>
            <button className="small-primary" type="submit">Profili kaydet</button>
          </form>
        </section>
        <section id="password" className="profile-card">
          <h2>Şifre değiştir</h2>
          <form onSubmit={changePassword}>
            <label>Mevcut şifre<input name="currentPassword" type="password" required /></label>
            <label>Yeni şifre<input name="newPassword" type="password" minLength={8} required /></label>
            <button className="small-primary" type="submit">Şifreyi kaydet</button>
          </form>
        </section>
      </div>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="not-found">
      <div>
        <span>404</span>
        <h1>Aradığın sayfa bulunamadı</h1>
        <p>Adres değiştirmiş veya sayfa kaldırılmış olabilir.</p>
        <Link className="button button-primary" to="/">Ana sayfaya dön</Link>
      </div>
      <div className="not-found-image"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85" alt="Emlak360" /></div>
    </main>
  )
}

function PlaceholderPage({ title }) {
  return (
    <main className="placeholder-page container">
      <LayoutGrid size={40} />
      <h1>{title}</h1>
      <p>Bu sayfanın içeriğini ilgili ekip üyesi geliştirecek.</p>
      <Link className="button button-primary" to="/">Ana sayfaya dön</Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kayit" element={<RegisterPage />} />
        <Route path="/giris" element={<LoginPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/ilanlar" element={<PlaceholderPage title="İlanlar" />} />
        <Route path="/ilan-ver" element={<PlaceholderPage title="İlan Ver" />} />
        <Route path="/favoriler" element={<PlaceholderPage title="Favoriler" />} />
        <Route path="/admin" element={<PlaceholderPage title="Yönetici Paneli" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
