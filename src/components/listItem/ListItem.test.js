import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

import { findByTestAtr, checkProps } from '../../../utils';

describe('ListItem COmponent', () => {
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Post title',
        desc: 'Post description',
      };

      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Post title',
        desc: 'Post description',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('Should Render', () => {
      const listItem = findByTestAtr(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(1);
    });

    test('Should Render a Title', () => {
      const title = findByTestAtr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    test('Should Render a Description', () => {
      const desc = findByTestAtr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe("Doesn't Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: undefined,
        desc: 'Post description',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    test('Should Not Render', () => {
      const listItem = findByTestAtr(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(0);
    });
  });
});
