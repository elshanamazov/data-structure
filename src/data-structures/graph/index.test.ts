import { beforeEach, describe, expect, test } from 'bun:test';
import { Graph } from '.';

describe('Graph', () => {
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
});
