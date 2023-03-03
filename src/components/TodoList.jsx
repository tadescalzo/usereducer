import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = ({todos =[], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
    {
      todos.map(({id, description, done}) =>(
        <TodoCard 
          key={id} 
          description={description} 
          id={id} 
          done={done}
          onDeleteTodo = {onDeleteTodo} 
          onToggleTodo = {onToggleTodo}
        />
        ))
    }
    </ul>
  )
}
