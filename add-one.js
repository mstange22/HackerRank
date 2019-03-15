
const addOne = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      return arr;
    }

    if (arr[i] === 9) {
      arr[i] = 0;
    }
  }

  return [1, ...arr];
};

console.log(addOne([1, 3, 5])); // [1, 3, 6]
console.log(addOne([1, 3, 9])); // [1, 4, 0]
console.log(addOne([9, 9, 9])); // [1, 0, 0, 0]
console.log(addOne([0, 0, 0, 0])); // [0, 0, 0, 1]
console.log(addOne([0])); // [1]
