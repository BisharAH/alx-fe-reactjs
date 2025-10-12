// src/components/Profile.jsx
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the main profile page. Below you can see nested routes.</p>
      <nav>
        <Link to="details" style={{ marginRight: '10px' }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      {/* The nested component will be rendered here */}
      <Outlet />
    </div>
  );
};

export default Profile;