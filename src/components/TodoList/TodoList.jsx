import React from 'react';
import Todo from './Todo/Todo';

import './style.css';

function TodoList(props){
    
    return (
        <ul className="todo-list-wrapper">
            {props.todos.map(todo => (
                <Todo todo={todo} key={todo.id} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo}  ></Todo>
            ))}
        </ul>
    )
}

export default TodoList;