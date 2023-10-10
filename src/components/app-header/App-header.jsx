import React from 'react';
import './App-header.css'

const AppHeader = ({toDo, done}) => {
    return (
        <>
            <h1>Me Todo List!</h1>
            <p> {toDo} more to do,  {done} done</p>
        </>
    )
}

export default AppHeader