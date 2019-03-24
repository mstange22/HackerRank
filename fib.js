const fib = (n) => {
  if (n === 0) return -1;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let a = 0;
  let b = 1;
  let c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

for (let i = 0; i <= 20; i++) {
  console.log(`fib(${i}): ${fib(i)}`);
}
