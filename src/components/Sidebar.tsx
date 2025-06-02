import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">FuelApp</h2>
      <ul>
        <li><Link to="/dashboard" className="block py-2">Dashboard</Link></li>
        <li><Link to="/history" className="block py-2">History</Link></li>
        <li><Link to="/alerts" className="block py-2">Alerts</Link></li>
      </ul>
    </div>
  );
}
