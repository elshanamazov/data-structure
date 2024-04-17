/* eslint-disable object-curly-newline */
import { beforeEach, describe, expect, test } from 'bun:test';
import { HashTable } from '.';

describe('Hash-Table', () => {
  let HT: HashTable;

  beforeEach(() => {
    HT = new HashTable(7);
  });

  test('should create hash-table', () => {
    expect(HT).toBeDefined();
  });
});
