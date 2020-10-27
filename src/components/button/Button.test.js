import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

import { findByTestAtr, checkProps } from '../../../utils';

describe('Button Component', () => {
  describe('Checking Proptypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Button text',
        handlert: () => {},
      };

      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Button text',
        handler: mockFunc,
      };
      wrapper = shallow(<Button {...props} />);
    });

    test('Should Render', () => {
      const button = findByTestAtr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    test('Should call callback on click', () => {
      const button = findByTestAtr(wrapper, 'buttonComponent');
      button.simulate('click');
      const timesCalled = mockFunc.mock.calls.length;
      expect(timesCalled).toBe(1);
    });
  });
});
