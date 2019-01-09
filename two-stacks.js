const fs = require('fs');

fs.readFile('test/files/stack-test.txt', 'utf8', (err, data) => {
  main(data);
});

const twoStacks = (x, a, b) => {
  let sum = 0;
  let bSum = 0;
  let maxCount = 0;
  let currCount = 0;
  let aPointer = -1;
  let bCount = 0;

  // find index of last item in a that will not bust x
  for (let i = 0; sum + a[i] <= x; i++) {
    sum += a[i];
    aPointer += 1;
    maxCount += 1;
  }

  // after trying all a values, maxCount is our minimum max
  currCount = maxCount;

  // find count in b that will not bust x
  for (let i = 0; bSum + b[i] <= x; i++) {
    bSum += b[i];
    bCount += 1;
  }

  // add each b value and remove any a values that bust x
  for (let i = 0; i < bCount; i++) {
    sum += b[i];
    currCount += 1;
    while (sum > x) {
      sum -= a[aPointer];
      aPointer -= 1;
      currCount -= 1;
    }
    if (currCount > maxCount) maxCount = currCount;
  }
  return maxCount;
};

const main = (data) => {
  const input = data.split('\n');
  const numCases = parseInt(input.shift(), 10);
  const args = [];
  for (let i = 0; i < numCases; i++) {
    const x = input.shift().split(' ')[2];
    const a = input.shift().split(' ').map(e => parseInt(e, 10));
    const b = input.shift().split(' ').map(e => parseInt(e, 10));
    args.push([x, a, b]);
    console.log(twoStacks(x, a, b));
  }
  // console.log(twoStacks(...args[0]));
};
