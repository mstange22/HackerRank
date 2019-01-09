const stones = (n, a, b) => {
  const lastStones = [];
  for (let i = 0; i < n; i++) {
    lastStones.push(a * i + b * (n - i - 1));
  }
  console.log(lastStones);
  return [...new Set(lastStones)].sort((a, b) => a - b);
};

console.log(stones(3, 1, 2));
// 4 3 2
// console.log(stones(4, 10, 100));
// console.log(stones(5, 3, 23));
// 12 32 52 72 92
// console.log(stones(58, 69, 24));
// 1368 1413 1458 1503 1548 1593 1638 1683 1728 1773 1818 1863 1908 1953 1998 2043 2088 2133 2178 2223 2268 2313 2358 2403
// 2448 2493 2538 2583 2628 2673 2718 2763 2808 2853 2898 2943 2988 3033 3078 3123 3168 3213 3258 3303 3348 3393 3438 3483
// 3528 3573 3618 3663 3708 3753 3798 3843 3888 3933
