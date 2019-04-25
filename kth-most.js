const listOfStrings = ['hi', 'hello', 'hiya', 'hi', 'hi', 'hello', 'hola', 'hola', 'hiya', 'hi', 'hello', 'hiya'];

const kthMost = (s) => {
  const stringCount = {};
  for (const word of s) {
    if (stringCount[word] === undefined) {
      stringCount[word] = 1;
    } else {
      stringCount[word]++;
    }
  }
  console.log('stringCount:', stringCount);
  return Object.entries(stringCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(e => e[0]);
};

console.log(kthMost(listOfStrings));
