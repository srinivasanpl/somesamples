import React from 'react';
import { Actions } from './Justusereducer';

function Test({todo, dispatch}) {
    return (
        <div>
            {todo.name}
            <button onClick={() => dispatch({type:Actions.Delete_Todo,payload:{id:todo.id}})}>Delete</button>
        </div>
    );
}

export default Test;