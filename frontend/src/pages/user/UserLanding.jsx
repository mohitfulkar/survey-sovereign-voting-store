import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import UserDrawer from "../../components/user/UserDrawer";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../constants/style.css";

const UserLanding = () => {
  const [isVisible, setIsVisible] = useState(true); // Track visibility of UserDrawer

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <UserNavbar />

      {/* Hamburger Menu Button */}
      <div className="relative">
        <RxHamburgerMenu
          onClick={handleIsVisible}
          className="w-[3rem] cursor-pointer z-10 pt-2 h-8" // Hamburger icon stays above everything else
        />

        {/* Sidebar, position it above the button */}
        <div className="absolute top-0 left-0 z-20">
          <UserDrawer isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
      </div>
    </>
  );
};

export default UserLanding;
