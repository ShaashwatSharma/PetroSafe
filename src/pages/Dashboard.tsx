// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import FuelGauge from '../components/FuelGauge';
import FuelChart from '../components/FuelChart';
import AlertCard from '../components/AlertCard';
import axios from '../services/api';

interface Alert {
  message: string;
  timestamp: string;
}

export default function Dashboard() {
  const [fuelLevel, setFuelLevel] = useState<number>(0);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const levelRes = await axios.get('/fuel/latest');
        const alertRes = await axios.get('/fuel/alerts');
        setFuelLevel(levelRes.data.level);
        setAlerts(alertRes.data.alerts);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Fuel Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FuelGauge level={fuelLevel||69} />
        {/* {alerts.length > 0 ? (
          <AlertCard alert={alerts[0]} />
        ) : (
          <div>No alerts</div>
        )} */}
        <AlertCard alert={alerts[0]} />
      </div>
      <FuelChart />
    </div>
  );
}
