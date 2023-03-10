import React from "react";

const TodoContainer = (props) => {
  return (
    <div className="todo-outer">
      <div className="todo-container-wrapper">
        <h2>TODOS</h2>
        <p>3 total today</p>
        <div className="todo-card-area">{props.children}</div>
      </div>
    </div>
  );
};

export default TodoContainer;
