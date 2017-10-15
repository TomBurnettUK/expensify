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

// 'EDIT_EXPENSE'
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
