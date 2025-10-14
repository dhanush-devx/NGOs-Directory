import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Globe, CheckCircle, Eye } from 'lucide-react'

interface NGOCardProps {
  ngo: {
    id: string
    name: string
    slug: string
    description: string
    logo: string
    category: string[]
    location: {
      city: string
      country: string
    }
    website?: string
    verified: boolean
    featured: boolean
    views: number
  }
}

export default function NGOCard({ ngo }: NGOCardProps) {
  return (
    <Link href={`/ngos/${ngo.slug}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-200 hover:border-blue-500">
        {/* Logo/Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={ngo.logo}
                alt={ngo.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg truncate text-gray-900">
                  {ngo.name}
                </h3>
                {ngo.verified && (
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                )}
              </div>
              {ngo.featured && (
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            {ngo.description}
          </p>
        </div>

        {/* Location & Website */}
        <div className="px-6 pb-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">
              {ngo.location.city}, {ngo.location.country}
            </span>
          </div>
          {ngo.website && (
            <div className="flex items-center text-sm text-blue-600">
              <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">{ngo.website}</span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {ngo.category.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{ngo.views} views</span>
            </div>
            <span className="text-blue-600 font-medium">Learn more →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
