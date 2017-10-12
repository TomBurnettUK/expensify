import getExpensesTotal from './expenses-total';
import expenses from '../fixtures/expenses';

it('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

it('should correctly return total of single expense', () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

it('should correctly return total of multiple expenses', () => {
  const expectedTotal =
    expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const total = getExpensesTotal(expenses);
  expect(total).toBe(expectedTotal);
});
