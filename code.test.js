//I had to look at other repos to see how these test files were being done
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let graph1 = [
  [1, 2, 5],
  [4],
  [3, 5],
  [4],
  [],
  [6],
  []
];

let graph2 = [
  [1, 3, 4, 6],
  [2, 4],
  [3, 5],
  [4, 5],
  [5],
  [6],
  []
];

let graph3 = [
  [1, 2, 3],
  [2, 3],
  [3],
  []
];

let graph4 = [
  [1],
  [2, 3],
  [3],
  []
];

let graph5 = [
  [1, 2],
  [2],
  []
];

assert(JSON.stringify(depthFirstSearch(graph1, 0, 3)) == JSON.stringify([0, 2, 3]));
assert(JSON.stringify(depthFirstSearch(graph1, 0, 7)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([], 0, 0)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch([[]], 0, 0)) == JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 6)) == JSON.stringify([0, 1, 2, 3, 4, 5, 6]));
assert(JSON.stringify(depthFirstSearch(graph3, 0, 3)) == JSON.stringify([0, 1, 2, 3]));
assert(JSON.stringify(depthFirstSearch(graph4, 0, 3)) == JSON.stringify([0, 1, 2, 3]));
assert(JSON.stringify(depthFirstSearch(graph5, 0, 2)) == JSON.stringify([0, 1, 2]));
