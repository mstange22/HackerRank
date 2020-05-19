const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const tuples = [];

for (let i = 0; i < points.length; i++) {
  for (let j = 0; j < points.length; j++) {
    tuples.push([i, j]);
  }
}

let count = 0;
while (tuples.length > 0) {
  const index = Math.floor(Math.random() * tuples.length);
  const res = tuples.splice(index, 1);

  console.log(`#${count + 1}. ${count % 2 === 0 ? 'Mai' : 'Mike'}: ${res}`);
  count += 1;
}
