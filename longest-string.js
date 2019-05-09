const getTempLongest = (string, arr, visited) => {
  for (const word of arr) {
    if (!visited[word]) {
      visited[word] = true;
      if (word.startsWith(string[string.length - 1])) {
        string += word.slice(1);
        return getTempLongest(string, arr, visited);
      }
    }
  }
  return string.length;
};

const longestString = (arr) => {
  let longest = 0;
  for (const word of arr) {
    const visited = { [word]: true };
    const currLongest = getTempLongest(word, arr, visited);
    if (currLongest > longest) longest = currLongest;
  }
  return longest;
};

const strings = ['ksjdhgh', 'good', 'dog', 'gooddog', 'hello', 'gooderdoggie'];
console.log(longestString(strings));
