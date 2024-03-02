import { LinkedListNode } from '../linked-list-node';

export class SinglyLinkedList {
  head: LinkedListNode | null = null;

  tail: LinkedListNode | null = null;

  size: number = 0;

  append(data: any) {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;

    return this;
  }
}
