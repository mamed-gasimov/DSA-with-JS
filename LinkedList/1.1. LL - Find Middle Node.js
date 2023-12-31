// Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

// Note: this LinkedList implementation does not have a length member variable.

// 1 -> 2 -> 3 -> 4 -> 5  ----> would return 3
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 ---> would return 4

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // uses "tortoise and hare" algorithm
  findMiddleNode() {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Iterate through the list
    while (fast && fast.next) {
      // Move slow pointer one step
      slow = slow.next;
      // Move fast pointer two steps
      fast = fast.next.next;
    }
    // Return middle node when fast reaches end
    return slow;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);
myLinkedList2.push(7);
myLinkedList2.push(8);
myLinkedList2.push(9);
myLinkedList2.push(10);
myLinkedList2.push(11);
myLinkedList2.push(12);
myLinkedList2.push(13);
myLinkedList2.push(14);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    Middle node value of list 2: 8
*/
