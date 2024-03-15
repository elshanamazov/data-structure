import { SinglyLinkedListNode } from '../SinglyLinkedList';

export class SinglyLinkedList<T> {
  head: SinglyLinkedListNode<T> | null = null;

  tail: SinglyLinkedListNode<T> | null = null;

  size: number = 0;

  push(data: T): SinglyLinkedList<T> {
    const newNode = new SinglyLinkedListNode<T>(data);

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

  unshift(data: T): SinglyLinkedList<T> | null {
    const newNode = new SinglyLinkedListNode<T>(data);

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

  pop(): SinglyLinkedListNode<T> | null {
    if (!this.head) return null;

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

  shift(): SinglyLinkedListNode<T> | null {
    if (!this.head) return null;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.size -= 1;

    if (this.size === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index: number): SinglyLinkedListNode<T> | null {
    if (index < 0 || index >= this.size) return null;
    let temp = this.head;

    for (let i = 0; i < index; i += 1) {
      temp = temp!.next;
    }

    return temp;
  }

  set(index: number, newData: T): boolean {
    const temp = this.get(index);

    if (temp) {
      temp.data = newData;
      return true;
    }

    return false;
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.size) {
      this.push(value);
      return true;
    }

    const temp = this.get(index - 1);
    const newNode = new SinglyLinkedListNode<T>(value);

    newNode.next = temp!.next;
    temp!.next = newNode;
    this.size += 1;

    return true;
  }

  remove(index: number) {
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    if (index < 0 || index > this.size - 1) return null;

    const before = this.get(index - 1);
    const toDeleteNode = before!.next;

    before!.next = before!.next!.next;
    toDeleteNode!.next = null;
    this.size -= 1;

    return toDeleteNode;
  }

  reverse(): SinglyLinkedList<T> {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp?.next;
    let prev = null;

    for (let i = 0; i < this.size; i += 1) {
      next = temp!.next;
      temp!.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}
