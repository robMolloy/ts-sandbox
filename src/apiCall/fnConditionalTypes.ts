type anyObject = {
  value?: string | number;
  value2?: string | number;
  value3?: string | number;
};
type specificObject = { value: string | number };

type conditionalType<T = anyObject> = T;

const createObject:<T> = (someValue: string):T=> {
  return { value: someValue };
};

// const createObjectWrapper = (someValue: string) => {
//   return createObject;
// };

const newValue = createObject<specificObject>("hi");
