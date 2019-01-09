const isKaprekar = (num) => {
  const s = num.toString();
  const d = s.length;
  const square = (num ** 2).toString();
  const l = square.slice(0, -d) === '' ? '0' : square.slice(0, -d);
  const r = square.slice(-d);
  if (parseInt(l, 10) + parseInt(r, 10) === num) {
    return true;
  }
  return false;
};

const kaprekarNumbers = (p, q) => {
  const res = [];
  for (let i = p; i <= q; i++) {
    if (isKaprekar(i)) {
      res.push(i);
    }
  }
  return res;
};

console.log(kaprekarNumbers(1, 10).join(' '));
