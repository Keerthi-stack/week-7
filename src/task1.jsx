import React from 'react';

const GroceryList = () => {
  const groceries = ['Apples', 'Bananas', 'Carrots', 'Bread', 'Milk'];

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
       
        {groceries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
