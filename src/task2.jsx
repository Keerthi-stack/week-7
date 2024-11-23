import React from 'react';

const UserCards = () => {
  
  const users = [
    { id: 1, name: 'John Doe', profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Alice Johnson', profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'Bob Brown', profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];

  return (
    <div className="user-cards-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
     
      {users.map((user) => (
        <div key={user.id} style={{ margin: '10px', width: '200px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <img src={user.profilePicture} alt={user.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
