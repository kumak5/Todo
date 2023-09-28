import React,{useState} from "react";
import './todo-list-item.css'

const TodoListItem =({label, important}) => {
    
    const [done, setDone] = useState(false)

    const style = {
        color: important? 'tomato' : 'black',
        fontWeight: important? 'bold' : 'normal'
    }

    

    const onLabelClick = () => {
        console.log(`${label} was clicked`)
        setDone(!done)
    }

    let classNames = 'todo-list-item'
    if(done){
        classNames = classNames + ' done'
    }

    return <span className={classNames} >
                <span className="todo-list-item-label"
            style={style}
            onClick={onLabelClick}>
        {label}
        </span>
    </span>
}

export default TodoListItem