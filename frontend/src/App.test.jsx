import React from 'react'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/')
  vi.stubGlobal('fetch', vi.fn(async () => ({
    ok: false,
    status: 401,
    json: async () => ({ message: 'Giriş yapmalısınız.' }),
  })))
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
})
