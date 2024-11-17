// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import axios from '../utils/api';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const GoogleAuth = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLoginSuccess = async (credentialResponse) => {
//     try {
//       const token = credentialResponse.credential;

//       // Send token to the backend for validation
//       const response = await axios.post('/api/auth/google', { token });
//       console.log('Login successful:', response.data);

//       // Mark user as authenticated
//       login();

//       // Redirect to the home page
//       navigate('/');
//     } catch (error) {
//       console.error('Google Login Error:', error.response?.data || error.message);
//       alert('Failed to login. Please try again.');
//     }
//   };

//   const handleLoginFailure = () => {
//     alert('Google login failed. Please try again.');
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-3xl font-bold mb-6">Welcome to CRM Dashboard</h1>
//         <p className="mb-4 text-gray-600">Sign in with Google to access the dashboard.</p>
//         <GoogleLogin
//           onSuccess={handleLoginSuccess}
//           onError={handleLoginFailure}
//         />
//       </div>
//     </div>
//   );
// };

// export default GoogleAuth;
