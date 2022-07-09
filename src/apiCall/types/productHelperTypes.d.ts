import { TDbItem } from "./dbHelperTypes";

export type TProduct = TDbItem & {
  brand: string;
  model: string;
};
export type TClothingItem = TProduct & {
  gender: "MALE" | "FEMALE" | "UNISEX";
};
