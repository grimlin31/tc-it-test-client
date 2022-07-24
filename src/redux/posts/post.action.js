import {createSlice} from '@reduxjs/toolkit'
import { getAllPostService, createPostService, deletePostService } from "../../services/posts.service";

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    postArray: []
  },
  reducers: {
    getAllPosts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      const posts = action.payload
      state.postArray = posts
    },
    deletePost: (state, action) => {
      const id = action.payload
      const index = state.postArray.findIndex((post) => id === post.postid)
      state.postArray.splice(index, 1);
    },
    addPost: (state, action) => {
      state.postArray.push(action.payload);
    }
  }
})

export const getPostAsync = () => async (dispatch) => {
  try {
    const { data } = await getAllPostService();
    dispatch(getAllPosts(data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addPostAsync = (data) => async (dispatch) => {
  try {
    const post = await createPostService(data);
    dispatch(addPost(post.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const deletePostAsync = (postId) => async (dispatch) => {
  try {
    console.log(postId)
    const post = await deletePostService(postId);
    dispatch(deletePost(post.data.postid))
  } catch (err) {
    throw new Error(err)
  }
}

export const { getAllPosts, deletePost, addPost } = postSlice.actions
export default postSlice.reducer
