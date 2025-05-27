import React from "react";
import { useState } from "react";


function Counter(){
   const [count, setCount] = useState(0);

   const onIncrement = ()=> setCount(count+1);
   const onDecrement = ()=> setCount(Math.max(0, count-1));
   const onReset = ()=> setCount(0);

   return <div>
    <h1>Counter: {count}</h1>

    <button onClick={onIncrement}> Increment </button>
    <button onClick={onDecrement}> Decrement </button>
    <button onClick={onReset}> Reset </button>

   </div>
}

export default Counter;
