import { Node } from '../../share/Node';

export class DoublyLinkedListNode<T> extends Node<T> {
  prev: DoublyLinkedListNode<T> | null = null;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(data: T) {
    super(data);
  }
}
