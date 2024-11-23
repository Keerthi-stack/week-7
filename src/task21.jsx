import React, { useRef } from 'react';

function Task21() {

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Focus Input Example</h1>

      <input
        ref={inputRef} 
        type="text"
        placeholder="Click the button to focus"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />


      <div>
        <button
          onClick={focusInput}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default Task21;