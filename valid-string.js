const fs = require('fs');

fs.readFile('test-files/test2.txt', 'utf8', (err, data) => {
  console.log(isValid(data));
});

// Complete the isValid function below.
const isValid = (s) => {
  const hashMap = {};
  const freqMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]] += 1;
    } else hashMap[s[i]] = 1;
  }
  console.log(hashMap);
  const keys = Object.keys(hashMap);
  keys.forEach((key) => {
    if (freqMap[hashMap[key]]) {
      freqMap[hashMap[key]] += 1;
    } else {
      freqMap[hashMap[key]] = 1;
    }
  });
  console.log('freqMap:', freqMap);
  const freqArr = Object.entries(freqMap);
  console.log(freqArr);

  // if there are more than 2 different frequencies of letters.
  if (freqArr.length > 2) return 'NO';

  // if there are exactly 2 different frequencies.
  if (freqArr.length === 2) {
    // If one of the two frequencies has more than one letter, fail.
    if (freqArr[0][1] > 1 && freqArr[1][1] > 1) return 'NO';
  
    // Now we know at least one frequency has only one letter.
    // if that frequency is 1 (or only 1 more than other frequency) we can delete one and pass.
    // Check which one is zero and if the frequency is not 1 AND larger than 1 more than the other frequency, fail.
    if (freqArr[0][1] === 1 && freqArr[0][0] !== '1' && parseInt(freqArr[0][0], 10) - parseInt(freqArr[1][0], 10) > 1) return 'NO';
    if (freqArr[1][1] === 1 && freqArr[1][0] !== '1' && parseInt(freqArr[1][0], 10) - parseInt(freqArr[0][0], 10) > 1) return 'NO';
  }
  return 'YES';
};
