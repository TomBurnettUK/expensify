const getExpensesTotal = expenses =>
  expenses.reduce((sum, expense) => expense.amount + sum, 0);

export default getExpensesTotal;
