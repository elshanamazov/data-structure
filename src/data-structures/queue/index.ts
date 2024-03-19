import { Node } from '../../share/Node';

export class Queue<T> {
  first: Node<T> | null = null;

  last: Node<T> | null = null;

  size: number = 0;

  enqueue(data: T) {
    const newNode = new Node(data);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    return this;
  }

  dequeue() {
    if (this.size === 0) return null;
    const temp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
      temp!.next = null;
    }

    this.size -= 1;
    return temp;
  }
}
