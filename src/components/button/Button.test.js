import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

import { findByTestAtr, checkProps } from '../../../utils';

describe('Button Componnent', () => {
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
    beforeEach(() => {
      const props = {
        buttonText: 'Button text',
        handler: () => {},
      };
      wrapper = shallow(<Button {...props} />);
    });

    test('Should Render', () => {
      const button = findByTestAtr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
