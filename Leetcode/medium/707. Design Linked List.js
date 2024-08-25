class Node {
  val;
  prev;
  next;

  constructor(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class MyLinkedList {
  left;
  right;

  constructor() {
    this.left = new Node(0);
    this.right = new Node(0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  get(index) {
    let current = this.left.next;

    while (current && index > 0) {
      current = current.next;
      index--;
    }

    if (current && current !== this.right && index === 0) {
      return current.val;
    }

    return -1;
  }

  addAtHead(val) {
    const newHead = new Node(val);
    const prevNode = this.left;
    const nextNode = this.left.next;

    prevNode.next = newHead;
    nextNode.prev = newHead;
    newHead.prev = prevNode;
    newHead.next = nextNode;
  }

  addAtTail(val) {
    const newHead = new Node(val);
    const prevNode = this.right.prev;
    const nextNode = this.right;

    prevNode.next = newHead;
    nextNode.prev = newHead;
    newHead.prev = prevNode;
    newHead.next = nextNode;
  }

  addAtIndex(index, val) {
    let i = 0;
    let current = this.left.next;

    while (current && index > 0) {
      current = current.next;
      index--;
    }

    if (current && index === 0) {
      const newNode = new Node(val);
      const nextNode = current;
      const prevNode = current.prev;

      newNode.next = nextNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
    }
  }

  deleteAtIndex(index) {
    let current = this.left.next;

    while (current && index > 0) {
      current = current.next;
      index--;
    }

    if (current && current !== this.right && index === 0) {
      const nextNode = current.next;
      const prevNode = current.prev;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
