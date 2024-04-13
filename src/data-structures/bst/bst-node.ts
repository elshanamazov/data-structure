import { Node } from '../../share/Node';

export class BSTNode<T> extends Node<T> {
  left: BSTNode<T> | null = null;

  right: BSTNode<T> | null = null;
}
