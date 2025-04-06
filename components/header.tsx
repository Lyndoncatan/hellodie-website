"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { CartButton } from "@/components/cart-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? "bg-taupe/95" : "bg-taupe/80"} backdrop-blur-md`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPp4ChlxHiFx605ib1DwNe7ZGQxJCz.png"
              alt="Hellodie"
              width={120}
              height={40}
              className="h-8 w-auto hover-scale"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cream-light hover-underline",
                  pathname === item.href ? "text-cream-light" : "text-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex hover-scale text-cream-light">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <CartButton />

          <Button variant="ghost" size="icon" className="md:hidden hover-scale text-cream-light" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-taupe flex flex-col">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPp4ChlxHiFx605ib1DwNe7ZGQxJCz.png"
                alt="Hellodie"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>

            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-cream-light">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8 stagger-children">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-medium transition-colors hover:text-cream-light text-cream"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

