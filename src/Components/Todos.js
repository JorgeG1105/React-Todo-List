import React from 'react'

function Todos(props){
    let listTodos =  props.todos.length ? (
    props.todos.map(todo =>{
        return(
            <div className='todos collection-item' key={todo.id}>
                <h5 className='todo-content'>{todo.content}</h5>
                <i  className='material-icons red darken-1 trash-btn' onClick={() => {props.deleteTodo(todo.id)}}>clear</i>
            </div>
        )
    }) 
    ) : (
    <div className='todos collection-item center'><h5 className='todo-content'>Your todo list is empty, Why not add some below?</h5></div>
    )

    return(
        <div className='collection'>
            {listTodos}
        </div>
    )
}

export default Todos