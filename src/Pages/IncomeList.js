import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteIncome } from '../actions';

const IncomeList = ({ income }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Set a timer for automatic deletion after 10 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      // Trigger the deletion action
      dispatch(deleteIncome(0)); // Example: delete the first income
    }, 10000); // 10 seconds

    setTimer(timeoutId);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  const handleDelete = (index) => {
    clearTimeout(timer); // Clear the automatic deletion timer
    dispatch(deleteIncome(index));
  };

  return (
    <div className="my-8 bg-blue-200">
      <h2 className="text-2xl font-bold mb-4">Income</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {income.map((item, index) => (
          <li key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
            <span className="text-xl font-bold">{item}</span>
            <button
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
