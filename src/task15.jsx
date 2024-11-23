import React, { useState } from 'react';

function Buttons() {
  
  const [actionMessage, setActionMessage] = useState('');


  const handleAdd = () => {
    setActionMessage('Add button clicked');
  };

  const handleEdit = () => {
    setActionMessage('Edit button clicked');
  };

  const handleDelete = () => {
    setActionMessage('Delete button clicked');
  };

  return (
    <div>
      <h1>Dynamic Button Actions</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <p>{actionMessage}</p>
    </div>
  );
}

export default Buttons;