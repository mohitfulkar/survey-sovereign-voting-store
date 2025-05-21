import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  updateVoteCount,
  getPollItems,
} from "../../app/features/poll/pollSlice";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const VoteCard = ({ poll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const { id } = useParams();
  const { success } = useSelector((state) => state.poll);

  const dispatch = useDispatch();

  const handleVote = async () => {
    if (!selectedPoll || !selectedOption) return;
    let payload = {
      userId: id,
      pollId: selectedPoll,
      option: selectedOption,
    };
    try {
      const response = await dispatch(updateVoteCount(payload)).unwrap();
      dispatch(getPollItems());
      setIsVisible(false);
      toast.success("Vote submitted successfully!");
    } catch (error) {
      toast.error(error);
    }
  };

  // Calculate total votes for percentage calculation
  const totalVotes = poll.options.reduce(
    (sum, option) => sum + option.voteCount,
    0
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Poll Header */}
      <div className="p-6 bg-blue-600">
        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
          {poll.subject}
        </h3>
        <h2 className="text-white text-xl font-bold">{poll.pollQuestion}</h2>
      </div>

      {/* Poll Options */}
      <div className="p-6 space-y-4">
        {poll.options.map((option) => {
          const percentage =
            totalVotes > 0
              ? Math.round((option.voteCount / totalVotes) * 100)
              : 0;

          return (
            <div
              key={option.name}
              className={`relative group cursor-pointer transition-all duration-200 ${
                selectedOption === option.name ? "ring-2 ring-indigo-500" : ""
              }`}
              onClick={() => {
                setSelectedPoll(poll._id);
                setSelectedOption(option.name);
                setIsVisible(true);
              }}
              onMouseEnter={() => setHoveredOption(option.name)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-800">{option.name}</span>
                <span className="text-sm font-semibold text-indigo-600">
                  {option.voteCount} {option.voteCount === 1 ? "vote" : "votes"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Percentage label that appears on hover */}
              {hoveredOption === option.name && (
                <div className="absolute -top-8 right-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                  {percentage}%
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer with total votes */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Total votes: {totalVotes}</span>
          <span className="text-indigo-600 font-medium">Live Results</span>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isVisible && (
        <Modal
          question="Confirm Your Vote"
          description={`You are about to vote for "${selectedOption}". This action cannot be undone.`}
          confirmText="Confirm Vote"
          cancelText="Cancel"
          onConfirm={handleVote}
          onCancel={() => setIsVisible(false)}
        />
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default VoteCard;
