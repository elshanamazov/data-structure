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

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);

    return maxValue;
  }

  private sinkDown(startIndex: number) {
    let index = startIndex;
    let maxIndex = index;
    const size = this.heap.length;

    while (true) {
      const leftIndex = Heap.leftChild(index);
      const rightIndex = Heap.rightChild(index);
      if (leftIndex < size && this.heap[leftIndex] > this.heap[rightIndex]) {
        maxIndex = leftIndex;
      }

      if (rightIndex < size && this.heap[rightIndex] > this.heap[maxIndex]) {
        maxIndex = rightIndex;
      }

      if (maxIndex !== index) {
        this.swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  private static leftChild(index: number): number {
    return 2 * index + 1;
  }

  private static rightChild(index: number): number {
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
