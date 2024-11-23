import React, { useState, useRef } from 'react';

const Task23 = () => {

  const [time, setTime] = useState(0);

  const timerRef = useRef(null);

  
  const startTimer = () => {

    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };


  const stopTimer = () => {

    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null; 
    }
  };

  const resetTimer = () => {
  
    stopTimer();
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <p>{time} seconds</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Task23;