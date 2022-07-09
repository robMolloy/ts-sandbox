type TGeneralApiResponse = {
  data: { [key: string]: { value: string | number } }[];
};
type TGeneralUnparsedResponseItem = TGeneralApiResponse["data"][number];
type TGeneralParsedResponseItem = {
  [x in keyof TGeneralUnparsedResponseItem]: TGeneralUnparsedResponseItem[string]["value"];
};
type TGeneralParsedResponse = TGeneralParsedResponseItem[]; // array of objects with any string as a key

type TPersonApiResponse = {
  data: {
    name: { value: string };
    age: { value: number };
  }[];
};
type TPersonParsedResponseItem = { name: string; age: number };
type TPersonParsedResponse = TPersonParsedResponseItem[];

type TShoeApiResponseData = {
  make: { value: string };
  model: { value: string };
}[];
type TShoeApiResponse = { data: TShoeApiResponseData };
type TShoeParsedResponseItem = { make: string; model: string };
type TShoeParsedResponse = TShoeParsedResponse[];

const apiResponse = {
  data: [
    { bonjour: { value: "hello" }, aurevoir: { value: "goodbye" } },
    { bonjour: { value: "olah" }, aurevoir: { value: "adios" } },
  ],
};
const apiPersonResponse = {
  data: [
    { name: { value: "john" }, age: { value: 42 } },
    { name: { value: "janet" }, age: { value: 28 } },
  ],
};

const apiShoeResponse = {
  data: [
    { make: { value: "reebok" }, model: { value: "classic" } },
    { make: { value: "adidas" }, model: { value: "predator" } },
  ],
};

function parseApiResponse<T1 extends TGeneralApiResponse>(apiResponse: T1) {
  return apiResponse.data.map((obj) => {
    type TObjectKey = keyof T1["data"][number];
    const objectKeys = Object.keys(obj) as TObjectKey[];

    // let test1: TObjectKey = "anyString";

    type TRtn = { [x in TObjectKey]: string | number };
    const rtn = {} as TRtn;

    objectKeys.forEach((key) => {
      rtn[key] = obj.value;
    });

    return rtn;
  });
}

const example1 = parseApiResponse(apiResponse); // returns [{ bonjour: "hello", aurevoir: "goodbye" },{ bonjour: "olah", aurevoir: "adios" }]
const example2 = parseApiResponse<TPersonApiResponse>(apiPersonResponse);
const example3 = parseApiResponse<TShoeApiResponse>(apiShoeResponse);
