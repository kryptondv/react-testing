import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtr } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};


describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render without errors', () => {
    const wrapper = findByTestAtr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });

  test('Should render a logo', () => {
    const wrapper = findByTestAtr(component, 'logoImg');
    expect(wrapper.length).toBe(1);
  });
});
