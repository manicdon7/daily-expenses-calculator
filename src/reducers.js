const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const initialState = {
  expenses: [],
  income: [],
  ...persistedState, // Merge with persisted state from local storage
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        const newState = { ...state, expenses: [...state.expenses, action.payload] };
        localStorage.setItem('reduxState', JSON.stringify(newState));
        return newState;
      case 'DELETE_EXPENSE':
        const updatedExpenses = [...state.expenses];
        updatedExpenses.splice(action.payload, 1);
        const newStateAfterDelete = { ...state, expenses: updatedExpenses };
        localStorage.setItem('reduxState', JSON.stringify(newStateAfterDelete));
        return newStateAfterDelete;
      case 'ADD_INCOME':
        const newStateWithIncome = { ...state, income: [...state.income, action.payload] };
        localStorage.setItem('reduxState', JSON.stringify(newStateWithIncome));
        return newStateWithIncome;
      case 'DELETE_INCOME':
        const updatedIncome = [...state.income];
        updatedIncome.splice(action.payload, 1);
        const newStateAfterIncomeDelete = { ...state, income: updatedIncome };
        localStorage.setItem('reduxState', JSON.stringify(newStateAfterIncomeDelete));
        return newStateAfterIncomeDelete;
      default:
        return state;
    }
  };

export default rootReducer;
