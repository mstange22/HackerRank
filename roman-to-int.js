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
  let mod = 0;
  
  for (let i = 0; i < s.length - 1; i++) {
    if (map[s[i]] >= map[s[i + 1]]) {
      res += map[s[i]] - mod;
      mod = 0;
    } else {
      // s[i] is modifying the next char
      mod = map[s[i]];
    }
  }
  res += map[s[s.length - 1]] - mod;
  return res;
};

console.log(romanToInt('MCMXCIV'));
