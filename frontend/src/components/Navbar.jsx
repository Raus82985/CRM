import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for active link detection
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation(); // Get the current location

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/">CRM</Link>
        </div>
        {/* Navigation Links */}
        <div className="space-x-8 text-white font-medium">
          <Link
            to="/"
            className={`transition ${
              isActive("/") ? "text-gray-800 font-bold bg-slate-100 rounded-full px-3 py-1" : "hover:text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/add-customer"
            className={`transition ${
              isActive("/add-customer") ? "text-gray-800 font-bold bg-slate-100 rounded-full px-3 py-1" : "hover:text-gray-300"
            }`}
          >
            Add Customer
          </Link>
          <Link
            to="/add-order"
            className={`transition ${
              isActive("/add-order") ? "text-gray-800 font-bold bg-slate-100 rounded-full px-3 py-1" : "hover:text-gray-300"
            }`}
          >
            Add Order
          </Link>
          <Link
            to="/audience-segment"
            className={`transition ${
              isActive("/audience-segment") ? "text-gray-800 font-bold bg-slate-100 rounded-full px-3 py-1" : "hover:text-gray-300"
            }`}
          >
            Audience Segment
          </Link>
          <Link
            to="/campaign"
            className={`transition ${
              isActive("/campaign") ? "text-gray-800 font-bold bg-slate-100 rounded-full px-3 py-1" : "hover:text-gray-300"
            }`}
          >
            Campaign
          </Link>
        </div>
        {/* Logout Button */}
        {isAuthenticated && (
          <div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
