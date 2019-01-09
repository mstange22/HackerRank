const fs = require('fs');

const textEditor = (input) => {
  const operations = input.split('\n').slice(1);
  let s = '';
  const p = [];
  operations.forEach((o) => {
    // console.log('o', o);
    if (o.startsWith('1')) {
      s += o.split(' ')[1];
      p.push(s);
    } else if (o.startsWith('2')) {
      s = s.slice(0, -parseInt(o.split(' ')[1], 10));
      p.push(s);
    } else if (o.startsWith('3')) {
      console.log(s[parseInt(o.split(' ')[1], 10) - 1]);
    } else {
      p.pop();
      s = p.length === 0 ? '' : p[p.length - 1];
    }
    // console.log('s after o:', s);
  });
};

fs.readFile('test-files/text-test.txt', 'utf8', (err, data) => {
  console.log(textEditor(data));
});
