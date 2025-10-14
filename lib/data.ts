import { promises as fs } from 'fs'
import path from 'path'
import { NGO } from '@/types/ngo'

const dataDirectory = path.join(process.cwd(), 'data')

// Read NGOs from JSON file
export async function getAllNGOs(filters?: {
  category?: string
  country?: string
  city?: string
  featured?: boolean
  search?: string
}): Promise<NGO[]> {
  const filePath = path.join(dataDirectory, 'ngos.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  let ngos: NGO[] = JSON.parse(fileContents)
  
  // Apply filters
  if (filters?.featured) {
    ngos = ngos.filter((ngo) => ngo.featured === true)
  }

  if (filters?.category) {
    ngos = ngos.filter((ngo) => 
      ngo.category.includes(filters.category!)
    )
  }

  if (filters?.country) {
    ngos = ngos.filter((ngo) => 
      ngo.location.country === filters.country
    )
  }

  if (filters?.city) {
    ngos = ngos.filter((ngo) => 
      ngo.location.city === filters.city
    )
  }

  if (filters?.search) {
    const searchLower = filters.search.toLowerCase()
    ngos = ngos.filter((ngo) =>
      ngo.name.toLowerCase().includes(searchLower) ||
      ngo.description.toLowerCase().includes(searchLower) ||
      ngo.category.some((cat: string) => cat.toLowerCase().includes(searchLower))
    )
  }

  // Sort: featured first, then by views
  ngos.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.views - a.views
  })

  return ngos
}

export async function getNGOBySlug(slug: string): Promise<NGO | null> {
  const filePath = path.join(dataDirectory, 'ngos.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const ngos: NGO[] = JSON.parse(fileContents)
  
  return ngos.find((ngo) => ngo.slug === slug) || null
}

// Get unique categories
export async function getCategories(): Promise<string[]> {
  const ngos = await getAllNGOs()
  const categories = new Set<string>()
  
  ngos.forEach((ngo) => {
    ngo.category.forEach((cat: string) => categories.add(cat))
  })
  
  return Array.from(categories).sort()
}

// Get unique locations
export async function getLocations(): Promise<string[]> {
  const ngos = await getAllNGOs()
  const locations = new Set<string>()
  
  ngos.forEach((ngo) => {
    locations.add(`${ngo.location.city}, ${ngo.location.country}`)
  })
  
  return Array.from(locations).sort()
}
