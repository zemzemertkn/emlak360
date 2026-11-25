import { useCallback, useEffect, useRef, useState } from 'react'
import { requestApi } from './api'
import { AuthContext } from './useAuth'

export function AuthProvider({ children }) {
  const [user, setSessionUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionError, setSessionError] = useState('')
  const revision = useRef(0)

  const setUser = useCallback((nextUser) => {
    revision.current += 1
    setSessionUser(nextUser)
    setLoading(false)
    setSessionError('')
  }, [])

  const refreshSession = useCallback(async (signal) => {
    const current = ++revision.current
    setLoading(true)
    setSessionError('')
    try {
      const data = await requestApi('/auth/me', { signal })
      if (current === revision.current && !signal?.aborted) setUser(data.user)
    } catch (error) {
      if (current !== revision.current || signal?.aborted) return
      if (error.status === 401) setUser(null)
      else setSessionError(error.message)
    } finally {
      if (current === revision.current && !signal?.aborted) setLoading(false)
    }
  }, [setUser])

  useEffect(() => {
    const controller = new AbortController()
    queueMicrotask(() => {
      if (!controller.signal.aborted) refreshSession(controller.signal)
    })
    return () => controller.abort()
  }, [refreshSession])

  const request = useCallback(async (path, options, { verifyUnauthorized = false } = {}) => {
    const current = revision.current
    try {
      return await requestApi(path, options)
    } catch (error) {
      if (error.status === 401 && current === revision.current && !options?.signal?.aborted) {
        // Şifre değiştirme yanlış mevcut şifre için de 401 döndürüyor.
        if (verifyUnauthorized) await refreshSession()
        else setUser(null)
      }
      throw error
    }
  }, [refreshSession, setUser])

  return (
    <AuthContext.Provider value={{ user, setUser, loading, sessionError, request, refreshSession }}>
      {children}
    </AuthContext.Provider>
  )
}
