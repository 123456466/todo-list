import React from "react";

const TodoItem = ({ id, text, completed, updateTodo, del }) => {
  return (
    <li key={id}>
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          updateTodo(id);
        }}
      >
        {completed ? "취소" : "완료"}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          del(id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
