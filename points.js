const graph = {};

const findRectangle = (points) => {
  console.log('points:', points);
  for (let i = 0; i < points.length; i++) {
    if (!graph[points[i][0]]) graph[points[i][0]] = [points[i][1]];
    else graph[points[i][0]].push(points[i][1]);
  }
  console.log('graph:', graph);
  const xKeys = Object.keys(graph);
  for (let i = 0; i < xKeys.length; i++) {
    if (graph[xKeys[i]].length >= 2) {
      const otherXKeys = [...xKeys.slice(0, i), ...xKeys.slice(i + 1)];
      for (let j = 0; j < otherXKeys.length; j++) {
        if (graph[otherXKeys].length >= 2) {
          const intersection = graph[xKeys[i]].filter(y => graph[otherXKeys[j]].includes(y));
          if (intersection.length >= 2) {
            return [
              [xKeys[i], intersection[0]],
              [xKeys[i], intersection[1]],
              [otherXKeys[j], intersection[0]],
              [otherXKeys[j], intersection[1]],
            ];
          }
        }
      }
    }
  }
  return [];
};

const points = [[1, 2], [1, 4], [3, 2], [3, 4]];
console.log(findRectangle(points));
