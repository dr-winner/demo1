import React from "react";
import { useState } from "react";

function Count(){

  const [count, setCount] = useState(0);
  function Increase(){
    setCount(count + 1)
  }
  function Decrease(){
    setCount(count - 1)
  }
  return <div>
    <h1>The count vaue is: {count}</h1>
    <button onClick={Increase}>+</button>
    <button onClick={Decrease}>-</button>
  </div>;
};

export default Count;
