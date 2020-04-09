import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  currentPost: {},
  openPostDetail: false,
  currentChunk: null,
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
      state.postList[payload.chunk] = state.postList[payload.chunk].filter(
        (posts) => posts.id !== payload.postId
      );
    },
    openPostDetail: (state, { payload }) => {
      state.openPostDetail = true;
      state.currentPost = state.postList[payload.chunk].find(
        (posts) => posts.id === payload.postId
      );
      state.currentChunk = payload.chunk;
    },
    closePostDetail: (state, { payload }) => {
      state.openPostDetail = false;
      state.postList[payload.currentChunk] = state.postList[payload.currentChunk].map((post) =>
        post.id === payload.postId ? { ...post, readStatus: true } : post
      );
      state.currentPost = {};
    },
  },
});
export const { reducer, actions } = postSlice;

export const { addPost, dismissAllPosts, dismissPost, openPostDetail, closePostDetail } = actions;
