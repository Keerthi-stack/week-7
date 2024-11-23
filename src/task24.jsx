import React, { useRef } from 'react';

const Task24 = () => {
 
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
   
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Type something..." 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task24;