import type { Category } from "@/data/types"

interface CategoryBannerProps {
  category: Category
  productCount: number
}

export function CategoryBanner({ category, productCount }: CategoryBannerProps) {
  return (
    <section className="relative overflow-hidden bg-secondary border-b border-border">
      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-6xl mb-4">{category.emoji}</div>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-3">
          {category.label}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-4">
          {category.description}
        </p>
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-bold text-sm px-3 py-1.5 rounded-full">
          🐾 {productCount} Rocko-approved {productCount === 1 ? "pick" : "picks"}
        </span>
      </div>
    </section>
  )
}
