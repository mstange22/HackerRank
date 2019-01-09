const substrCount = (s) => {
  let count = s.length;

  for (let i = 0; i < s.length; i++) {
    const startChar = s[i];
    let diffCharIdx = -1;
    for (let j = i + 1; j < s.length; j++) {
      const currChar = s[j];
      if (startChar === currChar) {
        if (diffCharIdx === -1) {
          count += 1;
        } else if (j - diffCharIdx === diffCharIdx - i) {
          count += 1;
          break;
        }
      } else if (diffCharIdx === -1) {
        diffCharIdx = j;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(substrCount('abcbaba'));
