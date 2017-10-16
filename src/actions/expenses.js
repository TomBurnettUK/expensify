import database from '../firebase/database';

// 'ADD_EXPENSE'
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => async (
  dispatch,
  getState
) => {
  const uid = getState().auth.uid;
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const expense = { ...defaultData, ...expenseData };
  const ref = await database.ref(`users/${uid}/expenses`).push(expense);
  dispatch(addExpense({ id: ref.key, ...expense }));
};

// 'REMOVE_EXPENSE'
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => async (
  dispatch,
  getState
) => {
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).remove();
  dispatch(removeExpense({ id }));
};

// 'EDIT_EXPENSE'
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).update(updates);
  dispatch(editExpense(id, updates));
};

// 'SET_EXPENSES'
export const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses });

export const startSetExpenses = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const snapshot = await database.ref(`users/${uid}/expenses`).once('value');
  const expenses = [];
  snapshot.forEach(expense => {
    expenses.push({ ...expense.val(), id: expense.key });
  });
  dispatch(setExpenses(expenses));
};
