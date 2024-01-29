import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState('');

  const handleAddIncome = () => {
    if (income) {
      onAddIncome(parseFloat(income));
      setIncome('');
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Add Income</h2>
      <div className="flex items-center">
        <input
          className="border border-gray-300 p-2 mr-2"
          type="number"
          placeholder="Enter income amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAddIncome}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default IncomeForm;
