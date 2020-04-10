import React, { useState, useReducer } from "react";

import { todoReducer, initialTodoState } from "../reducers/todoReducer";


const Todo = () => {
    // const [title, setTitle] = useState("Hello earthlings!");
    // const [editing, setEditing] = useState(false);
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodoText, setNewTodoText] = useState("");
  
    const handleChanges = e => {
      setNewTodoText(e.target.value);
    };
  
    return (
      <div>
        {!todoState.completed? (
          <h2>
            {/* {todoState.item}{" "} */}
            <p onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
              className="far fa-edit"> Add New Task</p>
          </h2>
        ) : (
          <div>
            <input
              className="todo-input"
              type="text"
              name="newTodoText"
              value={newTodoText}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                dispatch({ type: "UPDATE_TODO", payload: newTodoText });
              }}
            >
              Add Task
            </button>
            <button
              onClick={() => {
                dispatch({ type: "TOGGLE_EDITING" });
              }}
            >
             Cancel
            </button>
          </div>
        )}
        <ul>
            <li> My First Task</li>

        </ul>
      </div>
    );
  };
  
  export default Todo;
  