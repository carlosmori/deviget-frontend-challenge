/* eslint-disable no-undef */
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

export const fetchPosts = createAsyncThunk(
  'users/fetchPosts',
  async ({ afterReference, previousPosts }) => {
    const res = await fetch(
      `https://www.reddit.com/r/coronavirus/top.json?limit=${process.env.POST_PER_API_CALL}${
        afterReference ? '&after=' + afterReference : ''
      }`
    );
    let response = await res.json();
    return { data: response.data, previousPosts };
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      let topPosts = [];
      const { data, previousPosts } = payload;
      const postPerChunk = 6; // items per chunk
      // Normalize data
      topPosts = data.children.map((element) => {
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
      // Check before append more post
      if (previousPosts) {
        topPosts = [...previousPosts.flat(), ...topPosts];
      }

      // Split into chunks so pages know which posts to display
      const chunksPosts = topPosts.reduce((resultArray, post, index) => {
        const chunkIndex = Math.floor(index / postPerChunk);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(post);
        return resultArray;
      }, []);
      state.postList = chunksPosts;
      state.afterReference = data.after;
    });
  },
});
export const { reducer, actions } = postSlice;

export const { addPost, dismissAllPosts, dismissPost, openPostDetail, closePostDetail } = actions;
