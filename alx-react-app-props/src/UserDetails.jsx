import React, { useContext } from 'react'; // Import useContext
import UserContext from './UserContext'; // Import the context

function UserDetails() {
  // Consume the context to get userData directly
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;