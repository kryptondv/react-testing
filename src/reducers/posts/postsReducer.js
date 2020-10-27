import { types } from '../../actions/types.js';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default  postsReducer;