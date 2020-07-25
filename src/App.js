import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const updateInputValue = (event) => setInputValue(event.target.value);

  //const savedTodos = JSON.parse(localStorage.savedTodos);
  //const savedProjects = JSON.parse(localStorage.savedProjects);

  const [todos, setTodos] = useState([]); // useState(savedTodos);
  const addTodo = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length,
          title: inputValue,
          completed: false,
          important: false,
        },
      ]);
      setHaveTodo(true);
      setInputValue("");
    }
  };

  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (todos.length === 1) {
      setHaveTodo(false);
    }
  };
  const updateCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const updateImportant = (index) => {
    const newTodos = [...todos];
    newTodos[index].important = !newTodos[index].important;
    setTodos(newTodos);
  };

  const [projects, setProjects] = useState([]); // useState(savedProjects);
  const addProject = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setProjects([
        ...projects,
        {
          id: `project${projects.length}`,
          title: inputValue,
        },
      ]);
      setHaveProject(true);
    }
    setInputValue("");
  };

  const removeProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
    if (projects.length === 1) {
      setHaveProject(false);
    }
  };

  const [haveTodo, setHaveTodo] = useState(false);
  const [haveProject, setHaveProject] = useState(false);
  ////////////////////////////////////////////////////////////////////////////////

  /*const JSONreadyTodos = JSON.stringify(todos);
  const JSONreadyProjects = JSON.stringify(projects);

  useEffect(() => {
    localStorage.setItem("savedTodos", JSONreadyTodos);
    localStorage.setItem("savedProjects", JSONreadyProjects);
  }, [todos, projects]);*/

  //const savedTds = localStorage.getItem("savedTodos");
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <Header
        inputValue={inputValue}
        updateInputValue={updateInputValue}
        addTodo={addTodo}
        addProject={addProject}
      />
      <Body
        haveProject={haveProject}
        projects={projects}
        haveTodo={haveTodo}
        todos={todos}
        updateCompleted={updateCompleted}
        removeTodos={removeTodos}
        removeProject={removeProject}
        updateImportant={updateImportant}
      />
    </div>
  );
}
