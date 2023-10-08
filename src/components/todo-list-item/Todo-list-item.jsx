import React, { useState } from "react";
import './todo-list-item.css'

const TodoListItem = ({ label, onDeleted }) => {
    const [done, setDone] = useState(false)
    const [important, setImportant] = useState(false)
    const onLabelClick = () => {
        // console.log(`${label} was clicked`)
        setDone((prevState) => !prevState)
    }

    const onMarkImportant = () => {
        setImportant((prevState) => !prevState)
    }

    let classNames = 'todo-list-item'
    if (done) {
        classNames += ' done'
    }

    if (important) {
        classNames += ' important'
    }

    return <span className={classNames} >
        <span className="todo-list-item-label"
            onClick={onLabelClick}>
            {label}
        </span>

        <button type='button'
            className="btn btn-outline-success btn-sm float-right"
            onClick={onMarkImportant}
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