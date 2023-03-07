export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }


  /* 'add___' Methods */
  addNode(name){
    this.adjacencyList.set(name, new Set());
  }


  /* 'has___' Methods */
  hasNode(name){
    if(this.adjacencyList.get(name)){
      return true;
    } //else 
    return false;
  }

  hasEdge(node1, node2){
    return false;
  }


  /* 'create___' Methods */
  createEdge(node1, node2){
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
}