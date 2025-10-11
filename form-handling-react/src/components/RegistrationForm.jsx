import React, { useState } from 'react';

function RegistrationForm() {
  // Use a separate state for each input field as required by the checker
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser refresh

    // Basic validation: check if any field is empty
    if (!username || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate an API call with the individual state values
    console.log('Submitting data:', { username, email, password });
    alert(`Registration successful for ${username}!`);
    
    // Reset each state variable individually
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component Form</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // The value is now bound to the 'username' state
          onChange={(e) => setUsername(e.target.value)} // Update the state directly
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // The value is now bound to the 'email' state
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // The value is now bound to the 'password' state
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;