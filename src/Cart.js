import React, { useState } from 'react'
import { useContext } from "react";
import { AddContext } from "./contexts/AddContext";
import "./Cart.css"
function Cart() {
    const { cart } = useContext(AddContext);

  return (
   
      <div className="cart_full">
        {cart &&
          cart.map(function (solo,index) {
            const { name, price } = solo;
            return (
              <div key={index} className="cart">
                <h1>{name}</h1>
                <h2>{price}</h2>
                
              </div>
            );
          })}
      </div>
  
  )
}

export default Cart;
