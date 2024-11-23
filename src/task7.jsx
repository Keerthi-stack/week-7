import React from 'react';

const Task7 = () => {

  const currentHour = new Date().getHours();


  let greeting;
  if (currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Task7;