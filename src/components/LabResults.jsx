import download_icon from "../assets/download_icon.svg";
import { useSelector } from "react-redux";
import "../App.css";

export default function LabResults() {
  const { data, status } = useSelector((state) => state.user);
  // Dummy data to display if API data is not available
  const dummyData = [
    "Blood Tests",
    "CT Scans",
    "Thyroid Tests",
    "MRI",
    "X-Ray",
  ];
  // Conditionally setting lab results based on API status
  const labResults =
    status === "succeeded" && data ? data.lab_results : dummyData;

  return (
    <div className="bg-white rounded-2xl p-4 mt-7">
      <h2 className="text-2xl font-bold text-[#072635] mb-4">Lab Results</h2>
      <div className="max-h-48 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {labResults.map((result, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 hover:bg-[#F6F7F8] rounded cursor-pointer"
            >
              <span>{result}</span>
              <img
                src={download_icon}
                className="text-gray-500 h-4 w-4"
                alt="download_icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
