import React, { useState } from 'react';

function RegistrationForm() {
  // Use a single state object to hold all form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // A single handler to update the state based on input name
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser refresh

    // Basic validation: check if any field is empty
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate an API call
    console.log('Submitting data:', formData);
    alert(`Registration successful for ${formData.username}!`);

    // Optionally, reset the form
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component Form</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username} // The value is controlled by React state
          onChange={handleChange}     // State is updated on every change
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;