type TPaperSize = "A4" | "A3" | "A2";

type TPaper = {
  size: TPaperSize;
  weight: number;
  isBlank: boolean;
};
type TPaperKey = keyof TPaper;
type TPaperApiResponse = {
  [key in TPaperKey]: { value: TPaper[key] };
};

const paper1: TPaper = {
  size: "A4",
  weight: 100,
  isBlank: true,
};
const paperApiResponse: TPaperApiResponse = {
  size: { value: "A4" },
  weight: { value: 100 },
  isBlank: { value: true },
};
