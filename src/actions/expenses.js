import database from '../firebase/database';

// 'ADD_EXPENSE'
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => async dispatch => {
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const expense = { ...defaultData, ...expenseData };
  const ref = await database.ref('expenses').push(expense);
  dispatch(addExpense({ id: ref.key, ...expense }));
};

// 'REMOVE_EXPENSE'
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => async dispatch => {
  await database.ref(`expenses/${id}`).remove();
  dispatch(removeExpense({ id }));
};

// 'EDIT_EXPENSE'
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// 'SET_EXPENSES'
export const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses });

export const startSetExpenses = () => async dispatch => {
  const snapshot = await database.ref('expenses').once('value');
  const expenses = [];
  snapshot.forEach(expense => {
    expenses.push({ ...expense.val(), id: expense.key });
  });
  dispatch(setExpenses(expenses));
};
