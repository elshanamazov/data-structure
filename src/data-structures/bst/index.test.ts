/* eslint-disable object-curly-newline */
import { beforeEach, describe, expect, test } from 'bun:test';
import { BST } from '.';

describe('Binary Search Tree', () => {
  let binarySearchTree: BST<number>;

  beforeEach(() => {
    binarySearchTree = new BST<number>();
  });

  test('should create binary search tree', () => {
    expect(binarySearchTree).toBeDefined();
    expect(binarySearchTree.root).toBeNull();
  });
});
