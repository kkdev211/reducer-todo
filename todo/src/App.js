import React from 'react';
import ReactDOM from "react-dom";

import Todo from './components/Todo';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1> My To Do List </h1>
     <Todo />
    </div>
  );
}

export default App;
