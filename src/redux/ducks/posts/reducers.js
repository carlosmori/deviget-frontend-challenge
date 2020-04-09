import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'isomorphic-fetch';
import fromUnixTime from 'date-fns/fromUnixTime';
import differenceInHours from 'date-fns/differenceInHours';

const initialState = {
  postList: [],
  currentPost: {},
  openPostDetail: false,
  currentChunk: null,
};
export const fetchPosts = createAsyncThunk('users/fetchPosts', async () => {
  const res = await fetch(`http://www.reddit.com/r/coronavirus/top.json?limit=50`);
  let topPosts = await res.json();
  const postPerChunk = 6; // items per chunk
  topPosts = topPosts.data.children.map((element) => {
    const post = element.data;
    return {
      id: post.id,
      title: post.title,
      author: post.author_fullname,
      hours: differenceInHours(new Date(), fromUnixTime(post.created_utc)) + ' hours ago',
      thumbnailUrl: post.thumbnail,
      commentsCount: post.num_comments,
      readStatus: false,
    };
  });
  const chunksPosts = topPosts.reduce((resultArray, post, index) => {
    const chunkIndex = Math.floor(index / postPerChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(post);
    return resultArray;
  }, []);
  return { topPosts: chunksPosts };
});
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
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.postList = payload.topPosts;
    },
  },
});
export const { reducer, actions } = postSlice;

export const { addPost, dismissAllPosts, dismissPost, openPostDetail, closePostDetail } = actions;
