import React from 'react';

const Task11= () => {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Task11;