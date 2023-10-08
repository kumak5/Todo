import React, { useContext } from "react";
import { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./App.css";


const MyContext = React.createContext();

const App = () => {

  const initialTodoData = [
    { label: 'Drind Coffe', important: true, id: 1 },
    { label: 'Make Awesome App', important: false, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ]
  const [todoData, setTodoData] = useState(initialTodoData)
  const [inputTodo, setInputTodo] = useState('')

  const onItemAdded = () => {
    console.log(inputTodo);
    const newTodoData = [
      ...todoData,
      { label: inputTodo, important: false, id: todoData.length + 1 },
   ]
    setTodoData(newTodoData)
  }

  const onDeleted = (id) => {
    const newTodoData = todoData.filter((el) => el.id !== id)
    setTodoData(newTodoData)
  }

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}
        onDeleted={onDeleted} />
      <input
        type="text"
        className="form-control"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}></input>

      <button type='button'
        className="btn btn-outline-secondary btn-sm float-right"
        onClick={onItemAdded}>
        Add Item
      </button>
    </div>
  );
}

export default App;