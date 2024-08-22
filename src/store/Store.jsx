"use client";

import { create } from "zustand";
import productData from "./productData";
import keyWordData from "./keyWordData";

const useProductStore = create(() => ({
  product: productData,
}));

const useKeyWordStore = create(() => ({
  keyWord: keyWordData,
}));

export const useProductData = () => useProductStore((store) => store.product);

export const useKeyWordData = () => useKeyWordStore((store) => store.keyWord);
