import React from "react";
import Title from "./Title/Title";
import Project from "./Project/Project";
import TodoItem from "./TodoItem/TodoItem";

export default function Body({
  haveProject,
  projects,
  haveTodo,
  todos,
  updateCompleted,
  removeTodos,
  removeProject,
  updateImportant,
}) {
  return (
    <div>
      {haveProject ? <Title title="Projects" /> : null}
      {projects.map((project, index) => (
        <Project
          key={project.id}
          index={index}
          title={project.title}
          updateCompleted={updateCompleted}
          removeTodos={removeTodos}
          updateImportant={updateImportant}
          removeProject={removeProject}
        />
      ))}
      <div style={{ height: "1.5rem" }}></div>
      {haveTodo ? <Title title="Todos" /> : null}
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index}
          title={todo.title}
          completed={todo.completed}
          updateCompleted={updateCompleted}
          removeTodos={removeTodos}
          important={todo.important}
          updateImportant={updateImportant}
        />
      ))}
    </div>
  );
}
