import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import UserDrawer from "../../components/user/UserDrawer";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../constants/style.css";

const UserLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <UserNavbar />
      <div className="relative">
        <RxHamburgerMenu
          onClick={() => setIsVisible(!isVisible)}
          className="w-[3rem] cursor-pointer z-10 pt-2 h-8" 
        />
        <div className="absolute top-0 left-0 z-20">
          <UserDrawer
            isVisible={isVisible}
            setIsVisible={() => setIsVisible(!isVisible)}
          />
        </div>
      </div>
    </>
  );
};

export default UserLanding;
