import React, { useReducer } from 'react';

import { todoReducer } from '../reducers/todoReducer';

const Todo = props => {
    //add state and dispatch here- reducer and initialstate
    return (
        <div
            className={`task${props.task.completed ? "completed" : ""}`}
            onClick={e => props.toggleCompleted(props.task.id)}
        >
            <p>{props.task.name}</p>
        </div>
    );
}

export default Todo;