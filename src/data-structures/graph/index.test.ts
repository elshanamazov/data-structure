import { beforeEach, describe, expect, test } from 'bun:test';
import { Graph } from '.';

describe('Graph init and vertex method', () => {
  let graph: Graph<number>;

  beforeEach(() => {
    graph = new Graph<number>();
  });

  test('should initialize graph with an empty list', () => {
    expect(graph).toBeDefined();
    expect(graph.getAdjacencyList).toBeDefined();
    expect(Object.keys(graph.getAdjacencyList).length).toBe(0);
  });

  test('should add a vertex', () => {
    const result = graph.addVertex('vertex');
    expect(result).toBe(true);
    expect(graph.getAdjacencyList().vertex).toBeDefined();
    expect(graph.getAdjacencyList().vertex.length).toBe(0);
    const secondAddResult = graph.addVertex('vertex');
    expect(secondAddResult).toBe(false);
  });

  describe('add edge method', () => {
    test('should return true after add edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      expect(graph.getAdjacencyList().A).toContain('B');
      expect(graph.getAdjacencyList().B).toContain('A');
      expect(graph.addEdge('A', 'B')).toBe(true);
      expect(graph.addEdge('B', 'A')).toBe(true);
    });

    test('should return false with a non-existent', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      expect(graph.addEdge('A', 'C')).toBe(false);
    });
  });

  describe('remove edge method', () => {
    test('should return remove edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      expect(graph.addEdge('A', 'B')).toBe(true);
      expect(graph.addEdge('B', 'C')).toBe(true);
      expect(graph.addEdge('C', 'A')).toBe(true);

      expect(graph.getAdjacencyList().A).toContain('B');
      expect(graph.getAdjacencyList().B).toContain('C');
      expect(graph.getAdjacencyList().C).toContain('A');

      expect(graph.removeEdge('A', 'B')).toBe(true);
      expect(graph.getAdjacencyList().A).not.toContain('B');
      expect(graph.getAdjacencyList().B).not.toContain('A');
      expect(graph.removeEdge('A', 'D')).toBe(false);
    });
  });
});
