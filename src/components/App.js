import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  
  const[remainingTime, setRemainingTime] =useState(0);

  const handleKeyDown = (event) => {
    if(event.keyCode ===13){
      let timeremainnig = event.target.value;
      if(isNaN(timeremainnig) || timeremainnig <0){
        timeremainnig =0;
      }
      setRemainingTime(Math.floor(timeremainnig));
    }
  };

  document.addEventListener("keydown",(event)=> handleKeyDown(event));

  useEffect(() => {
    if (remainingTime > 0){
      const timerID =setInterval(() => {
        let timeremainnig =remainingTime -1;
        setRemainingTime(timeremainnig);
      },1000);
      return () => clearInterval(timerID);
    }
  }, [remainingTime]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(event) => handleKeyDown(event)} /> sec.
        </h1>
      </div>
      <div id="current-time">{remaining time}</div>
    </div>
  )
}


export default App;
