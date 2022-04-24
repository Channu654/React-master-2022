import React, { useState } from 'react';

const Button = () => {
    const [text , setText] = useState("Hello channa");
  
    
    const handlechnage = ()=>{
        if(text==="Hello channa"){
            setText("Tell me channa");
        }
        else if(text==="Tell me channa"){
            setText("By channa");
        }
        else{
            setText("Hello channa")
        }
    }
  return(
      <>
        <h1>{text}</h1>
        <button type="button" className="btn btn-primary" onClick={handlechnage} >Change Greetings</button>

      </>);
};

export default Button;
