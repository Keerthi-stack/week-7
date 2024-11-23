import React, { useState } from 'react';

function HoverBox() {

  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}  
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        transition: 'background-color 0.3s ease', 
      }}
    >
      <p>Hover over me!</p>
    </div>
  );
}

export default HoverBox;