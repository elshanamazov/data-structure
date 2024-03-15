import { Node } from '../../share/Node';

export class Stack<T> {
  top: Node<T> | null = null;

  size: number = 0;
}
