const buildGraph = (n, cities) => {
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < cities.length; i++) {
    if (!graph[cities[i][0]].includes(cities[i][1])) {
      graph[cities[i][0]].push(cities[i][1]);
    }
    if (!graph[cities[i][1]].includes(cities[i][0])) {
      graph[cities[i][1]].push(cities[i][0]);
    }
  }
  return graph;
};

const roadsAndLibraries = (n, cLib, cRoad, cities) => {
  if (cLib < cRoad) return n * cLib;
  const graph = buildGraph(n, cities);
  console.log('graph:', graph);
  let cost = 0;
  const visited = [];
  for (let city = 1; city <= n; city++) {
    if (!visited.includes(city)) {
      cost += cLib;
      visited.push(city);
      const region = [city];
      for (let i = 0; i < region.length; i++) {
        for (const conn of graph[city]) {
          if (!visited.includes(conn)) {
            visited.push(conn);
            cost += cRoad;
            region.push(conn);
          }
        }
      }
    }
  }

  console.log(cost);
  return cost;
};

roadsAndLibraries(3, 2, 1, [[1, 2], [3, 1], [2, 3]]);
