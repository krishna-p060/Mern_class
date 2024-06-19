import React from 'react';
import { useRef, useState } from 'react';


function ProductCart({ title, price }) {
    let pRef = useRef(0);
    let uref = useRef(0);
    let iref = useRef(0);
    let [inputV, setInput] = useState('Class');
    // const products = [
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];
    function printTitle() {
        console.log(title);
        console.log(pRef.current.innerText);
    }

    function addText(e) {
        //uref.current.innerText = `output would arrive here:- ${iref.current.value}`;
        setInput(e.target.value);
    }
  return (
    <div className="product-cart">
        <p onClick={printTitle}>{title}</p>
        <p ref={pRef}>{price}</p>
        <input onChange={addText} type="text" ref={iref} value={inputV}/>
        <p ref={uref}>output would arrive here:- {inputV}</p>
       
      
    </div>
  );
}

export default ProductCart;