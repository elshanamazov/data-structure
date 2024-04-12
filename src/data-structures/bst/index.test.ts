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

  describe('insert', () => {
    test('should insert elements to the BST', () => {
      binarySearchTree.insert(2)?.insert(1)?.insert(3);

      expect(binarySearchTree.root?.data).toBe(2);
      expect(binarySearchTree.root?.left?.data).toBe(1);
      expect(binarySearchTree.root?.right?.data).toBe(3);
    });

    test('should set the first inserted element as the root', () => {
      binarySearchTree.insert(10);
      expect(binarySearchTree.root?.data).toBe(10);
      expect(binarySearchTree.root?.left).toBeNull();
      expect(binarySearchTree.root?.right).toBeNull();
    });

    test('should not insert equal data to the BST', () => {
      binarySearchTree.insert(2)?.insert(1)?.insert(3);
      expect(binarySearchTree.insert(3)).toBeUndefined();
    });
  });
});
