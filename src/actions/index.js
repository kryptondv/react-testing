import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  try {
    const fetchedPosts = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    dispatch({type: types.GET_POSTS, payload: fetchedPosts.data})

  } catch(err) {
    console.log(err)
  }
}