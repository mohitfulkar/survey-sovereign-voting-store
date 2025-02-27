import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import DoughnutChart from "../../../components/shared/DoughnutChart";
import { useDispatch, useSelector } from "react-redux";
import { getPollCount } from "../../../app/features/poll/pollSlice";

const ActivePolls = () => {
  const dispatch = useDispatch();
  const { count, success } = useSelector((state) => state.poll);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  // Fetch poll count on mount
  useEffect(() => {
    dispatch(getPollCount());
  }, [dispatch]);

  // Update state when data is fetched
  useEffect(() => {
    if (success && count?.data) {
      const extractedKeys = Object.keys(count.data);
      const extractedValues = Object.values(count.data);
      setKeys(extractedKeys);
      setValues(extractedValues);
      console.log("Updated keys, values:", extractedKeys, extractedValues);
    }
  }, [success, count]);

  return (
    <AdminLayout>
      <div className="poll-count-status">
        <DoughnutChart labels={keys} dataValues={values} label="Count" />
      </div>
    </AdminLayout>
  );
};

export default ActivePolls;
