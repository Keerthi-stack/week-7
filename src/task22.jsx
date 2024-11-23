import React, { useState, useRef, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const prevCountRef = useRef();


  useEffect(() => {
    prevCountRef.current = count;
  }, [count]); 


  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with Previous Value</h1>
      
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      
      <button
        onClick={increment}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;