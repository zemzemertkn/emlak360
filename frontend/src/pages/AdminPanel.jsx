
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import './AdminPanel.css'
import { ShieldCheck, Users, Building2 } from 'lucide-react'

const API_URL = 'http://localhost:5000'

export default function AdminPanel() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
const [usersLoading, setUsersLoading] = useState(false)
const [usersError, setUsersError] = useState('')
const [search, setSearch] = useState('')
const [roleFilter, setRoleFilter] = useState('ALL')

const filteredUsers = users.filter((item) => {
  const keyword = search.toLocaleLowerCase('tr-TR').trim()

  const matchesSearch =
    item.name.toLocaleLowerCase('tr-TR').includes(keyword) ||
    item.email.toLocaleLowerCase('tr-TR').includes(keyword)

  const matchesRole =
    roleFilter === 'ALL' || item.role === roleFilter

  return matchesSearch && matchesRole
})

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          credentials: 'include',
        })

        if (!response.ok) throw new Error('Oturum geçersiz')

        const data = await response.json()
        setUser(data.user)
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAdmin()
  }, [])
   
  useEffect(() => {
  if (user?.role !== 'ADMIN') return

  async function fetchUsers() {
    setUsersLoading(true)
    setUsersError('')

    try {
      const response = await fetch(`${API_URL}/api/admin/users`, {
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Kullanıcılar getirilemedi.')
      }

      const data = await response.json()
      setUsers(data.users)
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersLoading(false)
    }
  }

  fetchUsers()
}, [user])

  if (loading) {
    return <main className="container"><p>Yetki kontrol ediliyor...</p></main>
  }

  if (!user) return <Navigate to="/giris" replace />

  if (user.role !== 'ADMIN') {
    return (
      <main className="container">
        <h1>403 - Yetkisiz erişim</h1>
        <p>Bu sayfayı görüntülemek için yönetici yetkisi gerekiyor.</p>
      </main>
    )
  }

  return (
   <main className="container admin-panel">
      <h1><ShieldCheck size={26} /> Yönetici Paneli</h1>
      <p>Hoş geldiniz, {user.name}</p>
      
<div className="admin-stats">
  <div className="admin-stat-card">
    <span>Toplam Kullanıcı</span>
    <strong>{usersLoading ? '...' : users.length}</strong>
  </div>
  {usersError && (
  <p role="alert" className="admin-error">
    Kullanıcı istatistikleri yüklenemedi: {usersError}
  </p>
)}
  <div className="admin-stat-card">
  <span>Yönetici Sayısı</span>
  <strong>
    {usersLoading || usersError
      ? '—'
      : users.filter((item) => item.role === 'ADMIN').length}
  </strong>
</div>
        

  <div className="admin-stat-card">
    <span>Normal Kullanıcı</span>
    <strong>
      {usersLoading
        ? '...'
        : users.filter((item) => item.role === 'USER').length}
    </strong>
  </div>
</div>

      
<section className="admin-card">
  <h2><Users size={22} /> Kullanıcı Yönetimi</h2>
  
<div className="admin-filters">
  <input
    type="search"
    placeholder="Ad veya e-posta ile ara..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    aria-label="Kullanıcı ara"
  />

  <select
    value={roleFilter}
    onChange={(e) => setRoleFilter(e.target.value)}
    aria-label="Role göre filtrele"
  >
    <option value="ALL">Tüm Roller</option>
    <option value="ADMIN">Yöneticiler</option>
    <option value="USER">Kullanıcılar</option>
  </select>
</div>


  {usersLoading && <p>Kullanıcılar yükleniyor...</p>}

  {usersError && (
    <p style={{ color: 'red' }}>{usersError}</p>
  )}

  {!usersLoading && !usersError && (
    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
     <table className="admin-table">
     
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>E-posta</th>
            <th>Rol</th>
            <th>Kayıt Tarihi</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
  <span className="admin-role">{item.role}</span>
</td>
              
              <td>
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString('tr-TR')
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length === 0 && (
        <p>Arama kriterlerine uygun kullanıcı bulunamadı.</p>
      )}
    </div>
  )}
</section>


            <section className="admin-card">
        <h2><Building2 size={22} /> İlan Denetimi</h2>
        <p>İlan denetimi, ilan modülü hazır olduğunda eklenecek.</p>
      </section>
    </main>
  )
}
