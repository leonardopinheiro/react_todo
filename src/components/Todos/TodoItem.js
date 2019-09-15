import React from "react";
import Button from "../Button";
import "./index.css";

const TodoItem = props => {
  const { id, title, completed } = props.todo;
  const { markComplete, delTodo } = props;

  return (
    <div className={`line-todo ${completed && "with-line"}`}>
      <p>
        <input type="checkbox" onChange={() => markComplete(id)} /> {title}
        <Button value="x" className="btn-todo" onClick={() => delTodo(id)} />
      </p>
    </div>
  );
};

export default TodoItem;
