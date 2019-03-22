const dfs = (strings, word) => {
  if (strings.length === 0) return word;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].startsWith(word[word.length - 1])) {
      const copy = strings.slice();
      const [addedWord] = copy.splice(i, 1);
      word += addedWord.slice(1);
      return dfs(copy, word);
    }
  }
  return word;
};

const longestString = (strings) => {
  let max = 0;
  let maxString = '';
  for (let i = 0; i < strings.length; i++) {
    const copy = strings.slice();
    const [word] = copy.splice(i, 1);
    const longest = dfs(copy, word);
    if (longest.length > max) {
      max = longest.length;
      maxString = longest;
    }
  }
  console.log('maxString:', maxString);
  return max;
};

const strings = ['good', 'dog', 'gooddog', 'ksjdhgh', 'hello', 'gooderdoggie'];
console.log(longestString(strings));
