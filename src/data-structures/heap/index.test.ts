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

  describe('remove method', () => {
    test('remove from empty heap should return null', () => {
      expect(heap.remove()).toBeNull();
    });

    test('remove the only element from the heap', () => {
      heap.insert(88);
      expect(heap.remove()).toBe(88);
      expect(heap.getHeap()).toEqual([]);
      expect(heap.remove()).toBeNull();
    });

    test('should remove values from heap', () => {
      heap.insert(95);
      heap.insert(75);
      heap.insert(80);
      heap.insert(55);
      heap.insert(60);
      heap.insert(50);
      heap.insert(65);
      heap.insert(100);
      expect(heap.remove()).toBe(100);
      expect(heap.getHeap()).toEqual([95, 75, 80, 55, 60, 50, 65]);

      expect(heap.remove()).toBe(95);
      expect(heap.getHeap()).toEqual([80, 75, 65, 55, 60, 50]);
    });
  });
});
