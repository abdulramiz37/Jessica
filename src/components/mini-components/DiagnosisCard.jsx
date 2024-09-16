export default function DiagnosisCard({
  backgroundColor,
  imgSrc,
  title,
  value,
  levels
}) {
  return (
    <div className={`p-3 ${backgroundColor} rounded-xl`}>
      <img className="w-20 h-20 rounded-t-lg" src={imgSrc} alt={title} />
      <div className="mt-3">
        <h2 className="text-md">{title}</h2>
        <p className="text-gray-700 text-3xl font-bold">{value}</p>
        <p className="text-gray-500 text-sm mt-2">{levels}</p>
      </div>
    </div>
  );
}
