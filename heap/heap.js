const getParentIndex = index => Math.floor((index - 1) / 2);
const getLeftChildIndex = index => index * 2 + 1;
const getRightChildIndex = index => index * 2 + 2;

export class MinHeap {
  constructor(...args) {
    this.elements = [];
    for (let i = 0; i < args.length; i++) {
      this.add(args[i]);
    }
  }

  hasLeftChild(index) {
    return this.elements[(index * 2) + 1] !== undefined;
  }

  hasRightChild(index) {
    return this.elements[(index * 2) + 2] !== undefined;
  }

  hasParent(index) {
    return this.elements[Math.floor((index - 1) / 2)] !== undefined;
  }
  
  leftChild(index) {
    return this.elements[(index * 2) + 1];
  }

  rightChild(index) {
    return this.elements[(index * 2) + 2];
  }
  
  parent(index) {
    return this.elements[Math.floor((index - 1) / 2)];
  }

  swap(index1, index2) {
    const temp = this.elements[index1];
    this.elements[index1] = this.elements[index2];
    this.elements[index2] = temp;
  }

  peek() {
    if (this.elements.length === 0) throw new Error('Empty heap');
    return this.elements[0];
  }

  add(element) {
    this.elements.push(element);
    this.bubbleUp();
  }

  remove() {
    if (this.elements.length === 0) throw new Error('Empty heap');
    const item = this.elements[0];
    this.elements[0] = this.elements.pop();
    this.bubbleDown();
    return item;
  }
  
  bubbleUp() {
    let index = this.elements.length - 1;
    while (this.hasParent(index) && this.elements[getParentIndex(index)] > this.elements[index]) {
      this.swap(getParentIndex(index), index);
      index = getParentIndex(index);
    }
  }
  
  bubbleDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = getRightChildIndex(index);
      }
      if (this.elements[index] < this.elements[smallerChildIndex]) {
        break;
      } else {
        this.swap(smallerChildIndex, index);
      }
      index = smallerChildIndex;
    }
  }
}
