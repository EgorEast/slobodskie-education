import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from 'app/providers'
import { darkTheme, lightTheme } from 'shared/ui/theme'
import { GlobalStyle } from './global-style'

const inter = Montserrat({ subsets: ['latin', 'cyrillic'] })

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Академия Слободских',
  description: 'My App is a...',
  manifest: '/manifest.json',
  icons: { apple: { url: '/icon.png' } },
}

// eslint-disable-next-line react-refresh/only-export-components
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: lightTheme.colors.bg },
    { media: '(prefers-color-scheme: dark)', color: darkTheme.colors.bg },
  ],
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang='ru'>
    <GlobalStyle />
    <Providers>
      <body className={inter.className}>{children}</body>
    </Providers>
  </html>
)

export default RootLayout
