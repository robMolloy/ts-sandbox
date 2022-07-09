type TApiKey = "mobile" | "broadband";
type TAPiKeyObject = { [key in TApiKey]: any };

type TApiGen<T extends {}> = {
  [key1 in keyof T]: {
    elements: {
      [key: string]: { value: any };
    } & {
      key: { value: key1 };
    };
  };
};

const apiGen: TApiGen<TAPiKeyObject> = {
  mobile: {
    elements: {
      key: { value: "mobile" },
    },
  },
  broadband: {
    elements: {
      key: { value: "broadband" },
    },
  },
};
