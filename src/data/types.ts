export type Provider = "amazon" | "temu" | "aliexpress"
export type Badge = "popular" | "editors-pick" | "new" | "sale"
export type CategorySlug = "fitness" | "pets" | "women"

export interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: CategorySlug
  provider: Provider
  affiliateUrl: string
  badges: Badge[]
  featured?: boolean
}

export interface Category {
  slug: CategorySlug
  label: string
  emoji: string
  description: string
}
