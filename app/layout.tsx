import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Local SEO Rank Tracker — Track Local Search Rankings Automatically',
  description: 'Monitor local business search rankings for location-specific keywords and track competitor positions with ranking change alerts. Perfect for local business owners and SEO agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d6d4904-60e9-4a62-bfee-b6dc260d1951"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
