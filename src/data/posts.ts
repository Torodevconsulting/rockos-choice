export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  color: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: "post-001",
    slug: "best-resistance-bands-2024",
    title: "Best Resistance Bands for Home Workouts",
    excerpt:
      "After weeks of testing, Rocko has found the best resistance bands that won't snap mid-squat. Here's his top picks for every fitness level.",
    date: "Apr 10, 2026",
    category: "Fitness",
    readTime: "4 min read",
    color: "bg-stone-800",
    tags: ["fitness", "home-gym", "amazon"],
  },
  {
    id: "post-002",
    slug: "smart-pet-gadgets",
    title: "5 Smart Pet Gadgets That Changed Our Daily Routine",
    excerpt:
      "From automatic feeders to interactive toys — the tech Rocko can't live without. A honest review of the top pet gadgets on the market.",
    date: "Apr 5, 2026",
    category: "Pets",
    readTime: "5 min read",
    color: "bg-rose-500",
    tags: ["pets", "gadgets", "lifestyle"],
  },
  {
    id: "post-003",
    slug: "yoga-mat-guide",
    title: "How to Choose the Perfect Yoga Mat (And Why It Matters)",
    excerpt:
      "Not all yoga mats are created equal. Rocko breaks down thickness, grip, and material so you can flow without slipping.",
    date: "Mar 28, 2026",
    category: "Fitness",
    readTime: "3 min read",
    color: "bg-teal-600",
    tags: ["fitness", "yoga", "wellness"],
  },
  {
    id: "post-004",
    slug: "skincare-routine-on-a-budget",
    title: "A Complete Skincare Routine for Under $50",
    excerpt:
      "Glowing skin doesn't have to break the bank. These Rocko-approved products deliver real results at a fraction of the price.",
    date: "Mar 20, 2026",
    category: "Women",
    readTime: "6 min read",
    color: "bg-violet-500",
    tags: ["women", "skincare", "budget"],
  },
  {
    id: "post-005",
    slug: "dog-harness-vs-collar",
    title: "Harness vs Collar: What's Best for Your Dog?",
    excerpt:
      "Rocko has strong opinions on this one. We compare harnesses and collars across comfort, control, and safety for different dog breeds.",
    date: "Mar 12, 2026",
    category: "Pets",
    readTime: "4 min read",
    color: "bg-emerald-600",
    tags: ["pets", "dogs", "walking"],
  },
  {
    id: "post-006",
    slug: "gym-bag-essentials",
    title: "What to Pack in Your Gym Bag: The Ultimate Checklist",
    excerpt:
      "Stop forgetting your headphones. Rocko's definitive gym bag checklist — from the essentials to the game-changers.",
    date: "Mar 5, 2026",
    category: "Fitness",
    readTime: "3 min read",
    color: "bg-amber-500",
    tags: ["fitness", "lifestyle", "amazon"],
  },
]

export const allTags = [
  "fitness", "pets", "women", "amazon", "temu",
  "lifestyle", "wellness", "budget", "gadgets",
  "skincare", "yoga", "home-gym",
]

export function getRecentPosts(count = 4): Post[] {
  return posts.slice(0, count)
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
