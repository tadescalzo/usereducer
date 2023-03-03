import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description:''
    })

    const onFormSubmit=(event)=>{
        event.preventDefault()
        if(description.length>= 1){
            const newTodo={
                id: new Date().getTime(),
                done: false,
                description: description
            }
            onNewTodo(newTodo)
            onResetForm()
        }

        
    }
    

    return (
        <form onSubmit={onFormSubmit} >
            <input 
                className="form-control"
                name='description'
                onChange={onInputChange}
                placeholder="¿Que hay que hacer?"
                type="text" 
                value={description}
            />
            <button 
            formAction='submit'
            className='btn btn-primary mt-2'
            >Agregar</button>        
        </form>
    )
}
