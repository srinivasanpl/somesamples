import React, { useReducer, useState } from 'react';
import Test from './Test';
import todaos from './todaos';

export const Actions ={
    ADD_Todo: 'ADDTodo',
    Toggle_TOdo: 'ToggleTodo',
    Delete_Todo : 'DeletTodo'
}

function srinivasan(todos,action){
    switch(action.type){
    case Actions.ADD_Todo:
        return [...todos, newTodo(action.payload.name)]
    case Actions.Delete_Todo:
        return todos.filter(todo => todo.id !== action.payload.id);
    default:
     return todos;
    }
}

function newTodo(name)
{
    return {id: Date.now(), name: name, complete: false}
}

function Justusereducer(props) {
    const [todos,dispatch] = useReducer(srinivasan,[])
    const [name,setname] = useState('');


    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:Actions.ADD_Todo,payload:{name:name}})
        setname('');
    }
    console.log(todos);

    return (
        <>
       <form onSubmit={handleSubmit}>
         <input type="text" value={name} onChange={e=>setname(e.target.value)}  />
       </form>
        {todos.map(item => {
        return <Test key={item.id} todo={item} dispatch={dispatch} />
            })}
       </>
    );
}
export default Justusereducer;