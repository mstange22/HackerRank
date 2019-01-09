// Complete the workbook function below.
function workbook(n, k, arr) {
  let count = 0;
  let currentPageNumber = 0;
  // for each chapter
  for (let i = 0; i < n; i++) {
    // for each problem in each chapter
    for (let j = 1; j <= arr[i]; j++) {
      // determine if it's a magic problem
      // get current page
      if ((j - 1) % k === 0) currentPageNumber += 1;
      if (j === currentPageNumber) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]));
