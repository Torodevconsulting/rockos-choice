import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CategoryBanner } from "@/components/CategoryBanner"
import { ProductGrid } from "@/components/ProductGrid"
import { getProductsByCategory } from "@/data/products"
import { getCategoryBySlug } from "@/data/categories"

export const metadata: Metadata = {
  title: "Women",
  description:
    "Hand-picked finds for style, beauty, and everyday life — skincare, accessories, bags, and more.",
}

export default function WomenPage() {
  const category = getCategoryBySlug("women")
  if (!category) notFound()

  const products = getProductsByCategory("women")

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CategoryBanner category={category} productCount={products.length} />
        <section className="max-w-6xl mx-auto px-4 py-10">
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </>
  )
}
