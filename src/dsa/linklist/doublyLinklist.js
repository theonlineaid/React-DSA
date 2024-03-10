// Define the Node class representing each node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Reference to the next node, initially null
    this.prev = null; // Reference to the previous node, initially null
  }
}

// Define the DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Reference to the first node in the list, initially null
    this.tail = null; // Reference to the last node in the list, initially null
    this.size = 0;    // Size of the linked list, initially 0
  }

  // Method to add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, append the new node after the current tail, update references, and update the tail reference
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // Increment the size of the list
  }

  // Method to print the elements of the linked list in forward direction
  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Method to print the elements of the linked list in backward direction
  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.printForward();  // Output: 1 2 3
doublyLinkedList.printBackward(); // Output: 3 2 1
