import React from 'react';

const SegmentList = ({ segments }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Audience Segments</h2>
      <ul>
        {segments.map((segment) => (
          <li key={segment._id} className="border-b py-2">
            <strong>{segment.name}</strong> - Conditions: {JSON.stringify(segment.conditions)} <br />
            <span className="text-gray-600">ID: {segment._id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SegmentList;
