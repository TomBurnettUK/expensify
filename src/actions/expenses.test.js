import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  startSetExpenses,
  setExpenses
} from './expenses';
import expenses from '../fixtures/expenses';
import database from '../firebase/database';

const createMockStore = configureStore([thunk]);

beforeEach(async () => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  await database.ref('expenses').set(expensesData);
});

it('should create REMOVE_EXPENSE action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

it('should create EDIT_EXPENSE action object', () => {
  const action = editExpense('abc123', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'New note value' }
  });
});

it('should create ADD_EXPENSE object with given values', () => {
  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

it('should add expense to db and store', async () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  await store.dispatch(startAddExpense(expenseData));

  // Check store was updated
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });

  // Check db was updated
  const snapshot = await database
    .ref(`expenses/${actions[0].expense.id}`)
    .once('value');
  expect(snapshot.val()).toEqual(expenseData);
});

it('should add empty expense with default values to db and store', async () => {
  const store = createMockStore({});
  await store.dispatch(startAddExpense({}));

  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  // Check store was updated
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), ...defaultExpense }
  });

  // Check db was updated
  const snapshot = await database
    .ref(`expenses/${actions[0].expense.id}`)
    .once('value');
  expect(snapshot.val()).toEqual(defaultExpense);
});

it('should create SET_EXPENSES object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

it('should fetch expenses from firebase', async () => {
  const store = createMockStore({});
  await store.dispatch(startSetExpenses());
  const actions = store.getActions();
  expect(actions[0]).toEqual({ type: 'SET_EXPENSES', expenses });
});

it('should remove expense from db and store', async () => {
  const store = createMockStore({});
  await store.dispatch(startRemoveExpense({ id: expenses[0].id }));

  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  });

  const snapshot = await database
    .ref(`expenses/${expenses[0].id}`)
    .once('value');
  expect(snapshot.val()).toBeFalsy();
});
