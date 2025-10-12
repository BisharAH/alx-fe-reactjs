// src/App.jsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
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

// A helper component to use hooks like useNavigate
function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/');
    });
  };

  return (
    <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1-x solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
      <Link to="/blog" style={{ marginRight: '10px' }}>Blog</Link>
      {auth.isAuthenticated && (
        <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
      )}
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation component now needs to be inside BrowserRouter to use hooks */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;