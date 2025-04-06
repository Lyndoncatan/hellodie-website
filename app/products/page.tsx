import { getProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">All Hoodies</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

