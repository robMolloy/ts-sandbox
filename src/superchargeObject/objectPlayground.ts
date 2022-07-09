import { TGreetings } from "./types";

const obj1 = {
  hi: "hello",
  bye: "goodbye",
};

const obj1Keys1 = Object.keys(obj1);
const obj1Keys2 = Object.keys(obj1) as Array<keyof typeof obj1>;

const obj2: TGreetings = {
  hi: "hello",
  bye: "goodbye",
};

const obj2Keys1 = Object.keys(obj2);
const obj2Keys2 = Object.keys(obj2) as Array<keyof typeof obj2>;

const ObjectKeys1 = <T = object>(obj1: object): Array<keyof T> => {
  return Object.keys(obj1) as Array<keyof T>;
};
const obj1Keys3 = ObjectKeys1<TGreetings>(obj1);

const ObjectKeys2 = (obj1: object): Array<keyof typeof obj1> => {
  return Object.keys(obj1) as Array<keyof typeof obj1>;
};
const obj1Keys4 = ObjectKeys2(obj1);
