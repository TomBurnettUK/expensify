import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpensesSummary';

it('should render correctly with empty values', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expensesTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render correctly with populated values', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expensesTotal={1000} />
  );
  expect(wrapper).toMatchSnapshot();
});
