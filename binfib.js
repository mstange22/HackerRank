// console.log(process.argv);
const fibonacci = (n) => {
  const res = new Array(n + 1);
  res[1] = 1;
  res[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
};

const printBinFib = n => fibonacci(n).toString(2);

console.log(printBinFib(process.argv[2]));
