
/*
//Breadth-First Search (DFS) algorithm methods 
breadthFirstReachable(startingNode, targetNode) {
  if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
    return false;
  }
  let queue = [startingNode];
  let traversedNodes = new Set();
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode === targetNode) {
      return true;
    } else {
      traversedNodes.add(currentNode);
      const adjacencyList = this.adjacencyList.get(currentNode);
      adjacencyList.forEach(function(node) {
        if (!traversedNodes.has(node)) {
          queue.push(node);
        }
      });
    }
  }
  return false;
}
*/
