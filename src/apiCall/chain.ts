import { products } from "./allData";
import {
  // TGetFirestoreItemById,
  // TFirestoreItem,
  // TFirestoreItems,
  // TFirestoreWhere,
  TShoe,
} from "./types";

type TFirestoreItem<TGenericItem> = TGenericItem;

type TGetFirestoreItemById<TGenericItem> = (
  collection: string,
  id: string
) => TFirestoreItem<TGenericItem>;

const getFirestoreItemById: TGetFirestoreItemById<{ [key: string]: string }> = (
  collection,
  id
) => {
  return products?.[collection]?.[id];
};

const response = getFirestoreItemById<TShoe>("shoeStore", "id1");

// const useFirestoreDb = (store) => {
//   return {};
// };

// const firestoreDB = {
//   get: () => ({
//     from: (collection) => ({
//       byId: () => getFromCollectionById(),
//     }),
//   }),
//   // getById: (id: string): TFirestoreItem => getFirestoreItemById(id),
//   // get: () => ({
//   //   where: (...where: TFirestoreWhere) => ({}),
//   // }),
// };

// const singleItem = firestoreDB.getById("id1");
