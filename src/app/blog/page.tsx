import Link from "next/link"
import { ImageIcon, Search, ArrowRight, Clock, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { posts, allTags, getRecentPosts } from "@/data/posts"
import { getTopProducts } from "@/data/products"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Blog — Rocko's Choice",
  description:
    "Tips, guides, and honest reviews by Rocko. From pet care to fitness and lifestyle finds.",
}

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const recentPosts = getRecentPosts(4)
  const latestProducts = getTopProducts(3)

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Page header */}
        <div className="border-b border-border bg-secondary/40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-foreground font-medium">Blog</span>
          </div>
        </div>

        {/* Main layout */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: posts grid ────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {posts.slice(0, POSTS_PER_PAGE).map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {/* Image placeholder */}
                    <div
                      className={cn(
                        "relative aspect-video flex items-center justify-center",
                        post.color
                      )}
                    >
                      <ImageIcon className="w-12 h-12 text-white/20" strokeWidth={1} />
                      <span className="absolute top-3 left-3 bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading font-black text-base leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all mt-auto"
                      >
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={cn(
                      "w-9 h-9 rounded-lg text-sm font-semibold transition-colors",
                      page === 1
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                    )}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-2 text-muted-foreground text-sm">...</span>
                <button className="w-9 h-9 rounded-lg text-sm font-semibold border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  8
                </button>
              </div>
            </div>

            {/* ── Right: sidebar ──────────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Search */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground mb-3">
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground mb-4">
                  Recent Posts
                </h3>
                <ul className="flex flex-col gap-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className={cn(
                            "w-14 h-14 shrink-0 rounded-xl flex items-center justify-center",
                            post.color
                          )}
                        >
                          <ImageIcon className="w-5 h-5 text-white/25" strokeWidth={1} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Products */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground mb-4">
                  Latest Products
                </h3>
                <ul className="flex flex-col gap-4">
                  {latestProducts.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/products/${p.id}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-14 h-14 shrink-0 rounded-xl bg-[#f5f6f7] flex items-center justify-center border border-border">
                          <ImageIcon className="w-5 h-5 text-muted-foreground/25" strokeWidth={1} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {p.name}
                          </p>
                          <p className="font-heading font-black text-xs text-primary mt-1">
                            {p.price}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Categories */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground mb-4">
                  Popular Categories
                </h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => {
                    const count = posts.filter(
                      (p) => p.category.toLowerCase() === cat.slug
                    ).length
                    return (
                      <li key={cat.slug}>
                        <Link
                          href={`/${cat.slug}`}
                          className="flex items-center justify-between py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <span className="flex items-center gap-2">
                            <span>{cat.emoji}</span>
                            <span className="font-medium group-hover:font-semibold transition-all">
                              {cat.label}
                            </span>
                          </span>
                          <span className="text-xs font-semibold bg-secondary px-2 py-0.5 rounded-full">
                            {count}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-foreground mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
