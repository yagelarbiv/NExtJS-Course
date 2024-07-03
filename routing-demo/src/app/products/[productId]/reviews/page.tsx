export default function ReviewDetailsList({ params }: { params: { productId: number } }) {
  return (
    <>
      <h2> a list of all the Reviews about Product { params.productId }</h2>
      <ul>
        <li>reviews 1</li>
        <li>reviews 2</li>
        <li>reviews 3</li>
      </ul>
    </>
  )
}