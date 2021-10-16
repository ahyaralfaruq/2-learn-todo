import React from 'react';
import {Cancel} from '@material-ui/icons'

import './style.css'

function Todo({todo, toggleComplete, removeTodo}){

    function handleClickCheckbox(){
        toggleComplete(todo.id)
    }

    function handleRemove(){
        removeTodo(todo.id)
    }

    return (
        <div className="todo-result">
            <input type="checkbox" onClick={handleClickCheckbox} />
            <li className="result-field" style={{textDecoration: todo.completed ? "line-through" : null }}>
                {todo.task}
                <div className="remove-button">
                    <button onClick={handleRemove} className="todo-button">
                        <Cancel className="button-cancel" />
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo;