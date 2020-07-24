import React, { useState, useEffect } from 'react'
import { Context } from './context'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(()=> {
    const raw = localStorage.getItem("todos") || '[]'
    setTodos(JSON.parse(raw))
  }, [])

  useEffect( ()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = e => {
    if (e.key === 'Enter') {
      setTodos([
          ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('')
    }
  }

  const removeTodo = id => {
    setTodos(todos.filter(item => {
      return item.id !== id
    }))
  }

  const toggleTodo = id => {
    setTodos(todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  return (
      <Context.Provider value={{
        removeTodo,
        toggleTodo
      }}>
        <div className="container">
          <h1>Todo app</h1>

          <div className="input-field">
            <input
                type="text"
                value={ todoTitle }
                onChange={ e => setTodoTitle(e.target.value) }
                onKeyPress={addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={ todos } />
        </div>
      </Context.Provider>
  );
}