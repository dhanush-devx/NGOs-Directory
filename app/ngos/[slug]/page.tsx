import { getNGOBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Globe, Mail, Phone, Calendar, Users, CheckCircle, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react'

export default async function NGOPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params  
  const ngo = await getNGOBySlug(slug)

  if (!ngo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      {ngo.coverImage && (
        <div className="relative h-64 w-full bg-gradient-to-r from-blue-600 to-purple-600">
          <Image
            src={ngo.coverImage}
            alt={ngo.name}
            fill
            className="object-cover opacity-80"
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg -mt-20 relative z-10 p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={ngo.logo}
                alt={ngo.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">{ngo.name}</h1>
                {ngo.verified && (
                  <CheckCircle className="w-7 h-7 text-blue-500 flex-shrink-0" />
                )}
                {ngo.featured && (
                  <span className="px-3 py-1 text-sm font-semibold bg-yellow-100 text-yellow-800 rounded">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {ngo.category.map((cat: string) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>
                    {ngo.location.city}, {ngo.location.state && `${ngo.location.state}, `}{ngo.location.country}
                  </span>
                </div>
                {ngo.founded && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Founded {new Date(ngo.founded).getFullYear()}</span>
                  </div>
                )}
                {ngo.teamSize && (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{ngo.teamSize} members</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">About</h2>
                <p className="text-gray-700 leading-relaxed">
                  {ngo.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  {ngo.mission}
                </p>
              </div>

              {ngo.vision && (
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {ngo.vision}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 space-y-6 sticky top-4">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Information</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${ngo.contact.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="break-all">{ngo.contact.email}</span>
                    </a>
                    {ngo.contact.phone && (
                      <a
                        href={`tel:${ngo.contact.phone}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                      >
                        <Phone className="w-5 h-5" />
                        <span>{ngo.contact.phone}</span>
                      </a>
                    )}
                    {ngo.website && (
                      <a
                        href={ngo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                      >
                        <Globe className="w-5 h-5" />
                        <span>Visit Website</span>
                      </a>
                    )}
                  </div>
                </div>

                {ngo.socialMedia && (
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Social Media</h3>
                    <div className="flex gap-3">
                      {ngo.socialMedia.twitter && (
                        <a
                          href={ngo.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {ngo.socialMedia.facebook && (
                        <a
                          href={ngo.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {ngo.socialMedia.linkedin && (
                        <a
                          href={ngo.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {ngo.socialMedia.instagram && (
                        <a
                          href={ngo.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
