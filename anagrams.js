function anagrams(s) {
  let count = 0;
  for (let length = 1; length < s.length; length++) {
    const a = {};
    for (let i = 0; i <= s.length - length; i++) {
      const str = s.slice(i, i + length);
      // console.log(str);

      if (a[str]) {
        // console.log(`matched ${a[str]} previous substrings`);
        count += a[str];
        a[str] += 1;
      } else {
        a[str] = 1;
      }
      // check other possible matches
      const keys = Object.keys(a);
      for (let j = 0; j < keys.length; j++) {
        if (str !== keys[j] && isAnagram(keys[j], str)) {
          count += a[keys[j]];
        }
      }
    }
  }
  return count;
}

function isAnagram(s1, s2) {
  // not necessary for this exercise, but part of the isAnagram algorithm
  if (s1.length !== s2.length) return false;
  while (s1.length > 0) {
    // check if s1[0] is in s2.  If not, fail.
    if (s2.indexOf(s1[0]) === -1) return false;
    // remove an instance of s1[0] from s2.
    s2 = s2.replace(s1[0], '');
    // remove s1[0]
    s1 = s1.slice(1);
  }
  return true;
}

console.log(anagrams('abba'));
// console.log(anagrams('kkkk'));
// console.log(anagrams('abcd'));
// console.log(anagrams('cdcd'));
