import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import TodoItem from "../TodoItem/TodoItem";
import { FaPlus } from "react-icons/fa";
import "./Project.css";

export default function Project({ index, title, removeProject }) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const getTasks = () => {
    if (JSON.parse(localStorage.getItem(taskTitle) !== null))
      return JSON.parse(localStorage.getItem(taskTitle));
    if (JSON.parse(localStorage.getItem(taskTitle) === null)) return [];
  };
  //console.log(JSON.parse(localStorage.getItem(`tasks${title}`)));
  const taskTitle = `task${title}`;
  const savedTasks = getTasks();
  console.log(savedTasks);

  const [showModal, setShowModal] = useState(false);
  const updateShowModal = () => setShowModal(!showModal);

  const [taskValue, setTaskValue] = useState("");
  const updateTaskValue = (event) => setTaskValue(event.target.value);

  const [tasks, setTasks] = useState(savedTasks);

  const JSONReadyTasks = JSON.stringify(tasks);
  useEffect(() => {
    localStorage.setItem(taskTitle, JSONReadyTasks);
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();
    if (taskValue !== "") {
      setTasks([
        ...tasks,
        {
          id: `task${tasks.length}`,
          title: taskValue,
          completed: false,
          important: false,
        },
      ]);
      setShowModal(false);
    }
    setTaskValue("");
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const updateCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const updateImportant = (index) => {
    const newTasks = [...tasks];
    newTasks[index].important = !newTasks[index].important;
    setTasks(newTasks);
  };

  const renderAnimation = {
    position: "relative",
    top: "0",
    left: "0",
    transition: "300ms",
  };

  const rotate = {
    transform: "rotate(90deg)",
  };

  return (
    <div
      style={rendered ? renderAnimation : null}
      className="project-container"
    >
      <header className="project-title">
        <h3 style={{ display: "flex", alignItems: "center" }}>
          {title}
          <FaPlus
            className="plus-icon"
            onClick={updateShowModal}
            style={showModal ? rotate : null}
          />
          <FaPlus
            className="project-icon"
            onClick={() => removeProject(index)}
          />
        </h3>
        {showModal ? (
          <ProjectModal addTask={addTask} updateTaskValue={updateTaskValue} />
        ) : null}
      </header>
      {tasks.map((task, index) => (
        <TodoItem
          key={task.id}
          index={index}
          title={task.title}
          completed={task.completed}
          updateCompleted={updateCompleted}
          removeTodos={removeTask}
          important={task.important}
          updateImportant={updateImportant}
        />
      ))}
    </div>
  );
}
