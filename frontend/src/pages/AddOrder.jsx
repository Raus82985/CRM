import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import CustomerList from '../components/CustomerList';

const AddOrder = () => {
  const [form, setForm] = useState({ customer_id: '', amount: '' });
  const [customers, setCustomers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/order', form);
      alert('Order created successfully!');
      setForm({ customer_id: '', amount: '' });
    } catch (err) {
      console.error('Error creating order:', err);
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customer'); 
        setCustomers(response.data.data);
      } catch (err) {
        console.error('Error fetching customers:', err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Order</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <label className="block mb-2 font-bold">Customer ID</label>
        <input
          type="text"
          name="customer_id"
          value={form.customer_id}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <label className="block mb-2 font-bold">Order Amount</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Order
        </button>
      </form>
      <CustomerList customers={customers} />
    </div>
  );
};

export default AddOrder;
