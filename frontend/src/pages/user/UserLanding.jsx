import React, { useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import "../../constants/style.css";
import VoteCard from "../../components/shared/VoteCard";
import UserLayout from "./UserLayout";
import SearchBar from "../../components/shared/SearchBar";
import { getPollItems } from "../../app/features/poll/pollSlice";
import { useDispatch, useSelector } from "react-redux";

const UserLanding = () => {
  const dispatch = useDispatch();
  const { pollItems } = useSelector((state) => state.poll);

  useEffect(() => {
    if (!pollItems?.length) {
      dispatch(getPollItems());
    }
  }, [dispatch, pollItems?.length]);

  // Handle voting function
  const handleVote = (optionName, pollId) => {
    console.log(`Voted for ${optionName} in poll ${pollId}`);
  };

  return (
    <UserLayout>
      <div className="text-center">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {pollItems.map((poll) => (
          <VoteCard key={poll._id} poll={poll}  />
        ))}
      </div>
    </UserLayout>
  );
};

export default UserLanding;
