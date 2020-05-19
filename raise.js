const raise = (n, pow) => {
  // const powers = [];
  if (pow === 0) return 1;
  if (pow === 1) return n;
  return n * raise(n, pow - 1);
  // for (let i = 0; i <= pow; i++) {
  //   if (i === 0) powers.push(0);
  //   else if (i === 1) powers.push(n);
  //   else powers.push(n * powers[powers.length - 1]);
  // }
  // return powers[pow];
};

console.log(raise(2, 3));
