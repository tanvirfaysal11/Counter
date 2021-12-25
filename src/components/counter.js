import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    let incrementCounter = () => setCount(count + 1);
    let decrementCounter = () => {

        let isValid = validate(count);
        if(isValid === true){
            setCount(count - 1);
        }else{
            setCount(0);
        }
        
    }
    
    const validate = (inputValue) =>{
        let result = false;
        if(inputValue <= 0){
            //setCount(0)
            result = false
        }else{
            result = true
        }
        return result;
    }

    // if(count<=0) {
    //     decrementCounter = () => setCount(1);
    // }

    return (
      <div className="counter">
         <h1>Counter</h1>
         <button className="sub" onClick={decrementCounter} >-</button>
         <input className="input" type="text" value={count} />
         <button className="add" onClick={incrementCounter}>+</button>
      </div>
    );
  }


  export default Counter;