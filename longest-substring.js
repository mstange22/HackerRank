/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let h = {};
  let count = 0;
  let max = 0;
  const queue = [];
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (h[s[i]]) {
      count = 0;
      h = {};
      queue.push(s[i]);
      startIndex = queue.indexOf(s[i], startIndex) + 1;
      for (let j = startIndex; j < queue.length; j++) {
        h[queue[j]] = 1;
        count += 1;
      }
    } else {
      h[s[i]] = 1;
      queue.push(s[i]);
      count += 1;
      if (count > max) max = count;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('aabaab!bb'));
