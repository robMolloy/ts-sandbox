type TValueObject = { [k: string]: { value: string } };

type TObject1 = { [k: string]: string };
type TObject2 = { [key in keyof TValueObject]: TValueObject[string]["value"] };

const parseValueObject = (valueObject: TValueObject): TObject2 => {
  const ObjectKeys = Object.keys(valueObject);
  const rtn = {} as TObject2;
  ObjectKeys.forEach((key) => {
    rtn[key] = valueObject[key].value;
  });
  return rtn;
};

type TValueCar = { make: { value: string }; id: { value: string } };
type TCarKey = keyof TValueCar;
type TCar = { make: string; id: string };

const parseCarValueObject = (valueObject: TValueCar) => {
  const ObjectKeys = Object.keys(valueObject) as TCarKey[];

  const rtn = {} as TCar;
  ObjectKeys.forEach((key) => {
    rtn[key] = valueObject[key].value;
  });

  return rtn;
};

type TValueShoe = { brand: { value: string }; id: { value: string } };
type TShoeKey = keyof TValueShoe;
type TShoe = { brand: string; id: string };

const parseGenericValueObject = <T1 extends TValueObject>(valueObject: T1) => {
  type T1Refined = { [key in keyof T1]: T1[string]["value"] };
  const ObjectKeys = Object.keys(valueObject) as (keyof T1)[];

  const rtn = {} as T1Refined;
  ObjectKeys.forEach((key) => {
    rtn[key] = valueObject[key].value;
  });

  return rtn;
};

const valueShoe: TValueShoe = {
  brand: { value: "prada" },
  id: { value: "high-heel" },
};
const shoe = <TValueShoe>parseGenericValueObject(valueShoe);
console.log(shoe.brand);

// type TValueLaptop = { id: { value: string }; brand: { value: string } };
// type TLaptop = { id: string; brand: string };

// const parseGenericValueObject2 = <T1 extends { id: string }>(valueObject: {
//   [key in keyof T1]: { value: string };
// }) => {
//   const ObjectKeys = Object.keys(valueObject) as (keyof T1)[];

//   const rtn = {} as T1;
//   ObjectKeys.forEach((key) => {
//     rtn[key] = valueObject[key].value;
//   });

//   return rtn;
// };

// const laptop = <TLaptop>parseGenericValueObject2({
//   id: { value: "macbook" },
//   brand: { value: "mac" },
// });
