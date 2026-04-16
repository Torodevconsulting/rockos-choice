"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/fitness", label: "Fitness" },
  { href: "/pets", label: "Pets" },
  { href: "/women", label: "Women" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Rocko" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 h-18 grid grid-cols-3 items-center">

        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <span className="text-xl leading-none">🐾</span>
          <span className="font-heading font-black text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
            Rocko&apos;s <span className="text-primary">Choice</span>
          </span>
        </Link>

        {/* Center: Nav links — desktop */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors relative pb-0.5",
                  pathname === link.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA + icons */}
        <div className="flex items-center justify-end gap-3">
          <button
            aria-label="Search"
            className="hidden md:flex p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Search className="w-4 h-4" />
          </button>

          <Link
            href="/#picks"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Shop Picks
            <span className="text-base leading-none">🦴</span>
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  aria-label="Open menu"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={8}
                  className="z-50 min-w-50 rounded-2xl bg-white shadow-xl border border-border p-2"
                >
                  {navLinks.map((link) => (
                    <DropdownMenu.Item key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer outline-none transition-colors",
                          pathname === link.href
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                  <div className="mt-2 px-2 pb-1">
                    <Link
                      href="/#picks"
                      className="flex items-center justify-center gap-1.5 w-full bg-primary text-primary-foreground text-sm font-bold px-4 py-2.5 rounded-xl"
                    >
                      Shop Picks 🦴
                    </Link>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>

      </nav>
    </header>
  )
}
