import React from 'react'
import { cleanup, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

const reply = (data, status = 200) => new Response(JSON.stringify(data), { status })
const account = { id: 1, name: 'Demo Kullanıcı', email: 'demo@example.com', role: 'USER' }

beforeEach(() => {
  window.history.pushState({}, '', '/')
  vi.stubGlobal('fetch', vi.fn(async () => reply({ message: 'Giriş yapmalısınız.' }, 401)))
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('Emlak360 kullanıcı arayüzü', () => {
  it('ana sayfa temel ilan ve arama alanlarını gösterir', async () => {
    render(<App />)

    expect(await screen.findByText('Hayalindeki evi')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Şehir veya ilçe ara')).toBeInTheDocument()
    expect(screen.getByText('Öne çıkan ilanlar')).toBeInTheDocument()
  })

  it('oturumu olmayan kullanıcı profil adresinde giriş ekranına yönlenir', async () => {
    window.history.pushState({}, '', '/profil')
    render(<App />)

    await waitFor(() => {
      expect(window.location.pathname).toBe('/giris')
    })
  })

  it('kayıt ekranında eşleşmeyen şifreleri engeller', async () => {
    window.history.pushState({}, '', '/kayit')
    render(<App />)
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('Adını ve soyadını gir'), 'Nurşen Akay')
    await user.type(screen.getByPlaceholderText('ornek@mail.com'), 'nursen@example.com')
    await user.type(screen.getByPlaceholderText('En az 8 karakter'), 'sifre123')
    await user.type(screen.getByPlaceholderText('Şifreni tekrar gir'), 'baskasifre')
    await user.click(screen.getByRole('button', { name: 'Kayıt Ol' }))

    expect(await screen.findByText('Şifreler aynı olmalıdır.')).toBeInTheDocument()
  })

  it.each(['USER', 'ADMIN'])('başarılı %s girişi Header ve rol menüsünü günceller', async (role) => {
    const activeUser = { ...account, role }
    window.history.pushState({}, '', '/giris')
    fetch.mockImplementation(async (url) => {
      if (url.endsWith('/auth/login') || url.endsWith('/users/profile')) {
        return reply({ user: activeUser })
      }
      if (url.endsWith('/admin/users')) return reply({
        users: [activeUser, { ...account, id: 2, name: 'Diğer Kullanıcı', email: 'other@example.com' }],
      })
      return reply({}, 401)
    })
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('ornek@mail.com'), account.email)
    await user.type(screen.getByPlaceholderText('Şifreni gir'), 'test-sifre')
    await user.click(screen.getByRole('button', { name: 'Giriş Yap' }))
    expect(await screen.findByRole('link', { name: account.name })).toHaveAttribute('href', '/profil')
    const adminLink = screen.queryByRole('link', { name: 'Yönetici Paneli' })
    if (role === 'ADMIN') {
      await user.click(adminLink)
      expect(await screen.findByRole('cell', { name: account.email })).toBeInTheDocument()
      await user.selectOptions(screen.getByRole('combobox', { name: 'Role göre filtrele' }), 'USER')
      expect(screen.queryByRole('cell', { name: account.email })).not.toBeInTheDocument()
      expect(screen.getByRole('cell', { name: 'other@example.com' })).toBeInTheDocument()
      await user.type(screen.getByRole('searchbox', { name: 'Kullanıcı ara' }), 'eslesmeyen')
      expect(screen.queryByRole('cell', { name: 'other@example.com' })).not.toBeInTheDocument()
    } else {
      expect(adminLink).not.toBeInTheDocument()
    }
  })

  it('şifre değiştiğinde ortak oturum ve admin menüsü temizlenir', async () => {
    window.history.pushState({}, '', '/profil')
    fetch.mockImplementation(async (url) => url.endsWith('/users/password')
      ? reply({ message: 'Şifre değiştirildi.' })
      : reply({ user: { ...account, role: 'ADMIN' } }))
    render(<App />)
    const user = userEvent.setup()
    await user.type(await screen.findByLabelText('Mevcut şifre'), 'eski-sifre')
    await user.type(screen.getByLabelText('Yeni şifre'), 'yeni-sifre')
    await user.click(screen.getByRole('button', { name: 'Şifreyi kaydet' }))
    expect(await screen.findByRole('button', { name: 'Giriş Yap' })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Şifre değiştirildi.')
    expect(screen.queryByRole('link', { name: account.name })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Yönetici Paneli' })).not.toBeInTheDocument()
  })

  it('yanlış mevcut şifre için dönen 401 geçerli oturumu kapatmaz', async () => {
    window.history.pushState({}, '', '/profil')
    fetch.mockImplementation(async (url) => url.endsWith('/users/password')
      ? reply({ message: 'Mevcut şifre hatalı.' }, 401)
      : reply({ user: account }))
    render(<App />)
    const user = userEvent.setup()
    await user.type(await screen.findByLabelText('Mevcut şifre'), 'yanlis-sifre')
    await user.type(screen.getByLabelText('Yeni şifre'), 'yeni-sifre')
    await user.click(screen.getByRole('button', { name: 'Şifreyi kaydet' }))
    expect(await screen.findByText('Mevcut şifre hatalı.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: account.name })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/profil')
  })

  it.each(['HTTP', 'ağ'])('çıkış %s hatasında kullanıcıyı oturumlu tutar', async (failure) => {
    window.history.pushState({}, '', '/profil')
    fetch.mockImplementation(async (url) => {
      if (!url.endsWith('/auth/logout')) return reply({ user: account })
      if (failure === 'ağ') throw new TypeError('Network failure')
      return reply({ message: 'Çıkış tamamlanamadı.' }, 500)
    })
    render(<App />)
    const user = userEvent.setup()
    await user.click(await screen.findByTitle('Çıkış yap'))
    expect(await screen.findByRole('alert')).toHaveTextContent(
      failure === 'ağ' ? 'Sunucuya ulaşılamadı' : 'Çıkış tamamlanamadı.',
    )
    expect(screen.getByRole('link', { name: account.name })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/profil')
  })

  it('başarılı çıkış Header oturumunu temizler', async () => {
    fetch.mockImplementation(async (url) => url.endsWith('/auth/logout')
      ? reply({ message: 'Çıkış başarılı.' })
      : reply({ user: account }))
    render(<App />)
    const user = userEvent.setup()
    await user.click(await screen.findByTitle('Çıkış yap'))
    expect(await within(screen.getByRole('navigation', { name: 'Ana navigasyon' })).findByRole('link', { name: 'Giriş Yap' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: account.name })).not.toBeInTheDocument()
  })

  it('profil isteği 401 dönerse ortak oturum temizlenir', async () => {
    window.history.pushState({}, '', '/profil')
    fetch.mockImplementation(async (url) => url.endsWith('/auth/me')
      ? reply({ user: account })
      : reply({ message: 'Oturum sona erdi.' }, 401))
    render(<App />)
    expect(await screen.findByRole('button', { name: 'Giriş Yap' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: account.name })).not.toBeInTheDocument()
  })

  it('profil güncellemesi Header adını sayfa yenilenmeden değiştirir', async () => {
    window.history.pushState({}, '', '/profil')
    fetch.mockImplementation(async (_url, options) => options.method === 'PATCH'
      ? reply({ user: { ...account, name: 'Güncel Kullanıcı' }, message: 'Profil güncellendi.' })
      : reply({ user: account }))
    render(<App />)
    const user = userEvent.setup()
    const name = await screen.findByLabelText('Ad soyad')
    await user.clear(name)
    await user.type(name, 'Güncel Kullanıcı')
    await user.click(screen.getByRole('button', { name: 'Profili kaydet' }))
    expect(await screen.findByRole('link', { name: 'Güncel Kullanıcı' })).toBeInTheDocument()
  })

  it('oturum sorgusundaki ağ hatası profili girişe yönlendirmez', async () => {
    window.history.pushState({}, '', '/profil')
    fetch.mockRejectedValue(new TypeError('Network failure'))
    render(<App />)
    expect(await screen.findByRole('alert')).toHaveTextContent('Sunucuya ulaşılamadı')
    expect(window.location.pathname).toBe('/profil')
  })
})
