export default function NavbarItem({ icon, label, highlighted }) {
  return (
    <div
      className={`flex items-center space-x-2 ${
        highlighted ? "bg-teal-300 px-4 py-2 rounded-full" : ""
      }`}
    >
      <img src={icon} alt={label} className="h-4" />
      <span className={highlighted ? "" : "text-gray-600"}>{label}</span>
    </div>
  );
}
