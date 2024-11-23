import React, { useState } from 'react';

const Task8 = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginLogout = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <button onClick={toggleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Task8;