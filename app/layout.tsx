import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
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
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang='ru'>
    <GlobalStyle />
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
