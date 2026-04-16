import type { Category } from "./types"

export const categories: Category[] = [
  {
    slug: "fitness",
    label: "Fitness",
    emoji: "💪",
    description:
      "Rocko-approved gear to crush your workouts and stay active.",
  },
  {
    slug: "pets",
    label: "Pets",
    emoji: "🐾",
    description:
      "Because every pet deserves the best — just ask Rocko.",
  },
  {
    slug: "women",
    label: "Women",
    emoji: "✨",
    description:
      "Hand-picked finds for style, beauty, and everyday life.",
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
