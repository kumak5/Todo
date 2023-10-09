import React from "react";
import { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./App.css";


const MyContext = React.createContext();

const App = () => {

  const initialTodoData = [
    { label: 'Drind Coffe', done: false, important: false, id: 1 },
    { label: 'Make Awesome App', done: false, important: false, id: 2 },
    { label: 'Have a lunch', done: false, important: false, id: 3 },
  ]


  const [todoData, setTodoData] = useState(initialTodoData)
  const [inputTodo, setInputTodo] = useState('')

  const onItemAdded = () => {
    setTodoData([
      ...todoData,
      { label: inputTodo, id: todoData.length + 1 },
    ])
  }

  const onDeleted = (id) => {
    const newTodoData = todoData.filter((el) => el.id !== id)
    setTodoData(newTodoData)
  }

  const onLabelClick = (id) => {
    const newTododata = todoData.map((el) => {
      if (el.id === id) { el.done = !el.done}
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

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <input
        type="text"
        className="form-control"
        value={inputTodo}
        placeholder="What needs to be done?"
        onChange={(e) => setInputTodo(e.target.value)} />

      <button type='button'
        className="btn btn-outline-secondary btn-sm float-right"
        onClick={onItemAdded}>
        Add Item
      </button>
      <TodoList todos={todoData}
        onDeleted={onDeleted}
        onToggleImportant={onToggleImportant}
        onLabelClick={onLabelClick}
      />
    </div>
  );
}

export default App;