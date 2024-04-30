import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <GlobalStyle />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
