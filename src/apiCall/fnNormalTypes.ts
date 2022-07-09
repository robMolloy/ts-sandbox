// type anyNormalObject = {
//   value?: string | number;
//   value2?: string | number;
//   value3?: string | number;
// };
// type specificNormalObject = { value: string | number };

// const normalFn1 = (someValue: string): anyObject => {
//   return { value: someValue };
// };

// type TNormalFn2 = (someValue: string) => anyObject;
// const normalFn2: TNormalFn2 = (someValue: string): anyObject => {
//   return { value: someValue };
// };

// const normalRtn: anyObject = { value: "someValue" };

// const parseApiResponse = <T extends {}>(someA: string): T => {
//   //some code here
//   return parsedResponse;
// };

// const newValue1 = normalFn1("hi");
// const newValue2 = normalFn2("hi");
