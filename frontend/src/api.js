const API_URL = import.meta.env.VITE_API_URL || '/api'

export async function requestApi(path, options) {
  let response
  try {
    response = await fetch(`${API_URL}${path}`, { ...options, credentials: 'include' })
  } catch (error) {
    if (error.name === 'AbortError') throw error
    throw new Error('Sunucuya ulaşılamadı. Bağlantınızı kontrol edip tekrar deneyin.')
  }

  const text = await response.text()
  let data
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    // HTTP hatalarında durum kodunu koru.
  }

  if (!response.ok) {
    const error = new Error(data?.message || `İstek tamamlanamadı (HTTP ${response.status}).`)
    error.status = response.status
    throw error
  }
  if (!data) throw new Error('Sunucudan geçerli bir yanıt alınamadı.')
  return data
}
