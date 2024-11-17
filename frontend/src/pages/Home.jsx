import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const Home = () => {
  const [stats, setStats] = useState({ segments: 0, campaigns: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [segments, campaigns] = await Promise.all([
          axios.get('/api/segment'),
          axios.get('/api/campaign/active'),
        ]);
        setStats({
          segments: segments.data.length,
          campaigns: campaigns.data.length,
        });
        
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">CRM Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-6">
        
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Audience Segments</h2>
          <p className="text-4xl">{stats.segments}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Active Campaigns</h2>
          <p className="text-4xl">{stats.campaigns}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
