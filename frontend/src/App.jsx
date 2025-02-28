import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./constants/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/user/SignUp";
import Login from "./pages/user/Login";
import PanelistLogin from "./pages/panelist/PanelistLogin";
import UserLanding from "./pages/user/UserLanding";
import Landing from "./pages/Landing";
import { useSelector } from "react-redux";
import PanelistLayout from "./pages/panelist/PanelistLayout";
import CreatePoll from "./pages/panelist/side-nav/CreatePoll";
import PollStatus from "./pages/panelist/side-nav/PollStatus";
import VoteCount from "./pages/panelist/side-nav/VoteCount";
import AddPanelist from "./pages/admin/side-nav/AddPanelist";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLanding from "./pages/admin/AdminLanding";
import ActivePanelist from "./pages/admin/side-nav/ActivePanelist";
import ActivePolls from "./pages/admin/side-nav/ActivePolls";
import PanelistLanding from "./pages/panelist/PanelistLanding";

const App = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: panelistLoading } = useSelector((state) => state.user);
  const { loading: userLoading } = useSelector((state) => state.panelist);
  const { loading: pollLoading } = useSelector((state) => state.poll);
  const isLoading =
    authLoading || panelistLoading || userLoading || pollLoading;

  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* global loader  */}
        {isLoading && (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/user/:id" element={<UserLanding />} />
          <Route path="/panelist/login" element={<PanelistLogin />} />
          <Route path="/panelist/:id" element={<PanelistLanding />} />
          <Route path="/panelist/:id/create-poll" element={<CreatePoll />} />
          <Route path="/panelist/:id/poll-status" element={<PollStatus />} />
          <Route path="/panelist/:id/vote-count" element={<VoteCount />} />
          <Route path="/add-panelist" element={<AddPanelist />} />
          <Route path="/panelist-history" element={<ActivePanelist />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="/admin/poll-info" element={<ActivePolls />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
