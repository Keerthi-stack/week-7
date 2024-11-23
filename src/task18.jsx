import React, { useState } from 'react';

function Task18() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Input State Example</h1>


      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />


      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Task18;