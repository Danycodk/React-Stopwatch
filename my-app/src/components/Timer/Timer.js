import './timer.css';
import React, { useState } from 'react';
function Timer() {
  const [count, setCount] = useState(0);

    const handleClick = () => {
      setInterval(() => {
       setCount((count) => count + 1);
      }, 1000);
     };

   // return () => {
    //  clearInterval(intervalId); 
  //  };
  //}, []); 
  function habdlerStop(){
    clearInterval(handleClick)
  }
 // onClick={handleClick}
    return (
      <>
      
      <section>
       
        <div class="hours">{count}</div>
        <div class="minutes"></div>
        <div class="secondes"></div>
      </section>
      <button  onClick={handleClick}>Start event</button><br/>
      <button  onClick={habdlerStop}>Clear event</button>
      </>
    );
  }
  
  export default Timer;