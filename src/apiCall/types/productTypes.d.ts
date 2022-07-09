import { TCollection, TClothingItem } from "./";
type shoeSize = 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type stringSize = "XS" | "S" | "M" | "L" | "XL";
type color =  "red" | "blue" | "pink" | "green";

export type TShoe = TClothingItem & {
  sizes: shoeSize[];
  color: string;
};
export type TTrouser = TClothingItem & {
  sizes: stringSize[];
  color: string;
};
export type TTrousers = TCollection<TTrouser>;
export type TShoes = TCollection<TShoe>;
