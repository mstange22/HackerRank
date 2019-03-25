class MinHeap {
  constructor(elements) {
    this.heap = [];
    for (const element of elements) {
      this.insert(element);
    }
  }

  insert(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] > this.heap[index]) {
        this.swap(parent, index);
      } else {
        break;
      }
      index = parent;
    }
  }

  remove() {
    if (this.heap.length < 1) return null;
    const res = this.heap[0];
    if (this.heap.length > 0) {
      this.heap[0] = this.heap.pop();
    }
    if (this.heap.length > 1) this.bubbleDown();
    return res;
  }

  bubbleDown() {
    let index = 0;
    while (index < this.heap.length - 1) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      if (this.heap[leftChildIndex]) {
        let smallerChildIndex = leftChildIndex;
        if (this.heap[rightChildIndex] && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
          smallerChildIndex = rightChildIndex;
        }
        if (this.heap[index] < this.heap[smallerChildIndex]) {
          break;
        }

        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
}

const minHeap = new MinHeap([9, 5, 7, 1, 9]);
console.log(minHeap);
console.log(minHeap.remove());
console.log(minHeap);
console.log(minHeap.remove());
console.log(minHeap);
