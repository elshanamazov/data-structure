import { LinkedListNode } from '../linked-list-node';

export class SinglyLinkedList {
  head: LinkedListNode | null = null;

  tail: LinkedListNode | null = null;

  size: number = 0;

  push(data: any) {
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

  unshift(data: any) {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.size -= 1;

    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.size -= 1;

    if (this.size === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index: number) {
    if (index < 0 || index >= this.size) return undefined;
    let temp = this.head;

    for (let i = 0; i < index; i += 1) {
      temp = temp!.next;
    }

    return temp;
  }

  set(index: number, newData: any) {
    const temp = this.get(index);

    if (temp) {
      temp.data = newData;
      return true;
    }

    return false;
  }

  insert(index: number, value: any) {
    if (index === 0) return this.unshift(value);
    if (index === this.size) return this.push(value);
    if (index < 0 || index > this.size) return false;

    const temp = this.get(index - 1);
    const newNode = new LinkedListNode(value);

    newNode.next = temp!.next;
    temp!.next = newNode;
    this.size += 1;

    return true;
  }
}
