import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo"



export const TodoApp = () => {
    
    const { handleDelete,
            handleTodo,
            handleToggle,
            todosCount,
            pendingTodos,
            todos} = useTodo()

    return (
        <>
        {console.log(todosCount,pendingTodos)}
        <h1>Todo App: {todosCount} <small>pendientes: {pendingTodos}</small> </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                todos = {todos} 
                onDeleteTodo = {handleDelete} 
                onToggleTodo = {handleToggle}
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd 
                onNewTodo = {handleTodo} 
                />
            </div>
        </div>
        
        </>
    )
}
