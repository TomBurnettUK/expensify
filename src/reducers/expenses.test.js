import expensesReducer from './expenses';
import expenses from '../fixtures/expenses';

it('should set default state', () => {
  const state = expensesReducer(undefined, {});
  expect(state).toEqual([]);
});

it('should remove expense with valid id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: 'b' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

it('should not change state with invalid id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: 'z' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

it('should add an expense', () => {
  const expense = {
    id: 'd',
    description: 'Coffee',
    note: '',
    amount: 300,
    createdAt: 0
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toContainEqual(expense);
});

it('should edit an expense with valid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'b',
    updates: { description: 'Mortgage' }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(action.updates.description);
});

it('should not edit state with invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'z',
    updates: { description: 'Mortgage' }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
