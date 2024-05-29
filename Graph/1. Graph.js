class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (
        !this.adjacencyList[vertex1].includes(vertex2) &&
        !this.adjacencyList[vertex2].includes(vertex1)
      ) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
      }
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    const vertexArray = this.adjacencyList[vertex];
    while (vertexArray.length) {
      const poppedItem = vertexArray.pop();
      if (this.adjacencyList[poppedItem]) {
        this.adjacencyList[poppedItem] = this.adjacencyList[poppedItem].filter(
          (v) => v !== vertex
        );
      }
    }

    delete this.adjacencyList[vertex];
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("A", "E");

console.log("Before: ");
console.log(graph.adjacencyList);

graph.removeEdge("A", "E");
console.log("After removing edge: ");
console.log(graph.adjacencyList);

graph.removeVertex("C");
console.log("After removing vertex: ");
console.log(graph.adjacencyList);
