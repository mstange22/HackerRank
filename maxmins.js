const fs = require('fs');

fs.readFile('test-files/maxmin-test.txt', 'utf8', (err, data) => {
  main(data);
});

function solve(arr) {
  // solve here
  const maxMins = [];

  // for each length
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < arr.length - i; j++) {
      console.log(arr.slice(j, j + 1 + i));
      const min = Math.min(...arr.slice(j, j + 1 + i));
      if (min > max) max = min;
    }
    maxMins.push(max);
  }
  return maxMins;
}

// console.log(solve([2, 6, 1, 12]));

const main = () => {
  // const input = data.split('\n');
  // const n = input[0];
  // const arr = input[1].split(' ');
  // console.log('length:', arr.length);
  console.log(solve([1, 2, 3, 5, 1, 13, 3]));
};

main();
