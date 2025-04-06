"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-taupe py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "fade-in-left" : "opacity-0"}`}>
            <span className="subtitle-text text-cream-light inline-block mb-2">Premium Collection</span>
            <h1 className="title-text text-4xl md:text-5xl lg:text-6xl text-cream-light">
              Elevate Your Style With <span className="font-semibold">Hellodie</span>
            </h1>
            <p className="body-text text-lg md:text-xl text-cream">
              Premium hoodies designed for comfort and style. Express yourself with our unique collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="text-base hover-lift bg-cream-light text-taupe-dark hover:bg-cream hover:text-taupe-dark"
              >
                <Link href="/products">Shop Collection</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base hover-lift text-cream-light border-cream-light hover:bg-taupe-dark"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <div
            className={`relative h-[400px] md:h-[500px] bg-taupe-dark/30 rounded-lg p-8 flex items-center justify-center ${isVisible ? "fade-in-right" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-taupe-dark/20 to-transparent rounded-lg"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f0iorXgs9tNSPcN70phRQgiV0WlJd3.png"
              alt="Hellodie Hoodie"
              fill
              className="object-contain p-8 hover-scale"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}

