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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Customer</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Total Spending</label>
          <input
            type="number"
            name="total_spending"
            value={form.total_spending}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Visits</label>
          <input
            type="number"
            name="visits"
            value={form.visits}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
