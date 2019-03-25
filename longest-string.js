// const dfs = (strings, word) => {
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].startsWith(word[word.length - 1])) {
//       const copy = strings.slice();
//       const [addedWord] = copy.splice(i, 1);
//       word += addedWord.slice(1);
//       return dfs(copy, word);
//     }
//   }
//   return word;
// };

// const longestString = (strings) => {
//   let max = 0;
//   let maxString = '';
//   for (let i = 0; i < strings.length; i++) {
//     const copy = strings.slice();
//     const [word] = copy.splice(i, 1);
//     const longest = dfs(copy, word);
//     if (longest.length > max) {
//       max = longest.length;
//       maxString = longest;
//     }
//   }
//   console.log('maxString:', maxString);
//   return max;
// };

const dfs = (s, words) => {
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(s[s.length - 1])) {
      s += words[i].slice(1);
      const copy = words.slice();
      copy.splice(i, 1);
      return dfs(s, copy);
    }
  }
  return s.length;
};

const longestString = (words) => {
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    const copy = words.slice();
    const [word] = copy.splice(i, 1);
    longest = Math.max(longest, dfs(word, copy));
  }
  return longest;
};

const strings = ['ksjdhgh', 'good', 'dog', 'gooddog', 'hello', 'gooderdoggie'];
console.log(longestString(strings));

// const getTempLongest = (s, arr, visited) => {
//   if (visited.length === arr.length) return s.length;
//   for (const word of arr) {
//     if (!visited.includes(word)) {
//       visited.push(word);
//       if (word.startsWith(s[s.length - 1])) {
//         s += word.slice(1);
//         return getTempLongest(s, arr, visited);
//       }
//     }
//   }
//   return s.length;
// };

// const longestString = (arr) => {
//   let longest = 0;
//   for (const word of arr) {
//     const visited = [word];
//     const tempLongest = getTempLongest(word, arr, visited);
//     if (tempLongest > longest) longest = tempLongest;
//   }
//   return longest;
// };
