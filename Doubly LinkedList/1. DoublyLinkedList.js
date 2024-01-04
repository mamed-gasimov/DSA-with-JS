class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return;

    const nodeToRemove = this.head;
    if (this.length > 1) {
      const newHead = this.head.next;
      newHead.prev = null;
      nodeToRemove.next = null;
      this.head = newHead;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return nodeToRemove;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let current = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    after.prev = newNode;
    newNode.next = after;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    const nextNode = node.next;
    const prevNode = node.prev;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

const myList = new DoublyLinkedList(1);
myList.push(2);
myList.push(3);
myList.push(4);
