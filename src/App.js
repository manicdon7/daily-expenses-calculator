import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from './Pages/ExpenseForm';
import IncomeForm from './Pages/IncomeForm';
import ExpenseList from './Pages/ExpenseList';
import IncomeList from './Pages/IncomeList';
import Balance from './Pages/Balance';
import { addExpense,addIncome } from './actions'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const income = useSelector((state) => state.income);
  const balance = income.reduce((total, inc) => total + inc, 0) - expenses.reduce((total, exp) => total + exp, 0);

  useEffect(() => {
    // Update balance when expenses or income change
  }, [expenses, income]);

  const handleAddExpense = (expense) => {
    dispatch(addExpense(expense));
  };

  const handleAddIncome = (income) => {
    dispatch(addIncome(income));
  };

  return (
    <div>
      <div className='bg-blue-200 h-screen p-6'>
      <h1 className='text-3xl font-bold capitalize pt-10'>Daily Expenses Calculator</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <IncomeForm onAddIncome={handleAddIncome} />
      <ExpenseList expenses={expenses} />
      <IncomeList income={income} />
      <div className='text-center'>
      <Balance balance={balance} />
      </div>
    </div>
      </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
export default AppWrapper;
