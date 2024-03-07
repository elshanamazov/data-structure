import { LinkedListNode } from './linked-list-node';

export class DoublyLinkedListNode extends LinkedListNode {
  prev: DoublyLinkedListNode | null;

  constructor(data: any) {
    super(data);
    this.prev = null;
  }
}
