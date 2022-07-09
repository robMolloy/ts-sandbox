export type TFirestoreItem = { [key: string]: string };
export type TFirestoreItems = { [key: string]: string };
export type TFirestoreWhere = [string, string, string];

type TGetFirestoreItemById = (
  collection: string,
  id: string
) => TFirestoreItem | undefined;
