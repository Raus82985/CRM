import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import CampaignList from '../components/CampaignList';

const Campaign = () => {
  const [form, setForm] = useState({ segment_id: '', name: '', message: '' });
  const [campaigns, setCampaigns] = useState([]);
  const [stats, setStats] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/campaign', form);
      alert('Campaign created successfully!');
      setForm({ segment_id: '', name: '', message: '' });
      fetchCampaigns(); // Refresh the campaign list
    } catch (err) {
      console.error('Error creating campaign:', err);
    }
  };

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('/api/campaign/active');
      setCampaigns(response.data);
    } catch (err) {
      console.error('Error fetching campaigns:', err);
    }
  };

  const sendMessages = async (campaignId) => {
    try {
      await axios.post('/api/campaign/send_message', { campaign_id: campaignId });
      alert('Messages sent successfully!');
    } catch (err) {
      alert('Failed to send messages. Please try again.');
      console.error('Error sending messages:', err);
    }
  };

  const viewStats = async (campaignId) => {
    try {
      const res = await axios.get(`/api/campaign/stats/${campaignId}`);
      setStats({ campaign_id: campaignId, ...res.data });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Campaigns</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg mb-8 border"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Segment ID</label>
          <input
            type="text"
            name="segment_id"
            value={form.segment_id}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter segment ID"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Campaign Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter campaign name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter campaign message"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create Campaign
        </button>
      </form>
      <CampaignList
        campaigns={campaigns}
        onSend={sendMessages}
        onViewStats={viewStats}
        stats={stats}
      />
    </div>
  );
};

export default Campaign;
