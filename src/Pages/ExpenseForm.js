// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState('');

  const handleAddExpense = () => {
    if (expense) {
      onAddExpense(parseFloat(expense));
      setExpense('');
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
      <div className="flex items-center">
        <input
          className="border border-gray-300 p-2 mr-2"
          type="number"
          placeholder="Enter expense amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
