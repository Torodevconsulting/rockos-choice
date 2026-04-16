"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product, Provider, Badge as BadgeType } from "@/data/types"
import { cn } from "@/lib/utils"

const providerStyles: Record<Provider, { label: string; className: string }> = {
  amazon: {
    label: "Amazon",
    className: "bg-orange-500 text-white",
  },
  temu: {
    label: "Temu",
    className: "bg-teal-500 text-white",
  },
  aliexpress: {
    label: "AliExpress",
    className: "bg-red-500 text-white",
  },
}

const badgeStyles: Record<BadgeType, { label: string; className: string }> = {
  popular: {
    label: "🔥 Popular",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  "editors-pick": {
    label: "⭐ Editor's Pick",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  new: {
    label: "✨ New",
    className: "bg-blue-100 text-blue-800 border-blue-200",
  },
  sale: {
    label: "🏷️ Sale",
    className: "bg-green-100 text-green-800 border-green-200",
  },
}

function trackAffiliateClick(product: Product) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = typeof window !== "undefined" ? (window as any) : null
  if (w && typeof w.gtag === "function") {
    w.gtag("event", "affiliate_click", {
      product_id: product.id,
      product_name: product.name,
      provider: product.provider,
      category: product.category,
    })
  }
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const provider = providerStyles[product.provider]

  return (
    <div
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 33vw"
          unoptimized
        />
        {/* Provider pill */}
        <span
          className={cn(
            "absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full shadow-sm",
            provider.className
          )}
        >
          {provider.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.badges.slice(0, 2).map((b) => {
              const style = badgeStyles[b]
              return (
                <Badge
                  key={b}
                  variant="outline"
                  className={cn("text-xs px-2 py-0.5 font-semibold", style.className)}
                >
                  {style.label}
                </Badge>
              )
            })}
          </div>
        )}

        {/* Name */}
        <h3 className="font-heading font-bold text-sm leading-snug line-clamp-2 text-foreground">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2 gap-2">
          <span className="font-heading font-extrabold text-lg text-primary">
            {product.price}
          </span>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAffiliateClick(product)}
            className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            See on {provider.label}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
