'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'shared/ui/theme'

const themeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')

export const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(themeMatchMedia.matches ? 'dark' : 'light')

  useEffect(() => {
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
