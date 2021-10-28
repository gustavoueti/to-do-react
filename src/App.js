import React from "react"
import "./App.css";
//Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gut's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}

export default App;