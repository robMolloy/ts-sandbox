// Lesson #5.1: Getting an item from an object
// Just like in lesson #2 where we made a type from an item in an array, we can do something similar with an object

type TTShirtData = {
  [key: string]: {
    quantity: number;
    color: string;
  };
};

// Instead of passing a `number` into an array, in order to make a type out of `{ quantity: number; color: string;}` we can pass in `string`?

type TTShirtItem = TTShirtData[string];

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
