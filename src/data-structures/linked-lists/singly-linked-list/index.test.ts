// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, test } from 'bun:test';
import { SinglyLinkedList } from './index';

describe('SinglyLinkedList', () => {
  let linkedList: SinglyLinkedList;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  // Test for creating a linked list
  test('should create linked list', () => {
    expect(linkedList).toBeDefined();
  });

  describe('append', () => {
    test('should append node to the empty list', () => {
      linkedList.append(1);

      expect(linkedList.head).toBeDefined();
      expect(linkedList.tail).toBeDefined();
      expect(linkedList.size).toBe(1);
    });

    test('should append multiple nodes', () => {
      linkedList.append(1);
      linkedList.append(2);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.tail?.data).toBe(2);
      expect(linkedList.size).toBe(2);
    });

    test('should append multiple nodes using a call chain', () => {
      linkedList.append(1).append(2).append(3);

      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.head?.next?.data).toBe(2);
      expect(linkedList.tail?.data).toBe(3);
      expect(linkedList.tail?.next).toBe(null);
      expect(linkedList.size).toBe(3);
    });
  });
});
