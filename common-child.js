const commonChild = (s1, s2) => {
  const C = new Array(s1.length + 1).fill(0);
  for (let i = 0; i <= s1.length; i++) {
    C[i] = [0];
  }
  for (let i = 1; i <= s2.length; i++) {
    C[0].push(0);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        C[i].push(C[i - 1][j - 1] + 1);
      } else {
        C[i].push(Math.max(C[i][j - 1], C[i - 1][j]));
      }
    }
  }

  return C[s1.length][s2.length];
};

console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'));
// console.log(commonChild('ABCDEF', 'FBDAMN'));
