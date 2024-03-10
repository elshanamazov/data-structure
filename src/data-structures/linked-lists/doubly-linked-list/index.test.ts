// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, test } from 'bun:test';
import { DoublyLinkedList } from './index';

describe('DoublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  test('should create doubly linked list', () => {
    expect(doublyLinkedList).toBeDefined();
  });

  describe('push', () => {
    test('should add node in the end of the empty doubly-list', () => {
      doublyLinkedList.push(1);

      expect(doublyLinkedList.head?.data).toBe(1);
      expect(doublyLinkedList.tail?.data).toBe(1);
      expect(doublyLinkedList.size).toBe(1);
    });

    test('should add multiple nodes in the end of doubly-list', () => {
      doublyLinkedList.push(1).push(2).push(3);

      expect(doublyLinkedList.head?.data).toBe(1);
      expect(doublyLinkedList.head?.next?.data).toBe(2);
      expect(doublyLinkedList.tail?.data).toBe(3);
      expect(doublyLinkedList.tail?.prev?.data).toBe(2);
      expect(doublyLinkedList.size).toBe(3);
    });
  });

  describe('pop', () => {
    test('should return undefined from empty DLL', () => {
      expect(doublyLinkedList.pop()).toBeUndefined();
    });

    test('should remove the node from the end of a DLL with only one node', () => {
      doublyLinkedList.push(1);
      doublyLinkedList.pop();
      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
      expect(doublyLinkedList.size).toBe(0);
    });

    test('should remove the node from the end of a DLL with multiple nodes', () => {
      doublyLinkedList.push(1).push(2).push(3);
      doublyLinkedList.pop();

      expect(doublyLinkedList.tail?.data).toBe(2);
      expect(doublyLinkedList.tail?.next).toBeNull();
      expect(doublyLinkedList.tail?.prev?.data).toBe(1);
      expect(doublyLinkedList.size).toBe(2);
    });
  });
});
