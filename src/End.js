import React, { useState } from 'react'
import { useContext } from "react";
import { AddContext } from "./contexts/AddContext";
import "./End.css";




export default function End({ name, desc, price,id }) {
  
  let sameId;
  let sametf;
  const { cart, setCart} = useContext(AddContext);
  const [add,setAdd] = useState(1)
  const addHandler=()=>{
    setAdd((prev)=>prev+=1)

    
}
const subtHandler=()=>{
    setAdd((prev)=>(
        add!=1?prev-=1:prev))
}
  const clickHandler = function () {
   

    sameId = cart.find((x)=>id==x.id)

    sametf=sameId?true : false;
    console.log(sametf);
    
    if(!sametf){
      setCart((prev)=>{
        return ([...prev,{name:name,price:price,id:id}])
      })
    }
  
}

  return (
    <div className="end">
      <div className="left">
        <h2>{name}</h2>
        <p>{desc}</p>
        <h1>{price}</h1>
      </div>
      <div className="right">
        <div className="amt">
          <h4>Amount:</h4>

        </div>
        <button className='negative' onClick={subtHandler}>-</button>
                <span>{add}</span>
                <button className='negative' onClick={addHandler}>+</button>
        <button onClick={clickHandler} className="add_btn">
          +ADD
        </button>
      </div>
    </div>
  );
}


