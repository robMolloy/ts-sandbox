// Lesson #4.2: Define an object with specific keys
// In lesson #3 we defined a union, and in lesson #4.1 we defined an object. Let’s combine the two so that we can create an object type with specific keys.

type TCatName = "miffy" | "boris" | "mordred";
type TCatInfo = {
  age: number;
  breed: string;
};

// using Record notation
type TCatData1 = Record<TCatName, TCatInfo>;

// using object notation
type TCatData2 = {
  [key in TCatName]: TCatInfo;
};
type TCatData3 = {
  [key in TCatName]: {
    key: key;
    age: number;
    breed: string;
  };
};
// Both of these options work the exact same but one may be more readable than another for you.
const catData1: TCatData1 = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const catData2: TCatData2 = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const catData3: TCatData3 = {
  miffy: { key: "miffy", age: 10, breed: "Persian" },
  boris: { key: "boris", age: 5, breed: "Maine Coon" },
  mordred: { key: "mordred", age: 16, breed: "British Shorthair" },
};
// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
