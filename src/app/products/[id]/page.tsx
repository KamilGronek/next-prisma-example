import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

const fetchItem = async (id: string) => {
  const res = await fetch(
    `https://6508578356db83a34d9c2952.mockapi.io/products/${id}`,
    {
      cache: "no-cache",
    }
  );

  const product = await res.json();
  return product;
};

async function aboutItem({ params: { id } }: PageProps) {
  const item = await fetchItem(id);

  return (
    <div className="p-5 shadow">
      <p>Nr Id:{item.id}</p>
      <p>Product:{item.product}</p>
      <p>Price: {item.price}</p>
    </div>
  );
}

export default aboutItem;
