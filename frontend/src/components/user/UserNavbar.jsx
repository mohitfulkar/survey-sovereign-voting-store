/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../app/features/user/userSlices.js";
import { useDispatch, useSelector } from "react-redux";
import "../../constants/style.css";

const UserNavbar = () => {
  const { user, loading, error, lastFetched } = useSelector(
    (state) => state.user || {}
  ); // Ensure that we're accessing state correctly.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // Check if the data is already available in the store and not stale
  const isDataAvailable = user && user.data;
  console.log("isDataAvailable", isDataAvailable);

  // Fetch user data only if it's not available or stale
  useEffect(() => {
    if (id && !isDataAvailable) {
      dispatch(getUserById(id));
    }
  }, [dispatch, id, isDataAvailable]);

  // Loading state check
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  let fullName = "Guest";
  if (user && user.data) {
    const { fname, lname } = user.data;
    fullName = `${fname} ${lname}`;
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
