export default function FuelGauge({ level }:any) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-lg font-semibold">Fuel Level</h2>
      <div className="text-5xl text-green-600">{level}%</div>
    </div>
  );
}
