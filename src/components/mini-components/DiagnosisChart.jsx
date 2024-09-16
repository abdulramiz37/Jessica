import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Registering required chart elements and scales with Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

export default function DiagnosisChart() {
  // Data for the chart
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 160, 140, 130, 150, 160],
        borderColor: "#e74c3c",
        backgroundColor: "rgba(231, 76, 60, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: [80, 70, 90, 100, 85, 78],
        borderColor: "#8e44ad",
        backgroundColor: "rgba(142, 68, 173, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Rendering the chart component with data and options
  return (
    <div className="bg-[#F4F0FE] rounded-2xl p-4 mt-8">
      {/* Chart title and dropdown for time range */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Blood Pressure</h2>
        <span className="text-sm">Last 6 months ▼</span>
      </div>
      {/* Render the Line chart component with data and options */}
      <Line data={data} options={options} />
      {/* Legend for the chart */}
      <div className="flex justify-around mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
          <span>Systolic</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
          <span>Diastolic</span>
        </div>
      </div>
      {/* Additional information */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-4xl font-bold">160</span>
            <span className="block">Higher than Average</span>
          </div>
          <div>
            <span className="text-4xl font-bold">78</span>
            <span className="block">Lower than Average</span>
          </div>
        </div>
      </div>
    </div>
  );
}
