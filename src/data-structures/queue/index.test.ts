// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, test } from 'bun:test';
import { Queue } from './index';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('should create Queue', () => {
    expect(queue).toBeDefined();
  });

  describe('enqueue', () => {
    test('should enqueue elements to the end of the queue', () => {
      queue.enqueue(1).enqueue(2).enqueue(3);

      expect(queue.last?.data).toBe(3);
      expect(queue.size).toBe(3);
    });

    test('should enqueue element correctly to the empty queue', () => {
      queue.enqueue(1);
      expect(queue.first?.data).toBe(1);
      expect(queue.last?.data).toBe(1);
      expect(queue.size).toBe(1);
    });
  });

  describe('dequeue', () => {
    test('should return null from empty queue', () => {
      expect(queue.dequeue()).toBeNull();
    });

    test('should remove element from the beginning of the queue', () => {
      queue.enqueue(1).enqueue(2).enqueue(3);
      queue.dequeue();
      expect(queue.first?.data).toBe(2);
      expect(queue.size).toBe(2);
      queue.dequeue();
      expect(queue.first?.data).toBe(3);
      expect(queue.last?.data).toBe(3);
      expect(queue.size).toBe(1);
    });

    test('should return the correct data from the dequeued element', () => {
      queue.enqueue(1).enqueue(2).enqueue(3);
      const dequeuedElement = queue.dequeue();
      expect(dequeuedElement?.data).toBe(1);
    });
  });
});
