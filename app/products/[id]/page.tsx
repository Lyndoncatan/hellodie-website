import { getProducts } from "@/lib/products"
import ProductPageClient from "./ProductPageClient"

export function generateStaticParams() {
  const products = getProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductPageClient params={params} />
}

