import { ProductCard } from "@/components/ProductCard"
import type { Product } from "@/data/types"

interface ProductGridProps {
  products: Product[]
  emptyMessage?: string
}

export function ProductGrid({
  products,
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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
