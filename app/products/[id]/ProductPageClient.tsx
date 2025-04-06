"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"
import { getProduct } from "@/lib/products"

export default function ProductPageClient({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isAdding, setIsAdding] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, selectedSize)

    // Visual feedback
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  const sizes = ["S", "M", "L", "XL", "XXL"]

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div
          className={`bg-hazelnut-light rounded-lg p-8 flex items-center justify-center ${isVisible ? "fade-in-left" : "opacity-0"}`}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain hover-scale"
            priority
            unoptimized
          />
        </div>
        <div className={`flex flex-col gap-6 ${isVisible ? "fade-in-right" : "opacity-0"}`}>
          <span className="subtitle-text text-taupe inline-block">Premium Hoodie</span>
          <h1 className="title-text text-3xl text-taupe-dark">{product.name}</h1>
          <p className="text-2xl font-bold text-taupe">${product.price.toFixed(2)}</p>
          <div className="prose body-text">
            <p>{product.description}</p>
          </div>
          <div className="mt-4">
            <h3 className="title-text text-lg mb-2 text-taupe-dark">Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={`w-12 h-12 hover-lift ${selectedSize === size ? "bg-taupe text-cream-light" : "text-taupe-dark"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <Button
            size="lg"
            className={`mt-6 w-full md:w-auto hover-lift bg-taupe text-cream-light hover:bg-taupe-dark ${isAdding ? "bg-green-600 hover:bg-green-700" : ""}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

