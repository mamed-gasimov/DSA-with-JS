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
    this.tail = newNode;
    this.length = 1;
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
    this.length++;
  }

  hasLoop() {
    if (!this.head) return false;

    // Initialize 'slow' and 'fast' pointers at the head node
    // 'slow' will move 1 step at a time
    // 'fast' will move 2 steps at a time
    let slow = this.head;
    let fast = this.head;

    // Continue loop if 'fast' pointer and 'fast.next'
    // are not null. This also prevents errors
    while (fast && fast.next) {
      // Move 'slow' 1 step forward in the list
      slow = slow.next;
      // Move 'fast' 2 steps forward in the list
      fast = fast.next.next;
      // Check if 'slow' and 'fast' pointers meet
      if (slow === fast) {
        // If they meet, it confirms a loop
        // Return true to indicate a loop
        return true;
      }
    }

    // If loop ends without meeting of pointers,
    // it confirms absence of loop in the list
    return false;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
