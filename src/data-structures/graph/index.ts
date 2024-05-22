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
}
