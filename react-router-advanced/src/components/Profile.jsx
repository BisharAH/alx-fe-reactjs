// src/components/Profile.jsx
import { Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the main profile page. Below you can see nested routes.</p>
      <nav>
        {/* These links still work the same way */}
        <Link to="details" style={{ marginRight: '10px' }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />

      {/* Replace <Outlet /> with the Routes for the nested components */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;