"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Product } from "@typings.d.ts";

type BorrowedBooksProviderProps = {
  children: ReactNode;
};

type LibraryContext = {
  edit: boolean;
  setEdit: (e: any) => void;
  editPriceBookClick: (id: number, product: string, price: string) => void;
  changeNameProduct: (e: any) => void;
  valueProduct: string;
  changePriceProduct: (e: any) => void;
  valuePrice: string;
  newObject: object;
  editItemsObject: object;
  // changeCounter: (
  //   id: number,
  //   counter: string,
  //   product: string,
  //   price: string
  // ) => void;
};

const MyContext = createContext({} as LibraryContext);

const MyProvider = ({ children }: BorrowedBooksProviderProps) => {
  const [edit, setEdit] = useState(false);

  const [editItemsObject, setEditItemsObject] = useState({
    id: "",
    product: "",
    price: "",
  });

  //1.

  const editPriceBookClick = (id: number, product: string, price: string) => {
    setEdit(!edit);

    const itemsValues = {
      id: id,
      product: product,
      price: price,
    };
    setEditItemsObject(itemsValues);
    console.log("itemsValues:", itemsValues); //tu jest ok !
  };

  //2.

  const changeNameProduct = (e: any) => {
    const newItemsValues = {
      ...editItemsObject,
      product: e.target.value,
    };
    setEditItemsObject(newItemsValues);

    console.log("newItemsValues:", newItemsValues);
  };

  const changePriceProduct = (e: any) => {
    let newObject = {
      ...editItemsObject,
      price: parseInt(e.target.value),
    };
    setEditItemsObject(newObject);

    console.log("newObject:", newObject);
  };

  return (
    <MyContext.Provider
      value={{
        edit,
        setEdit,
        editPriceBookClick,
        changeNameProduct,
        changePriceProduct,
        editItemsObject,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
