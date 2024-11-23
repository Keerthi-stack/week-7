import React, { useState } from 'react';

function Toggler() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  const themeStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={themeStyles}>
      <h1>Dynamic Theme Toggler</h1>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: isDarkTheme ? '#fff' : '#333',
          color: isDarkTheme ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
}

export default Toggler;