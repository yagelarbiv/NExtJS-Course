import axios from "axios";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productsResponse = await axios.get("http://localhost:3001/products");
  const products = productsResponse.data;
  console.log({ products });
  return <>{children}</>;
}