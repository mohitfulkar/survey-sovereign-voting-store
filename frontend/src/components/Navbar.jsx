/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { btnClass } from "../constants/styleClass";
// import { getUserById } from "../../app/features/user/userSlices.js";
// import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  //   const { user, loading, error, lastFetched } = useSelector(
  //     (state) => state.user || {}
  //   ); // Ensure that we're accessing state correctly.
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { id } = useParams();

  //   // Check if the data is already available in the store and not stale
  //   const isDataAvailable = user && user.data;
  //   console.log("isDataAvailable", isDataAvailable);
  //   const isDataStale = !lastFetched || Date.now() - lastFetched > 60000; // 1-minute cache

  //   // Fetch user data only if it's not available or stale
  //   useEffect(() => {
  //     if (id && (!isDataAvailable || isDataStale)) {
  //       dispatch(getUserById(id));
  //     }
  //   }, [dispatch, id, isDataAvailable, isDataStale]);

  //   // Loading state check
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }

  //   let fullName = "Guest";
  //   if (user && user.data) {
  //     const { fname, lname } = user.data;
  //     fullName = `${fname} ${lname}`;
  //   }

  //   const handleAction = (action) => {
  //     if (action === "logout") {
  //       localStorage.removeItem("token");
  //       navigate("/login");
  //     }
  //   };
  const fullName = "mohit fulkar";

  return (
    <nav className="bg-blue-600 p-5 shadow-lg flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-white text-2xl font-bold">
        ReliefConnect
      </Link>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <Link to="/login" className={btnClass}>
            Login
          </Link>
          <Link to="/register" className={btnClass}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
