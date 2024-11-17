import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from '../utils/api';
import { useAuth } from '../context/AuthContext';

const GoogleAuth = () => {
  const { login } = useAuth();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      // Send token to the backend for validation
      const response = await axios.post('/api/auth/google', { token });

      // Save the returned token and mark user as authenticated
      login(response.data.token);
    } catch (error) {
      console.error('Google Login Error:', error.response?.data || error.message);
      alert('Failed to login. Please try again.');
    }
  };

  const handleLoginFailure = () => {
    alert('Google login failed. Please try again.');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to CRM Dashboard
        </h1>
        <p className="mb-6 text-gray-600 text-lg">
          Sign in with Google to access the dashboard and manage your data.
        </p>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          size="large"
        />
      </div>
    </div>
  );
};

export default GoogleAuth;
