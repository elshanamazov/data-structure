import { DoublyLinkedListNode } from '../doubly-list-node';

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;

  tail: DoublyLinkedListNode | null;

  size: 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
