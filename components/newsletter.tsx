"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"

export default function Newsletter() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="bg-taupe-light py-16">
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center space-y-6 ${inView ? "scale-in" : "opacity-0"}`}>
          <span className="subtitle-text text-cream-light inline-block mb-2">Stay Updated</span>
          <h2 className="title-text text-3xl text-cream-light">Join Our Newsletter</h2>
          <p className="body-text text-cream">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-cream text-taupe-dark placeholder:text-taupe/70"
            />
            <Button
              type="submit"
              className="hover-lift bg-cream-light text-taupe-dark hover:bg-cream hover:text-taupe-dark"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

