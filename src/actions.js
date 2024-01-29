export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const deleteExpense = (index) => ({
  type: 'DELETE_EXPENSE',
  payload: index,
});

export const addIncome = (income) => ({
  type: 'ADD_INCOME',
  payload: income,
});

export const deleteIncome = (index) => ({
  type: 'DELETE_INCOME',
  payload: index,
});
