import { notFound } from "next/navigation";
export default function ReviewDetails({ params }:
  { 
    params: { 
      productId: number,
      reviewsId: number
    };
  }) {
    if (params.reviewsId > 1000) {
      notFound();
    };
  return <h1>Review { params.reviewsId } For Product { params.productId }</h1>;
}