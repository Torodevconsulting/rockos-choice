import { notFound } from "next/navigation"
import Link from "next/link"
import { ImageIcon, Star, CheckCircle2, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductBuyBox } from "@/components/ProductBuyBox"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { getProductById, products } from "@/data/products"
import { cn } from "@/lib/utils"
import type { Provider, Badge as BadgeType } from "@/data/types"

const providerLabels: Record<Provider, string> = {
  amazon: "Amazon",
  temu: "Temu",
  aliexpress: "AliExpress",
}

const badgeStyles: Record<BadgeType, { label: string; className: string }> = {
  popular: { label: "🔥 Popular", className: "bg-amber-100 text-amber-800 border-amber-200" },
  "editors-pick": { label: "⭐ Editor's Pick", className: "bg-primary/10 text-primary border-primary/20" },
  new: { label: "✨ New", className: "bg-blue-100 text-blue-800 border-blue-200" },
  sale: { label: "🏷️ Sale", className: "bg-green-100 text-green-800 border-green-200" },
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: "Product Not Found" }
  return { title: product.name, description: product.description }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const providerLabel = providerLabels[product.provider]

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary/40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/#picks" className="hover:text-primary transition-colors capitalize">
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
          </div>
        </div>

        {/* Product detail */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: images */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-square bg-[#f5f6f7] rounded-2xl flex items-center justify-center">
                <ImageIcon className="w-24 h-24 text-muted-foreground/15" strokeWidth={1} />
              </div>
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-20 h-20 rounded-xl bg-[#f5f6f7] flex items-center justify-center border-2 cursor-pointer transition-colors",
                      i === 1 ? "border-primary" : "border-transparent hover:border-border"
                    )}
                  >
                    <ImageIcon className="w-6 h-6 text-muted-foreground/20" strokeWidth={1} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: details */}
            <div className="flex flex-col gap-5">

              {/* Badges */}
              {product.badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {product.badges.map((b) => {
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
              <h1 className="font-heading font-black text-2xl md:text-3xl text-foreground leading-tight">
                {product.name}
              </h1>

              {/* Stars + stock */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(0 customer reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  In Stock
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
                <span className="font-heading font-black text-3xl text-primary">
                  {product.price}
                </span>
              </div>

              {/* Provider */}
              <p className="text-sm text-muted-foreground">
                Available on{" "}
                <span className="font-semibold text-foreground">{providerLabel}</span>
              </p>

              <hr className="border-border" />

              {/* Buy box */}
              <ProductBuyBox
                affiliateUrl={product.affiliateUrl}
                providerLabel={providerLabel}
                productName={product.name}
                productId={product.id}
                provider={product.provider}
                category={product.category}
              />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="border-t border-border">
            <Tabs defaultValue="description">
              <TabsList
                variant="line"
                className="w-full rounded-none border-b border-border pb-0 h-auto justify-start gap-0 bg-transparent"
              >
                <TabsTrigger value="description" className="px-6 py-3 rounded-none text-sm">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="px-6 py-3 rounded-none text-sm">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="px-6 py-3 rounded-none text-sm">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="pt-6">
                <h3 className="font-heading font-black text-base text-foreground mb-3">
                  Specifications:
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </TabsContent>

              <TabsContent value="details" className="pt-6">
                <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm max-w-sm">
                  <dt className="text-muted-foreground font-medium">Category</dt>
                  <dd className="font-semibold capitalize">{product.category}</dd>
                  <dt className="text-muted-foreground font-medium">Provider</dt>
                  <dd className="font-semibold">{providerLabel}</dd>
                  <dt className="text-muted-foreground font-medium">Price</dt>
                  <dd className="font-semibold">{product.price}</dd>
                  {product.originalPrice && (
                    <>
                      <dt className="text-muted-foreground font-medium">Original Price</dt>
                      <dd className="font-semibold line-through text-muted-foreground">
                        {product.originalPrice}
                      </dd>
                    </>
                  )}
                </dl>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <p className="text-sm text-muted-foreground">
                  No reviews yet. Be the first to review this product!
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
