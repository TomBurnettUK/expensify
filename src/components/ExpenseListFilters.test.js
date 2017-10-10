import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

it('should render ExpenseListFilters with default filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alternate filters correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

it('should handle date focus change', () => {
  wrapper.find('DateRangePicker').simulate('focusChange', 'endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});

it('should handle text change', () => {
  const value = 'New Text';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

it('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

it('should handle date changes', () => {
  const startDate = moment(0).subtract(1, 'month');
  const endDate = moment(0).add(1, 'month');
  wrapper
    .find('DateRangePicker')
    .simulate('datesChange', { startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
