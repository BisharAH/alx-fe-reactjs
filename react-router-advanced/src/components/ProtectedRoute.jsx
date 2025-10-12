// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust path if needed

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect them to the /login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child route content
  return <Outlet />;
};

export default ProtectedRoute;