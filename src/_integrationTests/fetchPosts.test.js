import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store should be updated correctly', () => {
    const expectedState = [
      {
        title: 'Post 1 title',
        body: 'Post 1 body',
      },
      {
        title: 'Post 2 title',
        body: 'Post 2 body',
      },
      {
        title: 'Post 3 title',
        body: 'Post 3 body',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
