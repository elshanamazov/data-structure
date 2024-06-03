/* eslint-disable no-param-reassign */
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

    // eslint-disable-next-line no-constant-condition
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

  contains(data: T) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (data < temp.data) {
        temp = temp.left as BSTNode<T>;
      } else if (data > temp.data) {
        temp = temp.right as BSTNode<T>;
      } else {
        return true;
      }
    }

    return false;
  }

  private deleteNode(value: T, currNode: BSTNode<T> | null): BSTNode<T> | null {
    if (currNode === null) return null;

    if (value < currNode.data) {
      currNode.left = this.deleteNode(value, currNode.left);
      return currNode;
    }
    if (value > currNode.data) {
      currNode.right = this.deleteNode(value, currNode.right);
      return currNode;
    }

    if (currNode.left === null) return currNode.right;
    if (currNode.right === null) return currNode.left;

    const subTreeMin: T = this.minValue(currNode.right);
    currNode.data = subTreeMin;
    currNode.right = this.deleteNode(subTreeMin, currNode.right);
    return currNode;
  }

  // eslint-disable-next-line class-methods-use-this
  minValue(currNode: BSTNode<T>): T {
    let node = currNode;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  delete(value: T): void {
    this.root = this.deleteNode(value, this.root);
  }
}
