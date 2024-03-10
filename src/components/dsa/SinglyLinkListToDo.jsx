import React, { useState } from 'react';

// Node class representing each task in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Component for the to-do list
function SinglyLinkListToDo() {
  const [head, setHead] = useState(null); // Reference to the head of the linked list
  const [task, setTask] = useState('');   // State for the input task
  const [editingTask, setEditingTask] = useState(null); // State to track which task is being edited
  const [editedValue, setEditedValue] = useState(''); // State for the edited task value

  // Function to add a new task to the linked list
  const addTask = () => {
    if (!task) return; // Ignore empty tasks
    const newNode = new Node(task);
    newNode.next = head;
    setHead(newNode);
    setTask('');
  };

  // Function to delete a task from the linked list
  const deleteTask = (taskToDelete) => {
    setHead(prev => {
      if (prev.value === taskToDelete) {
        return prev.next;
      }
      let current = prev;
      while (current.next) {
        if (current.next.value === taskToDelete) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
      return prev;
    });
  };

  // Function to handle editing a task
  const startEdit = (taskToEdit) => {
    setEditingTask(taskToEdit);
    setEditedValue(taskToEdit.value);
  };

  // Function to save edited task
  const saveEdit = () => {
    setEditingTask(null);
    setHead(prev => {
      let current = prev;
      while (current) {
        if (current.value === editingTask.value) {
          current.value = editedValue;
          break;
        }
        current = current.next;
      }
      return prev;
    });
  };

  return (
    <div>
      <h2>To-Do List With singly linklist</h2>
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
            <li>
              {editingTask === head ? (
                <>
                  <input
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                </>
              ) : (
                <>
                  {head.value}
                  <button onClick={() => deleteTask(head.value)}>Delete</button>
                  <button onClick={() => startEdit(head)}>Edit</button>
                </>
              )}
            </li>
            {head.next && (
              <TodoListItems
                head={head.next}
                deleteTask={deleteTask}
                startEdit={startEdit}
                editingTask={editingTask}
                editedValue={editedValue}
                setEditedValue={setEditedValue}
                saveEdit={saveEdit}
              />
            )}
          </>
        )}
      </ul>
    </div>
  );
}

// Recursive component to render the remaining tasks
function TodoListItems({ head, deleteTask, startEdit, editingTask, editedValue, setEditedValue, saveEdit }) {
  return (
    <>
      <li>
        {editingTask === head ? (
          <>
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <button onClick={saveEdit}>Save</button>
          </>
        ) : (
          <>
            {head.value}
            <button onClick={() => deleteTask(head.value)}>Delete</button>
            <button onClick={() => startEdit(head)}>Edit</button>
          </>
        )}
      </li>
      {head.next && (
        <TodoListItems
          head={head.next}
          deleteTask={deleteTask}
          startEdit={startEdit}
          editingTask={editingTask}
          editedValue={editedValue}
          setEditedValue={setEditedValue}
          saveEdit={saveEdit}
        />
      )}
    </>
  );
}

export default SinglyLinkListToDo;
