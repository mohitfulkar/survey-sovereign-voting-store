import React, { useEffect, useState } from "react";
import PanelistLayout from "../PanelistLayout";
import { MdPublish, MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePollById,
  getPollItems,
} from "../../../app/features/poll/pollSlice";
import Modal from "../../../components/shared/Modal";

const PollStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPollId, setSelectedPollId] = useState(null);
  const dispatch = useDispatch();
  const { pollItems } = useSelector((state) => state.poll);

  useEffect(() => {
    if (!pollItems?.data || pollItems.data.length === 0) {
      dispatch(getPollItems());
    }
  }, [dispatch, pollItems?.data]);

  const handleDelete = () => {
    if (selectedPollId) {
      dispatch(deletePollById(selectedPollId));
      setIsVisible(false);
      setSelectedPollId(null);
    }
  };

  return (
    <PanelistLayout>
      {isVisible && (
        <Modal
          question="Do you want to drop this Poll?"
          onConfirm={handleDelete}
          onCancel={() => setIsVisible(false)}
        />
      )}

      <div className="m-3">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left h-12">
              <th className="w-2/6 px-4 py-2 border border-gray-300">
                Subject
              </th>
              <th className="w-2/6 px-4 py-2 border border-gray-300">
                Poll Question
              </th>
              <th className="w-1/6 px-4 py-2 border border-gray-300">
                Created By
              </th>
              <th className="w-2/6 px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {pollItems.map((item) => (
              <tr key={item._id} className="h-12 border-b border-gray-300">
                <td className="px-4 py-2">{item.subject}</td>
                <td className="px-4 py-2">{item.pollQuestion}</td>
                <td className="px-4 py-2">{item.created_by_name}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    <MdPublish />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPollId(item._id);
                      setIsVisible(true);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {pollItems?.data?.length === 0 && (
          <p className="text-center mt-4 text-gray-600">No polls available.</p>
        )}
      </div>
    </PanelistLayout>
  );
};

export default PollStatus;
