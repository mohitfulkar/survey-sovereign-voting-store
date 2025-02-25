import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom"; // Import Outlet for nested routes
import UserNavbar from "../../components/user/UserNavbar";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import UserDrawer from "../../components/user/UserDrawer";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { RiNumbersLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";

const PanelistLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();

  const menuItems = [
    {
      label: "Create Poll",
      icon: <IoIosAddCircleOutline />,
      route: `/panelist/${id}/create-poll`,
    },
    {
      label: "Accept/Reject Poll",
      icon: <TiTickOutline />,
      route: `/panelist/${id}/poll-status`,
    },
    {
      label: "Vote Counts",
      icon: <RiNumbersLine />,
      route: `/panelist/${id}/vote-count`,
    },
    {
      label: "Add/Delete Panelists",
      icon: <IoPersonAddOutline />,
      route: `/panelist/${id}/add-panelist`,
    },
  ];

  return (
    <>
      <UserNavbar user_type="panelist" />
      <div className="flex">
        {/* Sidebar */}
        <div className="relative">
          <RxHamburgerMenu
            onClick={() => setIsVisible(!isVisible)}
            className="w-[3rem] cursor-pointer z-10 pt-2 h-8"
          />
          <div className="absolute top-0 left-0 z-20">
            <UserDrawer
              menuItems={menuItems}
              isVisible={isVisible}
              setIsVisible={() => setIsVisible(!isVisible)}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {children || <Outlet />} {/* Render children or nested routes */}
        </div>
      </div>
    </>
  );
};

export default PanelistLayout;
