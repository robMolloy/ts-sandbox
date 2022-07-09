// Lesson #2: Getting an item from an array
// Let’s say you have declared type TListOfItems = ({a:string, b: number})[] and you just want one item from the array.
// You could always repeat yourself with type TItem = { a:string, b:number } but that will make your code harder to maintain, as, if you ever change TItem you will have to change TListOfItems also.
// It’s makes more sense to just get the item from the array;

type TListOfItems = { a: string; b: number }[];
type TItem = TListOfItems[number]; // returns type of { a: string; b: number }

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
