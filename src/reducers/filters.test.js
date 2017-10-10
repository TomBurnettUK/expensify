import moment from 'moment';
import filtersReducer from './filters';

it('should setup default filter values', () => {
  const state = filtersReducer(undefined, {});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

it('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'text'
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(action.text);
});

it('should set startDate filter', () => {
  const action = { type: 'SET_START_DATE', startDate: moment().startOf('day') };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(action.startDate);
});

it('should set endDate filter', () => {
  const action = { type: 'SET_END_DATE', endDate: moment().endOf('day') };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(action.endDate);
});
