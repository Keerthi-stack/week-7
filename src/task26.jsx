import React from 'react';
import myImage from './assets/my-image.jpg'; 

const Task26 = () => {
  return (
    <div>
      <h1>Displaying an Imported Image</h1>
      <img 
        src={myImage} 
        alt="My Image from assets" 
        style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
      />
    </div>
  );
};

export default Task26;