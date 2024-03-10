class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class CircularDoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Method to append a node to the circular doubly linked list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
  
    // Method to print the elements of the circular doubly linked list
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
  const circularDoublyList = new CircularDoublyLinkedList();
  circularDoublyList.append(1);
  circularDoublyList.append(2);
  circularDoublyList.append(3);
  circularDoublyList.print();
  