const fs = require('fs');
const jsc = require('jsverify');

// Load the depthFirstSearch function from code.js
eval(fs.readFileSync('code.js')+'');

// Reference implementation of DFS
function dfs(graph, startNode, targetNode, visited = new Set()) {
    if (startNode === targetNode) {
        return [startNode];
    }
    visited.add(startNode);
    for (let neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            let path = dfs(graph, neighbor, targetNode, visited);
            if (path.length > 0) {
                return [startNode, ...path];
            }
        }
    }
    return [];
}

// Define a generator for graphs represented as adjacency lists
function arbitraryGraph() {
    return jsc.dict(
        jsc.array(jsc.asciistring) // Neighbors
    );
}

// Define a property test for depthFirstSearch function
const testDepthFirstSearch = jsc.forall(
    arbitraryGraph(),
    jsc.asciistring, // Start node
    jsc.asciistring, // Target node
    function(graph, startNode, targetNode) {
        // Convert the result to string for comparison
        const result = depthFirstSearch(graph, startNode, targetNode);
        const expectedResult = dfs(graph, startNode, targetNode);
        return JSON.stringify(result) === JSON.stringify(expectedResult);
    }
);

// Run the property-based test
jsc.assert(testDepthFirstSearch);
