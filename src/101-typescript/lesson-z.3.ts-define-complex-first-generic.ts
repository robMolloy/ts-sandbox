// THIS IS A TERRIBLE SOLUTION

type TAemKey3 = "mobile" | "broadband";
type TAemKey3Object = { [key1 in TAemKey3]: any };
type TAemValue3 = {
  iconName: { value: TIconName3 };
  identifier: { value: string };
  quantity: { value: number };
};

type TIconName3 = "van" | "mobile" | "360" | "ee";

type T3<T extends string | number | symbol> = { key: { value: T } };

type TFetchAemDataFn3<T1 extends {}, T2 extends {}> = () => Promise<{
  lastModifiedDate: number;
  headlessApiJson: {
    [key1 in keyof T1]: {
      elements: T3<key1> & T2;
    };
  };
}>;

const fetchAemDataFn3: TFetchAemDataFn3<TAemKey3Object, TAemValue3> = () => {
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
