import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

  const addInputTodoList = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      alert("내용을 입력해주세요.");
    }

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const todoFormInput = (e) => {
    setNewTodo(e.target.value);
  };

  const updateTodo = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        const updateCompleted = { ...todo, completed: !todo.completed };
        return updateCompleted;
      } else {
        return todo;
      }
    });
    setTodos(updateTodo);
  };

  const del = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id === id ? false : true;
    });

    setTodos(updateTodos);
  };

  return (
    <div>
      <TodoForm
        addInputTodoList={addInputTodoList}
        newTodo={newTodo}
        todoFormInput={todoFormInput}
      />
      <TodoList todos={todos} updateTodo={updateTodo} del={del} />
    </div>
  );
};

export default TodoContainer;
