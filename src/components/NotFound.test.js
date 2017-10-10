import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

it('should render correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
