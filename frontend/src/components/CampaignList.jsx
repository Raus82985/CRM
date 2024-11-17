import React from 'react';

const CampaignList = ({ campaigns, onSend, onViewStats, stats }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Active Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign._id} className="border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <strong>{campaign.name}</strong>
                <p>Segment ID: {campaign.segment_id}</p>
                <p>Message: {campaign.message}</p>
              </div>
              <div>
                <button
                  onClick={() => onSend(campaign._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                  Send Message
                </button>
                <button
                  onClick={() => onViewStats(campaign._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  View Stats
                </button>
              </div>
            </div>
            {/* Display stats for the campaign */}
            {stats && stats.campaign_id === campaign._id && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <p><strong>Sent:</strong> {stats.sent}</p>
                <p><strong>Failed:</strong> {stats.failed}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
