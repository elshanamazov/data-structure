import { Node } from '../../share/Node';

export class Stack<T> {
  top: Node<T> | null = null;

  size: number = 0;

  push(data: T) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size += 1;
    return this;
  }

  pop() {
    if (this.top === null) return null;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.size -= 1;

    return temp;
  }
}
