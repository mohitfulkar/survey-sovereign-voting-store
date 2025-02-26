/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { btnClass } from "../constants/styleClass";

const Navbar = () => {
  return (
    <nav className="p bg-blue-600 p-5 shadow-lg flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-white text-2xl font-bold">
        SurveySovereign
      </Link>

      <div className="flex space-x-5">
        <Link to="/admin/login" className={btnClass}>
          Admin
        </Link>
        <Link to="/panelist/login" className={btnClass}>
          Panelist
        </Link>
        <Link to="/login" className={btnClass}>
          Login
        </Link>
        <Link to="/register" className={btnClass}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
