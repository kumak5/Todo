import React, { useState } from "react";
import './todo-list-item.css'

const TodoListItem = ({
    id,
    label,
    done,
    important,
    onDeleted,
    onToggleImportant,
    onLabelClick }) => {

    let classNames = 'todo-list-item'

    if (done) { classNames += ' done' }

    if (important) { classNames += ' important' }

    return <span className={classNames} >
        <span className="todo-list-item-label"
            onClick={onLabelClick}>
            {id+'. '}
            {label}
        </span>

        <button type='button'
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
        >
            <i className="fa-solid fa-exclamation"></i>
        </button>

        <button type='button'
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
            <div>X</div>
        </button>

    </span>


}

export default TodoListItem