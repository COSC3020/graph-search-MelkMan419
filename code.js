// I did not use help on this 
function search(graph, startNode, targetNode, visitedNodes, path) {
      if (startNode === targetNode) {
          visitedNodes.push(startNode);
          path.push(startNode);
          return true;
      }
    visitedNodes.push(startNode);
    path.push(startNode);
    for (let i = 0; i < graph[startNode].length; i++) {
        let node = graph[startNode][i];
        if (visitedNodes.indexOf(node) === -1) {
            if (search(graph, node, targetNode, visitedNodes, path)) {
                return true;
            }
        }
    }
    path.pop();
    return false;
}

function depthFirstSearch(graph, startNode, targetNode){
    let visitedNodes = [];
    let path = [];
    if (graph.length === 0 || search(graph, startNode, targetNode, visitedNodes, path) === false){
        return [];
    }
    else {
        return path;
    }
}
module.exports = depthFirstSearch;
