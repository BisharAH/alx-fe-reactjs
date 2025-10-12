// src/components/Login.jsx
import { useNavigate } from 'react-router-dom';
import auth from '../auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(() => {
      navigate('/profile'); // Redirect to profile after login
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>You must log in to view the profile page.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;