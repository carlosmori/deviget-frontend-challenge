import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  currentPost: {},
  openPostDetail: false,
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
    dismissPost: (state, { payload }) => {
      state.postList = state.postList.filter((posts) => posts.id !== payload.postId);
    },
    openPostDetail: (state, { payload }) => {
      state.openPostDetail = true;
      state.currentPost = state.postList.find((posts) => posts.id === payload.postId);
    },
    closePostDetail: (state, { payload }) => {
      state.openPostDetail = false;
      state.postList = state.postList.map((post) =>
        post.id === payload.postId ? { ...post, readStatus: true } : post
      );
      state.currentPost = {};
    },
  },
});
export const { reducer, actions } = postSlice;

export const { addPost, dismissAllPosts, dismissPost, openPostDetail, closePostDetail } = actions;
