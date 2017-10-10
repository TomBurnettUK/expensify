import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from './ExpenseDashboardPage';

it('should render correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
