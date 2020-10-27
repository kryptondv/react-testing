import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAtr, testStore } from '../utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        posts: [
          {
            title: 'Post title 1',
            body: 'Post body 1',
          },
          {
            title: 'Post title 2',
            body: 'Post body 2',
          },
          {
            title: 'Post title 3',
            body: 'Post body 3',
          },
        ],
      };
      wrapper = setUp(initialState);
    });

    test('Should Render', () => {
      const appComponent = findByTestAtr(wrapper, 'appComponent');
      expect(appComponent.length).toBe(1);
    });
  });
});
