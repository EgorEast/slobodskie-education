'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'shared/ui/theme'

export const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const themeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(themeMatchMedia.matches ? 'dark' : 'light')

    const listener = (event: MediaQueryListEvent) => setTheme(event.matches ? 'dark' : 'light')

    themeMatchMedia.addEventListener('change', listener)
    return () => {
      themeMatchMedia.removeEventListener('change', listener)
    }
  }, [])

  return (
    <ThemeProvider theme={{ light: lightTheme, dark: darkTheme }[theme]}>{children}</ThemeProvider>
  )
}
