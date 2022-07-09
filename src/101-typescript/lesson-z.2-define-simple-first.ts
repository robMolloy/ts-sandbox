type TAemKey2 = "mobile" | "broadband";
type TIconName2 = "van" | "mobile" | "360" | "ee";

type TAemItem2 = {
  key: TAemKey2;
  iconName: TIconName2;
  identifier: string;
  quantity: number;
};

type TAemItemKey2 = keyof TAemItem2;

type TAemElement2 = {
  [key in TAemItemKey2]: { value: TAemItem2[key] };
};
type TAemElementOmitKey2 = Omit<TAemElement2, "key">;

type TAemHeadlessApiJson2 = {
  [key1 in TAemKey2]: {
    elements: TAemElementOmitKey2 & {
      key: { value: key1 };
    };
  };
};

type TAemResponse2 = {
  lastModifiedDate: number;
  headlessApiJson: TAemHeadlessApiJson2;
};
type TAemReturn2 = Promise<TAemResponse2>;
type TFetchAemDataFn2 = () => TAemReturn2;

const fetchAemDataFn2: TFetchAemDataFn2 = () => {
  return new Promise((res) => {
    res({
      lastModifiedDate: 123456789,
      headlessApiJson: {
        mobile: {
          elements: {
            key: { value: "mobile" },
            iconName: { value: "ee" },
            identifier: { value: "string" },
            quantity: { value: 12345678 },
          },
        },
        broadband: {
          elements: {
            key: { value: "broadband" },
            iconName: { value: "ee" },
            identifier: { value: "string" },
            quantity: { value: 12345678 },
          },
        },
      },
    });
  });
};

const aemItem2: TAemItem2 = {
  key: "mobile",
  iconName: "ee",
  identifier: "someidentifier",
  quantity: 123456789,
};
