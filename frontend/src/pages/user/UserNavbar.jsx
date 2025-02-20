/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { tokenActions } from "../service/tokenDecode";
import { btnClass } from "../constants/styleClass";

const UserNavbar = ({ fullName, isRegularUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAction = (action) => {
    switch (action) {
      case "logout":
        tokenActions.removeToken();
        navigate("/login");
        break;
      case "add":
        navigate(`/regular-user/${id}/complaint`);
        break;
      default:
        console.warn("Unknown action:", action);
        break;
    }
  };

  return (
    <nav className="bg-blue-600 p-5 shadow-lg flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-white text-2xl font-bold">
        ReliefConnect
      </Link>

      <div className="flex items-center space-x-6">
        {/* Conditionally render the "Raise Complaint" button */}
        {isRegularUser && (
          <button onClick={() => handleAction("add")} className={btnClass}>
            RAISE COMPLAINT
          </button>
        )}

        {/* Greeting and Logout Button */}
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">{`Hi, ${
            fullName || "Guest"
          }`}</span>
          <button
            onClick={() => handleAction("logout")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
