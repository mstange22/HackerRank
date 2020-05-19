const romanToInt = (s) => {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let res = 0;
  let modifier = 0;
  
  for (let i = 0; i < s.length - 1; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      // s[i] will modify the next char
      modifier = map[s[i]];
    } else {
      // not a modifier, add value + any modifier
      res += map[s[i]] - modifier;
      modifier = 0;
    }
  }
  return res + map[s[s.length - 1]] - modifier;
};

console.log(romanToInt('MCMXCIV'));
