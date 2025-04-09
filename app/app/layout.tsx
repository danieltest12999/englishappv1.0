import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Writing Coach',
  description: 'Advanced English learning app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
