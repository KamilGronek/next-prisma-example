"use client";

import React, { useState, FormEvent, use } from "react";
import { useRouter } from "next/navigation";

type productsProps = {
  products: [];
};

export function SearchClientSideForm({ products }: productsProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [showError, setShowError] = useState(false);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");

    products.some((product: any) => product.id === search)
      ? router.push(`/products/${search}`)
      : setShowError(true);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-5 max-w-xl mx-auto p-5"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // name="search"
        className="border border-gray-300 p-2 rounded-md"
      />
      {showError ? <p> Id doesn't exist !</p> : ""}

      <button
        type="submit"
        className="border bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}
