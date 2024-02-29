const depthFirstSearch = require('./code');

// Example graph represented as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

// Test cases
console.log(depthFirstSearch(graph, 'A', 'F'));  // Output: ['A', 'C', 'F']
console.log(depthFirstSearch(graph, 'A', 'D'));  // Output: ['A', 'B', 'D']
console.log(depthFirstSearch(graph, 'A', 'A'));  // Output: ['A']
console.log(depthFirstSearch(graph, 'A', 'X'));  // Output: []
