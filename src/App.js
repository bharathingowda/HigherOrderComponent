import "./styles.css";
import React from "react";
import HoverButton from "./components/hovercount";
import ClickCounter from "./components/clickCounter";

export default function App() {
  return (
    <div className="App">
      <h1>Higher order component</h1>
      <ClickCounter />
      <HoverButton />
    </div>
  );
}
