import { useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { todoReducer } from "./hooks/todoReducer"

const initialState = [{
    id: new Date().getTime(),
    description:'Carrear malos',    
    done:false
},
{
    id: new Date().getTime() * 3,
    description:'Perder partidas',
    done:false
}
]

const handleTodo = (todo) =>{
console.log(todo)
}


export const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
    <h1>Todo App: 10 <small>pendientes: 2</small> </h1>
    <hr />
    <div className="row">
        <div className="col-7">
            <TodoList todos={todos} />
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleTodo} />
        </div>
    </div>
    
    </>
  )
}
