import React from 'react';

const Task5 = () => {

  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Color List</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index} style={{ color: color.toLowerCase(), fontSize: '18px' }}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task5;