import React, { useState } from 'react';
import axios from '../utils/api';

const AddCustomer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    total_spending: 0,
    visits: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/customer', form);
      alert('Customer added successfully!');
      setForm({ name: '', email: '', phone: '', total_spending: 0, visits: 0 });
    } catch (err) {
      console.error('Error adding customer:', err);
      alert('Failed to add customer. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Add New Customer
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-md border"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer's name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer's email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer's phone number"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Total Spending
          </label>
          <input
            type="number"
            name="total_spending"
            value={form.total_spending}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter total spending"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Visits
          </label>
          <input
            type="number"
            name="visits"
            value={form.visits}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter number of visits"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
