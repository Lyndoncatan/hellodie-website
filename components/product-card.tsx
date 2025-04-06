"use client"

import type { Product } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, "M") // Default to Medium size

    // Visual feedback
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="group bg-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover-lift">
      <Link href={`/products/${product.id}`} className="block relative h-[300px] bg-hazelnut-light p-6">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          unoptimized
        />
      </Link>
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-heading font-medium text-lg mb-2 group-hover:text-taupe transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-taupe font-bold mb-4">${product.price.toFixed(2)}</p>
        <Button
          className={`w-full bg-taupe hover:bg-taupe-dark text-cream-light ${isAdding ? "bg-green-600 hover:bg-green-700" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isAdding ? "Added!" : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}

