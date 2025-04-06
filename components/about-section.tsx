"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="bg-hazelnut py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`bg-cream rounded-lg p-8 flex items-center justify-center h-[400px] relative overflow-hidden shadow-lg ${inView ? "fade-in-left" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cream-dark/20 to-transparent"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bt899ttqUWw2Q6PFAYh4ACV0wfDTVP.png"
              alt="Lyndon Domini Catan"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-xl hover-scale"
              unoptimized
            />
          </div>
          <div className={`space-y-6 ${inView ? "fade-in-right" : "opacity-0"}`}>
            <span className="subtitle-text text-taupe-dark inline-block mb-2">Our Story</span>
            <h2 className="title-text text-3xl text-taupe-dark">About Hellodie</h2>
            <p className="body-text text-taupe-dark">
              Founded by web developer Lyndon Domini Catan, Hellodie is dedicated to creating premium hoodies that
              combine style, comfort, and quality. Each design is carefully crafted to ensure you look and feel your
              best.
            </p>
            <p className="body-text text-taupe-dark">
              Our mission is to provide comfortable, stylish, and high-quality hoodies that allow you to express
              yourself. We believe that what you wear should reflect who you are.
            </p>
            <Button asChild className="hover-lift bg-taupe text-cream-light hover:bg-taupe-dark mt-4">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

