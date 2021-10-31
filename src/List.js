import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function List({getItems}) {
    const[items, setItem] = useState([]);

    useEffect (()=>{
        setItem(getItems());
        console.log(getItems(3));
    },[getItems])
  //  setItem(getItems());
    return (
        <div>
           {items.map(item=><div key={item.id}>{item.name}</div> )}
        </div>
    );
}

export default List;