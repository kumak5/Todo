import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onLabelClick, filterInput }) => {

    const filteredTodos = todos.filter((item) => {
        return item.label.toLowerCase().includes(filterInput.toLowerCase())
    })

    const elements = filteredTodos
    .map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem
                    {...item}
                    onDeleted={() => onDeleted(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onLabelClick={() => onLabelClick(item.id)}
                    />
            </li>
        )
    })
    
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList