import { create } from "zustand";

const useProductStore = create((set) => ({
  product: [],
  setProduct: (newProduct) => {
    set(() => ({
      product: newProduct,
    }));
  },
}));

const useKeyWordStore = create((set) => ({
  keyWord: [],
  setKeyWord: (newKeyWord) => {
    set(() => ({
      keyWord: newKeyWord,
    }));
  },
}));

export const useProductData = () => useProductStore((store) => store.product);
export const useSetProduct = () => useProductStore((store) => store.setProduct);

export const useKeyWordData = () => useKeyWordStore((store) => store.keyWord);
export const useSetkeyWord = () => useKeyWordStore((store) => store.setKeyWord);
