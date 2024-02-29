function depthFirstSearch(graph, startNode, targetNode) {
    let visited = new Set();
    function dfs(currentNode) {
        if (currentNode === targetNode) {
            return [currentNode];
        }
        visited.add(currentNode);
        for (let neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                let path = dfs(neighbor);
                if (path.length > 0) {
                    return [currentNode, ...path];
                }
            }
        }
        return [];
    }
    return dfs(startNode);
}

module.exports = depthFirstSearch;
