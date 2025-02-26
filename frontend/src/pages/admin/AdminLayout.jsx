import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import UserNavbar from "../../components/user/UserNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import UserDrawer from "../../components/user/UserDrawer";
import { RiNumbersLine } from "react-icons/ri";
import { IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AdminLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = [
    {
      label: "Add Panelist",
      icon: <IoPersonAddOutline />,
      route: `/add-panelist`,
    },
    {
      label: "Active Panelists",
      icon: <IoPersonOutline />,
      route: `/panelist-history`,
    },
    {
      label: "Active Polls",
      icon: <RiNumbersLine />,
      route: `/admin/poll-info`,
    },
    {
      label: "User Info",
      icon: <IoIosInformationCircleOutline />,
      route: `/admin/user-info`,
    },
  ];

  return (
    <>
      <UserNavbar user_type="admin" />
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

export default AdminLayout;
