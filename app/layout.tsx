import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Bot Usage Analytics — Track Which Bots Provide Value',
  description: 'Analytics dashboard showing Discord bot usage patterns, member engagement, and ROI for server administrators.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5176fe98-3f96-4cdf-90ad-a12d4c697517"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
