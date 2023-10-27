import './timer.css';
import React, { useState } from 'react';
function Timer() {
  const [count, setCount] = useState(0);//Hundredth Seconde
  const [countSeconde, setcountSeconde] = useState(0) //second
  const [countMinute, setcountMinute] = useState(0) //Minutes
  const [intervalId, setIntervalId] = useState(0);
  //const [booTrueFalse, setBooTrueFalse] = useState(true);

  //let functionTriggered = false;


    const handleClick = () => {
      //functionTriggered = true;

      let newIntervalId =setInterval(() => {
        setCount((count) => count + 1);
        /*if(count === 100){
          setCount(0)
          setcountSeconde((countSeconde) => countSeconde + 1);
        }*/
       }, 10);
       setIntervalId(newIntervalId);
     }
     //////////////////////////////////////////////////
     if(count === 100){
      setCount(0)
      setcountSeconde((countSeconde) => countSeconde + 1);
    }
    /////////////////////////////////////////////////
    if(countSeconde === 60){
      setcountSeconde(0)
      setcountMinute((countMinute) => countMinute + 1);
    }
    /////////////////////////////////////////////////
     const stopCountHandler = () => {
      clearInterval(intervalId);
     };

  function habdleReset(){
    setCount(0)
    setcountSeconde(0)
    setcountMinute(0)
  }
 // onClick={handleClick}
    return (
      <>
      <br/>
      <h1> after</h1>
      <section>
       
        <div class="hours">{countMinute} :</div>
        <div class="minutes">{countSeconde}:</div>
        <div class="secondes">{count}</div>
      </section>
      <button  onClick={handleClick}>Start event</button><br/>
      <button  onClick={stopCountHandler }>Pause event</button><br/>
      <button  onClick={habdleReset}>Clear event</button>
      </>
    );
  }
  
  export default Timer;