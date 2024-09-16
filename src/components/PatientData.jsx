import PatientInfoItem from "./mini-components/PatientInfoItem.jsx";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";
import profilePic from "../assets/profile-pic.jpg";
import { useSelector } from "react-redux";

export default function PatientData() {
  const { data } = useSelector((state) => state.user);

  return (
    <div className="bg-white rounded-2xl p-6 mt-5">
      <div className="flex flex-col items-center">
        <img
          src={data?.profile_picture || profilePic}
          alt={data?.name || "Jessica Taylor"}
          className="h-32 w-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {data?.name || "Jessica Taylor"}
        </h2>
      </div>
      <div className="space-y-4 text-xs">
        <PatientInfoItem
          icon={BirthIcon}
          label="Date Of Birth"
          value={data?.date_of_birth || "August 23, 1996"}
        />
        <PatientInfoItem
          icon={FemaleIcon}
          label="Gender"
          value={data?.gender || "Feamle"}
        />
        <PatientInfoItem
          icon={PhoneIcon}
          label="Contact Info."
          value={data?.phone_number || "+456 123456"}
        />
        <PatientInfoItem
          icon={PhoneIcon}
          label="Emergency Contacts"
          value={data?.emergency_contact || "+456 556789"}
        />
        <PatientInfoItem
          icon={InsuranceIcon}
          label="Insurance Provider"
          value={data?.insurance_type || "Sunrise Health Assurance"}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <button className="bg-teal-300 px-4 py-2 rounded-full w-56 font-semibold">
          Show All Information
        </button>
      </div>
    </div>
  );
}
