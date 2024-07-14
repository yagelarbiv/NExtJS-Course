import axios from "axios";
import { cookies } from "next/headers";

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
};

export default async function ProductsPage(){
  const res = await axios.get("http://localhost:3001/products");
  const products: Product[] = res.data;

  const cookieStore = cookies();
  cookieStore.get("theme");

  const productsResponse = await axios.get("http://localhost:3001/products/2");
  const detail: Product = productsResponse.data;

  return(
    <ul className="space-y-4 p-4">
    {products.map((product: Product) => (
      <li
        key={product.id}
        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
      >
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-medium">${product.price}</p>
        <p>{detail.title}</p>
      </li>
    ))}
  </ul>
  );
};