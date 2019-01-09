function largestRectangle(h) {
  let maxArea = 0;
  for (let i = 0; i < h.length; i++) {
    let area = h[i];
    // search to left
    for (let j = i - 1; j >= 0; j--) {
      if (h[j] >= h[i]) {
        area += h[i];
      } else {
        break;
      }
    }
    // search to right
    for (let k = i + 1; k < h.length; k++) {
      if (h[k] >= h[i]) {
        area += h[i];
      } else {
        break;
      }
    }
    if (area > maxArea) maxArea = area;
  }
  return maxArea;
}

console.log(largestRectangle([2, 3, 2, 3, 2]));
