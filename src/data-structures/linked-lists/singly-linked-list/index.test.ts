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
});
