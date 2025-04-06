"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container py-12">
      <div className={`max-w-3xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <span className="subtitle-text text-taupe inline-block mb-2">Our Story</span>
        <h1 className="title-text text-4xl mb-8 text-taupe-dark">About Hellodie</h1>

        <div className="prose max-w-none">
          <p className="text-xl leading-relaxed mb-6 body-text">
            Welcome to Hellodie, where style meets comfort in our premium hoodie collection.
          </p>

          <div className="my-12 bg-hazelnut p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bt899ttqUWw2Q6PFAYh4ACV0wfDTVP.png"
                  alt="Lyndon Domini Catan"
                  fill
                  className="object-cover hover-scale"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="title-text text-2xl mb-2 text-taupe-dark">Lyndon Domini Catan</h3>
                <p className="text-taupe mb-4 subtitle-text">Web Developer & Founder</p>
                <p className="body-text text-taupe-dark">
                  As both a web developer and the founder of Hellodie, Lyndon brings his technical expertise and
                  creative vision together to create a unique shopping experience and high-quality products. His passion
                  for both technology and fashion has led to the creation of a brand that values quality, style, and
                  customer satisfaction above all else.
                </p>
              </div>
            </div>
          </div>

          <h2 className="title-text text-2xl mt-8 mb-4 text-taupe-dark">Our Story</h2>
          <p className="mb-6 body-text">
            Founded with a passion for quality apparel and unique designs, Hellodie has quickly become a go-to
            destination for those seeking comfortable yet stylish hoodies. Our commitment to quality materials and
            attention to detail sets us apart in the fashion industry.
          </p>

          <h2 className="title-text text-2xl mt-8 mb-4 text-taupe-dark">Our Mission</h2>
          <p className="mb-6 body-text">
            At Hellodie, our mission is to provide comfortable, stylish, and high-quality hoodies that allow you to
            express yourself. We believe that what you wear should reflect who you are, and our diverse collection of
            designs ensures there's something for everyone.
          </p>

          <h2 className="title-text text-2xl mt-8 mb-4 text-taupe-dark">Quality Commitment</h2>
          <p className="mb-6 body-text">
            Each Hellodie product is crafted with premium materials to ensure comfort, durability, and style. We stand
            behind the quality of our products and are committed to customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-hazelnut-light p-6 rounded-lg hover-lift shadow-md">
              <h3 className="title-text text-xl mb-3 text-taupe-dark">Premium Materials</h3>
              <p className="text-sm body-text">
                Our hoodies are made from high-quality fabrics that provide comfort and durability.
              </p>
            </div>
            <div className="bg-hazelnut-light p-6 rounded-lg hover-lift shadow-md">
              <h3 className="title-text text-xl mb-3 text-taupe-dark">Unique Designs</h3>
              <p className="text-sm body-text">Each design is carefully crafted to be both stylish and meaningful.</p>
            </div>
            <div className="bg-hazelnut-light p-6 rounded-lg hover-lift shadow-md">
              <h3 className="title-text text-xl mb-3 text-taupe-dark">Customer Focus</h3>
              <p className="text-sm body-text">We prioritize customer satisfaction in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

