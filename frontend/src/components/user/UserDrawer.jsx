import React from "react";
import "../../constants/style.css";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const menuItems = [
  {
    label: "Panelists",
    icon: <FaRegNewspaper />,
    route: "/panelists",
  },
  {
    label: "News",
    icon: <FaRegNewspaper />,
    route: "/news",
  },
  {
    label: "Feedback",
    icon: <MdOutlineFeedback />,
    route: "/feedback",
  },
  {
    label: "Blogs",
    icon: <RiBloggerLine />,
    route: "/blogs",
  },
];

const UserDrawer = ({ isVisible, setIsVisible }) => {
  return (
    <div className={`drawer ${isVisible ? "open" : ""}`}>
      {/* Cross Icon Container */}
      <div className="flex justify-end p-2">
        <RxCross1
          className="cursor-pointer"
          onClick={() => setIsVisible(false)}
        />
      </div>

      {/* Menu Items */}
      <div className="inner text-center">
        <ul className="flex flex-col space-y-8">
          {menuItems.map(({ label, icon, route }) => (
            <li key={label} className="">
              <Link to={route} className="menu-item space-x-2 pl-10">
                {icon}
                <p className="p">{label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDrawer;
