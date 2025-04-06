"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"
import { useInView } from "react-intersection-observer"

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="container py-16">
      <div
        className={`flex flex-col md:flex-row justify-between items-center mb-12 ${inView ? "fade-in-up" : "opacity-0"}`}
      >
        <div>
          <span className="subtitle-text text-taupe inline-block mb-2">Our Collection</span>
          <h2 className="title-text text-3xl text-taupe-dark">Featured Hoodies</h2>
        </div>
        <Button asChild variant="link" className="text-taupe hover-underline">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>

      <div className={`product-grid ${inView ? "stagger-children" : "opacity-0"}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

