import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';

import { findByTestAtr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Check PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test description',
      };

      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      };
      wrapper = setUp(props);
    });

    test('Should render without errors', () => {
      const component = findByTestAtr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    test('Should render a h1', () => {
      const h1 = findByTestAtr(wrapper, 'title');
      expect(h1.length).toBe(1);
    });

    test('Should render description', () => {
      const desc = findByTestAtr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test('Should not render', () => {
      const component = findByTestAtr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
