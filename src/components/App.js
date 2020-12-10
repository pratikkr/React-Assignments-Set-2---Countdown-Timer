import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [remainingTime, setRemainingTime] = useState(0);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      let timeremaining = event.target.value;
      if (isNaN(timeremaining) || timeremaining < 0) {
        timeremaining = 0;
      }
      setRemainingTime(Math.floor(timeremaining));
    }
  };

  document.addEventListener("keydown", (event) => handleKeyDown(event));

  useEffect(() => {
    if (remainingTime > 0) {
      const timerID = setInterval(() => {
        let timeremaining = remainingTime - 1;
        setRemainingTime(timeremaining);
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [remainingTime]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={(event) => handleKeyDown(event)} />
          sec.
        </h1>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
