import React from 'react';
import PostList from '../PostList/PostList.component';
import PostDetail from '../PostDetail/PostDetail.component';
import withLayout from '../../hocs/withLayout.component';
import styles from './App.module.scss';

export const App = () => (
  <div className="container">
    <h1 className={styles.appMainTitle}>Reddit Top Posts</h1>
    <PostList />
    <PostDetail />
  </div>
);

export default withLayout(App);
