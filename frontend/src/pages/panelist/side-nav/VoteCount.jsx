import React, { useEffect } from "react";
import PanelistLayout from "../PanelistLayout";
import DoughnutChart from "../../../components/shared/DoughnutChart";
import { useDispatch, useSelector } from "react-redux";
import { getPollItems } from "../../../app/features/poll/pollSlice";

const VoteCount = () => {
  const dispatch = useDispatch();
  const { pollItems } = useSelector((state) => state.poll);
  const acceptedPolls = pollItems.filter((poll) => poll.status === "accepted");
  useEffect(() => {
    if (!pollItems?.data?.length) {
      dispatch(getPollItems());
    }
  }, [dispatch, getPollItems?.length]);

  return (
    <PanelistLayout>
      <div className="p grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {acceptedPolls &&
          acceptedPolls.map((poll) => (
            <div
              key={poll._id}
              className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <h3 className="text-md font-semibold mb-2">{poll.subject}</h3>
              <h3 className="text-md  mb-2">{poll.pollQuestion}</h3>

              <DoughnutChart poll={poll} />
            </div>
          ))}
      </div>
    </PanelistLayout>
  );
};

export default VoteCount;
