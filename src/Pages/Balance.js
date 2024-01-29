import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Daily Balance</h2>
      <p className="text-xl">Balance: {balance}</p>
    </div>
  );
};

export default Balance;
