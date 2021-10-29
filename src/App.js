import React, { useState, useEffect } from "react"
import "./App.css";
//Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //STATES
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //RUN ONCE WHEN APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  
  //FUNCTIONS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
        break;
      }
  };
  
  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  //Get local Todos
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Gut's Todo List</h1>
      </header>
      <Form  
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus ={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos}
      todos={todos} 
      />
    </div>
  )
}

export default App;