import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from '../actions/filters';

import './ExpenseListFilters.css';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => this.props.setTextFilter(e.target.value);

  onSortChange = e => {
    switch (e.target.value) {
      case 'date':
        return this.props.sortByDate();
      case 'amount':
        return this.props.sortByAmount();
      default:
        throw new Error('Invalid sort filter');
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-item text-filter">
            <input
              type="text"
              className="text-input"
              placeholder="Filter expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-item">
            <select
              className="select-input"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Sort by date</option>
              <option value="amount">Sort by amount</option>
            </select>
          </div>
          <div>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
