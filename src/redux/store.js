import { configureStore as configStoreRKT } from '@reduxjs/toolkit';
import { reducer as postReducer } from './ducks/posts/reducers';

const configureStore = ({ initialState }) => {
  const store = configStoreRKT({
    reducer: { post: postReducer },
    preloadedState: initialState,
  });
  return store;
};

export default configureStore;
