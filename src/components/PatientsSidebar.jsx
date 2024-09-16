import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApiData } from "../redux/userSlice";
import search_icon from "../assets/search_icon.svg";
import patient1_img from "../assets/Layer_8.png";
import patient2_img from "../assets/Layer 1.png";
import patient3_img from "../assets/Layer 3.png";
import patient4_img from "../assets/Layer 2.png";
import patient5_img from "../assets/Layer 6.png";
import patient6_img from "../assets/Layer 12.png";
import patient7_img from "../assets/Layer 10.png";
import patient8_img from "../assets/Layer 9.png";
import patient9_img from "../assets/Layer 4.png";
import patient10_img from "../assets/Layer 5.png";
import patient11_img from "../assets/Layer 7.png";
import patient12_img from "../assets/Layer 11.png";
import horizontal_three_dots from "../assets/horizontal_three_dots.svg";

export default function PatientsSidebar() {
  // State variable to track the selected item
  const [selectedItem, setSelectedItem] = useState(null);
  // Function to update the selected item
  const handleSelectedItem = (index) => {
    setSelectedItem(index);
  };

  const dispatch = useDispatch();

  const handleClick = (index) => {
    // Checking if the clicked index is 3
    if (index === 3) {
      handleSelectedItem(index);
      dispatch(fetchApiData());
    }
  };
  const patients = [
    {
      name: "Emily Williams",
      gender: "Female",
      age: 18,
      img: patient1_img,
    },
    { name: "Ryan Johnson", gender: "Male", age: 45, img: patient2_img },
    {
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
      img: patient3_img,
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      img: patient4_img,
    },
    {
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
      img: patient5_img,
    },
    {
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
      img: patient6_img,
    },
    {
      name: "Olivia Brown",
      gender: "Female",
      age: 32,
      img: patient7_img,
    },
    { name: "Tyler Davis", gender: "Male", age: 19, img: patient8_img },
    {
      name: "Kevin Anderson",
      gender: "Male",
      age: 30,
      img: patient9_img,
    },
    {
      name: "Dylan Thompson",
      gender: "Male",
      age: 31,
      img: patient10_img,
    },
    {
      name: "Nathan Evans",
      gender: "Male",
      age: 58,
      img: patient11_img,
    },
    { name: "Mike Nolan", gender: "Male", age: 31, img: patient12_img },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 mt-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#072635]">Patients</h2>
        <img src={search_icon} alt="Search" className="h-4 cursor-pointer" />
      </div>
      <div className="space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#F6F7F8] min-h-full cursor-pointer">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 rounded-lg ${
              selectedItem === index ? "bg-teal-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={patient.img}
                alt={patient.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="text-gray-800 font-semibold">
                  {patient.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {patient.gender}, {patient.age}
                </div>
              </div>
            </div>
            <img
              src={horizontal_three_dots}
              alt="more-icon"
              className="w-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
