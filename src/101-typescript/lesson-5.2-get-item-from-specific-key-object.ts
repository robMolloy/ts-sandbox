// Lesson #5.2: Getting an item from an object with defined keys
// Just like in lesson #5.1 we can make a type from an item in a key-specific object

type TBagName = "rucksack" | "handbag" | "carrier bag";
type TBagData = {
  [key in TBagName]: {
    quantity: number;
    color: string;
  };
};

// Instead of passing a `string` into `TBagData`, to make a type out of `{ quantity: number; color: string;}` we can pass in `TBagName`?

type TBagItem = TBagData[TBagName];

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
