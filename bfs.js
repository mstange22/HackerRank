/* eslint no-restricted-syntax: 0 */
const fs = require('fs');

fs.readFile('test-files/bfs-test.txt', 'utf8', (err, data) => {
  main(data);
});

const getDistance = (graph, s, t) => {
  // build history of visited nodes, starting with from
  const visited = [{ curr: s, distance: 0 }];
  for (const node of visited) {
    const { curr, distance } = node;
    // loop through all connections at this node, add to work
    for (const connection of graph[curr]) {
      if (connection === t) return distance + 6;
      if (!visited.some(v => v.curr === connection)) {
        visited.push({ curr: connection, distance: distance + 6 });
      }
    }
  }

  return -1;
};

const bfs = (n, edges, s) => {
  const graph = {};
  const res = [];
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    if (!graph[edge[0]].includes(edge[1])) graph[edge[0]].push(edge[1]);
    if (!graph[edge[1]].includes(edge[0])) graph[edge[1]].push(edge[0]);
  }

  // loop through all nodes in order
  for (let t = 1; t <= n; t++) {
    // skip start node
    if (t !== s) {
      res.push(getDistance(graph, s, t));
    }
  }
  return res;
};

const main = (data) => {
  const input = data.split('\n');
  // const t = parseInt(input[0], 10);
  const n = parseInt(input[1].split(' ')[0], 10);
  const m = parseInt(input[1].split(' ')[1], 10);
  const edges = [];
  for (let i = 2; i <= m + 1; i++) {
    const edge = input[i].split(' ').map(e => Number(e));
    edges.push([edge[0], edge[1]]);
  }
  const s = parseInt(input[input.length - 1], 10);
  const res = bfs(n, edges, s);
  console.log(res.join(' '));
};
