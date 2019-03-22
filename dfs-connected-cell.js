const fs = require('fs');

const getSizeOfRegion = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 0;
  if (grid[i][j] === 0) return 0;
  let count = 1;
  grid[i][j] = 0;

  count += getSizeOfRegion(grid, i - 1, j - 1);
  count += getSizeOfRegion(grid, i - 1, j);
  count += getSizeOfRegion(grid, i - 1, j + 1);
  count += getSizeOfRegion(grid, i, j - 1);
  count += getSizeOfRegion(grid, i, j + 1);
  count += getSizeOfRegion(grid, i + 1, j + 1);
  count += getSizeOfRegion(grid, i + 1, j);
  count += getSizeOfRegion(grid, i + 1, j - 1);

  return count;
};

const maxRegion = (grid) => {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      console.log('grid[i][j]', grid[i][j]);
      max = Math.max(max, getSizeOfRegion(grid, i, j));
    }
  }
  return max;
};

const main = (input) => {
  const lines = input.split('\n');
  const n = Number(lines.shift(1));
  const m = Number(lines.shift(1));
  const grid = [];
  for (const line of lines) {
    grid.push(line.split(' ').map(e => Number(e)));
  }
  console.log('grid:', grid);
  console.log('maxRegion:', maxRegion(grid));
  console.log('grid:', grid);
};

fs.readFile('test-files/dfs-test.txt', 'utf8', (err, data) => {
  console.log('data:', data);
  main(data);
});
