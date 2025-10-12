// src/App.jsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import auth from './auth';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/');
    });
  };

  return (
    <>
      <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="/blog" style={{ marginRight: '10px' }}>Blog</Link>
        {auth.isAuthenticated && (
          <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          {/* You can add more protected routes here */}
        </Route>
      </Routes>
    </>
  );
}

export default App;