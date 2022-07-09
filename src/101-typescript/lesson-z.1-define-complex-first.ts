// Lesson #7: Define your most complex object first

type TAemKey1 = "mobile" | "broadband";
type TIconName1 = "van" | "mobile" | "360" | "ee";

type TFetchAemDataFn1 = () => Promise<{
  lastModifiedDate: number;
  headlessApiJson: {
    [key in TAemKey1]: {
      elements: {
        key: { value: key };
        iconName: { value: TIconName1 };
        identifier: { value: string };
        quantity: { value: number };
      };
    };
  };
}>;
type TAemReturn1 = ReturnType<TFetchAemDataFn1>;
type TAemResponse1 = Awaited<TAemReturn1>;
type TAemElement1 = TAemResponse1["headlessApiJson"][TAemKey1]["elements"];
type TAemElementKey1 = keyof TAemElement1;
type TAemItem1 = {
  [key in TAemElementKey1]: TAemElement1[key]["value"];
};

const fetchAemDataFn1: TFetchAemDataFn1 = () => {
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

const aemItem1: TAemItem1 = {
  key: "mobile",
  iconName: "ee",
  identifier: "someidentifier",
  quantity: 123456789,
};
