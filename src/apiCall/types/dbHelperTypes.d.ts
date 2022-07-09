export type TDbItem = {
  id: string;
};

export type TCollection<T> = {
  [key: string]: T;
};
