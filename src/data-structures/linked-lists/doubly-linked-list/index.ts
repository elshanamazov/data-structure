import { DoublyLinkedListNode } from '../doubly-list-node';

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;

  tail: DoublyLinkedListNode | null;

  size: number = 0;

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

  pop() {
    if (!this.head) return undefined;
    const temp = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }

    this.size -= 1;
    return temp;
  }
}
