const useState = <T>(initial: T): [() => T, (v: T) => void] => {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
};

const [state, setState] = useState("hi");

console.log(1);
