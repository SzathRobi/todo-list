import React from "react";
import "./Header.css";

export default function HeaderHeader({
  inputValue,
  updateInputValue,
  addTodo,
  addProject
}) {
  return (
    <header>
      <form onSubmit={event => event.preventDefault()}>
        <input type="text" value={inputValue} onChange={updateInputValue} />
        <div>
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={addProject}>Add Project</button>
        </div>
      </form>
    </header>
  );
}
