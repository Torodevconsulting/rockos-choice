import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { FeaturedProduct } from "@/components/FeaturedProduct"
import { ProductGrid } from "@/components/ProductGrid"
import { getFeaturedProduct, getTopProducts } from "@/data/products"
import { categories } from "@/data/categories"

export default function HomePage() {
  const featuredProduct = getFeaturedProduct()
  const topProducts = getTopProducts(9)

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Featured Product */}
        {featuredProduct && <FeaturedProduct product={featuredProduct} />}

        {/* Category shortcuts */}
        <section className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="flex flex-col items-center justify-center gap-2 bg-white border border-border rounded-2xl p-4 hover:border-primary hover:bg-secondary transition-colors group"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* All picks */}
        <section id="picks" className="max-w-6xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-black text-2xl text-foreground">
              All Picks 🐾
            </h2>
            <span className="text-sm text-muted-foreground font-semibold">
              {topProducts.length} products
            </span>
          </div>
          <ProductGrid products={topProducts} />
        </section>

        {/* Social CTA banner */}
        <section className="bg-foreground text-white py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">🐾</div>
            <h2 className="font-heading font-black text-3xl mb-3">
              Follow Rocko for Daily Finds
            </h2>
            <p className="text-white/60 mb-6">
              New picks every week. Follow on Instagram and TikTok for
              behind-the-scenes of the curation process — yes, Rocko is very
              involved.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                📸 Follow on Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
              >
                🎵 Follow on TikTok
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
