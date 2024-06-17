import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { DndContext, closestCorners } from "@dnd-kit/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My App ✅</h1>
      <DndContext collisionDetection={closestCorners}></DndContext>
    </div>
  );
}

export default App;
