//   +===================================================+
//   |                  WRITE YOUR CODE HERE             |
//   | Description:                                      |
//   | - This method partitions a linked list around a   |
//   |   value `x`.                                      |
//   | - It rearranges the nodes in such a way that all  |
//   |   nodes less than `x` come before all nodes       |
//   |   greater than or equal to `x`.                   |
//   +===================================================+

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

  partitionList(x) {
    if (!this.head) return;

    const dummyNode1 = new Node(0);
    const dummyNode2 = new Node(0);
    let lessValuesPointer = dummyNode1;
    let greaterOrEqualValuesPointer = dummyNode2;
    let current = this.head;

    while (current) {
      if (current.value < x) {
        lessValuesPointer.next = current;
        lessValuesPointer = current;
      } else {
        greaterOrEqualValuesPointer.next = current;
        greaterOrEqualValuesPointer = current;
      }
      current = current.next;
    }

    greaterOrEqualValuesPointer.next = null;
    lessValuesPointer.next = dummyNode2.next;

    this.head = dummyNode1.next;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(1);
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

console.log("After Partition, x = 2");
myLinkedList.partitionList(2);
myLinkedList.printList();
/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    4 -> 1 -> 3 -> 2 -> 5
    After Partition, x = 2
    1 -> 4 -> 3 -> 2 -> 5 
*/
