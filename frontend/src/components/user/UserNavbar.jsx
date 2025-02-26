/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../app/features/user/userSlices.js";
import { getPanelistsById } from "../../app/features/panelist/panelistSlices.js";
import "../../constants/style.css";

const UserNavbar = ({ user_type }) => {
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

  const handleAction = (action) => {
    if (action === "logout") {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="p bg-blue-600 p-5 shadow-lg flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-white text-2xl font-bold">
        ReliefConnect
      </Link>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">{`Hi, ${fullName}`}</span>
          <button
            onClick={() => handleAction("logout")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
