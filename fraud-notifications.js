const fs = require('fs');

fs.readFile('test-files/fraud-notifications-test3.txt', 'utf8', (err, data) => {
  main(data);
});

const getMedian = (arr, d) => {
  let count = 0;
  let res;

  const firstMedianPos = d % 2 === 0 ? d / 2 : Math.ceil(d / 2);
  const secondMedianPos = firstMedianPos + 1;
    
  // find first value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // if we can add all values at this position and still be below the first median value
      if (count + arr[i] < firstMedianPos) {
        // add the values
        count += arr[i];
        // if d is odd, return the index representing the median value
      } else if (d % 2 === 1) {
        res = i;
        break;
        // if even, check if second median value is also at this position
      } else if (count + arr[i] >= secondMedianPos) {
        res = i;
        break;
        // if not, find the next index containing a value and return the average of that and current and next indeces.
      } else {
        const firstMedianValue = i;
        i += 1;
        while (arr[i] === 0) i += 1;
        res = (firstMedianValue + i) / 2;
        break;
      }
    }
  }
  return res;
};

const activityNotifications = (arr, d) => {
  let res = 0;
  const trailing = [];
  const countSortArr = new Array(201).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (i >= d) {
      const median = getMedian(countSortArr, d);
      if (arr[i] >= 2 * median) {
        res += 1;
      }
      countSortArr[trailing.shift()] -= 1;
    }
    trailing.push(arr[i]);
    countSortArr[arr[i]] += 1;
  }

  return res;
};

const main = (input = null) => {
  const data = input.split('\n');
  const firstLine = data[0];
  const arr = data[1].split(' ').map(d => Number(d));
  const d = Number(firstLine.split(' ')[1]);
  console.log(activityNotifications(arr, d));
};
