const isBalanced = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') stack.push('{');
    else if (s[i] === '[') stack.push('[');
    else if (s[i] === '(') stack.push('(');
    else if (s[i] === '}') {
      if (stack[length-1] !== '{') return 'NO';
      stack.pop();
    } else if (s[i] === ']') {
      if (stack[-1] !== '[') return 'NO';
      stack.pop();
    } else if (s[i] === ')') {
      if (stack[-1] !== '(') return 'NO';
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return 'YES';
  }
  return 'NO';
};

console.log(isBalanced('{[()]}'));
