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

  describe('set and get method', () => {
    test('should set and get values', () => {
      HT.set('bolts', 1400).set('washers', 20).set('lumbers', 54);

      expect(HT.get('bolts')).toBe(1400);
      expect(HT.get('washers')).toBe(20);
      expect(HT.get('lumbers')).toBe(54);
    });

    test('should handle multiple values for the same key', () => {
      HT.set('washers', 20);
      HT.set('washers', 30);
      expect(HT.get('washers')).toBe(20);
    });

    test('should update value for non-existing key', () => {
      HT.set('washers', 20);
      HT.set('lumbers', 30);
      expect(HT.get('skates')).toBeUndefined();
    });
  });

  describe('keys method', () => {
    test('should return arr of keys', () => {
      HT.set('bolts', 1400).set('washers', 20).set('lumbers', 54);
      expect(HT.keys()).toEqual(
        expect.arrayContaining(['bolts', 'washers', 'lumbers']),
      );
    });

    test('should return an empty array if no keys are set', () => {
      const keys = HT.keys();
      expect(keys).toEqual([]);
    });
  });
});
