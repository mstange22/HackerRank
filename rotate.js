const rotate = (arr) => {
  const N = arr.length;
  
  for (let offset = 0; offset < N / 2; offset++) {
    const lastIndex = N - 1 - offset;
    for (let i = 0; i < N - 1 - (2 * offset); i++) {
      const temp = arr[offset][offset + i];
      // upper left gets upper right
      arr[offset][offset + i] = arr[offset + i][lastIndex];
      // upper right gets lower right
      arr[offset + i][lastIndex] = arr[lastIndex][lastIndex - i];
      // lower right gets lower left
      arr[lastIndex][lastIndex - i] = arr[lastIndex - i][offset];
      // lower left gets temp
      arr[lastIndex - i][offset] = temp;
    }
  }
};

const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

console.log(arr);
console.log('');
rotate(arr);
console.log(arr);
