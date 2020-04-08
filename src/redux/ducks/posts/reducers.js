import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
};

// State mutation possible thanks to immerJs library
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.postList = payload.topPosts;
    },
    dismissAllPosts: (state) => {
      state.postList = [];
    },
  },
});
export const { reducer, actions } = postSlice;

export const { addPost, dismissAllPosts } = actions;
