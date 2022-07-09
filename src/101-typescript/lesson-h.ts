// Lesson # get props from a function

type TSomeFn = (p1: { event: string; data: { payload: number } }) => Boolean;
type TSomeFnRtn = ReturnType<TSomeFn>;
type TSomeFnParameters = Parameters<TSomeFn>;

const someFnRtn: TSomeFnRtn = true;
const someFnParameters: TSomeFnParameters[0] = {
  event: "send",
  data: { payload: 1 },
};
