export class Heap {
  private heap: number[] = [];

  public getHeap(): number[] {
    return [...this.heap];
  }

  insert(value: number) {
    this.heap.push(value);
    let curr = this.heap.length - 1;

    while (curr > 0 && this.heap[curr] > this.heap[Heap.parent(curr)]) {
      this.swap(curr, Heap.parent(curr));
      curr = Heap.parent(curr);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  // eslint-disable-next-line class-methods-use-this
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private static parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}
