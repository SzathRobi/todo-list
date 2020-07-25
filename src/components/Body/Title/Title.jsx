import React from "react";
import "./Title.css";

export default function Title({ title }) {
  return (
    <header className="title-container">
      <h2>{title}</h2>
    </header>
  );
}
