import React, {useState} from 'react';
import {v4} from 'uuid';
import { PlaylistAddCheck } from '@material-ui/icons';

import './style.css'

function TodoForm({addTodo}){

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })
    function handleInputChange(e){
        setTodo({...todo, task: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: v4()});
            //reset task input
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-todo">
            <div className="input-wrapper">
                <input name="task" type="text" value={todo.task} onChange={handleInputChange} className="input-style" minLength="5" autoComplete="off"/>
                <button type="submit" className="button-input">
                    <PlaylistAddCheck className="icon-todo-form"/>
                </button>
            </div>
        </form>
    )
}


export default TodoForm;