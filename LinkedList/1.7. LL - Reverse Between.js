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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // reverseBetween(m, n) that reverses the nodes between indexes
  // (using 0-based indexing)  m and n (inclusive) in the linked list.
  reverseBetween(m, n) {
    // If the list is empty, do nothing
    if (!this.head) return;

    // Create a dummy node and set its next to head
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    // Move prev to mth node
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    // Set current as the mth node
    let current = prev.next;
    // Reverse the sublist from m to n
    for (let i = 0; i < n - m; i++) {
      // Save the next node of current
      const temp = current.next;
      // Update current's next to skip temp
      current.next = temp.next;
      // Move temp after prev
      temp.next = prev.next;
      // Update prev's next to temp
      prev.next = temp;
    }

    // Update head of the list
    this.head = dummy.next;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
