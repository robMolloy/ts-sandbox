// Lesson #3: Naming convention - Union Types

// A union is an expression of valid options for a particular type. Defined using a “|” (pipe) symbol
// Let’s say the sizes of a jumper can be small, medium or large and we define  type T = 'small' | 'medium' | 'large' what is a good name for type T?
// It’s tempting to think that `type TJumperSizes` is a good name;

type TJumperSizes = "small" | "medium" | "large";
const jumperSize: TJumperSizes = "small";

// This isn’t so bad, but take note of a couple of things;
// - First, the const name and type name are out of sync (one is plural, one is singular), this should be the first giveaway.
// - Second, if we want to pluralize it we’re going to struggle.
// Let’s do something similar with dress sizes;

type TDressSize = "small" | "medium" | "large";
type TDressSizes = TDressSize[];
const dressSize: TDressSize = "small";
const dressSizes: TDressSizes = ["medium", "large", "large", "small"];

// So, generally, it’s a good idea to define unions as a singular.
// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
