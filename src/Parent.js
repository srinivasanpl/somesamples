import React, {useState} from 'react';
import Child from './Child';

function Parent(props) {
    const[word, setWord] = useState("Parent")
    return (
        <div  style={{float:'center',height:'50%',width:'50%',backgroundColor:'green'}}>
            {word}
            <Child ChangeWords={word =>setWord(word)}/>
        </div>
    );
}

export default Parent;