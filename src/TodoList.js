import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  console.log("todos", typeof todos)
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}