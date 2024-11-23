import React, { useState } from 'react';

function Toggle() {
  
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toggle Visibility Example</h1>


      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px' }}>
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            style={{ width: '300px', height: 'auto' }}
          />
          
        </div>
      )}
    </div>
  );
}

export default Toggle;