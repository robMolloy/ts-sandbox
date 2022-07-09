// Lesson #1.1: Assert Object.keys [correction]

// Right, not a great start, I didn’t expect to be screwing up so soon. You’ll be pleased to know I’ve created a way of doing these from now on that makes these mistakes a bit less likely .
// The above should be:

// The return of Object.keys(someObject) will always be type string[] which can be misleading or cause errors. You can be more specific by asserting the exact keys by doing the following;
const someObject = { a: "a", b: "b" };
const keys = Object.keys(someObject) as (keyof typeof someObject)[];

// Please feel free to ask any typescript question, discuss this or any other typescript topic in the chat
