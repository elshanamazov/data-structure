// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, test } from 'bun:test';
import { Stack } from './index';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should create Stack', () => {
    expect(stack).toBeDefined();
  });

  describe('push', () => {
    test('should push elements to the top of the stack', () => {
      stack.push(1).push(2).push(3);

      expect(stack.top?.data).toBe(3);
      expect(stack.size).toBe(3);
    });

    test('should work correctly with push after pop operations', () => {
      stack.push(1).push(2);
      stack.pop();
      stack.push(3);
      expect(stack.top?.data).toBe(3);
      expect(stack.size).toBe(2);
    });
  });

  describe('pop', () => {
    test('should return null from empty stack', () => {
      expect(stack.pop()).toBeNull();
    });

    test('should remove element from the top of the stack', () => {
      stack.push(1).push(2).push(3);
      stack.pop();
      expect(stack.top?.data).toBe(2);
      expect(stack.size).toBe(2);
      stack.pop();
      expect(stack.top?.data).toBe(1);
      expect(stack.size).toBe(1);
    });
  });
});
