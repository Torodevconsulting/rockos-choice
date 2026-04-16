"use client"

import { useState } from "react"
import { ExternalLink, Minus, Plus } from "lucide-react"

interface ProductBuyBoxProps {
  affiliateUrl: string
  providerLabel: string
  productName: string
  productId: string
  provider: string
  category: string
}

export function ProductBuyBox({
  affiliateUrl,
  providerLabel,
  productName,
  productId,
  provider,
  category,
}: ProductBuyBoxProps) {
  const [qty, setQty] = useState(1)

  function handleBuy() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = typeof window !== "undefined" ? (window as any) : null
    if (w && typeof w.gtag === "function") {
      w.gtag("event", "affiliate_click", {
        product_id: productId,
        product_name: productName,
        provider,
        category,
      })
    }
    window.open(affiliateUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Quantity */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-2">Quantity</p>
        <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2 hover:bg-secondary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-5 py-2 text-sm font-semibold min-w-12 text-center">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 hover:bg-secondary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <button
          onClick={handleBuy}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors"
        >
          Buy on {providerLabel}
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
