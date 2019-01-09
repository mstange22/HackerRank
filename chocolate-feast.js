function chocolateFeastDoWhile(n, c, m) {
  let barCount = Math.floor(n / c);
  let wrappers = 0;
  do {
    // first time, use money to buy bars and collect wrappers
    if (n > c) {
      const numBars = Math.floor(n / c);
      barCount += numBars;
      n -= numBars * c;
      wrappers += numBars;
    } else {
      // use wrappers
      const numBars = Math.floor(wrappers / m);
      wrappers -= numBars * m;
      wrappers += numBars;
      barCount += numBars;
    }
  } while (wrappers >= m);
  return barCount;
}

console.log(chocolateFeastDoWhile(10, 2, 5));
