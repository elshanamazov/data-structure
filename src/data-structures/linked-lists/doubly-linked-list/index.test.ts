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
});
