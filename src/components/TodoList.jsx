import React, { useState } from "react";

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

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

  const AddInputTodoList = (e) => {
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

  const TodoFormInput = (e) => {
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
      <form onSubmit={AddInputTodoList}>
        <input
          type="text"
          placeholder="리스트를 입력해 주세요."
          value={newTodo}
          onChange={TodoFormInput}
        />
        <button>만들기</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                updateTodo(todo.id);
              }}
            >
              {todo.completed ? "취소" : "완료"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                del(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
