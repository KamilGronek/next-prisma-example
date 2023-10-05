import {
  addProductToDatabase,
  // editProductToDatabase,
} from "../../actions/serverActions";
import { Product } from "@typings.d.ts";
import { DeleteButton } from "../../components/DeleteButton";
import { EditButton } from "../../components/EditButton";
import { FetchComponent } from "../../components/FetchComponent";
import { MyProvider } from "../../context/MyContext";
import { OptimisticCounter } from "../../components/OptimisticCounter";
import { SearchClientSideForm } from "../../components/SearchClientSideForm";
// import PostPage from "./products/[productId]/page";
import Link from "next/link";
// import { useState } from "react";

export default async function Home() {
  const res = await fetch(
    `https://6508578356db83a34d9c2952.mockapi.io/products`,
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="">
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input name="price" className="border border-gray-300 p-2 rounded-md" />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <SearchClientSideForm products={products} />

      <h2 className="font-bold p-5">List of Products: {products.length}</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <MyProvider>
              <FetchComponent {...product} />
              <OptimisticCounter {...product} />
              <DeleteButton productId={product.id} />
              <EditButton {...product} />
            </MyProvider>
            {/* <page productId={product.id} /> */}
            <Link href={`/products/${product.id}`}>About</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

// const response = await fetch("http://localhost:3000/likes", {
//   cache: "no-cache",
//   next: {
//     tags: ["likes"],
//   },
// });

// const { likes } = await response.json();
