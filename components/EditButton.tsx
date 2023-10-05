"use client";

import React, { useContext } from "react";

import { MyContext } from "../context/MyContext";
import { confirmEditedProductFromDatabase } from "../actions/serverActions";
import { Product } from "@typings.d.ts";

export function EditButton({ id, product, price }: Product) {
  const { edit, setEdit, editPriceBookClick, editItemsObject } =
    useContext(MyContext);

  const editValue = async () => {
    setEdit(!edit);

    await confirmEditedProductFromDatabase(id, editItemsObject);
  };

  return (
    <>
      {edit ? (
        <button
          onClick={editValue}
          className="border bg-blue-500 text-black p-2 rounded-md"
        >
          Confirm
        </button>
      ) : (
        <button
          onClick={() => editPriceBookClick(id, product, price)}
          className="border bg-blue-500 text-black p-2 rounded-md"
        >
          Edit
        </button>
      )}
    </>
  );
}
