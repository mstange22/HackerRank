function fairRations(B) {
  let count = 0;
  for (let i = 0; i < B.length - 1; i++) {
    if ((B[i] % 2) === 1) {
      B[i] += 1;
      B[i + 1] += 1;
      count += 2;
    }
  }
  if (B[B.length - 1] % 2 === 0) return count;
  return 'NO';
}

console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([2, 3]));
