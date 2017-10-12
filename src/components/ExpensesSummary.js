import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

numeral.locale('en-gb');

export const ExpensesSummary = props => (
  <div>
    <p>
      Viewing {props.expenseCount} expenses, totalling{' '}
      {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = state => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
