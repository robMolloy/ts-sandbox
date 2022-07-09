type TPaper2 = {
  size: string;
  weight: string;
  isBlank: string;
};
type TGenericApiResponse = {
  [k in keyof T1]: { value: T1[k] };
}<T1 extends {[key:string]:string}>;

type TPaperApiResponse = {
  [key in TPaperKey]: { value: TPaper[key] };
};

const paper2ApiResponse: TGenericApiResponse<TPaper2> = {
  size: { value: "A4" },
  weight: { value: "100" },
  isBlank: { value: "true" },
};
