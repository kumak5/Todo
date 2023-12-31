import React from "react";
import { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./App.css";


const App = () => {

  const initialTodoData = [
    { label: 'Drind Coffe', done: false, important: false, id: 1 },
    { label: 'Make Awesome App', done: false, important: false, id: 2 },
    { label: 'Have a lunch', done: false, important: false, id: 3 },
  ]


  const [todoData, setTodoData] = useState(initialTodoData)
  const [lastId, setLastId] = useState(3)
  const [inputTodo, setInputTodo] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [itemStatusFilterId, setItemStatusFilterId] = useState(0)

  const onItemAdded = () => {
    setLastId(lastId + 1)
    console.log(todoData.label);
    setTodoData([
      ...todoData,
      { label: inputTodo, id: lastId + 1 }
    ])
    setInputTodo('')
  }

  const onDeleted = (id) => {
    const newTodoData = todoData.filter((el) => el.id !== id)
    setTodoData(newTodoData)
  }

  const onLabelClick = (id) => {
    const newTododata = todoData.map((el) => {
      if (el.id === id) { el.done = !el.done }
      return el
    })
    setTodoData(newTododata)
  }

  const onToggleImportant = (id) => {
    const newTododata = todoData.map((el) => {
      if (el.id === id) { el.important = !el.important }
      return el
    })
    setTodoData(newTododata)
  }

  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.filter((el) => !el.done).length



  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />

      <div className="top-panel d-flex">
        <SearchPanel setFilterInput={setFilterInput} />
        <ItemStatusFilter 
        itemStatusFilterId={itemStatusFilterId}
        setItemStatusFilterId={setItemStatusFilterId}/>
      </div>

      <input
        type="text"
        className="form-control"
        value={inputTodo}
        placeholder="What needs to be done?"
        onChange={(e) => setInputTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onItemAdded()
          }
        }}
      />

      <button
        type='button'
        className="btn btn-outline-secondary btn-sm float-right"
        onClick={onItemAdded}>
        Add Item
      </button>
      <TodoList
      itemStatusFilterId={itemStatusFilterId}
        filterInput={filterInput}
        todos={todoData}
        onDeleted={onDeleted}
        onToggleImportant={onToggleImportant}
        onLabelClick={onLabelClick} />
    </div>
  );
}

export default App;