import { useSelector } from "react-redux";
import "../App.css";

export default function DiagnosticList() {
  const { data, status } = useSelector((state) => state.user);
  // Dummy data to display if API data is not available
  const dummyData = [
    {
      name: "Dummy Problem 1",
      description: "Description of Dummy Problem 1",
      status: "Open",
    },
    {
      name: "Dummy Problem 2",
      description: "Description of Dummy Problem 2",
      status: "Closed",
    },
    {
      name: "Dummy Problem 3",
      description: "Description of Dummy Problem 3",
      status: "Open",
    },
    {
      name: "Dummy Problem 4",
      description: "Description of Dummy Problem 4",
      status: "Open",
    },
  ];

  const diagnosticList =
    status === "succeeded" && data ? data.diagnostic_list : dummyData;
  return (
    <div className="mx-auto bg-white rounded-2xl p-5 mt-7">
      <h2 className="text-2xl font-bold text-[#072635]">Diagnostic List</h2>

      <div className="overflow-x-auto mt-7 h-56 custom-scrollbar">
        <table className="w-full whitespace-nowrap">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#F6F7F8]">
              <th className="p-3 text-left text-sm font-semibold rounded-tl-3xl rounded-bl-3xl">
                Problem
              </th>
              <th className="text-left text-sm font-semibold">Description</th>
              <th className="text-left text-sm font-semibold rounded-tr-3xl rounded-br-3xl">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 cursor-pointer text-sm ">
            {diagnosticList.map((diagnosis, index) => (
              <tr key={index} className="hover:bg-[#F6F7F8]">
                <td className="px-2 py-4 whitespace-nowrap">
                  {diagnosis.name}
                </td>
                <td className="py-4 whitespace-nowrap">
                  {diagnosis.description}
                </td>
                <td className="py-4 whitespace-nowrap">{diagnosis.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
