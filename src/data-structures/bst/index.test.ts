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

  describe('contains', () => {
    test('should insert elements to the BST', () => {
      // eslint-disable-next-line newline-per-chained-call
      binarySearchTree.insert(10)?.insert(7)?.insert(12)?.insert(4)?.insert(3);

      expect(binarySearchTree.contains(7)).toBe(true);
      expect(binarySearchTree.contains(12)).toBe(true);
      expect(binarySearchTree.contains(3)).toBe(true);
    });

    test('should not insert equal data to the BST', () => {
      binarySearchTree.insert(2)?.insert(1)?.insert(3);
      expect(binarySearchTree.insert(3)).toBeUndefined();
    });

    test('should return false if data not in the BST', () => {
      expect(binarySearchTree.contains(5)).toBe(false);
      expect(binarySearchTree.contains(100)).toBe(false);
    });
  });

  describe('delete', () => {
    test('should delete a leaf node', () => {
      binarySearchTree.insert(10)?.insert(5)?.insert(15)?.insert(3);
      binarySearchTree.delete(3);

      expect(binarySearchTree.contains(3)).toBe(false);
      expect(binarySearchTree.root?.left?.left).toBeNull();
    });

    test('should delete a node with one child', () => {
      // eslint-disable-next-line newline-per-chained-call
      binarySearchTree.insert(10)?.insert(5)?.insert(15)?.insert(3)?.insert(4);
      binarySearchTree.delete(3);

      expect(binarySearchTree.contains(3)).toBe(false);
      expect(binarySearchTree.root?.left?.left?.data).toBe(4);
    });

    test('should delete a node with two children', () => {
      binarySearchTree
        .insert(10)
        ?.insert(5)
        ?.insert(15)
        ?.insert(3)
        ?.insert(7)
        ?.insert(6)
        ?.insert(8);
      binarySearchTree.delete(5);

      expect(binarySearchTree.contains(5)).toBe(false);
      expect(binarySearchTree.root?.left?.data).toBe(6);
      expect(binarySearchTree.root?.left?.right?.data).toBe(7);
      expect(binarySearchTree.root?.left?.right?.left).toBeNull();
    });

    test('should delete the root node', () => {
      binarySearchTree.insert(10)?.insert(5)?.insert(15);
      binarySearchTree.delete(10);

      expect(binarySearchTree.contains(10)).toBe(false);
      expect(binarySearchTree.root?.data).toBe(15);
      expect(binarySearchTree.root?.left?.data).toBe(5);
    });

    test('should handle deletion from an empty tree', () => {
      binarySearchTree.delete(10);
      expect(binarySearchTree.root).toBeNull();
    });
  });
});
