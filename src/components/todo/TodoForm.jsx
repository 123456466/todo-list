import React from "react";

const TodoForm = ({ addInputTodoList, newTodo, todoFormInput }) => {
  return (
    <form onSubmit={addInputTodoList}>
      <input
        type="text"
        placeholder="리스트를 입력해 주세요."
        value={newTodo}
        onChange={todoFormInput}
      />
      <button>만들기</button>
    </form>
  );
};

export default TodoForm;
