import React, { useState, useEffect } from "react";
import axios from "../utils/api";
import CustomerList from "../components/CustomerList";

const AddOrder = () => {
  const [form, setForm] = useState({ customer_id: "", amount: "" });
  const [customers, setCustomers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the form object directly
      await axios.post("/api/order", form);
      alert("Order created successfully!");
      setForm({ customer_id: "", amount: "" });
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/api/customer");
        setCustomers(response.data.data);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Add New Order
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-md border"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Customer
          </label>
          <select
            name="customer_id"
            value={form.customer_id}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select a customer
            </option>
            {customers.map((customer) => (
              <option key={customer._id} value={customer._id}>
                {customer.name} (ID: {customer._id})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Order Amount
          </label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter order amount"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Order
        </button>
      </form>
      <div className="mt-8">
        <CustomerList customers={customers} />
      </div>
    </div>
  );
};

export default AddOrder;
