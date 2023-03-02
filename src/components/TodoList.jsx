import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = ({todos =[] }) => {
  return (
    <ul className="list-group">
    {
      todos.map(({id, description, done}) =>(
        <TodoCard key={id} description={description} done={done} />
        ))
    }
    </ul>
  )
}
