"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Product } from "@/data/types"

const providerLabel: Record<string, string> = {
  amazon: "Amazon",
  temu: "Temu",
  aliexpress: "AliExpress",
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
      featured: true,
    })
  }
}

interface FeaturedProductProps {
  product: Product
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">⭐</span>
        <h2 className="font-heading font-black text-2xl text-foreground">
          Rocko&apos;s Choice of the Week
        </h2>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-3xl border border-border overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative md:w-72 aspect-square md:aspect-auto bg-muted shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
            unoptimized
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow">
            🐾 Rocko&apos;s Pick
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center p-6 md:p-8 gap-4 flex-1">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {providerLabel[product.provider]} ·{" "}
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </div>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground leading-tight">
            {product.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="font-heading font-black text-3xl text-primary">
              {product.price}
            </span>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAffiliateClick(product)}
              className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              See on {providerLabel[product.provider]}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
