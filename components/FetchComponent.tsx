// import { deleteProductFromDatabase } from "../actions/serverActions";
"use client";

// import { useState } from "react";
import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
// import { ServerInput } from "./ServerInput";
import { Product } from "@typings.d.ts";

export function FetchComponent({ product, price, id }: Product) {
  //   const [valueProduct, setValueProduct] = useState(product);
  //   const [valuePrice, setValuePrice] = useState(price);

  const { edit, changeNameProduct, changePriceProduct, editItemsObject } =
    useContext(MyContext);

  // const [productValue, setProductValue] = useState("");

  // const handleProductChange = (newValue: any) => {
  //   setProductValue(newValue);
  // };

  return (
    <>
      {edit ? (
        // <ServerInput value={productValue} onChange={handleProductChange} />
        <>
          <input
            value={editItemsObject.product}
            name="product"
            className="border border-gray-300 p-2 rounded-md"
            onChange={changeNameProduct}
          />
          <input
            value={editItemsObject.price}
            name="price"
            className="border border-gray-300 p-2 rounded-md"
            onChange={changePriceProduct}
          />
        </>
      ) : (
        <>
          <p>Nr Id: {id}</p>
          <p>Product: {product}</p>
          <p>Price: {price}$</p>
        </>
      )}
    </>
  );
}
