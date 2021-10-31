import React from 'react';

function todaos({todo}) {
    return (
        <div>
            {todo.name}
            <button>Save</button>
        </div>
    );
}

export default todaos;