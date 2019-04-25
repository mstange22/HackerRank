const OneEditAway = (s1, s2) => {
  if (s2.length > s1.length) {
    const temp = s1;
    s1 = s2;
    s2 = temp;
  }
  if (s1.length - s2.length > 1) {
    return false;
  }
  let differenceFound = false;
  for (let i = 0, j = 0; i < s1.length; i++, j++) {
    if (s1[i] !== s2[j]) {
      if (differenceFound) {
        return false;
      }
      differenceFound = true;
      if (s1.length > s2.length) {
        j--;
      }
    }
  }
  return differenceFound || s1.length !== s2.length;
};

console.log(OneEditAway('cat', 'dog'));
console.log(OneEditAway('cat', 'cats'));
console.log(OneEditAway('cat', 'cut'));
console.log(OneEditAway('cat', 'cast'));
console.log(OneEditAway('cat', 'at'));
console.log(OneEditAway('cat', 'act'));
