import { getAllNGOs, getCategories } from '@/lib/data'
import NGOCard from '@/components/ngo-card'
import { Search } from 'lucide-react'
import { NGO } from '@/types/ngo'

export default async function NGOsPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  const ngos = await getAllNGOs({
    category: params.category,
    search: params.search
  })
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            NGO Directory
          </h1>
          <p className="text-gray-600 mb-6">
            Browse {ngos.length}+ NGOs, Charities, and Non-profits
          </p>

          {/* Search Bar */}
          <form action="/ngos" method="GET" className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                defaultValue={params.search}
                placeholder="Search NGOs by name, category, or description..."
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Filter by Category</h3>
              <div className="space-y-2">
                <a
                  href="/ngos"
                  className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                    !params.category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-900'
                  }`}
                >
                  All Categories
                </a>
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`/ngos?category=${encodeURIComponent(cat)}`}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                      params.category === cat ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-900'
                    }`}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* NGO Grid */}
          <main className="lg:col-span-3">
            {ngos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {ngos.map((ngo: NGO) => (
                  <NGOCard key={ngo.id} ngo={ngo} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 text-lg">
                  No NGOs found matching your criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
