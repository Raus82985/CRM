import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://crm-seven-psi.vercel.app/', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
