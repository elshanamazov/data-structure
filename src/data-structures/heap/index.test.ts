import { beforeEach, describe, expect, test } from 'bun:test';
import { Heap } from '.';

describe('Heap init', () => {
  let heap: Heap;

  beforeEach(() => {
    heap = new Heap();
  });

  test('should initialize heap', () => {
    expect(heap).toBeDefined();
  });

  describe('Insert method', () => {
    test('should insert values in the heap correctly', () => {
      heap.insert(99);
      heap.insert(72);
      heap.insert(61);
      heap.insert(58);
      const expectedHeap = [99, 72, 61, 58];
      expect(heap.getHeap()).toEqual(expectedHeap);
      expect(heap.getHeap()[0]).toBe(99);

      heap.insert(100);
      const newExpectedHeap = [100, 99, 61, 58, 72];
      expect(heap.getHeap()).toEqual(newExpectedHeap);
    });
  });
});
