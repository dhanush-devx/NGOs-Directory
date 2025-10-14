import { getAllNGOs, getCategories } from '@/lib/data'
import NGOCard from '@/components/ngo-card'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { NGO } from '@/types/ngo'
import Image from 'next/image'

export default async function HomePage() {
  const allNGOs = await getAllNGOs()
  const featuredNGOs = await getAllNGOs({ featured: true })
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-45 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-bg.png"
            alt="NGO Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 flex items-center justify-center min-h-[250px]">
           <div className="max-w-xl bg-white/30 backdrop-blur-md rounded-2xl p-3 md:p-5 border border-white/20">
          <h1 className="text-3xl md:text-4xl text-gray-700 font-bold mb-4 text-center">
            NGOs Directory 
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-bold mb-6 text-center">
            Browse and connect with NGOs working in Education, Health, Environment, Animal Welfare, Human Rights, and Youth Empowerment
          </p>
           <div className="flex justify-center">
          <Link
            href="/ngos"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors ">
            <Search className="w-5 h-5" />
            Search NGOs 
          </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-12 md:gap-20 text-center max-w-10xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600">
                {allNGOs.length}+
              </div>
              <div className="text-gray-600 mt-4">NGOs Listed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600">
                {allNGOs.filter((n: NGO) => n.verified).length}
              </div>
              <div className="text-gray-600 mt-4">Verified</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600">
                60+
              </div>
              <div className="text-gray-600 mt-4">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Browse and Explore NGOs by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore NGOs based on their focus areas, Discover verified organizations making the biggest impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/ngos?category=${encodeURIComponent(category)}`}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-500 rounded-lg p-6 text-center transition-all duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl md:text-2xl font-semibold mb-2">Dhanush</div>
              <div className="text-sm md:text-base text-gray-200">Contact: 8850932041</div>
              <div className="text-sm md:text-base text-gray-200 break-all">✉️ yangoladhanush@gmail.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl md:text-2xl font-semibold mb-2">Saloni</div>
              <div className="text-sm md:text-base text-gray-200">📞 9969939409</div>
              <div className="text-sm md:text-base text-gray-200 break-all">✉️ salonipatekar@gmail.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl md:text-2xl font-semibold mb-2">Rohan</div>
              <div className="text-sm md:text-base text-gray-200">📞 9653244312</div>
              <div className="text-sm md:text-base text-gray-200 break-all">✉️ rohanpalase2006@gmail.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl md:text-2xl font-semibold mb-2">Samiksha</div>
              <div className="text-sm md:text-base text-gray-200">📞 7208266873</div>
              <div className="text-sm md:text-base text-gray-200 break-all">✉️ s41864905@gmail.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl md:text-2xl font-semibold mb-2">Premananda</div>
              <div className="text-sm md:text-base text-gray-200">📞 8104224420</div>
              <div className="text-sm md:text-base text-gray-200 break-all">✉️ premanandasahu4321@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
