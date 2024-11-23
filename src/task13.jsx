import React, { useState } from 'react';

function Task13() {
  
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Real-Time Input Example</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..." 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Task13;