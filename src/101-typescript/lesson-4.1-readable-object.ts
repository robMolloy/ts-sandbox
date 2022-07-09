// Lesson #4.1: Define an object in a more readable way
// It is a common practise to define an object using Record const TNumberData: Record<string, number>  but this abstracts away from the “shape” of a JavaScript Object. Why not try;

type TNumberData = { [key: string]: number };
const numberData: TNumberData = {
  one: 1,
  two: 2,
  three: 3,
};

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
