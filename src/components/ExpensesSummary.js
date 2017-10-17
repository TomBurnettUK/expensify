import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

import './ExpensesSummary.css';

numeral.locale('en-gb');

export const ExpensesSummary = props => (
  <div className="page-header summary-header">
    <div className="content-container">
      <h2 className="page-header-title">
        Viewing <span>{props.expenseCount}</span> expenses, totalling{' '}
        <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span>
      </h2>
      <div className="summary-buttons">
        <Link className="add-button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
