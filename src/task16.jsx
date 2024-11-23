import React, { useState } from 'react';

function Task16() {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };


  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Application</h1>
      
   
      <p style={{ fontSize: '30px' }}>Count: {count}</p>

      <div>
        <button
          onClick={increment}
          style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
        >
          Increment
        </button>
        
        <button
          onClick={decrement}
          style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Task16;
