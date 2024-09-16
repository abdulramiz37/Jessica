import techcareLogo from "../assets/TestLogo.svg";
import homeIcon from "../assets/home_icon.svg";
import groupIcon from "../assets/group_icon.svg";
import calendarTodayIcon from "../assets/calendar_today.svg";
import chatBubbleIcon from "../assets/chat_bubble.svg";
import creditCardIcon from "../assets/credit_card.svg";
import seniorWomanDoctorImage from "../assets/senior-woman-doctor.png";
import settingsIcon from "../assets/settings_icon.svg";
import verticalThreeDotsIcon from "../assets/vertical_three_dots.svg";
import NavbarItem from "./mini-components/NavbarItem";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white py-2 px-6 rounded-full">
      <div className="flex items-center space-x-4">
        <img src={techcareLogo} alt="Tech.Care Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-8 cursor-pointer font-semibold">
        <NavbarItem icon={homeIcon} label="Overview" />
        <NavbarItem icon={groupIcon} label="Patients" highlighted />
        <NavbarItem icon={calendarTodayIcon} label="Schedule" />
        <NavbarItem icon={chatBubbleIcon} label="Message" />
        <NavbarItem icon={creditCardIcon} label="Transactions" />
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={seniorWomanDoctorImage}
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <div className="text-right">
          <div className="text-gray-800 font-semibold">Dr. Jose Simmons</div>
          <div className="text-gray-500 text-sm">General Practitioner</div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={settingsIcon} alt="Settings" className="h-4" />
          <img src={verticalThreeDotsIcon} alt="More" className="h-4" />
        </div>
      </div>
    </div>
  );
}
