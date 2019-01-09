function superReducedString(s) {
  let done = false;
  while (!done) {
    let didRemove = false;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2);
        didRemove = true;
        break;
      }
    }
    if (!didRemove || s === '') {
      done = true;
    }
  }
  return s === '' ? 'Empty String' : s;
}

console.log(superReducedString('aaabccddd'));
