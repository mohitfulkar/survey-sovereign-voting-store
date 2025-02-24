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
import PanelistLanding from "./pages/panelist/PanelistLayout";
import { useSelector } from "react-redux";
import PanelistLayout from "./pages/panelist/PanelistLayout";
import CreatePoll from "./pages/panelist/side-nav/CreatePoll";
import PollStatus from "./pages/panelist/side-nav/PollStatus";
import VoteCount from "./pages/panelist/side-nav/VoteCount";
import AddPanelist from "./pages/panelist/side-nav/AddPanelist";

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
        )}{" "}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/user/:id" element={<UserLanding />} />
          <Route path="/panelist/login" element={<PanelistLogin />} />
          <Route path="/panelist/:id" element={<PanelistLayout />} />
          <Route path="/panelist/:id/create-poll" element={<CreatePoll />} />
          <Route path="/panelist/:id/poll-status" element={<PollStatus />} />
          <Route path="/panelist/:id/vote-count" element={<VoteCount />} />
          <Route path="/panelist/:id/add-panelist" element={<AddPanelist />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
