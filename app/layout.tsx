import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Taking Bulgaria to the 21st century',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className="">{children}</body>
    </html>
  )
}
