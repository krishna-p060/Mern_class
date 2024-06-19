import React, { useEffect } from "react";
import { useState } from "react";



function Effects() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    function inc1() {
        setCount(count + 1);
      }
      function inc2() {
        setCount1(count1 + 1);
      }
      console.log("rendered");

      useEffect(() => {console.log("mounted")},[count]);
  return (
    <div>
      <button onClick={inc1}>inc1</button>
      <p>{count}</p>
      <button onClick={inc2}>inc2</button>
      <p>{count1}</p>
    </div>
  );
}

export default Effects;