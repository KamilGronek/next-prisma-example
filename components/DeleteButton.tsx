"use client";

import { deleteProductFromDatabase } from "../actions/serverActions";

type productIdProps = {
  productId: number;
};

export function DeleteButton({ productId }: productIdProps) {
  const handleDelete = async () => {
    await deleteProductFromDatabase(productId);
  };

  return (
    <button
      onClick={handleDelete}
      className="border bg-blue-500 text-black p-2 rounded-md"
    >
      Delete
    </button>
  );
}
