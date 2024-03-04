// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, test } from 'bun:test';
import { SinglyLinkedList } from './index';

describe('SinglyLinkedList', () => {
  let linkedList: SinglyLinkedList;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  test('should create linked list', () => {
    expect(linkedList).toBeDefined();
  });

  describe('push', () => {
    test('should add node in the end of the empty list', () => {
      linkedList.push(1);

      expect(linkedList.head).toBeDefined();
      expect(linkedList.tail).toBeDefined();
      expect(linkedList.size).toBe(1);
    });

    test('should add multiple nodes in the end of list', () => {
      linkedList.push(1);
      linkedList.push(2);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(2);
      expect(linkedList.size).toBe(2);
    });

    test('should add multiple nodes using a call chain', () => {
      linkedList.push(1).push(2).push(3);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.head?.next?.data).toBe(2);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.tail?.next).toBe(null);
      expect(linkedList.size).toBe(3);
    });
  });

  describe('unshift', () => {
    test('should add a node to the beginning of an empty list', () => {
      linkedList.unshift(1);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.size).toBe(1);
    });

    test('should add a node at the beginning of a non-empty list', () => {
      linkedList.push(1);
      linkedList.unshift(2);

      expect(linkedList.head?.data).toBe(2);
      expect(linkedList.head?.next?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.size).toBe(2);
    });
  });

  describe('pop', () => {
    test('should correctly handle popping from an empty list ', () => {
      linkedList.pop();
      expect(linkedList.head).toBe(null);
    });

    test('should leave the list empty after popping the only node', () => {
      linkedList.push(1).pop();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.size).toBe(0);
    });

    test('should remove the last node from a list with multiple nodes', () => {
      linkedList.push(1).push(2).push(3).pop();

      expect(linkedList.tail?.data).toBe(2);
      expect(linkedList.tail?.next).toBe(null);
      expect(linkedList.size).toBe(2);
    });
  });

  describe('shift', () => {
    test('should shifting from an empty list', () => {
      linkedList.shift();
      expect(linkedList.head).toBe(null);
    });

    test('should leave the list empty after shifting the only node ', () => {
      linkedList.push(1).shift();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.size).toBe(0);
    });

    test('should remove the first node from a list with multiple nodes', () => {
      linkedList.push(1).push(2).push(3).shift();

      expect(linkedList.head?.data).toBe(2);
      expect(linkedList.head?.next?.data).toBe(3);
      expect(linkedList.size).toBe(2);
    });
  });

  describe('get', () => {
    test('should get node by index', () => {
      linkedList.push(1).push(2).push(3);

      expect(linkedList.get(2)?.data).toBe(3);
      expect(linkedList.get(1)?.data).toBe(2);
    });

    test('should return undefined for out-of-range index', () => {
      linkedList.push(1).push(2).push(3);

      expect(linkedList.get(-1)).toBeUndefined();
      expect(linkedList.get(3)).toBeUndefined();
    });
  });

  describe('set', () => {
    test('should set value node by index', () => {
      linkedList.push(1).push(2).push(3);
      expect(linkedList.set(1, 4)).toBeTrue();
    });

    test('should set value node by index for out-of-range', () => {
      linkedList.push(1).push(2).push(3);
      expect(linkedList.set(-1, 3)).toBeFalse();
    });
  });

  describe('insert', () => {
    test('should insert a new node into the list', () => {
      linkedList.push(0).push(2).push(3);

      expect(linkedList.insert(2, 4)).toBeTrue();
      expect(linkedList.size).toBe(4);
      expect(linkedList.get(0)?.data).toBe(0);
      expect(linkedList.get(1)?.data).toBe(2);
      expect(linkedList.get(2)?.data).toBe(4);
      expect(linkedList.get(3)?.data).toBe(3);
    });

    test('should insert a new node into the empty list', () => {
      linkedList.insert(0, 1);

      expect(linkedList.size).toBe(1);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(1);
      expect(linkedList.head).toEqual(linkedList.tail);
    });
  });
});
