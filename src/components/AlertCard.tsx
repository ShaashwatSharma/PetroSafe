// src/components/AlertCard.tsx
interface AlertCardProps {
  alert: {
    message: string;
    timestamp: string;
  };
}

export default function AlertCard({ alert }: AlertCardProps) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 p-4 text-red-800 rounded">
      {/* ⚠️ {alert.message} — {new Date(alert.timestamp).toLocaleString()} */}
      ⚠️ Sudden drop detected at 12:00 PM. Possible fuel theft!
    </div>
  );
}
