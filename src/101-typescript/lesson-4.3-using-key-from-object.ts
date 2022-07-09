// Lesson #4.3: Using a key from an object to define a nested object
// Using union types opens up another opportunity - we can get the key to match another value within an object

type TDogName = "spot" | "wilf" | "brian";
type TDogData1 = {
  [key in string]?: {
    name: key;
    age: number;
    breed: string;
  };
};

const dogData1: TDogData1 = {
  spot: {
    name: "anystringvalue", // but how do we enforce the same name ???
    age: 12,
    breed: "black labrador",
  },
};

// By using the union syntax that we used in the last lesson it will enforce the key to be the same as the value of name

type TDogData2 = {
  [key in TDogName]?: {
    name: key;
    age: number;
    breed: string;
  };
};

const dogData2: TDogData2 = {
  spot: {
    name: "spot", // wilf and brian will also cause an error
    age: 12,
    breed: "black labrador",
  },
};

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
