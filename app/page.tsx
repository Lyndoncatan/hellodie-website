import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import AboutSection from "@/components/about-section"
import Newsletter from "@/components/newsletter"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts()
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <AboutSection />
      <Newsletter />
    </div>
  )
}

