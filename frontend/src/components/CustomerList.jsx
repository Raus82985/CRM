import React from 'react';

const CustomerList = ({ customers }) => {
  console.log(customers);
  
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id} className="border-b py-2">
            {customer.name} (ID: {customer._id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
