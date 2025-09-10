import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext); // get values from context

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;

