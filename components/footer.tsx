import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-taupe-dark text-cream">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPp4ChlxHiFx605ib1DwNe7ZGQxJCz.png"
                alt="Hellodie"
                width={150}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-cream-dark text-sm body-text">
              Premium hoodies for every style and occasion. Express yourself with Hellodie.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-cream-light subtitle-text">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-cream-light subtitle-text">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream-dark hover:text-cream-light transition-colors hover-underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-cream-light subtitle-text">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-cream-dark">
                <span className="block">Lyndon Domini Catan</span>
              </li>
              <li className="text-sm text-cream-dark">
                <span className="block">Email: catanlyndon200316@gmail.com</span>
              </li>
              <li className="text-sm text-cream-dark">
                <span className="block">Phone: 09452807867</span>
              </li>
              <li className="flex gap-4 mt-4">
                <Link href="/" className="text-cream-dark hover:text-cream-light transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="/" className="text-cream-dark hover:text-cream-light transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="/" className="text-cream-dark hover:text-cream-light transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe mt-12 pt-6 text-center text-sm text-cream-dark">
          <p>&copy; {new Date().getFullYear()} Hellodie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

