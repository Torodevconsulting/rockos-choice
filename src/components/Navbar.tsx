"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/fitness", label: "Fitness 💪" },
  { href: "/pets", label: "Pets 🐾" },
  { href: "/women", label: "Women ✨" },
  { href: "/about", label: "About Rocko" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-900 text-xl text-foreground hover:text-primary transition-colors"
        >
          <span className="text-2xl">🐾</span>
          <span>
            Rocko&apos;s{" "}
            <span className="text-primary">Choice</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

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
                className="z-50 min-w-[180px] rounded-2xl bg-white shadow-lg border border-border p-2"
              >
                {navLinks.map((link) => (
                  <DropdownMenu.Item key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer outline-none transition-colors",
                        pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  )
}
