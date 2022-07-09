// Lesson # resolve a promise

type TStringPromise = Promise<string>;
type TString = Awaited<TStringPromise>;

const str: TString = "string";

type TObjectPromise = Promise<{ a: string; b: number }>;
type TObject = Awaited<TObjectPromise>;

const obj: TObject = { a: "string", b: 1 };
