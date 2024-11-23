import React, { useRef } from 'react';

const Task25 = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {

    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Go to Section</button>


      <div style={{ height: '100vh' }}>
        <h1>Scroll to the Section</h1>
        <p>Scroll down to see the section.</p>
      </div>

   
      <div ref={sectionRef} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>This is the target section</h2>
        <p>You have successfully scrolled here!</p>
      </div>
    </div>
  );
};

export default Task25;