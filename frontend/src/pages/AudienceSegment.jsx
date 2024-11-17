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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Audience Segment</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <label className="block mb-2 font-bold">Segment Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <label className="block mb-2 font-bold">Conditions (JSON Format)</label>
        <textarea
          name="conditions"
          value={form.conditions}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder='e.g., {"age": {"$gte": 25}}'
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Segment
        </button>
      </form>
      <SegmentList segments={segments} />
    </div>
  );
};

export default AudienceSegment;
