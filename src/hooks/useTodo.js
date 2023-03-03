import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

export const useTodo = () => {
    
    const init=()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos,dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {

    localStorage.setItem('todos',JSON.stringify(todos) || [])

    }, [todos])

    const handleTodo = (todo) =>{
        const action ={
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }
    
    const handleDelete = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    
    const handleToggle = (id) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const pendingTodos = todos.filter(todo=> !todo.done).length

    const todosCount = todos.length

    return{
        init,
        todos,
        handleDelete,
        handleTodo,
        handleToggle,
        pendingTodos,
        todosCount,
    }
}


