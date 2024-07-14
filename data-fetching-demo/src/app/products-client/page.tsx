"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./loading";
import ErrorPage from "./error";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage error={error} />
      ) : products && products.length >= 0 ? (
        <ul className="space-y-4 p-4">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
            </li>
          ))}
        </ul>
      ): (
        <p>No products found</p>
      )}
    </>
  );
};

export default ProductsPage;