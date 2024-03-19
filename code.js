function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode === targetNode) return [startNode];
    // For this algorithm, we will assume an adjacency matrix with a value of 1
    // representing a path exists and 2 representing that it exists and has been visited
    var pos = null;
    var nodeList = [];

    for (var i = 0; i < graph.length; i++) {
        pos = graph[startNode][i];
        if (pos === 1) {
            if (i === targetNode) return [i];
            graph[startNode][i] = 2;
            nodeList = nodeList.concat(i, depthFirstSearch(graph, i, targetNode));
        }
        if (nodeList[nodeList.length - 1] != targetNode) {nodeList = []; }
    }

    return nodeList;
}
module.exports = depthFirstSearch;
