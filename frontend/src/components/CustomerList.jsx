import React from 'react';

const CustomerList = ({ customers }) => {
  if (!customers || customers.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No customers available.
      </div>
    );
  }

  return (
    <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Customers List</h2>
      <ul className="space-y-4">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
          >
            <span className="font-medium text-gray-800">
              {customer.name}
            </span>
            <span className="text-sm text-gray-500">ID: {customer._id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
