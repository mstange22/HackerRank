import { MinHeap } from './min-heap.js';
import { MaxHeap } from './max-heap.js';

describe('MinHeap', () => {
  test('empty heap', () => {
    const minHeap = new MinHeap();
    expect(minHeap.elements).toEqual([]);
  });
  test('can initialize heap', () => {
    const minHeap = new MinHeap(1);
    expect(minHeap.elements).toEqual([1]);
  });
  test('can peek', () => {
    const minHeap = new MinHeap(1);
    expect(minHeap.peek()).toEqual(1);
  });
  test('peek empty heap is an error', () => {
    const minHeap = new MinHeap();
    expect(() => {
      minHeap.peek();
    }).toThrow(new Error('Empty heap'));
  });
  test('can initialize heap with multiple values', () => {
    const minHeap = new MinHeap(17, 15, 1, 10, 8, 20);
    expect(minHeap.elements).toEqual([1, 8, 15, 17, 10, 20]);
  });
  test('can add element', () => {
    const minHeap = new MinHeap();
    minHeap.add(1);
    expect(minHeap.elements).toEqual([1]);
  });
  test('can add multiple elements', () => {
    const minHeap = new MinHeap();
    minHeap.add(17);
    minHeap.add(15);
    minHeap.add(1);
    minHeap.add(10);
    minHeap.add(8);
    minHeap.add(20);
    expect(minHeap.elements).toEqual([1, 8, 15, 17, 10, 20]);
  });
  test('remove on empty heap is an error', () => {
    const minHeap = new MinHeap();
    expect(() => {
      minHeap.remove();
    }).toThrow(new Error('Empty heap'));
  });
  test('can remove element', () => {
    const minHeap = new MinHeap(1);
    minHeap.remove();
    expect(minHeap.elements).toEqual([]);
  });
  test('can remove all elements', () => {
    const minHeap = new MinHeap(17, 15, 1, 10, 8, 20);
    for (let i = 0; i < 6; i++) {
      minHeap.remove();
    }
    expect(minHeap.elements).toEqual([]);
  });
});

describe('MaxHeap', () => {
  test('empty heap', () => {
    const maxHeap = new MaxHeap();
    expect(maxHeap.elements).toEqual([]);
  });
  test('can initialize heap', () => {
    const maxHeap = new MaxHeap(1);
    expect(maxHeap.elements).toEqual([1]);
  });
  test('can peek', () => {
    const maxHeap = new MaxHeap(1);
    expect(maxHeap.peek()).toEqual(1);
  });
  test('peek empty heap is an error', () => {
    const maxHeap = new MaxHeap();
    expect(() => {
      maxHeap.peek();
    }).toThrow(new Error('Empty heap'));
  });
  test('can initialize heap with multiple values', () => {
    const maxHeap = new MaxHeap(17, 15, 1, 10, 8, 20);
    expect(maxHeap.elements).toEqual([20, 15, 17, 10, 8, 1]);
  });
  test('can add element', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add(1);
    expect(maxHeap.elements).toEqual([1]);
  });
  test('can add two elements', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add(1);
    maxHeap.add(20);
    expect(maxHeap.elements).toEqual([20, 1]);
  });
  test('can add multiple elements', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add(17);
    maxHeap.add(15);
    maxHeap.add(1);
    maxHeap.add(10);
    maxHeap.add(8);
    maxHeap.add(20);
    expect(maxHeap.elements).toEqual([20, 15, 17, 10, 8, 1]);
  });
  test('remove on empty heap is an error', () => {
    const maxHeap = new MaxHeap();
    expect(() => {
      maxHeap.remove();
    }).toThrow(new Error('Empty heap'));
  });
  test('can remove element', () => {
    const maxHeap = new MaxHeap(1);
    maxHeap.remove();
    expect(maxHeap.elements).toEqual([]);
  });
  test('can remove all elements', () => {
    const maxHeap = new MaxHeap(17, 15, 1, 10, 8, 20);
    for (let i = 0; i < 6; i++) {
      maxHeap.remove();
    }
    expect(maxHeap.elements).toEqual([]);
  });
});
