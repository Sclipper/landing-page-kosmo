import type { Metadata } from 'next'

import './globals.css'
import { colorTheme } from './colors'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Taking Bulgaria to the 21st century',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className={`bg-${colorTheme}-50`}>{children}</body>
    </html>
  )
}
