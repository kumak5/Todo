import React from 'react';
import TodoListItem from '../todo-list-item/Todo-list-item';
import './todo-list.css'

const TodoList = ({todos}) => {
    const elements = todos.map((item)=>{
        return(
            <li key={item.id} className='list-group-item'>
                <TodoListItem {...item} />
            </li>
        )
    })
    
    return (
        <ul className='list-group todo-list'>
           {elements}
        </ul>


        // <ul>
        //     <li><TodoListItem label="Drink Coffee" /></li>
        //     <li><TodoListItem 
        //     label="Build React App"
        //     important /></li>
        // </ul>
    )
}

export default TodoList