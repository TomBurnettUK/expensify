import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';
import expenses from '../fixtures/expenses';

let expense;
let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
  expense = expenses[0];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

it('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

it('should handle removeExpense', () => {
  wrapper.find('button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
