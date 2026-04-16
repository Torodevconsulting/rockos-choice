import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CategoryBanner } from "@/components/CategoryBanner"
import { ProductGrid } from "@/components/ProductGrid"
import { getProductsByCategory } from "@/data/products"
import { getCategoryBySlug } from "@/data/categories"

export const metadata: Metadata = {
  title: "Fitness",
  description:
    "Rocko-approved fitness gear to crush your workouts — resistance bands, yoga mats, water bottles, and more.",
}

export default function FitnessPage() {
  const category = getCategoryBySlug("fitness")
  if (!category) notFound()

  const products = getProductsByCategory("fitness")

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
