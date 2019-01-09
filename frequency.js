const fs = require('fs');

fs.readFile('test-files/freq-test3.txt', 'utf8', (err, data) => {
  main(data);
});

const freqQuery = (queries) => {
  const map = new Map();
  const freqMap = new Map();
  const res = [];
  queries.forEach((q) => {
    const queryType = q[0];
    const key = q[1];

    // adding element
    if (queryType === 3) {
      res.push(freqMap[key] ? 1 : 0);
    } else {
      // set frequencies
      const oldFreq = map[key] || 0;
      let newFreq;

      if (queryType === 1) {
        newFreq = oldFreq + 1;
        map[key] = map[key] ? map[key] + 1 : 1;
      } else {
        newFreq = oldFreq - 1;
        map[key] = map[key] ? map[key] - 1 : 0;
      }
      // update freqMap
      freqMap[oldFreq] = freqMap[oldFreq] ? freqMap[oldFreq] -= 1 : 0;
      freqMap[newFreq] = freqMap[newFreq] ? freqMap[newFreq] + 1 : 1;
    }
  });
  return res;
};

const main = (input) => {
  const data = input.split('\n');
  const q = data[0];
  const arr = [];
  for (let i = 1; i <= q; i++) {
    const query = data[i].split(' ').map(d => Number(d));
    arr.push(query);
  }
  const ans = freqQuery(arr);
  console.log(ans.join('\n'));
};
