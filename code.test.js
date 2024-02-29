const fs = require('fs');
const jsc = require('jsverify');

// Load the depthFirstSearch function from code.js
eval(fs.readFileSync('code.js')+'');

// Define a generator for graphs represented as adjacency lists
function arbitraryGraph(dict) {
    const keys = Object.keys(dict);
    return jsc.record(keys.reduce((acc, key) => {
        acc[key] = jsc.elements(dict[key]);
        return acc;
    }, {}));
}
const testDepthFirstSearch = jsc.forall(
    arbitraryGraph({
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }),
    jsc.asciistring, // Start node
    jsc.asciistring, // Target node
    function(graph, startNode, targetNode) {
        // Convert the result to string for comparison
        const result = depthFirstSearch(graph, startNode, targetNode);
        const expectedResult = dfs(graph, startNode, targetNode);
        return JSON.stringify(result) === JSON.stringify(expectedResult);
    }
);
jsc.assert(testDepthFirstSearch);
