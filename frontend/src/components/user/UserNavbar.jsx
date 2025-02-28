/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../app/features/user/userSlices.js";
import { getPanelistsById } from "../../app/features/panelist/panelistSlices.js";
import "../../constants/style.css";
import { to } from "./../../../node_modules/moment/src/lib/moment/to";

const UserNavbar = ({ user_type, navbarItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useSelector((state) => state.user || {});
  const { panelist } = useSelector((state) => state.panelist || {});

  const [isDataAvailable, setIsDataAvailable] = useState(false);

  let fullName = "Guest";

  useEffect(() => {
    if (id && !isDataAvailable) {
      if (user_type === "user") {
        dispatch(getUserById(id));
      } else if (user_type === "panelist") {
        dispatch(getPanelistsById(id));
      }
    }
  }, [dispatch, id, isDataAvailable, user_type]);

  useEffect(() => {
    if (user_type === "user" && user?.data) {
      setIsDataAvailable(true);
    } else if (user_type === "panelist" && panelist?.data) {
      setIsDataAvailable(true);
    }
  }, [user, panelist, user_type]);

  if (user_type === "user" && user?.data) {
    fullName = `${user.data.fname} ${user.data.lname}`;
  } else if (user_type === "panelist" && panelist?.data) {
    fullName = panelist.data.fullName;
  } else {
    fullName = "Admin";
  }

  const handleLogout = () => {
    switch (user_type) {
      case "user":
        localStorage.getItem("token");
        break;
      case "panelist":
        localStorage.removeItem("panelist_token");
        break;
    }
    navigate("/");
  };

  return (
    <div className="p bg-blue-600 p-5 shadow-lg flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link
        to={
          user_type === "user"
            ? "/user-dashboard"
            : user_type === "panelist"
            ? "/panelist-dashboard"
            : "/admin-dashboard"
        }
        className="text-white text-2xl font-bold"
      >
        SurveySovereign
      </Link>
      <div className="text-white space-x-12 flex">
        {navbarItem.map((item) => (
          <div className="flex">
            <Link to={item.route} className="flex items-center space-x-1">
              <span>{item.icon} </span>
              <label>{item.label}</label>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white font-medium">{`Hi, ${fullName}`}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserNavbar;
