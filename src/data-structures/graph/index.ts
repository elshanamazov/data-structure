export class Graph<T> {
  private adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }

  getAdjacencyList(): { [key: string]: string[] } {
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
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1: string, vertex2: string): boolean {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2,
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1,
      );

      return true;
    }
    return false;
  }

  removeVertex(vertex: string): Graph<T> | undefined {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();

      if (temp) {
        this.removeEdge(vertex, temp);
      }
    }

    delete this.adjacencyList[vertex];
    return this;
  }
}
