import React, { useEffect, useState } from "react";
import { FaBook, FaExclamation, FaTrashAlt } from "react-icons/fa";
import "./TodoItem.css";

export default function TodoItem({
  title,
  completed,
  updateCompleted,
  removeTodos,
  index,
  important,
  updateImportant
}) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const creatingStyle = {
    transform: "scale(1)",
    transition: "500ms"
  };

  const todoItemStyles = {
    textDecoration: completed ? "line-through" : "none",
    fontWeight: important ? "600" : "400"
  };

  return (
    <div className="todo-item" style={rendered ? creatingStyle : null}>
      {important ? (
        <FaExclamation
          className="todo-icons"
          onClick={() => updateImportant(index)}
        />
      ) : (
        <FaBook className="todo-icons" onClick={() => updateImportant(index)} />
      )}
      <p style={todoItemStyles}>{title}</p>
      <input
        type="checkbox"
        onChange={() => updateCompleted(index)}
        checked={completed}
      />
      <FaTrashAlt className="todo-icons" onClick={() => removeTodos(index)} />
    </div>
  );
}
