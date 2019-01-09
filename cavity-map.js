const arr = [
  '1112',
  '1912',
  '1892',
  '1234',
];

function cavityMap(grid) {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      const c = grid[i][j];
      if (c > grid[i - 1][j] && c > grid[i][j + 1] && c > grid[i + 1][j] && c > grid[i][j - 1]) {
        grid[i] = `${grid[i].slice(0, j)}X${grid[i].slice(j + 1)}`;
      }
    }
  }
  return grid;
}

console.log(cavityMap(arr));
