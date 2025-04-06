"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Trash2, Plus, Minus, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"

export function CartButton() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="relative flex gap-2 px-4 text-cream-light hover:text-cream hover:bg-taupe-dark"
        onClick={toggleCart}
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-cream-light text-taupe-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {isCartOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 md:w-96 bg-white border border-hazelnut rounded-lg shadow-lg z-50">
          <div className="p-4 flex flex-col max-h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-taupe-dark">Your Cart ({totalItems})</h3>
              <Button variant="ghost" size="icon" onClick={toggleCart} className="h-8 w-8 text-taupe">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4">
                <ShoppingBag className="h-12 w-12 text-hazelnut" />
                <p className="text-taupe">Your cart is empty</p>
                <Button
                  asChild
                  onClick={() => setIsCartOpen(false)}
                  className="bg-taupe text-cream-light hover:bg-taupe-dark"
                >
                  <Link href="/products">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="overflow-auto max-h-[50vh]">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={`${item.id}-${item.size}`} className="flex gap-3 border-b border-hazelnut-light pb-3">
                        <div className="bg-hazelnut-light rounded-md h-16 w-16 relative flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between">
                            <Link
                              href={`/products/${item.id}`}
                              className="font-medium hover:text-taupe text-sm text-taupe-dark"
                              onClick={() => setIsCartOpen(false)}
                            >
                              {item.name}
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-taupe"
                              onClick={() => removeItem(item.id, item.size)}
                            >
                              <Trash2 className="h-3 w-3" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                          <p className="text-xs text-taupe-light">Size: {item.size}</p>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center border border-hazelnut rounded-md">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-none text-taupe"
                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Decrease</span>
                              </Button>
                              <span className="w-6 text-center text-xs text-taupe-dark">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-none text-taupe"
                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Increase</span>
                              </Button>
                            </div>
                            <p className="font-medium text-sm text-taupe-dark">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-hazelnut-light mt-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-taupe">Subtotal</span>
                    <span className="font-medium text-taupe-dark">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-taupe">Shipping</span>
                    <span className="font-medium text-taupe-dark">Calculated at checkout</span>
                  </div>
                  <Button className="w-full mb-2 bg-taupe text-cream-light hover:bg-taupe-dark">Checkout</Button>
                  <Button
                    variant="outline"
                    className="w-full border-taupe text-taupe hover:bg-hazelnut-light"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

