type TAemKey4 = "mobile" | "broadband";
type TIconName4 = "van" | "mobile" | "360" | "ee";

type TGen4 = { key: string };

type TAemItem4 = {
  key: TAemKey4;
  iconName: TIconName4;
  identifier: string;
  quantity: number;
};

type TAemItemKey4 = keyof TAemItem4;

type TAemElement4<T extends TGen4> = {
  [key in keyof T]: { value: T[key] };
};

type TAemElementOmitKey4<T extends TGen4> = Omit<TAemElement4<T>, "key">;

type TAemHeadlessApiJson4<T extends TGen4> = {
  [key1 in TAemKey4]: {
    elements: TAemElementOmitKey4<T> & {
      key: { value: key1 };
    };
  };
};

type TAemResponse4<T extends TGen4> = {
  lastModifiedDate: number;
  headlessApiJson: TAemHeadlessApiJson4<T>;
};
type TAemReturn4<T extends TGen4> = Promise<TAemResponse4<T>>;
type TFetchAemDataFn4<T extends TGen4> = () => TAemReturn4<T>;

const aemItem4: TAemItem4 = {
  key: "mobile",
  iconName: "ee",
  identifier: "someidentifier",
  quantity: 123456789,
};

const aemElement4: TAemElement4<TAemItem4> = {
  key: { value: "mobile" },
  iconName: { value: "ee" },
  identifier: { value: "string" },
  quantity: { value: 1234567890 },
};

const fetchAemDataFn4: TFetchAemDataFn4<TAemItem4> = () => {
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
