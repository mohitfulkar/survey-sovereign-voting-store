import { Outlet, useParams } from "react-router-dom"; // Import Outlet for nested routes
import UserNavbar from "../../components/user/UserNavbar";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";

const UserLayout = ({ children }) => {
  const { id } = useParams();
  const menuItems = [
    {
      label: "Home",
      icon: <FaRegNewspaper />,
      route: `/user/${id}`,
    },
    {
      label: "Panelists",
      icon: <FaRegNewspaper />,
      route: "/user/panelist-history",
    },
    {
      label: "News",
      icon: <FaRegNewspaper />,
      route: "/news",
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
