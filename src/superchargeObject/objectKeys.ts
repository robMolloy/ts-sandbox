import { TGreetings } from "./types";

const greetings: TGreetings = {
  hi: "hello",
  bye: "goodbye",
};

type TFnObjectKeys = <T = object>(obj1: object) => (keyof T)[];
declare global {
  interface Object {
    getKeys: TFnObjectKeys;
  }
}

const ObjectKeys = <T = object>(obj1: object) => {
  return Object.keys(obj1) as (keyof T)[];
};
Object.getKeys = ObjectKeys;

const greetingKeys = ObjectKeys<TGreetings>(greetings);
const greetingKeys2 = Object.getKeys<TGreetings>(greetings);
console.log(greetingKeys);
console.log(greetingKeys2);
