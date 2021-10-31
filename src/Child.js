import React from 'react';

function Child(props) {
    return (
        <div style={{height:"20%",width:"100%",backgroundColor:"red",float:"center"}}>
            <button type="button" name="Childbutton" text="childButton" value="Childbutton"
            onClick={() =>{props.ChangeWords('Test')}}
            >ChangeText</button>
        </div>
    );
}

export default Child;