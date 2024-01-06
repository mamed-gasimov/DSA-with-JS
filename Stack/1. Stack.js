class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // method name is push, but basically it is like unshift method, adds item on front, in this case on top
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  // pops item from the top of stack
  pop() {
    if (!this.top) return;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);
