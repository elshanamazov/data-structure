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
    test('should return null from empty DLL', () => {
      expect(doublyLinkedList.pop()).toBeNull();
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

  describe('unshift', () => {
    test('should add node in the beginning of the empty DLL', () => {
      doublyLinkedList.unshift(1);

      expect(doublyLinkedList.head?.data).toBe(1);
      expect(doublyLinkedList.head?.prev).toBeNull();
      expect(doublyLinkedList.tail?.data).toBe(1);
      expect(doublyLinkedList.size).toBe(1);
    });

    test('should add multiple nodes in the beginning of DLL', () => {
      doublyLinkedList.push(1).push(2).unshift(3);

      expect(doublyLinkedList.head?.data).toBe(3);
      expect(doublyLinkedList.head?.prev).toBeNull();
      expect(doublyLinkedList.head?.next?.data).toBe(1);
      expect(doublyLinkedList.tail?.data).toBe(2);
      expect(doublyLinkedList.tail?.prev?.data).toBe(1);
      expect(doublyLinkedList.size).toBe(3);
    });
  });

  describe('shift', () => {
    test('should return null from empty DLL', () => {
      expect(doublyLinkedList.shift()).toBeNull();
    });

    test('should remove the node from the beginning of a DLL with only one node', () => {
      doublyLinkedList.push(1);
      doublyLinkedList.shift();
      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
      expect(doublyLinkedList.size).toBe(0);
    });

    test('should remove the node from the beginning of a DLL with multiple nodes', () => {
      doublyLinkedList.push(1).push(2).push(3);
      doublyLinkedList.shift();

      expect(doublyLinkedList.head?.data).toBe(2);
      expect(doublyLinkedList.head?.prev).toBeNull();
      expect(doublyLinkedList.size).toBe(2);
    });
  });

  describe('get', () => {
    test('should return null from empty DLL', () => {
      expect(doublyLinkedList.get(0)).toBeNull();
    });

    test('should return null when out-of-range DLL', () => {
      doublyLinkedList.push(1).push(2).push(3);
      expect(doublyLinkedList.get(3)).toBeNull();
    });

    test('should return index of node from DLL', () => {
      doublyLinkedList.push(1).push(2).push(3).push(4);
      expect(doublyLinkedList.get(1)?.data).toBe(2);
    });
  });

  describe('set', () => {
    test('should set value node by index and return true', () => {
      doublyLinkedList.push(1).push(2).push(3);
      expect(doublyLinkedList.set(1, 4)).toBeTrue();
      expect(doublyLinkedList.get(1)?.data).toBe(4);
    });

    test('should return false when out-of-range', () => {
      doublyLinkedList.push(1).push(2).push(3);
      expect(doublyLinkedList.set(5, 3)).toBeFalse();
    });
  });
});
