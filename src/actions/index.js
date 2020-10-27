import { types } from './types';
import posts from '../apis/posts';

export const fetchPosts = () => async (dispatch) => {
  try {
    const fetchedPosts = await posts.get()
    dispatch({type: types.GET_POSTS, payload: fetchedPosts.data})

  } catch(err) {
    console.log(err)
  }
}