import { DoublyLinkedListNode } from '../DoublyLinkedList';

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;

  tail: DoublyLinkedListNode<T> | null = null;

  size: number = 0;

  push(data: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode<T>(data);

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

  pop(): DoublyLinkedListNode<T> | null {
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

  unshift(data: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode<T>(data);

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

  shift(): DoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    const temp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head?.next as DoublyLinkedListNode<T> | null;
      this.head!.prev = null;
      temp.next = null;
    }

    this.size -= 1;
    return temp;
  }

  get(index: number): DoublyLinkedListNode<T> | null {
    if (index < 0 || index >= this.size) return null;
    let temp: DoublyLinkedListNode<T> | null = this.head;
    if (index < this.size / 2) {
      for (let i = 0; i < index; i += 1) {
        temp = temp!.next as DoublyLinkedListNode<T> | null;
      }
    } else {
      temp = this.tail;
      for (let i = this.size - 1; i > index; i -= 1) {
        temp = temp!.prev;
      }
    }

    return temp;
  }

  set(index: number, data: T): boolean {
    const temp = this.get(index);
    if (temp) {
      temp.data = data;
      return true;
    }

    return false;
  }

  insert(index: number, data: T): boolean {
    if (index === 0) {
      this.unshift(data);
      return true;
    }
    if (index === this.size) {
      this.push(data);
      return true;
    }
    if (index < 0 || index > this.size) return false;

    const newNode = new DoublyLinkedListNode(data);
    const before = this.get(index - 1);
    const after = before!.next as DoublyLinkedListNode<T> | null;
    before!.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after!.prev = newNode;
    this.size += 1;

    return true;
  }

  remove(index: number): DoublyLinkedListNode<T> | null {
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    if (index < 0 || index >= this.size) return null;

    const temp = this.get(index);
    if (!temp) return null;

    if (temp.prev) temp.prev.next = temp.next;
    if (temp.next) (temp.next as DoublyLinkedListNode<T>).prev = temp.prev;

    this.size -= 1;
    return temp;
  }
}
