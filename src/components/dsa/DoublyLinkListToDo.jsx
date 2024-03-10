import React, { useState } from 'react';

// Node class representing each task in the doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Component for the to-do list
function DoublyLinkListToDo() {
  const [head, setHead] = useState(null); // Reference to the head of the doubly linked list
  const [task, setTask] = useState('');   // State for the input task

  // Function to add a new task to the doubly linked list
  const addTask = () => {
    if (!task) return; // Ignore empty tasks
    const newNode = new Node(task);
    if (!head) {
      setHead(newNode);
    } else {
      newNode.next = head;
      head.prev = newNode;
      setHead(newNode);
    }
    setTask('');
  };

  // Function to delete a task from the doubly linked list
  const deleteTask = (taskToDelete) => {
    if (!head) return;
    let current = head;
    while (current) {
      if (current.value === taskToDelete) {
        if (current === head) {
          setHead(current.next);
          if (current.next) {
            current.next.prev = null;
          }
        } else {
          current.prev.next = current.next;
          if (current.next) {
            current.next.prev = current.prev;
          }
        }
        break;
      }
      current = current.next;
    }
  };

  return (
    <div>
      <h2>To-Do List Doubly LinkList </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {head && (
          <>
            <li>{head.value}</li>
            <button onClick={() => deleteTask(head.value)}>Delete</button>
            {head.next && (
              <TodoListItems head={head.next} deleteTask={deleteTask} />
            )}
          </>
        )}
      </ul>
    </div>
  );
}

// Recursive component to render the remaining tasks
function TodoListItems({ head, deleteTask }) {
  return (
    <>
      <li>{head.value}</li>
      <button onClick={() => deleteTask(head.value)}>Delete</button>
      {head.next && <TodoListItems head={head.next} deleteTask={deleteTask} />}
    </>
  );
}

export default DoublyLinkListToDo;
