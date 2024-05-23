export class Graph<T> {
  private adjacencyList: { [key: string]: T[] };

  constructor() {
    this.adjacencyList = {};
  }

  getAdjacencyList(): { [key: string]: T[] } {
    return this.adjacencyList;
  }

  addVertex(vertex: string): boolean {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  addEdge(vertex1: string, vertex2: string): boolean {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2 as T);
      this.adjacencyList[vertex2].push(vertex1 as T);
      return true;
    }
    return false;
  }
}
