import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import UserNavbar from "../../components/user/UserNavbar";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";

const UserLayout = ({ children }) => {
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
      <UserNavbar user_type="user" navbarItem={menuItems} />
      {children || <Outlet />}
    </>
  );
};

export default UserLayout;
