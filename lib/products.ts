import type { Product } from "./types"

const products: Product[] = [
  {
    id: "hoodie-1",
    name: "Hello World Hoodie",
    description:
      "A comfortable black hoodie featuring the classic 'Hello World' design. Perfect for developers and tech enthusiasts.",
    price: 59.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a57TPSo0XSlkzFfiJdoFMlDcMzZSgJ.png",
  },
  {
    id: "hoodie-2",
    name: "Programmer Hoodie",
    description:
      "Show off your coding skills with this stylish Programmer hoodie. Features a sleek design with purple text and white scratch marks.",
    price: 64.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AEIAfgl5XYLBhRV1nDNFBk9xmcrQPR.png",
  },
  {
    id: "hoodie-3",
    name: "Let's Go Hoodie",
    description:
      "Make a bold statement with our Let's Go hoodie. Features a clean, minimalist design with an energetic message.",
    price: 54.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i6CdQuBBqmTQlEygxqKmY8nK8hhNwE.png",
  },
  {
    id: "hoodie-4",
    name: "Vintage Hoodie",
    description:
      "Not old, but Vintage. This hoodie celebrates timeless style with a modern twist. Features blue accent text on a black background.",
    price: 59.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P6zjd6rJ6GZFVbz5jZ4nXIHDLsbuCq.png",
  },
  {
    id: "hoodie-5",
    name: "Scary Story Hoodie",
    description:
      "Make a statement with our Scary Story hoodie. Features bold red text with white accents on a black background.",
    price: 62.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-icSJz7CbvgQp4fNP0Z9jwEc89zxhEf.png",
  },
  {
    id: "hoodie-6",
    name: "Dam Right Hoodie",
    description:
      "Show your confidence with our Dam Right hoodie. Features a playful design with blue accent text on a black background.",
    price: 57.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qB3TSrw9tzRAHyny6Zx87au8tM9HgO.png",
  },
  {
    id: "hoodie-7",
    name: "Good Morning Sunshine Hoodie",
    description:
      "Start your day with positivity in our Good Morning Sunshine hoodie. Features a cheerful design with pink accent text.",
    price: 59.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJj6WXe6bi61GM0ZfqzX92YOreiSOF.png",
  },
  {
    id: "hoodie-8",
    name: "Daddy Hoodie",
    description:
      "Perfect for new dads or dads-to-be, our Daddy hoodie makes a great gift. Features a clean, bold design with 'EST. 2025' text.",
    price: 64.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I1mzIRrNomWKAXGi4PcN5qj4JlfmYS.png",
  },
  {
    id: "hoodie-9",
    name: "Hellodie Classic Hoodie",
    description:
      "Our signature Hellodie hoodie featuring our brand name in an elegant font. A timeless piece for any wardrobe.",
    price: 69.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f0iorXgs9tNSPcN70phRQgiV0WlJd3.png",
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

