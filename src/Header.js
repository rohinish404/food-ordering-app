import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { AddContext } from "./contexts/AddContext";
import Cart from "./Cart";

export default function Header() {
  const { cart } = useContext(AddContext);

  const [showCart,setshowCart]=useState(false)
  
  const setHandler=()=>{
    setshowCart((prev)=>!prev)
  }

  return (
    <div>
      <div className="header">
      <h2 className="title">ReactMeals</h2>
      <div className="cart_btn">
        <ShoppingCartIcon />
        <button onClick={setHandler} className="your_cart">Your Cart</button>
        <h2>{cart.length}</h2>
      </div>
    </div>
    {showCart ? 
    <div>
      <Cart />
    </div> : <div></div>
    }
    </div>
  
  );
}
