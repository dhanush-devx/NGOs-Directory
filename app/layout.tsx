import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'NGO Base - Global NGO Directory',
  description: 'Discover and connect with NGOs, charities, and non-profits worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Simple Navbar */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 text-gray-900">
                <Image 
                  src="/ngo-site-logo.png" 
                  alt="NGO Base Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />

                <span className="font-bold text-xl">NGOs Directory</span>
              </Link>

              <div className="flex items-center space-x-8 text-gray-900">
                <Link href="/ngos" className="hover:text-blue-600 font-bold">
                  Search NGOs
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
