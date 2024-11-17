import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">CRM Dashboard</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/add-customer" className="text-white hover:underline">Add Customer</Link></li>
          <li><Link to="/add-order" className="text-white hover:underline">Add Order</Link></li>
          <li><Link to="/audience-segment" className="text-white hover:underline">Audience Segment</Link></li>
          <li><Link to="/campaign" className="text-white hover:underline">Campaign</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
