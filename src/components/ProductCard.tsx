"use client"

import { useState } from "react"
import Link from "next/link"
import { ImageIcon, Eye, Heart, ExternalLink, Star, CheckCircle2, Minus, Plus, X } from "lucide-react"
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import type { Product, Provider } from "@/data/types"
import { cn } from "@/lib/utils"

const providerStyles: Record<Provider, { label: string; className: string }> = {
  amazon: { label: "Amazon", className: "bg-orange-500 text-white" },
  temu: { label: "Temu", className: "bg-teal-500 text-white" },
  aliexpress: { label: "AliExpress", className: "bg-red-500 text-white" },
}

function calcDiscount(price: string, originalPrice: string): number {
  const current = parseFloat(price.replace("$", ""))
  const original = parseFloat(originalPrice.replace("$", ""))
  return Math.round((1 - current / original) * 100)
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
  const [previewOpen, setPreviewOpen] = useState(false)
  const [qty, setQty] = useState(1)
  const provider = providerStyles[product.provider]
  const discount =
    product.originalPrice
      ? calcDiscount(product.price, product.originalPrice)
      : null

  function handleBuy() {
    trackAffiliateClick(product)
    window.open(product.affiliateUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* Card */}
      <div
        className={cn(
          "group flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow",
          className
        )}
      >
        {/* Image area */}
        <div className="relative aspect-square bg-[#f5f6f7] flex items-center justify-center overflow-hidden">
          <ImageIcon className="w-10 h-10 text-muted-foreground/25" strokeWidth={1.5} />

          {/* Provider pill */}
          <span
            className={cn(
              "absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full leading-none",
              provider.className
            )}
          >
            {provider.label}
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Hover buttons */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
            {/* Eye — preview modal */}
            <button
              onClick={() => setPreviewOpen(true)}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Quick preview"
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Buy — affiliate link */}
            <button
              onClick={handleBuy}
              className="h-9 px-5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md hover:bg-primary/90 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              Buy now <ExternalLink className="w-3 h-3" />
            </button>

            {/* Heart — wishlist (placeholder) */}
            <button
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-muted-foreground hover:text-rose-500 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content — links to detail page */}
        <Link href={`/products/${product.id}`} className="flex flex-col p-3 gap-1 hover:bg-secondary/40 transition-colors">
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
        </Link>
      </div>

      {/* Preview modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitive.Popup
            className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl ring-1 ring-foreground/10 duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          >
            {/* Close */}
            <DialogPrimitive.Close
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-border transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </DialogPrimitive.Close>

            <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-2xl">

              {/* Left: images */}
              <div className="flex sm:flex-col gap-2 p-4 sm:w-20 bg-[#f8f8f8] shrink-0">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-14 h-14 sm:w-full sm:aspect-square rounded-xl bg-white flex items-center justify-center border-2 cursor-pointer transition-colors shrink-0",
                      i === 1 ? "border-primary" : "border-transparent hover:border-border"
                    )}
                  >
                    <ImageIcon className="w-5 h-5 text-muted-foreground/25" strokeWidth={1} />
                  </div>
                ))}
              </div>

              {/* Center: main image */}
              <div className="flex-1 bg-[#f8f8f8] flex items-center justify-center min-h-48 sm:min-h-0">
                <ImageIcon className="w-20 h-20 text-muted-foreground/15" strokeWidth={1} />
              </div>

              {/* Right: details */}
              <div className="flex flex-col gap-4 p-6 sm:w-72 shrink-0 overflow-y-auto">

                {/* Sale badge */}
                {discount && (
                  <span className="self-start bg-green-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wide">
                    Sale {discount}% off
                  </span>
                )}

                {/* Name */}
                <h2 className="font-heading font-black text-lg leading-snug text-foreground">
                  {product.name}
                </h2>

                {/* Stars + stock */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-muted-foreground/30" />
                    ))}
                    <span className="text-xs text-muted-foreground">0 Rating (0 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    In Stock
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                <hr className="border-border" />

                {/* Price + Quantity */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">Price</p>
                    <div className="flex items-baseline gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                      <span className="font-heading font-black text-xl text-foreground">{product.price}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">Quantity</p>
                    <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="px-2.5 py-1.5 hover:bg-secondary transition-colors"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-1.5 text-sm font-semibold min-w-8 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty((q) => q + 1)}
                        className="px-2.5 py-1.5 hover:bg-secondary transition-colors"
                        aria-label="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={handleBuy}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-bold text-sm py-2.5 px-4 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Buy now
                  </button>
                  <button
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-foreground text-white font-bold text-sm py-2.5 px-4 rounded-full hover:bg-foreground/90 transition-colors"
                    aria-label="Add to Wishlist"
                  >
                    <Heart className="w-4 h-4" />
                    Wishlist
                  </button>
                </div>

              </div>
            </div>
          </DialogPrimitive.Popup>
        </DialogPortal>
      </Dialog>
    </>
  )
}
