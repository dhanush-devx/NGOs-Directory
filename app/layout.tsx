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
            <div className="grid grid-cols-3 items-center h-16">
              {/* Left: Logo */}
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

              {/* Center: Home */}
              <div className="flex justify-center">
                <Link href="/" className="hover:text-blue-600 font-bold text-xl text-gray-900">
                  Home
                </Link>
              </div>

              {/* Right: Search NGOs */}
              <div className="flex justify-end">
                <Link href="/ngos" className="hover:text-blue-600 font-bold text-xl text-gray-900">
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
