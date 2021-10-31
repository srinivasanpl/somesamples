import React,{ useEffect, useState,useCallback, useMemo } from 'react';
import List from './List';

export default function JustTestNew(props) {
    const[dark,setDark] = useState(false)
    const[number, setNumber] = useState(1);
    const setTheme ={
        backgroundColor : dark? 'black' : 'white'
    }
    const doubleNumbers =slowFunction(number);
   /* const doubleNumbers =useMemo(() =>{
        return slowFunction(number);
    },[number])
    */
  
    return (

       <>
        <input type='number' value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
       <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
       <div  style={setTheme}> number:{doubleNumbers}</div>
       </>
    );
}
function slowFunction (num){
    for(let i=0;i<100;i++) {
    }
    return num * 2;
    }