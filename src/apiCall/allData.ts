import { TShoes, TTrousers } from "./types";

const shoeStore: TShoes = {
  id1: {
    id: "id1",
    brand: "Reebok",
    model: "Classic",
    sizes: [8, 9, 10],
    color: "blue",
    gender: "UNISEX",
  },
  id3: {
    id: "id3",
    brand: "Adidas",
    model: "Predators",
    sizes: [7, 8, 9, 10],
    color: "blue",
    gender: "UNISEX",
  },
};

const trouserStore: TTrousers = {
  id2: {
    id: "id2",
    brand: "Levi",
    model: "Skinny Jeans",
    sizes: ["S", "M", "L"],
    color: "blue",
    gender: "UNISEX",
  },
};
export const allData = {
  shoeStore,
  trouserStore,
};
