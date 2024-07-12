import Product from "@/components/product"
import Reviews from "@/components/reviews"
import { Suspense } from "react"

function ProductDetailPage() {
  return (
    <div>
      <h1>Product-Detail Page</h1>
      <Suspense fallback={<p>Loading Product Details</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  )
}

export default ProductDetailPage