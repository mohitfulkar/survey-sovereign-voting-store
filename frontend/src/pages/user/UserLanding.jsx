import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import UserDrawer from "../../components/user/UserDrawer";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../constants/style.css";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";

const UserLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <>
      <UserNavbar user_type="user" />
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
    </>
  );
};

export default UserLanding;
