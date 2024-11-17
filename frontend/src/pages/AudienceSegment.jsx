import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import SegmentList from '../components/SegmentList';

const AudienceSegment = () => {
  const [form, setForm] = useState({ name: '', conditions: '' });
  const [segments, setSegments] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedConditions = JSON.parse(form.conditions);
      await axios.post('/api/segment', { ...form, conditions: parsedConditions });
      alert('Audience Segment created successfully!');
      setForm({ name: '', conditions: '' });
      fetchSegments(); // Refresh the segment list
    } catch (err) {
      console.error('Error creating segment:', err);
      alert('Please enter valid JSON conditions.');
    }
  };

  const fetchSegments = async () => {
    try {
      const response = await axios.get('/api/segment');
      setSegments(response.data);
    } catch (err) {
      console.error('Error fetching segments:', err);
    }
  };

  useEffect(() => {
    fetchSegments();
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Audience Segments</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg mb-8 border"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Segment Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter segment name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Conditions (JSON Format)
          </label>
          <textarea
            name="conditions"
            value={form.conditions}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder='e.g., {"age": {"$gte": 25}}'
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create Segment
        </button>
      </form>
      <SegmentList segments={segments} />
    </div>
  );
};

export default AudienceSegment;
