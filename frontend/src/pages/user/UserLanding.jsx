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
    </>
  );
};

export default UserLanding;
