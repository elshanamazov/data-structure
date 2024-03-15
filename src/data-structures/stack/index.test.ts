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
});
