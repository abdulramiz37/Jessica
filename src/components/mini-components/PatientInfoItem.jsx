export default function PatientInfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={label} className="h-8" />
      <div>
        <div className="text-gray-600">{label}</div>
        <div className="text-gray-800">{value}</div>
      </div>
    </div>
  );
}
