const a = 4;
const b = 5;
const c = 6;

const arrTest = (...args) => {
  const [arg1, arg2, arg3] = [...args].map(x => x ** 2);
  console.log(arg1, arg2, arg3);
};

arrTest(a, b, c);
