import { Node } from './Node';

export class DoublyLinkedListNode extends Node<DoublyLinkedListNode> {
  prev: DoublyLinkedListNode | null = null;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(data: any) {
    super(data);
  }
}
