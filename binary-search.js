const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const mid = Math.floor(min + max / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};

const sortedArray = [1, 2, 3, 4, 5, 6];
const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12];

console.log(binarySearch(sortedArray, 3));
console.log(binarySearch(sortedArrayOfOddLength, 2));
