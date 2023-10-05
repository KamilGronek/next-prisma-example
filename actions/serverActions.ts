"use server";

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  console.log("product!!!:", product);
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  console.log("add to server");

  await fetch("https://6508578356db83a34d9c2952.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};

export const deleteProductFromDatabase = async (id: number) => {
  try {
    const response = await fetch(
      `https://6508578356db83a34d9c2952.mockapi.io/products/${id}`,
      {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      revalidateTag("products");
    } else {
      console.error("Błąd podczas usuwania produktu:", response.statusText);
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas usuwania produktu:", error);
  }

  console.log("delete from server");
};

export const confirmEditedProductFromDatabase = async (
  id: number,
  editItemsObject: object
) => {
  try {
    {
      console.log("editItemsObject:", editItemsObject);
    }
    const response = await fetch(
      `https://6508578356db83a34d9c2952.mockapi.io/products/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(editItemsObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      revalidateTag("products");
    } else {
      console.error("Błąd podczas edytowania produktu:", response.statusText);
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas edytowania produktu:", error);
  }
  console.log("edit from server");
};

//========================================================

export const editCounter = async (itemsValues: object, id: number) => {
  try {
    const response = await fetch(
      `https://6508578356db83a34d9c2952.mockapi.io/products/${id}`,
      {
        method: "PUT",
        cache: "no-cache",
        body: JSON.stringify(itemsValues),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("edit counter from server:", response.statusText);
      revalidateTag("products");
    } else {
      console.error("Błąd podczas edytowania countera:", response.statusText);
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas edytowania produktu:", error);
  }
};
