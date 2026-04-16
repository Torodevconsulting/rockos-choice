import type { Product } from "./types"

export const products: Product[] = [
  // ── FITNESS ──────────────────────────────────────────────────────────────
  {
    id: "fit-001",
    name: "Resistance Band Set",
    description:
      "5-level resistance bands for full-body training at home or the gym. Durable, portable, and perfect for any fitness level.",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80",
    category: "fitness",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["popular", "editors-pick"],
    featured: true,
  },
  {
    id: "fit-002",
    name: "Non-Slip Yoga Mat",
    description:
      "Extra-thick 6mm yoga mat with alignment lines and carrying strap. Great for yoga, pilates, and stretching sessions.",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    category: "fitness",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["popular"],
  },
  {
    id: "fit-003",
    name: "Insulated Water Bottle",
    description:
      "32 oz stainless steel bottle that keeps drinks cold 24h or hot 12h. Leak-proof and perfect for workouts.",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    category: "fitness",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["new"],
  },
  {
    id: "fit-004",
    name: "Speed Jump Rope",
    description:
      "Adjustable cable jump rope with ball-bearing handles for smooth, fast rotation. Ideal for cardio and HIIT.",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
    category: "fitness",
    provider: "temu",
    affiliateUrl: "#",
    badges: ["sale"],
  },

  // ── PETS ─────────────────────────────────────────────────────────────────
  {
    id: "pet-001",
    name: "No-Pull Dog Harness",
    description:
      "Reflective, adjustable harness with front and back leash clips. Rocko-tested and tail-wag approved.",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    category: "pets",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["editors-pick", "popular"],
  },
  {
    id: "pet-002",
    name: "Automatic Pet Feeder",
    description:
      "Programmable 4L feeder with portion control and a built-in voice recorder. Feed on schedule, every time.",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80",
    category: "pets",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["popular"],
  },
  {
    id: "pet-003",
    name: "Interactive Snuffle Mat",
    description:
      "Stimulating snuffle mat that slows eating and keeps dogs mentally engaged. Easy to clean and store.",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    category: "pets",
    provider: "temu",
    affiliateUrl: "#",
    badges: ["new", "editors-pick"],
  },
  {
    id: "pet-004",
    name: "Portable Paw Cleaner",
    description:
      "Silicone-bristle paw cleaner cup. Just dip, twist, and towel dry. Keeps muddy paws off your floors.",
    price: "$11.99",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    category: "pets",
    provider: "aliexpress",
    affiliateUrl: "#",
    badges: ["sale"],
  },

  // ── WOMEN ────────────────────────────────────────────────────────────────
  {
    id: "wom-001",
    name: "Glow Skincare Duo",
    description:
      "Vitamin C serum + hydrating moisturizer set for a brighter, smoother complexion. Dermatologist-approved.",
    price: "$34.99",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    category: "women",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["editors-pick", "popular"],
  },
  {
    id: "wom-002",
    name: "Satin Hair Scrunchies Set",
    description:
      "Pack of 6 satin scrunchies in soft pastel tones — gentle on hair and stylish every day.",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    category: "women",
    provider: "temu",
    affiliateUrl: "#",
    badges: ["new", "sale"],
  },
  {
    id: "wom-003",
    name: "Weekender Gym Bag",
    description:
      "Spacious 40L duffel with wet/dry compartment, shoe pocket, and adjustable strap. Go from gym to weekend trip.",
    price: "$42.99",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "women",
    provider: "amazon",
    affiliateUrl: "#",
    badges: ["popular"],
  },
  {
    id: "wom-004",
    name: "Portable LED Makeup Mirror",
    description:
      "10x magnification LED mirror with 3 lighting modes. USB rechargeable and foldable for travel.",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    category: "women",
    provider: "aliexpress",
    affiliateUrl: "#",
    badges: ["editors-pick"],
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProduct(): Product | undefined {
  return products.find((p) => p.featured)
}

export function getTopProducts(count = 9): Product[] {
  return products.slice(0, count)
}
