export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }


  /* 'add___' Methods */
  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }


  /* 'has___' Methods */
  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    } //else 
    return false;
  }

  hasEdge(node1, node2) {
    if(this.adjacencyList.get(node1).has(node2)){
      return true;
    } //else 
    return false;
  }


  /* 'create___' Methods */
  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
    
    //"More concise version of [above] can be created by using more chaining"
    /*
      let set1 = this.adjacencyList.get(node1).add(node2);
      let set2 = this.adjacencyList.get(node2).add(node1);
    */
  }


  /* 'remove___' Methods */
  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }

  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }


  /* Depth-First Search (DFS) algorithm methods */
  depthFirstReachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }

    let stack = [startingNode];
    let traversedNodes = new Set(); 
    while (stack.length) {
      const currentNode = stack.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode);
        const adjacencyList = this.adjacencyList.get(currentNode);
        adjacencyList.forEach(function(node) {
          if (!traversedNodes.has(node)) {
            stack.unshift(node);
          }
        });
      }
    }
    return false;
  }
}