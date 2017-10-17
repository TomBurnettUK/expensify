import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

import './ExpenseList.css';

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {props.expenses.length === 0 ? (
      <div className="no-expenses-message">
        <p>No expenses found. Add an expense to get started!</p>
      </div>
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
