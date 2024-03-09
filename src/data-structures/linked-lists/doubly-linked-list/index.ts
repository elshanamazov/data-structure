import { DoublyLinkedListNode } from '../doubly-list-node';

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;

  tail: DoublyLinkedListNode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data: any) {
    const newNode = new DoublyLinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;

    return this;
  }
}
