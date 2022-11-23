
import './App.css';
import Header from './Header';
import Middle from './Middle';
import recipes from "./data.js"
import End from './End.js';
import {AddContext} from "./contexts/AddContext.js";
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([])
  const [num,setNum] = useState(0)

  
  return (
    <div className="App">
       <AddContext.Provider value={{cart,setCart,recipes:[{}]}}>
          <Header />
          <Middle />
          <div className='dishes'>
           
            {recipes.map(function(recipe,index){
               return <End key={index} name={recipe.name} id={recipe.id} desc={recipe.desc} price={recipe.price} num={recipe.num}/>
               
            })}
          </div>
       </AddContext.Provider>
    </div>
  );
}

export default App;
