import React from "react";

export default function ProjectModal({ taskValue, updateTaskValue, addTask }) {
  return (
    <form onSubmit={addTask} className="project-modal">
      <input type="text" value={taskValue} onChange={updateTaskValue} />
      <button>Add Task</button>
    </form>
  );
}
