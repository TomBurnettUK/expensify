import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense;
let history;
let wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

it('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
