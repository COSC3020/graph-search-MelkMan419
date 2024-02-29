const fs = require('fs');
const jsc = require('jsverify');

// Load the depthFirstSearch function from code.js
eval(fs.readFileSync('code.js')+'');

// Define a generator for graphs represented as adjacency lists
function arbitraryGraph() {
    return jsc.dictionary(
        jsc.asciistring,     // Node
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
