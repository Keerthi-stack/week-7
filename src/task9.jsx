import React, { useState } from 'react';

const Task9 = () => {

  const [error, setError] = useState(false);


  const toggleError = () => {
    setError(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Form Submission</h1>
      <button onClick={toggleError}>
        {error ? 'Clear Error' : 'Trigger Error'}
      </button>

      {error && <p style={{ color: 'red' }}>An error has occurred. Please try again.</p>}
    </div>
  );
};

export default Task9;