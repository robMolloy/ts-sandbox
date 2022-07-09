// Lesson #8: Create your item type dynamically
// Ordinarily we would want to keep all our types in one easy to maintain directory but if you expect your types to change in te future you may want to create the type dynamically with `typeof`
// Be careful with this and at some point you may want to refactor, but it's good for keeping multiple objects in-sync from a type perspective.

const anObject1 = { a: "a", b: "b" };
type TAnObject = typeof anObject1;
const anObject2: TAnObject = { a: "c", b: "d" };

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
