"use client"

import type { Product } from "@/lib/types"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

export interface CartItem extends Product {
  quantity: number
  size: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Initialize cart from localStorage when component mounts
  useEffect(() => {
    setMounted(true)
    const storedCart = localStorage.getItem("hellodie-cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Update localStorage when cart changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("hellodie-cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = (product: Product, size: string) => {
    setItems((prevItems) => {
      // Check if item already exists in cart with same size
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id && item.size === size)

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1

        toast({
          title: "Item updated in cart",
          description: `${product.name} (${size}) quantity increased to ${updatedItems[existingItemIndex].quantity}`,
        })

        return updatedItems
      } else {
        // Add new item
        toast({
          title: "Item added to cart",
          description: `${product.name} (${size}) added to your cart`,
        })

        return [...prevItems, { ...product, quantity: 1, size }]
      }
    })
  }

  const removeItem = (id: string, size: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.size === size)))

    toast({
      title: "Item removed from cart",
      description: "The item has been removed from your cart",
    })
  }

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity < 1) return

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    })
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

