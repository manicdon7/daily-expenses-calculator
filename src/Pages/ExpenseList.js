// ExpenseList.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../actions';

const ExpenseList = ({ expenses }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Set a timer for automatic deletion after 10 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      // Trigger the deletion action
      dispatch(deleteExpense(0)); // Example: delete the first expense
    }, 360000); // 10 seconds

    setTimer(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  const handleDelete = (index) => {
    clearTimeout(timer);
    dispatch(deleteExpense(index));
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Expenses</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense, index) => (
          <li key={index} className="bg-white rounded-xl overflow-hidden shadow-md p-4">
            <span className="text-xl font-bold">{expense}</span>
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

export default ExpenseList;
