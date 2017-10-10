import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      props.expenses.map(expenseItem => (
        <ExpenseListItem key={expenseItem.id} {...expenseItem} />
      ))
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
