import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Restore authentication state from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/");
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token); // Save token
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the home/dashboard page
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false);
    navigate("/"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
