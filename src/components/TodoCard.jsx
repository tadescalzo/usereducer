import React from 'react'

export const TodoCard = ({description, done}) => {
  return (
    <li  className="list-group-item d-flex justify-content-between">
            <span className="align-self-center"> {description} </span>
            <button className="btn btn-danger">Borrar</button>
    </li>
  )
}
