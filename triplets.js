const countTriplets = (arr, r) => {
  let count = 0;
  const hashMap = {};
  const partials = {};

  for (let i = 0; i < arr.length; i++) {
    if (partials[arr[i] / r]) {
      count += partials[arr[i] / r];
    }
    if (hashMap[arr[i] / r]) {
      partials[arr[i]] = hashMap[arr[i] / r] + (partials[arr[i]] ? partials[arr[i]] : 0);
    }
    hashMap[arr[i]] = hashMap[arr[i]] ? hashMap[arr[i]] += 1 : 1;
  }
  return count;
};

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets(new Array(100).fill(1), 1));
