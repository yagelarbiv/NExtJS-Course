function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function productDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
    if(random === 1){
      throw new Error("Error Loading Product Details");
    };

  return (
    <>
      {children}
      <h1>Feature Products</h1>
    </>
  );
}
