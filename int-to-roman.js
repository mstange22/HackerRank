const intToRoman = (num) => {
  const map = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let s = '';
  for (let i = 0; i < map.length; i++) {
    const [roman, int] = map[i];
    while (num >= int) {
      s += roman;
      num -= int;
    }
  }
  return s;
};

// console.log(intToRoman(3));
console.log(intToRoman(27));
// console.log(intToRoman(1994));
