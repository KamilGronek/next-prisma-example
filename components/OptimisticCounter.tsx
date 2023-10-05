"use client";

import React, { useContext } from "react";

import { editCounter } from "../actions/serverActions";
import { experimental_useOptimistic as useOptimistic, useState } from "react";

import { MyContext } from "../context/MyContext";

// export function EditButton({ id, product, price }) {
//   const { edit, setEdit, editPriceBookClick, editItemsObject } =
//     useContext(MyContext)

type Props = {
  id: number;
  counter: string;
  product: string;
  price: string;
};

export const OptimisticCounter = ({ id, counter, product, price }: Props) => {
  const [newCounter, setNewCounter] = useState(counter);

  //   const { changeCounter } = useContext(MyContext);

  //   const [OptimisticLikes, addOptimisticLikes] = useOptimistic(
  //     likes,
  //     (state, amount) => state + Number(amount)
  //   );

  //   const updateLikes = async (amount: number) => {
  //     //   addOptimisticLikes(amount);
  //     //   await adjustLikes(amount);
  //   };

  const increaseCounter = async (
    id: number,
    counter: string,
    product: string,
    price: string
  ) => {
    setNewCounter((prevCounter) => prevCounter + 1);

    console.log("counter:", newCounter);

    const itemsValues = {
      id: id,
      counter: newCounter,
      product: product,
      price: price,
    };

    await editCounter(itemsValues, id);
  };

  //   const decreaseCounter = async (
  //     id: number,
  //     counter: string,
  //     product: string,
  //     price: string
  //   ) => {
  //     setNewCounter((prevCounter) => prevCounter - 1);

  //     const itemsValues = {
  //       id: id,
  //       counter: counter,
  //       product: product,
  //       price: price,
  //     };

  //     await editCounter(itemsValues, id);
  //   };

  return (
    <div className="flex space-x-2 border p-5">
      <button
        className="border bg-blue-500 text-black p-2 rounded-md"
        // onClick={() => decreaseCounter(id, counter, product, price)}
      >
        -
      </button>
      <p>{newCounter}</p>
      <button
        className="border bg-blue-500 text-black p-2 rounded-md"
        onClick={() => increaseCounter(id, counter, product, price)}
      >
        +
      </button>
    </div>
  );
};
