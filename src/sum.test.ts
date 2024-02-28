import { describe, expect, test } from 'bun:test';
import { sum } from './sum';

describe('function sum', () => {
  test('should sum two numbers correctly', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
