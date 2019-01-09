const fs = require('fs');

fs.readFile('test-files/team-test.txt', 'utf8', (err, data) => {
  main(data);
});

const acmTeam = (topic) => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let sum = 0;
      for (let k = 0; k < topic[i].length; k++) {
        // eslint-disable-next-line
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          sum += 1;
        }
      }
      if (sum > max) {
        max = sum;
        count = 1;
      } else if (sum === max) {
        count += 1;
      }
    }
  }
  // console.log('count', count);
  return [max, count];
};

const main = (data) => {
  const input = data.split('\n');
  const arr = input.slice(1);
  console.log(acmTeam(arr));
};
