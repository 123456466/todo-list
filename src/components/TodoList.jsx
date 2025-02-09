import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, del }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            updateTodo={updateTodo}
            del={del}
            completed={todo.completed}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
