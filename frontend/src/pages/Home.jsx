import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const Home = () => {
  const [stats, setStats] = useState({ segments: 0, campaigns: 0, customers: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [segments, campaigns, customers] = await Promise.all([
          axios.get('/api/segment'),          // Fetch all segments
          axios.get('/api/campaign/active'), // Fetch all active campaigns
          axios.get('/api/customer'),        // Fetch all customers
        ]);

        setStats({
          segments: segments.data.length,
          campaigns: campaigns.data.length,
          customers: customers.data.data.length,
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-6 h-screen">
      <h1 className="text-3xl font-bold mb-6">CRM Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Audience Segments */}
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Audience Segments</h2>
          <p className="text-4xl">{stats.segments}</p>
        </div>
        
        {/* Active Campaigns */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Active Campaigns</h2>
          <p className="text-4xl">{stats.campaigns}</p>
        </div>
        
        {/* Total Customers */}
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Total Customers</h2>
          <p className="text-4xl">{stats.customers}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
