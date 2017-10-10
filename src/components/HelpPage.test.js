import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from './HelpPage';

it('should render correctly', () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
});
