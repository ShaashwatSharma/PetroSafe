// src/components/FuelChart.tsx
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from '../services/api';

interface FuelDataPoint {
  time: string;
  level: number;
}

export default function FuelChart() {
    
//   const [data, setData] = useState<FuelDataPoint[]>([]);

//   useEffect(() => {
//     async function fetchHistory() {
//       try {
//         const res = await axios.get('/fuel/history');
//         setData(res.data.history); // Must match this shape
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchHistory();
//   }, []);

const data = [{'time': '09:52', 'level': 100.0},
 {'time': '10:52', 'level': 95.52},
 {'time': '11:52', 'level': 98.73},
 {'time': '12:52', 'level': 98.1},
 {'time': '13:52', 'level': 97.47},
 {'time': '14:52', 'level': 96.84},
 {'time': '15:52', 'level': 96.2},
 {'time': '16:52', 'level': 95.57},
 {'time': '17:52', 'level': 94.94},
 {'time': '18:52', 'level': 94.31},
 {'time': '19:52', 'level': 88.11},
 {'time': '20:52', 'level': 93.04},
 {'time': '21:52', 'level': 92.41},
 {'time': '22:52', 'level': 91.78},
 {'time': '23:52', 'level': 91.14},
 {'time': '00:52', 'level': 90.51},
 {'time': '01:52', 'level': 89.88},
 {'time': '02:52', 'level': 89.24},
 {'time': '03:52', 'level': 83.7},
 {'time': '04:52', 'level': 87.98},
 {'time': '05:52', 'level': 87.35},
 {'time': '06:52', 'level': 86.71},
 {'time': '07:52', 'level': 81.6},
 {'time': '08:52', 'level': 85.45},
 {'time': '09:52', 'level': 84.82},
 {'time': '10:52', 'level': 84.18},
 {'time': '11:52', 'level': 83.55},
 {'time': '12:52', 'level': 82.92},
 {'time': '13:52', 'level': 82.29},
 {'time': '14:52', 'level': 81.65},
 {'time': '15:52', 'level': 81.02},
 {'time': '16:52', 'level': 80.39},
 {'time': '17:52', 'level': 76.34},
 {'time': '18:52', 'level': 79.12},
 {'time': '19:52', 'level': 78.49},
 {'time': '20:52', 'level': 77.86},
 {'time': '21:52', 'level': 77.22},
 {'time': '22:52', 'level': 76.59},
 {'time': '23:52', 'level': 72.66},
 {'time': '00:52', 'level': 75.33},
 {'time': '01:52', 'level': 74.69},
 {'time': '02:52', 'level': 69},
 {'time': '03:52', 'level': 73.43},
 {'time': '04:52', 'level': 69},
 {'time': '05:52', 'level': 72.16},
 {'time': '06:52', 'level': 71.53},
 {'time': '07:52', 'level': 70.9},
 {'time': '08:52', 'level': 70.27},
 {'time': '09:52', 'level': 69},
 {'time': '10:52', 'level': 69}];
  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Fuel Level Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="level" stroke="#3182CE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
