"use client"

import Link from "next/link"
import { ImageIcon } from "lucide-react"
import type { Product, Provider } from "@/data/types"
import { cn } from "@/lib/utils"

const providerStyles: Record<Provider, { label: string; className: string }> = {
  amazon: { label: "Amazon", className: "bg-orange-500 text-white" },
  temu: { label: "Temu", className: "bg-teal-500 text-white" },
  aliexpress: { label: "AliExpress", className: "bg-red-500 text-white" },
}


interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const provider = providerStyles[product.provider]

  return (
    <Link
      href={`/products/${product.id}`}
      className={cn(
        "group flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow",
        className
      )}
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-[#f5f6f7] flex items-center justify-center">
        <ImageIcon className="w-10 h-10 text-muted-foreground/25" strokeWidth={1.5} />
        <span
          className={cn(
            "absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full leading-none",
            provider.className
          )}
        >
          {provider.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-3 gap-1">
        <p className="text-xs text-foreground leading-snug line-clamp-2 min-h-10">
          {product.name}
        </p>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="font-bold text-sm text-foreground">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
