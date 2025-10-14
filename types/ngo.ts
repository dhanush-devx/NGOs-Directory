export interface NGO {
  id: string
  name: string
  slug: string
  description: string
  mission: string
  vision?: string
  logo: string
  coverImage?: string
  category: string[]
  location: {
    country: string
    state?: string
    city: string
    address?: string
  }
  contact: {
    email: string
    phone?: string
    whatsapp?: string
  }
  website?: string
  socialMedia?: {
    twitter?: string
    facebook?: string
    linkedin?: string
    instagram?: string
  }
  founded?: string
  teamSize?: string
  verified: boolean
  featured: boolean
  views: number
}
