const solve = (arr, money) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const target = money - arr[i];
    if (map[target]) {
      console.log(map[target], i + 1);
      break;
    } else {
      map[arr[i]] = i + 1;
    }
  }
};

solve([1, 4, 5, 3, 2], 4);
solve([2, 2, 4, 3], 4);
solve([1, 2, 3, 5, 6], 5);
solve([2, 7, 8, 5, 8, 3, 8], 16);
