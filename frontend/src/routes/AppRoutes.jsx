import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
// import GoogleAuth from '../pages/GoogleAuth';
import AddCustomer from '../pages/AddCustomer';
import AddOrder from '../pages/AddOrder';
import AudienceSegment from '../pages/AudienceSegment';
import Campaign from '../pages/Campaign';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : <Navigate to="/google-auth" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/google-auth" element={<GoogleAuth />} /> */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-customer"
        element={
          <ProtectedRoute>
            <AddCustomer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-order"
        element={
          <ProtectedRoute>
            <AddOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/audience-segment"
        element={
          <ProtectedRoute>
            <AudienceSegment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/campaign"
        element={
          <ProtectedRoute>
            <Campaign />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
