class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // you dont need to define size
  }

  // Method to append a node to the circular linked list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.tail.next = this.head; // Make the last node point to the first node
  }

  // Method to print the elements of the circular linked list
  print() {
    if (!this.head) return;
    let current = this.head;
    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(3);
circularList.print();
