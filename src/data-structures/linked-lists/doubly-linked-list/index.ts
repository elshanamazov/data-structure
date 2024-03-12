import { DoublyLinkedListNode } from '../DoublyLinkedList';

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null = null;

  tail: DoublyLinkedListNode | null = null;

  size: number = 0;

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
    if (!this.head) return null;
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

  unshift(data: any) {
    const newNode = new DoublyLinkedListNode(data);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.size += 1;

    return this;
  }

  shift() {
    if (!this.head) return null;
    const temp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head?.next;
      this.head!.prev = null;
      temp.next = null;
    }

    this.size -= 1;
    return temp;
  }

  get(index: number) {
    if (index < 0 || index >= this.size) return null;
    let temp = this.head;
    if (index < this.size / 2) {
      for (let i = 0; i < index; i += 1) {
        temp = temp!.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.size - 1; i > index; i -= 1) {
        temp = temp!.prev;
      }
    }

    return temp;
  }

  set(index: number, data: any) {
    const temp = this.get(index);
    if (temp) {
      temp.data = data;
      return true;
    }

    return false;
  }
}
