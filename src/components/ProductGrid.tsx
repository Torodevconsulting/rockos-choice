import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import type { Product } from "@/data/types"
import { cn } from "@/lib/utils"

interface ProductGridProps {
  products: Product[]
  title?: string
  viewAllHref?: string
  columns?: 3 | 4
  emptyMessage?: string
}

export function ProductGrid({
  products,
  title,
  viewAllHref,
  columns = 4,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-4xl mb-3">🐾</p>
        <p className="font-heading font-bold text-lg">{emptyMessage}</p>
        <p className="text-sm mt-1">Rocko is working on it!</p>
      </div>
    )
  }

  return (
    <div>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-black text-lg text-foreground">{title}</h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      )}
      <div
        className={cn(
          "grid grid-cols-2 gap-8",
          columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        )}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
