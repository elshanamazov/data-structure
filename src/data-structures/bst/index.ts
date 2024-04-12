import { BSTNode } from './bst-node';

export class BST<T> {
  root: BSTNode<T> | null = null;

  insert(data: T) {
    const newNode = new BSTNode(data);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;

    while (true) {
      if (newNode.data === temp.data) return undefined;
      if (newNode.data < temp.data) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
}
