const isBalanced = (s) => {
  const bMap = { '[': ']', '{': '}', '(': ')' };
  const stack = [];
  for (const c of s) {
    if (bMap[c]) stack.push(bMap[c]);
    else if (Object.values(bMap).includes(c)) {
      if (stack.pop() !== c) return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
};

console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(})]}'));
